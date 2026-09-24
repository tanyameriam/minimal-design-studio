import { Link } from 'react-router-dom';
import type { Article } from '@/data/writing';
import { readingMinutes } from '@/data/writing';
import { SHELL, useCardNavigation } from '@/hooks/use-card-navigation';
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
 * Built on the project card's shell, padding and type scale, so the writing
 * index reads as the same site as the home page. What it leaves out is the
 * project furniture: no metrics, no status chip, no cover photograph. It
 * leads with the idea and ends with an invitation to read, because that is
 * the only thing an essay can offer.
 */
const ArticleCard = ({ article, index, featured }: ArticleCardProps) => {
  const ref = useReveal<HTMLElement>();
  const href = `/writing/${article.slug}`;
  const minutes = readingMinutes(article);
  const cardNav = useCardNavigation(href);

  const meta = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[hsl(var(--strand))]" />
      <span className="label text-ink-800">{article.category.label}</span>
      <span className="label ml-auto tabular-nums text-ink-500">{minutes} min read</span>
    </div>
  );

  /** Framed exactly like a project cover: one radius step inside the shell. */
  const mark = (
    <div className="overflow-hidden rounded-xl border border-border bg-background p-6 md:p-8">
      <div className="aspect-[16/9]">
        <StrandMark strand={article.category.strand} />
      </div>
    </div>
  );

  const headline = (
    <Link to={href} onMouseEnter={prefetch} onFocus={prefetch} className="group/head block">
      <h2
        className={
          featured
            ? 'mt-5 max-w-3xl text-3xl leading-[1.12] md:text-4xl'
            : 'mt-4 text-2xl leading-[1.15] md:text-[1.75rem]'
        }
      >
        {article.title}{' '}
        <span
          aria-hidden="true"
          className="inline-block text-ink-400 transition-transform duration-500 ease-smooth group-hover/head:translate-x-1"
        >
          &rarr;
        </span>
      </h2>
    </Link>
  );

  const body = (
    <div className="flex flex-1 flex-col">
      {meta}
      {headline}
      <p
        className={
          featured
            ? 'mt-6 max-w-2xl text-lg leading-[1.55] text-ink-600 md:text-xl'
            : 'mt-4 text-base leading-[1.55] text-ink-600'
        }
      >
        {article.description}
      </p>

      <div className={featured ? 'mt-8 text-xl' : 'mt-auto pt-7 text-lg'}>
        {/* Three cards carry the same visible words, so the accessible
            name names the article. */}
        <Link
          to={href}
          onMouseEnter={prefetch}
          onFocus={prefetch}
          aria-label={`Read the article: ${article.title}`}
          className="rule-link"
        >
          Read the article <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );

  const delay = { transitionDelay: `${Math.min(index, 4) * 70}ms` };

  if (featured) {
    return (
      <article
        ref={ref}
        style={delay}
        {...cardNav}
        data-strand={article.category.strand}
        data-cursor="Read the article"
        className={`${SHELL} p-6 md:col-span-2 md:p-9 lg:p-11`}
      >
        <div className="grid gap-9 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-14">
          {body}
          <div className="order-first self-start lg:order-none">{mark}</div>
        </div>
      </article>
    );
  }

  return (
    <article
      ref={ref}
      style={delay}
      {...cardNav}
      data-strand={article.category.strand}
      data-cursor="Read the article"
      className={`${SHELL} h-full p-5 md:p-6`}
    >
      {/* Paired cards carry the mark on top, so two cards of different text
          lengths still line up along the same two edges. */}
      {mark}
      <div className="mt-7 flex flex-1 flex-col">{body}</div>
    </article>
  );
};

export default ArticleCard;
