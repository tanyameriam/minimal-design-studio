import type { Discipline, EvidenceStatus } from '@/data/projects';

/**
 * How a number was arrived at, said out loud.
 *
 * The portfolio mixes things that were measured, things a stakeholder said,
 * and arithmetic built on an operating model. A reader who cannot tell those
 * apart has to either trust everything or trust nothing, and the honest
 * version is more persuasive than the flattering one anyway.
 *
 * Two weights on purpose. A solid rule means something happened; a dashed
 * rule means it is a model, a target, or a thing that never shipped. That
 * distinction reads before the words do.
 */
const copy: Record<EvidenceStatus, { short: string; long: string; firm: boolean }> = {
  observed: {
    short: 'Observed',
    long: 'Measured directly',
    firm: true,
  },
  'stakeholder-reported': {
    short: 'Stakeholder reported',
    long: 'Reported by someone on the project, not instrumented',
    firm: true,
  },
  validated: {
    short: 'Validated',
    long: 'Confirmed by real customer behaviour',
    firm: true,
  },
  deployed: {
    short: 'Deployed',
    long: 'Live in production',
    firm: true,
  },
  estimated: {
    short: 'Estimated from the delivery model',
    long: 'Arithmetic on an operating model, not a production result',
    firm: false,
  },
  proposed: {
    short: 'Proposed system',
    long: 'Designed and specified, never rolled out',
    firm: false,
  },
  target: {
    short: 'Target',
    long: 'What the design was aiming at',
    firm: false,
  },
  'not-deployed': {
    short: 'Development-ready, not deployed',
    long: 'Built to a handover standard, never piloted',
    firm: false,
  },
};

interface EvidenceLabelProps {
  status: EvidenceStatus;
  /** Extra provenance read out to screen readers and shown on hover. */
  detail?: string;
}

/**
 * The label itself. Small, monospaced, and quiet: it qualifies a number
 * without competing with it.
 */
const EvidenceLabel = ({ status, detail }: EvidenceLabelProps) => {
  const { short, long, firm } = copy[status];

  return (
    <span
      title={detail ? `${long}. ${detail}` : long}
      className={`label inline-block px-2 py-1 leading-none ${
        firm ? 'border border-border text-ink-500' : 'border border-dashed border-border text-ink-500'
      }`}
    >
      {/* Screen readers get the sentence, not the shorthand. */}
      <span className="sr-only">Evidence: {long}. </span>
      <span aria-hidden="true">{short}</span>
    </span>
  );
};

export default EvidenceLabel;

/**
 * What kind of work a project was. Not a tag cloud: two to four terms from a
 * closed vocabulary, so a reader scanning for "service design" or "0 to 1"
 * can find the right three projects without opening anything.
 */
export const DisciplinePills = ({
  disciplines,
  className = '',
}: {
  disciplines: Discipline[];
  className?: string;
}) => {
  if (!disciplines.length) return null;

  return (
    <ul className={`flex flex-wrap gap-x-2 gap-y-2 ${className}`} aria-label="Type of work">
      {disciplines.map((discipline) => (
        <li
          key={discipline}
          className="label rounded-full border border-border px-2.5 py-1 leading-none text-ink-500"
        >
          {discipline}
        </li>
      ))}
    </ul>
  );
};
