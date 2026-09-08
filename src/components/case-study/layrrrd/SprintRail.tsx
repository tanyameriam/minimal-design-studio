import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { RudolfPaw } from './Rudolf';

export interface SprintChapter {
  /** Matches the `chapter` prop on the slides it covers. */
  n: string;
  name: string;
  /** Id of the slide that opens the chapter. */
  target: string;
}

/**
 * The sticky rail for the Layrrrd story: where you are in the five
 * chapters, and how far through the run you have got.
 *
 * The progress line is not decoration. The whole case study is an argument
 * about a nine-day sprint, so the reader should always be able to see how
 * much of it is behind them. His paw print sits at the head of the line and
 * moves with the scroll, which is also the cheapest possible reminder of whose
 * story this is.
 */
const SprintRail = ({
  chapters,
  onOpenStoryline,
}: {
  chapters: SprintChapter[];
  /** Opens the full slide-by-slide storyline, below the fixed rail's width. */
  onOpenStoryline?: () => void;
}) => {
  const [active, setActive] = useState(chapters[0]?.n ?? '');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'));
    if (!slides.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const chapter = (entry.target as HTMLElement).dataset.chapter;
          if (entry.isIntersecting && chapter) setActive(chapter);
        }
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  // Scroll progress, read once per frame so the rail never fights the page.
  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // The bar scrolls sideways on a phone, so keep the current chip in view.
  useEffect(() => {
    const chip = document.querySelector<HTMLElement>(`[data-rail-chip="${active}"]`);
    chip?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [active]);

  const goTo = (event: MouseEvent, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav
      aria-label="Chapters"
      className="sticky top-[4.5rem] z-40 border-b border-border bg-background/90 backdrop-blur-md md:top-[5rem]"
    >
      <div className="mx-auto flex w-full max-w-[var(--shell)] items-center gap-6 overflow-x-auto px-5 py-3.5 md:gap-10 md:px-8 lg:px-12">
        <span className="label hidden shrink-0 text-ink-500 lg:block">Day 1</span>
        {chapters.map((chapter) => {
          const current = active === chapter.n;
          return (
            <a
              key={chapter.n}
              href={`#${chapter.target}`}
              onClick={(event) => goTo(event, chapter.target)}
              data-rail-chip={chapter.n}
              aria-current={current ? 'true' : undefined}
              className={`label flex shrink-0 items-center gap-2.5 transition-colors duration-300 xl:hidden ${
                current ? 'text-foreground' : 'text-ink-400 hover:text-ink-600'
              }`}
            >
              <span className="tabular-nums">{chapter.n}</span>
              <span>{chapter.name}</span>
            </a>
          );
        })}
        {/* With the chips gone at xl, the two day markers have to hold the
            ends of the run themselves. */}
        <span className="label hidden shrink-0 text-ink-500 lg:block xl:ml-auto">
          Day 9 and after
        </span>

        {/* The chapters above are the coarse view. This opens the slide by
            slide storyline, which is a fixed rail once there is room for it. */}
        {onOpenStoryline && (
          <button
            type="button"
            onClick={onOpenStoryline}
            className="rule-link label ml-auto shrink-0 text-ink-500 xl:hidden"
          >
            Storyline
          </button>
        )}
      </div>

      {/* The run itself. Rudolf marks the head of the line. */}
      <div aria-hidden="true" className="relative h-px w-full bg-border">
        <div
          className="h-px bg-foreground transition-[width] duration-150 ease-linear"
          style={{ width: `${progress * 100}%` }}
        />
        <RudolfPaw
          className="absolute -top-[7px] h-3.5 w-auto -translate-x-1/2 text-foreground transition-[left] duration-150 ease-linear"
          style={{ left: `${progress * 100}%` }}
        />
      </div>
    </nav>
  );
};

export default SprintRail;
