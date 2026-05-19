import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 brutal-grid pointer-events-none opacity-60" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-wrap items-center gap-2 mb-8 animate-fade-up">
          <span className="brutal-tag bg-secondary">Available · 2026</span>
          <span className="brutal-tag">Utrecht, NL</span>
          <span className="brutal-tag">Product Design</span>
        </div>

        <h1 className="font-display text-[15vw] md:text-[10vw] lg:text-[9rem] leading-[0.9] mb-8 animate-fade-up-delay-1">
          Tanya
          <br />
          <span className="text-primary">Sunny.</span>
        </h1>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-7 text-lg md:text-2xl leading-snug font-medium animate-fade-up-delay-2">
            Product Designer turning <span className="bg-secondary px-2">complex systems</span> into
            decisions people can actually make. UX research, systems thinking, AI-enhanced workflows.
          </p>

          <div className="md:col-span-5 flex flex-wrap gap-3 animate-fade-up-delay-3">
            <a href="#work" className="brutal-button brutal-button-primary">
              See the work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#contact" className="brutal-button brutal-button-outline">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
