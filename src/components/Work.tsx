import ProjectRow from './ProjectRow';
import { projects, earlierWork } from '@/data/projects';
import { useReveal } from '@/hooks/use-reveal';

const Work = () => {
  const published = projects.filter((p) => p.published);
  const earlierRef = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
      <div className="mx-auto max-w-3xl">
        <p className="label text-ink-400 mb-2">Projects ( 2021 - 26 )</p>

        <div>
          {published.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>

        <div ref={earlierRef} className="reveal border-t border-border pt-10 md:pt-14">
          <p className="label text-ink-400 mb-8">Selected earlier work</p>
          <ul className="space-y-6">
            {earlierWork.map((item) => (
              <li key={item.title} className="flex flex-col sm:flex-row sm:gap-6">
                <div className="flex items-baseline gap-3 sm:w-52 sm:shrink-0">
                  <span className="text-base">{item.title}</span>
                  <span className="label text-ink-400 tabular-nums">{item.year}</span>
                </div>
                <p className="text-sm leading-relaxed text-ink-500 mt-1 sm:mt-0">
                  <span className="text-ink-600">{item.role}.</span> {item.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
