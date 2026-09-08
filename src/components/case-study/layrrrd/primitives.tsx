import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/use-reveal';

/**
 * Layrrrd's slide vocabulary.
 *
 * Deliberately not the BrynQ set. That story is ink-on-dark, diagrammatic
 * and systemic; this one is a founder's story told on paper. Everything
 * here sits on the cream island declared as `.paper-layrrrd` in index.css:
 * warm ground, near-black type, hairlines the colour of old card, low
 * radius, and one ink-block treatment reserved for the turns.
 *
 * Read at two speeds. `Headline`, `Statement` and `Metric` carry the entire
 * argument on their own, so a scan of the page tells the story; `Lede`,
 * `Voice` and `Panel` carry the reasoning underneath for anyone who wants it.
 */

export type SlideHeight = 'full' | 'tall' | 'short' | 'auto';

const heights: Record<SlideHeight, string> = {
  /** A statement that owns the viewport. */
  full: 'min-h-[86svh] md:min-h-[88svh]',
  /** The default working slide. */
  tall: 'min-h-[72svh] md:min-h-[78svh]',
  /** Handoffs between chapters. */
  short: 'min-h-[48svh] md:min-h-[56svh]',
  /** Diagram slides that set their own height. */
  auto: '',
};

interface SlideProps {
  id: string;
  /** Chapter this slide belongs to, e.g. '01'. Drives the sticky rail. */
  chapter?: string;
  height?: SlideHeight;
  center?: boolean;
  /** Ink block: cream type on near-black. Kept for the turns in the story.
   *  Flips the token island (see .ink-block in index.css) so everything
   *  inside keeps its contrast without restating a single colour. */
  tone?: 'paper' | 'ink';
  className?: string;
  children: ReactNode;
}

