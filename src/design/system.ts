/**
 * The design language, written down.
 *
 * Everything here already existed as a CSS variable in index.css or a step in
 * the Tailwind scale. What did not exist was a place that says which of them
 * to reach for and why, so every new page invented its own answer. Five case
 * studies each grew a private set of primitives, the home page grew a third
 * kind of card, and the result reads as five products rather than one.
 *
 * This module is the single source of truth for the language, exported as
 * data so that:
 *
 *   - /design-system renders it rather than describing it, which means the
 *     documentation cannot drift from the site,
 *   - a new component picks a named role ('lede', 'caption') instead of a
 *     raw clamp(),
 *   - and the rules that are editorial rather than visual - one idea per
 *     screen, one accent per view - are stated somewhere they can be cited.
 *
 * It exports no components. The primitives that use it live in
 * src/design/reading.tsx.
 */

/* ------------------------------------------------------------------ *
 * Type
 * ------------------------------------------------------------------ */

export interface TypeRole {
  /** How the role is referred to in a review, and on the design-system page. */
  name: string;
  /** The Tailwind classes that produce it. Copyable, and actually used. */
  className: string;
  /** When to reach for it, and just as importantly when not to. */
  use: string;
  /** The specimen the design-system page sets. */
  specimen: string;
}

/**
 * Seven roles, and no eighth without a reason.
 *
 * The scale was already fluid - every step in tailwind.config.ts interpolates
 * between a 400px and an 1800px viewport - so the sizes are not the problem.
 * The problem was that a page had eleven steps available and used nine of
 * them on one screen. These seven cover every piece of text the portfolio
 * actually sets, and a page that needs a distinction they do not carry is
 * usually a page making a distinction the reader cannot see.
 */
export const typeRoles: TypeRole[] = [
  {
    name: 'Display',
    className: 'text-5xl leading-[1.02] tracking-[-0.035em]',
    use: 'The one statement a page opens with. Never twice on a page, and never below the fold.',
    specimen: 'Product Designer for human-centered experiences',
  },
  {
    name: 'Title',
    className: 'text-3xl leading-[1.1]',
    use: 'What a section or a project is called. The scan layer: read top to bottom on their own, titles should tell the story.',
    specimen: 'The survey changed the problem',
  },
  {
    name: 'Lede',
    className: 'text-xl leading-[1.45] text-ink-600',
    use: 'One sentence under a title, carrying the claim. If it needs two sentences it is body, not a lede.',
    specimen: 'Nine days to find out whether anyone wanted the thing we were building.',
  },
  {
    name: 'Body',
    className: 'text-lg leading-[1.65] text-ink-800',
    use: 'The read. Set on a measure of 62 to 72 characters, never in a panel, never in two columns.',
    specimen:
      'People were good at saving things and bad at finding them again, which is a storage problem everyone treats as a search problem.',
  },
  {
    name: 'Caption',
    className: 'text-base leading-[1.5] text-ink-500',
    use: 'What a figure is and why it is here. Says something the image does not; never repeats the alt text.',
    specimen: 'The first version put retrieval behind a search box. Nobody used it.',
  },
  {
    name: 'Label',
    className: 'label text-ink-500',
    use: 'Genuine metadata only: a year, a role, a figure source, a section number.',
    specimen: 'Utrecht, 2025',
  },
  {
    name: 'Section label',
    className: 'label-strong',
    use: 'The line that names a region of the page. Full strength, because a heading should not apologise.',
    specimen: 'Selected work',
  },
];

/* ------------------------------------------------------------------ *
 * Colour
 * ------------------------------------------------------------------ */

export interface ColourRole {
  name: string;
  /** The CSS variable, so the page can paint the real value. */
  token: string;
  use: string;
}

/**
 * Ink is hierarchy and nothing else. Five steps, and a piece of text drops a
 * step only when it is genuinely subordinate to the one above it. Most of
 * the "too texty" feeling on a dense page is four steps of ink on one screen
 * with no relationship between them.
 */
export const inkScale: ColourRole[] = [
  { name: 'Ink 900', token: '--ink-900', use: 'Display and titles.' },
  { name: 'Ink 800', token: '--ink-800', use: 'Body. The default for anything meant to be read.' },
  { name: 'Ink 600', token: '--ink-600', use: 'Ledes, and body that is deliberately secondary.' },
  { name: 'Ink 500', token: '--ink-500', use: 'Captions and metadata.' },
  { name: 'Ink 400', token: '--ink-400', use: 'Rules, ticks, and marks. Rarely text.' },
];

/**
 * Four surfaces, on one ground.
 *
 * The site is dark and does not offer a light mode. The light tokens are
 * still declared in index.css, but only for a region that opts into being
 * inverted - a reversed slide, a turn in a story - which is a compositional
 * device rather than a theme. `.theme-invert` is the only way to reach them.
 */
export const surfaces: ColourRole[] = [
  { name: 'Ground', token: '--background', use: 'The page. Nothing sits directly on it that is not text.' },
  { name: 'Panel', token: '--card', use: 'A raised surface. Groups things; never merely decorates them.' },
  { name: 'Chip', token: '--muted', use: 'One step below a panel. Numbers, stats, small inset facts.' },
  { name: 'Hairline', token: '--border', use: 'Separates sections in a reading column, where a panel would be too loud.' },
];

