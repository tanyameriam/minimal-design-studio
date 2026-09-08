import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProofRail from '@/components/ProofRail';
import Work from '@/components/Work';
import WritingBand from '@/components/WritingBand';
import Contact from '@/components/Contact';

const Index = () => {
  const location = useLocation();

  /**
   * Land on the right section when arriving from another route.
   *
   * The router does not act on the hash by itself, so /#work would otherwise
   * drop a visitor at the top of the page, which is exactly the bug the nav
   * had. Sections carry scroll-mt, so the heading clears the fixed nav.
   */
  useEffect(() => {
    const target =
      location.hash.slice(1) || (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;

    const el = document.getElementById(target);
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  }, [location.hash, location.state]);

  return (
    <>
      <Navigation />
      <div className="page-ground">
        <main id="main" className="shell min-h-screen">
          <Hero />
          <ProofRail />
          <Work />
          <WritingBand />
        </main>
        <Contact />
      </div>
    </>
  );
};

export default Index;
