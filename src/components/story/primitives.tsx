import type { ReactNode } from 'react';

/**
 * Shared slide fragments for the story decks. Each deck keeps its own
 * slides and visual strategy; these carry the common editorial skeleton:
 * chapter kickers, headlines, body text, the narrator's voice, panels.
 */

export const Em = ({ children }: { children: ReactNode }) => (
  <span className="em">{children}</span>
);

/**
 * Chapter kicker: numbered pill, mono label, hairline running to the edge.
 * The same treatment as the long case studies' Kicker, so a reader moving
 * between the deck and the full page never changes visual language.
 */
export const Chapter = ({ n, label }: { n: string; label: string }) => (
  <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-3 md:mb-10">
    <span className="label-strong shrink-0 rounded-md bg-foreground px-2.5 py-1.5 tabular-nums text-background">
      {n}
    </span>
    <span className="label-strong leading-[1.4]">{label}</span>
    <span aria-hidden="true" className="hidden h-px min-w-8 flex-1 bg-border sm:block" />
  </div>
);

export const H = ({ children }: { children: ReactNode }) => (
  <h2 className="max-w-4xl text-[2rem] leading-[1.05] md:text-[3rem]">{children}</h2>
);

export const Body = ({ children }: { children: ReactNode }) => (
  <p className="mt-6 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">{children}</p>
);

/** The narrator's voice. Closes a slide and hands off to the next one. */
export const Voice = ({ children }: { children: ReactNode }) => (
  <div className="mt-10 max-w-3xl border-l border-foreground pl-5 md:mt-14 md:pl-6">
    <p className="em text-xl leading-[1.3] md:text-[1.75rem]">{children}</p>
  </div>
);

export const Panel = ({
  label,
  title,
  children,
  strong = false,
}: {
  label: string;
  title?: string;
  children: ReactNode;
  strong?: boolean;
}) => (
  <div className={`panel p-5 md:p-6 ${strong ? 'border-l-4 border-l-foreground' : ''}`}>
    <p className={`label ${strong ? 'text-ink-800' : 'text-ink-500'}`}>{label}</p>
    {title && <p className="mt-3 text-lg leading-snug md:text-xl">{title}</p>}
    <div className="mt-3 text-sm leading-relaxed text-ink-600 md:text-base">{children}</div>
  </div>
);

/**
 * A real artefact inside a slide: a product screenshot, a board, a thread.
 *
 * The long case studies use `Plate`, which reserves a full-width box and
 * opens into a lightbox. Neither fits here. A slide is a fixed frame rather
 * than a scrolling column, so the image is capped against the viewport and
 * letterboxed on the card rather than allowed to set the slide's height; and
 * the deck already owns Escape, so a second overlay inside it would close two
 * things on one keypress. The deck's job is to show that the thing exists and
 * what it looks like. Reading it at full size is what the case study is for,
 * and the header links there from every slide.
 */
export const Shot = ({
  src,
  alt,
  width,
  height,
  caption,
  /** Height cap, as a literal class so Tailwind sees it at the call site. */
  maxH = 'max-h-[38vh]',
  className = '',
}: {
  src: string;
  alt: string;
  /** Intrinsic pixel size, so the frame is reserved before the file lands. */
  width: number;
  height: number;
  caption?: ReactNode;
  maxH?: string;
  className?: string;
}) => (
  <figure className={className}>
    <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-card">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`mx-auto block w-full object-contain ${maxH}`}
      />
    </div>
    {caption && <figcaption className="label mt-3 text-ink-500">{caption}</figcaption>}
  </figure>
);

/** Two or three shots read as one exhibit. Stacks on a phone. */
export const ShotRow = ({ children, cols = 2 }: { children: ReactNode; cols?: 2 | 3 }) => (
  <div className={`grid gap-4 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>{children}</div>
);
