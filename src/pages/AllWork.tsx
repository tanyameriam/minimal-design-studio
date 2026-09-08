import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import ProjectCard from '@/components/ProjectCard';
import { earlierWork, flagshipProjects, selectedProjects } from '@/data/projects';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useReveal } from '@/hooks/use-reveal';

/**
 * Every project, at full weight.
 *
 * The home page runs the work as a ledger: one open project at a time, five
 * outcomes in a screen. This page is where that compression is paid back:
 * every project as a card, with the full outcome paragraph, the numbers with
 * their provenance, the role and both ways in. Nothing here is unique to this
 * page, which is the point. It reads from the same canonical project data as
 * the ledger, so the two cannot drift apart.
 */

const Band = ({
  id,
  label,
  heading,
  note,
  children,
}: {
  id: string;
  label: string;
  heading: string;
  note: string;
  children: React.ReactNode;
}) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="scroll-mt-24 px-5 pb-24 md:px-8 md:pb-32 lg:px-12">
      <div ref={ref} className="reveal border-t border-border pt-10 md:pt-14">
        <p className="label-strong mb-6">{label}</p>
        <h2 className="max-w-[20ch] text-3xl leading-[1.1] md:text-4xl">{heading}</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">{note}</p>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
};

const AllWork = () => {
  usePageMeta(
    'Work',
    'Every project, in full: B2B platform work, zero-to-one product validation, service and systems design, and AI product design. Product designer based in the Netherlands.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="page-ground">
        <main id="main" className="shell min-h-screen overflow-x-clip">
          <header className="px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40 lg:px-12">
            <p className="label-strong">Work ( 2021 - 26 )</p>
            <h1
              className="reveal mt-8 max-w-[16ch] leading-[0.98]"
              data-shown="true"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '-0.035em' }}
            >
              Every project, <span className="em">in full.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.6] text-ink-600">
              The home page opens one project at a time. This is all of it, at the same depth:
              what the work was, what I owned, what changed, and how firm each number actually
              is.
            </p>
          </header>

          <Band
            id="flagship"
            label="Featured"
            heading="The three with the deepest evidence."
            note="Ongoing B2B platform work, a validated zero-to-one product, and a multi-party service system. Each has a two-minute story and a detailed case study."
          >
            <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-7">
              {flagshipProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  featured={index === 0}
                />
              ))}
            </div>
          </Band>

          <Band
            id="selected"
            label="Selected"
            heading="Range, and how the practice developed."
            note="Shorter engagements, academic and self-initiated work. Kept honest about what shipped, what stayed a concept, and what was never deployed."
          >
            <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-7">
              {selectedProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </Band>

          {earlierWork.length > 0 && (
            <Band
              id="earlier"
              label="Earlier"
              heading="Before the case studies."
              note="Freelance and early commercial work, kept as a line rather than a page."
            >
              <ul className="max-w-4xl space-y-7">
                {earlierWork.map((item) => (
                  <li key={item.title} className="flex flex-col sm:flex-row sm:gap-6">
                    <div className="flex items-baseline gap-3 sm:w-64 sm:shrink-0">
                      <h3 className="text-xl">{item.title}</h3>
                      <span className="label tabular-nums text-ink-500">{item.year}</span>
                    </div>
                    <p className="mt-1 text-lg leading-relaxed text-ink-500 sm:mt-0">
                      <span className="text-ink-600">{item.role}.</span> {item.note}
                    </p>
                  </li>
                ))}
              </ul>
            </Band>
          )}
        </main>
        <Contact />
      </div>
    </>
  );
};

export default AllWork;
