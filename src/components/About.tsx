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
              I'm a UX/UI Designer with 5 years of professional design experience and a broader corporate background since 2018. Experienced in UI execution, UX auditing, and workflow design for digital products.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently working on BrynQ, an HR–Payroll integration product, focusing on improving usability, clarity, and decision-making within complex system-driven flows. I have a strong technical foundation and academic focus on UX for AI-supported systems.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-serif mb-2">5+</p>
                <p className="text-sm text-muted-foreground">Years Design Experience</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-2">2018</p>
                <p className="text-sm text-muted-foreground">In Tech Since</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-16 border-t border-border">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Key Competencies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['UX Auditing', 'Systems Thinking', 'Workflow & Process Design', 'Problem Framing', 'UI & Interaction Design', 'AI-Integrated UX Workflows'].map((skill) => (
              <div key={skill} className="py-4 border-b border-border">
                <p className="font-sans text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Tools
          </p>
          <div className="flex flex-wrap gap-3">
            {['Figma', 'FigJam', 'Miro', 'Zeplin'].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-muted rounded-md text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
