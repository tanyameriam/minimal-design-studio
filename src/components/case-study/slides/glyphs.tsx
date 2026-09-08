import type { SVGProps } from 'react';

/**
 * What is left of the BrynQ glyph set. The symbolic illustrations were cut;
 * the two arrows stayed because they are punctuation rather than decoration:
 * they carry one step of a flow into the next.
 *
 * Both paint in `currentColor`, so they inherit the ink colour of whatever
 * they sit in and the page stays monochrome.
 */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

/** Flow arrow. Used between steps in the diagrams. */
export const Caret = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 12"
    aria-hidden="true"
    className={className}
    {...base}
  >
    <path d="M1 6h21M17 1l5 5-5 5" />
  </svg>
);

/** Section connector. The long line that hands one idea to the next. */
export const LongArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 40" aria-hidden="true" {...base} {...props}>
    <path className="draw" d="M2 20c60-16 120 16 180 12s110-26 168-18c40 6 80 12 128 6" />
    <path d="M458 12l20 8-20 8" />
  </svg>
);

/**
 * Many strands gathering into one. Sits between the two halves of a shift:
 * scattered knowledge on the left, a single reusable thing on the right.
 *
 * The meeting point is a filled dot in the accent, which is the only colour
 * in the mark; everything else inherits the ink around it.
 */
export const Converge = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 170 200" aria-hidden="true" {...base} {...props}>
    {[16, 49, 82, 118, 151, 184].map((y) => (
      <path key={y} className="draw" d={`M0 ${y}C58 ${y} 62 100 102 100`} opacity={0.65} />
    ))}
    <path d="M102 100h58" />
    <path d="M152 93l8 7-8 7" />
    <circle cx="102" cy="100" r="3.5" fill="hsl(var(--accent))" stroke="none" />
  </svg>
);

