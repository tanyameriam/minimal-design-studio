import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Explorations from '@/components/Explorations';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      <Work />
      <Explorations />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
