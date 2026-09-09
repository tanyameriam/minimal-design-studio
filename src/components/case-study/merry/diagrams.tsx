import type { ReactNode } from 'react';
import FadeInImage from '@/components/FadeInImage';
import { useReveal } from '@/hooks/use-reveal';

/**
 * The diagram vocabulary for Merry Health.
 *
 * This study argues about a system rather than a screen, so the drawings
 * carry more of the case than they do elsewhere in the portfolio: a flow
 * that loops back on itself, four actors around one record, a lifecycle
 * with the channels it fires into. All of it is built from hairlines, the
 * ink scale and type, so a diagram reads as part of the page, reflows on a
 * phone instead of shrinking, and stays legible in either theme.
 *
 * The research artifacts are the opposite case. A 1600px service blueprint
 * is evidence, not narrative: it sits small behind a `Plate` and opens in
 * the shared lightbox at its own size.
 */

export type OpenFigure = (src: string, alt: string) => void;

/* ------------------------------------------------------------------ *
 * Media                                                               *
 * ------------------------------------------------------------------ */

/**
 * A real project image. Bordered, captioned, click to enlarge. Everything
 * below the fold loads lazily; the caption carries the label so the figure
 * can be identified without opening it.
 */
export const Plate = ({
  src,
  alt,
  label,
  caption,
  onOpen,
  className = '',
  imageClassName = '',
  priority = false,
}: {
  src: string;
  alt: string;
  label?: string;
  caption?: ReactNode;
  onOpen?: OpenFigure;
  className?: string;
  imageClassName?: string;
  /** The hero-adjacent plates load eagerly; everything else waits. */
  priority?: boolean;
}) => {
  const ref = useReveal<HTMLElement>();

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
          <FadeInImage
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={`w-full ${imageClassName}`}
          />
        </button>
      ) : (
        <div className="overflow-hidden border border-border bg-card">
          <FadeInImage
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={`w-full ${imageClassName}`}
          />
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 max-w-[68ch] text-sm leading-[1.55] text-ink-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * A research artifact kept deliberately small: a strip of the board, its
 * name, and a way in. The insight is always stated in the page; this is
 * the proof underneath it.
 */
export const Artifact = ({
  src,
  alt,
  title,
  note,
  onOpen,
}: {
  src: string;
  alt: string;
  title: string;
  note?: string;
  onOpen: OpenFigure;
}) => (
  <button
    type="button"
    onClick={() => onOpen(src, alt)}
    className="group flex flex-col border border-border bg-card text-left transition-colors hover:border-ink-400"
  >
    {/* A window onto the board rather than the whole thing shrunk to nothing. */}
    <span className="block h-28 overflow-hidden border-b border-border md:h-32">
      <FadeInImage
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        className="h-full w-full object-cover object-center"
      />
    </span>
    <span className="flex flex-1 flex-col p-4 md:p-5">
      <span className="text-base leading-snug md:text-lg">{title}</span>
      {note && <span className="mt-2 text-sm leading-snug text-ink-500">{note}</span>}
      <span className="label mt-5 flex items-center gap-2 text-ink-500">
        Open full size
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-500 ease-smooth group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </span>
    </span>
  </button>
);

/* ------------------------------------------------------------------ *
 * The current system                                                  *
 * ------------------------------------------------------------------ */

export interface FlowStep {
  actor: string;
  act: string;
  /** The channel it happens over. WhatsApp, a call, nothing at all. */
  via?: string;
  /** Named when the step repeats until somebody answers. */
  repeat?: string;
}

/**
 * The dispatch flow as it ran. Vertical, because it is a chain of handoffs
 * rather than a process anyone designed, and because the repeats are the
 * point: two of these steps loop back on themselves, and a loop drawn as a
 * loop needs no sentence explaining that it is slow.
 */
export const CurrentFlow = ({ steps }: { steps: FlowStep[] }) => (
  <ol className="mt-12 md:mt-16">
    {steps.map((step, i) => (
      <li key={step.act}>
        {i > 0 && (
          <div aria-hidden="true" className="ml-[1.375rem] h-7 w-px bg-border md:ml-6 md:h-9" />
        )}
        <div className="flex items-stretch gap-4 md:gap-6">
          <span className="label mt-4 w-11 shrink-0 tabular-nums text-ink-500 md:w-12">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div
            className={`min-w-0 flex-1 border p-4 md:p-5 ${
              step.repeat ? 'border-dashed border-foreground' : 'border-border'
            }`}
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className="label text-ink-500">{step.actor}</p>
              {step.via && <p className="label text-ink-500">via {step.via}</p>}
            </div>
            <p className="mt-3 text-base leading-snug md:text-lg">{step.act}</p>
            {step.repeat && (
              <p className="mt-4 flex items-start gap-3 border-t border-dashed border-border pt-3.5 text-sm leading-snug text-ink-600 md:text-base">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 8A7 7 0 1 0 17 12" />
                  <path d="M17 4v4h-4" />
                </svg>
                <span>
                  <span className="label mr-2 text-ink-500">Repeats</span>
                  {step.repeat}
                </span>
              </p>
            )}
          </div>
        </div>
      </li>
    ))}
  </ol>
);

/**
 * Observed conditions. Every figure on this page carries where it came
 * from, so a reader never has to guess whether a number was measured,
 * counted off a workflow, or hoped for.
 */
export const Facts = ({
  items,
  source,
}: {
  items: { figure: string; note: string }[];
  source: string;
}) => (
  <div className="mt-12 md:mt-16">
    <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.note} className="flex flex-col bg-background p-5 md:p-6">
          <p className="text-[1.75rem] leading-[1.05] md:text-[2.25rem]">{item.figure}</p>
          <p className="mt-4 text-sm leading-[1.5] text-ink-600 md:text-base">{item.note}</p>
        </div>
      ))}
    </div>
    <p className="label mt-5 text-ink-500">{source}</p>
  </div>
);

