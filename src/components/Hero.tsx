const Hero = () => {
  return <section id="hero" className="flex flex-col justify-center px-6 lg:px-12 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] mb-6 animate-fade-up">I'm a Product Designer</h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-1">
          Combining 5 years of enterprise UX expertise with research-driven design process to solve complex problems
        </p>
      </div>
    </section>;
};
export default Hero;