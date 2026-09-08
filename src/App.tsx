import { Suspense, lazy } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/layrrrd/story" element={<LayrrrdStory />} />
          {/* The slide narrative is Layrrrd's canonical case study; the
              data-driven long-form version keeps its own address. */}
          <Route path="/case-study/layrrrd" element={<LayrrrdCaseStudy />} />
          <Route path="/case-study/layrrrd/deep" element={<CaseStudy slug="layrrrd" />} />
          <Route path="/case-study/brynq/story" element={<BrynqStory />} />
          {/* The slide narrative is BrynQ's canonical case study; the
              data-driven long-form version keeps its own address. */}
          <Route path="/case-study/brynq" element={<BrynqCaseStudy />} />
          <Route path="/case-study/brynq/deep" element={<CaseStudy slug="brynq" />} />
          <Route path="/case-study/brynq/vault" element={<BrynqVault />} />
          {/* The scroll case study is Curateus's canonical page; the
              data-driven draft keeps its own address. */}
          <Route path="/case-study/curateus" element={<CurateusCaseStudy />} />
          <Route path="/case-study/curateus/deep" element={<CaseStudy slug="curateus" />} />
          {/* The systems narrative is Merry Health's canonical page; the
              data-driven long-form version keeps its own address. */}
          <Route path="/case-study/merry-health/story" element={<MerryStory />} />
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
          <Route path="/cv" element={<CV />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <BackToTop />
      <CursorLabel />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
