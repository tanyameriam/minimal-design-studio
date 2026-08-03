import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import CaseStudyBody from '@/components/case-study/CaseStudyBody';
import { caseStudies, adjacentCaseStudies, statusLabel } from '@/data/caseStudies';
import { usePageMeta } from '@/hooks/use-page-meta';

const CaseStudy = () => {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  /** Dense diagrams need natural size, not fit-to-screen. */
  const [zoomed, setZoomed] = useState(false);

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
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const openFigure = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);

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

  const { prev, next } = adjacentCaseStudies(study.slug);

  return (
    <>
      <Navigation />

      <main id="main" className="min-h-screen bg-background">
        <article className="px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-20">
          <div className="mx-auto max-w-3xl">
            {/* Title block. The headline is an outcome, not a project name. */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="label text-ink-400">{study.title}</span>
              <span className="label text-ink-400">{study.tagline}</span>
              <span className="label text-ink-400 tabular-nums">{study.year}</span>
              <span className="label border border-border px-2 py-1 text-ink-500">
                {statusLabel[study.status]}
              </span>
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

            <CaseStudyBody study={study} onOpenFigure={openFigure} />

            {/* Prev / next */}
            {(prev || next) && (
              <nav
                aria-label="Other projects"
                className="mt-16 flex justify-between gap-6 border-t border-border pt-8"
              >
                <div>
                  {prev && (
                    <Link to={`/case-study/${prev.slug}`} className="group block">
                      <span className="label text-ink-400 mb-2 block">Previous</span>
                      <span className="text-lg rule-link">{prev.title}</span>
                    </Link>
                  )}
                </div>
                <div className="text-right">
                  {next && (
                    <Link to={`/case-study/${next.slug}`} className="group block">
                      <span className="label text-ink-400 mb-2 block">Next project</span>
                      <span className="text-lg rule-link">{next.title}</span>
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
            <button onClick={() => setLightbox(null)} className="label rule-link text-ink-600">
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
