import type { ArticleSummary } from './types';

/**
 * Everything needed to name an essay without loading it.
 *
 * The home page links to all three; the essays themselves are tens of
 * thousands of characters. Keeping the card-level facts here means the
 * landing bundle carries three titles instead of three articles, and the
 * prose arrives with the route that renders it. Each article file spreads
 * its own entry, so a title exists once.
 */
export type ArticleSlug =
  | 'an-ai-agent-is-more-than-a-prompt'
  | 'interaction-design-before-the-screen'
  | 'visual-design-is-a-decision-system';

export const summaries: Record<ArticleSlug, ArticleSummary> = {
  'an-ai-agent-is-more-than-a-prompt': {
    slug: 'an-ai-agent-is-more-than-a-prompt',
    title: 'An AI Helper Is More Than a Prompt',
    subtitle:
      'What building an AI helper for mind maps taught me about asking questions, checking results, trust, and things going wrong.',
    category: { strand: 'ai', label: 'AI that puts people first' },
    description:
      'What building an AI helper for mind maps taught me about asking questions, checking results, trust, and things going wrong.',
    featured: true,
    origin: 'From my master’s design projects',
    minutes: 7,
  },
  'interaction-design-before-the-screen': {
    slug: 'interaction-design-before-the-screen',
    title: 'The Most Important Design Work Happens Before the Screen',
    subtitle: 'From a design plan and a map of situations to the steps, the screens for every case, and a mock-up you can test.',
    category: { strand: 'ixd', label: 'Interaction design' },
    description:
      'From a design plan and a map of situations to the steps, the screens for every case, and a mock-up you can test.',
    origin: 'From my master’s design projects',
    minutes: 9,
  },
  'visual-design-is-a-decision-system': {
    slug: 'visual-design-is-a-decision-system',
    title: 'How Things Look Is a Set of Decisions',
    subtitle:
      'How I turned responsibility and risk into a look and feel for a healthcare billing app.',
    category: { strand: 'vxd', label: 'Visual design' },
    description: 'How responsibility and risk became a look and feel for healthcare billing.',
    origin: 'From my master’s design projects',
    minutes: 6,
  },
};

/** Order here is the order they appear anywhere they are listed. */
export const articleOrder: ArticleSlug[] = [
  'an-ai-agent-is-more-than-a-prompt',
  'interaction-design-before-the-screen',
  'visual-design-is-a-decision-system',
];

export const summaryList: ArticleSummary[] = articleOrder.map((slug) => summaries[slug]);
