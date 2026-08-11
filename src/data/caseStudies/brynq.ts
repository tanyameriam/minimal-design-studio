import type { CaseStudy } from './types';
import cover from '@/assets/brynq-cover.png';
import wizardFlow from '@/assets/brynq-wizard-flow.png';
import templateFlow from '@/assets/brynq-template-flow.png';
import scenarioRedacted from '@/assets/brynq-scenario-redacted.png';

export const brynq: CaseStudy = {
  slug: 'brynq',
  title: 'BrynQ',
  headline:
    'Turning the spreadsheet every integration started with into the product surface it should have been',
  year: '2023 to present',
  status: 'shipped',
  tagline: 'B2B iPaaS . HR and payroll integrations',
  cover,

  intro: [
    'BrynQ is a B2B integration platform connecting HRM and payroll systems across the EU, moving and transforming employee data between applications. When I joined it was still operating under its legacy identity, SalureConnect. Technically it worked. The problem was everything that happened before the technology got involved.',
    'Every integration began with a requirements document called a Scenario: an Excel file describing which fields map to which, and how data transforms in between. Interface developers gathered these from customers across calls, follow-ups, and clarification threads. The file was the contract, the specification, and the project tracker at once, and it lived entirely outside the product. As BrynQ scaled, that stopped being a documentation problem and became a product one.',
    'I have been the product designer at BrynQ since 2023, working across the integration platform. This case study goes deep on one workstream, the requirements wizard and the template system it enabled, because it best shows how I work. The role is wider than this story, and the ongoing parts of it are summarised at the end.',
  ],

  meta: [
    { label: 'Role', value: 'Product Designer. Research, workflow design, UI systems' },
    { label: 'Engagement', value: 'In-house, product team' },
    { label: 'Timeline', value: '2023 to present' },
    { label: 'Team', value: 'Product Owner, interface team, engineering, customer success' },
    { label: 'Stage', value: 'Ongoing role. This study covers one workstream' },
    { label: 'Domain', value: 'iPaaS, HR and payroll' },
  ],

  summary: {
    problems:
      'Customers frequently lacked technical clarity about their own systems. Developers spent hours translating business intent into technical mappings. Incomplete information cost weeks, nobody could say where a project stood, and nothing learned on one integration transferred to the next.',
    solution:
      'A three-phase requirements wizard inside the platform, mirroring the workflow the interface team already used, with review as a system state rather than an email thread. Structured data first, optimisation second.',
    why:
      'Because the team already thought in phases and the business ran on the Scenario. Digitising the existing workflow before improving it bought adoption and structured data at once. A cleverer redesign would have been rejected by the people it needed most, and there was no data yet to design the clever version from.',
    resultsLabel: 'Results',
    results:
      'An interface build that took up to six months now ships in about one week when started from a template. Incomplete information surfaces at submission instead of mid-build, customer feedback has been positive, and setup shifted from developer-led toward self-serve.',
  },

  challenge: {
    question:
      'How do you replace a tool everyone depends on without asking anyone to change how they think?',
    blocks: [
      {
        kind: 'prose',
        body: [
          'I wanted the process as it actually happened, not as it was described. That meant contextual interviews with the interface team and the Product Owner, a review of real Scenario files including the ones that had gone wrong, shadowing interface developers during live customer calls, and observing support conversations where the consequences of a bad Scenario surfaced weeks downstream.',
          'The most useful thing I saw was what people did around the file. Developers annotated it. Customers sent screenshots alongside it. Threads referenced cell ranges. The Excel file was not a form being filled in. It was a coordination tool, and a poor one. Any digital replacement had to preserve that role before improving on it, which made adoption, not usability, the thing that would decide whether this worked.',
        ],
      },
      {
        kind: 'quote',
        text: 'Most integration delays did not occur during development. They occurred before development even started.',
      },
      {
        kind: 'note',
        label: 'What this evidence did not cover',
        body: 'Every session I observed had a developer present to interpret. I never watched a customer complete a Scenario alone, which is exactly the situation a self-serve wizard creates. That gap mattered later.',
      },
    ],
  },

  process: [
    {
      index: '01',
      problem: 'Requirements lived outside the product',
      intervention: 'so I digitised the Scenario before trying to improve it',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The obvious move was to redesign the requirements process outright. I argued against it. The MVP deliberately mirrored the existing Excel workflow: same phases, same mental model, mostly manual entry. That meant shipping something barely faster to fill in, and defending it internally against the obvious objection, which was why we had rebuilt the spreadsheet.',
            'The wins I was buying were not input speed. They were a single source of truth, self-reliance for customers, and the end of redundant Scenario files. Automating entry before understanding the patterns would have been guessing, and there was no structured data yet to learn the patterns from.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Digitise before optimising',
              cost: 'A first release that was not noticeably better to use, and an internal case I had to keep making.',
              gain: 'A single source of truth, structured data inside the platform, and adoption from a team that would have rejected a better but unfamiliar tool.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: scenarioRedacted,
              alt: 'A redacted Scenario spreadsheet showing field mapping columns',
              caption: 'Fig 1. A real Scenario file, redacted. The contract, the spec, and the tracker in one place.',
            },
          ],
        },
      ],
    },
    {
      index: '02',
      problem: 'The team already thought in phases',
      intervention: 'so the wizard split along the seams that were already there',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The interface team worked in context, then mappings, then confirmation, without ever having written that down. Splitting the wizard along those seams meant the structure needed no explanation, and it made the question of which phase a project was in answerable for the first time.',
            'That reframe cost something politically. It moved the problem out of engineering, where there was appetite to optimise, and into a workflow nobody owned. My responsibility became redesigning the process around the integration logic rather than the logic itself, which made change management, not interface design, the real work.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: wizardFlow,
              alt: 'Flow diagram of the three-phase interface requirements wizard, from context through mappings to review',
              caption: 'Fig 2. The wizard, abstracted. Three phases that already existed implicitly in how the team worked.',
            },
          ],
        },
      ],
    },
    {
      index: '03',
      problem: 'Approval lived in an email thread',
      intervention: 'so review became a state the system could hold',
      blocks: [
        {
          kind: 'prose',
          body: [
            'On submission, developers were notified and could approve or reject with feedback. A rejected request reopened until it met development standards. This replaced a long thread whose status lived in somebody’s memory with a predictable system state and unambiguous ownership.',
            'The effect was that incomplete information surfaced at the point of submission rather than halfway through a build, when the cost of finding it is measured in weeks.',
          ],
        },
      ],
    },
    {
      index: '04',
      problem: 'Structured data made repeat patterns visible',
      intervention: 'so templates moved setup toward self-serve',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Once patterns emerged across structured Scenario data, templates became possible for common system combinations. An interface build that previously took up to six months now ships in about one week when started from a template, and BrynQ moved from a fully custom, developer-driven model toward self-serve setup. That is the payoff of digitising before optimising: the boring first version generated the asset the interesting second version needed.',
            'The same foundation enabled lightweight project management and AI-assisted interface creation. What began as digitising an Excel file became a cornerstone of the platform’s modernisation.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: templateFlow,
              alt: 'Flow diagram showing how an admin creates a reusable integration template from structured scenario data',
              caption: 'Fig 3. Templates. Repeat system combinations became reusable starting points.',
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
        option: 'Redesign the requirements process from scratch',
        why: 'Highest ceiling, but it asked the interface team to abandon a mental model the business ran on. Adoption risk outweighed the gain, and with no structured data yet we would have been designing the optimisation blind.',
      },
      {
        option: 'Guided or conversational intake instead of a form',
        why: 'Better suited to customers who lack technical clarity, which was the actual root cause. Rejected for the MVP because it needed a structured data model that did not exist yet. It became viable later, once the wizard produced that model.',
      },
      {
        option: 'Keep Excel, build validation tooling around it',
        why: 'Cheapest, near-zero adoption cost. Rejected because the data would still live outside the platform, killing the review flow, the templates, and everything downstream.',
      },
    ],
  },

  outcomes: {
    label: 'Outcomes',
    heading: 'Requirements stopped being the thing that ran late',
    blocks: [
      {
        kind: 'prose',
        body: [
          'Without touching core integration logic, the wizard changed where integration time went. An interface build that took up to six months now ships in about one week when started from a template. Missing information surfaces at submission rather than mid-build, internal coordination became visible, and customer feedback on the template-based setup has been positive. Most importantly, structured requirements data now lives inside the platform, which is what made everything after it possible.',
        ],
      },
      {
        kind: 'note',
        label: 'What I would measure next',
        body: 'The next figures worth putting on this are the requirements rework rate and the share of new integrations that start from a template. [NEED: rework rate and share of integrations started from templates]',
      },
    ],
    callouts: [
      {
        title: 'Build time, from',
        emphasis: '6 months to 1 week',
        body: 'Templates for repeat system combinations turned interface setup from a months-long custom build into about a week of work.',
      },
      {
        title: 'Gaps surfaced',
        emphasis: 'at submission',
        body: 'Incomplete information was caught before development started rather than mid-build.',
      },
      {
        title: 'Setup shifted toward',
        emphasis: 'self-serve',
        body: 'Structured data made templates possible, and customers responded well to starting from one.',
      },
    ],
  },

  reflection: {
    title: 'Where I was wrong',
    blocks: [
      {
        kind: 'todo',
        body: 'Your paragraph. The strongest candidate is the research gap above: I assumed customers could self-serve the mapping definitions, because every session I observed had a developer present to interpret the questions. When customers filled it in alone, what actually happened? The research had shown me an assisted process and I designed for an unassisted one without noticing the substitution.',
      },
      {
        kind: 'prose',
        body: [
          'Digitising before optimising is unglamorous, and it was right. You cannot template patterns you have not captured yet. The harder lesson was that in enterprise B2B, adoption and governance decide whether a design succeeds more than usability does. I spent as much time aligning the interface team and the Product Owner as I did designing screens.',
          'What I would change: name the adoption metric on day one rather than after, and test the unassisted path, the one my research never actually saw. The measurement lesson stuck. On Layrrrd, the next product I led design on, analytics ran from the first day.',
        ],
      },
      {
        kind: 'note',
        label: 'Also at BrynQ',
        body: 'The wizard is one workstream of an ongoing role. Alongside it I own the Figma file structure and design governance for the product, run UX audits across the integration flows, work with Product Owners and Product Managers to sequence design against product priorities, and led design for an internal task-tracking feature the team runs its work on. [NEED: other BrynQ workstreams worth naming]',
      },
    ],
  },
};
