import { useEffect, useMemo, useState } from 'react';
import type { MouseEvent } from 'react';
import type { Section } from '@/data/caseStudies';

/**
 * Labels come from the sections themselves, so every study's nav reads as
 * its own story. `nav` overrides for a shorter line where the heading runs
 * long.
 */
const navLabel = (section: Section): string => {
  if (section.nav) return section.nav;
  switch (section.kind) {
    case 'step':
      return `${section.index}  ${section.problem}`;
    case 'custom':
      return section.label ?? section.heading ?? '';
    default:
      return section.label;
  }
};

/**
 * Optional wayfinding for long case studies. Fixed in the left gutter, only
 * at 2xl where the gutter clears the block-wide breakout, tracking the
 * section in view.
 */
const ProgressNav = ({ sections }: { sections: Section[] }) => {
  const [active, setActive] = useState<string | null>(null);

  const entries = useMemo(
    () => sections.map((s) => ({ id: s.id, label: navLabel(s) })).filter((e) => e.label),
    [sections]
  );

  useEffect(() => {
    const els = entries
      .map((e) => document.getElementById(e.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (observed) => {
        for (const entry of observed) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A band around the upper-middle of the viewport decides "current".
      { rootMargin: '-35% 0px -55% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [entries]);

  const goTo = (event: MouseEvent, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  if (entries.length < 3) return null;

  return (
    <nav aria-label="On this page" className="fixed left-8 top-40 hidden w-48 2xl:block">
      <ol className="space-y-3">
        {entries.map((e) => (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              onClick={(event) => goTo(event, e.id)}
              aria-current={active === e.id ? 'true' : undefined}
              className={`label block truncate transition-colors duration-300 ${
                active === e.id ? 'text-ink-600' : 'text-ink-400 hover:text-ink-600'
              }`}
            >
              {e.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressNav;
