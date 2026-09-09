import type { ReactNode } from 'react';

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
 * Where saved things actually went. Six named places and one pile.
 *
 * The sources sit on hairlines that all end at the same floor, so the
 * drawing reads as accumulation rather than as a list. It is named plainly:
 * the pile is the observation the project started from, and dressing it up
 * would put a joke where the evidence goes.
 */
export const SavedThenForgotten = () => {
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

      {/* The naming of the pile, set against the floor the sources fall to.
          Title and reading both start at that line, so the drawing lands on
          one horizontal rather than trailing off down the left edge. */}
      <div className="mt-2 grid gap-6 border-t border-foreground pt-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div>
          <p className="label text-ink-500">Where it lands</p>
          <p className="mt-3 max-w-[16ch] text-[2rem] font-medium leading-[1.05] md:text-[3rem]">
            Saved, then forgotten
          </p>
        </div>
        <p className="max-w-md text-base leading-[1.55] text-ink-600 md:self-end">
          Write-only. Everything goes in, almost nothing is ever asked for again.
        </p>
      </div>
    </div>
  );
};

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

/** What was in the MVP and what waited. The boundary is the design work. */
export const ScopeBoundary = ({ inScope, outScope }: { inScope: string[]; outScope: string[] }) => (
  <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-2 lg:gap-10">
    <div className="rounded-[3px] bg-foreground p-6 text-background md:p-8">
      <p className="label mb-5 opacity-70">We included</p>
      <ul className="space-y-3">
        {inScope.map((item) => (
          <li key={item} className="text-lg leading-snug md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6 md:p-8">
      <p className="label mb-5 text-ink-500">We deliberately postponed</p>
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

/**
 * The four things that changed mid-sprint: what it was, what it became,
 * the problem that forced it, and the change we made.
 *
 * There is no column for what each decision achieved. We did not measure
 * the effect of any of them inside nine days, and a claimed outcome with
 * no number behind it is the part of a case study a reader should not
 * trust.
 */
export const Pivots = ({
  rows,
}: {
  rows: { from: string; to: string; problem: string; change: string }[];
}) => (
  <div className="mt-12 space-y-px md:mt-16">
    {rows.map((row, i) => (
      <div
        key={row.to}
        className="grid gap-5 bg-card p-6 md:grid-cols-[1fr_1fr_1fr] md:gap-10 md:p-7"
      >
        <p className="text-lg leading-snug md:text-xl">
          <span className="label mb-3 block tabular-nums text-ink-500">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-ink-500 line-through decoration-ink-400">{row.from}</span>{' '}
          <span aria-hidden="true" className="text-ink-400">
            &rarr;
          </span>{' '}
          <span className="em">{row.to}</span>
        </p>
        <p className="text-sm leading-[1.55] text-ink-600 md:text-base">
          <span className="label mb-2.5 block text-ink-500">Problem</span>
          {row.problem}
        </p>
        <p className="text-sm leading-[1.55] md:text-base">
          <span className="label mb-2.5 block text-ink-500">Change</span>
          {row.change}
        </p>
      </div>
    ))}
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

/**
 * Fragments from conversations. Never dressed up as personas.
 *
 * `content-start` because this now sits directly in a Beside column: without
 * it the rows stretch to the height of whatever is in the other half, and
 * four short quotes turn into four tall mostly-empty cards.
 */
export const Fragments = ({ lines }: { lines: string[] }) => (
  <div className="mt-10 grid content-start gap-4 sm:grid-cols-2">
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

/* ------------------------------------------------------------------ *
 * The restructured case study.
 *
 * Everything below was written for the rebuilt page: fewer, larger
 * sections, and diagrams that carry an argument rather than restating a
 * paragraph. The rule they share is that the concept is drawn and the
 * product is photographed. A diagram here explains a decision; anywhere
 * the real interface exists, a screenshot goes in instead.
 * ------------------------------------------------------------------ */

/**
 * A small frame for a screenshot the repository does not have yet.
 *
 * Diagrams need product stills at thumbnail size, and a dashed hole is the
 * honest stand-in: it names the exact file it is waiting for, so filling it
 * is a find-and-replace rather than a hunt.
 */
export const Thumb = ({ file, ratio = 'aspect-[4/3]' }: { file: string; ratio?: string }) => (
  <div
    className={`flex items-center justify-center rounded-[3px] border border-dashed border-border px-3 py-3 text-center ${ratio}`}
  >
    <span className="label leading-tight text-ink-400">{file}</span>
  </div>
);

/**
 * The whole sprint as one run of steps: what we did, and what it told us.
 *
 * This replaces five chapter splash pages. A reader who stops here has the
 * shape of the project, which is most of what a two-minute scan is for.
 */
export const Progression = ({ steps }: { steps: { name: string; body: string }[] }) => (
  <ol className="mt-12 grid gap-x-5 gap-y-9 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 xl:grid-cols-7">
    {steps.map((step, i) => (
      <li key={step.name} className="border-t-2 border-foreground pt-4">
        <span className="label tabular-nums text-ink-500">{String(i + 1).padStart(2, '0')}</span>
        <p className="mt-2.5 text-lg leading-[1.2] md:text-xl">{step.name}</p>
        <p className="mt-2.5 text-sm leading-[1.45] text-ink-600">{step.body}</p>
      </li>
    ))}
  </ol>
);

/**
 * Research synthesis, reconstructed: behaviour, what it broke, what it
 * meant for the design. The last column is inked because it is the only
 * one that changed what we built.
 */
export const SynthesisColumns = ({
  columns,
}: {
  columns: { label: string; items: string[] }[];
}) => (
  <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
    {columns.map((column, i) => {
      const last = i === columns.length - 1;
      return (
        <div
          key={column.label}
          className={`rounded-[3px] p-6 md:p-7 ${last ? 'bg-foreground text-background' : 'bg-card'}`}
        >
          <p className={`label mb-5 ${last ? 'opacity-70' : 'text-ink-500'}`}>{column.label}</p>
          <ul className="space-y-3">
            {column.items.map((item) => (
              <li key={item} className="text-lg leading-snug md:text-xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);

/**
 * The direction change, drawn rather than described.
 *
 * The early model is a single line ending in the user waiting. The later
 * one widens: the library is the middle, and three ways back out of it sit
 * underneath. The shapes carry the decision, so the labels can stay short.
 */
export const DirectionShift = ({
  before,
  after,
}: {
  before: { label: string; chain: string[] };
  after: { label: string; chain: string[]; branches: string[] };
}) => {
  const Node = ({ children, ink = false }: { children: string; ink?: boolean }) => (
    <div
      className={`rounded-[3px] px-4 py-3.5 text-center text-base leading-snug md:text-lg ${
        ink ? 'bg-foreground text-background' : 'bg-card'
      }`}
    >
      {children}
    </div>
  );

  const Drop = () => <span aria-hidden="true" className="mx-auto block h-6 w-px bg-border" />;

  return (
    <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-2 lg:gap-12">
      <div>
        <p className="label mb-6 text-ink-500">{before.label}</p>
        {before.chain.map((step, i) => (
          <div key={step}>
            {i > 0 && <Drop />}
            <Node>{step}</Node>
          </div>
        ))}
      </div>

      <div>
        <p className="label mb-6 text-ink-500">{after.label}</p>
        {after.chain.map((step, i) => (
          <div key={step}>
            {i > 0 && <Drop />}
            <Node ink={i === after.chain.length - 1}>{step}</Node>
          </div>
        ))}

        {/* The fan. Three ways out of the same library, which is the whole
            difference between this column and the one beside it. */}
        {/* preserveAspectRatio="none" so the fan stretches to the width of
            the three branches. Left to itself the viewBox letterboxes to its
            own 200:28 and the outer arms stop short of their columns. */}
        <div aria-hidden="true" className="py-1">
          <svg
            viewBox="0 0 200 28"
            preserveAspectRatio="none"
            className="h-7 w-full text-ink-400"
            fill="none"
          >
            <path
              d="M100 0v8M100 8H33v20M100 8h67v20M100 8v20"
              stroke="currentColor"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {after.branches.map((branch) => (
            <p
              key={branch}
              className="rounded-[3px] border border-border px-2.5 py-3 text-center text-sm leading-snug text-ink-600 md:text-base"
            >
              {branch}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * The product architecture: four ways in, one library, four ways back out.
 *
 * Every entry point carries its own still, because the claim of this
 * diagram is that these are real surfaces rather than a plan for some.
 */
export const LoopPipeline = ({
  inputs,
  outputs,
}: {
  inputs: { name: string; file: string }[];
  outputs: { name: string; file?: string }[];
}) => (
  <div className="mt-12 md:mt-16">
    <p className="label mb-5 text-ink-500">Save from</p>
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {inputs.map((input) => (
        <li key={input.name}>
          <Thumb file={input.file} ratio="aspect-[5/4]" />
          <p className="mt-3 text-base leading-snug md:text-lg">{input.name}</p>
        </li>
      ))}
    </ul>

    <div aria-hidden="true" className="py-6">
      <svg
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
        className="h-10 w-full text-ink-400"
        fill="none"
      >
        <path
          /* All four arrive at the same point. The earlier path converged
             in two pairs, which drew two funnels where the claim is one. */
          d="M12 2v12C12 30 40 34 100 38M70 2v12C70 28 82 34 100 38M130 2v12C130 28 118 34 100 38M188 2v12C188 30 160 34 100 38"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>

    <div className="rounded-[3px] bg-foreground px-6 py-7 text-center text-background md:py-9">
      <p className="label mb-3 opacity-70">Layrrrd</p>
      <p className="text-xl leading-snug md:text-[2rem]">
        Save <span className="opacity-50">&rarr;</span> process{' '}
        <span className="opacity-50">&rarr;</span> personal library
      </p>
    </div>

    <div aria-hidden="true" className="mx-auto h-10 w-px bg-border" />

    <p className="label mb-5 text-ink-500">Come back through</p>
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {outputs.map((output) => (
        <li key={output.name}>
          {output.file ? (
            <Thumb file={output.file} ratio="aspect-[5/4]" />
          ) : (
            /* A way back in that has no screen of its own yet. It still gets
               a node, because leaving it out would misdescribe the loop. */
            <div className="aspect-[5/4] rounded-[3px] bg-card" />
          )}
          <p className="mt-3 text-base leading-snug md:text-lg">{output.name}</p>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * What testing changed, one row per fix: the state before, the state
 * after, and the finding that sat between them.
 *
 * Stills rather than prose, because the argument is that the change is
 * visible. The finding underneath says what the pictures cannot.
 */
export const BeforeAfterRows = ({
  rows,
}: {
  rows: { area: string; before: string; after: string; beforeFile?: string; afterFile?: string; finding: string }[];
}) => (
  <div className="mt-12 space-y-10 md:mt-16 md:space-y-12">
    {rows.map((row) => (
      <div key={row.area} className="border-t border-border pt-6">
        <p className="label mb-5 text-ink-500">{row.area}</p>
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
          <div>
            {row.beforeFile ? <Thumb file={row.beforeFile} ratio="aspect-[16/10]" /> : null}
            <p className="mt-3 text-base leading-snug text-ink-500 md:text-lg">{row.before}</p>
          </div>
          <Arrow className="h-4 w-full shrink-0 md:w-8" />
          <div>
            {row.afterFile ? <Thumb file={row.afterFile} ratio="aspect-[16/10]" /> : null}
            <p className="mt-3 text-base leading-snug md:text-lg">{row.after}</p>
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-[1.55] text-ink-600 md:text-base">
          {row.finding}
        </p>
      </div>
    ))}
  </div>
);
