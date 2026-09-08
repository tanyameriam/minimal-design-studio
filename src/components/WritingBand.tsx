import { Link } from 'react-router-dom';
import { summaries, type ArticleSlug } from '@/data/writing/catalogue';
import { prefetchRoute } from '@/lib/prefetch';
import { useReveal } from '@/hooks/use-reveal';

/**
 * The writing, as a band under the work rather than a section of its own.
 *
 * These essays are not projects and should not be scanned as if they were, so
 * there are no cards here: two entries, a fine rule between them, and the way
 * to the rest. They sit after the work because that is what they came out of,
 * which is also why the label says so.
 *
 * Two, not three. A third would turn a band into a section, and the index at
 * /writing is one link away.
 */
const shown: ArticleSlug[] = [
  'interaction-design-before-the-screen',
  'an-ai-agent-is-more-than-a-prompt',
];

const WritingBand = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal px-5 pb-24 md:px-8 md:pb-28 lg:px-12">
      <div className="border-t border-border pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3">
          <h2 className="label-strong">From the work</h2>
          <Link
            to="/writing"
            onMouseEnter={() => prefetchRoute('/writing')}
            onFocus={() => prefetchRoute('/writing')}
            className="rule-link text-base text-ink-500 transition-colors hover:text-foreground"
          >
            All notes <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <ul className="mt-7 grid gap-4 md:grid-cols-2">
          {shown.map((slug) => {
            const article = summaries[slug];
            const href = `/writing/${article.slug}`;

            return (
              <li
                key={slug}
                data-strand={article.category.strand}
                className="panel panel-hover p-6 md:p-7"
              >
                <Link
                  to={href}
                  onMouseEnter={() => prefetchRoute(href)}
                  onFocus={() => prefetchRoute(href)}
                  className="group block"
                >
                  <h3 className="flex items-start gap-3 text-xl leading-snug">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-2 w-2 shrink-0 bg-[hsl(var(--strand))]"
                    />
                    <span className="rule-link">{article.title}</span>
                  </h3>
                  <p className="mt-3 max-w-[52ch] pl-5 text-base leading-snug text-ink-500">
                    {article.subtitle}
                  </p>
                  <span className="label mt-4 inline-block pl-5 text-ink-500 transition-colors group-hover:text-foreground">
                    {article.minutes}-minute read{' '}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-500 ease-smooth group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WritingBand;
