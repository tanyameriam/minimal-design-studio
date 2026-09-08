import type { ReactNode } from 'react';
import { useState } from 'react';
import type { CaseStudy, Section } from '@/data/caseStudies';
import { useReveal } from '@/hooks/use-reveal';
import Blocks from './Blocks';

type OpenFigure = (src: string, alt: string) => void;

interface CaseStudyBodyProps {
  study: CaseStudy;
  onOpenFigure: OpenFigure;
}

/** A top-level band. Mono eyebrow, rule above, revealed on scroll. */
const Band = ({ id, label, children }: { id: string; label?: string; children: ReactNode }) => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id={id} className="reveal scroll-mt-28 border-t border-border pt-8 md:pt-10">
      {label && <p className="label text-ink-500 mb-8">{label}</p>}
      {children}
    </section>
  );
};

/** The quick pitch. A reader who stops here still has the whole case. */
const PitchSection = ({ section }: { section: Extract<Section, { kind: 'pitch' }> }) => (
  <Band id={section.id} label={section.label}>
    <dl className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
      {(
        [
          ['The problem', section.summary.problems],
          ['The solution', section.summary.solution],
          ['Why this way', section.summary.why],
          [section.summary.resultsLabel, section.summary.results],
        ] as const
      ).map(([term, value]) => (
        <div key={term}>
          <dt className="label text-ink-500 mb-4">{term}</dt>
          <dd className="text-base leading-relaxed text-ink-600">{value}</dd>
        </div>
      ))}
    </dl>
    {section.footnote && (
      <p className="mt-10 text-sm leading-relaxed text-ink-400">{section.footnote}</p>
    )}
  </Band>
);

/** One problem paired with one intervention. Reads as a single sentence. */
const StepSection = ({
  section,
  onOpenFigure,
}: {
  section: Extract<Section, { kind: 'step' }>;
  onOpenFigure: OpenFigure;
}) => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id={section.id} className="reveal scroll-mt-28">
      <div className="mb-6 flex gap-4 md:gap-6">
        <span className="label text-ink-500 mt-[0.55em] shrink-0 tabular-nums">
          {section.index}
        </span>
        <h3 className="max-w-2xl text-2xl md:text-[2rem] leading-[1.15]">
          {section.problem} <span className="em">{section.intervention}</span>
        </h3>
      </div>
      <Blocks blocks={section.blocks} onOpenFigure={onOpenFigure} indent />
    </section>
  );
};

const OutcomesSection = ({
  section,
  onOpenFigure,
}: {
  section: Extract<Section, { kind: 'outcomes' }>;
  onOpenFigure: OpenFigure;
}) => (
  <Band id={section.id} label={section.label}>
    <h2 className="max-w-2xl text-[1.75rem] md:text-[2.5rem] leading-[1.1]">{section.heading}</h2>

    <div className="mt-10">
      <Blocks blocks={section.blocks} onOpenFigure={onOpenFigure} />
    </div>

    <ul
      className={`mt-12 grid gap-8 border-t border-border pt-8 ${
        section.callouts.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
      }`}
    >
      {section.callouts.map((c) => (
        <li key={c.title}>
          <p className="text-xl leading-[1.2]">
            {c.title}
            {c.emphasis && <span className="em"> {c.emphasis}</span>}
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-600">{c.body}</p>
        </li>
      ))}
    </ul>

    {section.quote && (
      <blockquote className="mt-12 max-w-2xl border-l border-foreground pl-6">
        <p className="text-2xl md:text-3xl leading-[1.2]">{section.quote.text}</p>
        <cite className="label text-ink-500 mt-4 block not-italic">{section.quote.source}</cite>
      </blockquote>
    )}
  </Band>
);

/** Deep-dive material, collapsed behind its teaser until asked for. */
const AppendixSection = ({
  section,
  onOpenFigure,
}: {
  section: Extract<Section, { kind: 'appendix' }>;
  onOpenFigure: OpenFigure;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Band id={section.id} label={section.label}>
      {open ? (
        <>
          <Blocks blocks={section.blocks} onOpenFigure={onOpenFigure} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-expanded={true}
            className="label rule-link mt-8 text-ink-500"
          >
            Hide
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          className="group flex w-full items-center justify-between gap-6 border border-border bg-card px-5 py-4 text-left transition-colors hover:bg-muted"
        >
          <span className="text-base leading-snug">{section.teaser}</span>
          <span className="label shrink-0 text-ink-500">
            Open
            <span
              aria-hidden="true"
              className="ml-2 inline-block transition-transform duration-500 ease-smooth group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </span>
        </button>
      )}
    </Band>
  );
};

const SectionRenderer = ({
  section,
  onOpenFigure,
}: {
  section: Section;
  onOpenFigure: OpenFigure;
}) => {
  switch (section.kind) {
    case 'pitch':
      return <PitchSection section={section} />;

    case 'journey':
      return (
        <Band id={section.id} label={section.label}>
          <h2 className="max-w-3xl text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
            {section.question}
          </h2>
          <div className="mt-10">
            <Blocks blocks={section.blocks} onOpenFigure={onOpenFigure} />
          </div>
        </Band>
      );

    case 'step':
      return <StepSection section={section} onOpenFigure={onOpenFigure} />;

    case 'decision':
      return (
        <Band id={section.id} label={section.label}>
          <Blocks
            blocks={[{ kind: 'rejected', items: section.items }]}
            onOpenFigure={onOpenFigure}
          />
        </Band>
      );

    case 'outcomes':
      return <OutcomesSection section={section} onOpenFigure={onOpenFigure} />;

    case 'reflection':
      return (
        <Band id={section.id} label={section.label}>
          <Blocks blocks={section.blocks} onOpenFigure={onOpenFigure} />
        </Band>
      );

    case 'appendix':
      return <AppendixSection section={section} onOpenFigure={onOpenFigure} />;

    case 'custom':
      return (
        <Band id={section.id} label={section.label}>
          {section.heading && (
            <h2 className="max-w-2xl text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
              {section.heading}
            </h2>
          )}
          <div className={section.heading ? 'mt-10' : undefined}>
            <Blocks blocks={section.blocks} onOpenFigure={onOpenFigure} />
          </div>
        </Band>
      );
  }
};

/**
 * The body is whatever the study's sections say it is. Which sections
 * appear, and in what order, lives in the data, not here.
 */
const CaseStudyBody = ({ study, onOpenFigure }: CaseStudyBodyProps) => (
  <div className="mt-16 space-y-14 md:mt-20 md:space-y-20">
    {study.sections.map((section) => (
      <SectionRenderer key={section.id} section={section} onOpenFigure={onOpenFigure} />
    ))}
  </div>
);

export default CaseStudyBody;
