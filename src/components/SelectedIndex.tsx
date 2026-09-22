import { Link } from 'react-router-dom';
import { indexProjects } from '@/data/projects';
import { prefetchRoute } from '@/lib/prefetch';
import { useReveal } from '@/hooks/use-reveal';

/**
 * The work the featured cards do not carry, as text cards laid out like the
 * writing band: two across, no imagery.
 *
 * These projects prove range: academic, self-initiated, earlier. They are
 * real work with real case studies behind them, and they are also not the
 * evidence anyone is hiring on, so they get a card without a thumbnail. A
 * second wall of images under the featured work would compete with the
 * projects that matter and lengthen the page for nothing.
 */
const SelectedIndex = () => {
  const ref = useReveal<HTMLDivElement>();

  if (!indexProjects.length) return null;

  return (
    <div ref={ref} className="reveal mt-stage">
      <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3">
        <h3 className="label-strong">More work</h3>
        <Link
          to="/work"
          onMouseEnter={() => prefetchRoute('/work')}
          onFocus={() => prefetchRoute('/work')}
          className="rule-link text-base text-ink-500 transition-colors hover:text-foreground"
        >
          See every project <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <ul className="mt-8 grid items-stretch gap-6 md:mt-10 md:grid-cols-2 md:gap-7">
        {indexProjects.map((project) => {
          const href = project.slug ? `/case-study/${project.slug}` : null;

          const card = (
            <div className="flex h-full flex-col">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h4 className="text-xl leading-snug md:text-2xl">
                  <span className={href ? 'rule-link' : undefined}>{project.title}</span>
                </h4>
                <span className="label ml-auto tabular-nums text-ink-500">{project.year}</span>
              </div>
              <p className="label mt-2 leading-[1.5] text-ink-500">{project.context}</p>
              <p className="mt-4 max-w-[52ch] text-base leading-snug text-ink-600">
                {project.oneLine ?? project.headline}
              </p>
              {href && (
                <span className="label mt-auto inline-block pt-6 text-ink-500 transition-colors group-hover/card:text-foreground">
                  View detailed study{' '}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-500 ease-smooth group-hover/card:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              )}
            </div>
          );

          // The whole card is the link when there is somewhere to go, as the
          // writing band's cards are.
          return (
            <li key={project.title} className={`panel p-6 md:p-8 ${href ? 'panel-hover' : ''}`}>
              {href ? (
                <Link
                  to={href}
                  onMouseEnter={() => prefetchRoute(href)}
                  onFocus={() => prefetchRoute(href)}
                  className="group/card block h-full"
                >
                  {card}
                </Link>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectedIndex;
