import { useReveal } from '@/hooks/use-reveal';

/**
 * What I do, directly under the masthead, as a row of chips.
 *
 * This used to be a strip: three lines of fact about sectors and products,
 * ruled rather than boxed, and the practices named on one line under them.
 * The facts went; the practices stay, as chips centred under the hero, so
 * the four names read at a glance and the first project moves up again.
 *
 * AI system design sits here on the strength of EducAItors, where the work
 * was deciding what the model rules on and where a person still has to.
 */
const practice = ['Workflow design', 'Systems design', 'AI system design', 'Interaction design'];

const ProofRail = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} aria-label="What I do" className="reveal px-gutter pb-break">
      <ul className="flex flex-wrap justify-center gap-2">
        {practice.map((label) => (
          <li
            key={label}
            className="panel-chip rounded-full px-4 py-1.5 text-sm leading-snug text-ink-800 md:text-base"
          >
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProofRail;
