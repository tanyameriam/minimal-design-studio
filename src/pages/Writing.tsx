import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import ArticleCard from '@/components/writing/ArticleCard';
import { articleList } from '@/data/writing';
import { useReveal } from '@/hooks/use-reveal';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * The writing index.
 *
 * One lead essay and two beside it, on the same grid the home page uses for
 * projects but with none of its furniture: no metrics, no covers, no status
 * chips. What a reader is choosing between here is an idea and twenty
 * minutes, so the cards say the idea and the minutes.
 */
const Writing = () => {
  const introRef = useReveal<HTMLDivElement>();
  const noteRef = useReveal<HTMLParagraphElement>();
  const [featured, ...rest] = articleList;

  usePageMeta(
    'Writing',
    'Essays from design practice on human-centred AI, interaction design, and visual systems.',
  );

  return (
    <>
      <Navigation />

      <div className="page-ground">
        <main id="main" className="shell min-h-screen overflow-x-clip pb-section">
          {/* Set like the home masthead: the same ground, the same headline
              cut, the accent full stop, one sentence under it. */}
          <header className="hero-field relative px-gutter pb-break pt-masthead">
            <div ref={introRef} className="reveal">
              <p className="label-strong">Writing</p>
              <h1
                className="mt-6 max-w-[19ch] font-medium leading-[0.98]"
                style={{
                  fontSize: 'clamp(2.25rem, 3.3vw + 0.7rem, 4rem)',
                  letterSpacing: '-0.035em',
                }}
              >
                Articles on designing things people can trust
                <span aria-hidden="true" className="text-accent">
                  .
                </span>
              </h1>
              <p className="mt-5 max-w-[46ch] text-xl leading-[1.45] text-ink-600">
                I wrote these while studying for my master’s, about things I built, tested,
                rethought, and sometimes broke. They are not rules for everyone. They are what I
                learned about AI, interaction and visual design from my own projects.
              </p>
            </div>
          </header>

          <div className="px-gutter">
            <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-7">
              <ArticleCard article={featured} index={0} featured />
              {rest.map((article, i) => (
                <ArticleCard key={article.slug} article={article} index={i + 1} />
              ))}
            </div>

            <p
              ref={noteRef}
              className="reveal mt-16 max-w-xl text-base leading-relaxed text-ink-500"
            >
              I will add more articles over time.
            </p>
          </div>
        </main>

        <Contact />
      </div>
    </>
  );
};

export default Writing;
