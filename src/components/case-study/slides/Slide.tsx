import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/use-reveal';

/**
 * The slide skeleton for the BrynQ narrative.
 *
 * Every section on that page is a slide: one dominant message, room around
 * it, a hairline separating it from the next. The page still scrolls
 * normally, so the story can be skimmed at speed or read properly, but the
 * rhythm is deliberate rather than article-like.
 *
 * Typography, the ink scale, hairlines and the reveal idiom all come from
 * the rest of the portfolio. What changes here is the scale and the air.
 *
 * Inverted slides carry `.theme-invert` (see index.css): the tokens flip to
 * whichever palette the page is not currently on, so `border-border` and the
 * ink scale keep working without a second set of classes. It has to be
 * relative rather than hard-coded to light, because since the theme switch
 * landed the page underneath can be either one.
 */

export type SlideHeight = 'full' | 'tall' | 'short' | 'auto';

const heights: Record<SlideHeight, string> = {
  // A statement that should own the viewport.
  full: 'min-h-[88svh] md:min-h-[90svh]',
  // The default working slide.
  tall: 'min-h-[74svh] md:min-h-[80svh]',
  // Transitions and handoffs.
  short: 'min-h-[52svh] md:min-h-[60svh]',
  // Diagram-heavy slides that set their own height.
  auto: '',
};

interface SlideProps {
  id: string;
  /** Chapter this slide belongs to, e.g. '01'. Drives the sticky nav. */
  chapter?: string;
  height?: SlideHeight;
  /** Centres the slide content, for the pure statement beats. */
  center?: boolean;
  /** Flips against the page's palette. Reserved for the turns in the story. */
  invert?: boolean;
  className?: string;
  children: ReactNode;
}

export const Slide = ({
  id,
  chapter,
  height = 'tall',
  center = false,
  invert = false,
  className = '',
  children,
}: SlideProps) => {
  const ref = useReveal<HTMLDivElement>('-12% 0px');

  return (
    <section
      id={id}
      data-chapter={chapter}
      // scroll-mt clears the fixed site nav and the sticky chapter bar when
      // an anchor is jumped to, so a slide never opens under the chrome.
      className={`relative scroll-mt-[8.5rem] border-t border-border ${
        invert ? 'theme-invert bg-background text-foreground' : ''
      } ${className}`}
    >
      <div
        ref={ref}
        className={`reveal mx-auto flex w-full max-w-[var(--shell)] flex-col px-5 py-20 md:px-8 md:py-28 lg:px-12 ${
          heights[height]
        } ${center ? 'items-center justify-center text-center' : 'justify-center'}`}
      >
        {children}
      </div>
    </section>
  );
};

/**
 * Slide kicker: an optional number, the label, and a hairline to the edge.
 *
 * Set at full strength rather than in the metadata grey it used to share with
 * captions and years. This is the line that tells a reader what section they
 * have arrived at, and it was the faintest text on the slide.
 *
 * `n` is for chapter openers only. Repeating it on every slide inside a
 * chapter prints the same solid chip five slides in a row, which reads as
 * five new sections rather than one, and flattens the hierarchy the chapter
 * divider just established. Inside a chapter, pass the label alone and let
 * the divider and the storyline rail carry the number.
 */
export const Kicker = ({ n, label }: { n?: string; label: string }) => (
  <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-3 md:mb-14">
    {n && (
      <span className="label-strong shrink-0 rounded-md bg-foreground px-2.5 py-1.5 tabular-nums text-background">
        {n}
      </span>
    )}
    <span className="label-strong leading-[1.4]">{label}</span>
    {/* The rule only earns its place when the label leaves room for it. */}
    <span aria-hidden="true" className="hidden h-px min-w-8 flex-1 bg-border sm:block" />
  </div>
);

/**
 * The slide headline. This is the quick-scan layer: someone who reads only
 * these, in order, should get the whole story.
 */
export const Headline = ({
  children,
  size = 'default',
  level = 2,
}: {
  children: ReactNode;
  size?: 'default' | 'large';
  /**
   * Heading level. Pass 3 on a study whose slides sit under chapter dividers
   * that already own an h2, so the document outline nests instead of running
   * flat. Defaults to 2 for studies with no chapter heading above the slide.
   */
  level?: 2 | 3;
}) => {
  const Tag = level === 3 ? 'h3' : 'h2';
  return (
    <Tag
      className={
        size === 'large'
          ? 'max-w-[22ch] text-[2.5rem] leading-[1.02] md:text-[4.25rem]'
          : 'max-w-[26ch] text-[2rem] leading-[1.05] md:text-[3.25rem]'
      }
    >
      {children}
    </Tag>
  );
};

/** Supporting copy. The deep-read layer, never the scan layer. */
export const Lede = ({ children, wide = false }: { children: ReactNode; wide?: boolean }) => (
  <p
    className={`mt-7 text-base leading-[1.6] text-ink-600 md:mt-9 md:text-lg ${
      wide ? 'max-w-3xl' : 'max-w-2xl'
    }`}
  >
    {children}
  </p>
);

