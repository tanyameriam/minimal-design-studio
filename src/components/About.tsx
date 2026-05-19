const skills = [
  'UX Auditing',
  'Systems Thinking',
  'Workflow Design',
  'Problem Framing',
  'UI & Interaction',
  'AI-Integrated UX',
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 lg:px-12 bg-foreground text-background border-t-2 border-foreground"
    >
      <div className="container mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60 mb-3">
          [ 02 ] — About
        </p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-12 md:mb-16 max-w-5xl">
          Designing
          <br />
          with <span className="text-primary">intention</span>
          <br />
          not decoration.
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm a UX/UI Designer with 5 years of professional design experience and a broader
              corporate background since 2018. Experienced in UI execution, UX auditing, and
              workflow design for digital products.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-background/80">
              Currently working on BrynQ — an HR/Payroll integration product — focused on usability,
              clarity, and decision-making inside complex system-driven flows. Strong technical
              foundation and academic focus on UX for AI-supported systems.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 self-start">
            <div className="brutal-border-thick border-background bg-secondary text-foreground p-6">
              <p className="font-display text-6xl mb-1">5</p>
              <p className="font-mono text-xs uppercase tracking-wider">Years Design</p>
            </div>
            <div className="brutal-border-thick border-background bg-primary text-primary-foreground p-6">
              <p className="font-display text-6xl mb-1">'18</p>
              <p className="font-mono text-xs uppercase tracking-wider">In Tech Since</p>
            </div>
            <div className="brutal-border-thick border-background bg-accent text-accent-foreground p-6">
              <p className="font-display text-6xl mb-1">4+</p>
              <p className="font-mono text-xs uppercase tracking-wider">Case Studies</p>
            </div>
            <div className="brutal-border-thick border-background bg-background text-foreground p-6">
              <p className="font-display text-6xl mb-1">1</p>
              <p className="font-mono text-xs uppercase tracking-wider">Community Built</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t-2 border-background/30">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60 mb-6">
            Key Competencies
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="brutal-tag bg-background text-foreground border-background"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
