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
    'Taking a curator-only MVP to a two-sided product that lived on the Play Store',
  year: '2021',
  status: 'shipped',
  tagline: 'Content curation . Mobile and browser . Bangalore',

  intro: [
    'Curateus was a content curation startup in Bangalore. When I joined as a UX/UI intern the product was an MVP built for one side of its own market: curators could publish, but the people meant to read what they curated had no home of their own in the app.',
    '[NEED: the problem in the product and the business at that point, and what was at stake for the startup]',
  ],

  meta: [
    { label: 'Role', value: 'UI Designer. Earlier UX/UI Intern' },
    { label: 'Engagement', value: 'Startup, with the founder and Product Owner' },
    { label: 'Timeline', value: '2021' },
    { label: 'Team', value: 'Founder, Product Owner, and me' },
    { label: 'Stage', value: 'Shipped. Live on the Play Store until taken up by Deepstash' },
    { label: 'Domain', value: 'Content curation, consumer' },
  ],

  sections: [
    {
      kind: 'pitch',
      id: 'pitch',
      label: 'Quick pitch',
      footnote:
        'Short on time? The pitch above is the whole case. The journey below is how it actually went.',
      summary: {
        problems: '[NEED: the problem in two or three sentences: why curator-only was not enough, and what capture cost curators]',
        solution:
          'A dual-mode product serving curators and subscribers inside one app, a visual system the MVP had been missing, and a browser plugin that moved capture to where curators already were.',
        why: '[NEED: why dual-mode in one app rather than a separate reader product, and why a plugin rather than improving mobile capture]',
        resultsLabel: 'Results',
        results:
          'Shipped and live on the Play Store, until the product was taken up by Deepstash.',
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
      problem: 'The MVP served only curators',
      intervention: 'so v2.0 became a dual-mode product for curators and subscribers',
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
      problem: 'Recommending mid-task meant a desktop to mobile context switch',
      intervention: 'so capture moved into the browser, where curators already were',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Curators found things worth recommending while working on desktop, and the app lived on their phone. The switch cost them mid-task, so the recommendation flow became browser-native.',
            '[NEED: how the plugin flow worked, and what changed for curators]',
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-03',
      index: '03',
      nav: '03 The visual system',
      problem: 'The product had grown without a visual system',
      intervention: 'so I built the one it had been missing',
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
          body: 'Shipped and live on the Play Store, until the product was taken up by Deepstash.',
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
