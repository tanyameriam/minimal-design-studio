import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Metric, Project } from '@/data/projects';
import EvidenceLabel, { DisciplinePills } from '@/components/EvidenceLabel';
import FadeInImage from '@/components/FadeInImage';
import PhotoStack from '@/components/PhotoStack';
import { PluginComposition } from '@/components/case-study/curateus/PluginComposition';
import { prefetchRoute } from '@/lib/prefetch';
import { useReveal } from '@/hooks/use-reveal';

/**
 * Covers that are drawn rather than photographed.
 *
 * Curateus has no exported screens in the repo yet, and a card with a blank
 * where every other card has a visual reads as an oversight. The plugin
 * drawing is the project's identity anyway, so the card shows that instead
 * of waiting on a screenshot. Registered by slug here rather than carried in
 * the data, so src/data stays free of JSX.
 */
const drawnCovers: Record<string, ReactNode> = {
  curateus: <PluginComposition caption={false} />,
};

/** The card shell. One border, one surface, one hover state, everywhere. */
const SHELL =
  'reveal group/card flex flex-col rounded-2xl border border-border bg-card transition-[border-color,transform] duration-500 ease-smooth hover:-translate-y-0.5 hover:border-ink-400';

interface MetricRowProps {
  metrics: Metric[];
  /** The lead card gets room for a larger figure than the paired ones. */
  featured?: boolean;
}

/**
 * The numbers as a scan line: figure, caption, and the kind of claim it is.
 * A project whose figures are not cleared yet renders nothing, not an empty
 * rule. The evidence label is what keeps an estimate from being read as a
 * measured result.
 */
