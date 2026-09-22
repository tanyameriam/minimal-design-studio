import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Takeaways } from '@/design/reading';

/**
 * The masthead every case study opens on.
 *
 * The order is deliberate and is the opposite of what these pages used to do.
 * They led with the product's name set enormous and put the outcome
 * underneath it in smaller type, which spends the largest thing on the page
 * on a word the reader has no reason to care about yet. Here the client name
 * is a quiet line and the outcome is the headline, so someone who reads only
 * the biggest words on the page still learns what the work achieved.
 *
 * Under it, what I actually did, as pills. They come from the project record
 * rather than from each page, so the same list drives the case study and can
 * never drift from the one on /work.
 */

/** Pulls a project's pills, preferring its own list over the shared vocabulary. */
function contributionsFor(slug: string): string[] {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return [];
  return project.contributions ?? project.disciplines;
}

export const ContributionPills = ({
  items,
  className = '',
}: {
  items: string[];
  className?: string;
}) => {
  if (!items.length) return null;

  /*
   * Outlined, not raised.
   *
   * These were panels: up to seven lifted surfaces with shadows, stacked
   * directly under the headline, all of them at the same weight as the
   * numbers and the intro further down. A list of disciplines is metadata.
   * It should be findable and it should not be the second thing on the page
   * a reader's eye lands on, which a row of floating cards guarantees.
   */
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="What I did on this project">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border px-3.5 py-2 text-sm leading-none text-ink-600"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

/**
 * The three questions someone hiring actually asks, in order.
 *
 * Fixed labels rather than free text, because the value of this block is
 * that it is identical on every case study: a reader who has learned to
 * find it on one page finds it on all five without looking.
 */
export interface StudyTakeaways {
  /** What was wrong. One line, no preamble. */
  problem: string;
  /** What I did about it. One line, and the verb is mine. */
  did: string;
  /** What changed. A number where there is one, honestly labelled. */
  outcome: string;
}

interface StudyOpeningProps {
  /** Project slug, used to look the pills up. */
  slug: string;
  /** The client or product, set small above the headline. */
  client: string;
  /** The outcome, as the largest thing on the page. */
  headline: ReactNode;
  /** Optional standfirst under the headline. */
  children?: ReactNode;
  /** Overrides the pills for a page with no project record. */
  contributions?: string[];
  /**
   * The thirty-second version, set directly under the headline.
   *
   * The feedback these pages kept getting was not that they were long. It
   * was that a reader could not tell what to read, which is a different
   * complaint with a different fix: a long page is fine once the reader
   * knows what they will get from it and can leave at any point holding the
   * argument. This is that guarantee, and it is what makes the eight minutes
   * underneath it optional rather than a demand.
   */
  takeaways?: StudyTakeaways;
}

/**
 * The scan layer, in the shared component, with this page's three fixed
 * questions poured into it. The labels are fixed here rather than at each
 * call site so that all five case studies ask the reader the same three
 * things in the same order.
 */
const StudyTakeawayBlock = ({ items }: { items: StudyTakeaways }) => (
  <Takeaways
    title="In short"
    items={[
      { label: 'The problem', body: items.problem },
      { label: 'What I did', body: items.did },
      { label: 'What happened', body: items.outcome },
    ]}
  />
);

export const StudyOpening = ({
  slug,
  client,
  headline,
  children,
  contributions,
  takeaways,
}: StudyOpeningProps) => {
  const pills = contributions ?? contributionsFor(slug);

  return (
    <div>
      {/* Back to the work, not to the home page: that is where they came from. */}
      <Link
        to="/work"
        className="rule-link group inline-flex items-center gap-2 text-base text-ink-500 transition-colors hover:text-foreground"
      >
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-500 ease-smooth group-hover:-translate-x-1"
        >
          &larr;
        </span>
        Back
      </Link>

      {/*
        Orientation, not argument. This was set at 24px directly under the
        back link, which gave the sector and the dates almost the weight of
        the headline they exist to caption.
      */}
      <p className="label mt-10 text-ink-500">{client}</p>

      <h1 className="mt-6 max-w-[20ch] text-[2.5rem] leading-[1.02] tracking-[-0.035em] md:text-[4.5rem]">
        {headline}
      </h1>

      {takeaways && <StudyTakeawayBlock items={takeaways} />}

      {children}

      {/* The pills drop below the intro and lose their heading. "How did I
          help them" set at 20px was a question the pills underneath it
          answer in two words each; the label says the same thing at the
          weight metadata deserves. */}
      {pills.length > 0 && (
        <div className="mt-10 md:mt-12">
          <p className="label text-ink-500">What I did</p>
          <ContributionPills items={pills} className="mt-4" />
        </div>
      )}
    </div>
  );
};

/**
 * The one-sentence version of the whole case study, set large.
 *
 * It sits between the masthead and the first real section and exists for the
 * reader who will not scroll the whole thing: "this is the story of how I
 * ..." followed by what changed. Everything after it is the evidence.
 */
export const StoryStatement = ({ children }: { children: ReactNode }) => (
  <p className="max-w-[26ch] text-[2rem] leading-[1.08] tracking-[-0.03em] md:max-w-[24ch] md:text-[3.5rem]">
    {children}
  </p>
);

/**
 * The cue at the foot of an above-the-fold opening.
 *
 * A hero sized to exactly one viewport has a cost: nothing is cut off at the
 * bottom edge, so nothing signals that the page continues. This is that
 * signal, and it is a real button rather than a decorative chevron, so it can
 * be tabbed to and pressed.
 *
 * The scroll is smooth unless the visitor has asked for reduced motion, in
 * which case it jumps and the arrow stops bobbing, which the global rule in
 * index.css handles.
 */
export const ScrollCue = ({
  targetId,
  label = 'Continue reading',
}: {
  targetId: string;
  label?: string;
}) => {
  const go = () => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className="flex justify-center pb-10 md:pb-12">
      <button
        type="button"
        onClick={go}
        className="group flex flex-col items-center gap-3 text-ink-500 transition-colors hover:text-foreground"
      >
        <span className="label-strong text-ink-500 transition-colors group-hover:text-foreground">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="panel-chip grid h-9 w-9 place-items-center text-base motion-safe:animate-bounce"
        >
          &darr;
        </span>
      </button>
    </div>
  );
};

