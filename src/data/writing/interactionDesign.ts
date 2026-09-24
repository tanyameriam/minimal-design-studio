import { summaries } from './catalogue';
import threeVariations from '@/assets/writing/ixd-three-workflow-variations.png';
import finalWorkflow from '@/assets/writing/ixd-final-workflow.png';
import finalPrototype from '@/assets/writing/ixd-final-prototype.png';
import sixUps from '@/assets/writing/ixd-six-ups.png';
import type { Article } from './types';

/**
 * The resource-planning essay. It is the longest of the three and the one
 * most at risk of reading as assignment documentation, so the sections are
 * ordered as an argument (goal, alternatives, sequence, states, criteria)
 * rather than as a submission checklist.
 */
export const interactionDesign: Article = {
  ...summaries['interaction-design-before-the-screen'],
  lead: {
    asset: 'ixd-final-prototype',
    alt: 'The final project details screen. On the left, the company plan item the project comes from. In the middle, the project with its priority and timeline, and a resource planning area where the AI suggests the skills needed and lists matching people with how busy they are next sprint. On the right, a live summary of the project with Save draft and Confirm project.',
    caption:
      'The end of the chain: the project details screen, where the skills needed, the people who match and how busy they are sit right next to the project, with a summary to check before confirming.',
    ratio: '2961 / 1769',
    src: finalPrototype,
    width: 2961,
    height: 1769,
  },
  intro: [
    'I used to think interaction design started when you turned a set of steps into screens.',
    'During my master’s, I was asked to do the opposite: design a whole experience from start to end without using any screen words. No buttons, drop-down menus, sidebars or layouts. Only what the user wants, what the system does, the choices, the other paths, and what should happen when something goes wrong.',
    'At first the rule felt fake. It became one of the most useful ways I learned to keep solving the problem separate from drawing the answer.',
    'The project was about a tool for planning who works on what. A project manager had to turn a request from the company plan into a real project, find people with the right skills, see how busy they were, sort out clashes, and commit to a plan that could actually work. The work ended up as sketches and an interactive prototype, but the most important design choices were made before any screen existed.',
  ],
  sections: [
    {
      id: 'brief',
      heading: 'A design plan sets the edges for making decisions',
      nav: 'The brief',
      blocks: [
        {
          kind: 'p',
          text: 'Before mapping any steps, I wrote a design plan using a method called BGPOSSTAL: Background, Goals, Problems, Outcomes, Scope, Stakeholders, Timelines, Artifacts, and Learnings.',
        },
        {
          kind: 'p',
          text: 'At first the method looked like a checklist for paperwork. In practice, it made different kinds of unclear things become clear.',
        },
        {
          kind: 'p',
          text: 'The background placed the problem in a company where people worked across several teams at once. The problems part linked what hurt to the reasons behind it and the tasks it affected. The outcomes part kept apart what should get better for users and what should get better for the business. The scope said which parts of planning the project would deal with, and which it would leave alone.',
        },
        {
          kind: 'p',
          text: 'For example, “seeing who is free” was too broad to guide the design. The plan broke it into more useful problems:',
        },
        {
          kind: 'list',
          items: [
            { text: 'project managers could not see who was free outside their own teams;' },
            { text: 'phrases like “50% available” meant different things to different people;' },
            { text: 'finding people with the right skills depended on memory and who you knew;' },
            { text: 'clashes were often found only after the work had started;' },
            { text: 'lots of different spreadsheets gave different planning numbers.' },
          ],
        },
        {
          kind: 'p',
          text: 'Those user problems led straight to business problems: projects running late, people’s time being wasted, burnout for the people who kept getting picked, planning that was good one time and bad the next, and a process that could not grow with the company.',
        },
        {
          kind: 'p',
          text: 'This stopped the answer from turning into just a list of people or a calendar tool. The plan made it clear the product had to help people see more, describe effort in the same way, spot clashes earlier, share work more fairly, and cut down the back and forth.',
        },
        {
          kind: 'p',
          text: 'It also made it clear who was in charge. Naming who leads, who approves, who needs to be told, what we would make and when, turned the work from an open design exercise into a clear way of making decisions.',
        },
      ],
    },
    {
      id: 'scenarios',
      heading: 'Mapping many situations stops you seeing only one path',
      nav: 'Scenario coverage',
      blocks: [
        {
          kind: 'p',
          text: 'The next step was not drawing the perfect journey. I mapped the main experiences for project managers and engineering managers, and then the normal, unusual, special, error and outside-influenced situations across them.',
        },
        {
          kind: 'p',
          text: 'Using CRUD, which stands for Create, Read, Update and Delete, as a reminder helped me find actions that are easy to forget when you only think about the main task. Creating a booking is one situation. Looking at existing bookings, changing effort, removing someone, handling old data and dealing with a clash are all different design jobs.',
        },
        {
          kind: 'p',
          text: 'The value of the map was that it was wide. The value of picking what mattered most was holding back.',
        },
        {
          kind: 'p',
          text: 'Not every situation belonged in the first version. I combined the most important ones into one story: a project manager turns a request from the company plan into a clear project, works out the skills it needs, looks at people based on how busy they really are, sees clashes before putting anyone on it, and confirms a plan that works for both the project and the team’s wellbeing.',
        },
        {
          kind: 'p',
          text: 'That one story became the bridge between the big problem and ideas for the steps. It had enough detail to include risk and feelings, but was still open enough to allow several different ways for the system to work.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ixd-brief-to-scenario',
            alt: 'Three steps in a row: the BGPOSSTAL design plan, then the map of experiences and situations, then the one combined story we chose.',
            caption:
              'From the plan, to the map of situations, to one combined story. Redrawn so you can read it; the original spreadsheet is too small to read on a page and says less anyway.',
            ratio: '16 / 7',
          },
        },
      ],
    },
    {
      id: 'commitment',
      heading: 'Start with the promise, not the feature',
      nav: 'The commitment',
      blocks: [
        {
          kind: 'p',
          text: 'The obvious way to read the project was “design the steps for putting people on projects.” That describes the task, but not the responsibility.',
        },
        {
          kind: 'p',
          text: 'The project manager was making a promise for a whole team. A bad choice could give people too much work, put the project at risk, and cause burnout across several projects. So the user’s goal was not just to assign people. It was:',
        },
        {
          kind: 'quote',
          text: 'Create a project from the company plan and put the right people on it, in a way that can really work, spots clashes, and matches how busy the team actually is.',
        },
        {
          kind: 'p',
          text: 'My goal as a designer was to plan the journey so that risks showed up before the promise became expensive to undo.',
        },
        {
          kind: 'p',
          text: 'That goal guided every choice about the steps. Whenever two options seemed just as easy to use, I asked which one helped the project manager see earlier whether the plan could work, and act with more confidence.',
        },
        {
          kind: 'p',
          text: 'This changed what I was designing. I was not arranging features. I was putting decisions in order.',
        },
      ],
    },
    {
      id: 'alternatives',
      heading: 'Trying different sets of steps shows the real trade-offs',
      nav: 'Three workflows',
      blocks: [
        { kind: 'p', text: 'I tried three different ways the system could work.' },
        { kind: 'h3', text: 'Version 1: search by hand, fix clashes afterwards' },
        {
          kind: 'p',
          text: 'The project manager searched for people by hand, assigned them, and dealt with clashes after they appeared.',
        },
        {
          kind: 'p',
          text: 'This kept the project manager in control and followed a way of planning they knew. But it left all the thinking to the user. Clashes were found late, so every problem meant redoing work. It worked when things were simple, but became risky as the number of projects and connections grew.',
        },
        { kind: 'h3', text: 'Version 2: suggested people, fix clashes afterwards' },
        {
          kind: 'p',
          text: 'The system suggested people based on skills and who was free, which made choosing people faster. But clashes still only showed up after someone had been assigned.',
        },
        {
          kind: 'p',
          text: 'This version was faster but did not make people more confident. It also added a new risk: the project manager might accept a suggestion without understanding why it was a good one or what it would affect.',
        },
        { kind: 'h3', text: 'Version 3: plan ahead and spot clashes first' },
        {
          kind: 'p',
          text: 'The final version split planning, checking and committing. First the project manager made the scope, importance, timeline and skills clear. Then the system showed suitable people and possible clashes before anyone was assigned. The user could look at other options, change the plan, and confirm only when it could really work.',
        },
        {
          kind: 'p',
          text: 'This took a little more work at the start and needed good information about skills and how busy people are. But it moved the most expensive risks earlier, cut down going back and forth, and kept a person responsible for the final choice.',
        },
        {
          kind: 'p',
          text: 'I chose version 3 because it did not just make choosing people faster. It helped the user make a better promise.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ixd-three-workflow-variations',
            // Stacked, not side by side, and nothing is annotated: the
            // difference is structural. In the first two, Conflict alert
            // comes after Assign task. In the third it comes before.
            alt: 'The three sets of steps, one above the other. Versions one and two go: company plan overview, find a person, assign a task, clash warning, fix the clash, project overview, so clashes show up after someone is assigned. Version three, marked as the chosen one, goes: company plan overview, project details, see possible clashes, AI suggests people, project overview, so clashes show up before anyone is assigned.',
            caption:
              'The same job, three times. What makes them different is not speed, but when the risk becomes visible.',
            ratio: '3325 / 2065',
            src: threeVariations,
            width: 3325,
            height: 2065,
          },
        },
      ],
    },
    {
      id: 'sequence',
      heading: 'The order of steps is a design choice',
      nav: 'Sequence',
      blocks: [
        { kind: 'p', text: 'The final journey followed a careful order:' },
        {
          kind: 'list',
          ordered: true,
          items: [
            { text: 'Look at the requests in the company plan and decide which should become a project.' },
            { text: 'Set the scope, importance, timeline, goals and skills needed.' },
            { text: 'Look at suitable people, with how busy they are and what they can do.' },
            { text: 'Check possible clashes before confirming who is on the project.' },
            { text: 'Look at the whole project to see if it can really work.' },
            { text: 'Fix any problems left, or make the promise.' },
          ],
        },
        {
          kind: 'p',
          text: 'None of these steps is unusual on its own. The design value came from the order they are in.',
        },
        {
          kind: 'p',
          text: 'Moving clash warnings earlier turned the system from something that spots problems into something that helps you decide. Keeping suggestions separate from confirming stopped the AI from becoming the boss. And keeping a final check of the whole plan created a clear moment where someone takes responsibility.',
        },
        {
          kind: 'p',
          text: 'Interaction design often works like this. A better experience does not always need another feature. Sometimes the fix is moving information, feedback or a check to the moment when it can still change the decision.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ixd-detailed-workflow',
            // Order corrected against the board: conflict review comes
            // before resource suggestion, which is the point of the variant.
            alt: 'The chosen steps in full: company plan overview, project details, see possible clashes, AI suggests people, and project overview, with ten numbered error cases that send the user back to the screen where they can be fixed, and a column under each screen naming its goal, what it does, and the questions it left open.',
            caption:
              'The final steps in full. Checking sits between looking around and committing, which is the whole idea of the project in one diagram.',
            ratio: '3452 / 1587',
            src: finalWorkflow,
            width: 3452,
            height: 1587,
          },
        },
      ],
    },
    {
      id: 'ai-role',
      heading: 'AI should cut down searching, not replace judgment',
      nav: 'What the AI does',
      blocks: [
        {
          kind: 'p',
          text: 'The project included AI suggestions for people and help with timelines. The easiest version would have picked a whole team automatically. I kept the AI as a helper on purpose.',
        },
        { kind: 'p', text: 'The system could:' },
        {
          kind: 'list',
          items: [
            { text: 'find people whose skills matched the project;' },
            { text: 'show how busy people are and when they are free;' },
            { text: 'warn about timelines that are too tight, or work that overlaps;' },
            { text: 'suggest other combinations of people;' },
            { text: 'explain why a clash might happen.' },
          ],
        },
        {
          kind: 'p',
          text: 'The project manager still looked at the proof, changed the effort and dates, and made the final choice.',
        },
        {
          kind: 'p',
          text: 'This balance matters because suggestions can quietly move responsibility away from people. If a suggestion is shown as the default and its reasons are hidden, people may accept it because changing it feels harder than trusting it.',
        },
        {
          kind: 'p',
          text: 'The goal was not to make the AI seem clever. It was to make it easier to look at the right information, while keeping people in charge.',
        },
      ],
    },
    {
      id: 'screens',
      heading: 'Steps become real when they are turned into screens',
      nav: 'Into screens',
      blocks: [
        {
          kind: 'p',
          text: 'Once we had agreed on the steps, I sorted them into main screens and smaller screens. This helped me guess how much work each would be, and made me decide what each step had to achieve.',
        },
        { kind: 'p', text: 'For every step, I wrote down:' },
        {
          kind: 'list',
          items: [
            { text: 'what the user wants to do;' },
            { text: 'the information and features needed;' },
            { text: 'the main action that moves the journey forward;' },
            { text: 'design problems and chances to improve;' },
            { text: 'possible errors and how to recover from them.' },
          ],
        },
        {
          kind: 'p',
          text: 'Only then did I start sketching screens, using Six-Ups: six quick, different layouts for the same screen.',
        },
        {
          kind: 'p',
          text: 'This step showed gaps that the steps on paper had hidden. A big step like “check clashes” became much harder once I had to show several people, overlapping dates, reasons for the risk, other options, and what would happen with each choice.',
        },
        {
          kind: 'p',
          text: 'So sketching was not about drawing the steps. It was a test of whether the steps still worked with real information.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ixd-workflow-to-wireframe',
            alt: 'Six numbered layouts for the same project details step, each with the same skill suggestions and matching people: 1, a form first; 2, sections in cards; 3, a step-by-step wizard; 4, a canvas with an AI helper panel; 5, review and edit with a project summary; 6, a small pop-up form.',
            caption:
              'Six layouts for one step. The final screen took the canvas from layout 4 and the summary panel from layout 5.',
            ratio: '3840 / 1598',
            src: sixUps,
            width: 3840,
            height: 1598,
          },
        },
      ],
    },
    {
      id: 'states',
      heading: 'Designing every screen state is designing how honest the product is',
      nav: 'States',
      blocks: [
        {
          kind: 'p',
          text: 'The project needed more than the path where everything goes right. I thought about what should happen when there was:',
        },
        {
          kind: 'list',
          items: [
            { text: 'no request in the company plan;' },
            { text: 'nobody with the skills needed;' },
            { text: 'only one suitable person, or far too many results;' },
            { text: 'missing project information;' },
            { text: 'old or missing information about how busy people are;' },
            { text: 'a clash the user could not fix;' },
            { text: 'the system or the suggestions failing;' },
            { text: 'a finished and confirmed project.' },
          ],
        },
        {
          kind: 'p',
          text: 'Thinking through nothing, loading, none, one, some, too many, wrong, right and done changed the sketches. It changed not only the messages, but also the data needed, the actions available, and whether the user could carry on safely.',
        },
        {
          kind: 'p',
          text: 'An error screen is not just red text. It decides how the user and the system carry on together after something unexpected happens.',
        },
      ],
    },
    {
      id: 'convergence',
      heading: 'Choosing needs clear reasons',
      nav: 'Convergence',
      blocks: [
        {
          kind: 'p',
          text: 'Coming up with options is easy to celebrate, because you can see lots of variety. The harder design work is deciding why one of them should win.',
        },
        {
          kind: 'p',
          text: 'Writing the good and bad points of each set of steps made me explain my reasons. I judged each option against what the user wants, the risk to the business, how much thinking it asks for, trust, whether it can grow, and when clashes are spotted.',
        },
        { kind: 'p', text: 'This helped me avoid two common mistakes:' },
        {
          kind: 'list',
          items: [
            { text: 'choosing the fastest steps even when they caused risk later;' },
            {
              text: 'choosing the most advanced steps just because they had more automation.',
            },
          ],
        },
        {
          kind: 'p',
          text: 'The chosen steps were not perfect. They added checks and depended on the company having correct information. But the trade-offs matched how serious the user’s decision was.',
        },
      ],
    },
    {
      id: 'process',
      heading: 'The process I would use again',
      nav: 'What I take forward',
      blocks: [
        { kind: 'p', text: 'For future interaction design work, I would follow these steps:' },
        {
          kind: 'list',
          ordered: true,
          items: [
            { text: 'Write what the user wants as a result, not as a task.' },
            { text: 'Find the promise or risk the user is dealing with.' },
            { text: 'Create really different sets of steps, not the same one with small changes.' },
            { text: 'Look at where each set of steps puts effort, doubt and ways to recover.' },
            { text: 'Choose using clear reasons.' },
            { text: 'Describe the goal of each step, and what the system does, without screen words.' },
            { text: 'Map the main screens, the smaller screens and the main actions.' },
            { text: 'Write down what can go wrong and what the user can do next.' },
            { text: 'Try several screen layouts before choosing one.' },
            { text: 'Build a mock-up of the main path and the situations that could break it.' },
          ],
        },
        {
          kind: 'quote',
          text: 'The biggest change in how I work was understanding that screens are proof of interaction design; they are not the interaction design itself.',
        },
        {
          kind: 'p',
          text: 'The work starts earlier, when we decide what the system should know, what the user should understand, when risk should become visible, and who stays responsible for the final action.',
        },
      ],
    },
  ],
  studio: {
    body: 'This article is based on my master’s interaction design course, where I built a planning journey from a BGPOSSTAL design plan and a map of situations, through combined stories, three sets of steps, a detailed map of how everything works, error screens, Six-Up sketches, digital sketches and an interactive prototype.',
  },
  meta: {
    title: 'Design Before the Screen',
    description:
      'A practical look at going from a design plan and many situations to steps, screen states, recovering from errors, and sketches.',
  },
};
