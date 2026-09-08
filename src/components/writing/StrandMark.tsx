import type { Strand } from '@/data/writing';

/**
 * A card mark, one per strand.
 *
 * The index needs something to look at, and the honest options were a
 * process export (none exist yet) or nothing. These are the third: a
 * miniature of the argument the essay makes, drawn in the site's own line
 * vocabulary. They are decoration, marked aria-hidden, and carry no
 * information the card's words do not already carry. They are explicitly
 * not screenshots, mockups, or stock imagery standing in for evidence.
 */

const stroke = 'stroke-[hsl(var(--ink-400))]';
const strand = 'stroke-[hsl(var(--strand))]';

/** A chain of stages with a gate opened before the last one. */
const AiMark = () => (
  <>
    <line x1="16" y1="60" x2="212" y2="60" className={stroke} strokeWidth="1" />
    {[16, 72, 128].map((x) => (
      <rect key={x} x={x} y="50" width="20" height="20" className={stroke} strokeWidth="1" />
    ))}
    <rect x="192" y="50" width="20" height="20" className={strand} strokeWidth="1.5" />
    {/* The gate: the question asked before the last stage runs. */}
    <path d="M170 34 v52" className={strand} strokeWidth="1.5" />
    <path d="M162 42 l8 -8 l8 8" className={strand} strokeWidth="1.5" fill="none" />
  </>
);

/** Three tracks, each marked where the risk becomes visible. */
const IxdMark = () => (
  <>
    {[
      [30, 168],
      [60, 108],
      [90, 48],
    ].map(([y, x]) => (
      <g key={y}>
        <line x1="16" y1={y} x2="212" y2={y} className={stroke} strokeWidth="1" />
        <circle cx={x} cy={y} r="5" className={strand} strokeWidth="1.5" fill="none" />
      </g>
    ))}
  </>
);

/** A layout where the top band carries the weight. */
const VxdMark = () => (
  <>
    <rect x="16" y="24" width="196" height="26" className={strand} strokeWidth="1.5" />
    <rect x="16" y="60" width="92" height="16" className={stroke} strokeWidth="1" />
    <rect x="120" y="60" width="92" height="16" className={stroke} strokeWidth="1" />
    <rect x="16" y="84" width="92" height="12" className={stroke} strokeWidth="1" />
    <rect x="120" y="84" width="92" height="12" className={stroke} strokeWidth="1" />
  </>
);

const marks: Record<Strand, () => JSX.Element> = {
  ai: AiMark,
  ixd: IxdMark,
  vxd: VxdMark,
};

const StrandMark = ({ strand: name }: { strand: Strand }) => {
  const Mark = marks[name];

  return (
    <svg
      viewBox="0 0 228 120"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
      fill="none"
      vectorEffect="non-scaling-stroke"
    >
      <Mark />
    </svg>
  );
};

export default StrandMark;
