import type { CSSProperties, ReactNode } from 'react';
import { RudolfPaw, RudolfSitting } from './Rudolf';

/**
 * The diagram set for the Layrrrd story.
 *
 * Every one of these is drawn from hairlines, the ink scale and type, the
 * same materials the rest of the page is made of, so a diagram reads as
 * part of the story rather than as an illustration dropped into it. All of
 * them reflow to a single column on narrow screens, and none of them put
 * text below the small step, because a diagram nobody can read on a phone
 * is decoration.
 */

/** The connective arrow. Points down when the layout stacks. */
const Arrow = ({ className = '' }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={`flex items-center justify-center text-ink-400 ${className}`}
  >
    <svg viewBox="0 0 24 12" className="h-3 w-6 rotate-90 md:rotate-0" fill="none">
      <path
        d="M1 6h21M17 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

/**
 * Day one to day nine, and everything after it. Rudolf runs the line.
 * The sprint is the inked half; what came after is the hairline half,
 * which is the whole point of the slide.
 */
export const SprintLine = () => (
  <div className="mt-16 md:mt-20">
    <div className="relative">
      {/* The trail of the run, over the inked half of the line. */}
      <div
        aria-hidden="true"
        className="absolute -top-7 left-0 flex w-[52%] items-center justify-between pr-8 md:-top-9"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <RudolfPaw
            key={i}
            className={`h-3 w-auto text-ink-400 md:h-4 ${i % 2 ? 'translate-y-1.5' : ''}`}
          />
        ))}
      </div>

      {/* Rudolf, arrived, sitting where the sprint ended. */}
      <RudolfSitting
        aria-hidden="true"
        className="absolute -top-[4.5rem] left-[56%] h-16 w-auto text-foreground md:-top-24 md:h-24"
      />

      {/* Nine inked days, then everything that came after them. */}
      <div aria-hidden="true" className="flex items-center">
        <span className="h-0.5 flex-[9] bg-foreground" />
        <span className="h-px flex-[7] bg-border" />
      </div>
    </div>

    <div className="mt-5 flex items-start justify-between gap-6">
      <div>
        <p className="label text-ink-500">Day 1</p>
        <p className="mt-2 text-lg leading-snug md:text-2xl">Hypothesis</p>
      </div>
      <div className="text-right">
        <p className="label text-ink-500">Day 9</p>
        <p className="mt-2 text-lg leading-snug md:text-2xl">People paid</p>
      </div>
    </div>

    <ul className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3">
      {['Chrome extension', 'Telegram', 'WhatsApp', 'Referrals', 'Today'].map((step, i) => (
        <li key={step} className="flex items-center gap-3">
          {i > 0 && (
            <span aria-hidden="true" className="text-ink-400">
              &rarr;
            </span>
          )}
          <span
            className={`label px-3 py-2 ${
              step === 'Today'
                ? 'bg-foreground text-background'
                : 'border border-border text-ink-600'
            }`}
          >
            {step}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Where saved things actually go. Six named places, one pile, and Rudolf
 * looking into it. The sources sit on hairlines that all end at the same
 * floor, so the drawing reads as accumulation rather than as a list.
 */
export const Graveyard = () => {
  const sources = ['Browser tabs', 'Bookmarks', 'Telegram', 'WhatsApp', 'Screenshots', 'Notes'];

  return (
    <div className="mt-12 md:mt-16">
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
        {sources.map((source) => (
          <div key={source} className="flex flex-col">
            <p className="text-sm leading-snug md:text-base">{source}</p>
            <span aria-hidden="true" className="mt-3 h-10 w-px bg-border md:h-16" />
          </div>
        ))}
      </div>

      <div className="relative mt-2 border-t border-foreground">
        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label text-ink-500">Where it lands</p>
            <p className="mt-3 max-w-[16ch] text-[2rem] font-medium leading-[1.05] md:text-[3rem]">
              The saved-content graveyard
            </p>
            <p className="mt-4 max-w-md text-base leading-[1.55] text-ink-600">
              Write-only. Everything goes in, almost nothing is ever asked for again.
            </p>
          </div>
          <RudolfSitting
            aria-hidden="true"
            className="h-28 w-auto shrink-0 self-start text-foreground md:h-40 md:self-end"
          />
        </div>
      </div>
    </div>
  );
};

interface Rung {
  level: string;
  method: string;
  question: string;
}

/**
 * The evidence ladder. Each rung is a more expensive and more reliable
 * answer than the one below it, which is why the bars grow: the width is
 * the cost of being wrong at that level.
 */
export const EvidenceLadder = ({ rungs }: { rungs: Rung[] }) => (
  <div className="mt-12 md:mt-16">
    <ul className="space-y-px">
      {rungs.map((rung, i) => (
        <li
          key={rung.method}
          className={`flex w-full flex-col gap-2 px-5 py-5 md:w-[var(--rung-width)] md:flex-row md:items-baseline md:gap-8 md:px-6 ${
            i === rungs.length - 1 ? 'bg-foreground text-background' : 'bg-card'
          }`}
          style={
            {
              '--rung-width': `${72 + (i * 28) / Math.max(rungs.length - 1, 1)}%`,
            } as CSSProperties
          }
        >
          <span className="label shrink-0 tabular-nums opacity-70">{rung.level}</span>
          <span className="shrink-0 text-lg leading-snug md:w-44 md:text-xl">{rung.method}</span>
          <span
            className={`text-sm leading-snug md:text-base ${
              i === rungs.length - 1 ? 'opacity-80' : 'text-ink-600'
            }`}
          >
            {rung.question}
          </span>
        </li>
      ))}
    </ul>
    <p className="label mt-5 text-ink-500">Cost of being wrong, increasing downward</p>
  </div>
);

/** A linear chain of stages. Wraps on desktop, stacks on mobile. */
export const Chain = ({ steps, dense = false }: { steps: string[]; dense?: boolean }) => (
  <ol className={`flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center ${dense ? 'mt-8' : 'mt-12 md:mt-14'}`}>
    {steps.map((step, i) => (
      <li key={step} className="flex items-center gap-2 md:gap-3">
        {i > 0 && <Arrow className="h-4 w-4 shrink-0" />}
        <span
          className={`px-3 py-2 text-sm leading-snug md:text-base ${
            i === steps.length - 1
              ? 'bg-foreground text-background'
              : 'border border-border text-ink-600'
          }`}
        >
          {step}
        </span>
      </li>
    ))}
  </ol>
);

/**
 * Three beats of a reframe: what we assumed, what the evidence said, what
 * the problem turned out to be. The last cell is inked because it is the
 * one that changed the product.
 */
export const Reframe = ({
  steps,
}: {
  steps: { label: string; body: string }[];
}) => (
  <div className="mt-12 flex flex-col gap-4 md:mt-16 md:flex-row md:items-stretch md:gap-5">
    {steps.map((step, i) => (
      <div key={step.label} className="flex flex-1 flex-col gap-4 md:flex-row md:items-center">
        <div
          className={`flex-1 rounded-[3px] p-5 md:p-6 ${
            i === steps.length - 1 ? 'bg-foreground text-background' : 'bg-card'
          }`}
        >
          <p className={`label mb-3 ${i === steps.length - 1 ? 'opacity-70' : 'text-ink-500'}`}>
            {step.label}
          </p>
          <p className="text-lg leading-snug md:text-xl">{step.body}</p>
        </div>
        {i < steps.length - 1 && <Arrow className="h-4 w-full shrink-0 md:w-6" />}
      </div>
    ))}
  </div>
);

/**
 * Candidate identities for the product. The ones that were let go are
 * struck through, so the slide shows a decision rather than a list.
 */
export const DirectionCards = ({
  options,
}: {
  options: { name: string; kept?: boolean }[];
}) => (
  <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
    {options.map((option) => (
      <div
        key={option.name}
        className={`relative flex min-h-[8rem] items-end rounded-[3px] p-5 md:min-h-[10rem] ${
          option.kept ? 'bg-foreground text-background' : 'bg-card'
        }`}
      >
        <p
          className={`text-lg leading-snug md:text-xl ${
            option.kept ? '' : 'text-ink-500 line-through decoration-ink-400'
          }`}
        >
          {option.name}
        </p>
      </div>
    ))}
  </div>
);

/** What we thought, what the research said, what we changed. */
export const DecisionChain = ({
  thought,
  evidence,
  decision,
}: {
  thought: string;
  evidence: string;
  decision: string;
}) => (
  <div className="mt-12 max-w-4xl md:mt-16">
    {[
      { label: 'We thought', body: thought, ink: false },
      { label: 'The research said', body: evidence, ink: false },
      { label: 'So we changed', body: decision, ink: true },
    ].map((row, i) => (
      <div key={row.label}>
        {i > 0 && <span aria-hidden="true" className="ml-6 block h-6 w-px bg-border md:h-8" />}
        <div
          className={`rounded-[3px] px-5 py-5 md:px-6 ${row.ink ? 'bg-foreground text-background' : 'bg-card'}`}
        >
          <p className={`label mb-2.5 ${row.ink ? 'opacity-70' : 'text-ink-500'}`}>{row.label}</p>
          <p className="text-lg leading-snug md:text-2xl">{row.body}</p>
        </div>
      </div>
    ))}
  </div>
);

/** What was in the MVP and what waited. The boundary is the design work. */
export const ScopeBoundary = ({ inScope, outScope }: { inScope: string[]; outScope: string[] }) => (
  <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-2 lg:gap-10">
    <div className="rounded-[3px] bg-foreground p-6 text-background md:p-8">
      <p className="label mb-5 opacity-70">In, because it tests the loop</p>
      <ul className="space-y-3">
        {inScope.map((item) => (
          <li key={item} className="text-lg leading-snug md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6 md:p-8">
      <p className="label mb-5 text-ink-500">Out, because it waits</p>
      <ul className="space-y-3">
        {outScope.map((item) => (
          <li key={item} className="text-lg leading-snug text-ink-500 md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/** Capture, understand, return: the loop the whole product is built on. */
export const ProductLoop = ({
  stages,
}: {
  stages: { n: string; name: string; body: string; items: string[] }[];
}) => (
  <div className="mt-12 flex flex-col gap-5 md:mt-16 lg:flex-row lg:items-stretch">
    {stages.map((stage, i) => (
      <div key={stage.name} className="flex flex-1 flex-col gap-5 lg:flex-row lg:items-center">
        <div className="flex-1 border-t-2 border-foreground pt-5">
          <div className="flex items-baseline gap-3">
            <span className="label tabular-nums text-ink-500">{stage.n}</span>
            <h3 className="text-2xl font-medium leading-none md:text-[2rem]">{stage.name}</h3>
          </div>
          <p className="mt-4 max-w-[28ch] text-base leading-[1.5] text-ink-600">{stage.body}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stage.items.map((item) => (
              <li key={item} className="label border border-border px-2.5 py-1.5 text-ink-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {i < stages.length - 1 && <Arrow className="h-4 w-full shrink-0 lg:w-8" />}
      </div>
    ))}
  </div>
);

/**
 * Four entry points, one pipeline. Drawn as a funnel of hairlines so the
 * point reads instantly: these are doors into the same room, not four
 * separate products.
 */
export const Pipeline = ({
  surfaces,
  outputs,
}: {
  surfaces: string[];
  outputs: string[];
}) => (
  <div className="mt-12 md:mt-16">
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {surfaces.map((surface) => (
        <li
          key={surface}
          className="rounded-[3px] border border-border px-4 py-4 text-center text-base leading-snug md:text-lg"
        >
          {surface}
        </li>
      ))}
    </ul>

    <div aria-hidden="true" className="flex justify-center py-5">
      <svg viewBox="0 0 200 40" className="h-10 w-full max-w-md text-ink-400" fill="none">
        <path
          d="M12 2v12c0 6 6 10 14 12l68 12M68 2v10c0 6 4 9 12 11l14 3M132 2v10c0 6-4 9-12 11l-14 3M188 2v12c0 6-6 10-14 12l-68 12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <div className="rounded-[3px] bg-foreground px-6 py-6 text-center text-background md:py-8">
      <p className="label mb-2.5 opacity-70">One pipeline</p>
      <p className="text-xl leading-snug md:text-[2rem]">Save · process · retrieve · refine</p>
    </div>

    <div aria-hidden="true" className="mx-auto h-8 w-px bg-border" />

    <ul className="flex flex-wrap justify-center gap-2">
      {outputs.map((output) => (
        <li key={output} className="label border border-border px-3 py-2 text-ink-600">
          {output}
        </li>
      ))}
    </ul>
  </div>
);

/**
 * The save-state trust fix. Two columns, same event, different feedback:
 * the left one is the version users did not believe.
 */
export const TrustFlow = ({
  before,
  after,
}: {
  before: { label: string; steps: string[]; end: string };
  after: { label: string; steps: string[]; end: string };
}) => (
  <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-2 lg:gap-10">
    {[before, after].map((column, index) => {
      const resolved = index === 1;
      return (
        <div key={column.label}>
          <p className="label mb-5 text-ink-500">{column.label}</p>
          <ol className="space-y-2">
            {column.steps.map((step) => (
              <li
                key={step}
                className="rounded-[3px] bg-card px-4 py-3.5 text-base leading-snug md:text-lg"
              >
                {step}
              </li>
            ))}
          </ol>
          <div aria-hidden="true" className="ml-5 h-5 w-px bg-border" />
          <p
            className={`rounded-[3px] px-4 py-4 text-lg leading-snug md:text-2xl ${
              resolved
                ? 'bg-foreground text-background'
                : 'border border-dashed border-ink-400 text-ink-500'
            }`}
          >
            {column.end}
          </p>
        </div>
      );
    })}
  </div>
);

/** Before, the evidence that moved it, and after. One row per pivot. */
export const Pivots = ({
  rows,
}: {
  rows: { from: string; to: string; evidence: string; unlocked: string }[];
}) => (
  <div className="mt-12 space-y-px md:mt-16">
    {rows.map((row) => (
      <div key={row.to} className="grid gap-4 bg-card p-5 md:grid-cols-[1fr_1.1fr_1fr] md:gap-8 md:p-6">
        <p className="text-lg leading-snug md:text-xl">
          <span className="text-ink-500 line-through decoration-ink-400">{row.from}</span>{' '}
          <span aria-hidden="true" className="text-ink-400">
            &rarr;
          </span>{' '}
          <span className="em">{row.to}</span>
        </p>
        <p className="text-sm leading-[1.55] text-ink-600 md:text-base">{row.evidence}</p>
        <p className="text-sm leading-[1.55] md:text-base">
          <span className="label mr-2 text-ink-500">Unlocked</span>
          {row.unlocked}
        </p>
      </div>
    ))}
  </div>
);

/**
 * The rising cost of evidence. A staircase where there is width for one,
 * and a widening list where there is not, because four vertical columns on
 * a phone is a puzzle rather than a diagram.
 */
export const CostSteps = ({ steps }: { steps: string[] }) => (
  <div className="mt-12 flex flex-col gap-1.5 md:mt-16 md:flex-row md:items-end md:gap-3">
    {steps.map((step, i) => (
      <div
        key={step}
        className={`flex items-end rounded-t-[3px] px-4 py-3.5 text-base leading-tight md:h-[var(--step-height)] md:flex-1 md:text-lg ${
          i === steps.length - 1 ? 'bg-foreground text-background' : 'bg-card'
        }`}
        style={
          {
            '--step-height': `${4.5 + i * 2.6}rem`,
            width: `${58 + (i * 42) / Math.max(steps.length - 1, 1)}%`,
          } as CSSProperties
        }
      >
        <span className="md:w-full">{step}</span>
      </div>
    ))}
  </div>
);

/** Acquisition streams converging on the same outcome. */
export const Streams = ({
  streams,
  outcome,
}: {
  streams: { name: string; body: string }[];
  outcome: string;
}) => (
  <div className="mt-12 md:mt-16">
    <div className="grid gap-4 md:grid-cols-3 md:gap-6">
      {streams.map((stream) => (
        <div key={stream.name} className="border-t-2 border-foreground pt-4">
          <p className="text-xl leading-snug md:text-2xl">{stream.name}</p>
          <p className="mt-2.5 text-sm leading-[1.55] text-ink-600 md:text-base">{stream.body}</p>
        </div>
      ))}
    </div>
    <div aria-hidden="true" className="flex justify-center py-6">
      <svg viewBox="0 0 200 36" className="h-9 w-full max-w-sm text-ink-400" fill="none">
        <path
          d="M14 2v10c0 6 8 10 20 13l62 9M100 2v30M186 2v10c0 6-8 10-20 13l-62 9"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <p className="text-center text-xl leading-snug md:text-[2rem]">{outcome}</p>
  </div>
);

/** A stack that widens downward: the role growing with the uncertainty. */
export const WideningStack = ({ layers }: { layers: string[] }) => (
  <div className="mt-12 space-y-2 md:mt-16">
    {layers.map((layer, i) => (
      <div
        key={layer}
        className={`w-full rounded-[3px] px-5 py-4 text-lg leading-snug md:w-[var(--layer-width)] md:px-6 md:text-2xl ${
          i === layers.length - 1 ? 'bg-foreground text-background' : 'bg-card'
        }`}
        style={
          { '--layer-width': `${58 + (i * 42) / Math.max(layers.length - 1, 1)}%` } as CSSProperties
        }
      >
        {layer}
      </div>
    ))}
  </div>
);

/** Rudolf in the middle, his jobs around him. */
export const RudolfJobs = ({ jobs }: { jobs: { role: string; body: string }[] }) => (
  <div className="mt-12 grid items-center gap-8 md:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
    <ul className="space-y-6">
      {jobs.slice(0, 2).map((job) => (
        <li key={job.role} className="lg:text-right">
          <p className="text-xl leading-snug md:text-2xl">{job.role}</p>
          <p className="mt-2 text-sm leading-[1.5] text-ink-600 md:text-base">{job.body}</p>
        </li>
      ))}
    </ul>
    <RudolfSitting
      aria-hidden="true"
      className="mx-auto h-40 w-auto text-foreground md:h-56"
    />
    <ul className="space-y-6">
      {jobs.slice(2).map((job) => (
        <li key={job.role}>
          <p className="text-xl leading-snug md:text-2xl">{job.role}</p>
          <p className="mt-2 text-sm leading-[1.5] text-ink-600 md:text-base">{job.body}</p>
        </li>
      ))}
    </ul>
  </div>
);

/** A labelled horizontal run of events, used for what happened after day nine. */
export const AfterTimeline = ({ steps }: { steps: string[] }) => (
  <ol className="mt-12 grid gap-px md:mt-16 md:grid-flow-col md:auto-cols-fr">
    {steps.map((step, i) => (
      <li
        key={step}
        className={`px-4 py-5 ${
          i === 0 || i === steps.length - 1 ? 'bg-foreground text-background' : 'bg-card'
        }`}
      >
        <span className="label mb-2.5 block opacity-70">{String(i + 1).padStart(2, '0')}</span>
        <span className="text-sm leading-snug lg:text-base">{step}</span>
      </li>
    ))}
  </ol>
);

/** Fragments from conversations. Never dressed up as personas. */
export const Fragments = ({ lines }: { lines: string[] }) => (
  <div className="mt-10 grid gap-4 sm:grid-cols-2">
    {lines.map((line) => (
      <p
        key={line}
        className="rounded-[3px] border border-border px-5 py-5 text-lg leading-snug md:text-xl"
      >
        &ldquo;{line}&rdquo;
      </p>
    ))}
  </div>
);

/** Two columns of findings, kept side by side so the trade reads at a glance. */
export const Verdicts = ({
  worked,
  broke,
}: {
  worked: string[];
  broke: string[];
}) => (
  <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-2 lg:gap-10">
    <div className="rounded-[3px] bg-card p-6 md:p-8">
      <p className="label mb-5 text-ink-500">What worked</p>
      <ul className="space-y-3.5">
        {worked.map((item) => (
          <li key={item} className="text-lg leading-snug md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="rounded-[3px] border border-border p-6 md:p-8">
      <p className="label mb-5 text-ink-500">What did not</p>
      <ul className="space-y-3.5">
        {broke.map((item) => (
          <li key={item} className="text-lg leading-snug md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/** A wrapper that lets a slide put a diagram beside its own copy. */
export const Beside = ({ children }: { children: ReactNode }) => (
  <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-16">{children}</div>
);
