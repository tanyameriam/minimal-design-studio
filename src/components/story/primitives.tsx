import { Children, isValidElement, type ReactNode } from 'react';

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
  <div className="mt-break max-w-3xl border-l border-foreground pl-5 md:pl-6">
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

/**
 * Anything wrapped in Words sits in the left column of a Spread, under the
 * paragraph, rather than with the evidence on the right. For a slide whose
 * right-hand side would otherwise run taller than the frame.
 */
export const Words = ({ children }: { children: ReactNode }) => (
  <div className="mt-8">{children}</div>
);

/**
 * Anything wrapped in Below runs the full width of a Spread, under both
 * columns. For evidence too wide to sit beside the words.
 */
export const Below = ({ children }: { children: ReactNode }) => (
  <div className="mt-8">{children}</div>
);

/** The pieces of a slide that are its words rather than its evidence. */
const TEXT_PARTS: unknown[] = [Body, Words, Voice];

/**
 * A slide as a spread: the headline across the top, then the words in a
 * narrow column on the left and the evidence on the right.
 *
 * The deck is one fixed frame, wider than it is tall, so a single column of
 * headline, paragraph, visual and closing line runs far past its height.
 * Setting everything side by side fixed the height but squeezed the
 * evidence into half the frame, where anything with its own columns folded
 * into narrow strips. So the headline takes the full width and two lines,
 * and the evidence gets two thirds of what is left.
 *
 * The chapter kicker and the headline span the frame; the paragraph, any
 * Words and the narrator's closing line stack on the left; everything else,
 * in its own order, goes on the right; Below runs full width underneath. A
 * slide with no evidence, or no headline, stays one column, and one whose
 * only words are its headline gives the evidence the whole width.
 */
export const Spread = ({ children }: { children: ReactNode }) => {
  const top: ReactNode[] = [];
  const below: ReactNode[] = [];
  const words: ReactNode[] = [];
  const evidence: ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child) && (child.type === Chapter || child.type === H)) top.push(child);
    else if (isValidElement(child) && child.type === Below) below.push(child);
    else if (isValidElement(child) && TEXT_PARTS.includes(child.type)) words.push(child);
    else if (child != null && child !== false) evidence.push(child);
  });

  const hasHeadline = Children.toArray(children).some(
    (child) => isValidElement(child) && child.type === H,
  );

  // A cover, or a slide that is all words, keeps its own single column.
  if (!evidence.length || !hasHeadline) return <div>{children}</div>;

  const stack = '[&>*+*]:!mt-6 [&>*:first-child]:!mt-0 [&>*]:max-w-none';

  return (
    <div>
      <div className="[&>h2]:max-w-5xl">{top}</div>
      {words.length ? (
        <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-14">
          <div className="[&>*:first-child]:mt-0 lg:[&>div:last-child]:mt-8">{words}</div>
          <div className={stack}>{evidence}</div>
        </div>
      ) : (
        <div className={`mt-7 ${stack}`}>{evidence}</div>
      )}
      {below}
    </div>
  );
};
