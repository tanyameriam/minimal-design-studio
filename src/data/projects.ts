import { publishableProject } from './drafts';
import brynqCover from '@/assets/brynq-cover.png';
import brynqTemplateFlow from '@/assets/brynq-template-flow.png';
import brynqWizardFlow from '@/assets/brynq-wizard-flow.png';
import brynqCurrent from '@/assets/brynq/brynq-current.png';
import layrrrdCover from '@/assets/layrrrd.png';
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
  | 'Business software'
  | 'Brand-new product'
  | 'AI tools'
  | 'Design systems'
  | 'UX research'
  | 'Interaction design'
  | 'Workflow design'
  | 'Many groups of people';

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
  /**
   * How the image meets the frame. Defaults to a cover crop, which is what a
   * screenshot wants. An image that is already a composed cover, with its own
   * margins and its own ground, uses `contain` instead, so the crop cannot
   * eat the wordmark it was laid out around.
   */
  fit?: 'cover' | 'contain';
  /**
   * The image's own ground, as a CSS colour, painted behind a contained
   * image so the letterboxing is invisible rather than a grey band.
   */
  background?: string;
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
    disciplines: ['Systems design', 'Service design', 'Business software'],
    context: 'Software that connects HR and payroll systems for businesses',
    role: 'Product designer, one part of an ongoing job',
    headline: 'Letting customers connect their systems without waiting for a developer',
    decision:
      'Every new connection started from zero. The team gathered the same details again and again over calls and spreadsheets, and projects fell weeks behind before any code was written. I was asked to make the screens simpler. Instead, I turned the steps the team kept repeating into ready-made templates inside the product, so customers could reuse them.',
    oneLine:
      'Turned the steps the team kept repeating into ready-made templates customers can reuse.',
    storyHref: '/case-study/brynq/story',
    storyMinutes: 2,
    // The three surfaces used to disagree: 92% and 13x are the arithmetic of
    // 26 weeks down to 2, not down to 1. Everything now states the two-week
    // model, and states that it is a model.
    metrics: [
      {
        figure: '~6 mo → ~2 wk',
        note: 'to set up a standard connection',
        status: 'estimated',
        source: 'Template-led delivery model',
        explanation:
          'A standard connection used to take about six months. With templates, we expect the same kind of connection to take about two weeks. This is a plan based on our model, not yet measured with real customers.',
      },
      {
        figure: '2× easier',
        note: 'to set up, said the project manager after templates arrived',
        status: 'stakeholder-reported',
        source: 'BrynQ project manager',
      },
    ],
    featured: {
      headline: 'Connecting business systems, without a developer',
      description: 'Redesigning how customers connect and manage their systems.',
      status: 'Business software · Ongoing',
      evidence: {
        figure: '~6 mo → ~2 wk',
        note: 'Expected time to set up a connection',
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
    disciplines: ['Brand-new product', 'Product strategy', 'Design systems', 'UX research'],
    // The pills on the case study, kept separate from `disciplines` so the
    // /work filters still find this under design systems while the page
    // itself only claims what Tanya led.
    contributions: ['Brand-new product', 'Product strategy', 'UX research', 'Product validation'],
    context: 'An app for saving things to read, tested in nine days',
    role: 'Team lead: I led the product, the design and the research',
    headline: 'From the first line of code to paying customers in nine days',
    decision:
      'Lots of apps help you save things. Almost nobody goes back to look at what they saved. Our research showed that the real problem was finding things again, not storing them. So we built an app that sends you your saved things back. In nine days the team tested the idea, built it, changed direction once, and got 15 paying customers.',
    oneLine:
      'Led the design in a nine-day test, from a survey to paying customers.',
    storyHref: '/case-study/layrrrd/story',
    storyMinutes: 2,
    metrics: [
      {
        figure: '15 paying customers',
        note: 'by day nine, counting from the first line of code',
        status: 'validated',
        source: 'Payment records',
        timeframe: 'Nine-day sprint',
      },
      {
        figure: '126',
        note: 'people signed up for the free version',
        status: 'observed',
        source: 'PostHog',
        timeframe: 'Nine-day sprint',
      },
      {
        figure: '86',
        note: 'people answered our survey before we built anything',
        status: 'observed',
        source: 'Pre-build survey',
      },
    ],
    featured: {
      headline: 'Saving things, and finding them again',
      description: 'Building and testing a new app, from idea to paying customers.',
      status: 'Live · Revenue · Ongoing',
      // Observed rather than validated: "validated" is the right word for the
      // 15 paying customers on their own, but this figure also carries the
      // freemium signups, and both halves are simply things that were
      // measured. One label over a compound number has to be true of all of it.
      evidence: {
        figure: '15 paying customers · 126 free signups',
        note: 'By day nine, counting from the first line of code',
        status: 'observed',
        source: 'Payment records and PostHog',
      },
      // The product's own cover, exported from Layrrrd rather than composed
      // here. It is contained rather than cropped: the wordmark and Rudolf
      // are laid out against the full width, so a 14:9 crop would clip the
      // L and the tail. Its ground is painted behind it, so the letterbox
      // reads as margin.
      media: {
        src: layrrrdCover,
        alt: "The Layrrrd cover: the wordmark set in heavy black type above the line 'Good things, saved. Better things, fetched.', with Rudolf, the product's line-drawn dog, sitting beside it.",
        width: 2292,
        height: 1216,
        fit: 'contain',
        background: '#f7f6f3',
      },
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
    disciplines: ['Service design', 'Systems design', 'Many groups of people'],
    context: 'Emergency ambulance rides, researched with the company',
    role: 'Research, and designing how the whole service works',
    storyHref: '/case-study/merry-health/story',
    storyMinutes: 2,
    headline: 'Four groups of people. One shared record of each ride.',
    decision:
      'Ambulance rides were arranged over phone calls, WhatsApp, paper and a dashboard. So hospitals, the operations team, drivers and families each had a different idea of the same ride. Hospitals were not going to stop using WhatsApp in an emergency. So we kept WhatsApp, and connected it to one shared record of each ride. For every way a ride can go wrong, we named who fixes it and how.',
    oneLine:
      'Replaced nine hand-offs over the phone with one shared ride record that updates everyone, while people keep using WhatsApp.',
    metrics: [
      {
        figure: '4 parties',
        note: 'kept up to date by one change',
        status: 'proposed',
        source: 'Proposed operating model',
        explanation:
          'Researched with Merry Health and designed as a proposal. It was never launched or measured, so there are no usage or timing numbers here.',
      },
    ],
    featured: {
      headline: 'Sending ambulances in an emergency',
      description:
        'Redesigning how hospitals, the operations team, drivers and patients work together.',
      status: 'Academic practicum · Proposed system',
      storyLabel: 'Read the project story',
      evidence: {
        figure: '9 manual handoffs',
        note: 'Replaced by one shared record of the ride',
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
    disciplines: ['AI tools', 'Workflow design', 'Interaction design'],
    context: 'AI that helps teachers grade work',
    role: 'Led the team, and designed the grading part myself',
    headline: 'The AI shows why. The teacher makes the call.',
    decision:
      'Teachers cannot check every grade the AI gives. A label saying how sure the AI is does not tell them what to do next. So we designed around the moments when the teacher and the AI disagree. Teachers first check the AI on a few pieces of work. Every score shows the reason behind it. And when a student asks for a regrade, the request says what went wrong.',
    oneLine:
      'Designing how teachers check, fix and approve grades suggested by AI.',
    metrics: [
      {
        figure: 'Prototype',
        note: 'ready to build, never tried with real classes',
        status: 'not-deployed',
        explanation:
          'A university project. It was never tried with real classes, so there are no numbers for usage, accuracy or time saved.',
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
    context: 'Sharing good articles, right from the browser',
    role: 'Design intern, working with one product owner and three developers',
    headline: 'Sharing an article took seven steps. Now it takes four.',
    decision:
      'People found good articles while browsing. To share one, they had to leave the page, open Curateus and type the article in again. With the product owner and three developers, I moved sharing into the browser, right where people were reading. This was my first product design project.',
    oneLine:
      'Making it easy to share an article without leaving the page.',
    metrics: [
      {
        figure: '7 → 4 steps',
        note: 'to share an article',
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
    context: "Helping women feel safe and free every day",
    role: 'Research, and designing the screens',
    headline: 'Safety for every day, not only the worst day',
    decision:
      'We talked to fifteen women. They told us they do not spend their days in panic. So we designed for everyday freedom, not only for emergencies. The SOS button still works with no phone signal. The app stopped being about fear.',
    oneLine:
      'Changing a safety app to fit what women really needed each day.',
    metrics: [
      {
        figure: '15 interviews',
        note: 'that changed what we built',
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
    year: '2021',
    status: 'self-initiated',
    tier: 'selected',
    disciplines: ['Service design', 'Many groups of people'],
    context: 'Getting leftover restaurant food to charities',
    role: 'My own project, from research to the full design',
    headline: 'There was enough food. Getting it there was the problem.',
    decision:
      'Charities had enough food on offer. What they lacked was warning and a way to move it. So instead of two separate apps, I designed the hand-off between restaurants and charities. Both see the same information. Whoever has room picks up or delivers, and there is a backup plan if a delivery falls through.',
    oneLine: 'Designing one shared hand-off between restaurants and charities.',
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
    note: 'A new look for a lifestyle and voucher app in the UAE. I was not allowed to change how it worked, only how it looked. I delivered it all the way to the developers.',
    // Held back at Tanya's request. Flip to true to bring it back.
    published: false,
  },
];

export const earlierWork: EarlierWork[] = earlierWorkList.filter((w) => w.published);
