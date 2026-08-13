import type { Block, CaseStudy, Section } from './caseStudies/types';
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
 * A `[NEED: ...]` marker must be the entire string value. A value carrying a
 * marker is not publishable at all, so it cleans to empty and whatever held
 * it is dropped instead of rendering blank. (The build plugin in
 * vite.config.ts enforces the whole-value rule: an embedded marker fails the
 * production build rather than shipping a broken sentence.)
 *
 * A `todo` block is a note written to Tanya in the second person, so the
 * whole block goes.
 *
 * Both stay visible under `npm run dev`, so the gaps remain impossible to
 * forget while writing, and vanish in the production build.
 */

const DRAFT_MARKER = /\[NEED:/;

/** Dev keeps the markers on screen; the published build never shows them. */
export const showDrafts = import.meta.env.DEV;

/** Whole-value rule: a value carrying a marker is not publishable at all. */
const clean = (value: string): string =>
  showDrafts || !DRAFT_MARKER.test(value) ? value : '';

/** True when a value is unpublishable, so its row should vanish. */
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
      // A titled point survives without its body: the title is real content
      // (a named failure mode, say) even while its description is still owed.
      const items = block.items
        .filter((i) => !blank(i.title))
        .map((i) => {
          const body = i.body ? clean(i.body) : '';
          return body ? { ...i, body } : { title: i.title };
        });
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

    case 'beforeAfter': {
      // The images are never drafts; only the shared caption can be.
      const caption = block.caption ? clean(block.caption) : undefined;
      return { ...block, caption: caption || undefined };
    }

    case 'figures': {
      // Figures themselves are never drafts, but a caption can be.
      const items = block.items.map((f) => {
        if (!f.caption) return f;
        const caption = clean(f.caption);
        return caption ? { ...f, caption } : { ...f, caption: undefined };
      });
      return { ...block, items };
    }

    default:
      return block;
  }
};

const cleanBlocks = (blocks: Block[]): Block[] =>
  blocks.map(cleanBlock).filter((b): b is Block => b !== null);

/**
 * Rebuilds one section without its draft content, or returns null when
 * nothing publishable is left, so the section vanishes rather than
 * rendering as an empty band.
 */
const cleanStudySection = (section: Section): Section | null => {
  switch (section.kind) {
    case 'pitch':
      return {
        ...section,
        summary: {
          ...section.summary,
          problems: clean(section.summary.problems),
          solution: clean(section.summary.solution),
          why: clean(section.summary.why),
          results: clean(section.summary.results),
        },
      };

    case 'journey':
      return { ...section, question: clean(section.question), blocks: cleanBlocks(section.blocks) };

    case 'step':
      return {
        ...section,
        problem: clean(section.problem),
        intervention: clean(section.intervention),
        blocks: cleanBlocks(section.blocks),
      };

    case 'decision': {
      const items = section.items
        .filter((r) => !blank(r.why))
        .map((r) => ({ ...r, why: clean(r.why) }));
      return items.length ? { ...section, items } : null;
    }

    case 'outcomes':
      return {
        ...section,
        heading: clean(section.heading),
        blocks: cleanBlocks(section.blocks),
        callouts: section.callouts
          .filter((c) => !blank(c.body))
          .map((c) => ({ ...c, body: clean(c.body) })),
      };

    case 'reflection':
    case 'appendix':
    case 'custom': {
      const blocks = cleanBlocks(section.blocks);
      return blocks.length ? { ...section, blocks } : null;
    }
  }
};

/** Strips every draft marker from one case study. */
export const publishable = (study: CaseStudy): CaseStudy => ({
  ...study,
  headline: clean(study.headline),
  tagline: clean(study.tagline),
  year: clean(study.year),
  intro: cleanAll(study.intro),
  // A metadata row whose value is still a draft falls back to its honest
  // minimum when one exists, and is removed rather than left as a dangling
  // label when one does not.
  meta: study.meta.flatMap((m) => {
    if (!blank(m.value)) return [{ ...m, value: clean(m.value) }];
    return m.fallback ? [{ label: m.label, value: m.fallback }] : [];
  }),
  sections: study.sections
    .map(cleanStudySection)
    .filter((s): s is Section => s !== null),
});

/** Strips every draft marker from one project row. */
export const publishableProject = (project: Project): Project => ({
  ...project,
  year: clean(project.year),
  outcome: clean(project.outcome),
  // Chips render with separators between them, so an empty one would leave a
  // stray divider behind.
  chips: cleanAll(project.chips),
});
