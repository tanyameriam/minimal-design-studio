import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import type { ArticleSection } from '@/data/writing';

/**
 * Quiet contents list for an essay. Fixed in the left gutter, only at 2xl
 * where the gutter clears the figure breakout, tracking the section in view.
 * The same wayfinding the case studies use, so a reader moving between the
 * two sections of the site is not learning a second convention.
 *
 * Anchors, not scroll hijacking: it moves the page to a heading and nothing
 * else, and honours reduced motion when it does.
 */
const ArticleContents = ({ sections }: { sections: ArticleSection[] }) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const goTo = (event: MouseEvent, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav aria-label="On this page" className="fixed left-8 top-40 hidden w-48 2xl:block">
      <p className="label mb-5 text-ink-500">Contents</p>
      <ol className="space-y-3">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(event) => goTo(event, s.id)}
              aria-current={active === s.id ? 'true' : undefined}
              className={`block text-sm leading-snug transition-colors duration-300 ${
                active === s.id ? 'text-ink-800' : 'text-ink-400 hover:text-ink-600'
              }`}
            >
              {s.nav ?? s.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ArticleContents;
