import type { CaseStudy } from './types';
import { publishable, showDrafts } from '../drafts';
import { brynq } from './brynq';
import { layrrrd } from './layrrrd';
import { merryHealth } from './merryHealth';
import { stree } from './stree';
import { hungerProject } from './hungerProject';
import { educaitors } from './educaitors';
import { curateus } from './curateus';

export * from './types';

/**
 * Order here is the order they appear anywhere they are listed.
 * Everything passes through `publishable`, which strips the draft markers the
 * source files carry. See src/data/drafts.ts.
 *
 * Studies still being written ride behind `showDrafts`: routable under
 * `npm run dev` for writing and review, absent from production entirely
 * until their content lands and they move into the main list.
 */
export const caseStudyList: CaseStudy[] = [
  brynq,
  layrrrd,
  merryHealth,
  stree,
  hungerProject,
  ...(showDrafts ? [educaitors, curateus] : []),
].map(publishable);

export const caseStudies: Record<string, CaseStudy> = Object.fromEntries(
  caseStudyList.map((c) => [c.slug, c])
);

export function adjacentCaseStudies(slug: string) {
  const i = caseStudyList.findIndex((c) => c.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: caseStudyList[i - 1],
    next: caseStudyList[i + 1],
  };
}