/**
 * The arrival at the end of a section.
 *
 * A long case study is a sequence of arguments, and each one reaches a point
 * before the next begins. Left as plain paragraphs those conclusions read as
 * more middle, and a reader skimming cannot tell the difference between a
 * step in the reasoning and the thing the reasoning was for.
 *
 * So the conclusion is the one panel in its section: set larger than the copy
 * above it and carrying the hand-off to whatever comes next, so a reader
 * knows both what was settled and where that leads.
 *
 * With a `headline` it becomes the large variant, for the moment a section
 * turns on: the question, then what reaching it changed. That one takes no
 * accent border, on purpose. A yellow edge around a block this size stops
 * being emphasis and becomes a frame; the accent stays as the marker beside
 * the label and the short rule under the headline, which is enough to find
 * from across the page.
 */
export const Takeaway = ({
  label = 'Where this left us',
  headline,
  children,
  next,
  nextHref,
}: {
  label?: string;
  /** The large statement this section arrived at. Switches to the big variant. */
  headline?: ReactNode;
  children: ReactNode;
  /** The section this leads into. Rendered as the hand-off line. */
  next?: string;
  /** Anchor for `next`, e.g. "#timeline". Plain text without it. */
  nextHref?: string;
}) => {
  const large = Boolean(headline);

  return (
    <div
      className={
        large
          ? 'panel p-7 md:p-12 lg:p-16'
          : 'panel border-l-4 border-l-accent p-6 md:p-8'
      }
    >
      <p className="label-strong flex items-center gap-2.5">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
        {label}
      </p>

      {large ? (
        <>
          {/* Line breaks are deliberate: three lines, each a whole clause. */}
          <h3 className="mt-8 max-w-[38ch] text-[2.25rem] leading-[1.02] tracking-[-0.035em] md:mt-10 md:text-[4rem]">
            {headline}
          </h3>

          <span aria-hidden="true" className="mt-10 block h-px w-24 bg-accent md:mt-12" />

          <p className="mt-10 max-w-2xl text-lg leading-[1.55] text-ink-600 md:mt-12 md:text-xl">
            {children}
          </p>
        </>
      ) : (
        <p className="mt-5 max-w-[72ch] text-xl leading-[1.4] md:mt-6 md:text-2xl">{children}</p>
      )}

      {next &&
        (nextHref ? (
          <a
            href={nextHref}
            className="label group mt-8 flex items-center gap-3 border-t border-border pt-5 text-ink-500 transition-colors hover:text-foreground md:mt-10"
          >
            Next &middot; {next}
            <span
              aria-hidden="true"
              className="transition-transform duration-500 ease-smooth group-hover:translate-y-0.5"
            >
              &darr;
            </span>
          </a>
        ) : (
          <p className="label mt-8 flex items-center gap-3 border-t border-border pt-5 text-ink-500 md:mt-10">
            Next &middot; {next}
            <span aria-hidden="true">&darr;</span>
          </p>
        ))}
    </div>
  );
};
