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
            UI/UX Designer
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 animate-fade-up-delay-1">
            Crafting digital
            <br />
            <span className="italic">experiences</span>
            <br />
            with purpose
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up-delay-2">
            I design intuitive interfaces and meaningful experiences that connect brands with their audiences.
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
