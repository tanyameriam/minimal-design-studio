import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

/**
 * The storyline: every slide in a case study, named, grouped into chapters.
 *
 * Both narrative surfaces read from one of these. The scroll case studies
 * render it as a fixed rail down the left of the page; the story decks
 * render the same structure beside the slide. Either way the reader can see
 * the whole argument before committing to it, knows which beat is coming
 * next, and can jump straight to any of them.
 *
 * The titles are the scan layer. Read top to bottom on their own they
 * should tell the story, in the same way the slide headlines do.
 */

export interface StorylineSlide {
  /** Matches the slide's DOM id (scroll pages) or DeckSlide id (decks). */
  id: string;
  /** Short enough for a 15rem column. Two lines at most. */
  title: string;
}

export interface StorylineChapter {
  /** Chapter number, e.g. '01'. */
  n: string;
  name: string;
  /** Id of the divider slide that opens the chapter, where there is one. */
  target?: string;
  slides: StorylineSlide[];
}

export type Storyline = StorylineChapter[];

/** Every slide id in reading order, chapters flattened away. */
export const storylineOrder = (chapters: Storyline): string[] =>
  chapters.flatMap((chapter) => chapter.slides.map((slide) => slide.id));

/** The slide after `id`, or null at the end of the story. */
export const nextSlide = (chapters: Storyline, id: string | null): StorylineSlide | null => {
  const flat = chapters.flatMap((chapter) => chapter.slides);
  const i = flat.findIndex((slide) => slide.id === id);
  return i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
};

/**
 * Which slide the reader is on, for a scrolling page.
 *
 * A band across the middle of the viewport decides, the same rule the
 * chapter bar used before this: whichever slide crosses it is current. The
 * observer is rebuilt when the id list changes, never on scroll.
 */
export const useActiveSlide = (ids: string[]): string | null => {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);
  const key = ids.join('|');

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // `key` stands in for the id list; the array identity changes every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
};

/** Scrolls a slide into view and records it in the address bar. */
export const jumpToSlide = (id: string, event: MouseEvent) => {
  const el = document.getElementById(id);
  if (!el) return;
  event.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  history.replaceState(null, '', `#${id}`);
};

interface StorylineListProps {
  chapters: Storyline;
  /** Id of the slide being read. */
  activeId: string | null;
  /** Anchor href per slide. Decks pass nothing and handle onSelect instead. */
  hrefFor?: (id: string) => string;
  onSelect?: (id: string, event: MouseEvent) => void;
  /** Larger type for the sheet, where there is room. */
  size?: 'rail' | 'sheet';
  /**
   * Show slide titles only for the chapter being read.
   *
   * Set on the fixed rail, and deliberately not on the panel or the sheet.
   * A reader who has deliberately opened the whole storyline wants the whole
   * storyline; a reader who is reading the page wants to know where they
   * are. Those are different questions and they had been getting the same
   * eighteen-line answer.
   */
  focus?: boolean;
}

/**
 * The list itself: chapters as hairline-separated groups, slides numbered
 * through the whole story rather than restarting each chapter, so the
 * numbers match the deck counter and give a sense of remaining length.
 *
 * Three states carry the timeline without any decoration beyond the ink
 * scale: read, current, still to come. The one after the current slide is
 * labelled, because "what am I about to get" is the question a rail like
 * this is really answering.
 *
 * In `focus` mode a chapter that is not being read collapses to its name and
 * a count. This is the fix for the rail reading as the page again in a
 * narrower column: on the longest study it takes the rail from forty-odd
 * lines of slide titles - most of them headings the reader is about to meet
 * anyway, a few inches to the left - down to three chapter names and the
 * handful of beats in the one they are actually in.
 */
