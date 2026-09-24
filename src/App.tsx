import { Suspense, lazy, useEffect, useRef } from 'react';
import { showDrafts } from '@/data/drafts';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route, useLocation, type Location } from 'react-router-dom';
import BackToTop from '@/components/BackToTop';
import CursorLabel from '@/components/CursorLabel';
import Index from './pages/Index';

// Split the heavy routes out of the landing bundle.
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const LayrrrdStory = lazy(() => import('./pages/LayrrrdStory'));
const BrynqStory = lazy(() => import('./pages/BrynqStory'));
const MerryStory = lazy(() => import('./pages/MerryStory'));
const BrynqCaseStudy = lazy(() => import('./pages/BrynqCaseStudy'));
const LayrrrdCaseStudy = lazy(() => import('./pages/LayrrrdCaseStudy'));
const CurateusCaseStudy = lazy(() => import('./pages/CurateusCaseStudy'));
const MerryHealthCaseStudy = lazy(() => import('./pages/MerryHealthCaseStudy'));
const EducaitorsCaseStudy = lazy(() => import('./pages/EducaitorsCaseStudy'));
const BrynqVault = lazy(() => import('./pages/BrynqVault'));
const AllWork = lazy(() => import('./pages/AllWork'));
const About = lazy(() => import('./pages/About'));
const Writing = lazy(() => import('./pages/Writing'));
const Article = lazy(() => import('./pages/Article'));
const Playground = lazy(() => import('./pages/Playground'));
const DesignSystem = lazy(() => import('./pages/DesignSystem'));
const CV = lazy(() => import('./pages/CV'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * What a lazy route shows while its chunk arrives.
 *
 * A bare dark panel read as a broken page, particularly on the story decks,
 * which are light: the deck appeared to flash black before the first slide.
 * A hairline header and a quiet line say the page is coming, and the
 * announcement makes the wait legible to a screen reader too.
 */
const RouteFallback = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <div className="h-px w-full bg-border" />
    <div
      role="status"
      aria-live="polite"
      className="label flex flex-1 items-center justify-center text-ink-500"
    >
      Loading
    </div>
  </div>
);

/** The two-minute story decks. They open over a page rather than instead of one. */
const isStory = (pathname: string) => /^\/case-study\/[^/]+\/story\/?$/.test(pathname);

/**
 * The routes, with the story decks as a layer.
 *
 * A deck is an overlay, so it should sit over the page it was opened from,
 * the way a dialog does, not replace it with an empty ground. While a story
 * address is showing, the page underneath keeps rendering at the last
 * address that was not a story, so closing the deck lands exactly where the
 * reader was, scroll position and all. A deck opened directly, with nothing
 * behind it yet, sits over the home page.
 *
 * The page underneath is inert while the deck is open: no focus, no
 * clicks, no scrolling behind the dialog.
 */
const AppRoutes = () => {
  const location = useLocation();
  const story = isStory(location.pathname);
  const lastPage = useRef<Location | null>(null);
  if (!story) lastPage.current = location;

  const page: Location | string = story ? (lastPage.current ?? '/') : location;

  const behindRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const behind = behindRef.current;
    if (!story || !behind) return;
    behind.setAttribute('inert', '');
    const overflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      behind.removeAttribute('inert');
      document.documentElement.style.overflow = overflow;
    };
  }, [story]);

  return (
    <>
      <div ref={behindRef}>
        <Suspense fallback={<RouteFallback />}>
          <Routes location={page}>
            <Route path="/" element={<Index />} />
            {/* The slide narrative is Layrrrd's canonical case study; the
                data-driven long-form version keeps its own address. */}
            <Route path="/case-study/layrrrd" element={<LayrrrdCaseStudy />} />
            <Route path="/case-study/layrrrd/deep" element={<CaseStudy slug="layrrrd" />} />
            {/* The slide narrative is BrynQ's canonical case study; the
                data-driven long-form version keeps its own address. */}
            <Route path="/case-study/brynq" element={<BrynqCaseStudy />} />
            <Route path="/case-study/brynq/deep" element={<CaseStudy slug="brynq" />} />
            <Route path="/case-study/brynq/vault" element={<BrynqVault />} />
            {/* The scroll case study is Curateus's canonical page; the
                data-driven draft keeps its own address. */}
            {/* Curateus is unfinished (screenshots still owed), so it only routes
                in development until its images land. */}
            {showDrafts && (
              <Route path="/case-study/curateus" element={<CurateusCaseStudy />} />
            )}
            {showDrafts && (
              <Route path="/case-study/curateus/deep" element={<CaseStudy slug="curateus" />} />
            )}
            {/* The systems narrative is Merry Health's canonical page; the
                data-driven long-form version keeps its own address. */}
            <Route path="/case-study/merry-health" element={<MerryHealthCaseStudy />} />
            <Route path="/case-study/merry-health/deep" element={<CaseStudy slug="merry-health" />} />
            {/* The scroll narrative is the EducAItors case study; the
                data-driven draft keeps its own address. */}
            <Route path="/case-study/educaitors" element={<EducaitorsCaseStudy />} />
            <Route path="/case-study/educaitors/deep" element={<CaseStudy slug="educaitors" />} />
            <Route path="/case-study/:slug" element={<CaseStudy />} />
            <Route path="/work" element={<AllWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<Article />} />
            <Route path="/playground" element={<Playground />} />
            {/* The design language, rendered from the module the components
                read. Reachable from the foot of the page rather than the nav:
                it is craft evidence, not one of the five paths a hiring reader
                is looking for. */}
            <Route path="/design-system" element={<DesignSystem />} />
            <Route path="/cv" element={<CV />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      {/* Its own boundary, so the page underneath stays up while a deck's
          chunk arrives. */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/case-study/layrrrd/story" element={<LayrrrdStory />} />
          <Route path="/case-study/brynq/story" element={<BrynqStory />} />
          <Route path="/case-study/merry-health/story" element={<MerryStory />} />
          <Route path="*" element={null} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <AppRoutes />
      <BackToTop />
      <CursorLabel />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
