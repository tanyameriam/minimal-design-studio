import type { CSSProperties, ReactNode } from 'react';

/**
 * The evidence block: a row of small panels carrying the numbers behind a
 * claim, each with a visual, and their provenance attached underneath.
 *
 * The rule this follows is the same one the rest of the portfolio follows: a
 * figure never appears without saying where it came from. The note under the
 * panels is not decoration, it is the thing that makes the panels readable as
 * evidence rather than as marketing.
 *
 * The panels are deliberately small. These are KPI tiles, read in a glance on
 * the way past, not the argument itself; the argument is the slide around
 * them.
 */

/**
 * A quantity on a fixed 0 to `scale` track.
 *
 * Two of these on the same scale is the whole point: a bar filled to the end
 * next to a bar filled to a sliver says "7 out of more than a hundred" faster
 * than either number does alone. Always pass the same `scale` to both.
 */
export const BarTrack = ({
  value,
  scale = 100,
  ticks = [0, 50, 100],
  tone = 'accent',
}: {
  value: number;
  scale?: number;
  /** Values to label under the track. */
  ticks?: number[];
  /** `accent` for the figure being highlighted, `muted` for the baseline. */
  tone?: 'accent' | 'muted';
}) => {
  const pct = Math.max(0, Math.min(100, (value / scale) * 100));

  return (
    <div aria-hidden="true">
      <div className="h-9 w-full overflow-hidden rounded-md bg-ink-400/15">
        <div
          className={`h-full rounded-md ${tone === 'accent' ? 'bg-accent' : 'bg-ink-600'}`}
          // A share this small still has to be visible as a mark, so the fill
          // never renders narrower than a couple of pixels.
          style={{ width: `max(0.375rem, ${pct}%)` }}
        />
      </div>

      <div className="mt-2 flex justify-between font-mono text-[0.6875rem] tabular-nums text-ink-400">
        {ticks.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
    </div>
  );
};

/**
 * A proportion drawn as a dot matrix. Kept for the cases where the ratio is
 * the argument and a bar flatters it.
 */
export const ProportionDots = ({
  total = 100,
  highlighted,
  columns = 20,
}: {
  total?: number;
  highlighted: number;
  columns?: number;
}) => (
  <div
    aria-hidden="true"
    className="grid w-full gap-1"
    style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
  >
    {Array.from({ length: total }, (_, i) => (
      <span
        key={i}
        className={`aspect-square rounded-full ${
          i < highlighted ? 'bg-accent' : 'bg-ink-400 opacity-20'
        }`}
      />
    ))}
  </div>
);

/**
 * Which groups a thing reached and which it did not.
 *
 * For the facts that are categorical rather than numeric. Reached is set in
 * ink and unreached is struck through and dimmed, so the shape of the answer
 * survives without a number that was never counted.
 */
export const RoleSplit = ({ reached, missed }: { reached: string[]; missed: string[] }) => (
  <ul className="flex flex-wrap gap-1.5" aria-hidden="true">
    {reached.map((role) => (
      <li key={role} className="rounded-md bg-accent px-2.5 py-1.5 text-xs text-accent-foreground">
        {role}
      </li>
    ))}
    {missed.map((role) => (
      <li
        key={role}
        className="rounded-md bg-ink-400/15 px-2.5 py-1.5 text-xs text-ink-500 line-through decoration-1"
      >
        {role}
      </li>
    ))}
  </ul>
);

/** One tile: what it measures, the figure, the visual, and what it means. */
export const FigurePanel = ({
  label,
  figure,
  children,
  visual,
  marker,
}: {
  label: ReactNode;
  figure: ReactNode;
  /** The caption under the visual. */
  children?: ReactNode;
  visual?: ReactNode;
  /** Shows a legend dot before the label, matching the visual's fill. */
  marker?: 'accent' | 'muted';
}) => (
  <div className="panel flex flex-col p-5 md:p-6">
    <p className="flex items-center gap-2 text-sm leading-snug text-ink-600">
      {marker && (
        <span
          aria-hidden="true"
          className={`h-2.5 w-2.5 shrink-0 rounded-full ${
            marker === 'accent' ? 'bg-accent' : 'bg-ink-600'
          }`}
        />
      )}
      {label}
    </p>

    <p className="mt-3 text-[2rem] leading-none tracking-[-0.03em] md:text-[2.5rem]">{figure}</p>

    {visual && <div className="mt-5">{visual}</div>}

    {children && (
      <p className="mt-4 max-w-[36ch] text-sm leading-snug text-ink-500">{children}</p>
    )}
  </div>
);

/**
 * Where the numbers came from. Its own line under the panels rather than a
 * caption inside one, because it usually covers all of them.
 */
export const PanelNote = ({ label = 'Note', children }: { label?: string; children: ReactNode }) => (
  <p className="mt-5 max-w-[80ch] text-sm leading-snug text-ink-500">
    <span className="font-medium text-ink-600">{label}.</span> {children}
  </p>
);

/** The tile row. One column on a phone, the given split from lg. */
export const DataPanels = ({
  children,
  columns = '1fr 1fr 1fr',
}: {
  children: ReactNode;
  /** lg-and-up grid template. Widen whichever column carries a chart. */
  columns?: string;
}) => (
  <div
    className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-16 lg:[grid-template-columns:var(--cols)]"
    style={{ '--cols': columns } as CSSProperties}
  >
    {children}
  </div>
);