export const Slide = ({
  id,
  chapter,
  height = 'tall',
  center = false,
  tone = 'paper',
  className = '',
  children,
}: SlideProps) => {
  const ref = useReveal<HTMLDivElement>('-12% 0px');

  return (
    <section
      id={id}
      data-chapter={chapter}
      // scroll-mt clears the site nav and the sticky rail, so an anchored
      // slide never opens underneath the chrome.
      className={`relative scroll-mt-[9rem] border-t border-border ${
        tone === 'ink' ? 'ink-block' : ''
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

/** Chapter kicker: number, label, hairline running out to the margin. */
export const Kicker = ({ n, label }: { n?: string; label: string }) => (
  <div className="mb-9 flex flex-wrap items-center gap-x-4 gap-y-3 md:mb-12">
    {n && <span className="label shrink-0 tabular-nums text-ink-500">{n}</span>}
    <span className="label leading-[1.4] text-ink-500">{label}</span>
    <span aria-hidden="true" className="hidden h-px min-w-8 flex-1 bg-border sm:block" />
  </div>
);

/** The scan layer. Read only these, in order, and the story still lands. */
export const Headline = ({
  children,
  size = 'default',
}: {
  children: ReactNode;
  size?: 'default' | 'large';
}) => (
  <h2
    className={
      size === 'large'
        ? 'max-w-[20ch] text-[2.5rem] font-medium leading-[1.0] md:text-[4.5rem]'
        : 'max-w-[24ch] text-[2rem] font-medium leading-[1.04] md:text-[3.25rem]'
    }
  >
    {children}
  </h2>
);

/** Supporting copy. Never the scan layer. */
export const Lede = ({ children, wide = false }: { children: ReactNode; wide?: boolean }) => (
  <p
    className={`mt-7 text-base leading-[1.6] text-ink-600 md:mt-8 md:text-lg ${
      wide ? 'max-w-3xl' : 'max-w-2xl'
    }`}
  >
    {children}
  </p>
);

/** A typographic turn. Used sparingly, and always alone. */
export const Statement = ({ children }: { children: ReactNode }) => (
  <p className="mt-12 max-w-[18ch] text-[2.25rem] font-medium leading-[1.02] md:mt-16 md:text-[4rem]">
    {children}
  </p>
);

/** Weighted emphasis inside a headline. The system's one emphasis device. */
export const Em = ({ children }: { children: ReactNode }) => (
  <span className="em">{children}</span>
);

/**
 * The two voices the story alternates between: what I noticed as design
 * lead, and what it meant for the business. Different treatments, so a
 * scanner can tell them apart without reading either.
 */
export const Voice = ({ kind, children }: { kind: 'mine' | 'business'; children: ReactNode }) =>
  kind === 'mine' ? (
    <div className="mt-10 max-w-3xl border-l-2 border-foreground pl-5 md:mt-12 md:pl-6">
      <p className="label mb-3 text-ink-500">My read</p>
      <p className="text-lg leading-[1.4] md:text-2xl">{children}</p>
    </div>
  ) : (
    <div className="mt-10 max-w-3xl rounded-[3px] bg-card p-5 md:mt-12 md:p-6">
      <p className="label mb-3 text-ink-500">The business read</p>
      <p className="text-base leading-[1.55] text-ink-600 md:text-lg">{children}</p>
    </div>
  );

/** One number and what it counts. */
export const Metric = ({
  figure,
  caption,
  size = 'default',
}: {
  figure: ReactNode;
  caption: ReactNode;
  size?: 'default' | 'large';
}) => (
  <div>
    <p
      className={`font-medium leading-none tabular-nums ${
        size === 'large' ? 'text-[3.5rem] md:text-[5.5rem]' : 'text-[2.5rem] md:text-[3.5rem]'
      }`}
    >
      {figure}
    </p>
    <p className="mt-3 max-w-[22ch] text-sm leading-snug text-ink-600 md:text-base">{caption}</p>
  </div>
);

/** A row of metrics that wraps rather than shrinking the figures. */
export const MetricRow = ({ children }: { children: ReactNode }) => (
  <div className="mt-10 flex flex-wrap gap-x-14 gap-y-9 md:mt-14">{children}</div>
);

/** A filled card. The product's own panel: cream, low radius, no shadow. */
export const Panel = ({
  label,
  title,
  children,
}: {
  label?: string;
  title?: ReactNode;
  children?: ReactNode;
}) => (
  <div className="rounded-[3px] bg-card p-5 md:p-6">
    {label && <p className="label mb-3 text-ink-500">{label}</p>}
    {title && <p className="text-lg leading-snug md:text-xl">{title}</p>}
    {children && (
      <p className="mt-2.5 text-sm leading-[1.55] text-ink-600 md:text-base">{children}</p>
    )}
  </div>
);

/** Something a real person said, kept as a fragment rather than a persona. */
export const Quote = ({ children }: { children: ReactNode }) => (
  <figure className="rounded-[3px] border border-border px-5 py-6 md:px-6">
    <blockquote className="text-lg leading-snug md:text-2xl">
      &ldquo;{children}&rdquo;
    </blockquote>
  </figure>
);

/** Sources, sample sizes, and the arithmetic behind a figure. */
export const Note = ({ children }: { children: ReactNode }) => (
  <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-500">{children}</p>
);

/**
 * A slot for a real project asset that is not in the repo yet.
 *
 * PLACEHOLDER: search this page for `<AssetSlot` to find every hole. Each
 * one names the exact screenshot it wants. Replace the whole element with a
 * <FadeInImage /> once the file exists. The dashed frame is deliberately
 * visible: an unfilled slot should never ship unnoticed, and inventing a
 * product screenshot would be worse than showing the gap.
 */
export const AssetSlot = ({
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
    className={`relative flex flex-col justify-center rounded-[3px] border border-dashed border-border ${ratio}`}
  >
    <div className="flex flex-1 items-center justify-center p-6 text-ink-400 md:p-8">
      {children ?? <span className="label">Screenshot</span>}
    </div>
    <figcaption className="label border-t border-dashed border-border px-4 py-2.5 text-ink-500">
      Asset pending · {label}
      {note ? ` · ${note}` : ''}
    </figcaption>
  </figure>
);

/** A short list that keeps the hairline rhythm of the rest of the page. */
export const Points = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-8 divide-y divide-border border-y border-border">
    {items.map((item, i) => (
      <li key={i} className="py-3.5 text-base leading-snug md:text-lg">
        {item}
      </li>
    ))}
  </ul>
);
