import type { ReactNode } from 'react';
import FadeInImage from '@/components/FadeInImage';
import { useReveal } from '@/hooks/use-reveal';
import { Caret } from '@/components/case-study/slides/glyphs';

/**
 * The diagram vocabulary for EducAItors.
 *
 * Five diagrams shipped with this project as PNG exports: the module map,
 * the knowledge chain, the research-to-design mapping, the product workflow
 * and the team operating model. Every one of them had text overflowing its
 * boxes at export size, and all five are structured content rather than
 * drawings, so they are rebuilt here in the portfolio's own hairline and ink
 * vocabulary. They reflow on a phone instead of shrinking, stay legible in
 * either theme, and are readable by a screen reader.
 *
 * The four interface screenshots are the opposite case. Those are evidence
 * and stay as images, framed quietly and annotated beside rather than over
 * the UI, so nothing important is covered.
 */

export type OpenFigure = (src: string, alt: string) => void;

/* ------------------------------------------------------------------ *
 * Media                                                               *
 * ------------------------------------------------------------------ */

interface PlateProps {
  src: string;
  alt: string;
  /** Intrinsic pixel size. Reserves the box so the page does not shift. */
  width: number;
  height: number;
  label?: string;
  caption?: ReactNode;
  onOpen?: OpenFigure;
  className?: string;
  /** Above-the-fold plates load eagerly; everything else waits. */
  priority?: boolean;
}

/**
 * A product screenshot. Quiet frame, small caption, click to enlarge. Real
 * interface at a readable scale, never a device mockup.
 */
