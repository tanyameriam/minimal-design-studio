import { summaries } from './catalogue';
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
    alt: 'A resource-planning screen from the prototype, showing a project’s required skills alongside candidate people, their capacity, and flagged conflicts.',
    caption:
      'The end of the chain: a planning screen where capacity and conflict sit next to the staffing decision instead of arriving after it.',
    ratio: '16 / 9',
  },
  intro: [
    'I used to think interaction design began when a workflow became a set of screens.',
    'During my master’s, I was asked to do the opposite: define an end-to-end experience without using interface language. No buttons, dropdowns, sidebars, or layouts. Only user goals, system behaviour, decisions, alternative paths, and what should happen when something goes wrong.',
    'The constraint initially felt artificial. It became one of the most useful ways I learned to separate solving the problem from drawing the solution.',
    'The project focused on a resource-planning platform. A project manager had to turn roadmap demand into a defined project, find people with the right skills, understand capacity, resolve conflicts, and commit to a feasible plan. The work eventually became wireframes and an interactive prototype, but the most consequential design decisions happened before a screen existed.',
  ],
  sections: [
    {
      id: 'brief',
      heading: 'A design brief is a boundary for decision-making',
      nav: 'The brief',
      blocks: [
        {
          kind: 'p',
          text: 'Before mapping a workflow, I wrote a design brief using the BGPOSSTAL framework: Background, Goals, Problems, Outcomes, Scope, Stakeholders, Timelines, Artifacts, and Learnings.',
        },
        {
          kind: 'p',
          text: 'The framework initially looked like a documentation checklist. In practice, it forced different kinds of ambiguity to become explicit.',
        },
        {
          kind: 'p',
          text: 'The background located the problem inside a matrix organisation where people worked across platform and client teams. The problems connected pain points to root causes and affected activities. The outcomes separated what should improve for users from what should improve for the business. The scope defined which parts of resource planning the project would address and which parts it would leave alone.',
        },
        {
          kind: 'p',
          text: 'For example, “resource visibility” was too broad to guide design. The brief broke it into more useful problems:',
        },
        {
          kind: 'list',
          items: [
            { text: 'project managers could not see availability outside their immediate teams;' },
            { text: 'effort terms such as “50% available” were interpreted differently;' },
            { text: 'skill discovery depended on memory and personal relationships;' },
            { text: 'conflicts were often found only after work had begun;' },
            { text: 'multiple spreadsheets created inconsistent planning data.' },
          ],
        },
        {
          kind: 'p',
          text: 'Those user problems connected directly to business consequences: delivery delays, inefficient use of capacity, burnout among repeatedly selected employees, inconsistent planning quality, and a process that would not scale with the organisation.',
        },
        {
          kind: 'p',
          text: 'This prevented the solution from becoming a generic people directory or scheduling tool. The brief established that the product had to improve visibility, standardise effort, move conflict detection earlier, support fairer staffing, and reduce coordination overhead.',
        },
        {
          kind: 'p',
          text: 'It also made ownership explicit. Naming a driver, approver, informed stakeholders, planned artifacts, and timeline turned the work from an open design exercise into a bounded decision process.',
        },
      ],
    },
    {
      id: 'scenarios',
      heading: 'Scenario mapping protects the product from tunnel vision',
      nav: 'Scenario coverage',
      blocks: [
        {
          kind: 'p',
          text: 'The next step was not drawing the ideal journey. I mapped the major experiences for project and engineering managers, then developed main, atypical, special, error, and externally influenced scenarios across them.',
        },
        {
          kind: 'p',
          text: 'Using CRUD, meaning Create, Read, Update, and Delete, as a coverage prompt helped reveal interactions that are easy to ignore when a designer thinks only about the main task. Creating an allocation is one scenario. Reading existing commitments, updating effort, removing an assignment, handling stale data, and responding to a conflict are different design obligations.',
        },
        {
          kind: 'p',
          text: 'The value of the scenario map was breadth. The value of prioritisation was restraint.',
        },
        {
          kind: 'p',
          text: 'Not every scenario belonged in the first workflow. I combined the most consequential ones into a consolidated narrative: a project manager turns roadmap demand into a scoped project, identifies the skills required, evaluates people using real capacity, sees conflicts before assignment, and confirms a plan that is feasible for both delivery and team health.',
        },
        {
          kind: 'p',
          text: 'That consolidated scenario became the bridge between the broad problem space and workflow ideation. It was detailed enough to include risk and emotion, but still open enough to allow several different system behaviours.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ixd-brief-to-scenario',
            alt: 'A three-step progression: the BGPOSSTAL design brief, then the experience and scenario map, then the prioritised consolidated scenario.',
            caption:
              'Brief to scenario map to one consolidated scenario. Redrawn for reading; the source spreadsheet is unreadable at page scale and says less anyway.',
            ratio: '16 / 7',
          },
        },
      ],
    },
    {
      id: 'commitment',
      heading: 'Begin with the commitment, not the feature',
      nav: 'The commitment',
      blocks: [
        {
          kind: 'p',
          text: 'The obvious interpretation of the project was “design a staffing workflow.” That describes the activity, but not the responsibility.',
        },
        {
          kind: 'p',
          text: 'The project manager was making a commitment on behalf of a team. A weak decision could create over-allocation, delivery risk, and burnout across several projects. The user goal was therefore not simply to assign people. It was:',
        },
        {
          kind: 'quote',
          text: 'Create and staff a project from the roadmap in a way that is feasible, conflict-aware, and aligned with real team capacity.',
        },
        {
          kind: 'p',
          text: 'My designer goal was to structure the journey so risks appeared before the commitment became expensive to reverse.',
        },
        {
          kind: 'p',
          text: 'That goal became an anchor for every workflow decision. Whenever two options seemed equally usable, I asked which one helped the project manager understand feasibility earlier and act with more confidence.',
        },
        {
          kind: 'p',
          text: 'This changed the unit of design. I was not arranging features. I was sequencing decisions.',
        },
      ],
    },
    {
      id: 'alternatives',
      heading: 'Workflow alternatives reveal the real trade-offs',
      nav: 'Three workflows',
      blocks: [
        { kind: 'p', text: 'I explored three different ways the system could behave.' },
        { kind: 'h3', text: 'Variation 1: manual discovery, reactive conflict resolution' },
        {
          kind: 'p',
          text: 'The project manager manually searched for people, assigned them, and handled conflicts after they appeared.',
        },
        {
          kind: 'p',
          text: 'This preserved control and followed a familiar planning model. But it placed the cognitive burden on the user. Conflict detection happened late, so every problem created rework. The workflow worked in a simple environment but became risky as the number of projects and dependencies grew.',
        },
        { kind: 'h3', text: 'Variation 2: suggested resources, reactive conflict resolution' },
        {
          kind: 'p',
          text: 'The system recommended people based on skills and availability, making staffing faster. However, capacity conflicts were still surfaced after the assignment decision.',
        },
        {
          kind: 'p',
          text: 'This variation improved speed without improving confidence. It also introduced a new risk: the project manager might accept a recommendation without understanding why it was appropriate or what it would affect.',
        },
        { kind: 'h3', text: 'Variation 3: preventive, conflict-aware planning' },
        {
          kind: 'p',
          text: 'The final variation separated planning, validation, and commitment. The project manager first clarified scope, priority, timeline, and skill needs. The system then surfaced suitable people and potential conflicts before assignment. The user could explore alternatives, adjust the plan, and confirm only when it was feasible.',
        },
        {
          kind: 'p',
          text: 'This required slightly more work upfront and depended on good skills and capacity data. But it moved the most expensive risks earlier in the journey, reduced backtracking, and kept the human responsible for the final decision.',
        },
        {
          kind: 'p',
          text: 'I chose Variation 3 because it did not merely make staffing faster. It helped the user make a better commitment.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ixd-three-workflow-variations',
            alt: 'The three workflow variations side by side, each marked at the point where risk becomes visible: after assignment, after recommendation, and before commitment.',
            caption:
              'The same job, three times. What separates them is not speed but where the risk becomes visible.',
            ratio: '16 / 8',
          },
        },
      ],
    },
    {
      id: 'sequence',
      heading: 'Sequence is a design intervention',
      nav: 'Sequence',
      blocks: [
        { kind: 'p', text: 'The final journey followed a deliberate order:' },
        {
          kind: 'list',
          ordered: true,
          items: [
            { text: 'Review roadmap demand and decide what should become a project.' },
            { text: 'Define scope, priority, timeline, goals, and required skills.' },
            { text: 'Explore suitable resources with capacity and skill context.' },
            { text: 'Review possible conflicts before confirming assignments.' },
            { text: 'Evaluate the complete project for feasibility.' },
            { text: 'Resolve remaining issues or make the commitment.' },
          ],
        },
        {
          kind: 'p',
          text: 'None of those stages is unusual on its own. The design value came from their sequence.',
        },
        {
          kind: 'p',
          text: 'Moving conflict awareness earlier changed the system from a detector into a decision aid. Separating recommendation from confirmation prevented the AI from becoming the authority. Keeping a final feasibility review created a clear moment of accountability.',
        },
        {
          kind: 'p',
          text: 'Interaction design often works this way. A better experience does not always require another feature. Sometimes the intervention is moving information, feedback, or validation to the moment when it can still change the decision.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ixd-detailed-workflow',
            alt: 'The chosen end-to-end workflow, from roadmap demand through scoping, resource exploration, conflict review, and feasibility evaluation to commitment.',
            caption:
              'The chosen workflow in full. Validation sits between exploration and commitment, which is the whole argument of the project in one diagram.',
            ratio: '16 / 9',
          },
        },
      ],
    },
    {
      id: 'ai-role',
      heading: 'AI should reduce search, not remove judgment',
      nav: 'The AI’s role',
      blocks: [
        {
          kind: 'p',
          text: 'The project included AI-supported resource suggestions and timeline guidance. The easiest version would have automatically selected a team. I intentionally kept the AI in a supporting role.',
        },
        { kind: 'p', text: 'The system could:' },
        {
          kind: 'list',
          items: [
            { text: 'identify people whose skills matched the project;' },
            { text: 'make capacity and availability visible;' },
            { text: 'flag unrealistic timelines or overlapping commitments;' },
            { text: 'suggest alternative staffing combinations;' },
            { text: 'explain why a conflict might occur.' },
          ],
        },
        {
          kind: 'p',
          text: 'The project manager still reviewed the evidence, adjusted effort and dates, and made the final assignment.',
        },
        {
          kind: 'p',
          text: 'This balance matters because recommendation interfaces can quietly shift responsibility. If a suggestion is presented as the default and its reasoning is hidden, people may accept it because correcting it feels harder than trusting it.',
        },
        {
          kind: 'p',
          text: 'The goal was not to make the AI feel intelligent. It was to lower the effort required to consider the right information while preserving human authority.',
        },
      ],
    },
    {
      id: 'screens',
      heading: 'Workflows become real when translated into screens',
      nav: 'Into screens',
      blocks: [
        {
          kind: 'p',
          text: 'After converging on the workflow, I classified stages as unique screens and sub-screens. This supported effort estimation and forced me to define what each stage had to achieve.',
        },
        { kind: 'p', text: 'For every stage, I documented:' },
        {
          kind: 'list',
          items: [
            { text: 'the user’s goal;' },
            { text: 'the information and functionality required;' },
            { text: 'the primary action that moved the journey forward;' },
            { text: 'relevant design problems and opportunities;' },
            { text: 'possible errors and recovery actions.' },
          ],
        },
        {
          kind: 'p',
          text: 'Only then did I move into screen-level ideation using Six-Ups, several quick structural alternatives for the same screen.',
        },
        {
          kind: 'p',
          text: 'This transition exposed gaps that the abstract workflow had hidden. A high-level step such as “review conflicts” became more demanding once I had to represent multiple people, overlapping dates, reasons for risk, alternative actions, and the consequences of each choice.',
        },
        {
          kind: 'p',
          text: 'Wireframing was therefore not a task of illustrating the workflow. It was a test of whether the workflow could survive contact with real information.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ixd-workflow-to-wireframe',
            alt: 'One stage shown at three levels: the workflow statement, six quick Six-Up structural alternatives, and the converged digital wireframe.',
            caption:
              'One stage, three altitudes. The Six-Ups exist to find out what the workflow statement quietly left undecided.',
            ratio: '16 / 8',
          },
        },
      ],
    },
    {
      id: 'states',
      heading: 'Designing states is designing the product’s honesty',
      nav: 'States',
      blocks: [
        {
          kind: 'p',
          text: 'The project required more than the happy path. I considered what the experience should do when there was:',
        },
        {
          kind: 'list',
          items: [
            { text: 'no roadmap demand;' },
            { text: 'no person matching the required skills;' },
            { text: 'one suitable resource or too many results;' },
            { text: 'incomplete project information;' },
            { text: 'stale or unavailable capacity data;' },
            { text: 'a conflict the user could not resolve;' },
            { text: 'a system or recommendation failure;' },
            { text: 'a completed and confirmed project.' },
          ],
        },
        {
          kind: 'p',
          text: 'Thinking through nothing, loading, none, one, some, too many, incorrect, correct, and done states changed the wireframes. It affected not only feedback messages but also the data required, available actions, and whether the user could continue safely.',
        },
        {
          kind: 'p',
          text: 'An error state is not simply red text. It is a definition of how the relationship between the user and the system continues after something unexpected happens.',
        },
      ],
    },
    {
      id: 'convergence',
      heading: 'Convergence needs criteria',
      nav: 'Convergence',
      blocks: [
        {
          kind: 'p',
          text: 'Creating alternatives is easy to celebrate because it produces visible variety. The harder design work is deciding why one direction should survive.',
        },
        {
          kind: 'p',
          text: 'Writing pros and cons for each workflow forced me to make the reasoning explicit. I evaluated options against the user goal, business risk, cognitive load, trust, scalability, and the timing of conflict detection.',
        },
        { kind: 'p', text: 'This helped me avoid two common traps:' },
        {
          kind: 'list',
          items: [
            { text: 'choosing the fastest flow even when it created risk later;' },
            {
              text: 'choosing the most sophisticated flow simply because it contained more automation.',
            },
          ],
        },
        {
          kind: 'p',
          text: 'The selected workflow was not perfect. It added validation steps and relied on accurate organisational data. But its trade-offs were aligned with the consequence of the user’s decision.',
        },
      ],
    },
    {
      id: 'process',
      heading: 'The process I would reuse',
      nav: 'What carries forward',
      blocks: [
        { kind: 'p', text: 'For future interaction-design work, I would use the following sequence:' },
        {
          kind: 'list',
          ordered: true,
          items: [
            { text: 'Write the user goal as an outcome, not an activity.' },
            { text: 'Identify the commitment or risk the user is managing.' },
            { text: 'Create genuinely different workflow models, not cosmetic variations.' },
            { text: 'Evaluate where each workflow places effort, uncertainty, and recovery.' },
            { text: 'Converge using explicit criteria.' },
            { text: 'Define stage goals and system behaviour without UI language.' },
            { text: 'Map unique screens, sub-screens, and primary actions.' },
            { text: 'Document error conditions and what the user can do next.' },
            { text: 'Generate multiple screen structures before choosing a layout.' },
            { text: 'Prototype the main path and the states that could invalidate it.' },
          ],
        },
        {
          kind: 'quote',
          text: 'The biggest change in my practice was understanding that screens are evidence of interaction design; they are not the interaction design itself.',
        },
        {
          kind: 'p',
          text: 'The work begins earlier, when we decide what the system should know, what the user should understand, when risk should become visible, and who remains responsible for the final action.',
        },
      ],
    },
  ],
  studio: {
    body: 'This article is based on graduate interaction-design coursework in which I developed a resource-planning journey from a BGPOSSTAL design brief and scenario map through prioritised consolidated scenarios, three workflow variations, detailed functional mapping, error states, Six-Up screen ideation, digital wireframes, and an interactive prototype.',
  },
  meta: {
    title: 'Interaction Design Before the Screen',
    description:
      'A practical reflection on moving from design brief and scenario coverage to workflows, states, recovery, and wireframes.',
  },
};
