import type { CaseStudy } from './types';

/**
 * DRAFT. Dev-only until the content lands; excluded from production in
 * caseStudies/index.ts. Source material owed: faculty research findings,
 * rationale and trade-off per decision, contribution split against the
 * six-person team, and the apprenticeship report for reflection.
 */
export const educaitors: CaseStudy = {
  slug: 'educaitors',
  title: 'EducAItors',
  headline:
    'Making AI evaluation show its evidence before it shows a score',
  qualifier: 'Concept',
  year: '[NEED: project year]',
  status: 'concept',
  tagline: 'Education . AI-assisted evaluation',

  intro: [
    '[NEED: what EducAItors is, who evaluates with it, and why manual grading and evaluation was broken]',
    '[NEED: the stakes: what a wrong or unexplained grade costs students and faculty]',
  ],

  meta: [
    { label: 'Role', value: '[NEED: what I owned vs the six-person team]' },
    { label: 'Engagement', value: 'Apprenticeship project, team of 6' },
    { label: 'Timeline', value: '[NEED: timeline]' },
    { label: 'Team', value: 'Six people' },
    { label: 'Stage', value: 'Concept, prototyped' },
    { label: 'Domain', value: 'Education, AI evaluation' },
  ],

  sections: [
    {
      kind: 'pitch',
      id: 'pitch',
      label: 'Quick pitch',
      footnote:
        'Short on time? The pitch above is the whole case. The journey below is how it actually went.',
      summary: {
        problems: '[NEED: the problem in two or three sentences]',
        solution: '[NEED: the solution in two or three sentences]',
        why: '[NEED: why this approach and not another]',
        resultsLabel: 'Intended results',
        results: '[NEED: intended results, stated honestly as unmeasured]',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question: '[NEED: the question the whole project was answering]',
      blocks: [
        {
          kind: 'prose',
          body: [
            '[NEED: the faculty research: who was spoken to, what was observed, and the specific findings, not just that research happened]',
          ],
        },
        {
          kind: 'todo',
          body: 'Pull the specific faculty research findings from the apprenticeship report. Each finding should trace to one of the three decisions below: evidence-first scoring, the fail-check, or double-blind calibration.',
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 Evidence first',
      problem: '[NEED: what goes wrong when an AI evaluation leads with a score]',
      intervention: 'so the system shows its evidence first and the score second',
      blocks: [
        {
          kind: 'prose',
          body: ['[NEED: how evidence-first evaluation works, and what the reader sees]'],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Evidence first, score second',
              cost: '[NEED: what this decision cost]',
              gain: '[NEED: what it bought]',
            },
          ],
        },
        {
          kind: 'todo',
          body: 'Rationale and trade-off for evidence-first scoring, plus the research finding that motivated it. A visual of the evaluation surface would carry this section.',
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-02',
      index: '02',
      nav: '02 The fail-check',
      problem: '[NEED: the failure mode the fail-check catches]',
      intervention: 'so every evaluation runs a fail-check with a fallback path',
      blocks: [
        {
          kind: 'prose',
          body: ['[NEED: what the fail-check inspects, and what the fallback does when it trips]'],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Fail-check with fallback',
              cost: '[NEED: what this decision cost]',
              gain: '[NEED: what it bought]',
            },
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-03',
      index: '03',
      nav: '03 Double-blind calibration',
      problem: '[NEED: why uncalibrated AI scores could not be trusted]',
      intervention: 'so calibration ran double-blind',
      blocks: [
        {
          kind: 'prose',
          body: ['[NEED: who was blinded to what, and what the calibration sessions changed]'],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Double-blind calibration',
              cost: '[NEED: what this decision cost]',
              gain: '[NEED: what it bought]',
            },
          ],
        },
      ],
    },

    {
      kind: 'outcomes',
      id: 'outcomes',
      label: 'Intended outcomes',
      heading: 'What I would instrument, and what would prove it',
      blocks: [
        {
          kind: 'intended',
          items: [
            { outcome: '[NEED: intended outcome 1]', metric: '[NEED: metric that would prove it]' },
            { outcome: '[NEED: intended outcome 2]', metric: '[NEED: metric that would prove it]' },
            { outcome: '[NEED: intended outcome 3]', metric: '[NEED: metric that would prove it]' },
          ],
        },
        {
          kind: 'note',
          label: 'Status',
          body: 'Concept work, prototyped with a six-person team. No post-launch data exists, so every outcome here is intended, not measured.',
        },
      ],
      callouts: [
        { title: '[NEED: callout 1 title]', body: '[NEED: callout 1 body]' },
        { title: '[NEED: callout 2 title]', body: '[NEED: callout 2 body]' },
        { title: '[NEED: callout 3 title]', body: '[NEED: callout 3 body]' },
      ],
    },

    {
      kind: 'reflection',
      id: 'reflection',
      label: 'What the apprenticeship taught me',
      blocks: [
        {
          kind: 'todo',
          body: 'Pull 1 to 3 reflection points from the apprenticeship report. Strongest form: an assumption that turned out to be wrong, and what it changed about how you design with AI.',
        },
      ],
    },
  ],
};
