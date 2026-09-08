import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { useCountIn } from '@/hooks/use-count-in';
import { Caret } from './glyphs';

/** The icon set these diagrams draw from. */
export type DiagramIcon = LucideIcon;

export type CascadeStep = { name: string; note?: string };

/**
 * The diagram vocabulary for the BrynQ narrative.
 *
 * Every piece here exists because a sentence would have been slower. They
 * are drawn from hairlines, the ink scale and type, so a diagram reads as
 * part of the page rather than as an embedded picture, and they all reflow
 * rather than shrink on a phone.
 */

/** A number that counts in once, then behaves like text. */
export const Count = ({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const { ref, value } = useCountIn(to);
  const format = (n: number) =>
    n.toLocaleString('en-GB', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  return (
    <span className="tabular-nums">
      {/* The final value, always, for assistive tech: a number mid-count is
          noise, and a number that never counted would read as zero. */}
      <span className="sr-only">{`${prefix}${format(to)}${suffix}`}</span>
      <span ref={ref} aria-hidden="true">
        {prefix}
        {format(value)}
        {suffix}
      </span>
    </span>
  );
};

/** One headline figure with its caption and, where it matters, its status. */
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
      className={
        size === 'large'
          ? 'text-[3.25rem] leading-[0.95] md:text-[5rem]'
          : 'text-[2.5rem] leading-[0.95] md:text-[3.25rem]'
      }
    >
      {figure}
    </p>
    <p className="mt-4 max-w-[24ch] text-sm leading-snug text-ink-600 md:text-base">{caption}</p>
  </div>
);

/**
 * A stack of metric panels. Used in the hero rail beside the opening media.
 *
 * These used to be hairline-separated rows inside a single ruled block. As
 * panels they read as three separate claims, which is what they are: each
 * carries its own figure, its own caption and, where it matters, its own
 * provenance.
 */
export const MetricStack = ({ children }: { children: ReactNode }) => (
  <div className="grid gap-4">{children}</div>
);

export const MetricRow = ({
  figure,
  caption,
  label,
}: {
  figure: ReactNode;
  caption: ReactNode;
  /** Optional name above the figure, e.g. "Conversion rate". */
  label?: ReactNode;
}) => (
  <div className="panel p-6 md:p-7">
    {label && <p className="mb-4 text-base text-ink-600 md:text-lg">{label}</p>}
    <p className="text-[2.25rem] leading-none md:text-[2.75rem]">{figure}</p>
    <p className="mt-3 text-sm leading-snug text-ink-600">{caption}</p>
  </div>
);

/**
 * A journey rail. Bleeds to the viewport edge and scrolls sideways on
 * purpose: a process that does not fit on screen is the argument.
 */
export const Rail = ({
  steps,
  terminal,
}: {
  steps: string[];
  terminal?: { label: string; note?: string };
}) => (
  <div className="-mx-5 overflow-x-auto px-5 pb-6 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
    <ol className="flex min-w-max items-stretch">
      {steps.map((step, i) => (
        <li key={step} className="w-[9.5rem] shrink-0 pr-5 md:w-[11rem] md:pr-6">
          <div aria-hidden="true" className="flex items-center">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink-500" />
            <span className="h-px flex-1 bg-border" />
          </div>
          <p className="label mt-5 tabular-nums text-ink-500">
            {String(i + 1).padStart(2, '0')}
          </p>
          <p className="mt-2.5 text-sm leading-snug text-ink-600">{step}</p>
        </li>
      ))}
      {terminal && (
        <li className="w-[9.5rem] shrink-0 md:w-[11rem]">
          <div aria-hidden="true" className="flex items-center">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
          </div>
          <div className="mt-5 inline-block rounded-md border border-foreground px-3 py-2">
            <p className="text-base leading-none">{terminal.label}</p>
          </div>
          {terminal.note && (
            <p className="mt-2.5 text-sm leading-snug text-ink-400">{terminal.note}</p>
          )}
        </li>
      )}
    </ol>
  </div>
);

/**
 * The same journey as `Rail`, grouped into phases so it fits on one screen.
 *
 * A rail that scrolls sideways makes length felt but costs the reader the
 * shape of the process. This draws the whole thing as one line: a phase name
 * over each segment, the steps listed underneath, and dashed gutters between
 * the columns.
 *
 * One phase can be raised. Its segment thickens into the accent and its costs
 * are listed in accent below the steps, so the expensive stretch of the
 * process is visible before a word is read.
 */
export const PhaseTrack = ({
  phases,
}: {
  phases: {
    name: string;
    steps: string[];
    /** What this phase cost, listed once for the group rather than per step. */
    costs?: string[];
    emphasis?: boolean;
  }[];
}) => (
  <ol className="grid gap-x-0 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
    {phases.map((phase, i) => {
      // A dot belongs to the accent when it terminates the raised segment,
      // which means either side of it can be the phase being emphasised.
      const accentDot = phase.emphasis || phases[i - 1]?.emphasis;

      return (
        <li
          key={phase.name}
          className={i > 0 ? 'lg:border-l lg:border-dashed lg:border-border lg:pl-6' : 'lg:pr-6'}
        >
          <p
            className={`label ${phase.emphasis ? 'text-accent' : 'text-ink-500'}`}
          >
            {phase.name}
          </p>

          <div aria-hidden="true" className="mt-5 flex items-center">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${
                accentDot ? 'bg-accent' : 'bg-foreground'
              }`}
            />
            <span
              className={`flex-1 ${phase.emphasis ? 'h-[3px] bg-accent' : 'h-px bg-border'}`}
            />
          </div>

          <ul className="mt-6 space-y-2">
            {phase.steps.map((step) => (
              <li key={step} className="text-sm leading-snug text-ink-600 md:text-base">
                {step}
              </li>
            ))}
          </ul>

          {phase.costs && (
            <ul className="mt-6 space-y-1.5 border-t border-dashed border-border pt-6">
              {phase.costs.map((cost) => (
                <li key={cost} className="text-sm leading-snug text-accent md:text-base">
                  {cost}
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    })}
  </ol>
);

/**
 * Two opposed positions with the reconciling statement between them. The
 * centre column is the point, so it holds the emphasis on desktop and sits
 * between the two on a phone.
 */
export const Split = ({
  left,
  right,
  centre,
}: {
  left: { label: string; children: ReactNode };
  right: { label: string; children: ReactNode };
  centre?: ReactNode;
}) => (
  <div>
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
      <div className="lg:border-r lg:border-border lg:pr-14">
        <p className="label mb-7 text-ink-500">{left.label}</p>
        {left.children}
      </div>
      <div className="lg:pl-14">
        <p className="label mb-7 text-ink-500">{right.label}</p>
        {right.children}
      </div>
    </div>

    {/* The reconciliation sits under both, because it belongs to neither. */}
    {centre && (
      <div className="mt-14 border-t border-border pt-10 md:mt-20">
        <p className="max-w-[30ch] text-[1.75rem] leading-[1.1] md:text-[2.75rem]">{centre}</p>
      </div>
    )}
  </div>
);

/**
 * A quoted line from research, sized to be read from across the room.
 *
 * As a panel rather than a hairline-topped column, with the accent mark doing
 * the work the rule used to: three of these in a row now read as three
 * separate voices instead of as one three-column block of text. The gloss is
 * the finding under the quote, and it is deliberately set quieter, because
 * the sentence a user actually said is the evidence and the gloss is only my
 * reading of it.
 */
export const Quote = ({
  children,
  gloss,
  who,
}: {
  children: ReactNode;
  gloss: string;
  /** Who said it, by role rather than by name. */
  who?: string;
}) => (
  <figure className="panel flex h-full flex-col p-6 md:p-7">
    <span
      aria-hidden="true"
      className="font-serif text-[3rem] leading-[0.6] text-accent"
    >
      &ldquo;
    </span>

    <blockquote className="mt-4 text-xl leading-[1.2] md:text-[1.625rem]">
      {children}
    </blockquote>

    <figcaption className="mt-auto pt-5">
      {who && <p className="label mb-2 text-ink-500">{who}</p>}
      <p className="text-sm leading-snug text-ink-500 md:text-base">{gloss}</p>
    </figcaption>
  </figure>
);

/**
 * A chain of hand-offs, drawn as nodes on a rule.
 *
 * For showing who actually did the work, in order. Deliberately typographic:
 * small nodes, one hairline, annotations set quiet underneath. Boxing each
 * step would turn a sequence into a set of equal-weight cards, which is the
 * opposite of the point when the argument is that the chain is long.
 *
 * Horizontal from md, where four columns have room to breathe. Below that it
 * becomes a vertical list with a down arrow between steps rather than a
 * squeezed row. Marked `accent` on at most one node, for the step the
 * surrounding copy is about to single out.
 *
 * Wrapped in .sequence, so inside a revealed slide the nodes arrive left to
 * right. Nothing here depends on that, or on hover: it reads as a finished
 * diagram with animation disabled.
 */
export const HandoffChain = ({
  steps,
}: {
  steps: { name: string; note?: string; accent?: boolean }[];
}) => (
  <ol className="sequence grid gap-y-6 md:grid-cols-4 md:gap-y-0">
    {steps.map((step, i) => (
      <li key={step.name} className="relative md:pr-6">
        {/* The vertical beat between steps, for the stacked layout only. */}
        {i > 0 && (
          <span aria-hidden="true" className="mb-4 block text-lg text-ink-400 md:hidden">
            &darr;
          </span>
        )}

        {/*
          The rule runs from just past this node to the column edge, which is
          exactly where the next node sits, so the four read as one line.
        */}
        {i < steps.length - 1 && (
          <span
            aria-hidden="true"
            className="absolute left-3 right-0 top-1 hidden h-px bg-border md:block"
          />
        )}

        <span
          aria-hidden="true"
          className={`relative block h-2 w-2 rounded-full ${
            step.accent ? 'bg-accent' : 'bg-ink-400'
          }`}
        />

        <p className="mt-4 text-lg leading-snug md:text-xl">{step.name}</p>

        {step.note && (
          <p className="mt-2.5 max-w-[20ch] text-sm leading-snug text-ink-500">{step.note}</p>
        )}
      </li>
    ))}
  </ol>
);

/**
 * A list where each row wears a mark of its own. With icons it reads as a
 * set of distinct things; without them the rows are strung together by a
 * dashed line and read as one sequence.
 */
export const IconList = ({
  items,
  connected = false,
}: {
  items: { text: string; Icon?: DiagramIcon }[];
  /** Draw the dashed thread between marks. For steps rather than a set. */
  connected?: boolean;
}) => (
  <ul>
    {items.map(({ text, Icon }, i) => (
      <li key={text} className="relative flex items-center gap-5 border-b border-border py-4">
        {connected && i < items.length - 1 && (
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[0.6875rem] top-9 w-px border-l border-dashed border-border"
          />
        )}

        <span
          aria-hidden="true"
          className={`relative flex shrink-0 items-center justify-center rounded-full border border-accent bg-background text-accent ${
            Icon ? 'h-10 w-10' : 'h-6 w-6'
          }`}
        >
          {Icon ? (
            <Icon className="h-4 w-4" strokeWidth={1.5} />
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          )}
        </span>

        <span className="text-base leading-snug md:text-lg">{text}</span>
      </li>
    ))}
  </ul>
);

/**
 * Two named poles with a marked position between them. Smaller than
 * `Continuum` and used inside a column: the endpoints carry an icon each and
 * the accent sits wherever the argument lands.
 */
export const AxisPair = ({
  left,
  right,
  /** Where the mark sits, 0 at the left pole and 1 at the right. */
  at = 0.5,
}: {
  left: { label: string; Icon: DiagramIcon };
  right: { label: string; Icon: DiagramIcon };
  at?: number;
}) => (
  <div className="flex items-start gap-4">
    {[left, right].map((pole, i) => (
      <div key={pole.label} className={`shrink-0 ${i === 1 ? 'order-last' : ''}`}>
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-accent">
          <pole.Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <p className={`label mt-3 text-ink-500 ${i === 1 ? 'text-right' : ''}`}>{pole.label}</p>
      </div>
    ))}

    <div aria-hidden="true" className="relative mt-7 h-px flex-1 bg-border">
      <span
        className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ left: `${at * 100}%` }}
      />
    </div>
  </div>
);

/**
 * Diagrammatic buckets. Deliberately not cards: hairline top rules and a
 * glyph, so the group reads as a diagram of a decision rather than a grid
 * of features.
 */
export const Zones = ({
  items,
}: {
  items: { label: string; title: string; points: string[] }[];
}) => (
  <div className="grid gap-3 md:grid-cols-3">
    {items.map((zone) => (
      <div key={zone.label} className="panel flex flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="label text-ink-500">{zone.label}</p>
        </div>
        <p className="mt-5 text-xl leading-snug md:text-2xl">{zone.title}</p>
        <ul className="mt-6 space-y-2.5">
          {zone.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-snug text-ink-600 md:text-base">
              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-400" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

/** A labelled axis with one position marked on it. */
export const Continuum = ({
  left,
  right,
  marker,
  markerNote,
  gains,
}: {
  left: string;
  right: string;
  marker: string;
  markerNote?: string;
  /** What the marked position bought, listed under the axis. */
  gains?: { Icon: DiagramIcon; text: string }[];
}) => (
  <div>
    <div className="relative pt-16 md:pt-20">
      {/* The marked position sits above the axis, centred on it. */}
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="rounded-full border border-accent px-5 py-2.5 text-center md:px-7">
          <p className="label text-accent">{marker}</p>
        </div>
      </div>
      <div aria-hidden="true" className="flex items-center">
        <span className="h-2 w-2 shrink-0 rounded-full border border-ink-400" />
        <span className="h-px flex-1 bg-border" />
        <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-accent" />
        <span className="h-px flex-1 bg-border" />
        <span className="h-2 w-2 shrink-0 rounded-full border border-ink-400" />
      </div>
      <div className="mt-5 flex justify-between gap-6">
        <p className="max-w-[16ch] text-sm leading-snug text-ink-500 md:text-base">{left}</p>
        <p className="max-w-[16ch] text-right text-sm leading-snug text-ink-500 md:text-base">
          {right}
        </p>
      </div>
    </div>
    {markerNote && (
      <p className="mt-8 text-center text-sm leading-snug text-ink-500">{markerNote}</p>
    )}

    {gains && (
      <ul className="mt-10 flex flex-wrap justify-center gap-3">
        {gains.map(({ Icon, text }) => (
          <li
            key={text}
            className="flex items-center gap-3 rounded-md border border-border px-4 py-2.5 text-sm text-ink-600 md:text-base"
          >
            <Icon aria-hidden="true" className="h-4 w-4 text-accent" strokeWidth={1.5} />
            {text}
          </li>
        ))}
      </ul>
    )}
  </div>
);

/**
 * One source fanning out to many recipients. The curves are an SVG that
 * stretches to whatever height the column takes; on a phone the fan
 * collapses to a simple stacked list, because five curves at 320px wide is
 * noise rather than information.
 */
export const Fan = ({
  source,
  targets,
}: {
  source: { label: string; note?: string };
  targets: string[];
}) => (
  <div className="grid items-center gap-8 md:grid-cols-[minmax(0,24rem)_1fr_minmax(0,13rem)] md:gap-0">
    <div className="panel border-l-4 border-l-accent p-6 md:p-8">
      <p className="text-xl leading-snug md:text-2xl">{source.label}</p>
      {source.note && <p className="mt-3 text-sm leading-snug text-ink-600">{source.note}</p>}
    </div>

    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="hidden h-64 w-full text-ink-500 md:block"
    >
      {[10, 30, 50, 70, 90].map((y) => (
        <path
          key={y}
          d={`M0 50 C 45 50, 55 ${y}, 100 ${y}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>

    <ul className="divide-y divide-border border-y border-border">
      {targets.map((target) => (
        <li key={target} className="flex items-center gap-3 py-3.5">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink-400" />
          <span className="text-sm text-ink-600 md:text-base">{target}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * A year of delivery capacity, drawn as blocks. Two fat blocks beside
 * twenty-six thin ones makes the ratio arithmetic-free.
 */
export const CapacityYear = ({
  label,
  cycle,
  count,
  result,
}: {
  label: string;
  cycle: string;
  count: number;
  result: string;
}) => (
  <div>
    <p className="label text-ink-500">{label}</p>
    <p className="mt-4 text-xl leading-snug md:text-2xl">{cycle}</p>

    <div
      aria-hidden="true"
      className="mt-8 flex h-24 gap-1 rounded-lg border border-border p-1 md:h-28"
      style={{ minWidth: 0 }}
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="h-full flex-1 bg-ink-600" />
      ))}
    </div>
    <p className="label mt-3 text-ink-500">One calendar year</p>

    <p className="mt-6 text-[1.75rem] leading-none md:text-[2.25rem]">{result}</p>
  </div>
);

/** A vertical consequence chain. Each link earns the one below it. */
export const Cascade = ({ steps }: { steps: (string | CascadeStep)[] }) => (
  <ol className="max-w-2xl">
    {steps.map((entry, i) => {
      const step = typeof entry === 'string' ? { name: entry } : entry;
      // The two ends carry the accent: where a turn starts, and what it
      // arrives at. Everything between them is the machinery.
      const end = i === 0 || i === steps.length - 1;

      return (
        <li key={step.name} className="relative flex gap-5 pb-8 last:pb-0">
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[0.4375rem] top-5 w-px bg-border"
            />
          )}

          <span
            aria-hidden="true"
            className={`relative mt-2 h-3.5 w-3.5 shrink-0 rounded-full border ${
              end ? 'border-accent bg-accent' : 'border-ink-400 bg-background'
            }`}
          />

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-4">
              <span
                className={`label shrink-0 tabular-nums ${end ? 'text-accent' : 'text-ink-500'}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-lg leading-snug md:text-2xl">{step.name}</span>
            </div>
            {step.note && (
              <p className="mt-2 text-sm leading-snug text-ink-500">{step.note}</p>
            )}
          </div>
        </li>
      );
    })}
  </ol>
);

/**
 * Widening scope. Each rung is longer than the last, so the growth of the
 * question is visible before it is read.
 */
export const Ladder = ({ rungs }: { rungs: string[] }) => (
  <ol className="space-y-3">
    {rungs.map((rung, i) => (
      <li key={rung} className="flex items-center gap-4 md:gap-6">
        <span
          aria-hidden="true"
          className={`h-px shrink-0 ${i === rungs.length - 1 ? 'bg-foreground' : 'bg-border'}`}
          style={{ width: `${12 + i * 12}%` }}
        />
        <span
          className={
            i === rungs.length - 1
              ? 'text-xl leading-none md:text-3xl'
              : 'text-lg leading-none text-ink-600 md:text-2xl'
          }
        >
          {rung}
        </span>
      </li>
    ))}
  </ol>
);

/** Utilisation scenarios, drawn as a filling bar. */
export const ScenarioBars = ({
  rows,
}: {
  rows: { share: number; customers: string; value: string }[];
}) => (
  <div className="divide-y divide-border border-y border-border">
    {rows.map((row) => (
      <div key={row.share} className="grid gap-4 py-6 md:grid-cols-[6rem_1fr_auto] md:items-center">
        <p className="label tabular-nums text-ink-500">{row.share}%</p>
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-2 flex-1 bg-border">
            <span className="block h-2 bg-foreground" style={{ width: `${row.share}%` }} />
          </span>
          <span className="w-[13ch] shrink-0 text-sm text-ink-600">{row.customers}</span>
        </div>
        <p className="text-xl leading-none tabular-nums md:text-2xl">{row.value}</p>
      </div>
    ))}
  </div>
);

/**
 * The chapters as a walked path rather than a row of equal cells.
 *
 * The previous rendering was five hairline cells in one grid, which read as a
 * table of contents: five things that exist, side by side, none of them
 * before or after another. But the section's claim is that these chapters
 * happened *to* someone, in order, each question only askable because the one
 * before it had been answered.
 *
 * Below lg the stages hang off a left spine, which is the layout a narrow
 * screen wants. From lg the spine moves to the centre and the stages
 * alternate sides, so the path actually occupies the slide instead of
 * hugging its left edge with the right half empty: the question copy stays
 * capped at a readable measure, and the alternation is what spends the width.
 *
 * Every stage is a real link to its chapter, so the journey is also the map
 * of the page. Nothing depends on the animation; with motion off the path is
 * simply there.
 *
 * The accent marks a single node, `turn`, for the chapter where the project
 * changed direction. The destination does not need marking: it is at the
 * bottom of the path.
 */
export const Journey = ({
  stages,
}: {
  stages: { n: string; name: string; question: string; href?: string; turn?: boolean }[];
}) => (
  <ol className="sequence relative before:absolute before:bottom-8 before:left-[1.0625rem] before:top-4 before:w-px before:bg-border before:content-[''] lg:before:left-1/2">
    {stages.map((stage, i) => {
      // From lg, even stages sit left of the centre spine and odd ones right.
      const left = i % 2 === 0;

      const node = (
        <span
          aria-hidden="true"
          className={`label-strong relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full tabular-nums ${
            stage.turn ? 'bg-accent text-accent-foreground' : 'bg-foreground text-background'
          } ${left ? 'lg:order-last lg:translate-x-1/2' : 'lg:-translate-x-1/2'}`}
        >
          {stage.n}
        </span>
      );

      const body = (
        <span className={`min-w-0 pt-1 ${left ? 'lg:text-right' : ''}`}>
          <span
            className={`label-strong flex items-center gap-3 ${
              left ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {stage.name}
            {stage.turn && (
              <span className="label rounded-full bg-accent px-2 py-1 text-accent-foreground">
                The turn
              </span>
            )}
          </span>
          <span
            className={`mt-2.5 block max-w-[38ch] text-lg leading-snug text-ink-800 md:text-xl ${
              left ? 'lg:ml-auto' : ''
            }`}
          >
            {stage.question}
          </span>
        </span>
      );

      const rowClass = `group/stage flex gap-5 rounded-[var(--radius)] py-5 pr-4 md:py-6 lg:gap-8 lg:pr-0 ${
        left ? 'lg:justify-end lg:pl-0' : 'lg:pl-0'
      }`;

      return (
        <li
          key={stage.n}
          // Each stage owns one half of the row from lg; the node's own
          // translate then centres it on the spine, so the geometry is a
          // half-shift of a known width rather than anything measured.
          className={`relative ${left ? 'lg:w-1/2' : 'lg:ml-[50%] lg:w-1/2'}`}
        >
          {stage.href ? (
            <a href={stage.href} className={`${rowClass} transition-colors hover:bg-card`}>
              {node}
              {body}
            </a>
          ) : (
            <div className={rowClass}>
              {node}
              {body}
            </div>
          )}
        </li>
      );
    })}
  </ol>
);

/**
 * The information architecture, at the altitude the story needs: what the
 * product is made of and how it groups, not a full sitemap.
 */
export const IaMap = ({
  groups,
}: {
  groups: { label: string; items: string[] }[];
}) => (
  <div>
    <div className="panel inline-block px-5 py-3">
      <p className="text-lg leading-none md:text-xl">BrynQ</p>
    </div>
    <div aria-hidden="true" className="ml-8 h-8 w-px bg-border md:h-10" />
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((group) => (
        <div key={group.label} className="panel p-5 md:p-6">
          <p className="label text-ink-500">{group.label}</p>
          <ul className="mt-5 space-y-2.5">
            {group.items.map((item) => (
              <li key={item} className="text-sm leading-snug text-ink-600 md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

/**
 * A product and the work that surrounds it. Two of these side by side is
 * the whole before-and-after argument: the box barely changes, what orbits
 * it changes completely.
 */
export const Ecosystem = ({
  label,
  inside,
  around,
  emphasis = false,
}: {
  label: string;
  inside: string[];
  around: string[];
  emphasis?: boolean;
}) => (
  <div className={`panel p-6 md:p-8 ${emphasis ? 'border-l-4 border-l-accent' : ''}`}>
    <p className="label text-ink-500">{label}</p>

    <div className="panel-chip mt-6 rounded-lg p-5">
      <p className="label mb-4 text-ink-500">Inside the product</p>
      <ul className="space-y-2">
        {inside.map((item) => (
          <li key={item} className="text-base leading-snug md:text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>

    <p className="label mt-7 text-ink-500">Around it</p>
    <ul className="mt-4 flex flex-wrap gap-2">
      {around.map((item) => (
        <li key={item} className="panel-chip rounded-md px-3 py-2 text-sm text-ink-600">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Where the product boundary sat, drawn on the delivery line.
 *
 * The stages run left to right; a bracket over each group says which side of
 * the product they happened on. A dashed marker sits on the seam between the
 * two, and the accent arrow under it points back the way the boundary needed
 * to move. Everything is positioned as a percentage of the stage count, so
 * the geometry stays true whatever the container width.
 */
export const BoundaryLine = ({
  stages,
  inside,
  outsideLabel,
  insideLabel,
  markerNote,
  shift,
}: {
  stages: string[];
  /** How many trailing stages sat inside the product. */
  inside: number;
  outsideLabel: string;
  insideLabel: string;
  markerNote: string;
  /** The move being argued for: how far back the boundary should reach. */
  shift?: { toStage: number; note: string };
}) => {
  const n = stages.length;
  const outsideCount = n - inside;
  // The seam falls on a column edge; a dot centre falls half a column in.
  const seam = (outsideCount / n) * 100;
  const centreOf = (i: number) => ((i + 0.5) / n) * 100;
  const columns = { gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` };

  return (
    <div className="panel p-5 py-8 md:p-10 md:py-12">
      {/* Group labels, each over a bracket that opens downward onto its stages. */}
      <div className="grid" style={columns}>
        {[
          { label: outsideLabel, span: outsideCount },
          { label: insideLabel, span: inside },
        ].map((group) => (
          <div key={group.label} style={{ gridColumn: `span ${group.span}` }}>
            <p className="label text-center text-ink-500">{group.label}</p>
            <div
              aria-hidden="true"
              className="mx-[6%] mt-4 h-2 border-x border-t border-border"
            />
          </div>
        ))}
      </div>

      {/* The line itself, drawn dot to dot rather than edge to edge. */}
      <div className="relative mt-8">
        <div
          aria-hidden="true"
          className="absolute top-[0.3125rem] h-px bg-border"
          style={{ left: `${50 / n}%`, right: `${50 / n}%` }}
        />
        <ol className="relative grid" style={columns}>
          {stages.map((stage, i) => (
            <li key={stage} className="flex flex-col items-center">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  i >= outsideCount ? 'bg-accent' : 'bg-ink-500'
                }`}
              />
              <p className="mt-4 px-1 text-center text-xs leading-snug sm:text-sm md:text-base">
                {stage}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* The seam, and the direction it needed to travel. */}
      <div className="relative mt-5 h-28 sm:h-24">
        <div
          aria-hidden="true"
          className="absolute top-0 h-12 border-l border-dashed border-ink-400"
          style={{ left: `${seam}%` }}
        />
        <p
          className="absolute top-14 w-24 -translate-x-1/2 text-center text-xs leading-snug sm:w-28"
          style={{ left: `${seam}%` }}
        >
          {markerNote}
        </p>

        {shift && (
          <>
            <div
              aria-hidden="true"
              className="absolute top-[3.4rem] border-t border-dashed border-accent"
              style={{ left: `${centreOf(shift.toStage)}%`, right: `${100 - seam}%` }}
            />
            <span
              aria-hidden="true"
              className="absolute top-[3.4rem] -translate-x-full -translate-y-1/2 border-y-[5px] border-r-[7px] border-y-transparent border-r-accent"
              style={{ left: `${centreOf(shift.toStage)}%` }}
            />
            <p
              className="absolute top-[4.4rem] w-40 -translate-x-1/2 text-center text-xs leading-snug text-ink-600 sm:w-48"
              style={{ left: `${(centreOf(shift.toStage) + seam) / 2}%` }}
            >
              {shift.note}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

/**
 * A numbered sequence, read top to bottom. Each step wears its index in a
 * ring and a dashed line carries the eye to the next, so a seven-step chain
 * and a six-step one can be compared at a glance.
 */
export const NumberedFlow = ({ steps }: { steps: string[] }) => (
  <ol>
    {steps.map((step, i) => (
      <li key={step} className="relative flex items-center gap-5 pb-6 last:pb-0">
        {i < steps.length - 1 && (
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-8 -ml-px w-px border-l border-dashed border-border"
          />
        )}
        <span className="label relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-card tabular-nums text-ink-500">
          {String(i + 1).padStart(2, '0')}
        </span>
        <span className="text-base leading-snug md:text-lg">{step}</span>
      </li>
    ))}
  </ol>
);

/** A compact labelled flow, used inside comparison panes. */
export const MiniFlow = ({ steps }: { steps: string[] }) => (
  <ol className="mt-6 space-y-2.5">
    {steps.map((step, i) => (
      <li key={step} className="flex items-center gap-3">
        <span className="label w-5 shrink-0 tabular-nums text-ink-500">
          {String(i + 1).padStart(2, '0')}
        </span>
        <span className="text-base text-ink-600 md:text-lg">{step}</span>
      </li>
    ))}
  </ol>
);

/**
 * The conversational concept, drawn as the product it was proposing: the
 * chat on one side, the data model it is driving on the other, and the
 * systems being joined across the top. The point of the picture is that the
 * two panels are the same thing, not a chatbot bolted onto a form.
 */
export const MappingCanvas = ({
  source,
  target,
  turns,
  rows,
  actions,
}: {
  source: string;
  target: string;
  turns: { who: string; said: string }[];
  rows: { from: string; to: string; state: 'auto' | 'input' }[];
  actions: string[];
}) => (
  <div className="panel overflow-hidden">
    {/* Systems being joined. */}
    <div className="flex flex-wrap items-center gap-4 border-b border-border px-5 py-4 md:px-6">
      <span className="rounded-md border border-border px-3 py-2 text-sm md:text-base">{source}</span>
      <Caret className="w-6 shrink-0 text-ink-400" />
      <span className="rounded-md border border-border px-3 py-2 text-sm md:text-base">{target}</span>
    </div>

    <div className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      {/* The conversation. */}
      <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
        <p className="label text-ink-500">Conversation</p>
        <div className="mt-6 space-y-5">
          {turns.map((turn) => (
            <div key={turn.said} className="border-l border-border pl-4">
              <p className="label mb-2 text-ink-500">{turn.who}</p>
              <p className="text-sm leading-snug text-ink-600 md:text-base">{turn.said}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The data model it is driving. */}
      <div className="p-5 md:p-6">
        <p className="label text-ink-500">Field mapping</p>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {rows.map((row) => (
            <li key={row.from} className="flex items-center gap-3 py-3">
              <span className="min-w-0 flex-1 text-sm leading-snug text-ink-600 md:text-base">
                {row.from}
              </span>
              <Caret className="w-5 shrink-0 text-ink-400" />
              <span className="min-w-0 flex-1 text-sm leading-snug md:text-base">{row.to}</span>
              <span
                className={`label shrink-0 rounded-md px-2 py-1 ${
                  row.state === 'auto'
                    ? 'border border-border text-ink-400'
                    : 'border border-foreground text-ink-800'
                }`}
              >
                {row.state === 'auto' ? 'Auto' : 'You'}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {actions.map((action) => (
            <span key={action} className="label border border-dashed border-border px-2.5 py-1.5 text-ink-500">
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/**
 * A chain of named stages: what we thought, what we found, what we changed.
 * The label carries as much weight as the text, so the shape of the decision
 * is legible without reading the whole thing.
 */
export const Stages = ({ items }: { items: { label: string; text: ReactNode }[] }) => (
  <ol className="grid gap-x-0 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item, i) => (
      <li key={item.label} className="lg:pr-8">
        <div className="flex items-center gap-4">
          <span className="label flex h-10 w-10 shrink-0 items-center justify-center border border-border tabular-nums text-ink-500">
            {String(i + 1).padStart(2, '0')}
          </span>
          {/* The arrow runs to the edge of the column, where the next number
              sits, so the four read as one line rather than four cards. */}
          {i < items.length - 1 && (
            <span aria-hidden="true" className="hidden flex-1 items-center lg:flex">
              <span className="h-px flex-1 bg-border" />
              <Caret className="h-2.5 w-5 shrink-0 text-ink-400" />
            </span>
          )}
        </div>

        <p className="label mt-7 text-ink-500">{item.label}</p>
        <div className="mt-5 max-w-[22ch] text-lg leading-snug md:text-2xl">{item.text}</div>
      </li>
    ))}
  </ol>
);
