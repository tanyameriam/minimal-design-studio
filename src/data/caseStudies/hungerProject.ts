import type { CaseStudy } from './types';
import cover from '@/assets/hunger-project-cover.png';
import systemFlow from '@/assets/food-waste-system-flow.png';
import restaurantSitemap from '@/assets/food-waste-restaurant-sitemap.png';
import ngoSitemap from '@/assets/food-waste-ngo-sitemap.png';
import addListing from '@/assets/food-waste-rest-wireframe-addlisting.png';
import handoff from '@/assets/food-waste-rest-wireframe-handoff.png';
import track from '@/assets/food-waste-wireframe-track.png';

export const hungerProject: CaseStudy = {
  slug: 'food-waste-ngo',
  title: 'The Hunger Project',
  headline:
    'Turning a two-sided donation problem into a designed handoff, because neither side was ever the failure',
  qualifier: 'Self-initiated',
  year: '2024',
  status: 'self-initiated',
  tagline: 'Social impact . Food redistribution . India',
  cover,

  intro: [
    'India produces enough food to feed its population, and millions still go hungry daily. A large share of edible surplus is lost at restaurants, events, and distribution centres, to overproduction, spoilage, or simply nobody being told in time. NGOs working on redistribution cannot collect consistently.',
    'Restaurants notify NGOs after service hours, or at unpredictable times. Most NGOs have no dedicated vehicle or staff. Surplus food has a narrow safe window. The result is not a shortage of generosity. It is a coordination failure that wastes edible food every day, and no existing tool addresses it because every existing tool optimises for one side.',
  ],

  meta: [
    { label: 'Role', value: 'UX Research, Systems Design, UI' },
    { label: 'Engagement', value: 'Self-initiated' },
    { label: 'Timeline', value: '2024' },
    { label: 'Team', value: 'Solo, with NGO staff interviews' },
    { label: 'Stage', value: 'Concept, researched not piloted' },
    { label: 'Domain', value: 'Social impact, two-sided logistics' },
  ],

  summary: {
    problems:
      'Irregular notification, no manpower, high transport cost, difficulty coordinating multiple pickup locations, and spoilage from delay. There is no shared state, no defined owner at each step, and no way for either side to see what the other is doing.',
    solution:
      'One system with two roles rather than two apps. Instant listing with real-time notification, collection method chosen by the NGO against its actual capacity, and explicit decision nodes so every donation has exactly one owner at all times.',
    resultsLabel: 'Intended results',
    results:
      'Food collected inside its safe window, NGOs able to plan against predictable supply, and failures that degrade rather than vanish. Researched with NGO staff and specified, not built or piloted, so these are intended outcomes with the metrics that would prove them.',
  },

  challenge: {
    question:
      'How do you design the space between two parties who are both already trying?',
    blocks: [
      {
        kind: 'prose',
        body: [
          'Interviews with NGO staff, including Manav Charities, who collect surplus from weddings, parties, and corporate events and distribute it to hunger hotspots. Their pain points clustered tightly, and none of them were about willingness.',
        ],
      },
      {
        kind: 'quote',
        text: 'There have been a lot of instances when we could not collect food from parties because they were informed at odd timings.',
        source: 'NGO field staff',
      },
      {
        kind: 'quote',
        text: 'The logistics in transporting the food on time to reach the hunger hotspots was very difficult to arrange and manage.',
        source: 'NGO field staff',
      },
      {
        kind: 'points',
        items: [
          {
            title: 'Fragmented, unpredictable notification',
            body: 'Restaurants notify after service or at irregular hours. With no central platform, NGOs miss the window entirely. Food is wasted because the information arrived too late, not because nobody wanted it.',
          },
          {
            title: 'No logistics infrastructure',
            body: 'Most NGOs have no dedicated vehicle or staff for cross-city pickups. Even when notified, they cannot retrieve it in time.',
          },
          {
            title: 'No matching between supply and need',
            body: 'No way to estimate quantity, match it to demand, coordinate transport, or confirm the donation landed. The process runs on luck.',
          },
          {
            title: 'Human-dependent coordination',
            body: 'Phone calls, manual planning, and volunteer transport are fragile under any pressure. The ecosystem fails daily, not for lack of food but for lack of system design.',
          },
        ],
      },
      {
        kind: 'note',
        label: 'What this evidence did not cover',
        body: 'The restaurant side. The research here is one-sided, which matters for a product whose entire premise is the handoff between two parties.',
      },
      {
        kind: 'todo',
        body: 'Confirm how many NGO conversations and with whom. The quotes are strong enough that naming the sample size only helps you.',
      },
    ],
  },

  process: [
    {
      index: '01',
      problem: 'Nothing held the transfer together',
      intervention: 'so the unit of design became the decision node, not the screen',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Both sides were already trying. The restaurant wants the food used. The NGO wants to collect it. What did not exist was anything holding the transfer together: no shared state, no defined owner at each step, no way for either side to see what the other was doing.',
            'So I drew the points where responsibility hands over. Restaurant confirms readiness. NGO confirms collection method. Delivery partner accepts or declines. NGO is alerted when delivery fails. Every donation has exactly one owner at all times, and the two apps almost fell out of that diagram on their own.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: systemFlow,
              alt: 'System flow diagram showing how listings, claims, pickup, and delivery interlock between restaurants and NGOs',
              caption: 'Fig 1. The system flow. Every branch is a point where responsibility transfers.',
            },
          ],
        },
      ],
    },
    {
      index: '02',
      problem: 'Two apps would rebuild the silo in software',
      intervention: 'so it became two roles inside one system with shared state',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Separate apps are easier to scope and ship, and they recreate exactly the separation that causes the problem. Trust in a two-sided system is just both parties seeing the same thing at the same time, so shared end-to-end state was the non-negotiable.',
            'Two information architectures sit on top of it, shaped by two genuinely different behaviours. Restaurants act fast and infrequently: list, hand off, done. NGOs browse, evaluate, and plan: discover, assess, coordinate.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Two roles, one system',
              cost: 'Substantially more complexity for a self-initiated project.',
              gain: 'Both sides see the same state at the same time, instead of rebuilding the silo in software.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: restaurantSitemap,
              alt: 'Restaurant app sitemap showing orders, listings, and account structure',
              caption: 'Fig 2. Restaurant IA. Built around a fast, infrequent action.',
            },
            {
              src: ngoSitemap,
              alt: 'NGO app sitemap showing food discovery, search, and account structure',
              caption: 'Fig 3. NGO IA. Built around browsing, evaluating, and planning.',
            },
          ],
        },
      ],
    },
    {
      index: '03',
      problem: 'NGO transport capacity varies day to day',
      intervention: 'so the NGO chooses pickup or delivery, and the system plans for refusal',
      blocks: [
        {
          kind: 'prose',
          body: [
            'A single mandatory logistics path is a simpler system and it excludes people. Forcing pickup excludes NGOs without vehicles. Forcing delivery adds cost where it is not needed. Delivery assigns a partner automatically with fallback rules when one declines. Pickup suits nearby or bulk collection.',
            'The delay, not the willingness, was the failure, so restaurants publish surplus in under a minute and NGOs are notified immediately.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Pickup or delivery, chosen by the NGO',
              cost: 'Two flows to design, two failure modes, and fallback rules for when a delivery partner declines.',
              gain: 'A system that fits real capacity instead of assuming it.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: addListing,
              alt: 'Wireframe of the restaurant add listing flow',
              caption: 'Fig 4. Adding a listing. The step that has to take under a minute.',
            },
            {
              src: handoff,
              alt: 'Wireframe showing the handoff confirmation between restaurant and collection party',
              caption: 'Fig 5. The handoff. One owner, clearly named, at every step.',
            },
          ],
        },
      ],
    },
    {
      index: '04',
      problem: 'Optimising for volume gave NGOs food they could not use',
      intervention: 'so the system optimises for forecastability instead',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Total food moved is the intuitive impact metric, and NGOs said the opposite. Unpredictable large donations are harder to use than reliable small ones, because volunteers have to be allocated in advance against supply nobody can see coming.',
            'Designing for rhythm rather than volume means less impressive headline numbers and a system NGOs can actually staff.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Forecastability over volume',
              cost: 'Less impressive headline numbers than optimising for total food moved.',
              gain: 'NGOs can allocate volunteers against supply they can predict.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: track,
              alt: 'Wireframe of the NGO tracking view showing collection status',
              caption: 'Fig 6. Shared state. Both sides see the same thing.',
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
        option: 'A single mandatory logistics path',
        why: 'Simpler system, one flow to design. Rejected because NGO transport capacity varies day to day. Forcing pickup excludes NGOs without vehicles; forcing delivery adds cost where it is not needed.',
      },
      {
        option: 'Separate apps for restaurants and NGOs',
        why: 'Easier to scope and ship. Rejected because it recreates the silo that causes the problem in the first place.',
      },
      {
        option: 'Optimise for donation volume',
        why: 'The intuitive impact metric. Rejected because NGOs said the opposite: unpredictable large donations are harder to use than reliable small ones. I designed for rhythm instead.',
      },
    ],
  },

  outcomes: {
    label: 'Intended outcomes',
    heading: 'What I would instrument, and what would prove it',
    blocks: [
      {
        kind: 'intended',
        items: [
          { outcome: 'Food is collected inside its safe window', metric: 'Percentage of listings collected before expiry' },
          { outcome: 'NGOs can plan against supply', metric: 'Lead time from listing to notification' },
          { outcome: 'Every donation has a clear owner', metric: 'Percentage of listings reaching a terminal state' },
          { outcome: 'Failures degrade rather than vanish', metric: 'Percentage of declined deliveries that find a fallback' },
        ],
      },
      {
        kind: 'note',
        label: 'Status',
        body: 'Self-initiated concept. Researched with NGO staff, not built or piloted. The outcomes above are intended, not measured.',
      },
    ],
    callouts: [
      {
        title: 'Two roles,',
        emphasis: 'one shared state',
        body: 'Both sides read the same record, rather than each app holding half the truth.',
      },
      {
        title: 'Collection method set by',
        emphasis: 'actual capacity',
        body: 'The NGO picks pickup or delivery per donation, with fallback rules when a partner declines.',
      },
      {
        title: 'Every donation has',
        emphasis: 'exactly one owner',
        body: 'Responsibility is named at each decision node instead of dissolving between the two parties.',
      },
    ],
  },

  reflection: {
    title: 'What this taught me',
    blocks: [
      {
        kind: 'prose',
        body: [
          'Two-sided social products fail when one side is an afterthought. The design work that mattered was not either app. It was the decision nodes between them, where responsibility transfers and everything currently breaks.',
          'Designing for variable capacity taught me not to over-standardise. The clean systems answer would have been one logistics path, and it would have excluded most of the NGOs I spoke to. And forecastability beat volume as the thing worth optimising, which was the opposite of my starting assumption.',
        ],
      },
    ],
  },
};
