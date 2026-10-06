import { Link } from 'react-router-dom';
import { adjacentCaseStudies } from '@/data/caseStudies';
import { projects } from '@/data/projects';

/**
 * The end of every case study: the project before and the one to read next,
 * set the way the articles end. A label, the project's name, and its
 * headline as the reason to keep going, rather than a row of bare names.
 *
 * Order comes from the case study list, so drafts that only route in
 * development drop out of the sequence in production by themselves. The
 * headline is the one the home page card uses, so a project is introduced
 * in the same words wherever it is pointed to.
 */
const headlineFor = (slug: string, fallback: string) =>
  projects.find((p) => p.slug === slug)?.headline ?? fallback;

export const ReadNext = ({ slug, className = '' }: { slug: string; className?: string }) => {
  const { prev, next } = adjacentCaseStudies(slug);
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="More projects"
      className={`mx-auto grid w-full max-w-[var(--shell)] gap-10 border-t border-border px-gutter py-break sm:grid-cols-2 sm:gap-8 ${className}`}
    >
      {prev ? (
        <Link to={`/case-study/${prev.slug}`} className="group block">
          <span className="label text-ink-500">Previous</span>
          <span className="mt-3 block text-sm text-ink-500">{prev.title}</span>
          <span className="rule-link mt-1.5 block max-w-[30ch] text-xl leading-snug md:text-2xl">
            {headlineFor(prev.slug, prev.headline)}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link to={`/case-study/${next.slug}`} className="group block sm:text-right">
          <span className="label text-ink-500">Read next</span>
          <span className="mt-3 block text-sm text-ink-500">{next.title}</span>
          <span className="rule-link mt-1.5 block max-w-[30ch] text-xl leading-snug sm:ml-auto md:text-2xl">
            {headlineFor(next.slug, next.headline)}{' '}
            <span aria-hidden="true">&rarr;</span>
          </span>
        </Link>
      )}
    </nav>
  );
};

export default ReadNext;
