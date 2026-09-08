import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  StorylineList,
  type Storyline,
  type StorylineChapter,
} from '@/components/story/Storyline';

export interface DeckSlide {
  id: string;
  /**
   * The slide in a handful of words. This is what the storyline rail shows,
   * so the list of them, read in order, has to carry the whole argument.
   */
  title: string;
  /** Chapter this slide belongs to. Consecutive matches group together. */
  chapter: string;
  render: () => ReactNode;
}

/** Consecutive slides sharing a chapter name become one numbered chapter. */
const toStoryline = (slides: DeckSlide[]): Storyline => {
  const chapters: StorylineChapter[] = [];
  for (const slide of slides) {
    const last = chapters[chapters.length - 1];
    if (last && last.name === slide.chapter) {
      last.slides.push({ id: slide.id, title: slide.title });
    } else {
      chapters.push({
        n: String(chapters.length + 1).padStart(2, '0'),
        name: slide.chapter,
        slides: [{ id: slide.id, title: slide.title }],
      });
    }
  }
  return chapters;
};

/**
 * Remounts per slide; fades the content in using the site's reveal idiom.
 *
 * The opening slide is exempt. Fading it in meant the deck's first painted
 * frame was empty, which read as a blank screen on top of the chunk load
 * rather than as an entrance.
 */
