import { publishableProject } from './drafts';
import brynqCover from '@/assets/brynq-cover.png';
import brynqTemplateFlow from '@/assets/brynq-template-flow.png';
import brynqWizardFlow from '@/assets/brynq-wizard-flow.png';
import brynqCurrent from '@/assets/brynq/brynq-current.png';
import merryHifiDashboard from '@/assets/merry-hifi-dashboard.png';
import merryHifiTracking from '@/assets/merry-hifi-tracking.png';
import merryWhatsappPatient from '@/assets/merry-whatsapp-patient.png';
import streeCover from '@/assets/stree-cover.png';
import streeHifi6 from '@/assets/stree-hifi-6.png';
import streeHifi8 from '@/assets/stree-hifi-8.png';
import hungerProjectCover from '@/assets/hunger-project-cover.png';
import educaitorsGrading from '@/assets/educaitors-grading.jpg';
import educaitorsHome from '@/assets/educaitors-home.jpg';
import educaitorsCalibration from '@/assets/educaitors-calibration.jpg';
import foodWasteCover from '@/assets/food-waste-cover.png';
import foodWasteAccount from '@/assets/food-waste-rest-wireframe-account.png';

export type ProjectStatus = 'shipped' | 'live' | 'concept' | 'self-initiated';

/**
 * How much weight a project carries on the home page. Flagship projects get
 * a full card with visual, numbers and both ways in. Selected projects get a
 * compact row: they prove range, not depth.
 */
export type ProjectTier = 'flagship' | 'selected';

/**
 * What kind of work a project actually was, so a reader can pick the ones
 * that match what they are hiring for without opening anything.
 *
 * Deliberately a closed vocabulary rather than free text: five projects
 * inventing five near-synonyms for "systems work" would stop being scannable,
 * which is the only reason the pills exist.
 */
export type Discipline =
  | 'Systems design'
  | 'Service design'
  | 'Product strategy'
  | 'B2B platform'
  | 'Zero to one'
  | 'AI product'
  | 'Design systems'
  | 'UX research'
  | 'Interaction design'
  | 'Workflow design'
  | 'Multi-stakeholder';

/**
 * What kind of claim a number is. The portfolio mixes things that were
 * measured, things a stakeholder said, and arithmetic built on an operating
 * model, and those must never be read as the same kind of evidence.
 */
export type EvidenceStatus =
  | 'observed'
  | 'stakeholder-reported'
  | 'estimated'
  | 'proposed'
  | 'target'
  | 'deployed'
  | 'validated'
  | 'not-deployed';

/** One quick-glance number, with the provenance that makes it readable. */
export interface Metric {
  /** The value the eye lands on. Short: a number, a range, or a verdict. */
  figure: string;
  /** What that value counts, in a few words. */
  note: string;
  /** How the number was arrived at. Drives the evidence label. */
  status: EvidenceStatus;
  /** Where it came from: an instrument, a person, a model. */
  source?: string;
  /** When it was true. */
  timeframe?: string;
  /** The arithmetic or the caveat, for anyone who wants to check it. */
  explanation?: string;
}

/**
 * A project's home-page entry, and only that.
 *
 * The home page reads in about thirty seconds, so this carries a hard copy
 * budget: an outcome headline of at most two lines, a description of roughly
 * twenty-five to thirty words, one status line, and exactly one piece of
 * evidence. All of it is always on screen. Anything that would need a second
 * evidence point belongs in the two-minute story, and anything that would
 * need a third belongs in the case study.
 *
 * It lives here rather than in the component so the home page, the cards on
 * /work, the stories and the case studies all trace back to one record per
 * project and cannot drift apart.
 */
