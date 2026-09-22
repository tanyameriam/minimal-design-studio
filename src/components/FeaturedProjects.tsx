import { Link } from 'react-router-dom';
import EvidenceLabel from '@/components/EvidenceLabel';
import FadeInImage from '@/components/FadeInImage';
import { Button } from '@/components/ui/button';
import { featuredProjects, type FeaturedProject } from '@/data/projects';
import { prefetchRoute } from '@/lib/prefetch';

/**
 * The three projects the portfolio rests on, as cards placed the way the
 * writing index places its essays: one lead across the full width, two
 * paired beneath it.
 *
 * Everything needed to understand a project is on screen at all times: the
 * name, the outcome, one number with its provenance, the visual, and the way
 * in. Nothing is behind a hover, a tap or an expander, so a recruiter can
 * compare three projects by moving their eyes rather than their pointer, and
 * a phone gets exactly what a desktop gets.
 *
 * Progressive disclosure still happens, but between pages rather than inside
 * a row: this is the summary, the two-minute story is the narrative, the case
 * study is the evidence. Hiding half the summary was disclosure at the wrong
 * level.
 *
 * ---------------------------------------------------------------------
 * WHAT CAME OUT, AND WHY
 *
 * The row had grown to nine things competing for the same glance: an index
 * number, a title, a year, up to three discipline pills, an outcome heading,
 * a sentence under it, a number in a panel of its own with a status label and
 * a note, an image, and two buttons. Read three times down the page that is
 * twenty-seven things, which is the "my attention was everywhere" report
 * almost exactly.
 *
 * Three cuts, on the rule that a view gets one loudest thing:
 *
 *   - The pills went. They repeat the disciplines listed on /work and on
 *     every project's own page, and a pill is a very loud way to say a thing
 *     that is already said twice.
 *   - The description went. With headings like "Self-service B2B
 *     integrations" sitting above "Redesigning how customers set up and
 *     manage integrations", the row was saying one idea twice in two type
 *     sizes. The heading and the number carry it.
 *   - The evidence lost its panel and its second button became a link. A
 *     number does not need a surface to register, and two filled buttons on
 *     one row is two next steps, which is none.
 *
 * What is left reads in one pass: which project, what it was, what happened,
 * what it looked like, where to go.
 *
 * Hover and focus only add feedback. The image lifts and scales a little, the
 * number takes the accent, the arrow moves. None of it changes the row's
 * height or reveals anything, so nothing moves under the pointer and nothing
 * is unavailable without one.
 */

/**
 * The visual. One ratio for all three cards, so they can be compared at a
 * glance, and a cover crop rather than a stretch.
 *
 * A composed cover asks for `fit: 'contain'` instead, because it was laid
 * out against its own full width and a crop would eat the edges of it. That
 * image also brings its own ground, which the frame paints so the letterbox
 * reads as the image's margin rather than as a grey band around it.
 *
 * A project with no image at all renders no frame, rather than an empty one.
 */
const Media = ({ project, sizes }: { project: FeaturedProject; sizes: string }) => {
  const { media } = project.featured;

  if (!media) return null;

  // Not a link of its own: the whole card is the target, so the image is
  // simply part of what gets clicked.
  return (
    <div
      className="block aspect-[14/9] overflow-hidden rounded-[calc(var(--radius)-0.25rem)] bg-muted shadow-xs transition-transform duration-500 ease-smooth group-hover:-translate-y-1"
      style={media.background ? { backgroundColor: media.background } : undefined}
    >
      <FadeInImage
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={sizes}
        loading="lazy"
        decoding="async"
        className={`h-full w-full transition-transform duration-700 ease-smooth group-hover:scale-[1.03] ${
          media.fit === 'contain' ? 'object-contain' : 'object-cover'
        } ${media.position ?? 'object-center'}`}
      />
    </div>
  );
};