/** A large typographic moment. Used sparingly, for the turns in the story. */
export const Statement = ({ children }: { children: ReactNode }) => (
  <p className="mt-14 max-w-[20ch] text-[2.25rem] leading-[1.05] md:mt-20 md:text-[4rem]">
    {children}
  </p>
);

/**
 * The two voices the case study keeps alternating between. `mine` is the
 * designer's read, `business` is what it meant commercially. Distinct
 * treatments, so a scanner can tell them apart without reading them.
 *
 * `business` is the loudest block on its slide, and it used to be the
 * quietest: a hairline box with copy set smaller and greyer than everything
 * around it. That had the emphasis exactly backwards. This is the answer to
 * "why is this worth solving at all", which is the root the rest of the case
 * study grows from, so it inverts against the page and takes the largest
 * type in the section.
 *
 * Both run the full width of whatever holds them, so the asides share one
 * edge with the slide rather than each stopping somewhere different. The cap
 * is on the paragraph instead: the card is a full-width band, the line length
 * inside it stays readable. Two of these sit inside narrow grid columns
 * rather than at slide level, which is why the width lives on the text and
 * not on a breakpoint, and why there is no two-column label treatment here.
 */
export const Pov = ({ kind, children }: { kind: 'mine' | 'business'; children: ReactNode }) =>
  kind === 'mine' ? (
    <div className="panel mt-10 border-l-4 border-l-foreground p-5 md:mt-14 md:p-6 lg:p-8">
      <p className="label mb-3 text-ink-500">My read</p>
      <p className="max-w-[72ch] text-lg leading-[1.45] md:text-2xl">{children}</p>
    </div>
  ) : (
    <div className="theme-invert panel mt-10 bg-card p-6 md:mt-14 md:p-8 lg:p-10">
      <p className="label mb-4 text-accent">Why it mattered to the business</p>
      <p className="max-w-[72ch] text-xl leading-[1.35] text-foreground md:text-[1.625rem]">
        {children}
      </p>
    </div>
  );

/**
 * Evidence label. The case study mixes what was observed, where the product
 * is heading, and arithmetic built on top of those. Every number carries one
 * of these, so the three never get read as the same kind of claim.
 */
export type EvidenceKind = 'observed' | 'direction' | 'illustrative';

const evidenceCopy: Record<EvidenceKind, string> = {
  observed: 'Observed',
  direction: 'Current direction',
  illustrative: 'Illustrative',
};

export const Evidence = ({ kind }: { kind: EvidenceKind }) => (
  <span
    className={`label inline-block px-2 py-1 ${
      kind === 'observed'
        ? 'border border-border text-ink-500'
        : 'border border-dashed border-border text-ink-400'
    }`}
  >
    {evidenceCopy[kind]}
  </span>
);

/** Source lines, disclaimers, and the arithmetic behind a figure. */
export const Footnote = ({ children }: { children: ReactNode }) => (
  <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-400">{children}</p>
);

/**
 * A slot for artwork that is not in the repo yet.
 *
 * PLACEHOLDER: every one of these is a hole to fill. Search the page for
 * `<ArtSlot` to find them all. Replace with an <img src={...} alt={...} />
 * or a real illustration when the asset exists. The dashed frame is
 * deliberately visible so an unfilled slot cannot ship unnoticed.
 */
export const ArtSlot = ({
  label,
  note,
  ratio = 'aspect-[4/3]',
  children,
}: {
  label: string;
  note?: string;
  ratio?: string;
  children?: ReactNode;
}) => (
  <figure
    className={`relative flex flex-col justify-center overflow-hidden rounded-[var(--radius)] border border-dashed border-ink-400/40 bg-muted/60 ${ratio}`}
  >
    <div className="flex flex-1 items-center justify-center p-6 text-ink-500 md:p-8">
      {children ?? <span className="label text-ink-500">Screenshot to come</span>}
    </div>
    <figcaption className="label border-t border-dashed border-ink-400/40 px-4 py-2.5 text-ink-500">
      Placeholder · {label}
      {note ? ` · ${note}` : ''}
    </figcaption>
  </figure>
);

/**
 * The way into the fast version, and an honest reading estimate.
 *
 * These pages are long on purpose: a design lead reading properly wants the
 * research, the alternatives and the failure cases. But a recruiter opening
 * the same URL should be told, in the hero, that there is a two-minute
 * version and roughly what the full read costs, rather than discovering the
 * length by scrolling.
 */
export const CaseStudyEntry = ({
  storyHref,
  storyMinutes = 2,
  scanMinutes,
  readMinutes,
}: {
  storyHref?: string;
  storyMinutes?: number;
  /** Headlines and numbers only. */
  scanMinutes: number;
  /** Every word on the page. */
  readMinutes: number;
}) => (
  <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
    {storyHref && (
      <Link to={storyHref} className="rule-link group text-lg md:text-xl">
        View the {storyMinutes}-minute story{' '}
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-500 ease-smooth group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </Link>
    )}
    <p className="label text-ink-500">
      {scanMinutes} min to scan &middot; {readMinutes} min to read in full
    </p>
  </div>
);
