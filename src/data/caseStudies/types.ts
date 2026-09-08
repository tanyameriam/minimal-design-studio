export type Status = 'shipped' | 'live' | 'concept' | 'self-initiated';

export const statusLabel: Record<Status, string> = {
  shipped: 'Shipped',
  live: 'Live',
  concept: 'Concept',
  'self-initiated': 'Self-initiated concept',
};

export interface Tradeoff {
  title: string;
  cost: string;
  gain: string;
}

/** An outcome we intend, paired with the metric that would prove it. */
export interface IntendedOutcome {
  outcome: string;
  metric: string;
}

/** A choice that was on the table and the reason it was not taken. */
export interface RejectedOption {
  option: string;
  why: string;
}

export interface Figure {
  src: string;
  alt: string;
  caption?: string;
  /**
   * Dense diagrams that are unreadable at column width.
   * Collapsed to a labelled row until the reader opens them.
   */
  reveal?: boolean;
}

/**
 * Editorial width for media blocks. Narrative text always stays in the
 * reading column; diagrams and screens may break out to `wide`, hero-grade
 * media to `full`. Below the lg breakpoint everything stays in-column.
 */
export type BlockWidth = 'narrow' | 'wide' | 'full';

export type Block =
  | { kind: 'prose'; body: string[] }
  | { kind: 'quote'; text: string; source?: string }
  | { kind: 'points'; items: { title: string; body?: string }[] }
  | { kind: 'tradeoffs'; items: Tradeoff[] }
  | { kind: 'rejected'; items: RejectedOption[] }
  | { kind: 'intended'; items: IntendedOutcome[] }
  | { kind: 'figures'; items: Figure[]; width?: BlockWidth }
  /** A labelled comparison: the state before a decision beside the state after it. */
  | {
      kind: 'beforeAfter';
      before: Figure;
      after: Figure;
      beforeLabel?: string;
      afterLabel?: string;
      caption?: string;
      width?: BlockWidth;
    }
  | { kind: 'note'; label: string; body: string }
  /** Content Tanya still owes. Renders visibly so it cannot ship unnoticed. */
  | { kind: 'todo'; body: string };

/** One row in the metadata band under the intro. */
export interface MetaItem {
  label: string;
  value: string;
  /**
   * Rendered in production when `value` is still a draft marker, so a row
   * like Role never vanishes. Must only state what is already confirmed.
   */
  fallback?: string;
}

/**
 * The quick pitch that sits above the full journey.
 * A reader who stops here should still have the whole case:
 * the problem, the solution, why that solution, and what came of it.
 */
export interface Summary {
  problems: string;
  solution: string;
  /** Why this approach and not another. The pitch's judgment line. */
  why: string;
  /** "Results" for shipped work, "Intended results" for everything else. */
  resultsLabel: string;
  results: string;
}

/** A short result claim. The emphasis fragment is set in medium weight. */
export interface Callout {
  title: string;
  emphasis?: string;
  body: string;
}

interface SectionBase {
  /** Anchor id, unique within the study. Drives the progress nav and deep links. */
  id: string;
  /** Short progress-nav label. Falls back to the section's own label or heading. */
  nav?: string;
}

/**
 * A case study is a composition of sections, not a fixed shape. Every study
 * satisfies the same internal logic (problem, evidence, decisions, outcome,
 * reflection), but which sections appear, how many, and in what order follows
 * the project's own story. Reordering the array reorders the page.
 */
export type Section =
  /**
   * The quick pitch. A reader who stops here should still have the whole
   * case: the problem, the solution, why that solution, and what came of it.
   */
  | (SectionBase & { kind: 'pitch'; label: string; summary: Summary; footnote?: string })
  /** Opens the journey. The question the whole project was answering. */
  | (SectionBase & { kind: 'journey'; label: string; question: string; blocks: Block[] })
  /**
   * One problem paired with one intervention.
   * Reads as a sentence: problem, "so I", intervention.
   */
  | (SectionBase & {
      kind: 'step';
      index: string;
      /** The problem clause. Set plain. */
      problem: string;
      /** The intervention clause. Set in medium weight. */
      intervention: string;
      blocks: Block[];
    })
  /** Rejected alternatives. Stronger seniority signal than anything else here. */
  | (SectionBase & { kind: 'decision'; label: string; items: RejectedOption[] })
  | (SectionBase & {
      kind: 'outcomes';
      /** "Outcomes" for shipped work, "Intended outcomes" otherwise. */
      label: string;
      heading: string;
      blocks: Block[];
      callouts: Callout[];
      quote?: { text: string; source: string };
    })
  /** Optional closing section. Where I was wrong, what I would change. */
  | (SectionBase & { kind: 'reflection'; label: string; blocks: Block[] })
  /**
   * Deep-dive material worth keeping but secondary to the story. Collapsed
   * behind its teaser until the reader asks for it.
   */
  | (SectionBase & { kind: 'appendix'; label: string; teaser: string; blocks: Block[] })
  /** A band that fits no other kind. The escape hatch that keeps stories different. */
  | (SectionBase & { kind: 'custom'; label?: string; heading?: string; blocks: Block[] });

export interface CaseStudy {
  slug: string;
  /** Short project name. Used in nav, cards, and prev/next. */
  title: string;
  /** The H1. An outcome sentence, never a project name. */
  headline: string;
  /** Parenthetical qualifier, kept honest. */
  qualifier?: string;
  year: string;
  status: Status;
  tagline: string;
  cover?: string;
  /** Alt text for the cover when it renders as the case's hero visual. */
  coverAlt?: string;
  intro: string[];
  meta: MetaItem[];
  sections: Section[];
  /**
   * Optional slide-deck companion to the long-form study. Renders as a
   * band under the metadata; the deck itself is its own route.
   */
  story?: { href: string; note: string };
}
