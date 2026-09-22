import { useReveal } from '@/hooks/use-reveal';

/**
 * The thirty-second answer, directly under the masthead.
 *
 * This used to be seven panels: three long sentences about sectors and
 * complexity, then four more cards naming the practices. Seven surfaces and
 * about sixty words, all of it between the headline and the first piece of
 * actual evidence, which is exactly the stretch of page a recruiter is
 * least patient with. It was also breaking the rule the rest of the site now
 * runs on - body text does not go in a panel - four times over.
 *
 * What is left is a strip: two lines of fact, ruled rather than boxed, and
 * the practices named once on a single line. Same information, a third of
 * the words, no surfaces, and the top of the first project moves up a screen.
 *
 * Nothing here is a number, so nothing here needs an evidence label. The
 * numbers, with their provenance, are in the projects below.
 */

/** The ground the work has covered. Read as one line each, not as claims. */
const facts = [
  { label: 'Where I have worked', body: 'HR and payroll, healthcare, schools, and everyday apps' },
  { label: 'What I build', body: 'Software for businesses, services with many people involved, and brand-new products' },
  { label: 'What I am good at', body: 'Taking work people do over calls and spreadsheets, and building it into the product' },
];

/**
 * The four things I do. Named and left at that: the names carry it, and the
 * projects underneath are the gloss. AI system design sits here on the
 * strength of EducAItors, where the work was deciding what the model rules
 * on and where a person still has to.
 */
const practice = [
  'Planning how work flows',
  'Systems design',
  'Designing AI tools',
  'Interface and interaction design',
];

const ProofRail = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-label="Where I work, and what I do"
      className="reveal px-gutter pb-stage"
    >
      {/*
        Hairlines, not panels. Three facts of a few words each do not need a
        raised surface to be grouped; a rule above them and a gap between
        them is the whole grouping.
      */}
      <dl className="grid gap-x-10 gap-y-6 border-t border-border pt-6 sm:grid-cols-3">
        {facts.map(({ label, body }) => (
          <div key={label}>
            <dt className="label text-ink-500">{label}</dt>
            <dd className="mt-2.5 max-w-[26ch] text-base leading-[1.45] text-ink-800">{body}</dd>
          </div>
        ))}
      </dl>

      {/* One line. Four cards for four two-word phrases was four times the
          furniture the content asked for. */}
      <p className="mt-8 flex flex-wrap items-baseline gap-x-2.5 gap-y-2 border-t border-border pt-6">
        <span className="label mr-2 text-ink-500">What I do</span>
        {practice.map((label, i) => (
          <span key={label} className="text-base leading-snug text-ink-800">
            {label}
            {i < practice.length - 1 && (
              <span aria-hidden="true" className="ml-2.5 text-ink-400">
                /
              </span>
            )}
          </span>
        ))}
      </p>
    </section>
  );
};

export default ProofRail;
