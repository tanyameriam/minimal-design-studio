import type { Article, ArticleBlock } from './types';
import { aiAgent } from './aiAgent';
import { interactionDesign } from './interactionDesign';
import { visualDesign } from './visualDesign';

export * from './types';
export * from './catalogue';

/** Order here is the order they appear anywhere they are listed. */
export const articleList: Article[] = [aiAgent, interactionDesign, visualDesign];

export const articles: Record<string, Article> = Object.fromEntries(
  articleList.map((a) => [a.slug, a])
);

export function adjacentArticles(slug: string) {
  const i = articleList.findIndex((a) => a.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return { prev: articleList[i - 1], next: articleList[i + 1] };
}

const blockText = (block: ArticleBlock): string[] => {
  switch (block.kind) {
    case 'p':
    case 'h3':
    case 'quote':
      return [block.text];
    case 'list':
      return block.items.flatMap((i) => [i.lead ?? '', i.text]);
    case 'figure':
      return [block.figure.caption];
  }
};

/**
 * Reading time from the words actually on the page, at the same 220 wpm the
 * case studies use, so a reader comparing the two is comparing like with
 * like. Recomputed from the copy rather than stored, so an edit cannot leave
 * a stale figure behind.
 */
export const readingMinutes = (article: Article): number => {
  const words = [
    article.title,
    article.subtitle,
    ...article.intro,
    ...article.sections.flatMap((s) => [s.heading, ...s.blocks.flatMap(blockText)]),
    article.studio.body,
  ]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
};

/**
 * The catalogue stores each essay's reading time so a link can show it
 * without loading the prose. Stored numbers go stale, so in development the
 * stored value is checked against the computed one and any drift is said out
 * loud. Stripped from the production build with the rest of the dev branch.
 */
if (import.meta.env.DEV) {
  for (const article of articleList) {
    const actual = readingMinutes(article);
    if (article.minutes !== actual) {
      console.warn(
        `[writing] ${article.slug}: catalogue says ${article.minutes} min, prose reads ${actual}. ` +
          'Update minutes in src/data/writing/catalogue.ts.'
      );
    }
  }
}