const MetricRow = ({ metrics, featured }: MetricRowProps) => {
  if (!metrics.length) return null;

  return (
    <ul
      className={`flex flex-wrap border-t border-border ${
        featured ? 'mt-8 gap-x-14 gap-y-7 pt-8' : 'mt-6 gap-x-10 gap-y-5 pt-6'
      }`}
    >
      {metrics.map((metric, i) => (
        <li key={metric.note} className="max-w-[26ch]">
          <p
            className={`em tabular-nums leading-[1.05] text-ink-800 ${
              featured ? 'text-3xl' : 'text-2xl'
            }`}
          >
            {metric.figure}
          </p>
          <p
            className={`leading-snug text-ink-500 ${featured ? 'mt-2 text-base' : 'mt-1.5 text-sm'}`}
          >
            {metric.note}
          </p>
          {/* Only where it says something new. Three adjacent numbers all
              stamped OBSERVED is noise, not provenance. */}
          {metric.status !== metrics[i - 1]?.status && (
            <div className="mt-3">
              <EvidenceLabel status={metric.status} detail={metric.source} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

interface HeaderProps {
  title: string;
  qualifier?: string;
  year: string;
  context?: string;
}

/** Name, honesty qualifier, year, and the setting. The same line on every card. */
const CardHeader = ({ title, qualifier, year, context }: HeaderProps) => (
  <div>
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <p className="label text-ink-800">{title}</p>
      {qualifier && <span className="label text-ink-500">({qualifier})</span>}
      <span className="label ml-auto tabular-nums text-ink-500">{year}</span>
    </div>
    {context && <p className="mt-3 text-sm leading-snug text-ink-500">{context}</p>}
  </div>
);

interface LinksProps {
  caseHref: string | null;
  storyHref?: string;
  storyMinutes?: number;
  /** Paired cards sit closer to their edge, so the links run smaller. */
  featured?: boolean;
}

/**
 * The two ways in, in the order most people want them: the fast visual story
 * first, the long-form case study second. A project without a deck promotes
 * its case study to primary rather than showing a dead hierarchy.
 */
const CardLinks = ({ caseHref, storyHref, storyMinutes, featured }: LinksProps) => (
  <div
    className={`flex flex-wrap gap-x-8 gap-y-2 ${
      featured ? 'mt-8 text-xl' : 'mt-auto pt-7 text-lg'
    }`}
  >
    {storyHref && (
      <Link
        to={storyHref}
        onMouseEnter={() => prefetchRoute(storyHref)}
        onFocus={() => prefetchRoute(storyHref)}
        className="rule-link"
      >
        View the {storyMinutes ?? 2}-minute story <span aria-hidden="true">&rarr;</span>
      </Link>
    )}
    {caseHref && (
      <Link
        to={caseHref}
        onMouseEnter={() => prefetchRoute(caseHref)}
        onFocus={() => prefetchRoute(caseHref)}
        className={storyHref ? 'rule-link text-ink-600' : 'rule-link'}
      >
        Read the detailed case study <span aria-hidden="true">&rarr;</span>
      </Link>
    )}
  </div>
);

interface ProjectCardProps {
  project: Project;
  index: number;
  /**
   * The lead project runs the full width with its visual beside the text.
   * Everything after it pairs up, visual on top.
   */
  featured?: boolean;
}

/**
 * A project as a card. The lead card is a wide two-column spread; the rest
 * pair off as image-topped cards. Both carry enough to pre-read the project
 * before opening anything: what kind of work it was, the outcome sentence,
 * the numbers with their provenance, and the two ways in.
 */
const ProjectCard = ({ project, index, featured }: ProjectCardProps) => {
  const ref = useReveal<HTMLElement>();
  const {
    slug,
    title,
    qualifier,
    year,
    context,
    role,
    disciplines,
    headline,
    decision,
    metrics,
    cover,
    stack,
    storyHref,
    storyMinutes,
  } = project;
  const caseHref = slug ? `/case-study/${slug}` : null;
  const delay = { transitionDelay: `${Math.min(index, 4) * 70}ms` };

  const drawn = slug ? drawnCovers[slug] : undefined;
  /** The Layrrrd cover is still owed, so its card shows the deck panel instead. */
  const deckPanel = !cover && !drawn && storyHref;

  const headlineLink = (className: string) =>
    caseHref ? (
      <Link
        to={caseHref}
        onMouseEnter={() => prefetchRoute(caseHref)}
        onFocus={() => prefetchRoute(caseHref)}
        className="group/head block"
      >
        <h3 className={className}>
          {headline}{' '}
          <span
            aria-hidden="true"
            className="inline-block text-ink-400 transition-transform duration-500 ease-smooth group-hover/head:translate-x-1"
          >
            &rarr;
          </span>
        </h3>
      </Link>
    ) : (
      <h3 className={className}>{headline}</h3>
    );

  /** What I personally owned, stated on the card so nobody has to guess. */
  const roleLine = role && (
    <p className="mt-6 border-t border-border pt-5 text-sm leading-snug text-ink-500">
      <span className="label mr-2.5 text-ink-500">Role</span>
      {role}
    </p>
  );

  /** A drawn cover, framed exactly like a photographic one. */
  const drawnCoverBody = drawn && caseHref && (
    <Link
      to={caseHref}
      onMouseEnter={() => prefetchRoute(caseHref)}
      onFocus={() => prefetchRoute(caseHref)}
      aria-label={`${title} case study`}
      data-cursor="View project"
      className="block overflow-hidden rounded-xl border border-border bg-background p-4 md:p-5"
    >
      {/* Same 4:3 as every image cover. The drawing runs on past the crop,
          which is what a web page does anyway. */}
      <div className="aspect-[4/3] overflow-hidden">{drawn}</div>
    </Link>
  );

  /** The deck panel doubles as a cover for a project whose cover is owed. */
  const deckPanelBody = storyHref && (
    <Link
      to={storyHref}
      onMouseEnter={() => prefetchRoute(storyHref)}
      onFocus={() => prefetchRoute(storyHref)}
      data-cursor="View the story"
      className="flex aspect-[4/3] flex-col justify-between rounded-xl border border-border bg-background p-6 md:p-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="label text-ink-500">The story in slides</span>
        <span className="label tabular-nums text-ink-500">16</span>
      </div>
      <p className="max-w-md text-2xl leading-[1.15] md:text-3xl">
        First commit to paying customers in <span className="em">nine days.</span>
      </p>
      <div className="flex items-baseline justify-between gap-4">
        <span className="label text-ink-500">15 paying &middot; 126 freemium</span>
        <span className="rule-link text-base">
          View <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );

  if (featured) {
    return (
      <article ref={ref} style={delay} className={`${SHELL} p-6 md:col-span-2 md:p-9 lg:p-11`}>
        <div className="grid gap-9 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-14">
          {/* Left rail: name, outcome sentence, numbers, the way in. */}
          <div className="flex flex-col">
            <CardHeader title={title} qualifier={qualifier} year={year} context={context} />
            <DisciplinePills disciplines={disciplines} className="mt-5" />
            {headlineLink('mt-5 max-w-3xl text-3xl leading-[1.12] md:text-4xl')}
            {/* The judgment chain: we chose X, because Y, result Z. */}
            <p className="mt-6 max-w-2xl text-lg leading-[1.55] text-ink-600 md:text-xl">
              {decision}
            </p>
            {roleLine}
            <MetricRow metrics={metrics ?? []} featured />
            <CardLinks
              caseHref={caseHref}
              storyHref={storyHref}
              storyMinutes={storyMinutes}
              featured
            />
          </div>

          {/* Right column: the case study as a stack of pages on the grid. */}
          {cover && caseHref && (
            <PhotoStack stack={stack}>
              <Link
                to={caseHref}
                onMouseEnter={() => prefetchRoute(caseHref)}
                onFocus={() => prefetchRoute(caseHref)}
                aria-label={`${title} case study`}
                data-cursor="View project"
                className="block"
              >
                <FadeInImage
                  src={cover}
                  alt={`${title} case study cover`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-2xl border border-border bg-background object-cover"
                />
              </Link>
            </PhotoStack>
          )}
          {deckPanel && <div className="self-start">{deckPanelBody}</div>}
          {drawnCoverBody && <div className="self-start">{drawnCoverBody}</div>}
        </div>
      </article>
    );
  }

  return (
    <article ref={ref} style={delay} className={`${SHELL} h-full p-5 md:p-6`}>
      {/* The visual sits inside the card, one radius step tighter than the shell. */}
      {cover && caseHref && (
        <Link
          to={caseHref}
          onMouseEnter={() => prefetchRoute(caseHref)}
          onFocus={() => prefetchRoute(caseHref)}
          aria-label={`${title} case study`}
          data-cursor="View project"
          className="block overflow-hidden rounded-xl border border-border bg-background"
        >
          <FadeInImage
            src={cover}
            alt={`${title} case study cover`}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-smooth group-hover/card:scale-[1.02]"
          />
        </Link>
      )}
      {deckPanel && deckPanelBody}
      {drawnCoverBody}

      <div className="mt-7 flex flex-1 flex-col">
        <CardHeader title={title} qualifier={qualifier} year={year} context={context} />
        <DisciplinePills disciplines={disciplines} className="mt-4" />
        {headlineLink('mt-4 text-2xl leading-[1.15] md:text-[1.75rem]')}
        <p className="mt-4 text-base leading-[1.55] text-ink-600">{decision}</p>
        {roleLine}
        <MetricRow metrics={metrics ?? []} />
        <CardLinks caseHref={caseHref} storyHref={storyHref} storyMinutes={storyMinutes} />
      </div>
    </article>
  );
};

export default ProjectCard;
