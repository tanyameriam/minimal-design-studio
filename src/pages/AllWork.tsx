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
    <section id={id} className="scroll-mt-24 px-gutter pb-section">
      <div ref={ref} className="reveal border-t border-border pt-break">
        <p className="label-strong mb-6">{label}</p>
        <h2 className="max-w-[20ch] text-3xl leading-[1.1] md:text-4xl">{heading}</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">{note}</p>
        <div className="mt-break">{children}</div>
      </div>
    </section>
  );
};

const AllWork = () => {
  usePageMeta(
    'Work',
    'Every project, in one place: business software, a new app tested with real customers, services that connect many people, and AI tools. By Tanya Sunny, product designer in the Netherlands.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="page-ground">
        <main id="main" className="shell min-h-screen overflow-x-clip">
          <header className="px-gutter pb-stage pt-masthead">
            <p className="label-strong">Work ( 2021 - 26 )</p>
            <h1
              className="reveal mt-8 max-w-[16ch] leading-[0.98]"
              data-shown="true"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '-0.035em' }}
            >
              Every project, <span className="em">in full.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.6] text-ink-600">
              Here is every project, all in one place. For each one you can see what the work was,
              what I did, what changed, and how sure we are about each number.
            </p>
          </header>

          <Band
            id="flagship"
            label="Featured"
            heading="The three projects with the strongest proof."
            note="Ongoing work on business software, a new app that real customers paid for, and a service that connects many groups of people. Each one has a two-minute story and a longer, detailed study."
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
            heading="Other projects, and how I grew as a designer."
            note="Shorter jobs, university projects, and projects I started myself. I say clearly which ones were launched, which stayed ideas, and which were never used for real."
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
              heading="Earlier work."
              note="Freelance and early jobs, in one line each."
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
