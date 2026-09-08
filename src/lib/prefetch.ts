/**
 * Warming the lazy route chunks.
 *
 * Every deep route in App.tsx is code-split, so the first click on a project
 * would otherwise wait on a network round trip. A card, a ledger row or a
 * link warms its destination the moment it signals intent, on hover or on
 * focus, and the chunk is usually in the cache before the click lands.
 *
 * One registry, shared by everything that links into the work, so a new route
 * is registered once rather than once per component.
 */
const routeChunks: Record<string, () => void> = {
  '/case-study/layrrrd/story': () => void import('@/pages/LayrrrdStory'),
  '/case-study/brynq/story': () => void import('@/pages/BrynqStory'),
  '/case-study/merry-health/story': () => void import('@/pages/MerryStory'),
  '/case-study/brynq': () => void import('@/pages/BrynqCaseStudy'),
  '/case-study/layrrrd': () => void import('@/pages/LayrrrdCaseStudy'),
  '/case-study/curateus': () => void import('@/pages/CurateusCaseStudy'),
  '/case-study/merry-health': () => void import('@/pages/MerryHealthCaseStudy'),
  '/case-study/educaitors': () => void import('@/pages/EducaitorsCaseStudy'),
  '/work': () => void import('@/pages/AllWork'),
  '/about': () => void import('@/pages/About'),
  '/writing': () => void import('@/pages/Writing'),
  '/cv': () => void import('@/pages/CV'),
  '/playground': () => void import('@/pages/Playground'),
};

/**
 * Warms the chunk behind a route. Anything under /case-study or /writing that
 * has no hand-built page of its own renders through a shared data-driven
 * route, so those fall back to it rather than doing nothing.
 */
export const prefetchRoute = (href?: string | null) => {
  if (!href) return;

  const own = routeChunks[href];
  if (own) {
    own();
    return;
  }

  if (href.startsWith('/case-study/')) void import('@/pages/CaseStudy');
  else if (href.startsWith('/writing/')) void import('@/pages/Article');
};
