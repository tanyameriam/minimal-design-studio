import type { Block, CaseStudy, ProcessSection } from './caseStudies/types';
import type { Project } from './projects';

/**
 * Draft markers live in the data files on purpose: together they are the
 * running list of what each case study still owes. They must not reach a
 * visitor, so they are stripped here, on the way out of the data layer,
 * rather than at each of the render sites that would otherwise need to know
 * about them.
 *
 * Two shapes exist, and they are removed differently.
 *
 * A `[NEED: ...]` span sits inside copy that is otherwise finished, so only
 * the span is cut and the sentence around it survives. If the span was the
 * entire value, whatever held it is dropped instead of rendering blank.
 *
 * A `todo` block is a note written to Tanya in the second person, so the
 * whole block goes.
 *
 * Both stay visible under `npm run dev`, so the gaps remain impossible to
 * forget while writing, and vanish in the production build.
 */

const NEED_SPAN = /\s*\[NEED:[^\]]*\]/g;

/** Dev keeps the markers on screen; the published build never shows them. */
export const showDrafts = import.meta.env.DEV;

/** Cuts `[NEED: ...]` spans, preserving any finished prose around them. */
const clean = (value: string): string =>
  showDrafts ? value : value.replace(NEED_SPAN, '').replace(/\s{2,}/g, ' ').trim();

/** True when a value was nothing but a marker, so its row should vanish. */
const blank = (value: string): boolean => clean(value).length === 0;

const cleanAll = (values: string[]): string[] => values.map(clean).filter((v) => v.length > 0);

/**
 * Rebuilds a block without its draft content, or returns null when nothing
 * publishable is left, so the caller can drop it and avoid an empty heading.
 */
const cleanBlock = (block: Block): Block | null => {
  switch (block.kind) {
    case 'todo':
      return showDrafts ? block : null;

    case 'prose': {
      const body = cleanAll(block.body);
      return body.length ? { ...block, body } : null;
    }

    case 'quote':
      return blank(block.text) ? null : { ...block, text: clean(block.text) };

    case 'note':
      return blank(block.body) ? null : { ...block, body: clean(block.body) };

    case 'points': {
      const items = block.items
        .filter((i) => !blank(i.body))
        .map((i) => ({ ...i, body: clean(i.body) }));
      return items.length ? { ...block, items } : null;
    }

    case 'tradeoffs': {
      const items = block.items
        .filter((t) => !blank(t.cost) && !blank(t.gain))
        .map((t) => ({ ...t, cost: clean(t.cost), gain: clean(t.gain) }));
      return items.length ? { ...block, items } : null;
    }

    case 'rejected': {
      const items = block.items
        .filter((r) => !blank(r.why))
        .map((r) => ({ ...r, why: clean(r.why) }));
      return items.length ? { ...block, items } : null;
    }

    case 'intended': {
      const items = block.items
        .filter((r) => !blank(r.outcome) && !blank(r.metric))
        .map((r) => ({ ...r, outcome: clean(r.outcome), metric: clean(r.metric) }));
      return items.length ? { ...block, items } : null;
    }

    case 'figures':
      return block;

    default:
      return block;
  }
};

const cleanBlocks = (blocks: Block[]): Block[] =>
  blocks.map(cleanBlock).filter((b): b is Block => b !== null);

const cleanSection = (section: ProcessSection): ProcessSection => ({
  ...section,
  problem: clean(section.problem),
  intervention: clean(section.intervention),
  blocks: cleanBlocks(section.blocks),
});

/** Strips every draft marker from one case study. */
export const publishable = (study: CaseStudy): CaseStudy => {
  const rejected = study.rejected && {
    ...study.rejected,
    items: study.rejected.items
      .filter((r) => !blank(r.why))
      .map((r) => ({ ...r, why: clean(r.why) })),
  };

  const reflection = study.reflection && {
    ...study.reflection,
    blocks: cleanBlocks(study.reflection.blocks),
  };

  return {
    ...study,
    headline: clean(study.headline),
    tagline: clean(study.tagline),
    year: clean(study.year),
    intro: cleanAll(study.intro),
    // A metadata row with no value tells the reader nothing, so it is removed
    // rather than left as a dangling label.
    meta: study.meta.filter((m) => !blank(m.value)).map((m) => ({ ...m, value: clean(m.value) })),
    summary: {
      ...study.summary,
      problems: clean(study.summary.problems),
      solution: clean(study.summary.solution),
      why: clean(study.summary.why),
      results: clean(study.summary.results),
    },
    challenge: {
      ...study.challenge,
      question: clean(study.challenge.question),
      blocks: cleanBlocks(study.challenge.blocks),
    },
    process: study.process.map(cleanSection),
    rejected: rejected && rejected.items.length ? rejected : undefined,
    outcomes: {
      ...study.outcomes,
      heading: clean(study.outcomes.heading),
      blocks: cleanBlocks(study.outcomes.blocks),
      callouts: study.outcomes.callouts
        .filter((c) => !blank(c.body))
        .map((c) => ({ ...c, body: clean(c.body) })),
    },
    reflection: reflection && reflection.blocks.length ? reflection : undefined,
  };
};

/** Strips every draft marker from one project row. */
export const publishableProject = (project: Project): Project => ({
  ...project,
  year: clean(project.year),
  outcome: clean(project.outcome),
  // Chips render with separators between them, so an empty one would leave a
  // stray divider behind.
  chips: cleanAll(project.chips),
});
