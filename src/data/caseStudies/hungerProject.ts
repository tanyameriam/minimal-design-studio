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
  headline: 'Designing the hand-off between restaurants and charities',
  qualifier: 'Self-initiated',
  year: '2021',
  status: 'self-initiated',
  tagline: 'Helping people . Sharing leftover food . India',
  cover,

  intro: [
    'India grows enough food to feed everyone, and still millions of people go hungry every day. A lot of good leftover food is lost at restaurants, events and food centres: too much gets cooked, it goes bad, or nobody is told in time. Charities that share out food cannot collect it reliably.',
    'Restaurants tell charities after closing time, or at random times. Most charities have no van or staff of their own. Leftover food is only safe to eat for a short time. So the problem is not that people are unwilling to give. It is that nobody is organising the hand-off, and good food is wasted every day.',
  ],

  meta: [
    { label: 'Role', value: 'Research, planning the whole system, screen design' },
    { label: 'Type of project', value: 'A project I started myself' },
    { label: 'Timeline', value: '2021' },
    { label: 'Team', value: 'On my own, with interviews of charity staff' },
    { label: 'Stage', value: 'An idea, researched with charity staff' },
    { label: 'Area', value: 'Helping people, moving food between two groups' },
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
          'Messages that arrive at random times, no people to help, high transport costs, trouble collecting from many places, and food going bad while everyone waits. Nobody shares the same information, nobody is clearly in charge at each step, and neither side can see what the other is doing.',
        solution:
          'Two apps, one for restaurants and one for charities, both working from the same shared record of each donation. Food is listed right away and charities are told straight away. The charity chooses how to collect it, based on what it can really manage. And at every step it is clear who is in charge, so every donation always has exactly one owner.',
        why:
          'Because neither side was the problem. The problem was the hand-off between them. What matters is not how many apps there are, but that both sides see the same information and that someone is clearly in charge at every step. That is what fixes what the charities told us.',
        resultsLabel: 'Intended results',
        results:
          'Food collected while it is still safe to eat, charities able to plan because they know what is coming, and problems that get caught instead of food quietly going to waste. Researched with charity staff and fully planned out; each hoped-for result comes with the number that would prove it.',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question:
        'How do you design the space between two groups who are both already trying?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Interviews with charity staff, including Manav Charities, who collect leftover food from weddings, parties and company events and take it to places where people are hungry. Their problems were very similar, and none of them were about not wanting to help.',
          ],
        },
        {
          kind: 'quote',
          text: 'There have been a lot of instances when we could not collect food from parties because they were informed at odd timings.',
          source: 'Charity staff',
        },
        {
          kind: 'quote',
          text: 'The logistics in transporting the food on time to reach the hunger hotspots was very difficult to arrange and manage.',
          source: 'Charity staff',
        },
        {
          kind: 'points',
          items: [
            {
              title: 'Messages that are scattered and unpredictable',
              body: 'Restaurants send a message after closing, or at random hours. With no one place to check, charities miss the chance completely. Food is wasted because the message came too late, not because nobody wanted it.',
            },
            {
              title: 'No way to move the food',
              body: 'Most charities have no van or staff to collect food across the city. Even when they hear about it, they cannot get there in time.',
            },
            {
              title: 'No way to match food to need',
              body: 'No way to guess how much food there is, match it to who needs it, arrange transport, or check that it arrived. It all runs on luck.',
            },
            {
              title: 'Human-dependent coordination',
              body: 'Phone calls, planning by hand and volunteers with their own cars break down easily under pressure. It fails every day, not because there is not enough food, but because nobody designed how it should work.',
            },
          ],
        },
        {
          kind: 'note',
          label: 'What this research did not cover',
          body: 'The restaurant side. The research here only heard from one side, which matters for a product that is all about the hand-off between two sides.',
        },
        {
          kind: 'todo',
          body: 'Confirm how many NGO conversations and with whom. The quotes are strong enough that naming the sample size only helps you.',
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 The hand-off points',
      problem: 'Nothing held the hand-off together',
      intervention: 'so I designed the moments where responsibility passes on, not the screens',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Both sides were already trying. The restaurant wants the food eaten. The charity wants to collect it. What was missing was anything holding the hand-off together: no shared information, nobody clearly in charge at each step, and no way for either side to see what the other was doing.',
            'So I drew the moments where responsibility passes from one to the other. The restaurant says the food is ready. The charity says how it will collect it. A delivery driver says yes or no. The charity is warned if a delivery fails. Every donation always has exactly one owner, and the screens for each side almost drew themselves out of that diagram.',
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: systemFlow,
              alt: 'A diagram showing how listing, claiming, pickup and delivery fit together between restaurants and charities',
              caption: 'Fig 1. How the system works. Every branch is a moment where responsibility passes on.',
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
      nav: '02 Shared information, two roles',
      problem: 'Each side could end up with its own version of a donation',
      intervention: 'so both apps work from one shared record, with a clear owner at every step',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Restaurants and charities do very different things, so each gets its own app. But the apps must not each keep their own version of a donation, or the same gap that causes the problem comes back. In a two-sided system, trust simply means both sides seeing the same thing at the same time. So one shared record from start to end, and a clear owner at each step, was the part we could not give up.',
            'Two different menus sit on top of it, because the two sides behave very differently. Restaurants act quickly and not very often: list it, hand it over, done. Charities browse, weigh things up and plan: find food, check it, arrange collection.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Two apps, one shared record',
              cost: 'A lot more work for a project I started on my own.',
              gain: 'Both sides see the same information at the same time, and always know who is in charge.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: restaurantSitemap,
              alt: 'A map of the restaurant app, showing orders, listings and account pages',
              caption: 'Fig 2. How the restaurant app is organised. Built around a quick action that does not happen often.',
            },
            {
              src: ngoSitemap,
              alt: 'A map of the charity app, showing finding food, search and account pages',
              caption: 'Fig 3. How the charity app is organised. Built around browsing, weighing things up and planning.',
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
      nav: '03 Pickup or delivery',
      problem: 'How much a charity can transport changes every day',
      intervention: 'so the charity chooses pickup or delivery, and the system plans for a driver saying no',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Having only one way to move food is simpler, but it leaves people out. Forcing pickup leaves out charities without vans. Forcing delivery adds cost where it is not needed. With delivery, a driver is picked automatically, with backup rules if one says no. Pickup works well for food that is close by or for large amounts.',
            'The delay was the problem, not people being unwilling. So restaurants can list leftover food in under a minute, and charities are told right away.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Pickup or delivery, chosen by the charity',
              cost: 'Two sets of steps to design, two ways things can go wrong, and backup rules for when a delivery driver says no.',
              gain: 'A system that fits what charities can really do, instead of guessing.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: addListing,
              alt: 'A simple layout of the restaurant’s add a listing steps',
              caption: 'Fig 4. Adding a listing. The step that has to take less than a minute.',
            },
            {
              src: handoff,
              alt: 'A simple layout showing the hand-off check between the restaurant and whoever collects the food',
              caption: 'Fig 5. The hand-off. One owner, clearly named, at every step.',
            },
          ],
        },
      ],
    },
    {
      kind: 'step',
      id: 'step-04',
      index: '04',
      nav: '04 Forecastability',
      problem: 'Aiming for the most food gave charities food they could not use',
      intervention: 'so the system aims for food they can plan around instead',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The amount of food moved seems like the obvious thing to measure, but charities said the opposite. Big donations that arrive without warning are harder to use than small ones that come regularly, because volunteers have to be planned in advance, for food nobody can see coming.',
            'Designing for a steady rhythm instead of the biggest amount means less impressive numbers, but a system charities can actually find volunteers for.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Being able to plan matters more than amount',
              cost: 'Less impressive numbers than aiming for the most food moved.',
              gain: 'Charities can plan volunteers around food they know is coming.',
            },
          ],
        },
        {
          kind: 'figures',
          items: [
            {
              src: track,
              alt: 'A simple layout of the charity’s tracking screen, showing the collection status',
              caption: 'Fig 6. The same information for both. Both sides see the same thing.',
            },
          ],
        },
      ],
    },

    {
      kind: 'decision',
      id: 'decisions',
      label: 'What I thought about and did not do',
      items: [
        {
          option: 'Only one way to move the food',
          why: 'A simpler system, with one set of steps to design. I said no because how much a charity can transport changes every day. Forcing pickup leaves out charities without vans; forcing delivery adds cost where it is not needed.',
        },
        {
          option: 'Two apps that each keep their own records',
          why: 'Easier to plan and build. I said no because each side would have its own version of a donation, which brings back the gap that causes the problem in the first place.',
        },
        {
          option: 'Aim for the most food donated',
          why: 'The obvious thing to measure. I said no because charities said the opposite: big donations without warning are harder to use than small regular ones. I designed for a steady rhythm instead.',
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
            { outcome: 'Food is collected while it is still safe to eat', metric: 'Share of listings collected before they go bad' },
            { outcome: 'Charities can plan around the food coming in', metric: 'Time from listing to the charity being told' },
            { outcome: 'Every donation has a clear owner', metric: 'Share of listings that reach a clear end' },
            { outcome: 'Problems get caught instead of food quietly going to waste', metric: 'Share of refused deliveries that find a backup' },
          ],
        },
        {
          kind: 'note',
          label: 'Status',
          body: 'A project I started myself, researched with charity staff.',
        },
      ],
      callouts: [
        {
          title: 'Two roles,',
          emphasis: 'one shared record',
          body: 'Both apps read the same record, instead of each one holding half the story.',
        },
        {
          title: 'How it is collected is decided by',
          emphasis: 'what it can really do',
          body: 'The charity picks pickup or delivery for each donation, with backup rules if a driver says no.',
        },
        {
          title: 'Every donation has',
          emphasis: 'exactly one owner',
          body: 'Someone is named at each hand-off point, instead of responsibility getting lost between the two sides.',
        },
      ],
    },

    {
      kind: 'reflection',
      id: 'reflection',
      label: 'What this taught me',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Two-sided products for good causes fail when one side is an afterthought. The design work that mattered was not either app on its own. It was the shared record and the hand-off points between the two sides, where responsibility passes on and where everything breaks today.',
            'Designing for charities that can do different amounts taught me not to force everything into one shape. The neat answer would have been one way to move food, and it would have left out most of the charities I talked to. And being able to plan beat amount as the thing worth aiming for, which was the opposite of what I first thought.',
          ],
        },
      ],
    },
  ],
};
