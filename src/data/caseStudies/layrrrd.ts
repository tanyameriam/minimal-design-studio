import type { CaseStudy } from './types';

export const layrrrd: CaseStudy = {
  slug: 'layrrrd',
  title: 'Layrrrd',
  headline:
    'Taking a revisit problem from first commit to paying customers in nine days, then not stopping',
  year: '2026',
  status: 'live',
  tagline: 'Consumer product . Content curation . Live at layrrrd.com',

  intro: [
    'Layrrrd starts from a reframe: you do not have a discovery problem, you have a revisit problem. People already save content constantly, across bookmarks, screenshots, notes apps, and Telegram saved messages, and almost none of it is ever opened again. Layrrrd saves from anywhere, summarises what you saved, and pushes a curated digest back to you on a schedule you chose. It is live at layrrrd.com.',
    'We gave ourselves nine days to validate it, and we got the numbers. I led design, from product direction through the design system to the brand. By day nine we had paying customers, and the same team has kept building since. This is the project where every judgment call had a deadline measured in hours, which makes it the clearest record I have of how I actually decide.',
  ],

  meta: [
    { label: 'Role', value: 'Design Lead. Product direction, design system, brand' },
    { label: 'Engagement', value: 'Validated in 9 days, now an ongoing product' },
    { label: 'Timeline', value: 'June 2026 to present' },
    { label: 'Team', value: '[NEED: team size and roles]' },
    { label: 'Stage', value: 'Live, revenue' },
    { label: 'Domain', value: 'Consumer, content curation' },
  ],

  summary: {
    problems:
      'Saving content is frictionless and revisiting it never happens. The read-later pile scatters across bookmarks, tabs, screenshots, and chat apps, and relies on willpower nobody has. Existing tools answer this with better organisation, which is more work at exactly the moment people have none to give.',
    solution:
      'Remove organising entirely. Four capture surfaces feed one pipeline: a Chrome extension, a paste bar, a Telegram bot, and a WhatsApp bot. AI summarises everything on save, and a weekly digest, delivered on the day each user picked, pushes the backlog back to them grouped by topic.',
    why:
      'Because the failure was never in saving, it was in returning. A better archive still waits for the user to come back. A digest does not wait, so the product was built around the push, and everything else, capture, summaries, even the mascot, exists to serve that one loop.',
    resultsLabel: 'Results',
    results:
      '15 paying customers and 126 freemium signups by day nine, tracked in PostHog from launch. Live since, with the same team improving it: payments, referrals, a published Chrome extension, and two chat channels shipped since validation.',
  },

  challenge: {
    question: 'What does a design process look like when you give a product nine days to prove itself?',
    blocks: [
      {
        kind: 'prose',
        body: [
          'Nine days does not permit a discovery phase, so the discovery had to already exist: our own saved-content graveyards, and the shared observation that the people we were building for dump links into Telegram saved messages and never look again. The bet was placed on day one and every scoping decision descended from it. Anything that made saving easier or the digest better shipped. Anything else waited.',
          'The discipline was tested mid-build. User testing inside the validation window surfaced three problems worth reacting to: people did not trust that a save had worked, retrieval fell apart past a hundred items, and the digest cadence felt imposed rather than chosen. We repositioned around a curated feed, made save-state explicit, and let users pick their digest day. Reacting to evidence inside a nine day window, instead of defending the original plan, is the part of this project I would show a hiring panel first.',
        ],
      },
      {
        kind: 'quote',
        text: 'You do not have a discovery problem. You have a revisit problem.',
      },
    ],
  },

  process: [
    {
      index: '01',
      problem: 'Saved content scatters across apps nobody revisits',
      intervention: 'so capture went to where saving already happens, four channels into one pipeline',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The target user already saves into Telegram and WhatsApp. Fighting that habit would have meant winning a behaviour change war with a nine day budget, so instead the product moved into those channels: a bot in each, alongside a Chrome extension and a paste bar in the app. All four converge on one pipeline. A save is instant and idempotent, the AI summary happens in the background, and the item appears in the library without the user waiting on it.',
            'Trust turned out to be the design problem, not speed. Testing showed people did not believe the save had worked when nothing visibly happened. The fix was an optimistic pending card that appears immediately and resolves in place, which cost little and changed how the whole capture flow felt.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Four capture channels over one polished one',
              cost: 'Each channel got a thinner first version, and two of them are bots whose conversational surface needed its own design work.',
              gain: 'Capture met users where saving already happens, which is the entire premise. A single polished channel would have been a better bookmarking tool, the thing we explicitly did not want to build.',
            },
          ],
        },
      ],
    },
    {
      index: '02',
      problem: 'An archive still waits for the user to come back',
      intervention: 'so the digest became the product core, pushed on a day each user chose',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The weekly digest is not a feature of the product. It is the product. Saved items grouped by topic, summarised, with the unread backlog surfaced, delivered over email or Telegram on the day of the week each user picked. The per-user day came directly from testing, where a fixed cadence read as spam and a chosen one read as a commitment the user had made to themselves.',
            'The same push-not-pull logic shaped restraint later: the bot asks consent before sending digests and does not nudge proactively. A product whose premise is respecting your attention cannot spend it cheaply.',
          ],
        },
      ],
    },
    {
      index: '03',
      problem: 'A nine day product built with AI tools could have become a visual junk drawer',
      intervention: 'so I wrote the design system down and made the tools obey it',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The system is editorial and deliberate: light only, zero corner radius, hairline rules instead of cards and shadows, a documented type and colour foundation. Brand sits in a second layer that is opt-in by rule, never applied by default, so the marketing surface can be expressive while the product stays quiet.',
            'The part I consider genuinely senior work: the constraints live in the repository as written rules that the AI coding tools are bound to. When a machine is generating interface code at validation speed, taste does not scale unless it is written down and enforced. The system held through those nine days and is still holding as the product grows.',
            'The brand carries real weight. Rudolf, the dog mascot, is not decoration: he is the loading state, the chat persona in both messaging channels, and the pricing metaphor. Chat time is play time, top-ups are biscuits. One character doing four jobs kept a nine day brand coherent.',
          ],
        },
      ],
    },
    {
      index: '04',
      problem: 'Subscriptions punish a product people touch once a week',
      intervention: 'so pricing became a one time founding membership with a hard cap',
      blocks: [
        {
          kind: 'prose',
          body: [
            'A weekly-touch product has to earn a subscription every month, which is a bad fight to pick at launch. Instead: a lifetime founding membership, one hundred spots, early spots cheaper, gone means gone. Saves, summaries, and digests stay free for everyone. The only metered thing is chat time with Rudolf, because that is the only place where cost genuinely scales with use.',
            'Payments went live inside the validation window, which is what made the day nine number mean something. Fifteen people paid real money for a nine day old product, and that fact validated the bet more than any interview could have.',
          ],
        },
      ],
    },
  ],

  rejected: {
    title: 'What I considered and did not do',
    items: [
      {
        option: 'Subscription pricing',
        why: 'The habit loop is weekly, and a monthly charge against a weekly habit invites churn before the habit forms. Lifetime pricing with scarcity converted curiosity into commitment, and the generous free tier keeps the funnel open.',
      },
      {
        option: 'A discovery and recommendation feed',
        why: 'A social layer was in the pitch and is deliberately not in the product yet. Recommendations without density are noise, and building them would have taken days the core loop needed. The scoping call is recorded in the product docs rather than hidden.',
      },
      {
        option: 'A better organiser: folders, tags, search-first',
        why: 'Organising is the work users already refuse to do. Every hour spent on taxonomy would have rebuilt the problem we were solving, in nicer colours.',
      },
    ],
  },

  outcomes: {
    label: 'Outcomes',
    heading: 'Validated with paying customers in nine days, and still shipping',
    blocks: [
      {
        kind: 'prose',
        body: [
          'PostHog ran from day one, so the numbers are not reconstructed: 15 paying customers and 126 freemium signups by day nine. Since then the same team has shipped the published Chrome extension, referral loops, both chat channels, and a steady stream of trust and privacy work, including full account deletion that actually cascades.',
          'The nine days also left debts, and they are named rather than hidden: no automated test suite yet, and a digest job whose current design is the first known scaling ceiling. Writing the ceilings down before hitting them is what makes them engineering backlog instead of surprises.',
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
        body: '15 people paid for a product that was nine days old, through payments that went live inside the validation window.',
      },
      {
        title: '126 signups',
        emphasis: 'freemium',
        body: 'The free tier is deliberately generous. Unlimited saves and digests keep the funnel open while chat time stays metered.',
      },
      {
        title: 'Instrumented',
        emphasis: 'from day one',
        body: 'PostHog ran from launch, so every claim here is a dashboard, not a memory.',
      },
    ],
  },

  reflection: {
    title: 'What nine days taught me',
    blocks: [
      {
        kind: 'prose',
        body: [
          'Validating in nine days compressed a full product arc, positioning, system, brand, pricing, evidence, and the compression made the priorities legible. Writing the design system down before generating interfaces mattered more than any single screen. Reacting to user testing mid-sprint mattered more than the original plan. And instrumenting from day one, a lesson I carried from earlier work, is why the results section of this case study contains numbers instead of adjectives.',
          'The product is not finished and does not claim to be. The recommendation layer is still scoped out, the test suite is still owed, and the digest job will need rework before the user base outgrows it. Continuing to ship against a named debt list is the ongoing part of the work, and it is the part I enjoy most.',
        ],
      },
    ],
  },
};
