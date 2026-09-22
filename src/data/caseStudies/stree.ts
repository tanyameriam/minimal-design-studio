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
  headline: 'Designing for everyday safety, not just emergencies',
  qualifier: 'Concept',
  year: '2022',
  status: 'concept',
  tagline: 'Women’s safety . India . Phone app',
  cover,

  intro: [
    'Being harassed in public stops women from moving freely, taking part, and feeling well. The safety apps in India are panic buttons for after something has happened, built for the worst moment. But fear is there all the time: taking a longer route, avoiding a street after dark, wondering whether feeling uneasy is enough reason to act. Even when nothing happens, expecting it changes how women live.',
    'An app built only for emergencies covers a small part of what women go through, and reminds them of danger every day. Fifteen interviews told us that is not how women actually live. So the idea changed from an SOS app to something that helps before, during, and after.',
  ],

  meta: [
    {
      label: 'Role',
      value: '[NEED: team roles and what I owned; confirmed team project]',
      fallback: 'Team project',
    },
    { label: 'Type of project', value: 'Final project for my design course at IDC, IIT Bombay' },
    { label: 'Timeline', value: '1 month' },
    { label: 'Team', value: 'Reviews with a mentor, 15 women interviewed' },
    { label: 'Stage', value: 'An idea, tested with 4 users' },
    { label: 'Area', value: 'Personal safety, phone app' },
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
          'Safety apps start working after something happens, but the fear starts long before. The person causing harm is often someone the woman knows, many women freeze instead of reacting, and reporting feels so slow that many stop reporting at all. No panic button helps with any of that.',
        solution:
          'A companion for before, during, and after: helpful tips instead of warnings, an SOS button you can reach from the lock screen, a mode that works without internet, and a clear view of exactly what your emergency contacts will see.',
        why:
          'Because fifteen interviews told us the fear is always there, and the emergency is rare. An app built only for the worst moment gets opened in fear and deleted when things are calm. Designing for the 99 percent of the time when nothing is happening is what keeps the app on the phone for the moment something does.',
        resultsLabel: 'What we hoped would happen',
        results:
          'SOS you can reach without stopping to think under stress, users who understand what they are sharing, and an app that is not deleted for being a reminder of fear. We tested with four users, enough to find where people got confused. How fast it is would need to be measured later.',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question:
        'How can we help women before, during, and after something unsafe happens, without making them more afraid or making them feel judged?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Fifteen interviews with women aged 25 to 35 in Pune, Bangalore, Delhi, Mumbai, and Kerala, in the places they live and travel. Because the topic is sensitive, everyone stayed anonymous and everything was written down only with their clear permission.',
            'We sorted the findings by grouping notes on a board, again and again. We kept apart what people said out loud, what they found hard to put into words, and what they did, again and again, across many interviews. The strongest finding was not a request for a feature.',
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
              body: 'Not protection. Women described safety as being free to move around, not as having someone to rescue them.',
            },
            {
              title: 'The person causing harm is often someone they know',
              body: 'That makes reporting much harder. In the moment, many women freeze instead of reacting, and wonder whether feeling uneasy is a good enough reason.',
            },
            {
              title: 'Bystanders rarely intervene',
              body: 'And reporting feels so slow that many women stop reporting at all.',
            },
            {
              title: 'Healing takes a long time',
              body: 'Women only share what happened with people very close to them, because of shame or fear of being judged.',
            },
            {
              title: 'Feeling safe depends on the situation',
              body: 'What feels fine at 2pm feels different at 11pm. Women change what they do all the time.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: affinity,
              alt: 'A board grouping notes from the interviews into themes',
              caption: 'Fig 1. Grouping notes in Miro. We sorted the notes again and again until the themes were clear.',
            },
            {
              src: persona,
              alt: 'A user profile showing the goals, reasons, and struggles we found in the research',
              caption: 'Fig 2. The user profile, built from what the interviews told us, not from guesses about age or background.',
            },
          ],
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 The whole journey',
      problem: 'A list of features hid the parts of the experience that mattered',
      intervention: 'so I drew the whole journey as a comic strip before designing any screen',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Splitting the problem into before, during, and after gave each part its own job. Before is about being aware without being scared: helpful tips instead of warnings. During is about being simple and fast, even when there is no signal. After is about being believed, healing, and holding people responsible, and seeing what happens next.',
            'The comic strip showed what a list of requirements cannot: feeling lonely, doubting yourself, and being emotionally worn out are part of the journey. An app that ignores them is designing for one moment, not for a whole life.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: storyboard,
              alt: 'A comic strip following a young woman finding her way in places she does not know, and finding help',
              caption: 'Fig 3. The comic strip showed gaps that a feature list hides.',
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
      problem: 'A safety map filled in by the public would have made the fear worse',
      intervention: 'so safety became something that changes with time and place, not a fixed label',
      blocks: [
        {
          kind: 'prose',
          body: [
            'A safety map filled in by the public was the obvious feature, and I had designed one. My mentor pushed back: calling places unsafe feeds the very fear the app is meant to reduce, and unfairly marks the areas people already avoid.',
            'The new version reads the same street differently at 2pm and at 11pm, which matches how the research said women really judge risk. It cost me a simple, clear signal, and it was the right choice.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Maps that change with the situation, not fixed labels',
              cost: 'A weaker, fuzzier signal than a simple red and green map, harder to show and harder to explain.',
              gain: 'An app that does not make its users’ world smaller.',
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
      problem: 'People hesitated before they even unlocked the phone',
      intervention: 'so the SOS button moved in front of the unlock, onto the lock screen',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Testing showed the problem was not the tap itself. It was the seconds before it, deciding whether things were bad enough to open the app at all. Putting the SOS button before the unlock removed the part that was really going wrong.',
            'A mode that works without internet keeps your last known location, the time of the last update, where you are going, and the nearest police station, because a bad signal should never be what puts someone at risk.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: lockscreen,
              alt: 'An SOS shortcut on the lock screen that works without unlocking the phone',
              caption: 'Fig 4. SOS from the lock screen. People hesitated before unlocking, so the button moved.',
            },
            {
              src: sosFlow,
              alt: 'The steps of SOS mode, showing what happens between the user, officials, and emergency contacts',
              caption: 'Fig 5. SOS mode, including what each person sees and when.',
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
      intervention: 'so what contacts receive was shown clearly, instead of left for users to guess',
      blocks: [
        {
          kind: 'prose',
          body: [
            'In four test sessions where people talked us through what they were thinking, the biggest confusion was not about speed. It was that users did not know which information went to whom. Making that clear mattered more than any speed-up, because a safety app nobody trusts is a safety app nobody opens.',
            'Testers also asked for profile photos so contacts can recognise them faster, alerts to contacts when a trip starts and ends, and a clear message right after pressing SOS.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: hifi,
              alt: 'A finished screen showing trip status, arrival time and what contacts can see',
              caption: 'Fig 6. Trip status. What contacts can see is shown clearly, not left to guess.',
            },
          ],
        },
        {
          kind: 'note',
          label: 'On sample size',
          body: 'Four people took part, enough to find where people got confused. Claims about how fast SOS is are left to be measured later, which is the right order: first make sure people understand it, then measure speed once the design is settled.',
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
      label: 'What I thought about and did not do',
      items: [
        {
          option: 'A safety map filled in by the public, with fixed safe and unsafe labels',
          why: 'The obvious feature, and I had designed one. My mentor pushed back: calling places unsafe feeds the very fear the app is meant to reduce, and unfairly marks the areas people already avoid. So safety became something that changes with time and place instead.',
        },
        {
          option: 'A feature for every thing we learned',
          why: 'Not everything we learn needs a feature. Healing and how society shapes women’s choices changed the tone of the app and the comic strip, not one screen each. Some problems cannot, and should not, be solved with technology alone.',
        },
      ],
    },

    {
      kind: 'outcomes',
      id: 'outcomes',
      label: 'Intended outcomes',
      heading: 'What I would measure, and what would prove it',
      blocks: [
        {
          kind: 'intended',
          items: [
            { outcome: 'SOS you can reach without stopping to think under stress', metric: 'Time to press SOS, without help, in a practice situation' },
            { outcome: 'Users understand what contacts actually receive', metric: 'A quick check of understanding after a task, since this was the biggest confusion in testing' },
            { outcome: 'Not deleted for being a reminder of fear', metric: 'How many people still use it after 30 days, among those who had nothing happen' },
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
          body: 'The SOS button moved in front of the unlock, where testing showed people really hesitated.',
        },
        {
          title: 'Changed from panic to',
          emphasis: 'freedom',
          body: 'Fifteen interviews described safety as freedom, not protection, which changed the whole plan.',
        },
        {
          title: 'Works with',
          emphasis: 'no network',
          body: 'Last known location, time of the last update, where you are going, and the nearest police station, kept even without internet.',
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
            'The safety map is the part I would want to be asked about. I had designed something that would have made the problem worse, and I could not see it while I was deep in the research. It took a mentor from outside the project to point out the harm.',
            'Designing for safety is as much about feelings as about how things work. Fear, doubt, and the way society raises women shape how risk feels, and not everything we learn needs a feature.',
          ],
        },
        {
          kind: 'quote',
          text: 'Not everything we learn needs a feature, and not every problem can, or should, be solved with technology alone.',
        },
      ],
    },
  ],
};
