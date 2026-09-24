import { summaries } from './catalogue';
import finalDashboard from '@/assets/writing/vxd-final-dashboard.png';
import dashboardOptions from '@/assets/writing/vxd-dashboard-options.png';
import type { Article } from './types';

/**
 * The Biller Hero essay. The one guardrail that matters here: the concept
 * board was never taken through a stakeholder-alignment study, and the copy
 * says so in its own paragraph. Nothing on the page upgrades it to
 * organisational consensus.
 */
export const visualDesign: Article = {
  ...summaries['visual-design-is-a-decision-system'],
  lead: {
    asset: 'vxd-final-convergence',
    alt: 'The final Biller Hero template dashboard. Along the top, five template status cards: 11 deployed, 1 needing attention, 2 published, 1 draft and 1 archived. Below, one chart comparing revenue and profit, next to the company’s own billing templates in their own list, and the popular client templates along the bottom.',
    caption:
      'The final dashboard. Template status comes first, because in this product the first thing a person needs to know is whether anything is already wrong.',
    ratio: '3952 / 2270',
    src: finalDashboard,
    width: 3952,
    height: 2270,
  },
  intro: [
    'A mood board can easily turn into a collection of pictures a designer likes.',
    'That was the idea I had to unlearn while creating a look and feel for Biller Hero, a healthcare billing app that office staff use to manage payment rules for clinics and their clients.',
    'The users were not browsing, exploring or expressing themselves. They were changing rules that could affect money, legal rules and live payments across several organisations. How they felt was: responsible, and at risk.',
    'So the question for the visual design was not “What style should this product have?” It was “What should the screen help a person feel and understand before they make an important change?”',
  ],
  sections: [
    {
      id: 'consequence',
      heading: 'Start with how the task makes people feel',
      nav: 'The consequence',
      blocks: [
        {
          kind: 'p',
          text: 'Biller Hero used templates to set up billing rules once and use them across different clinics. A senior admin could send an updated template to a clinic that already had rules running. A client admin could change the fee charged on one customer’s payments.',
        },
        {
          kind: 'p',
          text: 'In both cases, small changes could have big effects. The user needed to know which rules were running, where they applied, what would change, and whether the new setup would work as planned.',
        },
        { kind: 'p', text: 'This gave us a set of feelings people needed:' },
        {
          kind: 'list',
          items: [
            { text: '“I need to feel safe making changes.”' },
            { text: '“I need clarity before I act.”' },
            { text: '“I need structure and protection.”' },
            { text: '“I need predictable results.”' },
            { text: '“The details must be correct.”' },
            { text: '“I need reassurance, not chaos.”' },
          ],
        },
        {
          kind: 'p',
          text: 'These sentences linked the look and feel to the real pressure of the task. They also helped separate useful design qualities from ones that are just in fashion.',
        },
      ],
    },
    {
      id: 'concepts',
      heading: 'Keep “how it works” apart from “how it looks”',
      nav: 'Two kinds of idea',
      blocks: [
        {
          kind: 'p',
          text: 'One of the most helpful parts of the process was defining two different kinds of ideas.',
        },
        { kind: 'p', text: 'Ideas about how it works described how the product should behave:' },
        {
          kind: 'list',
          items: [
            {
              lead: 'Clear',
              text: 'Users understand which rules are running, where they apply, and what will change.',
            },
            {
              lead: 'Confident',
              text: 'The system helps people feel sure before decisions that affect money or legal rules.',
            },
            {
              lead: 'In control',
              text: 'Users feel they are steering the system, not just reacting to it.',
            },
            {
              lead: 'Flexible',
              text: 'Unusual cases can be handled exactly, without shaking up everything else.',
            },
            {
              lead: 'Safe',
              text: 'The screen stops people from sending changes by accident, changes going unnoticed, and money being affected by mistake.',
            },
          ],
        },
        {
          kind: 'p',
          text: 'Ideas about how it looks described how that behaviour should come across: trustworthy, open, reliable, exact, calm, responsible, and empowering.',
        },
        {
          kind: 'p',
          text: 'Keeping them apart stopped the visual design from doing jobs that belonged to how it works. Soft colours cannot make a dangerous action safe. A font cannot explain how far a change reaches. But what stands out most, tone, contrast, spacing and layout can back up the safety features already there.',
        },
      ],
    },
    {
      id: 'theme',
      heading: 'A theme should rule things out',
      nav: 'The theme',
      blocks: [
        {
          kind: 'p',
          text: 'I grouped the ideas into bigger directions, and finally chose Responsible Authority as the main theme.',
        },
        {
          kind: 'p',
          text: 'The phrase became a way to make decisions. “Responsible” meant changes should feel thought through, easy to trace, and safe. “Authority” meant the user should feel able to steer a professional system, not nervous or dependent on it.',
        },
        {
          kind: 'p',
          text: 'The theme ruled out several nice-looking but wrong directions. A playful look could make money changes seem less serious. A crowded dashboard for experts could look powerful but make people more anxious. A very bare screen could hide details users needed before acting.',
        },
        {
          kind: 'p',
          text: 'I borrowed some qualities from a softer direction, Calm Assurance: lighter backgrounds, easy-to-read fonts and plenty of space, without losing the stronger feeling of being in charge.',
        },
        {
          kind: 'p',
          text: 'That mix was important. Authority without calm can feel scary. Calm without authority can feel weak. The final direction needed both.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'vxd-concept-directions',
            alt: 'The two theme directions, Responsible Authority and Calm Assurance, side by side, with the mix we chose underneath.',
            caption:
              'Two directions and the mix between them. The theme is most useful for what it says no to.',
            ratio: '16 / 8',
          },
        },
      ],
    },
    {
      id: 'boards',
      heading: 'Mood boards help people agree, they are not decoration',
      nav: 'Concept boards',
      blocks: [
        {
          kind: 'p',
          text: 'Photos, examples of screens, colours, fonts, layouts and icons were chosen to show the qualities we wanted, not just to look like healthcare.',
        },
        {
          kind: 'p',
          text: 'For each example, I wrote down what it added. Did the layout help you focus? Did the font feel exact without feeling cold? Did the contrast tell risky information apart from everyday information? Did the screen show what the system was doing without causing alarm?',
        },
        {
          kind: 'p',
          text: 'This made the mood board more useful in a review. Someone could disagree with the reasons, compare options, or point out something that did not fit. The discussion did not have to turn into “I like this, I don’t like that”.',
        },
        {
          kind: 'p',
          text: 'The board became a kind of early agreement: if we agree the product should feel calm, in control and professionally responsible, later screen choices can be checked against that agreement.',
        },
        {
          kind: 'p',
          text: 'I did not do a formal study of whether people agreed during the course, so I would not claim the board got a whole company to agree. What it did show was an organised way to make agreeing possible.',
        },
      ],
    },
    {
      id: 'variation',
      heading: 'Trying options is only useful when each one tests a decision',
      nav: 'Variation',
      blocks: [
        {
          kind: 'p',
          text: 'For the course project, I chose the template dashboard as the main screen, and made several very different layouts for it.',
        },
        {
          kind: 'p',
          text: 'Each option changed more than just the style. The options tested different answers to questions like:',
        },
        {
          kind: 'list',
          items: [
            { text: 'Should system health or everyday details come first?' },
            { text: 'How much performance information can the user scan without losing focus?' },
            {
              text: 'Should client billing and company billing appear together, or in clearly separate areas?',
            },
            { text: 'How much should actions with big effects stand out?' },
            { text: 'What visual rhythm feels in control without feeling stiff?' },
          ],
        },
        {
          kind: 'p',
          text: 'I judged each direction against five things: clear, confident, in control, focused and safe.',
        },
        {
          kind: 'p',
          text: 'The final design was a mix, not just picking one. It used the calm structure of one layout, a simpler view of performance from another, and a clearer split between client templates and the company’s own billing settings.',
        },
        {
          kind: 'p',
          text: 'This fixed my idea that trying options ends with picking a winner. Sometimes the right design comes from understanding why each option worked, then mixing their strengths without keeping their weaknesses.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'vxd-hero-variations',
            alt: 'Two earlier versions of the template dashboard side by side. On the left, the first grey wireframe, with status counts, popular templates, one template’s details, and separate bar charts for revenue and profit. On the right, Layout B, which puts status next to quick actions, shows revenue and profit in one line chart, and moves the billing templates into a side column.',
            caption:
              'Where it started, and one of the layouts tried on the way. The first wireframe split revenue and profit into two charts; later layouts joined them into one comparison.',
            ratio: '4443 / 1592',
            src: dashboardOptions,
            width: 4443,
            height: 1592,
          },
        },
      ],
    },
    {
      id: 'hierarchy',
      heading: 'What stands out most is how you manage risk',
      nav: 'What stands out, and risk',
      blocks: [
        {
          kind: 'p',
          text: 'The final dashboard put template status and system health before the detailed information. Less important content was made quieter. Money in and profit were combined into one clearer comparison. Client billing templates and the company’s own billing settings were split into separate areas.',
        },
        { kind: 'p', text: 'These choices were visual, but not just about looks:' },
        {
          kind: 'list',
          items: [
            { text: 'Putting status first made risk visible sooner.' },
            {
              text: 'Less clutter meant less chance of minor information distracting from an important problem.',
            },
            { text: 'Combining related numbers made the screen lighter and comparing easier.' },
            {
              text: 'Keeping responsibilities apart helped users see which rules affected clients and which affected the company itself.',
            },
            {
              text: 'Keeping important actions visible but calm helped people act carefully, instead of feeling rushed by alarm bells.',
            },
          ],
        },
        {
          kind: 'quote',
          text: 'What stands out on a screen decides what a person notices, compares and treats as important. In a system where mistakes are costly, that makes it part of how the product manages risk.',
        },
      ],
    },
    {
      id: 'workflow',
      heading: 'A direction is not finished until it works for every step',
      nav: 'Across every step',
      blocks: [
        {
          kind: 'p',
          text: 'A great main screen can hide a weak design style. So the course project asked for the chosen direction to work across every step and every state: empty, error, active and finished.',
        },
        {
          kind: 'p',
          text: 'This tested whether the visual base was organised enough to handle screens with lots or little information, and different feelings.',
        },
        {
          kind: 'p',
          text: 'Trust, for example, could not look the same everywhere. A normal “saved” message should feel quiet. A clash in the settings should be impossible to miss, without looking like a disaster. Overwriting something important should make you stop and think. An empty screen should guide the user without making a serious business product feel too casual.',
        },
        {
          kind: 'p',
          text: 'Being consistent did not mean making every screen look the same. It meant using the same rules in different situations.',
        },
      ],
    },
    {
      id: 'process',
      heading: 'The process I would use again',
      nav: 'What I take forward',
      blocks: [
        { kind: 'p', text: 'Now I would approach the look and feel with these questions:' },
        {
          kind: 'list',
          ordered: true,
          items: [
            { text: 'What responsibility is the user carrying?' },
            { text: 'What should they understand and feel before acting?' },
            { text: 'Which qualities are about how it works, and which are about how it looks?' },
            { text: 'What theme can guide decisions and rule out options that do not fit?' },
            { text: 'What idea does each visual option test?' },
            { text: 'What ways of judging are more useful than personal taste?' },
            { text: 'Does the direction work for risk, error, empty and finished screens?' },
            { text: 'Could another designer explain why the system looks and works this way?' },
          ],
        },
        {
          kind: 'p',
          text: 'The project taught me that visual design is not the last coat of paint once the product is solved. It is a system for guiding attention, showing what is at stake, and helping people feel the right amount of confidence about what they are about to do.',
        },
        {
          kind: 'p',
          text: 'Good visual design does not take the responsibility away from an important task. It makes that responsibility easier to carry.',
        },
      ],
    },
  ],
  studio: {
    body: 'This article is based on my master’s visual design course for Biller Hero. It covers framing the product, ideas about how it works and how it looks, building a theme, mood boards, options for the main screen, choosing between them, using the style across every step, screen states, and a finished mock-up.',
  },
  meta: {
    title: 'How Things Look Is a Set of Decisions',
    description:
      'How responsibility, risk, mood boards and testing options shaped a healthcare billing screen.',
  },
};
