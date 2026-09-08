import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import ReadingProgress from '@/components/ReadingProgress';
import CaseStudyBody from '@/components/case-study/CaseStudyBody';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import ProgressNav from '@/components/case-study/ProgressNav';
import Lightbox from '@/components/case-study/Lightbox';
import { useLightbox } from '@/hooks/use-lightbox';
import { caseStudies, adjacentCaseStudies, statusLabel } from '@/data/caseStudies';
import { readingMinutes } from '@/data/caseStudies/readingTime';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * `slug` is normally the route param. It is passed explicitly for studies
 * that have a bespoke page on their canonical URL and keep the data-driven
 * long-form version at a second address (see BrynQ).
 */
const CaseStudy = ({ slug: slugProp }: { slug?: string } = {}) => {
  const { slug: slugParam } = useParams();
  const slug = slugProp ?? slugParam;
  const navigate = useNavigate();
  const study = slug ? caseStudies[slug] : undefined;
  const { prev, next } = study
    ? adjacentCaseStudies(study.slug)
    : { prev: undefined, next: undefined };
  const { figure: lightbox, open: openFigure, close: closeFigure } = useLightbox();

  usePageMeta(study?.title ?? 'Case study', study?.headline);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Reviewers flipping through studies can use the arrow keys.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      if (e.key === 'ArrowLeft' && prev) navigate(`/case-study/${prev.slug}`);
      if (e.key === 'ArrowRight' && next) navigate(`/case-study/${next.slug}`);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, prev, next, navigate]);

  if (!study) {
    return (
      <>
        <Navigation />
        <main id="main" className="min-h-screen bg-background px-6 pt-40">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl">That case study does not exist.</h1>
            <Link to="/" className="rule-link mt-6 inline-block text-sm">
              Back to work
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <ReadingProgress />

      <main id="main" className="min-h-screen bg-background">
        <ProgressNav sections={study.sections} />

        {/* overflow-x-clip absorbs the block-wide / block-full breakouts. */}
        <article className="overflow-x-clip px-5 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20">
          <div className="mx-auto max-w-3xl">
            {/* Title block. The headline is an outcome, not a project name. */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="label text-ink-500">{study.title}</span>
              <span className="label text-ink-500">{study.tagline}</span>
              <span className="label text-ink-500 tabular-nums">{study.year}</span>
              <span className="label border border-border px-2 py-1 text-ink-500">
                {statusLabel[study.status]}
              </span>
              <span className="label text-ink-500">{readingMinutes(study)} min read</span>
            </div>

            <h1 className="mt-8 text-[2.25rem] leading-[1.05] md:text-[3.25rem]">
              {study.headline}
            </h1>

            <div className="mt-10 max-w-2xl space-y-5">
              {study.intro.map((p) => (
                <p key={p.slice(0, 40)} className="text-lg leading-[1.55] text-ink-600">
                  {p}
                </p>
              ))}
            </div>

            {/* Metadata band */}
            <dl className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-2 md:grid-cols-3">
              {study.meta.map((item) => (
                <div key={item.label}>
                  <dt className="label text-ink-500 mb-2">{item.label}</dt>
                  <dd className="text-sm leading-snug text-ink-600">{item.value}</dd>
                </div>
              ))}
            </dl>

            {/* Slide-deck companion, where one exists. */}
            {study.story && (
              <Link
                to={study.story.href}
                className="group mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border border-foreground px-5 py-4"
              >
                <span className="text-base">
                  Short on time? <span className="em">Watch this case as slides.</span>
                </span>
                <span className="label text-ink-500">{study.story.note} &rarr;</span>
              </Link>
            )}

            {study.cover && (
              <CaseStudyHero src={study.cover} alt={study.coverAlt ?? `${study.title} cover`} />
            )}

            <CaseStudyBody study={study} onOpenFigure={openFigure} />

            {/* Prev / next. Headlines create a reason to keep reading. */}
            {(prev || next) && (
              <nav
                aria-label="Other projects"
                className="mt-16 flex justify-between gap-8 border-t border-border pt-8"
              >
                <div className="max-w-[45%]">
                  {prev && (
                    <Link
                      to={`/case-study/${prev.slug}`}
                      aria-keyshortcuts="ArrowLeft"
                      className="group block"
                    >
                      <span className="label text-ink-500 mb-2 block">Previous</span>
                      <span className="text-lg rule-link">{prev.title}</span>
                      <span className="mt-2 block text-sm leading-snug text-ink-500 line-clamp-2">
                        {prev.headline}
                      </span>
                    </Link>
                  )}
                </div>
                <span
                  aria-hidden="true"
                  className="label hidden self-center text-ink-500 md:block"
                  title="Navigate with the arrow keys"
                >
                  &larr; &rarr;
                </span>
                <div className="max-w-[45%] text-right">
                  {next && (
                    <Link
                      to={`/case-study/${next.slug}`}
                      aria-keyshortcuts="ArrowRight"
                      className="group block"
                    >
                      <span className="label text-ink-500 mb-2 block">Next project</span>
                      <span className="text-lg rule-link">{next.title}</span>
                      <span className="mt-2 block text-sm leading-snug text-ink-500 line-clamp-2">
                        {next.headline}
                      </span>
                    </Link>
                  )}
                </div>
              </nav>
            )}
          </div>
        </article>
      </main>

      <Contact />

      <Lightbox figure={lightbox} onClose={closeFigure} />
    </>
  );
};

export default CaseStudy;
