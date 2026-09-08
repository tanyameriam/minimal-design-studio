/**
 * Writing is not Projects. A case study argues for a decision made inside a
 * product; an article argues for a way of working, using that product as
 * evidence. The two share the portfolio's tokens and nothing else, so the
 * content model here is deliberately its own: prose first, with the few
 * structures the essays actually use.
 */

/** The three strands. Each carries one muted accent hue, set in index.css. */
export type Strand = 'ai' | 'ixd' | 'vxd';

export interface Category {
  strand: Strand;
  label: string;
}

/**
 * A process visual. Every figure names the export it is waiting for, so a
 * slot in the page and the asset backlog in docs/writing-assets.md stay the
 * same list. `src` lands when the export does; until then the slot renders
 * as a labelled frame carrying the caption and the alt text it requires.
 */
export interface ArticleFigure {
  /** Export filename without extension, as named in the asset plan. */
  asset: string;
  /** Required alt text. Written now so the export cannot arrive without it. */
  alt: string;
  caption: string;
  /** Reserved box, as a CSS aspect ratio. Prevents layout shift either way. */
  ratio?: string;
  /** Supplied once the export exists. */
  src?: string;
  width?: number;
  height?: number;
}

export interface ListItem {
  /** Bold lead-in, where the source copy has one. */
  lead?: string;
  text: string;
}

export type ArticleBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'list'; ordered?: boolean; items: ListItem[] }
  /** A line the essay turns on, set large. Not a decorative repeat. */
  | { kind: 'quote'; text: string }
  | { kind: 'figure'; figure: ArticleFigure };

export interface ArticleSection {
  id: string;
  heading: string;
  /** Shorter line for the sticky contents list, where the heading runs long. */
  nav?: string;
  blocks: ArticleBlock[];
}

export interface StudioLink {
  label: string;
  url: string;
}

/**
 * The card-level facts, kept in their own module (catalogue.ts) so the home
 * page can name the essays without the landing bundle swallowing five
 * thousand words of them. The full article extends this; nothing is
 * restated in two places.
 */
export interface ArticleSummary {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  /** One sentence, on the index card and the home module. */
  description: string;
  /** The lead article on the index. Exactly one. */
  featured?: boolean;
  /** Provenance line under the title. Coursework, said plainly. */
  origin: string;
  /**
   * Reading time, so a link to an essay can say how long it is without
   * pulling the essay itself into the bundle that renders the link. Derived
   * from the prose, not chosen: readingMinutes() in ./index checks it in dev
   * and warns if an edit has left it behind.
   */
  minutes: number;
}

export interface Article extends ArticleSummary {
  lead: ArticleFigure;
  /** Standfirst paragraphs, before the first heading. */
  intro: string[];
  sections: ArticleSection[];
  /** The "From the studio" note: what the work actually was. */
  studio: {
    body: string;
    links?: StudioLink[];
  };
  meta: {
    title: string;
    description: string;
  };
}
