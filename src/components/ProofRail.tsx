import { useReveal } from '@/hooks/use-reveal';

/**
 * What I do, directly under the masthead, as a row of chips.
 *
 * This used to be a strip: three lines of fact about sectors and products,
 * ruled rather than boxed, and the practices named on one line under them.
 * The facts went; the practices stay, as chips centred under the hero, so
 * the four names read at a glance and the first project moves up again.
 * Set as tags, not buttons: no fill, a hairline, the small label type and
 * muted ink, so nothing about them suggests they can be pressed.
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
            className="label rounded-full border border-border px-3 py-1.5 text-ink-500"
          >
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProofRail;
