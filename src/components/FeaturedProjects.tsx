import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import EvidenceLabel from '@/components/EvidenceLabel';
import FadeInImage from '@/components/FadeInImage';
import { RudolfSitting } from '@/components/case-study/layrrrd/Rudolf';
import { Button } from '@/components/ui/button';
import { featuredProjects, type FeaturedProject } from '@/data/projects';
import { prefetchRoute } from '@/lib/prefetch';

/**
 * The three projects the portfolio rests on, as three editorial rows.
 *
 * Everything needed to understand a project is on screen at all times: the
 * name, the outcome, what kind of engagement it was, one number with its
 * provenance, the visual, and both ways in. Nothing is behind a hover, a tap
 * or an expander, so a recruiter can compare three projects by moving their
 * eyes rather than their pointer, and a phone gets exactly what a desktop
 * gets.
 *
 * Progressive disclosure still happens, but between pages rather than inside
 * a row: this is the summary, the two-minute story is the narrative, the case
 * study is the evidence. Hiding half the summary was disclosure at the wrong
 * level.
 *
 * Hover and focus only add feedback. The image lifts and scales a little, the
 * number and the rule take the accent, the arrow moves. None of it changes
 * the row's height or reveals anything, so nothing moves under the pointer
 * and nothing is unavailable without one.
 */

/** Covers that are drawn rather than photographed, registered by slug. */
const drawnMedia: Record<string, ReactNode> = {
  layrrrd: <LayrrrdCover />,
};

/**
 * Layrrrd's cover, drawn rather than exported.
 *
 * The cover is a wordmark, a line and Rudolf, and all three already exist in
 * this repository: the dog is the mascot artwork the case study uses, and the
 * cream is the project's own token island. Composing it rather than exporting
 * a flat image keeps the type sharp at every size and means the one light
 * panel in the section carries the product's real palette, on the product's
 * own paper, rather than a screenshot of one. Rudolf's body is that same
 * cream by design, so on this ground he reads as an ink outline.
 */
