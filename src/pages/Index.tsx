import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  const location = useLocation();

  // Honour a section target passed by the nav from another route.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.state]);

  return (
    <>
      <Navigation />
      <main id="main" className="min-h-screen bg-background">
        <Hero />
        <Work />
        <About />
      </main>
      <Contact />
    </>
  );
};

export default Index;
