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
    title: 'An AI Agent Is More Than a Prompt',
    subtitle:
      'What building a mind-map agent taught me about clarification, evaluation, trust, and failure.',
    category: { strand: 'ai', label: 'Human-centred AI' },
    description:
      'What building a mind-map agent taught me about clarification, evaluation, trust, and failure.',
    featured: true,
    origin: 'From my M.Des studio work',
    minutes: 7,
  },
  'interaction-design-before-the-screen': {
    slug: 'interaction-design-before-the-screen',
    title: 'The Most Important Interaction Design Happens Before the Screen',
    subtitle: 'From design brief and scenario map to workflows, states, and a testable prototype.',
    category: { strand: 'ixd', label: 'Interaction design' },
    description:
      'From design brief and scenario map to workflows, states, and a testable prototype.',
    origin: 'From my M.Des studio work',
    minutes: 9,
  },
  'visual-design-is-a-decision-system': {
    slug: 'visual-design-is-a-decision-system',
    title: 'Visual Design Is a Decision System',
    subtitle:
      'How I translated responsibility and risk into a visual direction for healthcare billing.',
    category: { strand: 'vxd', label: 'Visual design' },
    description: 'How responsibility and risk became a visual direction for healthcare billing.',
    origin: 'From my M.Des studio work',
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