const Card = ({
  project,
  index,
  featured,
}: {
  project: FeaturedProject;
  index: number;
  /** The lead project runs wide, its visual beside the text rather than above it. */
  featured?: boolean;
}) => {
  const { title, slug, year, storyHref, storyMinutes, featured: entry } = project;
  const { headline, evidence } = entry;

  const caseHref = slug ? `/case-study/${slug}` : null;
  const number = String(index + 1).padStart(2, '0');
  const storyLabel = entry.storyLabel ?? `View ${storyMinutes ?? 2}-minute story`;

  // A project with no slide story promotes its case study to primary rather
  // than rendering a call to action that leads nowhere.
  const primaryHref = storyHref ?? caseHref;
  const primaryLabel = storyHref ? storyLabel : 'View detailed study';
  const secondaryHref = storyHref ? caseHref : null;

  const media = (
    <Media
      project={project}
      sizes={featured ? '(min-width: 1024px) 50vw, 92vw' : '(min-width: 768px) 45vw, 92vw'}
    />
  );

  return (
    <li className={featured ? 'md:col-span-2' : undefined}>
      <article
        data-cursor={primaryHref ? primaryLabel : undefined}
        className={`panel panel-hover group relative h-full p-6 md:p-8 ${
          featured
            ? 'grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12'
            : 'flex flex-col'
        }`}
      >
        {/* Paired cards carry the visual on top, so two cards of different
            text lengths still line up along the same two edges. */}
        {!featured && <div className="mb-7">{media}</div>}

        {/* The lead card centres its text beside the image instead of
            stretching it to the image's height, which opened a hole above
            the buttons. */}
        <div className={featured ? 'flex flex-col' : 'flex h-full flex-col'}>
          {/* Which project this is, and when. */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span
              className="label tabular-nums text-ink-500 transition-colors duration-300 ease-smooth group-hover:text-link"
              aria-hidden="true"
            >
              {number}
            </span>
            <h3 className="text-xl leading-tight">{title}</h3>
            <span className="label ml-auto tabular-nums leading-[1.4] text-ink-500">{year}</span>
          </div>

          {/*
            The heading names the problem space in three or four words, so the
            cards can be scanned as a list; the number argues the outcome.
          */}
          <h4
            className={`mt-5 max-w-[24ch] leading-[1.12] ${
              featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-[1.75rem]'
            }`}
          >
            {headline}
          </h4>

          {/* The one number, led by a rule instead of sitting in a panel. */}
          <div className="mt-6 border-l border-ink-400/40 pl-4">
            <p className="em text-2xl leading-none tabular-nums text-foreground transition-colors duration-500 ease-smooth group-hover:text-link">
              {evidence.figure}
            </p>
            <p className="mt-2.5 max-w-[36ch] text-base leading-snug text-ink-600">
              {evidence.note}
            </p>
            <div className="mt-2.5">
              <EvidenceLabel status={evidence.status} detail={evidence.source} />
            </div>
          </div>

          {/* Pinned to the bottom, so paired cards end on the same line. */}
          <div
            className={`flex flex-wrap items-center gap-3 ${featured ? 'mt-8' : 'mt-auto pt-7'}`}
          >
            {primaryHref && (
              <Button
                asChild
                className="h-11 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90"
              >
                {/* Stretched over the whole card, so clicking anywhere on it opens
                    the two-minute story. One real link, not a wrapper around
                    another. */}
                <Link
                  to={primaryHref}
                  onMouseEnter={() => prefetchRoute(primaryHref)}
                  onFocus={() => prefetchRoute(primaryHref)}
                  className="after:absolute after:inset-0 after:rounded-[inherit] after:content-['']"
                >
                  {primaryLabel}
                </Link>
              </Button>
            )}
            {/* The second way in is a link, not a second button. Two filled
                buttons on a card are two next steps, which is none. */}
            {secondaryHref && (
              <Link
                to={secondaryHref}
                onMouseEnter={() => prefetchRoute(secondaryHref)}
                onFocus={() => prefetchRoute(secondaryHref)}
                className="rule-link relative z-10 text-base text-ink-500 transition-colors hover:text-foreground"
              >
                View detailed study
              </Link>
            )}
          </div>
        </div>

        {/* The lead's visual sits above the text on a phone, beside it on a desktop. */}
        {featured && <div className="order-first lg:order-none">{media}</div>}
      </article>
    </li>
  );
};

const FeaturedProjects = () => {
  if (!featuredProjects.length) return null;

  // Laid out like the writing index: one lead card across the full width,
  // the rest paired beneath it.
  return (
    <ol className="mt-8 grid items-stretch gap-6 md:mt-10 md:grid-cols-2 md:gap-7">
      {featuredProjects.map((project, i) => (
        <Card key={project.title} project={project} index={i} featured={i === 0} />
      ))}
    </ol>
  );
};

export default FeaturedProjects;
