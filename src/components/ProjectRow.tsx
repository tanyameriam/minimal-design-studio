import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';
import FadeInImage from '@/components/FadeInImage';
import { useReveal } from '@/hooks/use-reveal';

/**
 * Warm the lazy case-study chunk the moment a row signals intent, so the
 * page is already in the cache by the time it is clicked.
 */
const prefetchCaseStudy = () => {
  import('@/pages/CaseStudy');
};

interface ProjectRowProps {
  project: Project;
  index: number;
}

/**
 * A project as a row of text, not a card.
 * The outcome sentence is the headline; imagery lives inside the case study.
 */
const ProjectRow = ({ project, index }: ProjectRowProps) => {
  const ref = useReveal<HTMLElement>();
  const { slug, title, qualifier, year, outcome, chips, cover } = project;

  const body = (
    <div className="flex gap-8">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-2xl md:text-3xl">{title}</h3>
          {qualifier && (
            <span className="label text-ink-400 translate-y-[-2px]">({qualifier})</span>
          )}
          <span className="label text-ink-400 ml-auto tabular-nums">{year}</span>
        </div>

        <p className="mt-4 max-w-2xl text-lg md:text-xl leading-[1.45] text-ink-600">
          {outcome}
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
          {chips.map((chip, i) => (
            <li key={chip} className="label text-ink-500 flex items-center gap-3">
              <span>{chip}</span>
              {i < chips.length - 1 && (
                <span aria-hidden="true" className="text-ink-400">
                  &middot;
                </span>
              )}
            </li>
          ))}
        </ul>

        {slug && (
          <span className="mt-8 inline-flex items-center gap-2 text-sm rule-link">
            View case study
            <span
              aria-hidden="true"
              className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </span>
        )}
      </div>

      {/* Decorative: the row already names the project. Hidden where space is tight. */}
      {cover && (
        <FadeInImage
          src={cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="hidden w-32 shrink-0 self-start border border-border bg-card object-cover aspect-[4/3] transition-transform duration-500 ease-smooth group-hover:-translate-y-1 sm:block md:w-40"
        />
      )}
    </div>
  );

  return (
    <article
      ref={ref}
      className="reveal border-t border-border py-10 md:py-14"
      style={{ transitionDelay: `${Math.min(index, 4) * 70}ms` }}
    >
      {slug ? (
        <Link
          to={`/case-study/${slug}`}
          onMouseEnter={prefetchCaseStudy}
          onFocus={prefetchCaseStudy}
          className="group block focus-visible:outline-none"
        >
          {body}
        </Link>
      ) : (
        <div>{body}</div>
      )}
    </article>
  );
};

export default ProjectRow;