const SlideReveal = ({ children, immediate }: { children: ReactNode; immediate?: boolean }) => {
  const [shown, setShown] = useState(Boolean(immediate));
  useEffect(() => {
    if (immediate) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [immediate]);
  return (
    <div className="reveal min-h-full" data-shown={shown}>
      {children}
    </div>
  );
};

interface DeckProps {
  /** Header label, e.g. "Layrrrd · Validated in nine days". */
  label: string;
  /** Where Exit goes: usually the long-form case study. */
  exitHref: string;
  slides: DeckSlide[];
}

/**
 * The story-deck chrome shared by every deck: the storyline rail, keyboard,
 * swipe and button navigation, fullscreen, and the progress hairline.
 * Slides carry each deck's own visual strategy.
 *
 * The rail is the deck's answer to the problem a linear deck always has:
 * the reader is one slide deep with no idea how long the story is, what it
 * covers, or whether the part they care about is still coming. It names
 * every slide, marks the one after this one, and jumps.
 */
const Deck = ({ label, exitHref, slides }: DeckProps) => {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const deckRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const total = slides.length;
  const navigate = useNavigate();

  const storyline = useMemo(() => toStoryline(slides), [slides]);

  /**
   * Close the overlay: back to wherever the deck was opened from. On a
   * direct visit there is no in-app history to return to, so the exit
   * falls through to the case study the deck belongs to.
   */
  const exit = useCallback(() => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) {
      navigate(-1);
    } else {
      navigate(exitHref);
    }
  }, [navigate, exitHref]);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => Math.min(total - 1, Math.max(0, i + delta)));
      scrollRef.current?.scrollTo({ top: 0 });
    },
    [total],
  );

  const goTo = useCallback((id: string) => {
    setSheetOpen(false);
    setIndex(slides.findIndex((slide) => slide.id === id));
    scrollRef.current?.scrollTo({ top: 0 });
  }, [slides]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // In fullscreen the browser consumes Escape to leave fullscreen;
        // closing the whole overlay on the same press would be two exits
        // for one key.
        if (document.fullscreenElement) return;
        if (sheetOpen) {
          setSheetOpen(false);
        } else {
          exit();
        }
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') go(1);
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(-1);
      if (e.key === 'Home') go(-total);
      if (e.key === 'End') go(total);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, total, sheetOpen, exit]);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void deckRef.current?.requestFullscreen?.();
    }
  }, []);

  const slide = slides[index];
  const upcoming = index < total - 1 ? slides[index + 1] : null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* The previous screen stays a click away: the rim of backdrop around
          the deck closes it, the same move Escape makes. */}
      <div
        aria-hidden="true"
        onClick={exit}
        className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]"
      />

      <div
        ref={deckRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="deck-pop light absolute inset-0 flex flex-col overflow-hidden bg-background text-foreground md:inset-4 md:rounded-[var(--radius)] md:border md:border-border md:shadow-2xl lg:inset-6"
      >
      {/* Deck chrome: title, storyline, fullscreen, exit. */}
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-8">
        <span className="label truncate text-ink-800">{label}</span>
        <div className="flex shrink-0 items-center gap-5">
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            aria-expanded={sheetOpen}
            className="rule-link label text-ink-500 lg:hidden"
          >
            Storyline
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="rule-link label hidden text-ink-500 sm:block"
          >
            {fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          </button>
          {/* The way out of the short version and into the long one. It is
              the only control here set in full contrast, and it is the only
              one that survives a phone width: a reader who wants the depth
              should never have to reach the last slide to find the door. */}
          <Link to={exitHref} className="rule-link label text-foreground">
            <span className="hidden sm:inline">Read the full case study</span>
            <span className="sm:hidden">Full case study</span>{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <button type="button" onClick={exit} aria-keyshortcuts="Escape" className="rule-link label text-ink-500">
            Close <span aria-hidden="true" className="hidden md:inline">· Esc</span>
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* The storyline, always in view where the width allows. */}
        <nav
          aria-label="Storyline"
          className="hidden w-[15rem] shrink-0 flex-col border-r border-border lg:flex"
        >
          <div className="flex shrink-0 items-baseline justify-between gap-3 border-b border-border px-4 py-3.5">
            <span className="label text-ink-500">Storyline</span>
            <span className="label tabular-nums text-ink-500">
              {index + 1} / {total}
            </span>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto pb-8">
            <StorylineList
              chapters={storyline}
              activeId={slide.id}
              hrefFor={() => '#'}
              onSelect={(id, event) => {
                event.preventDefault();
                goTo(id);
              }}
            />
          </div>
        </nav>

        {/* Slide area. Tall slides scroll inside it; the page never does. */}
        <div className="relative min-w-0 flex-1">
          <div
            ref={scrollRef}
            className="absolute inset-0 overflow-y-auto overflow-x-clip"
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
            }}
          >
            <section
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${total}: ${slide.title}`}
              className="min-h-full"
            >
              <SlideReveal immediate={index === 0}>
                <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 py-12 md:px-12 md:py-16">
                  {slide.render()}
                </div>
              </SlideReveal>
            </section>
          </div>

          {/* Edge arrows, anchored to the slide area rather than the window,
              so they never sit on top of the rail. Touch users swipe. */}
          {index > 0 && (
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-border bg-background text-lg text-ink-600 transition-colors hover:border-foreground hover:text-foreground md:flex"
            >
              &larr;
            </button>
          )}
          {index < total - 1 && (
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-border bg-background text-lg text-ink-600 transition-colors hover:border-foreground hover:text-foreground md:flex"
            >
              &rarr;
            </button>
          )}
        </div>
      </div>

      {/* Progress: hairline fill, what is coming, counter. */}
      <footer className="shrink-0 border-t border-border px-5 py-4 md:px-8">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Touch screens get real buttons rather than only a swipe: a
              gesture with no visible control is not an affordance. */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index === 0}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center border border-border text-ink-600 disabled:opacity-30"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === total - 1}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center border border-border text-ink-600 disabled:opacity-30"
            >
              &rarr;
            </button>
          </div>

          <span className="label hidden shrink-0 text-ink-500 md:block">&larr; &rarr; or swipe</span>

          <div className="h-px flex-1 bg-border">
            <div
              className="h-px bg-foreground transition-all duration-500 ease-smooth"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>

          {/* What the next slide is about, so the reader is never asked to
              advance blind. */}
          {/* What the next slide is about, and at the end of the deck the
              continuation itself rather than a full stop. */}
          {upcoming ? (
            <span className="label hidden min-w-0 max-w-[22rem] shrink truncate text-ink-500 md:block">
              Next: {upcoming.title}
            </span>
          ) : (
            <Link
              to={exitHref}
              className="rule-link label hidden shrink-0 text-foreground md:block"
            >
              End of the story. Read the full case study <span aria-hidden="true">&rarr;</span>
            </Link>
          )}

          <span className="label shrink-0 tabular-nums text-ink-500">
            {index + 1} / {total}
          </span>
        </div>
      </footer>

      {/* The same storyline as a panel, for widths with no room for the rail. */}
      {sheetOpen && (
        <div className="absolute inset-0 z-[60] flex flex-col bg-background">
          <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4 md:px-8">
            <span className="label text-ink-500">Storyline</span>
            <button
              type="button"
              onClick={() => setSheetOpen(false)}
              className="rule-link label"
            >
              Close
            </button>
          </div>
          <nav aria-label="Storyline" className="min-h-0 flex-1 overflow-y-auto pb-12">
            <div className="mx-auto w-full max-w-3xl">
              <StorylineList
                chapters={storyline}
                activeId={slide.id}
                size="sheet"
                hrefFor={() => '#'}
                onSelect={(id, event) => {
                  event.preventDefault();
                  goTo(id);
                }}
              />

              <div className="mt-10 border-t border-border px-6 pt-6 md:px-8">
                <Link to={exitHref} className="rule-link text-lg text-foreground">
                  Read the full case study <span aria-hidden="true">&rarr;</span>
                </Link>
                <p className="label mt-2 text-ink-500">
                  The long version, with the research and the detail
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
      </div>
    </div>
  );
};

export default Deck;
