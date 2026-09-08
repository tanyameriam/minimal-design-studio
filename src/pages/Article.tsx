import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import ReadingProgress from '@/components/ReadingProgress';
import Lightbox from '@/components/case-study/Lightbox';
import ArticleBlocks from '@/components/writing/ArticleBlocks';
import ArticleContents from '@/components/writing/ArticleContents';
import ArticleFigure from '@/components/writing/ArticleFigure';
import { adjacentArticles, articles, readingMinutes } from '@/data/writing';
import { useLightbox } from '@/hooks/use-lightbox';
import { useReveal } from '@/hooks/use-reveal';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * One essay.
 *
 * The reading column is max-w-2xl, which lands between 62 and 72 characters
 * at this type scale, and figures break out of it at lg where there is room.
 * Everything else is the portfolio's own furniture: the site nav, the
 * hairline reading bar, the shared lightbox, the site footer. The section
 * earns its separateness through what it says, not through a second visual
 * identity.
 */

/** Section headings carry the id the contents list and the URL hash use. */
const Section = ({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) => {
  const ref = useReveal<HTMLElement>();

  return (
    /* The hairline is what separates a section heading from a sub-heading
       inside one. Same device the case studies use for their bands. */
    <section
      ref={ref}
      id={id}
      className="reveal mt-16 scroll-mt-28 border-t border-border pt-8 md:mt-20 md:pt-10"
    >
      <h2 className="max-w-[24ch] text-2xl leading-[1.15] md:text-[2rem]">{heading}</h2>
      <div className="mt-7">{children}</div>
    </section>
  );
};

const Article = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = slug ? articles[slug] : undefined;
  const { prev, next } = article
    ? adjacentArticles(article.slug)
    : { prev: undefined, next: undefined };
  const { figure: lightbox, open: openFigure, close: closeFigure } = useLightbox();

  usePageMeta(article?.meta.title ?? 'Writing', article?.meta.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Same arrow-key flip as the case studies, for anyone reading straight through.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (e.key === 'ArrowLeft' && prev) navigate(`/writing/${prev.slug}`);
      if (e.key === 'ArrowRight' && next) navigate(`/writing/${next.slug}`);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, prev, next, navigate]);

  if (!article) {
    return (
      <>
        <Navigation />
        <main id="main" className="min-h-screen bg-background px-6 pt-40">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl">That article does not exist.</h1>
            <Link to="/writing" className="rule-link mt-6 inline-block text-base">
              Back to writing
            </Link>
          </div>
        </main>
      </>
    );
  }

  const minutes = readingMinutes(article);

  return (
    <>
      <Navigation />
      <ReadingProgress />

      <main id="main" className="min-h-screen bg-background" data-strand={article.category.strand}>
        <ArticleContents sections={article.sections} />

        {/* overflow-x-clip absorbs the block-wide figure breakout. */}
        <article className="overflow-x-clip px-5 pb-20 pt-32 md:px-8 md:pt-40 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <Link to="/writing" className="rule-link label text-ink-500">
              <span aria-hidden="true">&larr;</span> Writing
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[hsl(var(--strand))]" />
              <span className="label text-ink-500">{article.category.label}</span>
              <span className="label text-ink-500">{minutes} min read</span>
            </div>

            <h1 className="mt-6 text-4xl leading-[1.08] md:text-5xl">{article.title}</h1>
            <p className="mt-6 max-w-xl text-xl leading-[1.4] text-ink-600">{article.subtitle}</p>
            <p className="label mt-6 text-ink-500">{article.origin}</p>

            <ArticleFigure figure={article.lead} wide onOpen={openFigure} />

            <div>
              {article.intro.map((text) => (
                <p key={text} className="mt-6 text-lg leading-[1.65] text-ink-800 first:mt-0">
                  {text}
                </p>
              ))}
            </div>

            {article.sections.map((section) => (
              <Section key={section.id} id={section.id} heading={section.heading}>
                <ArticleBlocks blocks={section.blocks} onOpenFigure={openFigure} />
              </Section>
            ))}

            {/* Provenance. What the work actually was, and where it can be seen. */}
            <aside className="mt-20 border-t border-border pt-8">
              <p className="label-strong">From the studio</p>
              <p className="mt-5 text-base leading-relaxed text-ink-600">{article.studio.body}</p>
              {article.studio.links && (
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                  {article.studio.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rule-link text-base text-ink-600"
                    >
                      {link.label}
                      <span aria-hidden="true" className="ml-1 text-ink-400">
                        &#8599;
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </aside>

            <nav
              aria-label="More writing"
              className="mt-16 grid gap-8 border-t border-border pt-8 sm:grid-cols-2"
            >
              {prev ? (
                <Link to={`/writing/${prev.slug}`} className="group block">
                  <span className="label text-ink-500">Previous</span>
                  <span className="rule-link mt-3 block text-lg leading-snug">{prev.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link to={`/writing/${next.slug}`} className="group block sm:text-right">
                  <span className="label text-ink-500">Next</span>
                  <span className="rule-link mt-3 block text-lg leading-snug">{next.title}</span>
                </Link>
              )}
            </nav>
          </div>
        </article>
      </main>

      <Contact />

      <Lightbox figure={lightbox} onClose={closeFigure} />
    </>
  );
};

export default Article;
