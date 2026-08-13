import type { Block, BlockWidth } from '@/data/caseStudies';
import BeforeAfter from './BeforeAfter';
import Figure from './Figure';

const widthClass = (width?: BlockWidth) =>
  width === 'wide' ? 'block-wide' : width === 'full' ? 'block-full' : '';

interface BlocksProps {
  blocks: Block[];
  onOpenFigure: (src: string, alt: string) => void;
  /**
   * Step sections indent their body under the numbered heading. Wide and
   * full media escape the indent so the breakout math stays centered on
   * the reading column.
   */
  indent?: boolean;
}

const breaksOut = (block: Block): boolean =>
  (block.kind === 'figures' || block.kind === 'beforeAfter') &&
  (block.width === 'wide' || block.width === 'full');

const BlockRenderer = ({
  block,
  onOpenFigure,
}: {
  block: Block;
  onOpenFigure: (src: string, alt: string) => void;
}) => {
  switch (block.kind) {
    case 'prose':
      return (
        <div className="max-w-2xl space-y-5">
          {block.body.map((p) => (
            <p key={p.slice(0, 40)} className="text-lg leading-[1.55] text-ink-600">
              {p}
            </p>
          ))}
        </div>
      );

    case 'quote':
      return (
        <blockquote className="max-w-2xl border-l border-foreground pl-6">
          <p className="text-2xl md:text-3xl leading-[1.2]">{block.text}</p>
          {block.source && (
            <cite className="label text-ink-400 mt-4 block not-italic">{block.source}</cite>
          )}
        </blockquote>
      );

    case 'points':
      return (
        <ul className="max-w-2xl border-t border-border">
          {block.items.map((item) => (
            <li key={item.title} className="border-b border-border py-5">
              <p className="text-base">{item.title}</p>
              {item.body && (
                <p className="mt-2 text-base leading-relaxed text-ink-600">{item.body}</p>
              )}
            </li>
          ))}
        </ul>
      );

    case 'tradeoffs':
      return (
        <div className="max-w-2xl space-y-6">
          {block.items.map((t) => (
            <div key={t.title} className="border-t border-border pt-5">
              <p className="text-base">{t.title}</p>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="label text-ink-400 mb-2">What it cost</dt>
                  <dd className="text-base leading-relaxed text-ink-600">{t.cost}</dd>
                </div>
                <div>
                  <dt className="label text-ink-400 mb-2">What it bought</dt>
                  <dd className="text-base leading-relaxed text-ink-600">{t.gain}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      );

    case 'rejected':
      return (
        <ul className="max-w-2xl border-t border-border">
          {block.items.map((item) => (
            <li key={item.option} className="border-b border-border py-5">
              <p className="flex items-start gap-3 text-base">
                <span className="label text-ink-400 mt-[0.4em] shrink-0">Not</span>
                <span>{item.option}</span>
              </p>
              <p className="mt-2 pl-[3.25rem] text-base leading-relaxed text-ink-600">{item.why}</p>
            </li>
          ))}
        </ul>
      );

    case 'intended':
      return (
        <div className="max-w-2xl border-t border-border">
          <div className="hidden gap-8 border-b border-border pb-3 sm:grid sm:grid-cols-2">
            <p className="label text-ink-400">Intended outcome</p>
            <p className="label text-ink-400">Metric I would instrument</p>
          </div>
          {block.items.map((row) => (
            <div
              key={row.outcome}
              className="grid gap-1 border-b border-border py-4 sm:grid-cols-2 sm:gap-8"
            >
              <p className="text-base leading-snug">{row.outcome}</p>
              <p className="text-sm leading-snug text-ink-500">{row.metric}</p>
            </div>
          ))}
        </div>
      );

    case 'figures': {
      const layout =
        block.items.length > 1 ? 'grid gap-6 sm:grid-cols-2' : block.width ? '' : 'max-w-2xl';
      return (
        <div className={`${layout} ${widthClass(block.width)}`.trim()}>
          {block.items.map((f) => (
            <Figure key={f.src} {...f} onOpen={onOpenFigure} />
          ))}
        </div>
      );
    }

    case 'beforeAfter':
      return (
        <BeforeAfter
          before={block.before}
          after={block.after}
          beforeLabel={block.beforeLabel}
          afterLabel={block.afterLabel}
          caption={block.caption}
          width={block.width}
          onOpen={onOpenFigure}
        />
      );

    case 'note':
      return (
        <div className="max-w-2xl border-l border-border pl-6">
          <p className="label text-ink-400 mb-3">{block.label}</p>
          <p className="text-base leading-relaxed text-ink-600">{block.body}</p>
        </div>
      );

    case 'todo':
      return (
        <div className="max-w-2xl border border-dashed border-[hsl(var(--accent))] bg-[hsl(var(--accent)/0.08)] p-5">
          <p className="label mb-3 text-ink-600">To write</p>
          <p className="text-base leading-relaxed text-ink-600">{block.body}</p>
        </div>
      );

    default:
      return null;
  }
};

const Blocks = ({ blocks, onOpenFigure, indent }: BlocksProps) => (
  <div className="space-y-8">
    {blocks.map((block, i) => (
      <div key={i} className={indent && !breaksOut(block) ? 'md:pl-[3.25rem]' : undefined}>
        <BlockRenderer block={block} onOpenFigure={onOpenFigure} />
      </div>
    ))}
  </div>
);

export default Blocks;
