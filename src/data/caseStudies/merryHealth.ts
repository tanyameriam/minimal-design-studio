import type { CaseStudy } from './types';
import cover from '@/assets/merry-health-cover.png';
import currentFlow from '@/assets/merry-current-flow.png';
import idealFlow from '@/assets/merry-ideal-flow.png';
import proposedWorkflow from '@/assets/merry-proposed-workflow.jpg';
import whatsappHospital from '@/assets/merry-whatsapp-hospital.png';
import whatsappPatient from '@/assets/merry-whatsapp-patient.png';
import hifiTracking from '@/assets/merry-hifi-tracking.png';
import hifiDashboard from '@/assets/merry-hifi-dashboard.png';

export const merryHealth: CaseStudy = {
  slug: 'merry-health',
  title: 'Merry Health',
  headline:
    'Turning the WhatsApp threads ambulance dispatch already ran on into a system that leaves a record',
  qualifier: 'Concept',
  year: '2024',
  status: 'concept',
  tagline: 'Healthcare ops . Emergency dispatch . Tier 2 and 3 India',
  cover,

  intro: [
    'Merry Health coordinates emergency ambulance dispatch between hospitals, drivers, and patients, primarily in Tier 2 and Tier 3 Indian cities where digital adoption is low and admin staff are stretched. Around 95 percent of requests arrive by phone or WhatsApp. Roughly 5 percent come through a dashboard form.',
    'The system had four actors and no shared truth between them. A patient’s family calls in a panic and describes a condition they cannot assess. A hospital admin relays it to a driver over a separate thread. The driver arrives at an address missing a floor number. Merry Health ops learns the trip happened when somebody remembers to mention it. Each handoff lost data, added minutes, and left nothing behind to review.',
  ],

  meta: [
    { label: 'Role', value: '[NEED: your actual role and engagement type]' },
    { label: 'Engagement', value: '[NEED: contract, in-house, or freelance]' },
    { label: 'Timeline', value: '2024' },
    { label: 'Team', value: '[NEED: who else was involved]' },
    { label: 'Stage', value: 'Concept, researched not built' },
    { label: 'Domain', value: 'Emergency healthcare operations' },
  ],

  summary: {
    problems:
      'Four actors coordinate across twelve dispatch steps with no shared record. An imprecise address, an unstated floor number, a trip nobody marked as started. Information dies at every handoff, and post-incident review is impossible because there is nothing to review.',
    solution:
      'Structured intake inside WhatsApp rather than beside it, an ops dashboard that does not ask hospitals to move, and a defined fallback for each of six failure modes. The operational minimum per handoff, not the complete record.',
    resultsLabel: 'Intended results',
    results:
      'Intake that does not need a clarification call, every trip leaving an auditable record, and handoffs that still complete when GPS or WhatsApp fails. Researched and specified, not built, so these are the outcomes I would instrument rather than results I can claim.',
  },

  challenge: {
    question:
      'How do you make an emergency workflow legible without asking anyone in it to learn a new tool?',
    blocks: [
      {
        kind: 'prose',
        body: [
          'I audited every data point in the dispatch flow against three questions: who owns it, who initiates it, and what decision it enables. That covered four actors across twelve dispatch steps. For each data point I recorded its source, who consumes it, its purpose, how often it appears, and how it fails.',
          'The audit pointed the opposite way to the brief. WhatsApp was the only component of the system that had achieved full adoption, and it had done so because it demanded nothing. No login, no training, no bandwidth. It was not a workaround. It was the operating system.',
        ],
      },
      {
        kind: 'quote',
        text: 'WhatsApp was not the problem. It was the only thing working.',
      },
      {
        kind: 'points',
        items: [
          {
            title: 'The dashboard was not designed for emergencies',
            body: 'It assumed a calm operator with time to type.',
          },
          {
            title: 'Ride information was fragmented',
            body: 'Split across threads, calls, and memory, with no canonical version.',
          },
          {
            title: 'No real-time visibility',
            body: 'Nobody could answer where is it now without making a phone call.',
          },
          {
            title: 'No capacity for peak load',
            body: 'Coordination that works for three concurrent dispatches collapses at fifteen.',
          },
          {
            title: 'No structured handover',
            body: 'Shift changes lost context entirely.',
          },
        ],
      },
      {
        kind: 'figures',
        items: [
          {
            src: currentFlow,
            alt: 'Diagram of the current dispatch flow showing fragmented handoffs between four actors',
            caption: 'Fig 1. The current flow. Four actors, no shared state.',
            reveal: true,
          },
        ],
      },
      {
        kind: 'todo',
        body: 'Name the three handoffs that accounted for most of the failure, and say whether you observed live dispatch or reconstructed the flow from interviews. Stating the limit of your evidence is stronger than leaving it open.',
      },
    ],
  },

  process: [
    {
      index: '01',
      problem: 'Free-text intake lost data at the first handoff',
      intervention: 'so intake became guided prompts inside WhatsApp',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The data loss was not carelessness. It was a caller under stress being asked open questions. Structured prompts replaced free text in the channel people were already using, so the information a dispatch needs is collected once, at the point where somebody is willing to answer.',
            'Building inside WhatsApp rather than beside it meant inheriting its limits, and I took that deliberately.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Build inside WhatsApp, not beside it',
              cost: 'We inherited its limits. No rich UI, no guaranteed delivery, no real validation.',
              gain: 'Adoption at near-zero friction, for staff with no time to learn a tool.',
            },
            {
              title: 'Define the operational minimum, not the complete record',
              cost: 'Thinner analytics and weaker reporting.',
              gain: 'Handoffs that complete while somebody is panicking.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: whatsappHospital,
              alt: 'WhatsApp thread showing how a hospital admin coordinates an ambulance request',
              caption: 'Fig 2. Hospital admin intake, as it actually happens.',
            },
            {
              src: whatsappPatient,
              alt: 'WhatsApp thread showing how a patient party receives ambulance updates',
              caption: 'Fig 3. The patient party side of the same dispatch.',
            },
          ],
        },
      ],
    },
    {
      index: '02',
      problem: 'In an emergency system the exception is the operating condition',
      intervention: 'so I designed the failure modes before the happy path',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Six failure modes, each with a defined path, a defined owner, and a defined notification. Designing for resilience rather than perfection meant every flow needed a Plan B, C, and D before it needed a visual design.',
          ],
        },
        {
          kind: 'points',
          items: [
            { title: 'WhatsApp delivery fails', body: '[NEED: what the system does instead, and who gets told]' },
            { title: 'GPS unavailable', body: '[NEED: the fallback path]' },
            { title: 'Information unclear or contradictory', body: '[NEED: the resolution path]' },
            { title: 'Driver unreachable', body: '[NEED: the escalation path]' },
            { title: 'Duplicate bookings for the same patient', body: '[NEED: the reconciliation rule]' },
            { title: 'Hospital group unreachable', body: '[NEED: the fallback contact chain]' },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: proposedWorkflow,
              alt: 'Proposed edge case workflow showing fallback mechanisms from hospital admin through to patient party notification',
              caption: 'Fig 4. The full fallback workflow, including the paths taken when the primary channel fails.',
              reveal: true,
            },
          ],
        },
      ],
    },
    {
      index: '03',
      problem: 'Ops had no view of a system it was accountable for',
      intervention: 'so the dashboard was built for ops, not for hospitals',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Hospitals stay where they are. Ops gets visibility without forcing anyone to move, which is the only version of this that survives contact with a busy admin desk. Telematics and routing answered the where is it now question that was costing a phone call per dispatch.',
            'Twelve fragmented steps collapse into one shared timeline that all four actors read from, each seeing the slice relevant to them.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: idealFlow,
              alt: 'Diagram of the proposed dispatch flow with a single shared timeline across all four actors',
              caption: 'Fig 5. The proposed flow. Twelve steps collapse into one shared timeline.',
              reveal: true,
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: hifiDashboard,
              alt: 'Ops dashboard showing active dispatches and their current state',
              caption: 'Fig 6. The ops dashboard. Visibility without forcing hospitals to change tools.',
            },
          ],
        },
      ],
    },
    {
      index: '04',
      problem: 'Families called the hospital because nobody had told them anything',
      intervention: 'so status became something the system pushes, not something you ask for',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Most follow-up calls to the hospital were families asking for a status nobody had given them. A patient communication layer turned that into an update the system sends on its own, which removes load from the admin who is least able to absorb it.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: hifiTracking,
              alt: 'Live ambulance tracking interface showing route, ETA, and trip status',
              caption: 'Fig 7. Live tracking. One answer to where is it now.',
            },
          ],
        },
      ],
    },
  ],

  rejected: {
    title: 'What I considered and did not do',
    items: [
      {
        option: 'Dashboard first, WhatsApp as fallback',
        why: 'The intuitive answer, and the one the product assumed. Rejected because it inverts the actual adoption reality. Ninety-five percent of volume was already on WhatsApp, and asking panicking staff to switch tools mid-emergency is asking them to stop using the system.',
      },
      {
        option: 'Capture the complete dataset at intake',
        why: 'Better reporting, cleaner records. Rejected because every additional required field is a chance for intake to stall. I specified the operational minimum per handoff instead, and accepted weaker analytics as the price.',
      },
      {
        option: 'A dedicated driver app',
        why: 'Rejected for the same reason as the dashboard. Installation and training are costs paid by the person least able to pay them.',
      },
    ],
  },

  outcomes: {
    label: 'Intended outcomes',
    heading: 'What I would instrument, and what would prove it',
    blocks: [
      {
        kind: 'prose',
        body: [
          'This was researched and specified rather than built, so the honest version of this section is the measurement plan rather than a results table. Each intended outcome below is paired with the metric that would confirm or kill it.',
        ],
      },
      {
        kind: 'intended',
        items: [
          { outcome: 'Intake without repeated clarification calls', metric: 'Follow-up calls per dispatch' },
          { outcome: 'Every trip leaves an auditable record', metric: 'Percentage of trips with complete start and end timestamps' },
          { outcome: 'Handoffs survive degraded conditions', metric: 'Percentage of dispatches completing when GPS or WhatsApp fails' },
          { outcome: 'Peak load does not collapse coordination', metric: 'Response time at p95 against median' },
          { outcome: 'Structured intake reduces admin effort', metric: 'Time from first contact to dispatch confirmed' },
        ],
      },
    ],
    callouts: [
      {
        title: 'Twelve steps became',
        emphasis: 'one shared timeline',
        body: 'Four actors reading the same record instead of four private threads.',
      },
      {
        title: 'Six failure modes with',
        emphasis: 'a named owner each',
        body: 'Fallbacks designed before the happy path, because the exception is the operating condition.',
      },
      {
        title: 'Intake stayed',
        emphasis: 'in the channel people use',
        body: 'Structure added to WhatsApp rather than adoption demanded of a new tool.',
      },
    ],
  },

  reflection: {
    title: 'Where I was wrong',
    blocks: [
      {
        kind: 'todo',
        body: 'Your paragraph. The strongest candidate is something the data audit overturned: an assumption about who owned a data point, a step you expected to matter that did not, or a piece of information everyone said was essential that nobody actually used.',
      },
      {
        kind: 'quote',
        text: 'UI is only 30 percent of the solution. The other 70 percent is workflow logic, integrations, and system constraints.',
      },
      {
        kind: 'prose',
        body: [
          'Real-world emergency systems need resilience, not perfection. Design has to survive low networks, broken workflows, and human unpredictability. WhatsApp is India’s most adopted enterprise tool, so designing around it rather than against it was the whole strategy.',
          'Designing for resilience rather than perfection also changed how I scope work. The rest was workflow logic, integration constraints, and deciding what a system is allowed to require of somebody in a crisis.',
        ],
      },
    ],
  },
};
