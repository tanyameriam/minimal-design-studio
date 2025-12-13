import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-up">
            Product Designer
          </p>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.15] mb-8 animate-fade-up-delay-1">
            Solving complexity with clarity
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay-2">
            A designer who brings 5+ years of experience turning complex workflows into intuitive systems—creating alignment, usability, and efficiency where it matters most.
          </p>
        </div>
        
        <button 
          onClick={scrollToWork}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up-delay-3 group"
          aria-label="Scroll to work"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
