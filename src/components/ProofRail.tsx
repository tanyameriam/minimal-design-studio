import { useReveal } from '@/hooks/use-reveal';

/**
 * The thirty-second answer, directly under the masthead.
 *
 * Two rows. The first answers what someone hiring asks first: has she worked
 * in my sector, has she handled products as tangled as mine, and what is she
 * going to want to spend her time on. The second names the four practices, in
 * one line each, and used to be a third column in the hero itself; it reads
 * better as the second half of this block than as a competing list one screen
 * higher.
 *
 * This replaced a rail of four outcome claims, which read as a highlights
 * reel and repeated numbers the project rows below already carry with their
 * provenance attached. Nothing here is a number, so nothing here needs an
 * evidence label.
 *
 * The sectors are the real ones, drawn from the projects in src/data: HR and
 * payroll (BrynQ), healthcare (Merry Health), education (EducAItors),
 * consumer content (Layrrrd, Curateus).
 *
 * Static on purpose. It reveals once on entry and then never moves again.
 */

/** Row one: the ground the work has covered. Set at statement size. */
const ground = [
  {
    label: 'Industries',
    body: 'HR and payroll, healthcare, education, and consumer products.',
  },
  {
    label: 'Product complexity',
    body: 'B2B platforms, multi-stakeholder services, and zero to one.',
  },
  {
    label: 'The part I like',
    body: 'Turning work that lives in calls and spreadsheets into something the product carries.',
  },
];

/**
 * Row two: the four things I actually do, named and left at that. The names
 * carry it on their own, so no gloss underneath. AI system design sits here on
 * the strength of EducAItors, where the work was deciding what the model rules
 * on and where a person still has to.
 */
const practice = [
  'Workflow design',
  'Systems design',
  'AI system design',
  'Interaction design',
];

const ProofRail = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-label="Where I work, and what I do"
      className="reveal px-5 pb-20 md:px-8 md:pb-24 lg:px-12"
    >
      {/*
        Panels in a gapped grid rather than cells divided by hairlines.
        Rounded surfaces need no rules between them: the gap does the work the
        border used to.
      */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {ground.map(({ label, body }) => (
          <li key={label} className="panel p-6 md:p-7">
            <p className="label text-ink-500">{label}</p>
            <p className="mt-3 max-w-[30ch] text-xl leading-snug tracking-tight text-ink-800">
              {body}
            </p>
          </li>
        ))}
      </ul>

      {/*
        Row two is its own grid: four items do not sit on three columns. It
        keeps the same panel language a step down in size, with a plain
        eyebrow so the row reads as a list of practices and not a second set
        of claims. No chips here, since four narrower cards need the width.
      */}
      <p className="label mt-4 text-ink-500">What I do</p>
      <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {practice.map((label) => (
          <li key={label} className="panel p-6 md:p-7">
            <p className="text-lg leading-tight text-ink-800">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProofRail;