function LayrrrdCover() {
  return (
    <div className="paper-layrrrd flex h-full items-center gap-4 bg-background px-6 py-6 text-foreground md:px-8">
      <div className="min-w-0 flex-1">
        <p
          className="font-medium leading-none"
          style={{ fontSize: 'clamp(1.75rem, 3.4vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          LAYRRRD
        </p>
        <p className="mt-4 max-w-[32ch] text-sm leading-snug text-ink-600">
          From a validated pain point to{' '}
          <span className="font-medium text-foreground">15 paying customers, 3 channels</span> deep,
          in <span className="font-medium text-foreground">1 sprint</span>.
        </p>
      </div>

      <RudolfSitting aria-hidden="true" className="h-[70%] w-auto shrink-0 self-end text-foreground" />
    </div>
  );
}

/**
 * The visual. One ratio for all three rows, so they can be compared at a
 * glance, and object-cover rather than a stretch. A project whose export is
 * still owed gets a drawing; a file that fails to load falls back to the
 * drawing too, so a broken asset never leaves an empty frame.
 */
const Media = ({
  project,
  href,
  label,
}: {
  project: FeaturedProject;
  href: string | null;
  /** Where the image goes, said plainly. The link's accessible name. */
  label: string;
}) => {
  const { media } = project.featured;
  const drawn = project.slug ? drawnMedia[project.slug] : undefined;

  const inner = media ? (
    <FadeInImage
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes="(min-width: 1024px) 45vw, 92vw"
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03] ${
        media.position ?? 'object-center'
      }`}
    />
  ) : (
    drawn
  );

  if (!inner) return null;

  const frame =
    'block aspect-[14/9] overflow-hidden rounded-[calc(var(--radius)-0.25rem)] bg-muted shadow-xs transition-transform duration-500 ease-smooth group-hover:-translate-y-1';

  // The visual is a second way into the case study, but it is never the only
  // way: both calls to action sit beside it in text.
  return href ? (
    <Link
      to={href}
      onMouseEnter={() => prefetchRoute(href)}
      onFocus={() => prefetchRoute(href)}
      aria-label={label}
      data-cursor="View project"
      className={frame}
    >
      {inner}
    </Link>
  ) : (
    <div className={frame}>{inner}</div>
  );
};

const Row = ({ project, index }: { project: FeaturedProject; index: number }) => {
  const { title, slug, year, storyHref, storyMinutes, featured, context } = project;
  const { headline, status, evidence } = featured;

  const caseHref = slug ? `/case-study/${slug}` : null;
  const number = String(index + 1).padStart(2, '0');
  const storyLabel = featured.storyLabel ?? `View ${storyMinutes ?? 2}-minute story`;
  const marketPill = context.includes('B2B') ? 'B2B' : context.includes('Consumer') ? 'B2C' : null;
  const disciplinePills = [...new Set([marketPill, ...project.disciplines.slice(0, 2)])].filter(
    (pill): pill is string => Boolean(pill),
  );

  // A project with no slide story promotes its case study to primary rather
  // than rendering a call to action that leads nowhere.
  const primaryHref = storyHref ?? caseHref;
  const primaryLabel = storyHref ? storyLabel : 'Read the case study';
  const secondaryHref = storyHref ? caseHref : null;

  // The visual opens the long-form case study, not the deck. Clicking the
  // image of a project is a request for the project itself, so it lands in
  // the depth; the two-minute story stays the primary button in text, which
  // is where a reader chooses the short version deliberately. A project with
  // no case study falls back to whatever its primary route is.
  const mediaHref = caseHref ?? primaryHref;
  const mediaLabel = caseHref ? 'Read the detailed case study' : primaryLabel;

  return (
    <li>
      {/*
        Two rows in the middle column, with the story bottom-aligned in the
        first and the calls to action top-aligned in the second. The image
        spans both, so whichever is taller sets the row height and the text
        stays centred against the image without a gap opening between the
        sentence and the link under it.
      */}
      <article className="panel panel-hover group grid gap-y-4 p-6 lg:grid-cols-[minmax(0,0.17fr)_minmax(0,0.38fr)_minmax(0,0.45fr)] lg:grid-rows-[auto_auto] lg:gap-x-8 lg:p-8 xl:gap-x-12">
        {/* Left: which project this is, and what kind of engagement. */}
        <div className="row-start-1 flex flex-wrap items-baseline gap-x-4 gap-y-2 lg:col-start-1 lg:row-span-2 lg:flex-col lg:items-start lg:gap-y-2 lg:self-center">
          <span
            className="label tabular-nums text-ink-500 transition-colors duration-300 ease-smooth group-hover:text-link"
            aria-hidden="true"
          >
            {number}
          </span>
          <h3 className="text-2xl leading-tight lg:text-[1.75rem]">{title}</h3>
          <p className="label leading-[1.4] text-ink-500 lg:mt-0">
            <span className="tabular-nums">{year}</span>
          </p>
          <ul className="flex flex-wrap gap-x-2 gap-y-2" aria-label="Project type">
            {disciplinePills.map((pill) => (
              <li
                key={`${title}-${pill}`}
                className="label panel-chip rounded-full px-2.5 py-1.5 text-[0.58rem] leading-none text-ink-500"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>

        {/* Centre: the outcome, the sentence, the number. */}
        <div className="row-start-2 lg:col-start-2 lg:row-start-1 lg:self-end">
          <h4 className="max-w-[24ch] text-[1.75rem] leading-[1.12] lg:text-[2rem]">{headline}</h4>

          <div className="panel-chip mt-5 p-4">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className="em text-xl leading-tight tabular-nums text-ink-800">
                {evidence.figure}
              </p>
              <EvidenceLabel status={evidence.status} detail={evidence.source} />
            </div>
            <p className="mt-2 text-sm leading-snug text-ink-500">{evidence.note}</p>
          </div>
        </div>

        {/* The image sits above the links on a phone, per the reading order. */}
        <div className="row-start-3 lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:self-center">
          <Media project={project} href={mediaHref} label={`${title}: ${mediaLabel}`} />
        </div>

        <div className="row-start-4 flex flex-wrap items-center gap-3 lg:col-start-2 lg:row-start-2 lg:self-start">
          {primaryHref && (
            <Button
              asChild
              className="h-11 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90"
            >
              <Link
                to={primaryHref}
                onMouseEnter={() => prefetchRoute(primaryHref)}
                onFocus={() => prefetchRoute(primaryHref)}
              >
                {primaryLabel}
              </Link>
            </Button>
          )}
          {secondaryHref && (
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-transparent bg-muted px-5 text-sm font-medium text-foreground shadow-none hover:bg-foreground hover:text-background"
            >
              <Link
                to={secondaryHref}
                onMouseEnter={() => prefetchRoute(secondaryHref)}
                onFocus={() => prefetchRoute(secondaryHref)}
              >
                Read detailed case study
              </Link>
            </Button>
          )}
        </div>
      </article>
    </li>
  );
};

const FeaturedProjects = () => {
  if (!featuredProjects.length) return null;

  return (
    <ol className="mt-8 grid gap-4 md:mt-10">
      {featuredProjects.map((project, i) => (
        <Row key={project.title} project={project} index={i} />
      ))}
    </ol>
  );
};

export default FeaturedProjects;
