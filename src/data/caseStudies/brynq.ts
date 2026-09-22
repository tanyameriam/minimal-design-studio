import type { CaseStudy } from './types';
import cover from '@/assets/brynq-cover.png';
import wizardFlow from '@/assets/brynq-wizard-flow.png';
import templateFlow from '@/assets/brynq-template-flow.png';
import scenarioRedacted from '@/assets/brynq-scenario-redacted.png';

export const brynq: CaseStudy = {
  slug: 'brynq',
  title: 'BrynQ',
  headline:
    'Turning the spreadsheet that every connection started with into the product it should have been',
  year: '2023 to now',
  status: 'shipped',
  tagline: 'Business software . Connecting HR and payroll systems',
  cover,

  intro: [
    'BrynQ is software that connects HR and payroll systems for businesses across Europe, moving employee data between apps and changing it into the right format. When I joined it still had its old name, SalureConnect. The technology worked. The problem was everything that happened before the technology got involved.',
    'Every connection started with a planning document called a Scenario: an Excel file saying which fields match which, and how the data changes in between. Developers collected these from customers over calls, follow-ups and long chains of questions. The file was the agreement, the plan and the progress tracker all at once, and it lived completely outside the product. As BrynQ grew, that stopped being a paperwork problem and became a product problem.',
    'I have been the product designer at BrynQ since 2023, working across the whole product. This study looks closely at one piece of work, the step-by-step planning tool and the templates it made possible, because it shows best how I work. My job is bigger than this story, and the ongoing parts are summed up at the end.',
  ],

  story: { href: '/case-study/brynq/story', note: '16 slides' },

  meta: [
    { label: 'Role', value: 'Product Designer. Research, workflow design, UI systems' },
    { label: 'Type of project', value: 'Inside the company, on the product team' },
    { label: 'Timeline', value: '2023 to present' },
    { label: 'Team', value: 'Product Owner, interface team, engineering, customer success' },
    { label: 'Stage', value: 'Ongoing role. This study covers one workstream' },
    { label: 'Area', value: 'iPaaS, HR and payroll' },
  ],

  sections: [
    {
      kind: 'pitch',
      id: 'pitch',
      label: 'Quick pitch',
      footnote:
        'Short on time? The pitch above is the whole story. The journey below is how it really went.',
      summary: {
        problems:
          'Customers often did not fully understand their own systems. Developers spent hours turning what the business wanted into technical field matches. Missing details cost weeks, nobody could say how far along a project was, and nothing learned on one connection carried over to the next.',
        solution:
          'A three-step planning tool inside the product, matching the way the team already worked, where checking the plan is a step the system tracks, not an email chain. Get the information into a clear structure first. Make it smarter later.',
        why:
          'Because the team already thought in steps and the business ran on the Scenario file. Moving the existing way of working into the product before improving it meant people would use it, and we would get organised data at the same time. A cleverer redesign would have been rejected by the people who needed it most, and there was no data yet to build the clever version from.',
        resultsLabel: 'Results',
        results:
          'A standard connection used to take about six months. With templates, the same kind of connection could be set up in about two weeks. That is an estimated 92% less time, worked out from our planning model, not measured with real customers. Missing details now show up when the plan is sent in, not halfway through building. The project manager said setting up with templates was twice as easy, and setup moved from developers doing it toward customers doing it themselves.',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question:
        'How do you replace a tool everyone relies on, without asking anyone to change how they think?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'I wanted to see the work as it really happened, not as people described it. So I interviewed the team and the product owner where they worked, looked at real Scenario files, including ones that had gone wrong, sat in with developers on live customer calls, and listened to support conversations where a bad Scenario caused trouble weeks later.',
            'The most useful thing I saw was what people did around the file. Developers wrote notes on it. Customers sent screenshots along with it. Messages pointed to certain cells. The Excel file was not just a form to fill in. It was how people worked together, and it did that badly. Anything that replaced it had to keep that job before improving on it. That meant getting people to use it, not how easy it was, would decide whether this worked.',
          ],
        },
        {
          kind: 'quote',
          text: 'Most integration delays did not occur during development. They occurred before development even started.',
        },
        {
          kind: 'note',
          label: 'What this research did not cover',
          body: 'Every session I watched had a developer there to explain things. I never saw a customer fill in a Scenario alone, which is exactly what a tool for customers to use themselves would ask of them. That gap mattered later.',
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 Move the Scenario into the product',
      problem: 'The planning lived outside the product',
      intervention: 'so I moved the Scenario into the product before trying to improve it',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The obvious move was to redesign the whole planning process. I argued against it. The first version copied the Excel way of working on purpose: the same steps, the same way of thinking, mostly typed in by hand. That meant launching something hardly faster to fill in, and defending it against the obvious question inside the company: why had we rebuilt the spreadsheet?',
            'The wins I wanted were not about typing faster. They were one place where everything lives, customers relying less on us, and no more extra Scenario files. Making things automatic before understanding the patterns would have been guessing, and there was no organised data yet to learn the patterns from.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Move it in before making it smarter',
              cost: 'A first version that was not much nicer to use, and a case I had to keep making inside the company.',
              gain: 'One place where everything lives, organised data inside the product, and a team that actually used it, when they would have rejected a better tool they did not recognise.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: scenarioRedacted,
              alt: 'A Scenario spreadsheet with private details hidden, showing the columns for matching fields',
              caption: 'Fig 1. A real Scenario file, with private details hidden. The agreement, the plan and the tracker in one place.',
            },
          ],
          width: 'wide',
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-02',
      index: '02',
      nav: '02 Split it where it already splits',
      problem: 'The team already thought in steps',
      intervention: 'so the tool was split at the points where the work already split',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The team worked in the same order every time: the background first, then matching fields, then checking. But nobody had ever written that down. Splitting the tool at those points meant the layout needed no explaining, and for the first time you could answer the question: which step is this project on?',
            'That change came at a cost inside the company. It moved the problem away from engineering, where people wanted to improve things, and into a way of working nobody was in charge of. My job became redesigning the process around the connection steps, not the steps themselves. So the real work was helping people change how they worked, not designing screens.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: wizardFlow,
              alt: 'A diagram of the three-step planning tool, from background to matching fields to checking',
              caption: 'Fig 2. The planning tool, made simple. Three steps that were already there in how the team worked.',
            },
          ],
          width: 'wide',
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-03',
      index: '03',
      nav: '03 Checking as a step',
      problem: 'Approval lived in an email chain',
      intervention: 'so checking the plan became a step the system could track',
      blocks: [
        {
          kind: 'prose',
          body: [
            'When a plan was sent in, developers got a message and could approve it or send it back with comments. A plan sent back stayed open until it was good enough to build. This replaced a long email chain, where the status lived in somebody’s memory, with a clear step and a clear owner.',
            'Because of this, missing details showed up when the plan was sent in, not halfway through building, when finding them costs weeks.',
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-04',
      index: '04',
      nav: '04 Templates',
      problem: 'Organised data made repeated patterns easy to see',
      intervention: 'so templates moved setup toward customers doing it themselves',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Once patterns showed up in the organised Scenario data, templates became possible for common pairs of systems. A connection that used to take about six months could, starting from a template, be set up in about two weeks. BrynQ moved from developers building everything from scratch toward customers setting it up themselves. That two-week number comes from our planning model, not from measuring real customers. This is what you get from moving things in before making them smarter: the boring first version created exactly what the exciting second version needed.',
            'The same base made simple project tracking and AI help with setting up connections possible. What started as moving an Excel file into the product became a key part of modernising the whole product.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: templateFlow,
              alt: 'A diagram showing how an admin turns organised Scenario data into a reusable template',
              caption: 'Fig 3. Templates. Pairs of systems that come up again and again became ready-made starting points.',
            },
          ],
          width: 'wide',
        },
      ],
    },

    {
      kind: 'decision',
      id: 'decisions',
      label: 'What I thought about and did not do',
      items: [
        {
          option: 'Redesign the planning process from scratch',
          why: 'It could have been the best result, but it asked the team to drop a way of thinking the business ran on. The risk that nobody would use it was bigger than the gain, and with no organised data yet, we would have been designing the smart version blind.',
        },
        {
          option: 'A guided chat instead of a form',
          why: 'Better for customers who do not fully understand their systems, which was the real cause of the problem. We said no for the first version because it needed organised data that did not exist yet. It became possible later, once the planning tool created that data.',
        },
        {
          option: 'Keep Excel, and build checking tools around it',
          why: 'The cheapest option, and nobody would have had to change. We said no because the data would still live outside the product, which would have ruled out the checking step, the templates and everything after them.',
        },
      ],
    },

    {
      kind: 'outcomes',
      id: 'outcomes',
      label: 'Outcomes',
      heading: 'Planning stopped being the thing that ran late',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Without changing how connections work inside, the planning tool changed where the time went. A connection that used to take about six months is estimated at about two weeks when started from a template. That number comes from our planning model, not from watching real customers. What we did see is smaller but more certain: missing details show up when the plan is sent in, not halfway through building, the team can see who is doing what, and the project manager said setting up with templates was twice as easy. Most importantly, the planning data now lives inside the product, and that is what made everything after it possible.',
          ],
        },
        {
          kind: 'note',
          label: 'What I would measure next',
          body: 'The next numbers worth adding here are how often plans have to be redone, and the share of new connections that start from a template.',
        },
        {
          kind: 'todo',
          body: 'Get the requirements rework rate and the share of integrations started from templates, then add the numbers to the note above.',
        },
      ],
      callouts: [
        {
          title: 'Build time, from',
          emphasis: '~6 months to ~2 weeks',
          body: 'Templates for pairs of systems that come up often bring a build that took months down to about two weeks. This is our estimate from the template model, not yet measured with real customers.',
        },
        {
          title: 'Missing details found',
          emphasis: 'when the plan is sent in',
          body: 'Missing details were caught before building started, not halfway through.',
        },
        {
          title: 'Setup moved toward',
          emphasis: 'customers doing it themselves',
          body: 'Organised data made templates possible, and customers liked starting from one.',
        },
      ],
    },

    {
      kind: 'reflection',
      id: 'reflection',
      label: 'Where I was wrong',
      blocks: [
        {
          kind: 'todo',
          body: 'Your paragraph. The strongest candidate is the research gap above: I assumed customers could self-serve the mapping definitions, because every session I observed had a developer present to interpret the questions. When customers filled it in alone, what actually happened? The research had shown me an assisted process and I designed for an unassisted one without noticing the substitution.',
        },
        {
          kind: 'prose',
          body: [
            'Moving things in before making them smarter is not exciting, but it was right. You cannot make templates from patterns you have not collected yet. The harder lesson was that in business software, whether people adopt a tool and who is in charge of it decide success more than how easy it is to use. I spent as much time getting the team and the product owner on the same page as I did designing screens.',
            'What I would change: decide how to measure whether people use it on day one, not afterwards, and test what happens when customers fill it in alone, which my research never actually saw. The measuring lesson stuck. On Layrrrd, the next product I led the design of, we measured from the very first day.',
          ],
        },
        {
          kind: 'note',
          label: 'Also at BrynQ',
          body: 'The planning tool is one piece of an ongoing job. Next to it, I look after how the Figma files are organised and the design rules for the product, check the connection steps for problems people run into, work with product owners and product managers to plan design work around what matters most, and led the design of a task-tracking feature the team uses to run its own work.',
        },
        {
          kind: 'todo',
          body: 'Decide whether other BrynQ workstreams are worth naming in the note above.',
        },
      ],
    },
  ],
};