export interface FeaturedEntry {
  /** The outcome, said plainly. Two lines at most. */
  headline: string;
  /** Roughly 25 to 30 words. Not the case study's opening paragraph. */
  description: string;
  /** What kind of engagement this was, and where it stands. One line. */
  status: string;
  /**
   * Overrides the primary call to action where "View 2-minute story" is the
   * wrong name for what the story is. A project with no storyHref never uses
   * this: its case study becomes the primary link instead, so the row
   * cannot render a call to action that leads nowhere.
   */
  storyLabel?: string;
  /**
   * One point. Reuses Metric so the provenance travels with the number: an
   * estimate and a measured result must never render identically. One,
   * because three rows of numbers each with their own status label turn the
   * section into a dashboard and bury the outcome they are supposed to
   * support.
   */
  evidence: Metric;
  /**
   * The real visual. Projects whose screens are still owed, or under NDA in
   * a form that cannot be shown, omit this and the row falls back to a
   * drawing rather than to an invented product screen.
   */
  media?: FeaturedMedia;
}

export interface FeaturedMedia {
  src: string;
  /** Required. Describes what is in the image, not the project. */
  alt: string;
  /** Intrinsic size, so the slot reserves its box and nothing shifts. */
  width: number;
  height: number;
  /** Tailwind object-position, for images the 16:9 crop would behead. */
  position?: string;
}

export interface Project {
  /** Route slug. Null means no case study page yet. */
  slug: string | null;
  title: string;
  /** Parenthetical after the title. Kept honest: concept work says so. */
  qualifier?: string;
  year: string;
  status: ProjectStatus;
  /** Home-page weight. See ProjectTier. */
  tier: ProjectTier;
  /** The kinds of work this project actually was. Two to four. */
  disciplines: Discipline[];
  /**
   * Everything I actually did on this project, as the case-study page's
   * "How did I help them" pills. Open text rather than the closed Discipline
   * vocabulary: that list exists to keep the home-page pills scannable across
   * projects, whereas this one is allowed to be long and specific, because on
   * a case-study page the reader is already looking at one project.
   *
   * Falls back to `disciplines` where a project has not supplied its own, so
   * every case study renders a sensible set from day one.
   */
  contributions?: string[];
  /** The setting, in a few words. "B2B integration platform", say. */
  context: string;
  /** What I personally owned. First person, specific. */
  role: string;
  /**
   * The band's display title. The outcome achieved, verb first, with a
   * number where one is cleared. The app name stays in the small label.
   */
  headline: string;
  /**
   * The judgment line under the headline. Reads as one chain:
   * we chose X, because Y, result Z.
   */
  decision: string;
  /**
   * One line for the compact Selected work row, where the full decision
   * paragraph would be too much. Falls back to `decision` when absent.
   */
  oneLine?: string;
  /**
   * Quick-glance metrics. `figure` is the number the eye lands on, `note` is
   * what it counts, `status` is what kind of claim it is. Numbers only: a
   * project without cleared figures omits the row rather than padding it
   * with qualitative cells.
   */
  metrics?: Metric[];
  /** Large visual on the home band. The same cover the case study opens with. */
  cover?: string;
  /**
   * Two further images from the same case study, fanned out behind the cover
   * so the band reads as a stack of pages rather than one slide. Only their
   * edges show, so pick small files.
   */
  stack?: string[];
  /** Slide-deck companion route, where one exists. */
  storyHref?: string;
  /** Roughly how long the slide story takes. Shown on the primary CTA. */
  storyMinutes?: number;
  /**
   * The home-page entry. Presence is what makes a project one of the three
   * featured rows, and the order of `projectList` is the order they appear
   * in. Projects without one drop to the compact index below them.
   */
  featured?: FeaturedEntry;
  published: boolean;
}

