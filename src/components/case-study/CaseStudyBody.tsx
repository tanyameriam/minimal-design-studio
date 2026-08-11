import type { ReactNode } from 'react';
import type { CaseStudy, ProcessSection as ProcessSectionData } from '@/data/caseStudies';
import { useReveal } from '@/hooks/use-reveal';
import Blocks from './Blocks';

interface CaseStudyBodyProps {
  study: CaseStudy;
  onOpenFigure: (src: string, alt: string) => void;
}

/** A top-level band. Mono eyebrow, rule above, revealed on scroll. */
const Band = ({ label, children }: { label?: string; children: ReactNode }) => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal border-t border-border pt-8 md:pt-10">
      {label && <p className="label text-ink-400 mb-8">{label}</p>}
      {children}
    </section>
  );
};

/** One problem paired with one intervention. Reads as a single sentence. */
const ProcessSection = ({
  section,
  onOpenFigure,
}: {
  section: ProcessSectionData;
  onOpenFigure: (src: string, alt: string) => void;
}) => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal">
      <div className="mb-6 flex gap-4 md:gap-6">
        <span className="label text-ink-400 mt-[0.55em] shrink-0 tabular-nums">
          {section.index}
        </span>
        <h3 className="max-w-2xl text-2xl md:text-[2rem] leading-[1.15]">
          {section.problem} <span className="em-serif">{section.intervention}</span>
        </h3>
      </div>
      <div className="md:pl-[3.25rem]">
        <Blocks blocks={section.blocks} onOpenFigure={onOpenFigure} />
      </div>
    </section>
  );
};

const CaseStudyBody = ({ study, onOpenFigure }: CaseStudyBodyProps) => (
  <div className="mt-16 space-y-14 md:mt-20 md:space-y-20">
    {/* The quick pitch. A reader who stops here still has the whole case. */}
    <Band label="Quick pitch">
      <dl className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
        {(
          [
            ['The problem', study.summary.problems],
            ['The solution', study.summary.solution],
            ['Why this way', study.summary.why],
            [study.summary.resultsLabel, study.summary.results],
          ] as const
        ).map(([term, value]) => (
          <div key={term}>
            <dt className="label text-ink-400 mb-4">{term}</dt>
            <dd className="text-base leading-relaxed text-ink-600">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 text-sm leading-relaxed text-ink-400">
        Short on time? The pitch above is the whole case. The journey below is how it
        actually went.
      </p>
    </Band>

    {/* The full journey. Opens with the question, then the problem and intervention pairs. */}
    <Band label="The full journey">
      <h2 className="max-w-3xl text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
        {study.challenge.question}
      </h2>
      <div className="mt-10">
        <Blocks blocks={study.challenge.blocks} onOpenFigure={onOpenFigure} />
      </div>
    </Band>

    <div className="space-y-14 md:space-y-20">
      {study.process.map((section) => (
        <ProcessSection key={section.index} section={section} onOpenFigure={onOpenFigure} />
      ))}
    </div>

    {study.rejected && (
      <Band label={study.rejected.title}>
        <Blocks
          blocks={[{ kind: 'rejected', items: study.rejected.items }]}
          onOpenFigure={onOpenFigure}
        />
      </Band>
    )}

    {/* Outcomes. Narrative, then the short claims, then the quote. */}
    <Band label={study.outcomes.label}>
      <h2 className="max-w-2xl text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
        {study.outcomes.heading}
      </h2>

      <div className="mt-10">
        <Blocks blocks={study.outcomes.blocks} onOpenFigure={onOpenFigure} />
      </div>

      <ul className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
        {study.outcomes.callouts.map((c) => (
          <li key={c.title}>
            <p className="text-xl leading-[1.2]">
              {c.title}
              {c.emphasis && <span className="em-serif"> {c.emphasis}</span>}
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-600">{c.body}</p>
          </li>
        ))}
      </ul>

      {study.outcomes.quote && (
        <blockquote className="mt-12 max-w-2xl border-l border-foreground pl-6">
          <p className="text-2xl md:text-3xl leading-[1.2]">{study.outcomes.quote.text}</p>
          <cite className="label text-ink-400 mt-4 block not-italic">
            {study.outcomes.quote.source}
          </cite>
        </blockquote>
      )}
    </Band>

    {study.reflection && (
      <Band label={study.reflection.title}>
        <Blocks blocks={study.reflection.blocks} onOpenFigure={onOpenFigure} />
      </Band>
    )}
  </div>
);

export default CaseStudyBody;
