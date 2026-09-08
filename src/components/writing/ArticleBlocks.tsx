import type { ArticleBlock } from '@/data/writing';
import { useReveal } from '@/hooks/use-reveal';
import ArticleFigure from './ArticleFigure';

/**
 * The essay body. One renderer for the handful of structures the writing
 * actually uses: paragraphs, a sub-heading, two kinds of list, a pull quote,
 * and a figure. No card, no panel, no tinted callout. The brief for this
 * section is that it reads, so the only variables are measure, rhythm, and
 * the one place per section where the eye is allowed to stop.
 */

const Paragraph = ({ text }: { text: string }) => (
  <p className="mt-6 text-lg leading-[1.65] text-ink-800 first:mt-0">{text}</p>
);

const List = ({ block }: { block: Extract<ArticleBlock, { kind: 'list' }> }) => {
  const items = block.items.map((item, i) => (
    <li key={item.text} className="relative pl-7 text-lg leading-[1.65] text-ink-800">
      {block.ordered ? (
        <span className="label absolute left-0 top-[0.45em] tabular-nums text-ink-500">
          {String(i + 1).padStart(2, '0')}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="absolute left-1 top-[0.72em] h-px w-3 bg-[hsl(var(--ink-400))]"
        />
      )}
      {item.lead && <span className="em text-foreground">{item.lead}: </span>}
      {item.text}
    </li>
  ));

  return block.ordered ? (
    <ol className="mt-7 space-y-4">{items}</ol>
  ) : (
    <ul className="mt-7 space-y-4">{items}</ul>
  );
};

/** The line the section turns on. Set large, ruled, never a repeat of a heading. */
const PullQuote = ({ text }: { text: string }) => {
  const ref = useReveal<HTMLQuoteElement>();

  return (
    <blockquote
      ref={ref}
      className="reveal my-10 border-l border-[hsl(var(--strand))] pl-6 md:my-14 md:pl-8"
    >
      <p className="max-w-[26ch] text-2xl leading-[1.25] md:text-3xl">{text}</p>
    </blockquote>
  );
};

interface ArticleBlocksProps {
  blocks: ArticleBlock[];
  onOpenFigure: (src: string, alt: string) => void;
}

const ArticleBlocks = ({ blocks, onOpenFigure }: ArticleBlocksProps) => (
  <>
    {blocks.map((block, i) => {
      switch (block.kind) {
        case 'p':
          return <Paragraph key={i} text={block.text} />;
        case 'h3':
          return (
            <h3 key={i} className="mt-12 text-xl leading-[1.25] text-foreground md:text-2xl">
              {block.text}
            </h3>
          );
        case 'list':
          return <List key={i} block={block} />;
        case 'quote':
          return <PullQuote key={i} text={block.text} />;
        case 'figure':
          return <ArticleFigure key={i} figure={block.figure} wide onOpen={onOpenFigure} />;
      }
    })}
  </>
);

export default ArticleBlocks;