const projectList: Project[] = [
  {
    slug: 'brynq',
    title: 'BrynQ',
    year: '2023 - 26',
    status: 'shipped',
    tier: 'flagship',
    disciplines: ['Systems design', 'Service design', 'B2B platform'],
    context: 'B2B HR and payroll integration platform',
    role: 'Product designer, one workstream of an ongoing role',
    headline: 'From developer-led integrations to a scalable self-service product',
    decision:
      'Integration projects were slipping weeks before anyone wrote a line of code, and the requirements were being rebuilt from scratch in calls and spreadsheets every time. I reframed the ask from simplifying a technical interface to productising repeated implementation knowledge, and moved known mappings, transformations and validation into the product as reusable templates.',
    oneLine:
      'Reframed a UI request into productising implementation knowledge, as reusable integration templates.',
    storyHref: '/case-study/brynq/story',
    storyMinutes: 2,
    // The three surfaces used to disagree: 92% and 13x are the arithmetic of
    // 26 weeks down to 2, not down to 1. Everything now states the two-week
    // model, and states that it is a model.
    metrics: [
      {
        figure: '~6 mo → ~2 wk',
        note: 'implementation cycle for a standard integration',
        status: 'estimated',
        source: 'Template-led delivery model',
        explanation:
          'Historical standard implementations ran to roughly six months. The template-led model puts the same category of integration at roughly two weeks. Not yet a measured production result.',
      },
      {
        figure: '2× easier',
        note: 'setup, reported after templates were introduced',
        status: 'stakeholder-reported',
        source: 'BrynQ project manager',
      },
    ],
    featured: {
      headline: 'From six months to weeks.',
      description:
        'Reusable templates moved repeated integration knowledge from spreadsheets and individual developers into the product.',
      status: 'B2B integration platform · Ongoing',
      evidence: {
        figure: '~6 mo → ~2 wk',
        note: 'Potential implementation cycle',
        status: 'estimated',
        source: 'Template-led delivery model',
      },
      // The shipped product, now that the screens have cleared. It earns the
      // slot over the requirements flow that used to sit here: the row claims
      // integration setup moved into the product, and a list of named, running
      // integrations is that claim rather than a diagram of it.
      //
      // Cropped from the left, so the navigation and the interface names
      // survive the 14:9 frame. What the crop drops is the right-hand action
      // column, which is unreadable at this size anyway.
      media: {
        src: brynqCurrent,
        alt: 'The BrynQ interfaces screen: a list of named integrations, each showing the applications it connects, when it next runs, its schedule and whether the last run succeeded or failed.',
        width: 2546,
        height: 1272,
        position: 'object-left',
      },
    },
    cover: brynqCover,
    stack: [brynqTemplateFlow, brynqWizardFlow],
    published: true,
  },
  {
    slug: 'layrrrd',
    title: 'Layrrrd',
    year: '2026',
    status: 'live',
    tier: 'flagship',
    disciplines: ['Zero to one', 'Product strategy', 'Design systems', 'UX research'],
    context: 'Consumer content product, nine-day validation sprint',
    role: 'Led product direction, UX, brand and the design system',
    headline: 'From first commit to paying customers in nine days',
    decision:
      'Everyone builds a better archive, and archives sit there waiting for people who never come back. Research moved the proposition from better organisation to retrieval and resurfacing, so we built around a pushed digest instead. The team validated, built, tested, changed direction, and reached 15 paying customers by day nine.',
    oneLine:
      'Led design through a nine-day validation sprint, from survey to paying customers.',
    storyHref: '/case-study/layrrrd/story',
    storyMinutes: 2,
    metrics: [
      {
        figure: '15 paying customers',
        note: 'by day nine, from first commit',
        status: 'validated',
        source: 'Payment records',
        timeframe: 'Nine-day sprint',
      },
      {
        figure: '126',
        note: 'freemium signups',
        status: 'observed',
        source: 'PostHog',
        timeframe: 'Nine-day sprint',
      },
      {
        figure: '82',
        note: 'survey responses before the build',
        status: 'observed',
        source: 'Pre-build survey',
      },
    ],
    featured: {
      headline: '15 paying customers in nine days.',
      description:
        'Research changed the proposition while the team validated, built, tested, launched, and sold the product within the same sprint.',
      status: 'Live · Revenue · Ongoing',
      // Observed rather than validated: "validated" is the right word for the
      // 15 paying customers on their own, but this figure also carries the
      // freemium signups, and both halves are simply things that were
      // measured. One label over a compound number has to be true of all of it.
      evidence: {
        figure: '15 paying customers · 126 freemium signups',
        note: 'By day nine, from first commit',
        status: 'observed',
        source: 'Payment records and PostHog',
      },
      // No Layrrrd photography exists in the repo. See docs/playbook-qa.md:
      // the cover and two or three screens are the outstanding asset. The
      // row draws the project's own cover instead of showing a stand-in.
    },
    published: true,
  },
  {
    slug: 'merry-health',
    title: 'Merry Health',
    qualifier: 'Apprenticeship',
    year: '2026',
    status: 'concept',
    tier: 'flagship',
    disciplines: ['Service design', 'Systems design', 'Multi-stakeholder'],
    context: 'Emergency medical transport, researched with the company',
    role: 'Research, service model and system design',
    storyHref: '/case-study/merry-health/story',
    storyMinutes: 2,
    headline: 'Four parties. One shared ride state.',
    decision:
      'Dispatch ran across calls, WhatsApp, paper and a dashboard, so hospitals, operations, drivers and families each held a different version of the same ride. Hospitals were never going to leave WhatsApp mid-emergency, so instead of replacing it we made it an interaction layer on one structured ride record, with a named owner and recovery route for every way a dispatch can fail.',
    oneLine:
      'Turned nine phone-held handoffs into one event-driven ride record, with WhatsApp as an interaction layer.',
    metrics: [
      {
        figure: '4 parties',
        note: 'updated by one state change',
        status: 'proposed',
        source: 'Proposed operating model',
        explanation:
          'Researched with Merry Health and designed as a proposed system. Never rolled out or instrumented, so there is no adoption or timing figure here.',
      },
    ],
    featured: {
      headline: 'Four parties. One shared ride state.',
      description:
        'Hospitals, operations, drivers, and patient families were connected through one structured ride record without replacing familiar emergency channels.',
      status: 'Academic practicum · Proposed system',
      storyLabel: 'Read the project story',
      evidence: {
        figure: '9 manual handoffs',
        note: 'Redesigned around one shared ride record',
        status: 'proposed',
        source: 'Proposed operating model, never deployed',
      },
      media: {
        src: merryHifiDashboard,
        alt: 'The proposed Merry Health operations dashboard: revenue and average response time across the top, quick actions for alerts and summaries, and a ride list giving each ride an id, an assigned ambulance, a route and a status.',
        width: 1371,
        height: 1371,
        position: 'object-top',
      },
    },
    cover: merryHifiDashboard,
    stack: [merryHifiTracking, merryWhatsappPatient],
    published: true,
  },
  {
    slug: 'educaitors',
    title: 'EducAItors',
    qualifier: 'Academic practicum',
    year: '2026',
    status: 'concept',
    tier: 'selected',
    disciplines: ['AI product', 'Workflow design', 'Interaction design'],
    context: 'Instructor supervision for AI-supported grading',
    role: 'Led the team; owned the grading and calibration module',
    headline: 'The AI shows its evidence. The instructor keeps the decision.',
    decision:
      'Faculty cannot verify every AI-supported score, and a confidence badge does not tell them what to do about it. So I led the team to build the supervision layer around disagreement instead: calibration on a small sample, criterion-level evidence behind every number, and an appeal queue typed by what actually went wrong.',
    oneLine:
      'An instructor-supervision workflow for AI-supported grading: calibration, criterion-level evidence, and appeals.',
    metrics: [
      {
        figure: 'Prototype',
        note: 'development-ready, never piloted',
        status: 'not-deployed',
        explanation:
          'Academic practicum. Nothing was piloted, so there is no adoption, accuracy or time-saving figure to report.',
      },
    ],
    cover: educaitorsGrading,
    stack: [educaitorsHome, educaitorsCalibration],
    published: true,
  },
  {
    slug: 'curateus',
    title: 'Curateus',
    qualifier: 'Internship',
    year: '2021',
    status: 'shipped',
    tier: 'selected',
    disciplines: ['Interaction design', 'Workflow design'],
    context: 'Content curation startup, part-time UI/UX intern',
    role: 'UI/UX intern with one product owner and three developers',
    headline: 'Seven steps to recommend an article, down to four',
    decision:
      'Curators found things worth passing on while browsing, then had to leave the page, open Curateus and type the article back in. Working with the product owner and three developers, I moved the recommendation flow into the browser itself. My first product-design project.',
    oneLine:
      'Moved the recommendation flow into the browser, cutting seven steps to four.',
    metrics: [
      {
        figure: '7 → 4 steps',
        note: 'to recommend an article',
        status: 'observed',
        source: 'Flow comparison, before and after',
      },
    ],
    // No cover yet: there is not a single Curateus screenshot in the repo.
    // The card renders the drawn plugin composition instead. See the
    // drawnCovers registry in components/ProjectCard.tsx, and
    // docs/curateus-assets.md for the exports still owed.
    published: true,
  },
  {
    slug: 'stree-safety-app',
    title: 'STREE',
    qualifier: 'Concept',
    year: '2022',
    status: 'concept',
    tier: 'selected',
    disciplines: ['UX research', 'Interaction design'],
    context: "Women's safety, academic concept project",
    role: 'Research and interaction design',
    headline: 'Safety designed for every day, not the worst one',
    decision:
      'Fifteen interviews told us panic is not where women actually live, so we designed for daily autonomy instead of the worst moment. The SOS still works with no network. The product stopped being about fear.',
    oneLine:
      'Fifteen interviews moved the product from emergency panic features to everyday autonomy.',
    metrics: [
      {
        figure: '15 interviews',
        note: 'that redirected the proposition',
        status: 'observed',
      },
    ],
    cover: streeCover,
    stack: [streeHifi6, streeHifi8],
    published: true,
  },
  {
    slug: 'food-waste-ngo',
    title: 'The Hunger Project',
    qualifier: 'Self-initiated',
    year: '2024',
    status: 'self-initiated',
    tier: 'selected',
    disciplines: ['Service design', 'Multi-stakeholder'],
    context: 'Food redistribution between restaurants and NGOs',
    role: 'Self-initiated; research through to system design',
    headline: 'The food was never missing. The handoff was.',
    decision:
      'NGOs were not short of food. They were short of notice and transport. So I designed the handoff between restaurants and NGOs instead of two separate apps: two roles working from one shared state, with pickup or delivery decided by capacity and a fallback for when delivery falls through.',
    oneLine:
      'Designed the handoff, not two apps: two roles on one shared state, with a fallback when delivery fails.',
    cover: hungerProjectCover,
    stack: [foodWasteCover, foodWasteAccount],
    published: true,
  },
];