/**
 * Two signal colours, and a standing rule about them: never in the same
 * view. The yellow is emphasis, the blue is action. When both appear the
 * reader has two things competing to be the thing they should do next, which
 * is precisely the complaint that "attention was everywhere".
 *
 * The masthead's ambient wash is the single exception, and it is one because
 * there the two are light on a ground rather than marks on a page.
 */
export const signals: ColourRole[] = [
  {
    name: 'Accent',
    token: '--accent',
    use: 'Emphasis. The mark on a heading, the live dot, a highlight. Never a fill behind text, never a button.',
  },
  {
    name: 'Link',
    token: '--link',
    use: 'Action. The one thing to do next on a view. If two things carry it, one of them is not the next thing.',
  },
];

/* ------------------------------------------------------------------ *
 * Space and shape
 * ------------------------------------------------------------------ */

/**
 * The vertical rhythm, named. Four intervals, because a page that separates
 * things at nine different distances is not separating them at all.
 *
 * The two small ones are fixed. The larger ones are fluid tokens defined in
 * tailwind.config.ts: they grow with the window's width and are capped by
 * its height, so a phone gets less air and a short laptop screen does not
 * get desktop gaps.
 */
export const spacing = [
  { name: 'Tight', value: 'mt-3', use: 'Inside one thought: a label and the line it labels.' },
  { name: 'Close', value: 'mt-6', use: 'Between paragraphs, and between a title and its lede.' },
  { name: 'Break', value: 'mt-break', use: 'Between subsections. A pause, not a stop. 40 to 64px.' },
  { name: 'Stage', value: 'mt-stage', use: 'Between the big parts of a section. 48 to 88px.' },
  { name: 'Section', value: 'py-section', use: 'A section\'s own padding, with a hairline above it. A stop. 56 to 112px.' },
  { name: 'Gutter', value: 'px-gutter', use: 'The page\'s side margin. 20 to 48px.' },
];

/**
 * Measure. The single most effective control the site has over feeling
 * "texty", and the reason the writing section already reads calmer than the
 * case studies: the essays are set at 2xl and the studies were not set at
 * anything.
 */
export const measures = [
  { name: 'Read', value: 'max-w-2xl', use: '62 to 72 characters. Every run of body text on the site.' },
  { name: 'Statement', value: 'max-w-[24ch]', use: 'A display line or a title. Breaks before it runs wide.' },
  { name: 'Wide', value: 'block-wide', use: 'Figures and diagrams, which are looked at rather than read.' },
];

/* ------------------------------------------------------------------ *
 * The editorial rules
 * ------------------------------------------------------------------ */

export interface Rule {
  rule: string;
  because: string;
}

/**
 * The part of a design system that is not a token.
 *
 * These are written as constraints rather than as principles, because a
 * principle cannot be violated and a constraint can. Each one came out of a
 * real piece of feedback on this portfolio.
 */
export const editorialRules: Rule[] = [
  {
    rule: 'One palette. The whole site, dark.',
    because:
      'There used to be three languages here: the portfolio, a warm cream island that the Layrrrd case study ran as its entire page, and a forced-light mode for the story decks. Each was defensible on its own page and together they meant a visitor changed design system twice on the way from the home page to a case study, which reads as three studios rather than one point of view. A light mode is a fourth thing to keep in step, so it is gone until the dark one is finished.',
  },
  {
    rule: 'One way to get around a long page.',
    because:
      'Wayfinding had grown six implementations and a case study showed two of them at once, saying the same chapter names in two places. A reader should learn the device once and find it everywhere: the contents list in the gutter, the same list on demand below that width, and one progress line.',
  },
  {
    rule: 'One thing per screen is the loudest.',
    because:
      'A reader can only be told where to look once. A title, a stat, a pull quote and a panel on the same screen are four instructions, so the reader follows none of them and reports that their attention was everywhere.',
  },
  {
    rule: 'Body text never goes in a panel.',
    because:
      'A panel says "this is a unit, take it in at once". A paragraph says "read me left to right". Putting one inside the other asks for both at the same time, and the paragraph loses.',
  },
  {
    rule: 'Every section gets one entrance and one exit.',
    because:
      'A heading to arrive at and a single claim to leave with. Sections that end with a verdict, a stat and a quote end three times, and the reader stops believing any of them.',
  },
  {
    rule: 'Wayfinding names chapters, not paragraphs.',
    because:
      'A rail that lists every heading on the page is the page again, in a narrower column, in the corner of the eye. It should answer "where am I and how much is left", which takes five lines.',
  },
  {
    rule: 'If a sentence is also a picture, keep the picture.',
    because:
      'Most of the density in these case studies is a diagram explained in prose directly underneath it. The caption says what the diagram cannot say about itself, and the paragraph goes.',
  },
  {
    rule: 'The accent and the link never share a view.',
    because:
      'Emphasis and action look like the same instruction at a glance. One page, one of them.',
  },
];

/* ------------------------------------------------------------------ *
 * Motion
 * ------------------------------------------------------------------ */

export const motion = {
  /** The one curve. Everything on the site eases on it. */
  ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
  durations: [
    { name: 'Feedback', value: '200ms', use: 'A hover, a focus ring, a colour change.' },
    { name: 'Move', value: '400ms', use: 'Something changing position or size under the pointer.' },
    { name: 'Arrive', value: '700ms', use: 'A section entering the viewport for the first time.' },
  ],
  rule: 'Motion confirms, it never announces. Under prefers-reduced-motion every duration on the site collapses to nothing and the page is complete without it.',
};