export const Plate = ({
  src,
  alt,
  width,
  height,
  label,
  caption,
  onOpen,
  className = '',
  priority = false,
}: PlateProps) => {
  const ref = useReveal<HTMLElement>();

  const image = (
    <FadeInImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className="w-full"
    />
  );

  return (
    <figure ref={ref} className={`reveal ${className}`}>
      {label && <p className="label mb-3 text-ink-500">{label}</p>}
      {onOpen ? (
        <button
          type="button"
          onClick={() => onOpen(src, alt)}
          aria-label={`Enlarge: ${alt}`}
          className="block w-full cursor-zoom-in overflow-hidden border border-border bg-card"
        >
          {image}
        </button>
      ) : (
        <div className="overflow-hidden border border-border bg-card">{image}</div>
      )}
      {(caption || onOpen) && (
        <figcaption className="mt-3 max-w-[68ch] text-sm leading-[1.55] text-ink-500">
          {caption}
          {/* These are three-pane screens shrunk into a column. On a phone the
              only way to actually read one is to open it, so the caption says
              so rather than leaving the affordance to the cursor. */}
          {onOpen && (
            <span className="label mt-3 block text-ink-500">Open full size to read it</span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * A screenshot with its callouts set beside it rather than painted over it.
 *
 * Overlaid markers would sit on top of the very rubric rows and evidence
 * panes the callouts are pointing at, and they would land in the wrong place
 * the moment the image reflows. Numbered prose next to the plate says the
 * same thing, survives every width, and can be read aloud.
 */
export const AnnotatedPlate = ({
  plate,
  heading,
  callouts,
}: {
  plate: PlateProps;
  heading?: string;
  callouts: { title?: string; body: string }[];
}) => (
  <div className="mt-12 md:mt-16">
    {/* The plate takes the full column. These are 3368px screenshots of a
        three-pane interface: set beside the callouts they render at half
        the width and the rubric rows stop being readable, which defeats
        the point of showing the real UI at all. */}
    <Plate {...plate} />
    <div className="mt-10 md:mt-12">
      <p className="label text-ink-500">{heading ?? 'What to look at'}</p>
      <ol className="mt-6 grid gap-px border border-border bg-border md:grid-cols-3">
        {callouts.map((callout, i) => (
          <li key={callout.body} className="flex flex-col bg-background p-5 md:p-6">
            <span className="label tabular-nums text-ink-500">
              {String(i + 1).padStart(2, '0')}
            </span>
            {callout.title && (
              <span className="mt-5 text-lg leading-snug md:text-xl">{callout.title}</span>
            )}
            <span
              className={`text-sm leading-[1.55] text-ink-600 md:text-base ${
                callout.title ? 'mt-4' : 'mt-5'
              }`}
            >
              {callout.body}
            </span>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

/* ------------------------------------------------------------------ *
 * Chains                                                              *
 * ------------------------------------------------------------------ */

export interface Link {
  name: string;
  body: string;
  /** Marks the links this team owned, or the ones the story turns on. */
  emphasis?: boolean;
}

/**
 * A numbered chain of stages. Stands in for three of the source diagrams:
 * the three-module map, the knowledge-quality chain and the five-moment
 * product workflow, which are the same shape at different lengths.
 *
 * Runs left to right on a wide screen with carets between the links, and
 * stacks into a numbered list on a phone, where five boxes in a row would be
 * five boxes nobody can read.
 */
export const Chain = ({
  items,
  footnote,
  columns = 5,
  caption,
}: {
  items: Link[];
  footnote?: ReactNode;
  columns?: 3 | 5;
  /** Names the diagram for assistive technology. */
  caption: string;
}) => (
  <div className="mt-12 md:mt-16">
    <ol
      aria-label={caption}
      className={`grid gap-px border border-border bg-border sm:grid-cols-2 ${
        columns === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-3'
      }`}
    >
      {items.map((item, i) => (
        <li
          key={item.name}
          className={`relative flex flex-col p-5 md:p-6 ${
            item.emphasis ? 'bg-secondary' : 'bg-background'
          } ${
            // An odd-length chain in two columns leaves a hole where the
            // sixth cell would be. The last link takes the whole row instead.
            items.length % 2 === 1 && i === items.length - 1
              ? 'sm:col-span-2 lg:col-span-1'
              : ''
          }`}
        >
          <span className="label tabular-nums text-ink-500">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="mt-6 text-xl leading-[1.1] lg:text-[1.375rem] xl:text-2xl">
            {item.name}
          </span>
          <span className="mt-4 text-sm leading-[1.5] text-ink-600 lg:text-[0.9375rem] xl:text-base">
            {item.body}
          </span>
          {/* Carets only where the row actually runs left to right. */}
          {i < items.length - 1 && (
            <Caret
              className={`absolute right-0 top-1/2 hidden w-5 translate-x-1/2 -translate-y-1/2 text-ink-400 lg:block ${
                item.emphasis ? 'bg-secondary' : 'bg-background'
              }`}
            />
          )}
        </li>
      ))}
    </ol>
    {footnote && (
      <p className="mt-6 max-w-3xl text-sm leading-[1.55] text-ink-500 md:text-base">{footnote}</p>
    )}
  </div>
);

/* ------------------------------------------------------------------ *
 * Lists that carry an argument                                        *
 * ------------------------------------------------------------------ */

/**
 * A numbered stack where the title is the claim and the body is the reason.
 * Used for the system constraints, the five design principles and the way
 * the team worked, which are all the same shape.
 */
export const Numbered = ({
  items,
  size = 'default',
}: {
  items: { title: string; body?: string }[];
  size?: 'default' | 'compact';
}) => {
  // A list of bare claims reads as a list, not as a half-empty two-column
  // table, so the second column only appears when something fills it.
  const paired = items.some((item) => item.body);

  return (
    <ol className="mt-12 divide-y divide-border border-y border-border md:mt-16">
      {items.map((item, i) => (
        <li
          key={item.title}
          className={`grid gap-x-6 gap-y-3 md:grid-cols-[3.5rem_minmax(0,1fr)] ${
            size === 'compact' ? 'py-5' : 'py-7 md:py-8'
          }`}
        >
          <span className="label pt-1.5 tabular-nums text-ink-500">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div
            className={paired ? 'md:grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10' : ''}
          >
            <p
              className={
                size === 'compact'
                  ? 'text-lg leading-snug md:text-xl'
                  : 'text-xl leading-snug md:text-2xl'
              }
            >
              {item.title}
            </p>
            {item.body && (
              <p className="mt-3 text-sm leading-[1.55] text-ink-600 md:mt-0 md:text-base">
                {item.body}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

/** The findings, the modules, the moments. One grid, used sparingly. */
export const Notes = ({
  items,
  columns = 3,
}: {
  items: { title: string; body: string }[];
  columns?: 2 | 3;
}) => (
  <div
    className={`mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 md:mt-16 ${
      columns === 3 ? 'lg:grid-cols-3' : ''
    }`}
  >
    {items.map((item) => (
      <div key={item.title} className="flex flex-col bg-background p-5 md:p-6">
        <p className="text-xl leading-snug md:text-2xl">{item.title}</p>
        <p className="mt-4 flex-1 text-sm leading-[1.5] text-ink-600 md:text-base">{item.body}</p>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ *
 * The research-to-design mapping                                      *
 * ------------------------------------------------------------------ */

/**
 * Research signal, design response, product moment. A real table on a wide
 * screen, because the three columns are the argument: every finding had to
 * land somewhere in the product. Below `md` each row becomes a labelled
 * block, since a three-column table at 390px is either clipped or unreadable.
 */
export const SignalMap = ({
  rows,
  caption,
}: {
  rows: { signal: string; response: string; moment: string }[];
  caption: string;
}) => (
  <div className="mt-12 md:mt-16">
    <table className="hidden w-full border-collapse text-left md:table">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr>
          {['Research signal', 'Design response', 'Product moment'].map((head) => (
            <th
              key={head}
              scope="col"
              className="w-1/3 border-b border-foreground pb-4 pr-8 align-bottom last:pr-0"
            >
              <span className="label text-ink-500">{head}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.signal} className="border-b border-border align-top">
            <th scope="row" className="py-6 pr-8">
              <span className="text-base font-normal leading-snug md:text-lg">{row.signal}</span>
            </th>
            <td className="py-6 pr-8 text-sm leading-[1.55] text-ink-600 md:text-base">
              {row.response}
            </td>
            <td className="py-6 text-sm leading-[1.55] text-ink-600 md:text-base">{row.moment}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* One labelled block per row, for narrow screens. */}
    <ol className="divide-y divide-border border-y border-border md:hidden">
      {rows.map((row) => (
        <li key={row.signal} className="py-6">
          <p className="text-lg leading-snug">{row.signal}</p>
          <dl className="mt-5 space-y-4">
            <div>
              <dt className="label text-ink-500">Design response</dt>
              <dd className="mt-2 text-sm leading-[1.55] text-ink-600">{row.response}</dd>
            </div>
            <div>
              <dt className="label text-ink-500">Product moment</dt>
              <dd className="mt-2 text-sm leading-[1.55] text-ink-600">{row.moment}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ol>
  </div>
);

/* ------------------------------------------------------------------ *
 * Decisions                                                           *
 * ------------------------------------------------------------------ */

/**
 * The trade-off ledger. The question on the left, the call on the right,
 * one hairline row each. Not five identical cards: the tension is what a
 * reader scans, and the reasoning is what they stop for.
 */
export const Decisions = ({
  items,
}: {
  items: { tension: string; verdict: string; body: string }[];
}) => (
  <ol className="mt-12 divide-y divide-border border-y border-border md:mt-16">
    {items.map((item) => (
      <li key={item.tension} className="grid gap-5 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
        <p className="max-w-[26ch] text-xl leading-snug md:text-2xl">{item.tension}</p>
        <div>
          <p className="label inline-block border border-foreground px-2.5 py-1.5">
            {item.verdict}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
            {item.body}
          </p>
        </div>
      </li>
    ))}
  </ol>
);

/* ------------------------------------------------------------------ *
 * Outcome                                                             *
 * ------------------------------------------------------------------ */

/**
 * What was delivered beside what the work does not claim, at the same
 * weight. The right column is the point of the section: a prototype is not
 * a pilot, and the page should say so before a reader has to ask. It is
 * drawn in dashes so a scanning reader cannot take the two for one list.
 */
export const Ledger = ({
  delivered,
  notClaimed,
}: {
  delivered: string[];
  notClaimed: { note: string; items: string[] };
}) => (
  <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 lg:grid-cols-2">
    <div className="bg-background p-6 md:p-8">
      <p className="label label-strong">What we delivered</p>
      <ul className="mt-8 space-y-5">
        {delivered.map((item) => (
          <li key={item} className="flex gap-4">
            <span aria-hidden="true" className="mt-[0.65em] h-px w-4 shrink-0 bg-foreground" />
            <span className="text-base leading-[1.55] md:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-background p-6 md:p-8">
      <p className="label text-ink-500">What we do not claim</p>
      <p className="mt-4 max-w-[38ch] text-base leading-[1.55] text-ink-600 md:text-lg">
        {notClaimed.note}
      </p>
      <ul className="mt-8 divide-y divide-dashed divide-border border-y border-dashed border-border">
        {notClaimed.items.map((item) => (
          <li key={item} className="py-3 text-base leading-snug text-ink-500 md:text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ------------------------------------------------------------------ *
 * Small pieces                                                        *
 * ------------------------------------------------------------------ */

/** A research quote, sized to be read from across the room. */
export const BigQuote = ({ children, source }: { children: ReactNode; source: string }) => (
  <blockquote className="mt-12 max-w-4xl border-l border-foreground pl-6 md:mt-16 md:pl-8">
    <p className="text-[1.75rem] leading-[1.15] md:text-[2.75rem]">&ldquo;{children}&rdquo;</p>
    <footer className="label mt-6 text-ink-500">{source}</footer>
  </blockquote>
);

/** The supporting quote. Same voice, less air. */
export const SmallQuote = ({ children, source }: { children: ReactNode; source: string }) => (
  <blockquote className="mt-10 max-w-2xl border-t border-border pt-6">
    <p className="text-lg leading-[1.3] text-ink-600 md:text-xl">&ldquo;{children}&rdquo;</p>
    <footer className="label mt-4 text-ink-500">{source}</footer>
  </blockquote>
);

/** The line a section is built on. One sentence, sized to be remembered. */
export const Principle = ({ children }: { children: ReactNode }) => (
  <p className="mt-12 max-w-3xl border-l border-foreground pl-5 text-xl leading-snug md:mt-14 md:pl-6 md:text-[1.75rem]">
    {children}
  </p>
);

/** A row of method names. Evidence that the work happened, at label size. */
export const Methods = ({ items }: { items: string[] }) => (
  <ul className="mt-10 flex flex-wrap gap-2">
    {items.map((item) => (
      <li key={item} className="label border border-border px-3 py-2 text-ink-500">
        {item}
      </li>
    ))}
  </ul>
);

/** The external prototype link. Says plainly where it goes and that it leaves. */
export const PrototypeLink = ({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className={`rule-link inline-flex items-baseline gap-2 ${className}`}
  >
    {children}
    <span aria-hidden="true">&#8599;</span>
    <span className="sr-only">(opens the live prototype in a new tab)</span>
  </a>
);