/**
 * Draft markers in the rows above are stripped before anything renders.
 * See src/data/drafts.ts.
 */
export const projects: Project[] = projectList.map(publishableProject);

/** The three that carry the portfolio, in the order they should be read. */
export const flagshipProjects = projects.filter((p) => p.published && p.tier === 'flagship');

/** Everything else: range and development, at a fraction of the space. */
export const selectedProjects = projects.filter((p) => p.published && p.tier === 'selected');

/** A project that definitely has a home-page entry, so the row can rely on it. */
export type FeaturedProject = Project & { featured: FeaturedEntry };

/**
 * The three rows on the home page, in reading order. Membership is
 * `featured` being present rather than a second tier vocabulary, so a
 * project joins or leaves the home page by gaining or losing its home-page
 * copy, and nowhere else.
 */
export const featuredProjects = projects.filter(
  (p): p is FeaturedProject => p.published && Boolean(p.featured)
);

/**
 * Everything published that the three rows do not carry. The compact index
 * under them: range, without another wall of cards.
 */
export const indexProjects = projects.filter((p) => p.published && !p.featured);

export interface EarlierWork {
  title: string;
  year: string;
  role: string;
  note: string;
  /** Hidden rather than deleted, so the copy survives if it comes back. */
  published: boolean;
}

const earlierWorkList: EarlierWork[] = [
  {
    title: 'AlHub',
    year: '2022',
    role: 'Freelance UI Designer',
    note: 'Full visual redesign of a UAE lifestyle and voucher app under an explicit no-UX-changes constraint, delivered through to developer handoff.',
    // Held back at Tanya's request. Flip to true to bring it back.
    published: false,
  },
];

export const earlierWork: EarlierWork[] = earlierWorkList.filter((w) => w.published);
