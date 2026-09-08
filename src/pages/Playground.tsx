import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Explorations from '@/components/Explorations';
import Contact from '@/components/Contact';
import { usePageMeta } from '@/hooks/use-page-meta';

const Playground = () => {
  usePageMeta(
    'Things I make after work',
    'Charcoal, character sketches, and 3D experiments by Tanya Sunny.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main id="main" className="shell min-h-screen bg-background">
        <section className="px-5 md:px-8 lg:px-12 pt-32 md:pt-44 pb-12">
          <div className="mx-auto max-w-3xl">
            <p className="label text-ink-500 mb-8">Off-screen practice</p>
            <h1 className="text-[2.5rem] leading-[1.05] md:text-[3.5rem] max-w-[18ch]">
              Things I make <span className="em">after work</span>.
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
