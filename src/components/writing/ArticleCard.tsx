import { Link } from 'react-router-dom';
import type { Article } from '@/data/writing';
import { readingMinutes } from '@/data/writing';
import { useReveal } from '@/hooks/use-reveal';
import StrandMark from './StrandMark';

/** Warm the article chunk the moment a card signals intent. */
const prefetch = () => void import('@/pages/Article');

interface ArticleCardProps {
  article: Article;
  index: number;
  /** The lead essay runs wide, its mark beside the text rather than above it. */
  featured?: boolean;
}

/**
 * An article as a card.
 *
 * Deliberately not a project card. A project card leads with an outcome and
 * a row of numbers; this one leads with the idea and ends with an invitation
 * to read, because that is the only thing an essay can offer. No metrics, no
 * status chip, no cover photograph.
 */
const ArticleCard = ({ article, index, featured }: ArticleCardProps) => {
  const ref = useReveal<HTMLElement>();
  const href = `/writing/${article.slug}`;
  const minutes = readingMinutes(article);

  const meta = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span
        aria-hidden="true"
        className="h-2 w-2 shrink-0 bg-[hsl(var(--strand))]"
      />
      <span className="label text-ink-500">{article.category.label}</span>
      <span className="label ml-auto tabular-nums text-ink-500">{minutes} min read</span>
    </div>
  );

  const mark = (
    <div className="border border-border bg-background p-6">
      <div className="aspect-[16/8]">
        <StrandMark strand={article.category.strand} />
      </div>
    </div>
  );

  return (
    <article
      ref={ref}
      data-strand={article.category.strand}
      style={{ transitionDelay: `${Math.min(index, 4) * 70}ms` }}
      className={`reveal group/card flex h-full flex-col border border-border bg-card p-6 transition-[border-color,transform] duration-500 ease-smooth hover:-translate-y-0.5 hover:border-ink-400 md:p-8 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Paired cards carry the mark on top, so two cards of different text
          lengths still line up along the same two edges. */}
      {!featured && <div className="mb-8">{mark}</div>}

      <div
        className={
          featured ? 'grid gap-8 lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-12' : 'flex flex-1'
        }
      >
        <div className="flex h-full w-full flex-col">
          {meta}

          <Link to={href} onMouseEnter={prefetch} onFocus={prefetch} className="group/head mt-5">
            <h2
              className={`leading-[1.12] ${featured ? 'max-w-[20ch] text-3xl md:text-4xl' : 'text-2xl'}`}
            >
              {article.title}
            </h2>
          </Link>

          <p
            className={`mt-4 leading-[1.55] text-ink-600 ${featured ? 'max-w-xl text-lg' : 'text-base'}`}
          >
            {article.description}
          </p>

          <div className="mt-auto pt-7">
            {/* Three cards carry the same visible words, so the accessible
                name names the article. */}
            <Link
              to={href}
              onMouseEnter={prefetch}
              onFocus={prefetch}
              aria-label={`Read the article: ${article.title}`}
              className={`rule-link ${featured ? 'text-xl' : 'text-lg'}`}
            >
              Read the article <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {featured && <div className="order-first self-start lg:order-none">{mark}</div>}
      </div>
    </article>
  );
};

export default ArticleCard;
