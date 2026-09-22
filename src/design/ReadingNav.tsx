import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import {
  StorylinePanel,
  storylineOrder,
  useActiveSlide,
  type Storyline,
} from '@/components/story/Storyline';

/**
 * The one way around a long page.
 *
 * Before this, a case study carried four wayfinding devices at once, and all
 * of them were answering the same question:
 *
 *   - a fifteen-rem bordered rail down the left, listing every chapter and
 *     every slide inside it, with its own collapse toggle and its own CSS
 *     gutter that the page had to reserve;
 *   - a floating bar pinned to the bottom of the viewport, listing the same
 *     chapter names again as pills;
 *   - on Layrrrd, a third sticky rail listing those same chapters a third
 *     time, with a second progress line of its own;
 *   - and a hairline progress bar across the top.
 *
 * Elsewhere on the site two more contents lists existed - one for the
 * data-driven case studies, one for the essays - which did the same job as
 * the rail in different markup, at a different breakpoint, with different
 * type. Six implementations of "where am I", no two alike, and on any given
 * case study at least two of them on screen simultaneously saying the same
 * words.
 *
 * This is the replacement, and every long page on the site now uses it: the
 * five case studies, the data-driven case-study route, and the essays.
 *
 * ---------------------------------------------------------------------
 * WHAT IT IS
 *
 * One device, in two presentations of the same list, at every width.
 *
 *   Control      A single small control at the foot of the viewport saying
 *                where you are and how far there is to go. One control, not
 *                a bar listing every chapter. Tapping it opens the full list.
 *
 *   Panel        The whole storyline, full screen, for a reader who has
 *                deliberately asked for it.
 *
 * There used to be a third: a contents list fixed in the left gutter on very
 * wide screens. It came out so the long read has no sidebar at any width
 * and the page is only the page.
 *
 * ---------------------------------------------------------------------
 * NAVIGATE, AND READ THROUGH
 *
 * Those are two different needs and they used to get two different pieces of
 * chrome. Here they are the same list.
 *
 * Navigating is the list itself: chapter names, the one you are in opened,
 * everything jumpable.
 *
 * Reading through is carried inside it rather than beside it. The progress
 * hairline says how far you are; the counter says it in numbers; and the
 * entry after the one you are on is labelled "Next", so the answer to "what
 * am I about to get" comes from the same component as "where am I" instead
 * of from a second bar at the bottom of the screen.
 */

/* ------------------------------------------------------------------ *
 * Progress
 * ------------------------------------------------------------------ */

/**
 * The hairline across the top of the page.
 *
 * Folded in here rather than left as a component each page remembers to
 * render, because three of the five case studies were showing two progress
 * indicators and Layrrrd was showing three. Progress is part of wayfinding,
 * so it belongs to the thing that owns wayfinding.
 *
 * Transform-only, behind requestAnimationFrame, so it costs nothing idle.
 */
const Progress = ({ marker }: { marker?: ReactNode }) => {
  const bar = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
      // The marker rides the head of the line rather than being positioned
      // from React state, so it costs the same as the bar itself.
      if (head.current) head.current.style.left = `${progress * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[55] h-0.5">
      <div
        ref={bar}
        className="h-full origin-left bg-[hsl(var(--accent))]"
        style={{ transform: 'scaleX(0)' }}
      />
      {/*
        An optional ornament at the head of the line.
        Layrrrd used to carry a whole second sticky rail whose only unique
        content was a progress line with the hound's paw on it. The paw was
        worth keeping and the rail was not, so the paw moved here: same
        character, one device instead of two.
      */}
      {marker && (
        <div ref={head} className="absolute top-0 -translate-x-1/2" style={{ left: '0%' }}>
          {marker}
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ *
 * The small control
 * ------------------------------------------------------------------ */

/**
 * One control, replacing the bar of chapter pills.
 *
 * The bar it replaces listed every chapter name across the foot of the
 * viewport, which is the left-hand rail again, horizontally, permanently on
 * top of the thing being read. This says the same three facts the rail's
 * heading said - what this is, which chapter, how far through - and opens
 * the full list on demand.
 */
const Trigger = ({
  chapterName,
  position,
  total,
  onOpen,
}: {
  chapterName: string | null;
  position: number;
  total: number;
  onOpen: () => void;
}) => (
  <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:bottom-6">
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      /* Right margin clears the back-to-top control. */
      className="panel pointer-events-auto flex max-w-full items-center gap-3 rounded-full py-2.5 pl-5 pr-4 shadow-lg backdrop-blur-md transition-colors hover:text-foreground md:mr-16"
    >
      <span className="truncate text-sm text-ink-600 md:text-base">
        {chapterName ?? 'Contents'}
      </span>
      <span className="label shrink-0 tabular-nums text-ink-400">
        {position}/{total}
      </span>
      <span aria-hidden="true" className="text-ink-400">
        &#9652;
      </span>
      <span className="sr-only">Open the contents</span>
    </button>
  </div>
);

/* ------------------------------------------------------------------ *
 * The component pages use
 * ------------------------------------------------------------------ */

export interface ReadingNavProps {
  /**
   * The page, as chapters of named sections. A page with no real chapters
   * passes a single unnamed one; see `sectionsToChapters`.
   */
  chapters: Storyline;
  /** Optional ornament riding the head of the progress line. */
  marker?: ReactNode;
}

export const ReadingNav = ({ chapters, marker }: ReadingNavProps) => {
  const order = useMemo(() => storylineOrder(chapters), [chapters]);
  const activeId = useActiveSlide(order);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  const position = activeId ? Math.max(order.indexOf(activeId) + 1, 1) : 1;
  const activeChapter = chapters.find((c) => c.slides.some((s) => s.id === activeId));

  // A page with nothing to list gets the progress hairline and no chrome.
  if (!order.length) return <Progress marker={marker} />;

  return (
    <>
      <Progress marker={marker} />
      <Trigger
        chapterName={activeChapter?.name ?? chapters[0]?.name ?? null}
        position={position}
        total={order.length}
        onOpen={() => setOpen(true)}
      />
      <StorylinePanel chapters={chapters} activeId={activeId} open={open} onClose={close} />
    </>
  );
};

/**
 * A flat list of sections as a single unnamed chapter.
 *
 * The essays and the data-driven case studies have headings rather than
 * chapters. They still get the same component, the same breakpoints and the
 * same panel; they simply have one group in the list instead of several.
 */
export const sectionsToChapters = (
  sections: { id: string; label: string }[],
  name = 'Contents'
): Storyline => [
  {
    n: '',
    name,
    slides: sections.map((s) => ({ id: s.id, title: s.label })),
  },
];

/** Re-exported so a page importing the nav does not also import the deck. */
export { jumpToSlide, type Storyline } from '@/components/story/Storyline';

/** Kept for callers that want the active id for their own purposes. */
export const useReadingPosition = (chapters: Storyline) => {
  const order = useMemo(() => storylineOrder(chapters), [chapters]);
  const activeId = useActiveSlide(order);
  const goTo = useCallback((id: string, event: MouseEvent) => {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', `#${id}`);
  }, []);

  return { activeId, order, goTo };
};
