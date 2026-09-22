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
 * the practices named once, as a fourth column of the same row. Same information, a third of
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
  {
    label: 'What I do',
    body: 'Planning how work flows, systems design, designing AI tools, interface and interaction design',
  },
];

/**
 * The four things I do. Named and left at that: the names carry it, and the
 * projects underneath are the gloss. AI system design sits here on the
 * strength of EducAItors, where the work was deciding what the model rules
 * on and where a person still has to.
 */
const ProofRail = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-label="Where I work, and what I do"
      className="reveal px-gutter pb-break"
    >
      {/*
        Hairlines, not panels. Three facts of a few words each do not need a
        raised surface to be grouped; a rule above them and a gap between
        them is the whole grouping.
      */}
      <dl className="grid gap-x-10 gap-y-5 border-t border-border pt-5 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(({ label, body }) => (
          <div key={label}>
            <dt className="label text-ink-500">{label}</dt>
            <dd className="mt-2 max-w-[36ch] text-base leading-[1.45] text-ink-800">{body}</dd>
          </div>
        ))}
      </dl>

    </section>
  );
};

export default ProofRail;
