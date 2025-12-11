const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Designing with
              <br />
              <span className="italic">intention</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a UI/UX designer with over 5 years of experience creating digital products that balance aesthetics with functionality. My approach centers on understanding user needs and translating them into elegant, intuitive interfaces.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Previously, I've worked with startups and established brands across fintech, healthcare, and e-commerce, always striving to create meaningful connections between people and technology.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-serif mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-2">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-16 border-t border-border">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Expertise
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'Mobile Apps', 'Web Design', 'Branding', 'Interaction Design'].map((skill) => (
              <div key={skill} className="py-4 border-b border-border">
                <p className="font-sans text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