/* ------------------------------------------------------------------ *
 * The four actors                                                     *
 * ------------------------------------------------------------------ */

/**
 * Four actors around one record. The hub sits in the middle column and
 * spans both rows, so every actor cell touches it across a shared
 * hairline: the picture says that the record is what they have in common,
 * which is the whole argument of the redesign. On a phone the hub moves to
 * the top and the actors stack under it.
 */
export const ActorHub = ({
  hub,
  hubNote,
  actors,
}: {
  hub: string;
  hubNote: string;
  actors: { name: string; needs: string }[];
}) => (
  <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 md:grid-cols-3 md:grid-rows-2">
    <div className="order-first bg-background p-6 md:order-none md:col-start-2 md:row-span-2 md:row-start-1 md:flex md:flex-col md:justify-center md:p-8">
      <p className="label text-ink-500">The backbone</p>
      <p className="mt-5 text-2xl leading-none md:text-[2rem]">{hub}</p>
      <p className="mt-4 text-sm leading-[1.5] text-ink-600 md:text-base">{hubNote}</p>
    </div>

    {actors.map((actor, i) => (
      <div
        key={actor.name}
        className={`bg-background p-6 md:p-7 ${
          i === 0
            ? 'md:col-start-1 md:row-start-1'
            : i === 1
              ? 'md:col-start-1 md:row-start-2'
              : i === 2
                ? 'md:col-start-3 md:row-start-1'
                : 'md:col-start-3 md:row-start-2'
        }`}
      >
        <p className="text-lg leading-snug md:text-xl">{actor.name}</p>
        <p className="mt-3 text-sm leading-[1.5] text-ink-600 md:text-base">{actor.needs}</p>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ *
 * The ride lifecycle                                                  *
 * ------------------------------------------------------------------ */

export interface Lane {
  label: string;
  /** Indexes of the stages this lane fires on. */
  at: number[];
}

/**
 * The lifecycle, drawn as what it actually is: a row of states, and a set
 * of channels that fire off them. A real table, so it is readable by a
 * screen reader and scrolls sideways on a phone instead of collapsing into
 * something dishonest.
 *
 * The marks are the argument. Every filled cell is a message somebody used
 * to have to send by hand.
 */
export const Lifecycle = ({
  caption,
  stages,
  lanes,
  highlight,
}: {
  caption: string;
  stages: string[];
  lanes: Lane[];
  /** Index of the one stage worked through as an example underneath. */
  highlight?: number;
}) => (
  <div className="mt-12 md:mt-16">
    {/* A scroll container is only reachable by keyboard once it is
        focusable, and it only announces itself once it is a named region. */}
    <div
      role="region"
      aria-label={caption}
      tabIndex={0}
      className="-mx-5 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12"
    >
      <table className="w-full min-w-[52rem] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className="w-[11rem] border-b border-border pb-4 pr-6 align-bottom">
              <span className="label text-ink-500">Ride state</span>
            </th>
            {stages.map((stage, i) => (
              <th
                key={stage}
                scope="col"
                className={`border-b border-foreground pb-4 align-bottom ${
                  i === highlight ? 'bg-card px-3' : 'pr-4'
                }`}
              >
                <span className="label block tabular-nums text-ink-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-2.5 block max-w-[9ch] text-sm font-normal leading-tight md:text-base">
                  {stage}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lanes.map((lane) => (
            <tr key={lane.label} className="border-b border-border">
              <th scope="row" className="py-4 pr-6 align-middle">
                <span className="text-sm font-normal leading-snug text-ink-600 md:text-base">
                  {lane.label}
                </span>
              </th>
              {stages.map((stage, i) => {
                const fires = lane.at.includes(i);
                return (
                  <td
                    key={stage}
                    className={`py-4 align-middle ${i === highlight ? 'bg-card px-3' : 'pr-4'}`}
                  >
                    {fires ? (
                      <>
                        <span aria-hidden="true" className="block h-2.5 w-2.5 bg-foreground" />
                        <span className="sr-only">{`${lane.label} fires at ${stage}`}</span>
                      </>
                    ) : (
                      <span aria-hidden="true" className="block h-px w-2.5 bg-border" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="label mt-6 text-ink-500">{caption}</p>

    {/* One column worked through in words, so the reader does not have to
        read a grid to get the idea. The outputs are derived from the same
        `at` arrays the marks are drawn from, so the two cannot drift. */}
    {highlight !== undefined && (
      <div className="mt-8 border-l border-foreground pl-5 md:pl-6">
        <p className="label-strong">Worked through: {stages[highlight]}</p>
        <ul className="mt-4 space-y-2">
          {lanes
            .filter((lane) => lane.at.includes(highlight))
            .map((lane) => (
              <li
                key={lane.label}
                className="flex items-baseline gap-3 text-base leading-snug text-ink-600 md:text-lg"
              >
                <span aria-hidden="true" className="text-ink-400">
                  &rarr;
                </span>
                {lane.label}
              </li>
            ))}
        </ul>
        <p className="mt-5 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
          One event. Four destinations, and not one of them is a message anybody composes.
        </p>
      </div>
    )}
  </div>
);

/** The lifecycle at its detailed altitude: each state, and what it records. */
export const StateList = ({
  states,
}: {
  states: { phase: string; state: string; captures: string }[];
}) => (
  <ol className="mt-12 divide-y divide-border border-y border-border md:mt-16">
    {states.map((s, i) => (
      <li key={s.state} className="grid gap-3 py-5 md:grid-cols-[3rem_10rem_1fr_1.2fr] md:gap-6">
        <span className="label pt-1 tabular-nums text-ink-500">
          {String(i + 1).padStart(2, '0')}
        </span>
        <span className="label pt-1 text-ink-500">{s.phase}</span>
        <span className="text-base leading-snug md:text-lg">{s.state}</span>
        <span className="text-sm leading-[1.5] text-ink-600 md:text-base">{s.captures}</span>
      </li>
    ))}
  </ol>
);

/* ------------------------------------------------------------------ *
 * Failure                                                             *
 * ------------------------------------------------------------------ */

/**
 * Failure modes and what the system does instead. Deliberately the same
 * weight as the happy-path diagrams, because on this project they were
 * designed first.
 */
export const EdgeGrid = ({
  items,
  columns = 3,
}: {
  items: { when: string; then: string; owner?: string }[];
  columns?: 2 | 3;
}) => (
  <div
    className={`mt-12 grid gap-px border border-border bg-border md:mt-16 sm:grid-cols-2 ${
      columns === 3 ? 'lg:grid-cols-3' : ''
    }`}
  >
    {items.map((item) => (
      <div key={item.when} className="flex flex-col bg-background p-5 md:p-6">
        <p className="text-lg leading-snug md:text-xl">{item.when}</p>
        <p className="mt-4 flex items-start gap-3 border-t border-border pt-4 text-sm leading-[1.5] text-ink-600 md:text-base">
          <span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-foreground" />
          <span>{item.then}</span>
        </p>
        {item.owner && <p className="label mt-4 text-ink-500">Owner &middot; {item.owner}</p>}
      </div>
    ))}
  </div>
);

/**
 * The four structural failures, set as a stack of full-width rows rather
 * than a card grid. The quote is the evidence and gets the display size,
 * because on this project the sharpest research finding was somebody
 * saying plainly why they were not using the product.
 */
export const Failures = ({
  items,
}: {
  items: { title: string; body: string; quote: string }[];
}) => (
  <ol className="mt-12 divide-y divide-border border-y border-border md:mt-16">
    {items.map((item, i) => (
      <li key={item.title} className="grid gap-8 py-9 lg:grid-cols-[1.1fr_1fr] lg:gap-16 md:py-12">
        <div>
          <div className="flex items-baseline gap-4">
            <span className="label tabular-nums text-ink-500">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-xl leading-snug md:text-2xl">{item.title}</p>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
            {item.body}
          </p>
        </div>
        <blockquote className="border-l border-foreground pl-5 md:pl-6">
          <p className="text-xl leading-[1.2] md:text-[1.75rem]">
            &ldquo;{item.quote}&rdquo;
          </p>
        </blockquote>
      </li>
    ))}
  </ol>
);

/* ------------------------------------------------------------------ *
 * The blueprint and the opportunities                                 *
 * ------------------------------------------------------------------ */

/**
 * The service blueprint at the altitude the story needs: four phases, who
 * is acting in each, and the one structural reason each phase broke. The
 * board itself is 1600px of detail and lives in the lightbox.
 */
export const PhaseBlueprint = ({
  phases,
}: {
  phases: { name: string; actors: string; breaks: string; opportunity: string }[];
}) => (
  <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
    {phases.map((phase, i) => (
      <div key={phase.name} className="flex flex-col bg-background p-5 md:p-6">
        <div className="flex items-baseline gap-3">
          <span className="label tabular-nums text-ink-500">
            {String(i + 1).padStart(2, '0')}
          </span>
          <p className="text-xl leading-none md:text-2xl">{phase.name}</p>
        </div>
        <p className="mt-4 text-sm leading-snug text-ink-500">{phase.actors}</p>

        <p className="label mt-7 text-ink-500">Where it broke</p>
        <p className="mt-3 text-sm leading-[1.5] text-ink-600 md:text-base">{phase.breaks}</p>

        <p className="label mt-6 border-t border-foreground pt-5">The opening</p>
        <p className="mt-3 text-sm leading-[1.5] md:text-base">{phase.opportunity}</p>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ *
 * Intake                                                              *
 * ------------------------------------------------------------------ */

/**
 * Progressive intake, drawn as the only thing it really is: a line between
 * what has to be known before an ambulance can move and what can be
 * collected while it is already moving. The dashed pane is the one that
 * used to block dispatch.
 */
export const IntakeSplit = ({
  now,
  later,
}: {
  now: { label: string; note: string; items: string[] };
  later: { label: string; note: string; items: string[] };
}) => (
  <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 md:grid-cols-2">
    {[now, later].map((pane, i) => (
      <div key={pane.label} className="bg-background p-6 md:p-8">
        <p className={`label ${i === 0 ? 'label-strong' : 'text-ink-500'}`}>{pane.label}</p>
        <p className="mt-4 max-w-[36ch] text-base leading-[1.55] text-ink-600 md:text-lg">
          {pane.note}
        </p>
        <ul className="mt-8 space-y-3">
          {pane.items.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className={`mt-[0.5em] h-2.5 w-2.5 shrink-0 ${
                  i === 0 ? 'bg-foreground' : 'border border-dashed border-ink-400'
                }`}
              />
              <span className="text-base leading-snug md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

/**
 * A worked exchange. Short enough to read at a glance, and set as a
 * transcript rather than as chat bubbles, because the point is not that it
 * looks like WhatsApp. The point is that the structure is a side effect of
 * a message somebody was already going to send.
 */
export const Exchange = ({
  turns,
  note,
}: {
  turns: { who: string; lines: string[] }[];
  note?: string;
}) => (
  <div className="mt-12 max-w-xl md:mt-16">
    <ol className="space-y-5">
      {turns.map((turn) => (
        <li key={turn.who} className="border-l border-foreground pl-5 md:pl-6">
          <p className="label text-ink-500">{turn.who}</p>
          <div className="mt-3 space-y-1.5">
            {turn.lines.map((line) => (
              <p key={line} className="text-base leading-snug md:text-lg">
                {line}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
    {note && <p className="label mt-6 text-ink-500">{note}</p>}
  </div>
);

/* ------------------------------------------------------------------ *
 * Assignment                                                          *
 * ------------------------------------------------------------------ */

/**
 * The driver-calling loop, and what replaces it. The left column is drawn
 * as a loop because that is the shape of the problem: it has no defined
 * end, only somebody eventually saying yes. The right column has two
 * exits, and a timer decides which one is taken.
 */
export const AssignmentLoop = ({
  before,
  after,
}: {
  before: { label: string; steps: string[]; loop: string };
  after: { label: string; step: string; branches: { on: string; then: string }[] };
}) => (
  <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 md:grid-cols-2">
    <div className="bg-background p-6 md:p-8">
      <p className="label text-ink-500">{before.label}</p>
      <ol className="mt-8">
        {before.steps.map((step, i) => (
          <li key={step}>
            {i > 0 && <div aria-hidden="true" className="ml-[0.3125rem] h-5 w-px bg-border" />}
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-[0.5em] h-2.5 w-2.5 shrink-0 border border-ink-400"
              />
              <span className="text-base leading-snug md:text-lg">{step}</span>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 flex items-baseline gap-3 border-t border-dashed border-border pt-6 text-base leading-snug text-ink-600 md:text-lg">
        <span aria-hidden="true" className="text-ink-400">
          &#8635;
        </span>
        {before.loop}
      </p>
    </div>

    <div className="bg-background p-6 md:p-8">
      <p className="label label-strong">{after.label}</p>
      <div className="mt-8 flex items-start gap-4">
        <span aria-hidden="true" className="mt-[0.5em] h-2.5 w-2.5 shrink-0 bg-foreground" />
        <span className="text-base leading-snug md:text-lg">{after.step}</span>
      </div>
      <div aria-hidden="true" className="ml-[0.3125rem] h-5 w-px bg-border" />
      <ul className="space-y-4">
        {after.branches.map((branch) => (
          <li key={branch.on} className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-[0.55em] h-px w-4 shrink-0 bg-foreground" />
            <span>
              <span className="block text-base leading-snug md:text-lg">{branch.on}</span>
              <span className="mt-1.5 block text-sm leading-snug text-ink-600 md:text-base">
                {branch.then}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ------------------------------------------------------------------ *
 * What was delivered, and what it does not claim                      *
 * ------------------------------------------------------------------ */

/**
 * The outcome, stated in two halves. The second half is the one that
 * matters on a page about a system that never ran: it is drawn in dashes
 * and given equal width, so a scanning reader cannot take the first
 * column for a results list.
 */
export const Delivered = ({
  delivered,
  withheld,
}: {
  delivered: { label: string; note: string; items: string[] };
  withheld: { label: string; note: string; items: string[] };
}) => (
  <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 md:grid-cols-2">
    {[delivered, withheld].map((pane, i) => (
      <div key={pane.label} className="bg-background p-6 md:p-8">
        <p className={`label ${i === 0 ? 'label-strong' : 'text-ink-500'}`}>{pane.label}</p>
        <p className="mt-4 max-w-[38ch] text-base leading-[1.55] text-ink-600 md:text-lg">
          {pane.note}
        </p>
        <ul
          className={`mt-8 divide-y border-y ${
            i === 0 ? 'divide-border border-border' : 'divide-dashed divide-border border-dashed border-border'
          }`}
        >
          {pane.items.map((item) => (
            <li
              key={item}
              className={`py-3 text-base leading-snug md:text-lg ${
                i === 0 ? '' : 'text-ink-500'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ *
 * Before and after                                                    *
 * ------------------------------------------------------------------ */

/**
 * The whole redesign in one comparison. Both columns are the same ride.
 * The left one is held together by people, and every step where a human
 * has to relay something is marked; the right one is held together by
 * events, and the marks are gone.
 */
export const SystemPanes = ({
  before,
  after,
}: {
  before: { label: string; verdict: string; steps: { text: string; relay?: boolean }[] };
  after: { label: string; verdict: string; steps: { text: string; relay?: boolean }[] };
}) => (
  <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 md:grid-cols-2">
    {[before, after].map((pane, paneIndex) => (
      <div key={pane.label} className="flex flex-col bg-background p-6 md:p-8">
        <p className="label text-ink-500">{pane.label}</p>

        <ol className="mt-8 flex-1">
          {pane.steps.map((step, i) => (
            <li key={step.text}>
              {i > 0 && <div aria-hidden="true" className="ml-[0.3125rem] h-5 w-px bg-border" />}
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className={`mt-[0.5em] h-2.5 w-2.5 shrink-0 ${
                    paneIndex === 1 && i === pane.steps.length - 1
                      ? 'bg-foreground'
                      : 'border border-ink-400'
                  }`}
                />
                <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-base leading-snug md:text-lg">{step.text}</span>
                  {step.relay && (
                    <span className="label border border-dashed border-border px-2 py-1 text-ink-500">
                      Someone relays it
                    </span>
                  )}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <p
          className={`mt-10 border-t pt-6 text-xl leading-snug md:text-2xl ${
            paneIndex === 1 ? 'border-foreground' : 'border-border text-ink-600'
          }`}
        >
          {pane.verdict}
        </p>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ *
 * What it is meant to change                                          *
 * ------------------------------------------------------------------ */

/**
 * Targets, not results. The label repeats on every row on purpose: this
 * project was never deployed, and a number on a portfolio page that does
 * not say what kind of number it is will be read as an outcome.
 */
export const Targets = ({
  items,
}: {
  items: { figure: string; outcome: string; how: string }[];
}) => (
  <div className="mt-12 divide-y divide-border border-y border-border md:mt-16">
    {items.map((item) => (
      <div key={item.outcome} className="grid gap-4 py-7 md:grid-cols-[14rem_1fr] md:gap-10">
        <div>
          <p className="text-[1.75rem] leading-none md:text-[2.25rem]">{item.figure}</p>
          <p className="label mt-4 inline-block border border-dashed border-border px-2 py-1 text-ink-500">
            Design target
          </p>
        </div>
        <div>
          <p className="text-lg leading-snug md:text-xl">{item.outcome}</p>
          <p className="mt-3 max-w-2xl text-sm leading-[1.5] text-ink-600 md:text-base">
            {item.how}
          </p>
        </div>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ *
 * Small repeating layouts                                             *
 * ------------------------------------------------------------------ */

/** Callouts read off a screenshot. Sits beside the plate it annotates. */
export const Callouts = ({ items }: { items: string[] }) => (
  <ul className="divide-y divide-border border-y border-border">
    {items.map((item, i) => (
      <li key={item} className="flex gap-5 py-3.5">
        <span className="label w-5 shrink-0 pt-1 tabular-nums text-ink-500">
          {String(i + 1).padStart(2, '0')}
        </span>
        <span className="text-base leading-snug text-ink-600 md:text-lg">{item}</span>
      </li>
    ))}
  </ul>
);

/** The line a module is built on. One sentence, sized to be remembered. */
export const Principle = ({ children }: { children: ReactNode }) => (
  <p className="mt-12 border-l border-foreground pl-5 text-xl leading-snug md:mt-14 md:pl-6 md:text-[1.75rem]">
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
