import type { CaseStudy } from './types';
import { publishable } from '../drafts';
import { brynq } from './brynq';
import { merryHealth } from './merryHealth';
import { stree } from './stree';
import { hungerProject } from './hungerProject';

export * from './types';

/**
 * Order here is the order they appear anywhere they are listed.
 * Everything passes through `publishable`, which strips the draft markers the
 * source files carry. See src/data/drafts.ts.
 */
export const caseStudyList: CaseStudy[] = [brynq, merryHealth, stree, hungerProject].map(
  publishable
);

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
