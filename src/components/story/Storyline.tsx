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
 */
export const StorylineList = ({
  chapters,
  activeId,
  hrefFor,
  onSelect,
  size = 'rail',
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

  let index = -1;

  return (
    <div ref={listRef} className="flex flex-col">
      {chapters.map((chapter) => (
        <div key={chapter.n} className="border-t border-border first:border-t-0">
          {/* The chapter name jumps to its divider slide where the story
              has one; otherwise it is a heading and nothing more. */}
          {chapter.target ? (
            <a
              href={hrefFor ? hrefFor(chapter.target) : `#${chapter.target}`}
              onClick={(event) => onSelect?.(chapter.target as string, event)}
              className={`label block px-4 pb-2.5 pt-4 text-ink-500 transition-colors hover:text-foreground ${
                size === 'sheet' ? 'md:px-6' : ''
              }`}
            >
              <span className="tabular-nums">{chapter.n}</span>
              <span className="ml-2.5">{chapter.name}</span>
            </a>
          ) : (
            <p
              className={`label px-4 pb-2.5 pt-4 text-ink-400 ${
                size === 'sheet' ? 'md:px-6' : ''
              }`}
            >
              <span className="tabular-nums">{chapter.n}</span>
              <span className="ml-2.5">{chapter.name}</span>
            </p>
          )}

          <ol>
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
      ))}
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

const RAIL_STORAGE_KEY = 'storyline-rail-collapsed';
const RAIL_WIDTH = { open: '15rem', collapsed: '3.5rem' };

/**
 * The fixed rail, for the scrolling case studies.
 *
 * Only appears where there is width to spare for it. Under that the same
 * storyline is reached through <StorylinePanel />, so the feature is never
 * desktop-only.
 *
 * It collapses to a spine of chapter numbers. A long case study is read at
 * least partly for its images, and on a 1280px screen fifteen rems of
 * permanent chrome is a real bite out of them; collapsed, the rail still
 * says which chapter you are in and still jumps, in a fraction of the width.
 * The choice is remembered, because someone who wants the room back wants it
 * back on the next case study too.
 */
export const StorylineRail = ({
  chapters,
  activeId,
}: {
  chapters: Storyline;
  activeId: string | null;
}) => {
  const order = storylineOrder(chapters);
  const position = activeId ? order.indexOf(activeId) + 1 : 1;
  const activeChapter = chapters.find((c) => c.slides.some((sl) => sl.id === activeId));

  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem(RAIL_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // The page beside the rail reads --rail-w, so the reflow happens in CSS
  // rather than every case study tracking this state for itself.
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--rail-w',
      collapsed ? RAIL_WIDTH.collapsed : RAIL_WIDTH.open
    );
    return () => {
      document.documentElement.style.removeProperty('--rail-w');
    };
  }, [collapsed]);

  const toggle = useCallback(() => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(RAIL_STORAGE_KEY, String(next));
      } catch {
        // Not remembered, but the session still honours it.
      }
      return next;
    });
  }, []);

  return (
    <nav
      aria-label="Storyline"
      style={{ width: collapsed ? RAIL_WIDTH.collapsed : RAIL_WIDTH.open }}
      className="fixed bottom-0 left-0 top-[4.5rem] z-40 hidden flex-col border-r border-border bg-background transition-[width] duration-300 ease-smooth md:top-[5rem] xl:flex"
    >
      <RailHeading
        position={Math.max(position, 1)}
        total={order.length}
        collapsed={collapsed}
        onToggle={toggle}
      />

      <div className="min-h-0 flex-1 overflow-y-auto pb-8">
        {collapsed ? (
          // The spine: one number per chapter, the current one filled.
          <ol className="flex flex-col items-center gap-1.5 pt-3">
            {chapters.map((chapter) => {
              const target = chapter.slides[0]?.id;
              const isActive = chapter === activeChapter;

              return (
                <li key={chapter.n}>
                  <a
                    href={target ? `#${target}` : undefined}
                    onClick={(event) => target && jumpToSlide(target, event)}
                    title={chapter.name}
                    aria-current={isActive ? 'true' : undefined}
                    className={`label grid h-9 w-9 place-items-center rounded-md tabular-nums transition-colors ${
                      isActive
                        ? 'bg-foreground text-background'
                        : 'text-ink-400 hover:text-foreground'
                    }`}
                  >
                    {chapter.n}
                  </a>
                </li>
              );
            })}
          </ol>
        ) : (
          <StorylineList chapters={chapters} activeId={activeId} onSelect={jumpToSlide} />
        )}
      </div>
    </nav>
  );
};

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

/**
 * The sticky row that stands in for the rail below its breakpoint.
 *
 * It is also the upfront promise: visible from the first screen, it names
 * the chapter and the slide you are on, says how many there are in total,
 * and opens the whole list.
 */
export const StorylineChapterBar = ({
  chapters,
  activeId,
}: {
  chapters: Storyline;
  activeId: string | null;
}) => {
  const activeChapter = chapters.find((c) => c.slides.some((s) => s.id === activeId));

  if (!chapters.length) return null;

  return (
    <nav
      aria-label="Chapters"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:bottom-6"
    >
      {/*
        The bar is only as wide as its chapters and scrolls inside itself on a
        narrow screen, so it never becomes a full-width slab pinned over the
        reading column. Right padding clears the back-to-top control.
      */}
      <div className="panel pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full p-1.5 shadow-lg backdrop-blur-md md:mr-16">
        {chapters.map((chapter) => {
          const target = chapter.slides[0]?.id;
          const isActive = chapter === activeChapter;

          return (
            <a
              key={chapter.n}
              href={target ? `#${target}` : undefined}
              aria-current={isActive ? 'true' : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors duration-300 ease-smooth md:text-base ${
                isActive
                  ? 'bg-foreground text-background'
                  : 'text-ink-600 hover:text-foreground'
              }`}
            >
              {chapter.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

/**
 * Everything a scrolling case study needs: the rail where it fits, the bar
 * and panel where it does not, and the active-slide tracking behind all of
 * them.
 */
export const StorylineNav = ({ chapters }: { chapters: Storyline }) => {
  const order = useMemo(() => storylineOrder(chapters), [chapters]);
  const activeId = useActiveSlide(order);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <StorylineRail chapters={chapters} activeId={activeId} />
      <StorylineChapterBar chapters={chapters} activeId={activeId} />
      <StorylinePanel chapters={chapters} activeId={activeId} open={open} onClose={close} />
    </>
  );
};
