import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle2, Sparkles } from 'lucide-react';

/*
 * The board kit born in BrynQ's chapter 04: column labels, icon rows,
 * check-listed cards and the dashed gather into a single result pill.
 * These slides are diagrams built from cards rather than prose, so the
 * long case study and the story deck share one small vocabulary.
 */

/** Mono column heading with a hairline running to the edge of its column. */
export const ColumnLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-4">
    <p className="label shrink-0 text-ink-500">{children}</p>
    <span aria-hidden="true" className="h-px min-w-8 flex-1 bg-border" />
  </div>
);

/** One rounded row: a circled icon and a single statement. */
export const IconRowCard = ({
  Icon,
  tall = false,
  children,
}: {
  Icon: LucideIcon;
  /** The taller variant lets a two-line statement breathe. */
  tall?: boolean;
  children: ReactNode;
}) => (
  <div className={`panel flex items-center gap-5 ${tall ? 'p-6 md:p-7' : 'px-5 py-4 md:px-6 md:py-5'}`}>
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted"
    >
      <Icon className="h-5 w-5" strokeWidth={1.5} />
    </span>
    <p className={tall ? 'text-lg leading-snug md:text-xl' : 'text-base leading-snug md:text-lg'}>
      {children}
    </p>
  </div>
);

/** Checked list rows separated by hairlines, inside a board card. */
export const CheckList = ({ items }: { items: string[] }) => (
  <ul className="mt-6 divide-y divide-border/70">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-center gap-3.5 py-3.5 text-sm leading-snug text-ink-600 md:text-base"
      >
        <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-ink-400" strokeWidth={1.5} />
        {item}
      </li>
    ))}
  </ul>
);

/** Board card for the template model: who provides what. */
export const ProvideCard = ({
  label,
  title,
  points,
}: {
  label: string;
  title: string;
  points: string[];
}) => (
  <div className="panel flex flex-col p-6 md:p-8">
    <p className="label text-ink-500">{label}</p>
    <span aria-hidden="true" className="mt-4 h-px w-full bg-border" />
    <p className="mt-5 text-xl leading-snug md:text-2xl">{title}</p>
    <CheckList items={points} />
  </div>
);

/** Board card for one step of the template flow, numbered on mobile. */
export const StepCard = ({
  n,
  Icon,
  title,
  points,
}: {
  n: string;
  Icon: LucideIcon;
  title: string;
  points: string[];
}) => (
  <div className="panel flex flex-col p-6 md:p-8">
    <div className="flex items-start justify-between gap-4">
      <span aria-hidden="true" className="panel-chip flex h-12 w-12 items-center justify-center">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      {/* The desktop rail above the cards carries the numbering; on one
          column the number rides the card itself. */}
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent font-mono text-sm tabular-nums text-accent md:hidden">
        {n}
      </span>
    </div>
    <p className="mt-6 text-xl leading-snug md:text-2xl">{title}</p>
    <span aria-hidden="true" className="mt-4 h-px w-full bg-border" />
    <CheckList items={points} />
  </div>
);

/** The 1 - 2 - 3 thread above the step cards. Desktop only. */
export const StepRail = () => (
  <div aria-hidden="true" className="relative mb-5 hidden md:grid md:grid-cols-3 md:gap-3">
    <span className="absolute left-[16.65%] right-[16.65%] top-1/2 -translate-y-1/2 border-t border-dashed border-ink-400/70" />
    {['1', '2', '3'].map((n) => (
      <span
        key={n}
        className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-background font-mono text-sm tabular-nums text-accent"
      >
        {n}
      </span>
    ))}
  </div>
);

/**
 * Three columns gathering into one outcome: dashed drops, a dashed cross
 * line, and the result pill. The gather is decoration, so it hides on
 * mobile and the pill simply follows the stacked cards.
 */
export const ConvergeFoot = ({ children }: { children: ReactNode }) => (
  <div>
    <div aria-hidden="true" className="hidden md:block">
      <div className="grid grid-cols-3">
        {[0, 1, 2].map((i) => (
          <span key={i} className="mx-auto flex flex-col items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-400" />
            <span className="h-7 w-0 border-l border-dashed border-ink-400/70" />
          </span>
        ))}
      </div>
      <div className="mx-[16.65%] border-t border-dashed border-ink-400/70" />
      <span className="mx-auto block h-7 w-0 border-l border-dashed border-ink-400/70" />
    </div>
    <div className="mt-6 flex justify-center md:mt-0">
      <span className="panel inline-flex items-center gap-4 rounded-full py-3 pl-4 pr-7 md:py-3.5 md:pl-5 md:pr-8">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background"
        >
          <Sparkles className="h-4 w-4" strokeWidth={1.5} />
        </span>
        <span className="text-lg md:text-xl">{children}</span>
      </span>
    </div>
  </div>
);