export const StorylineList = ({
  chapters,
  activeId,
  hrefFor,
  onSelect,
  size = 'rail',
  focus = false,
}: StorylineListProps) => {
  const order = useMemo(() => storylineOrder(chapters), [chapters]);
  const activeIndex = activeId ? order.indexOf(activeId) : -1;
  const listRef = useRef<HTMLDivElement>(null);

  // The rail is taller than the viewport on the longer stories. Keep the
  // current entry visible without moving the page underneath it.
  useEffect(() => {
    if (!activeId) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-storyline-item="${activeId}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeId]);

  // Which chapter the reader is in. In focus mode it is the only one that
  // shows its slides; everywhere else it is just used for emphasis.
  const openChapter = chapters.find((chapter) =>
    chapter.slides.some((slide) => slide.id === activeId)
  );

  let index = -1;

  return (
    <div ref={listRef} className="flex flex-col">
      {chapters.map((chapter) => {
        // With no active slide yet - the top of a page, before the observer
        // has fired - the first chapter opens, so the rail is never a list of
        // names with nothing under any of them.
        const isOpen =
          !focus || (openChapter ? chapter === openChapter : chapter === chapters[0]);
        const label = (
          <>
            <span className="tabular-nums">{chapter.n}</span>
            <span className="ml-2.5">{chapter.name}</span>
          </>
        );

        return (
        <div key={chapter.n} className="border-t border-border first:border-t-0">
          {/* The chapter name jumps to its divider slide where the story
              has one; otherwise it is a heading and nothing more.

              In focus mode the chapter being read is set in the foreground:
              with most of the slide titles gone, the chapter name is now the
              rail's primary line rather than a divider above one. */}
          {/* An unnamed chapter is a flat list of sections - an essay, or a
              data-driven study - so it renders no heading at all rather than
              an empty line above its own contents. */}
          {!chapter.name && !chapter.n ? null : chapter.target ? (
            <a
              href={hrefFor ? hrefFor(chapter.target) : `#${chapter.target}`}
              onClick={(event) => onSelect?.(chapter.target as string, event)}
              /* No aria-current here. The chapter being read is always the
                 open one, and the slide inside it already carries it; two
                 current items in one nav is an ambiguity, not extra help. */
              className={`label block px-4 pb-2.5 pt-4 transition-colors hover:text-foreground ${
                size === 'sheet' ? 'md:px-6' : ''
              } ${focus && isOpen ? 'text-foreground' : 'text-ink-500'}`}
            >
              {label}
            </a>
          ) : (
            <p
              className={`label px-4 pb-2.5 pt-4 ${size === 'sheet' ? 'md:px-6' : ''} ${
                focus && isOpen ? 'text-foreground' : 'text-ink-400'
              }`}
            >
              {label}
            </p>
          )}

          {/*
            A closed chapter says how long it is and stops. That is the
            question a collapsed chapter has to answer - how much is in
            there, should I jump - and it takes one line rather than seven.
          */}
          {!isOpen && (
            <p className={`label pb-3 pl-4 pr-4 text-ink-400 ${size === 'sheet' ? 'md:pl-6' : ''}`}>
              {chapter.slides.length} {chapter.slides.length === 1 ? 'part' : 'parts'}
            </p>
          )}

          <ol className={isOpen ? undefined : 'hidden'}>
            {chapter.slides.map((slide) => {
              index += 1;
              const position = index;
              const current = slide.id === activeId;
              const read = activeIndex >= 0 && position < activeIndex;
              const upcoming = activeIndex >= 0 && position === activeIndex + 1;

              return (
                <li key={slide.id}>
                  <a
                    href={hrefFor ? hrefFor(slide.id) : `#${slide.id}`}
                    data-storyline-item={slide.id}
                    aria-current={current ? 'true' : undefined}
                    onClick={(event) => onSelect?.(slide.id, event)}
                    className={`group flex gap-3 py-1.5 pl-4 pr-4 transition-colors duration-300 ${
                      size === 'sheet' ? 'md:pl-6 md:pr-6' : ''
                    } ${
                      current
                        ? 'text-foreground'
                        : read
                          ? 'text-ink-500 hover:text-foreground'
                          : 'text-ink-400 hover:text-foreground'
                    }`}
                  >
                    {/* The tick is the position marker: inked for the slide
                        you are on, faint for the ones behind you. */}
                    <span
                      aria-hidden="true"
                      className={`mt-2 h-px shrink-0 transition-all duration-500 ease-smooth ${
                        current
                          ? 'w-4 bg-foreground'
                          : read
                            ? 'w-2.5 bg-ink-400'
                            : 'w-2.5 bg-border group-hover:bg-ink-400'
                      }`}
                    />
                    <span className="min-w-0">
                      <span
                        className={`block leading-[1.3] ${
                          size === 'sheet' ? 'text-[0.95rem] md:text-base' : 'text-[0.8125rem]'
                        }`}
                      >
                        {slide.title}
                      </span>
                      {upcoming && (
                        <span className="label mt-1 block text-ink-500">Next</span>
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
        );
      })}
    </div>
  );
};

/** The rail heading: what this column is, how far through you are, and the collapse. */
const RailHeading = ({
  position,
  total,
  collapsed,
  onToggle,
}: {
  position: number;
  total: number;
  collapsed: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`flex shrink-0 items-center gap-3 border-b border-border py-4 ${
      collapsed ? 'justify-center px-2' : 'justify-between px-4'
    }`}
  >
    {!collapsed && (
      <>
        <span className="label text-ink-500">Storyline</span>
        <span className="label tabular-nums text-ink-500">
          {position} / {total}
        </span>
      </>
    )}

    <button
      type="button"
      onClick={onToggle}
      aria-expanded={!collapsed}
      aria-label={collapsed ? 'Expand the storyline' : 'Collapse the storyline'}
      title={collapsed ? 'Expand the storyline' : 'Collapse the storyline'}
      className="panel-chip grid h-8 w-8 shrink-0 place-items-center text-ink-500 transition-colors hover:text-foreground"
    >
      <span aria-hidden="true" className="text-base leading-none">
        {collapsed ? '\u00BB' : '\u00AB'}
      </span>
    </button>
  </div>
);

/*
 * StorylineRail and StorylineChapterBar used to live here: a fifteen-rem
 * bordered rail down the left of a case study, and a floating bar of chapter
 * pills across the foot of the viewport. Every case study rendered both, so
 * the same chapter names were on screen twice, and the rail additionally
 * reserved a gutter the page had to pad for.
 *
 * Both are gone. src/design/ReadingNav.tsx is the one navigation now, and it
 * reuses StorylineList and StorylinePanel below, which were always the parts
 * doing the real work.
 */

/**
 * The storyline as a full-screen panel, for every width below the rail's.
 *
 * Opened from whichever bar the page uses: the standard chapter bar, or
 * a project's own sticky chrome (Layrrrd keeps its sprint progress line and
 * puts the trigger in there).
 */
export const StorylinePanel = ({
  chapters,
  activeId,
  open,
  onClose,
}: {
  chapters: Storyline;
  activeId: string | null;
  open: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-background">
      <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4 md:px-8">
        <span className="label text-ink-500">Storyline</span>
        <button type="button" onClick={onClose} className="rule-link label">
          Close
        </button>
      </div>
      <nav aria-label="Storyline" className="min-h-0 flex-1 overflow-y-auto pb-12">
        <div className="mx-auto w-full max-w-3xl">
          <StorylineList
            chapters={chapters}
            activeId={activeId}
            size="sheet"
            onSelect={(id, event) => {
              event.preventDefault();
              onClose();
              // The overlay unmounts and the body unlocks on the same tick;
              // jump after that, or the target is measured behind a lock.
              requestAnimationFrame(() => {
                const el = document.getElementById(id);
                const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                el?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
                history.replaceState(null, '', `#${id}`);
              });
            }}
          />
        </div>
      </nav>
    </div>
  );
};
