import type { CaseStudy } from './types';

/**
 * DRAFT. Dev-only until the content lands; excluded from production in
 * caseStudies/index.ts. Confirmed facts: 2021, Bangalore startup, UX/UI
 * intern then UI Designer alongside the founder and Product Owner,
 * curator-only MVP taken to a dual-mode product, browser plugin for
 * capture, live on the Play Store until it was taken up by Deepstash.
 * Owed: the why behind each decision, evidence, outcomes, and an NDA pass.
 */
export const curateus: CaseStudy = {
  slug: 'curateus',
  title: 'Curateus',
  headline:
    'Taking a first version made only for curators, and turning it into an app for two kinds of people on the Play Store',
  year: '2021',
  status: 'shipped',
  tagline: 'Sharing good articles . Phone and browser . Bangalore',

  intro: [
    'Curateus was a small new company in Bangalore that helped people share good articles. When I joined as a design intern, the app was a first version built for only one side of its users: curators could share articles, but the people meant to read them had no place of their own in the app.',
    '[NEED: the problem in the product and the business at that point, and what was at stake for the startup]',
  ],

  meta: [
    { label: 'Role', value: 'UI Designer. Earlier UX/UI Intern' },
    { label: 'Type of project', value: 'A new company, working with the founder and the product owner' },
    { label: 'Timeline', value: '2021' },
    { label: 'Team', value: 'Founder, Product Owner, and me' },
    { label: 'Stage', value: 'Shipped. Live on the Play Store until taken up by Deepstash' },
    { label: 'Area', value: 'Content curation, consumer' },
  ],

  sections: [
    {
      kind: 'pitch',
      id: 'pitch',
      label: 'Quick pitch',
      footnote:
        'Short on time? The pitch above is the whole story. The journey below is how it really went.',
      summary: {
        problems: '[NEED: the problem in two or three sentences: why curator-only was not enough, and what capture cost curators]',
        solution:
          'One app with two modes, for curators and for readers, a consistent look the first version had been missing, and a browser add-on that let curators share right where they already were.',
        why: '[NEED: why dual-mode in one app rather than a separate reader product, and why a plugin rather than improving mobile capture]',
        resultsLabel: 'Results',
        results:
          'Launched and live on the Play Store, until the product was taken over by Deepstash.',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question: '[NEED: the question the project was answering, e.g. how the curator and consumer sides relate]',
      blocks: [
        {
          kind: 'prose',
          body: [
            '[NEED: how the team understood curators and subscribers: any research, usage signals, or founder knowledge that shaped the split]',
          ],
        },
        {
          kind: 'todo',
          body: 'The checklist asks: why the curator/consumer split, and why a plugin for capture. Answer both here with whatever evidence existed, even if informal. Also run an NDA pass before any screens are added.',
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 Two-sided product',
      problem: 'The first version only worked for curators',
      intervention: 'so version 2.0 became one app with two modes, for curators and for readers',
      blocks: [
        {
          kind: 'prose',
          body: [
            '[NEED: what dual-mode concretely meant in the interface, and what the subscriber side did]',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'One app, two modes',
              cost: '[NEED: what this decision cost]',
              gain: '[NEED: what it bought]',
            },
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-02',
      index: '02',
      nav: '02 Capture in the browser',
      problem: 'Sharing in the middle of a task meant switching from computer to phone',
      intervention: 'so sharing moved into the browser, where curators already were',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Curators found things worth sharing while working on their computer, but the app was on their phone. Switching broke their focus, so sharing moved into the browser itself.',
            '[NEED: how the plugin flow worked, and what changed for curators]',
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-03',
      index: '03',
      nav: '03 The look and feel',
      problem: 'The product had grown without a consistent look',
      intervention: 'so I built the design system it had been missing',
      blocks: [
        {
          kind: 'prose',
          body: [
            '[NEED: what the visual system covered, and what it fixed in the product and the workflow]',
          ],
        },
      ],
    },

    {
      kind: 'outcomes',
      id: 'outcomes',
      label: 'Outcomes',
      heading: '[NEED: outcomes heading, an outcome sentence not a label]',
      blocks: [
        {
          kind: 'prose',
          body: ['[NEED: what shipped, any adoption or usage signal, and what the Deepstash outcome was]'],
        },
        {
          kind: 'note',
          label: 'Status',
          body: 'Launched and live on the Play Store, until the product was taken over by Deepstash.',
        },
        {
          kind: 'todo',
          body: 'Clarify what "taken up by Deepstash" means precisely (acquired, merged, superseded?) and when it happened. That word choice is checkable, so it has to be exact.',
        },
      ],
      callouts: [
        { title: 'Curator-only became', emphasis: 'two-sided', body: '[NEED: one sentence on the dual-mode result]' },
        { title: 'Capture moved to', emphasis: 'the browser', body: '[NEED: one sentence on the plugin result]' },
        { title: 'Live on', emphasis: 'the Play Store', body: '[NEED: one sentence on shipping, and until when]' },
      ],
    },

    {
      kind: 'reflection',
      id: 'reflection',
      label: '[NEED: reflection title]',
      blocks: [
        {
          kind: 'todo',
          body: 'One honest reflection from the first shipped product of your career: an assumption that changed, or what working directly with a founder taught you.',
        },
      ],
    },
  ],
};
