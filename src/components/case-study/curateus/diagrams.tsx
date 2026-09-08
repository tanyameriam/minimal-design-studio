import type { CSSProperties, ReactNode } from 'react';

/**
 * The diagram set for the Curateus case study.
 *
 * Same materials as the rest of the portfolio: hairlines, the ink scale and
 * type. Nothing here is an illustration dropped onto the page, and nothing
 * here pretends to be a screenshot. Where a real screen is owed, the page
 * uses <ArtSlot> from the shared slide kit instead, so the gap stays visible.
 *
 * `JourneyCompare` does the heavy lifting: it is the argument of the whole
 * project in one picture. Its counterpart, the drawing of the plugin itself,
 * sits in ./PluginComposition. Everything else here supports those two.
 */

/** The connective arrow. Points down once a row stacks on a phone. */
export const Arrow = ({ className = '' }: { className?: string }) => (
  <span aria-hidden="true" className={`flex items-center justify-center text-ink-400 ${className}`}>
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

/* ------------------------------------------------------------------ *
 * The two journeys                                                    *
 * ------------------------------------------------------------------ */

export interface JourneyStep {
  text: string;
  /** Marks the step where the curator leaves what they were doing. */
  mark?: boolean;
}

export interface JourneyRow {
  label: string;
  steps: JourneyStep[];
  /** Inks the row. Reserved for the journey the design arrived at. */
  primary?: boolean;
}

/**
 * Two routes to the same outcome, drawn at the same scale so the shorter
 * one is shorter on the page rather than merely described as shorter. The
 * measure under each row is the step count, which is the only number in
 * this case study and comes from the flows themselves.
 */
export const JourneyCompare = ({ rows, caption }: { rows: JourneyRow[]; caption?: string }) => {
  const longest = Math.max(...rows.map((r) => r.steps.length));

  return (
    <div className="mt-12 md:mt-16">
      <div className="space-y-10 md:space-y-12">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className="label text-ink-500">{row.label}</p>
              <p className="label tabular-nums text-ink-500">{row.steps.length} steps</p>
            </div>

            <ol className="mt-5 flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
              {row.steps.map((step, i) => (
                <li key={step.text} className="flex items-center gap-2 md:gap-2.5">
                  {i > 0 && <Arrow className="h-4 w-4 shrink-0" />}
                  <span
                    className={`px-3 py-2 text-sm leading-snug md:text-base ${
                      step.mark
                        ? 'border border-dashed border-foreground text-foreground'
                        : row.primary && i === row.steps.length - 1
                          ? 'bg-foreground text-background'
                          : 'border border-border text-ink-600'
                    }`}
                  >
                    {step.text}
                  </span>
                </li>
              ))}
            </ol>

            {/* The measure. Same scale on both rows, so length means length. */}
            <div aria-hidden="true" className="mt-6 w-full">
              <span
                className={`block ${row.primary ? 'h-1 bg-foreground' : 'h-px bg-border'}`}
                style={{ width: `${(row.steps.length / longest) * 100}%` } as CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>

      {caption && <p className="label mt-8 text-ink-500">{caption}</p>}
    </div>
  );
};

/* The plugin drawing lives in ./PluginComposition, so the home page can
 * use it as a card cover without pulling this whole module in. */

/* ------------------------------------------------------------------ *
 * How the work was organised                                          *
 * ------------------------------------------------------------------ */

/**
 * Who decided what. Deliberately a flat row with arrows in both
 * directions: there is no reporting line in this picture, because there
 * was no reporting line in the work.
 */
export const Triad = () => {
  const nodes = [
    {
      title: 'Product Owner / PM',
      body: 'Requirements, priorities, product direction.',
      mine: false,
    },
    {
      title: 'Design',
      role: 'Me, UI/UX intern',
      body: 'Flows, wireframes, interface, prototypes, handoff.',
      mine: true,
    },
    { title: '3 developers', body: 'Feasibility, constraints, implementation.', mine: false },
  ];

  return (
    <div className="mt-10 flex flex-col gap-3 md:mt-0 md:flex-row md:items-stretch">
      {nodes.map((node, i) => (
        <div key={node.title} className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
          <div
            className={`flex-1 p-5 md:p-6 ${
              node.mine ? 'bg-foreground text-background' : 'border border-border'
            }`}
          >
            <p className={`label ${node.mine ? 'opacity-70' : 'text-ink-500'}`}>{node.title}</p>
            {node.role && <p className="mt-3 text-lg leading-snug md:text-xl">{node.role}</p>}
            <p
              className={`mt-3 text-sm leading-snug md:text-base ${
                node.mine ? 'opacity-80' : 'text-ink-600'
              }`}
            >
              {node.body}
            </p>
          </div>

          {i < nodes.length - 1 && (
            <span
              aria-hidden="true"
              className="flex shrink-0 items-center justify-center text-ink-400 md:w-8"
            >
              <svg viewBox="0 0 28 12" className="h-3 w-7 rotate-90 md:rotate-0" fill="none">
                <path
                  d="M2 6h24M6 1L1 6l5 5M22 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

/**
 * The product in one loop: what a curator does, what Curateus does with
 * it, what a subscriber gets. Three actors, one direction of travel.
 */
export const CurationLoop = () => {
  const stages = [
    { actor: 'Curator', act: 'Finds something worth passing on' },
    { actor: 'Curateus', act: 'Holds it, organises it, routes it by interest' },
    { actor: 'Subscriber', act: 'Discovers it because a person chose it' },
  ];

  return (
    <div className="mt-12 md:mt-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-4">
        {stages.map((stage, i) => (
          <div key={stage.actor} className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
            <div className="flex-1 border-t-2 border-foreground pt-5">
              <p className="label text-ink-500">{`0${i + 1}`}</p>
              <p className="mt-4 text-xl leading-snug md:text-2xl">{stage.actor}</p>
              <p className="mt-3 text-sm leading-[1.55] text-ink-600 md:text-base">{stage.act}</p>
            </div>
            {i < stages.length - 1 && <Arrow className="h-4 w-full shrink-0 md:w-8" />}
          </div>
        ))}
      </div>
      <p className="label mt-8 text-ink-500">
        The value moves between people. The product is the route it takes.
      </p>
    </div>
  );
};

/** The two experiences the product had to hold at once. */
export const TwoSides = ({
  sides,
}: {
  sides: { title: string; note: string; items: string[] }[];
}) => (
  <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 md:grid-cols-2">
    {sides.map((side) => (
      <div key={side.title} className="bg-background p-6 md:p-8">
        <p className="text-2xl leading-snug md:text-3xl">{side.title}</p>
        <p className="mt-3 text-sm leading-snug text-ink-500 md:text-base">{side.note}</p>
        <ol className="mt-7 divide-y divide-border border-t border-border">
          {side.items.map((item, i) => (
            <li key={item} className="flex gap-4 py-3.5">
              <span className="label w-5 shrink-0 pt-1 tabular-nums text-ink-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-base leading-snug md:text-lg">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ *
 * The design problem                                                  *
 * ------------------------------------------------------------------ */

/**
 * The balance the plugin had to hold. A beam with two weighted pans: pull
 * either way and the product fails differently, which is the reason the
 * slide exists at all.
 */
export const Balance = ({
  left,
  right,
}: {
  left: { title: string; body: string; fail: string };
  right: { title: string; body: string; fail: string };
}) => (
  <div className="mt-12 md:mt-16">
    <div aria-hidden="true" className="relative mx-auto max-w-4xl">
      <div className="flex items-end justify-between">
        <span className="h-10 w-px bg-border" />
        <span className="h-16 w-px bg-foreground" />
        <span className="h-10 w-px bg-border" />
      </div>
      <div className="h-0.5 w-full bg-foreground" />
    </div>

    <div className="mt-6 grid gap-px border border-border bg-border md:grid-cols-2">
      {[left, right].map((pan) => (
        <div key={pan.title} className="bg-background p-6 md:p-8">
          <p className="text-xl leading-snug md:text-2xl">{pan.title}</p>
          <p className="mt-3 text-sm leading-[1.55] text-ink-600 md:text-base">{pan.body}</p>
          <p className="label mt-6 text-ink-500">Pulled too far</p>
          <p className="mt-2 text-sm leading-snug text-ink-500 md:text-base">{pan.fail}</p>
        </div>
      ))}
    </div>
  </div>
);

/** The flow the team converged on, with its one secondary path. */
export const FlowLine = ({
  steps,
  branch,
}: {
  steps: string[];
  branch?: { from: string; label: string };
}) => (
  <div className="mt-12 md:mt-16">
    <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-stretch">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2 md:gap-2.5">
          {i > 0 && <Arrow className="h-4 w-4 shrink-0" />}
          <span
            className={`flex min-h-[3.25rem] items-center px-3.5 py-2.5 text-sm leading-snug md:text-base ${
              i === steps.length - 1
                ? 'bg-foreground text-background'
                : 'border border-border text-ink-600'
            }`}
          >
            <span className="label mr-3 tabular-nums opacity-50">{`0${i + 1}`}</span>
            {step}
          </span>
        </li>
      ))}
    </ol>

    {branch && (
      <div className="mt-6 flex items-start gap-3 border-l border-dashed border-border pl-5">
        <div>
          <p className="label text-ink-500">Secondary path, from {branch.from}</p>
          <p className="mt-2 text-base leading-snug text-ink-600 md:text-lg">{branch.label}</p>
        </div>
      </div>
    )}
  </div>
);

/**
 * The review loop. Not a handoff arrow: the same three positions kept
 * feeding each other until the interaction settled.
 */
export const ReviewLoop = () => (
  <div className="mt-12 flex flex-col items-stretch gap-3 md:mt-16 md:flex-row md:items-center">
    {['Design exploration', 'Developer and PO feedback', 'Adjusted interaction'].map((node, i) => (
      <div key={node} className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
        <div className="flex-1 border border-border px-5 py-6 text-center">
          <p className="text-base leading-snug md:text-lg">{node}</p>
        </div>
        <span
          aria-hidden="true"
          className="flex shrink-0 items-center justify-center text-ink-400 md:w-8"
        >
          <svg viewBox="0 0 28 12" className="h-3 w-7 rotate-90 md:rotate-0" fill="none">
            <path
              d="M2 6h24M6 1L1 6l5 5M22 1l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {i === 2 && <span className="label shrink-0 text-ink-500">repeat</span>}
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ *
 * Small repeating layouts                                             *
 * ------------------------------------------------------------------ */

/** Compact cards. Used for the three research reads and the four principles. */
export const Cards = ({
  items,
  columns = 3,
}: {
  items: { title: string; body: string }[];
  columns?: 3 | 4;
}) => (
  <div
    className={`mt-12 grid gap-px border border-border bg-border md:mt-16 sm:grid-cols-2 ${
      columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
    }`}
  >
    {items.map((item) => (
      <div key={item.title} className="flex flex-col bg-background p-6 md:p-7">
        <p className="text-xl leading-snug md:text-2xl">{item.title}</p>
        <p className="mt-4 text-sm leading-[1.55] text-ink-600 md:text-base">{item.body}</p>
      </div>
    ))}
  </div>
);

/** A change that came out of a review: what it was, and what it became. */
export const ChangePair = ({
  items,
}: {
  items: { title: string; before: string; after: string }[];
}) => (
  <div className="mt-12 space-y-px border border-border bg-border md:mt-16">
    {items.map((item) => (
      <div key={item.title} className="bg-background p-6 md:p-8">
        <p className="text-xl leading-snug md:text-2xl">{item.title}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="border-t border-border pt-4">
            <p className="label text-ink-500">Before the review</p>
            <p className="mt-3 text-base leading-[1.55] text-ink-600 md:text-lg">{item.before}</p>
          </div>
          <div className="border-t border-foreground pt-4">
            <p className="label">What changed</p>
            <p className="mt-3 text-base leading-[1.55] md:text-lg">{item.after}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

/** A numbered caption above a piece of media. Keeps the galleries legible. */
export const Shot = ({
  n,
  title,
  children,
}: {
  n?: string;
  title: string;
  children: ReactNode;
}) => (
  <div>
    <div className="mb-3 flex items-baseline gap-3">
      {n && <span className="label tabular-nums text-ink-500">{n}</span>}
      <p className="label text-ink-500">{title}</p>
    </div>
    {children}
  </div>
);
