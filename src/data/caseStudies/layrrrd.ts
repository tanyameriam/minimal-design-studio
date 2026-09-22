import type { CaseStudy } from './types';

export const layrrrd: CaseStudy = {
  slug: 'layrrrd',
  title: 'Layrrrd',
  headline:
    'Taking the problem of never going back to saved things, from the first line of code to paying customers in nine days, and then not stopping',
  year: '2026',
  status: 'live',
  tagline: 'An app for everyday people . Saving and finding things . Live at layrrrd.com',

  intro: [
    'Layrrrd starts from a new way of seeing the problem: you do not have a problem finding things, you have a problem going back to them. People save things all the time, in bookmarks, screenshots, notes apps and Telegram saved messages, and almost none of it is ever opened again. Layrrrd saves from anywhere, sums up what you saved, and sends a hand-picked digest back to you on a day you choose. It is live at layrrrd.com.',
    'We gave ourselves nine days to prove it worked, and we got the numbers. I led the design, from what the product should be, to the design system, to the brand. By day nine we had paying customers, and the same team has kept building since. In this project every choice had a deadline measured in hours, so it is the clearest record I have of how I really make decisions.',
  ],

  story: { href: '/case-study/layrrrd/story', note: '16 slides' },

  meta: [
    { label: 'Role', value: 'Design Lead. Product direction, design system, brand' },
    { label: 'Type of project', value: 'Tested in 9 days, now an ongoing product' },
    { label: 'Timeline', value: 'June 2026 to present' },
    { label: 'Team', value: '[NEED: team size and roles]' },
    { label: 'Stage', value: 'Live, revenue' },
    { label: 'Area', value: 'Consumer, content curation' },
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
          'Saving things is easy, and going back to them never happens. The read-later pile is spread across bookmarks, tabs, screenshots and chat apps, and it depends on willpower nobody has. Other apps answer this with better ways to sort things, which means more work at exactly the moment people have none to give.',
        solution:
          'Take away sorting completely. Three ways to save all feed into one system: a Chrome add-on, a paste box and a Telegram bot. AI sums up everything when it is saved, and a weekly digest, sent on the day each user picked, brings the pile back to them, grouped by topic.',
        why:
          'Because saving was never the problem. Going back was. A better storage box still waits for you to come back. A digest does not wait, so the app was built around sending things back, and everything else (saving, summaries, even the mascot) is there to support that one idea.',
        resultsLabel: 'Results',
        results:
          '15 paying customers and 126 free sign-ups by day nine, counted in PostHog from launch. Payments went live during the nine days, which is what made the number mean something. It has been live ever since, with the same team improving it: a Chrome add-on now live, both chat channels, ways to invite friends, and work on trust, all added after the nine days.',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question: 'What does design look like when you give a product nine days to prove itself?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Nine days leaves no time for long research, so the research had to exist already: our own forgotten piles of saved things, and the fact that the people we were building for drop links into Telegram saved messages and never look again. We made our bet on day one and every choice about what to build came from it. Anything that made saving easier or the digest better got built. Everything else waited.',
            'Sticking to that was tested halfway through. Testing with users during the nine days showed three problems worth acting on: people did not trust that saving had worked, finding things broke down after a hundred items, and the digest schedule felt forced on them instead of chosen. We rebuilt it around a hand-picked feed, made it clear when something was saved, and let users pick their digest day. Acting on what we learned within nine days, instead of sticking to the first plan, is the part of this project I would show a hiring team first.',
          ],
        },
        {
          kind: 'quote',
          text: 'You do not have a discovery problem. You have a revisit problem.',
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 Ways to save',
      problem: 'Saved things are spread across apps nobody opens again',
      intervention: 'so saving went where people already save, with every way to save feeding one system',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The people we built for already save things in chat apps. Fighting that habit would have meant trying to change how people behave in just nine days. So the app moved into the chat instead: a Telegram bot, next to a Chrome add-on and a paste box in the app. All three feed into one system. Saving is instant, saving twice does no harm, the AI summary is made in the background, and the item shows up in the library without the user having to wait.',
            'The real design problem turned out to be trust, not speed. Testing showed people did not believe saving had worked when nothing seemed to happen. The fix was a “saving…” card that appears right away and fills in where it is. It cost little and changed how the whole saving experience felt.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Several ways to save instead of one polished one',
              cost: 'Each way to save got a simpler first version, and two of them are chat bots that needed their own design work.',
              gain: 'Saving fitted in where people already save, which is the whole idea. One polished way to save would have made a better bookmarking tool, which is exactly what we did not want to build.',
            },
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-02',
      index: '02',
      nav: '02 The digest',
      problem: 'A storage box still waits for you to come back',
      intervention: 'so the digest became the heart of the app, sent on a day each user chose',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The weekly digest is not a feature of the app. It is the app. Saved items grouped by topic and summed up, with the unread pile shown too, sent by email or Telegram on the day of the week each user picked. Letting each user pick their own day came straight from testing: a fixed day felt like spam, and a chosen day felt like a promise people had made to themselves.',
            'The same idea, sending things out instead of waiting, also taught us to hold back: the bot asks before sending digests and never nags. An app that promises to respect your attention cannot waste it.',
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-03',
      index: '03',
      nav: '03 The design system',
      problem: 'An app built in nine days with AI tools could easily have become a messy junk drawer',
      intervention: 'so I wrote down the design rules and made the coding tools follow them',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The design is simple and done on purpose: light colours only, no rounded corners, thin lines instead of cards and shadows, and fonts and colours that are written down. The brand sits in a second layer that only shows up where we choose, never by default. So the marketing can be bold while the app itself stays calm.',
            'The part I am most proud of: the rules live in the code as written instructions that the AI coding tools have to follow. When a computer is writing screen code this fast, good taste cannot keep up unless it is written down and enforced. The rules held up through those nine days and still hold as the app grows.',
            'The brand does real work. Rudolf, the dog mascot, is not just decoration: he shows up while things load, he is the voice of both chat channels, and he helps explain the prices. Chat time is play time, buying more is buying biscuits. One character doing four jobs kept a brand built in nine days feeling like one thing.',
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-04',
      index: '04',
      nav: '04 Pricing',
      problem: 'Monthly payments are unfair for an app people use once a week',
      intervention: 'so pricing became a one-time founding membership, with a strict limit',
      blocks: [
        {
          kind: 'prose',
          body: [
            'An app you use once a week has to prove it is worth paying for every month, which is a bad fight to pick at launch. Instead: a lifetime founding membership, one hundred spots, early spots cheaper, and when they are gone, they are gone. Saving, summaries and digests stay free for everyone. The only thing you pay per use is chat time with Rudolf, because that is the only thing that really costs more when you use it more.',
            'Payments went live during the nine days, which is what made the day-nine number mean something. Fifteen people paid real money for an app that was nine days old, and that proved the idea better than any interview could.',
          ],
        },
      ],
    },

    {
      kind: 'decision',
      id: 'decisions',
      label: 'What nine days did not include',
      items: [
        {
          option: 'Subscription pricing',
          why: 'People use the app once a week, and a monthly charge for a weekly habit makes people quit before the habit forms. A lifetime price with limited spots turned curiosity into commitment, and the generous free plan keeps the door open for everyone.',
        },
        {
          option: 'A feed of tips and new things to read',
          why: 'A social feature was in the pitch, and on purpose it is not in the app yet. Tips without enough content behind them are just noise, and building them would have taken days the main idea needed. This choice is written down in the product notes, not hidden.',
        },
        {
          option: 'A better way to sort: folders, tags, search first',
          why: 'Sorting is the work users already refuse to do. Every hour spent on ways of sorting would have rebuilt the problem we were trying to fix, just in nicer colours.',
        },
      ],
    },

    {
      kind: 'outcomes',
      id: 'outcomes',
      label: 'Outcomes',
      heading: 'Proven with paying customers in nine days, and still growing',
      blocks: [
        {
          kind: 'prose',
          body: [
            'PostHog ran from day one, so the numbers are real, not guessed afterwards: 15 paying customers and 126 free sign-ups by day nine. Since then the same team has launched the Chrome add-on, ways to invite friends, both chat channels, and a steady flow of trust and privacy work, including deleting your account so that everything really goes with it.',
            'The nine days also left some problems, and they are written down, not hidden: there are no automatic tests yet, and the way the digest is built will be the first thing to struggle as the app grows. Writing down the limits before you hit them turns them into a to-do list, not a surprise.',
          ],
        },
        {
          kind: 'todo',
          body: 'Add cover image and 2 to 3 product screenshots: the extension, a digest, and Rudolf states.',
        },
      ],
      callouts: [
        {
          title: 'Paying customers',
          emphasis: 'by day nine',
          body: '15 people paid for an app that was nine days old, through payments that went live during the nine days.',
        },
        {
          title: '126 sign-ups',
          emphasis: 'free plan',
          body: 'The free plan is generous on purpose. Unlimited saving and digests keep the door open, while chat time is paid for as you use it.',
        },
        {
          title: 'Instrumented',
          emphasis: 'from day one',
          body: 'PostHog ran from launch, so every claim here comes from a dashboard, not from memory.',
        },
      ],
    },

    {
      kind: 'reflection',
      id: 'reflection',
      label: 'What nine days taught me',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Proving an idea in nine days squeezed a whole product into a short time: what it is, the design rules, the brand, the prices and the proof. Squeezing it made it clear what really mattered. Writing the design rules down before making screens mattered more than any single screen. Acting on user tests halfway through mattered more than the first plan. And measuring from day one, a lesson I brought from earlier work, is why the results part of this study has numbers instead of just nice words.',
            'The app is not finished and does not pretend to be. The tips feature is still on hold, the tests still need writing, and the digest will need rebuilding before there are too many users for it. Continuing to build against a list of known problems is the ongoing part of the work, and it is the part I enjoy most.',
          ],
        },
      ],
    },
  ],
};
