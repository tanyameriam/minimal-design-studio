import type { Block, CaseStudy, Section } from './types';

/**
 * Estimated reading time from the words actually on the page, so the
 * title block can set expectations honestly. Runs on the publishable
 * study, after draft markers are stripped.
 */

const blockText = (block: Block): string[] => {
  switch (block.kind) {
    case 'prose':
      return block.body;
    case 'quote':
      return [block.text, block.source ?? ''];
    case 'points':
      return block.items.flatMap((i) => [i.title, i.body ?? '']);
    case 'tradeoffs':
      return block.items.flatMap((t) => [t.title, t.cost, t.gain]);
    case 'rejected':
      return block.items.flatMap((r) => [r.option, r.why]);
    case 'intended':
      return block.items.flatMap((r) => [r.outcome, r.metric]);
    case 'figures':
      return block.items.map((f) => f.caption ?? '');
    case 'beforeAfter':
      return [block.caption ?? ''];
    case 'note':
      return [block.label, block.body];
    default:
      return [];
  }
};

const sectionText = (section: Section): string[] => {
  switch (section.kind) {
    case 'pitch':
      return [
        section.summary.problems,
        section.summary.solution,
        section.summary.why,
        section.summary.results,
      ];
    case 'journey':
      return [section.question, ...section.blocks.flatMap(blockText)];
    case 'step':
      return [section.problem, section.intervention, ...section.blocks.flatMap(blockText)];
    case 'decision':
      return section.items.flatMap((r) => [r.option, r.why]);
    case 'outcomes':
      return [
        section.heading,
        ...section.blocks.flatMap(blockText),
        ...section.callouts.flatMap((c) => [c.title, c.emphasis ?? '', c.body]),
        section.quote?.text ?? '',
      ];
    case 'reflection':
    case 'appendix':
    case 'custom':
      return section.blocks.flatMap(blockText);
  }
};

export const readingMinutes = (study: CaseStudy): number => {
  const words = [study.headline, ...study.intro, ...study.sections.flatMap(sectionText)]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
};
