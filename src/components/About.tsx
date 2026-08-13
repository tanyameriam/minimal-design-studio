import { useReveal } from '@/hooks/use-reveal';

/** Key facts set slightly heavier so the bio scans in seconds. */
const Em = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-medium text-foreground">{children}</strong>
);

const About = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
      <div ref={ref} className="reveal mx-auto max-w-3xl border-t border-border pt-10 md:pt-14">
        <p className="label text-ink-400 mb-8">About</p>

        <h2 className="text-3xl md:text-4xl">
          Hi, I&rsquo;m <span className="em-serif">Tanya</span>.
        </h2>

        <div className="mt-6 max-w-xl space-y-5 text-lg leading-[1.55] text-ink-600">
          <p>
            I&rsquo;m a product designer at <Em>BrynQ</Em>, where my time goes to
            workflow logic, data mappings, and the coordination between teams that has
            to happen before a screen is worth drawing. I also own the product&rsquo;s
            design governance and Figma architecture.
          </p>
          <p>
            Alongside that, I lead design on <Em>Layrrrd</Em>, a live content curation
            product our team took from first commit to paying customers in nine days,
            with AI coding tools bound to a design system I wrote down.
          </p>
          <p>
            Before design, I spent three years in enterprise support at{' '}
            <Em>SAP Ariba</Em>, learning what badly designed software actually costs
            the people using it. That is still the work I am drawn to: the products
            where the interface is the smallest part of the problem.
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
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
