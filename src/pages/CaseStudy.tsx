import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import ReadingProgress from '@/components/ReadingProgress';
import CaseStudyBody from '@/components/case-study/CaseStudyBody';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import ProgressNav from '@/components/case-study/ProgressNav';
import { caseStudies, adjacentCaseStudies, statusLabel } from '@/data/caseStudies';
import { readingMinutes } from '@/data/caseStudies/readingTime';
import { usePageMeta } from '@/hooks/use-page-meta';

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = slug ? caseStudies[slug] : undefined;
  const { prev, next } = study
    ? adjacentCaseStudies(study.slug)
    : { prev: undefined, next: undefined };
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  /** Dense diagrams need natural size, not fit-to-screen. */
  const [zoomed, setZoomed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  usePageMeta(study?.title ?? 'Case study', study?.headline);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!lightbox) {
      setZoomed(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    // Keyboard users land on Close, and return to the figure they came from.
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      opener?.focus();
    };
  }, [lightbox]);

  const openFigure = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);

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
        <article className="overflow-x-clip px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-20">
          <div className="mx-auto max-w-3xl">
            {/* Title block. The headline is an outcome, not a project name. */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="label text-ink-400">{study.title}</span>
              <span className="label text-ink-400">{study.tagline}</span>
              <span className="label text-ink-400 tabular-nums">{study.year}</span>
              <span className="label border border-border px-2 py-1 text-ink-500">
                {statusLabel[study.status]}
              </span>
              <span className="label text-ink-400">{readingMinutes(study)} min read</span>
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
                  <dt className="label text-ink-400 mb-2">{item.label}</dt>
                  <dd className="text-sm leading-snug text-ink-600">{item.value}</dd>
                </div>
              ))}
            </dl>

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
                      <span className="label text-ink-400 mb-2 block">Previous</span>
                      <span className="text-lg rule-link">{prev.title}</span>
                      <span className="mt-2 block text-sm leading-snug text-ink-500 line-clamp-2">
                        {prev.headline}
                      </span>
                    </Link>
                  )}
                </div>
                <span
                  aria-hidden="true"
                  className="label hidden self-center text-ink-400 md:block"
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
                      <span className="label text-ink-400 mb-2 block">Next project</span>
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

      {/* Figure lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[70] overflow-auto bg-background/95"
        >
          <div className="fixed right-6 top-6 z-10 flex items-center gap-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => !z);
              }}
              className="label rule-link text-ink-600"
            >
              {zoomed ? 'Fit to screen' : 'Actual size'}
            </button>
            <button
              ref={closeButtonRef}
              onClick={() => setLightbox(null)}
              className="label rule-link text-ink-600"
            >
              Close
            </button>
          </div>
          <div className="grid min-h-full min-w-full place-items-center p-6">
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => !z);
              }}
              className={
                zoomed
                  ? 'max-w-none cursor-zoom-out'
                  : 'max-h-[85vh] max-w-full cursor-zoom-in object-contain'
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudy;
