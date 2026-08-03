import { useReveal } from '@/hooks/use-reveal';

const About = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
      <div ref={ref} className="reveal mx-auto max-w-3xl border-t border-border pt-10 md:pt-14">
        <p className="label text-ink-400 mb-8">About</p>

        <div className="max-w-xl space-y-5 text-lg leading-[1.55] text-ink-600">
          <p>
            I spent three years in enterprise support at SAP Ariba before moving into
            design, which is where I learned what badly designed software actually
            costs the people using it. That is still the work I am drawn to: complex,
            system-driven products where the interface is the smallest part of the
            problem.
          </p>
          <p>
            At BrynQ I design HR and payroll integration flows, which means most of my
            time goes to workflow logic, data mappings, and the coordination between
            teams that has to happen before a screen is worth drawing. I also guide a
            junior designer and own how our Figma files are structured.
          </p>
          <p>
            Outside work I co-organise{' '}
            <a
              href="https://www.linkedin.com/company/design-reimagined-utrecht"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground rule-link"
            >
              Design Reimagined Utrecht
            </a>
            , a design community that runs sessions and workshops in the Netherlands.
            I am currently finishing a Master&rsquo;s in UX with a specialisation in AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
