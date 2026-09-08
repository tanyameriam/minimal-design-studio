import { Link } from 'react-router-dom';
import { indexProjects } from '@/data/projects';
import { prefetchRoute } from '@/lib/prefetch';
import { useReveal } from '@/hooks/use-reveal';

/**
 * The work the ledger does not carry, as an index rather than more cards.
 *
 * These projects prove range: academic, self-initiated, earlier. They are
 * real work with real case studies behind them, and they are also not the
 * evidence anyone is hiring on, so they get one line each. A second wall of
 * thumbnails under the ledger would compete with the projects that matter
 * and lengthen the page for nothing.
 */
const SelectedIndex = () => {
  const ref = useReveal<HTMLDivElement>();

  if (!indexProjects.length) return null;

  return (
    <div ref={ref} className="reveal mt-16 md:mt-20">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3">
        <h3 className="label-strong">More work</h3>
        <Link
          to="/work"
          onMouseEnter={() => prefetchRoute('/work')}
          onFocus={() => prefetchRoute('/work')}
          className="rule-link text-base text-ink-500 transition-colors hover:text-foreground"
        >
          Every project in detail <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <ul className="mt-4 grid gap-3">
        {indexProjects.map((project) => {
          const href = project.slug ? `/case-study/${project.slug}` : null;

          const row = (
            <div className="panel panel-hover grid items-baseline gap-x-8 gap-y-2 p-5 lg:grid-cols-[minmax(0,11rem)_minmax(0,14rem)_minmax(0,1fr)_5rem_1.5rem] lg:gap-x-6 lg:p-6">
              <span className="text-xl md:text-2xl">{project.title}</span>
              <span className="label leading-[1.5] text-ink-500">{project.context}</span>
              <span className="max-w-[52ch] text-base leading-snug text-ink-500">
                {project.oneLine ?? project.headline}
              </span>
              <span className="label tabular-nums text-ink-500 lg:justify-self-end">
                {project.year}
              </span>
              <span
                aria-hidden="true"
                className="hidden text-ink-400 transition-transform duration-500 ease-smooth group-hover/row:translate-x-1 lg:block lg:justify-self-end"
              >
                &rarr;
              </span>
            </div>
          );

          return (
            <li key={project.title}>
              {href ? (
                <Link
                  to={href}
                  onMouseEnter={() => prefetchRoute(href)}
                  onFocus={() => prefetchRoute(href)}
                  className="group/row block transition-colors duration-300 hover:text-foreground"
                >
                  {row}
                </Link>
              ) : (
                row
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectedIndex;
