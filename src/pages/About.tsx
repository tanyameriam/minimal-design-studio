import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useReveal } from '@/hooks/use-reveal';
import { prefetchRoute } from '@/lib/prefetch';
import charcoal1 from '@/assets/charcoal-1.png';
import charcoal2 from '@/assets/charcoal-2.png';
import charcoal4 from '@/assets/charcoal-4.png';
import charcoal6 from '@/assets/charcoal-6.png';

/** Key facts set slightly heavier so the bio scans in seconds. */
const Em = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-medium text-foreground">{children}</strong>
);

/**
 * The personal page.
 *
 * The bio used to be a section near the foot of the home page, which made the
 * home page argue two things at once: here is the work, and here is the
 * person. It is now its own destination, and it gathers everything that is
 * about Tanya rather than about a project: the bio, the practical details, a
 * portrait, and the drawing habit.
 *
 * The CV is linked rather than restated. Every fact on this page exists once,
 * either here or on /cv, so the two cannot drift apart; a summary of the roles
 * copied into this file would be a second source for the same dates.
 */

/** Practical facts, all of them already on the CV. Nothing new is claimed here. */
const details = [
  { label: 'Based in', body: 'The Netherlands' },
  { label: 'Open to', body: 'Medior to senior product-design roles' },
  { label: 'Education', body: "Master's in UX, specialising in AI, 2026" },
  { label: 'Languages', body: 'English, fluent. Dutch, beginner.' },
];

const drawings = [charcoal1, charcoal2, charcoal4, charcoal6];

const About = () => {
  usePageMeta(
    'About',
    'Tanya Sunny is a product designer in the Netherlands working on B2B platforms and multi-stakeholder services.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bioRef = useReveal<HTMLDivElement>();
  const detailRef = useReveal<HTMLElement>();
  const drawRef = useReveal<HTMLElement>();

  return (
    <>
      <Navigation />
      <main id="main" className="shell min-h-screen bg-background">
        {/*
          Portrait beside the opening on desktop, above it on a phone. It is a
          photograph on a journal page, so it gets the border and the slight
          rotation the project stacks use rather than sitting flush.

          The bio sits in the same column as the heading rather than in a
          section of its own: split apart, the prose started below the full
          height of the portrait and left a hole under the heading.
        */}
        <section className="px-5 pb-20 pt-32 md:px-8 md:pb-24 md:pt-44 lg:px-12">
          <div className="grid items-start gap-x-14 gap-y-10 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
            <div>
              <p className="label-strong mb-8">About</p>
              <h1 className="max-w-[16ch] text-[2.5rem] leading-[1.05] md:text-[3.5rem]">
                Hi, I&rsquo;m <span className="em">Tanya</span>
                <span aria-hidden="true" className="text-accent">
                  .
                </span>
              </h1>

              <div
                ref={bioRef}
                className="reveal mt-10 max-w-[42rem] space-y-5 text-lg leading-[1.55] text-ink-600 md:mt-12"
              >
                <p>
                  I&rsquo;m a product designer working on products where the visible interface is
                  only one part of the problem.
                </p>
                <p>
                  At <Em>BrynQ</Em>, I helped move integration delivery from developer-led custom
                  work toward reusable, template-based setup. Across my work, I move between
                  research, workflow and system design, interaction detail, and delivery.
                </p>
                <p>
                  Before product design, I spent three years in enterprise support at{' '}
                  <Em>SAP Ariba</Em>. That experience showed me what badly designed software costs
                  the people expected to use it every day.
                </p>
                <p className="text-base text-ink-500">
                  Outside work I co-organise{' '}
                  <a
                    href="https://www.linkedin.com/company/design-reimagined-utrecht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rule-link text-ink-600"
                  >
                    Design Reimagined Utrecht
                  </a>
                  , a design community that runs sessions and workshops in the Netherlands.
                </p>
              </div>
            </div>

            <img
              src="/tanya-portrait.jpg"
              alt="Tanya Sunny"
              loading="eager"
              decoding="async"
              className="w-full max-w-xs rotate-[-1.5deg] rounded-[var(--radius)] object-cover shadow-lg md:justify-self-end"
            />
          </div>
        </section>

        {/* The practical answers, and the way through to the full CV. */}
        <section
          ref={detailRef}
          aria-label="Details"
          className="reveal px-5 pb-20 md:px-8 md:pb-24 lg:px-12"
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {details.map(({ label, body }) => (
              <li key={label} className="panel p-6">
                <p className="label text-ink-500">{label}</p>
                <p className="mt-3 max-w-[26ch] text-lg leading-snug text-ink-800">{body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              to="/cv"
              onMouseEnter={() => prefetchRoute('/cv')}
              onFocus={() => prefetchRoute('/cv')}
              className="rule-link group inline-flex items-center gap-2.5 text-lg text-link"
            >
              The full CV, with dates and detail
              <span
                aria-hidden="true"
                className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/*
          The drawing habit. It used to be a single thumbnail at the foot of
          the home page, which was the right weight there and too little here:
          this is the page where it belongs, so it gets the row.
        */}
        <section
          ref={drawRef}
          aria-labelledby="drawings-heading"
          className="reveal px-5 pb-24 md:px-8 md:pb-28 lg:px-12"
        >
          <div>
            <h2 id="drawings-heading" className="label-strong mb-8">
              Off-screen practice
            </h2>

            <Link
              to="/playground"
              onMouseEnter={() => prefetchRoute('/playground')}
              onFocus={() => prefetchRoute('/playground')}
              className="group block"
            >
              <p className="max-w-2xl text-lg leading-[1.55] text-ink-600">
                Charcoal, character sketches, and 3D experiments. Keeping a drawing habit is how I
                stay fast at the parts of design that are not interfaces.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {drawings.map((src) => (
                  <li key={src}>
                    <img
                      src={src}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/4] w-full rounded-[var(--radius)] object-cover shadow-sm grayscale transition-[filter] duration-500 ease-smooth group-hover:grayscale-0"
                    />
                  </li>
                ))}
              </ul>

              <span className="rule-link mt-7 inline-flex items-center gap-2.5 text-lg text-link">
                Things I make after work
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default About;
