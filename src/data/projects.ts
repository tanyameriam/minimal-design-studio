import { publishableProject } from './drafts';

export type ProjectStatus = 'shipped' | 'concept' | 'self-initiated';

export interface Project {
  /** Route slug. Null means no case study page yet. */
  slug: string | null;
  title: string;
  /** Parenthetical after the title. Kept honest: concept work says so. */
  qualifier?: string;
  year: string;
  status: ProjectStatus;
  /** One sentence. What changed, not what discipline it belongs to. */
  outcome: string;
  /** Four chips. Outcomes or countable design facts, never process volume. */
  chips: string[];
  published: boolean;
}

const projectList: Project[] = [
  {
    slug: 'brynq',
    title: 'BrynQ',
    year: '[NEED: dates]',
    status: 'shipped',
    outcome:
      'Integration projects ran weeks late before a single line of code was written, so I moved the bottleneck upstream.',
    chips: [
      '[NEED: setup time]',
      'Requirements moved in-product',
      'Templates to self-serve setup',
      'Dev-approved review flow',
    ],
    published: true,
  },
  {
    slug: 'merry-health',
    title: 'Merry Health',
    qualifier: 'Concept',
    year: '2024',
    status: 'concept',
    outcome:
      'Ambulance dispatch ran on WhatsApp threads, so I made WhatsApp produce structured data instead of trying to replace it.',
    chips: [
      '12 steps to 1 shared timeline',
      '6 failure modes with fallbacks',
      '4 actors, 1 record',
      'Intake kept in-channel',
    ],
    published: true,
  },
  {
    slug: 'stree-safety-app',
    title: 'STREE',
    qualifier: 'Concept',
    year: '2022',
    status: 'concept',
    outcome:
      "Safety apps design for the worst moment. Fifteen interviews said that is not where women actually live.",
    chips: [
      '[NEED: N] to 2 taps to SOS',
      '15 contextual interviews',
      'Works with no network',
      'Reframed from panic to autonomy',
    ],
    published: true,
  },
  {
    slug: 'food-waste-ngo',
    title: 'The Hunger Project',
    qualifier: 'Self-initiated',
    year: '2024',
    status: 'self-initiated',
    outcome:
      'NGOs do not lack food. They lack notice and transport, so I designed the handoff rather than the two apps.',
    chips: [
      '[NEED: N] handoff points defined',
      '2 roles, 1 shared state',
      'Pickup or delivery by capacity',
      'Fallback when delivery declines',
    ],
    published: true,
  },
];

/**
 * Draft markers in the rows above are stripped before anything renders.
 * See src/data/drafts.ts.
 */
export const projects: Project[] = projectList.map(publishableProject);

export interface EarlierWork {
  title: string;
  year: string;
  role: string;
  note: string;
}

export const earlierWork: EarlierWork[] = [
  {
    title: 'Curateus v2.0',
    year: '2021',
    role: 'UI Designer, with founder and PO',
    note: 'Took a curator-only MVP to a dual-mode product for curators and subscribers, and built the visual system it had been missing.',
  },
  {
    title: 'Curateus browser plugin',
    year: '2021',
    role: 'UX/UI Intern',
    note: 'Designed a browser-native recommendation flow to remove the desktop to mobile context switch that was costing curators mid-task.',
  },
  {
    title: 'AlHub',
    year: '2022',
    role: 'Freelance UI Designer',
    note: 'Full visual redesign of a UAE lifestyle and voucher app under an explicit no-UX-changes constraint, delivered through to developer handoff.',
  },
];
