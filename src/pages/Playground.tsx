import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Explorations from '@/components/Explorations';
import Contact from '@/components/Contact';
import { usePageMeta } from '@/hooks/use-page-meta';

const Playground = () => {
  usePageMeta('Playground', 'Charcoal, character sketches, and 3D experiments by Tanya Sunny.');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main id="main" className="min-h-screen bg-background">
        <section className="px-6 md:px-10 lg:px-16 pt-32 md:pt-44 pb-12">
          <div className="mx-auto max-w-3xl">
            <p className="label text-ink-400 mb-8">Playground</p>
            <h1 className="text-[2.5rem] leading-[1.05] md:text-[3.5rem] max-w-[18ch]">
              Work that isn&rsquo;t trying to be <span className="em-serif">useful</span>.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-[1.45] text-ink-600">
              Charcoal, character sketches, and 3D experiments. Keeping a drawing
              habit is how I stay fast at the parts of design that are not
              interfaces.
            </p>
          </div>
        </section>

        <Explorations />
      </main>
      <Contact />
    </>
  );
};

export default Playground;
