import { Suspense, lazy } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';

// Split the heavy routes out of the landing bundle.
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Playground = lazy(() => import('./pages/Playground'));
const CV = lazy(() => import('./pages/CV'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/cv" element={<CV />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
