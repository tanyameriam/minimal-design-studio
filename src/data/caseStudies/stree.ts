import type { CaseStudy } from './types';
import cover from '@/assets/stree-cover.png';
import affinity from '@/assets/stree-affinity-1.png';
import persona from '@/assets/stree-persona.png';
import storyboard from '@/assets/stree-storyboard.png';
import sosFlow from '@/assets/stree-sos-flow.png';
import lockscreen from '@/assets/stree-lockscreen-1.png';
import hifi from '@/assets/stree-hifi-8.png';

export const stree: CaseStudy = {
  slug: 'stree-safety-app',
  title: 'STREE',
  headline:
    'Turning a panic button into a companion for the 99 percent of the time nothing is happening',
  qualifier: 'Concept',
  year: '2022',
  status: 'concept',
  tagline: 'Women’s safety . India . Mobile',
  cover,

  intro: [
    'Harassment in public space restricts freedom of movement, participation, and wellbeing. Existing safety tools in India are post-incident panic buttons, built for the worst moment. But fear operates continuously: choosing a longer route, avoiding a street after dark, deciding whether discomfort is enough to act on. Even where nothing happens, anticipation shapes behaviour.',
    'A product built only for the emergency addresses a fraction of the experience, and functions as a daily reminder of threat. Fifteen contextual interviews said that is not where women actually live, which moved the brief from an SOS tool to something that supports the whole arc: before, during, and after.',
  ],

  meta: [
    {
      label: 'Role',
      value: '[NEED: team roles and what I owned; confirmed team project]',
      fallback: 'Team project',
    },
    { label: 'Engagement', value: 'PGP final project, IDC IIT Bombay' },
    { label: 'Timeline', value: '1 month' },
    { label: 'Team', value: 'Mentor reviews, 15 interview participants' },
    { label: 'Stage', value: 'Concept, tested with 4 users' },
    { label: 'Domain', value: 'Personal safety, mobile' },
  ],

  sections: [
    {
      kind: 'pitch',
      id: 'pitch',
      label: 'Quick pitch',
      footnote:
        'Short on time? The pitch above is the whole case. The journey below is how it actually went.',
      summary: {
        problems:
          'Safety tools activate after an incident, but the restriction happens before one. Offenders are frequently known people, many women freeze rather than react, and reporting is perceived as slow enough that many stop reporting entirely. No panic button addresses any of that.',
        solution:
          'A companion covering before, during, and after: contextual guidance rather than warnings, SOS reachable from the lock screen, an offline mode, and explicit visibility of what emergency contacts actually receive.',
        why:
          'Because fifteen interviews said the fear is ambient and the incident is rare. A product designed only for the worst moment gets opened in fear and abandoned in calm. Designing for the 99 percent of the time nothing is happening is what keeps the product installed for the moment something is.',
        resultsLabel: 'Intended results',
        results:
          'SOS reachable without deliberation under stress, users understanding what they are sharing, and a product not abandoned as a fear reminder. Tested with four users, sized to surface comprehension failures; the speed claim is left to instrumentation.',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question:
        'How do you support women before, during, and after safety incidents, without increasing fear or judgement?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Fifteen contextual interviews with women aged 25 to 35 across Pune, Bangalore, Delhi, Mumbai, and Kerala. Given the subject, all participants were anonymised and everything was documented with explicit consent.',
            'Synthesis by affinity mapping: clustering individual observations repeatedly, separating what people said explicitly from what they struggled to articulate from what showed up as behaviour across multiple interviews. The strongest finding was not a feature request.',
          ],
        },
        {
          kind: 'quote',
          text: 'I want safety without feeling controlled.',
          source: 'Interview participant',
        },
        {
          kind: 'points',
          items: [
            {
              title: 'Safety means independence',
              body: 'Not protection. Women defined it as the ability to move freely, not as the presence of a rescuer.',
            },
            {
              title: 'Offenders are often known people',
              body: 'Which complicates reporting entirely. During incidents many women freeze rather than react, and question whether their discomfort is justified.',
            },
            {
              title: 'Bystanders rarely intervene',
              body: 'And reporting systems are perceived as slow enough that many women stop reporting at all.',
            },
            {
              title: 'Emotional recovery is long',
              body: 'Experiences are shared only within close circles, because of shame or fear of judgement.',
            },
            {
              title: 'Safety perception is contextual',
              body: 'What feels fine at 2pm feels different at 11pm. Behaviour adapts constantly.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: affinity,
              alt: 'Affinity map clustering interview observations into themes',
              caption: 'Fig 1. Affinity mapping in Miro. Observations clustered repeatedly until the themes held.',
            },
            {
              src: persona,
              alt: 'User persona summarising goals, motivations, and challenges from the research',
              caption: 'Fig 2. The persona, built from interview data rather than demographic assumption.',
            },
          ],
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 The whole arc',
      problem: 'A feature list hid the parts of the experience that mattered',
      intervention: 'so I storyboarded the whole arc before designing a screen',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Splitting the problem into before, during, and after gave each phase its own job. Before is awareness without alarm, contextual guidance rather than warnings. During is simplicity and speed, including when the network fails. After is validation, recovery, and accountability, with visibility into what happens next.',
            'The storyboard exposed what a requirements list cannot: loneliness, doubt, and emotional fatigue are part of the flow, and a product that ignores them is designing for a moment rather than a life.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: storyboard,
              alt: 'Storyboard following a young woman navigating unfamiliar spaces and finding support',
              caption: 'Fig 3. The storyboard exposed gaps a feature list hides.',
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
      nav: '02 The safety map',
      problem: 'A crowdsourced safety map would have made the fear worse',
      intervention: 'so safety became contextual and time-sensitive, not an absolute label',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Crowdsourced safety maps were the obvious feature and I had designed one. My mentor challenged it: labelling places unsafe reinforces the exact fear the product claims to reduce, and disproportionately marks the neighbourhoods people already avoid.',
            'The replacement reads the same street differently at 2pm and 11pm, which matches how the research said women actually assess risk. It cost me a clean signal, and it was the right trade.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Contextual maps, not absolute labels',
              cost: 'A weaker, fuzzier signal than a simple red and green map, harder to render and harder to explain.',
              gain: 'A product that does not shrink its users’ world.',
            },
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-03',
      index: '03',
      nav: '03 Lock screen SOS',
      problem: 'Hesitation happened before the phone was unlocked',
      intervention: 'so SOS moved ahead of the unlock, onto the lock screen',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Testing showed the failure was not at the tap. It was in the seconds before it, deciding whether the situation warranted opening the app at all. Moving activation ahead of the unlock removed the part of the interaction that was actually failing.',
            'An offline mode carries the last known location, last update time, destination, and nearest police station, because network unreliability cannot be the thing that compromises safety.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: lockscreen,
              alt: 'Lock screen SOS shortcut allowing activation without unlocking the phone',
              caption: 'Fig 4. Lock screen activation. The hesitation was before the unlock, so the trigger moved.',
            },
            {
              src: sosFlow,
              alt: 'SOS mode user flow showing interactions between the user, officials, and emergency contacts',
              caption: 'Fig 5. SOS mode, including what each party sees and when.',
            },
          ],
          width: 'wide',
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-04',
      index: '04',
      nav: '04 What contacts see',
      problem: 'Users did not know what they were sharing',
      intervention: 'so what contacts receive became explicit rather than implied',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The single biggest confusion in four moderated think-aloud sessions was not speed. It was users not knowing what information went to whom. Making that legible was a bigger win than any activation improvement, because a safety tool nobody trusts is a safety tool nobody opens.',
            'Testing also asked for profile photos for faster identification, start and end notifications for contacts, and immediate confirmation after pressing SOS.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: hifi,
              alt: 'High fidelity screen showing journey status with ETA and contact visibility',
              caption: 'Fig 6. Journey status. Contact visibility made explicit rather than implied.',
            },
          ],
        },
        {
          kind: 'note',
          label: 'On sample size',
          body: 'Four participants, sized to surface comprehension failures. Claims about activation speed are left to instrumentation, which is the correct order: comprehension first, speed once the design is stable.',
        },
        {
          kind: 'todo',
          body: 'Trace at least one finding through to a specific design change. The contact-visibility thread is the strongest: what exactly did you change after hearing it? That link from evidence to decision is currently missing.',
        },
      ],
    },

    {
      kind: 'decision',
      id: 'decisions',
      label: 'What I considered and did not do',
      items: [
        {
          option: 'A crowdsourced safety map with absolute safe and unsafe labels',
          why: 'The obvious feature, and I had designed one. My mentor challenged it: labelling places unsafe reinforces the exact fear the product claims to reduce, and disproportionately marks the neighbourhoods people already avoid. Safety became contextual and time-sensitive instead.',
        },
        {
          option: 'A feature for every research insight',
          why: 'Not every insight demands a feature. Emotional recovery and social conditioning shaped the product tone and the storyboard, not a screen each. Some problems cannot, and should not, be solved through technology alone.',
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
            { outcome: 'SOS reachable without deliberation under stress', metric: 'Time to activation, unprompted, in simulated conditions' },
            { outcome: 'Users understand what contacts actually receive', metric: 'Comprehension check after task, the top confusion in testing' },
            { outcome: 'Not abandoned as a fear reminder', metric: '30-day retention among users who had no incident' },
          ],
        },
        {
          kind: 'todo',
          body: 'Count the taps to SOS in the original flow against your redesign. That number is sitting in your Figma file and it belongs on the project card.',
        },
      ],
      callouts: [
        {
          title: 'SOS moved to',
          emphasis: 'the lock screen',
          body: 'Activation placed ahead of the unlock, where testing showed the hesitation actually was.',
        },
        {
          title: 'Reframed from panic to',
          emphasis: 'autonomy',
          body: 'Fifteen interviews defined safety as independence, not protection, which changed the whole brief.',
        },
        {
          title: 'Works with',
          emphasis: 'no network',
          body: 'Last known location, last update time, destination, and nearest police station, held offline.',
        },
      ],
    },

    {
      kind: 'reflection',
      id: 'reflection',
      label: 'Where I was wrong',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The safety map is the part I would want to be asked about. I had designed something that would have made the problem worse, and I could not see it from inside the research. It took a mentor outside the project to name the harm.',
            'Designing for safety is as much emotional as functional. Fear, doubt, and social conditioning shape how risk is experienced, and not every insight demands a feature.',
          ],
        },
        {
          kind: 'quote',
          text: 'Not every insight demands a feature, and not every problem can, or should, be solved through technology alone.',
        },
      ],
    },
  ],
};
