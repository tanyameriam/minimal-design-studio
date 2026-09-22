import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/use-reveal';

/**
 * The reading primitives, shared by every long page on the site.
 *
 * The clearest piece of feedback this portfolio has had is that the writing
 * section reads calmer than the case studies. That is not a matter of taste
 * and it is not because the essays are shorter. It is because the essays
 * were built out of five components - a measure, a section with a hairline,
 * a paragraph, a figure, and one pull quote - and the case studies were
 * built out of whatever each page needed that day.
 *
 * So the essay's construction is lifted out of src/components/writing and
 * put here, where a case study can use it too. Nothing below is new. It is
 * the article page's own recipe, named, so that "make this read like the
 * writing section" is a code change rather than an instruction.
 *
 * See src/design/system.ts for the roles these classes correspond to, and
 * /design-system for them set on a page.
 */

/* ------------------------------------------------------------------ *
 * The column
 * ------------------------------------------------------------------ */

/**
 * The measure. 62 to 72 characters at this type scale.
 *
 * This is the single highest-leverage control the site has over feeling
 * texty, because a paragraph's difficulty is set by its line length far more
 * than by its word count. The same 400 words at 110 characters a line read
 * as a wall and at 66 read as a page.
 */
export const Column = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`mx-auto w-full max-w-2xl ${className}`}>{children}</div>;

/* ------------------------------------------------------------------ *
 * Sections
 * ------------------------------------------------------------------ */

interface SectionProps {
  id?: string;
  /** The line a reader arrives at. One per section, never two. */
  heading: string;
  /** Optional single sentence carrying the section's claim. */
  lede?: string;
  children: ReactNode;
  className?: string;
}

/**
 * A section of a long read: a hairline, a heading, an optional lede, the body.
 *
 * The hairline is doing real work. It is the quietest available way to say
 * "a new argument starts here", and it is quiet enough that a page can have
 * fifteen of them without the page looking ruled. A panel in the same
 * position would read as a card, which is an instruction to take the section
 * in at a glance - the opposite of what a section of prose wants.
 *
 * `scroll-mt` clears the fixed navigation when the section is reached by
 * anchor, so a heading never lands underneath the bar.
 */
export const Section = ({ id, heading, lede, children, className = '' }: SectionProps) => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className={`reveal mt-stage scroll-mt-28 border-t border-border pt-8 md:pt-10 ${className}`}
    >
      <h2 className="max-w-[24ch] text-2xl leading-[1.15] md:text-[2rem]">{heading}</h2>
      {lede && <p className="mt-5 max-w-[46ch] text-xl leading-[1.45] text-ink-600">{lede}</p>}
      <div className="mt-7">{children}</div>
    </section>
  );
};

/* ------------------------------------------------------------------ *
 * Text
 * ------------------------------------------------------------------ */

/** Body. The default for anything meant to be read rather than scanned. */
export const P = ({ children }: { children: ReactNode }) => (
  <p className="mt-6 text-lg leading-[1.65] text-ink-800 first:mt-0">{children}</p>
);

/** One sentence carrying a claim. Two sentences means this is body text. */
export const Lede = ({ children }: { children: ReactNode }) => (
  <p className="mt-6 max-w-[46ch] text-xl leading-[1.45] text-ink-600">{children}</p>
);

/**
 * The one place per section where the eye is allowed to stop.
 *
 * Deliberately limited to a short measure and a rule rather than a tinted
 * box: it interrupts the column without leaving it. A pull quote that
 * repeats the section heading is not a pull quote, it is the heading twice.
 */
export const KeyLine = ({ children }: { children: ReactNode }) => {
  const ref = useReveal<HTMLQuoteElement>();

  return (
    <blockquote ref={ref} className="reveal my-break border-l border-accent pl-6 md:pl-8">
      <p className="max-w-[26ch] text-2xl leading-[1.25] md:text-3xl">{children}</p>
    </blockquote>
  );
};

/* ------------------------------------------------------------------ *
 * Facts
 * ------------------------------------------------------------------ */

/**
 * A number and what it means, inline in the column.
 *
 * The case studies had been setting these as panels, which is why a study
 * with six numbers in it read as six cards interrupting a page rather than
 * as six facts inside one. A hairline to the left and a step up in size is
 * enough for a number to register; it does not need a surface of its own.
 */
export const Stat = ({
  figure,
  of,
  source,
}: {
  figure: string;
  /** What the number counts. One short line. */
  of: string;
  /** Where it came from. Unsourced numbers do not go on this site. */
  source?: string;
}) => (
  <div className="mt-8 border-l border-ink-400/40 pl-5">
    <p className="em text-3xl leading-none tabular-nums text-foreground">{figure}</p>
    <p className="mt-2.5 max-w-[34ch] text-base leading-snug text-ink-600">{of}</p>
    {source && <p className="label mt-2 text-ink-400">{source}</p>}
  </div>
);

/**
 * Two to four numbers read together. Still no panels: a row of hairline-led
 * facts, which sits inside the column instead of breaking it.
 */
export const StatRow = ({ children }: { children: ReactNode }) => (
  <div className="mt-8 grid gap-6 sm:grid-cols-2 [&>*]:mt-0">{children}</div>
);

/* ------------------------------------------------------------------ *
 * The scan layer
 * ------------------------------------------------------------------ */

export interface TakeawayItem {
  /** Two or three words. The thing itself. */
  label: string;
  /** One line. What happened, or what it means. */
  body: string;
}

/**
 * What a reader gets if they read nothing else.
 *
 * Every case study on this site is long, and long is not the problem; the
 * problem reported was not knowing what to read. This block sits directly
 * under a case-study title and answers the three questions someone hiring
 * actually asks - what was wrong, what did you do, what happened - before
 * they decide whether to spend the next eight minutes.
 *
 * It is also the thing a two-minute reader leaves with, which means the rest
 * of the page is allowed to be long without apologising for it.
 */
export const Takeaways = ({
  items,
  title = 'In short',
}: {
  items: TakeawayItem[];
  /** The line above the block. Every case study uses the same one. */
  title?: string;
}) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal mt-10 border-y border-border py-7">
      <p className="label-strong">{title}</p>
      <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="label text-ink-500">{item.label}</dt>
            <dd className="mt-2.5 text-base leading-[1.45] text-ink-800">{item.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

/* ------------------------------------------------------------------ *
 * Figures
 * ------------------------------------------------------------------ */

/**
 * A figure with a caption that earns its place.
 *
 * The caption rule is the one worth keeping: it says something the image
 * cannot say about itself. "The dashboard" is not a caption. "The version
 * that tested worst, because every number on it was equally loud" is.
 *
 * Where a diagram and a paragraph say the same thing, the paragraph is the
 * one that goes. That is where most of the length in these case studies is.
 */
export const Figure = ({
  children,
  caption,
  wide = true,
}: {
  children: ReactNode;
  caption?: string;
  /** Figures break the column at lg, where there is room beside it. */
  wide?: boolean;
}) => {
  const ref = useReveal<HTMLElement>();

  return (
    /* `block-wide` is already scoped to lg in index.css, so it needs no
       Tailwind variant here: below that width it is simply inert and the
       figure stays in the column. */
    <figure ref={ref} className={`reveal my-break ${wide ? 'block-wide' : ''}`}>
      {children}
      {caption && (
        <figcaption className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] text-ink-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
