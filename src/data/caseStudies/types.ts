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

export type Block =
  | { kind: 'prose'; body: string[] }
  | { kind: 'quote'; text: string; source?: string }
  | { kind: 'points'; items: { title: string; body: string }[] }
  | { kind: 'tradeoffs'; items: Tradeoff[] }
  | { kind: 'rejected'; items: RejectedOption[] }
  | { kind: 'intended'; items: IntendedOutcome[] }
  | { kind: 'figures'; items: Figure[] }
  | { kind: 'note'; label: string; body: string }
  /** Content Tanya still owes. Renders visibly so it cannot ship unnoticed. */
  | { kind: 'todo'; body: string };

/** One row in the metadata band under the intro. */
export interface MetaItem {
  label: string;
  value: string;
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

/** Opens the process. The question the whole project was answering. */
export interface Challenge {
  question: string;
  blocks: Block[];
}

/**
 * One problem paired with one intervention.
 * Reads as a sentence: problem, "so I", intervention.
 */
export interface ProcessSection {
  index: string;
  /** The problem clause. Set plain. */
  problem: string;
  /** The intervention clause. Set in editorial italic. */
  intervention: string;
  blocks: Block[];
}

/** A short result claim. The emphasis fragment is set in editorial italic. */
export interface Callout {
  title: string;
  emphasis?: string;
  body: string;
}

export interface Outcomes {
  /** "Outcomes" for shipped work, "Intended outcomes" otherwise. */
  label: string;
  heading: string;
  blocks: Block[];
  callouts: Callout[];
  quote?: { text: string; source: string };
}

/** Optional closing section. Where I was wrong, what I would change. */
export interface Reflection {
  title: string;
  blocks: Block[];
}

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
  intro: string[];
  meta: MetaItem[];
  summary: Summary;
  challenge: Challenge;
  process: ProcessSection[];
  /** Kept from the old structure. Stronger seniority signal than anything else here. */
  rejected?: { title: string; items: RejectedOption[] };
  outcomes: Outcomes;
  reflection?: Reflection;
}
