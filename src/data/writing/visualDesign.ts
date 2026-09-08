import { summaries } from './catalogue';
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
    alt: 'The converged Biller Hero template dashboard, with template status and system health above the operational detail, and client billing separated from internal billing configuration.',
    caption:
      'The converged dashboard. Status and system health come first, because in this product the thing a person needs earliest is whether anything is already wrong.',
    ratio: '16 / 9',
  },
  intro: [
    'A concept board can easily become a collection of images a designer likes.',
    'That was the assumption I had to unlearn while developing a visual direction for Biller Hero, a healthcare billing platform used by administrators to manage payment rules across practices and clients.',
    'The users were not browsing, exploring, or expressing themselves. They were changing rules that could affect revenue, compliance, and live payment flows across several organisations. Their emotional context was responsibility paired with risk.',
    'The visual-design question was therefore not, “What style should this product have?” It was, “What should the interface help a person feel and understand before they make a consequential change?”',
  ],
  sections: [
    {
      id: 'consequence',
      heading: 'Start with the emotional consequence of the task',
      nav: 'The consequence',
      blocks: [
        {
          kind: 'p',
          text: 'Biller Hero used templates to define billing logic once and apply it across different healthcare practices. A partner-level administrator could deploy an updated template to a location that already had active rules. A client-level administrator could change the fee applied to a specific customer’s payments.',
        },
        {
          kind: 'p',
          text: 'In both cases, small changes could have broad consequences. The user needed to know which rules were active, where they applied, what would change, and whether the new configuration would behave as intended.',
        },
        { kind: 'p', text: 'This produced a set of emotional needs:' },
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
          text: 'These statements connected visual direction to the lived pressure of the task. They also helped separate useful design qualities from fashionable ones.',
        },
      ],
    },
    {
      id: 'concepts',
      heading: 'Separate usability concepts from look and feel',
      nav: 'Two kinds of concept',
      blocks: [
        {
          kind: 'p',
          text: 'One of the most helpful parts of the process was defining two different kinds of concepts.',
        },
        { kind: 'p', text: 'Usability concepts described how the product should behave:' },
        {
          kind: 'list',
          items: [
            {
              lead: 'Clarity',
              text: 'Users understand which rules are active, where they apply, and what will change.',
            },
            {
              lead: 'Confidence',
              text: 'The system supports certainty before revenue- or compliance-sensitive decisions.',
            },
            {
              lead: 'Control',
              text: 'Users feel they are directing the system rather than reacting to it.',
            },
            {
              lead: 'Flexibility',
              text: 'Exceptions can be handled precisely without destabilising the wider structure.',
            },
            {
              lead: 'Safety',
              text: 'The interface prevents accidental deployment, unnoticed changes, and unintended financial impact.',
            },
          ],
        },
        {
          kind: 'p',
          text: 'Look-and-feel concepts described how that behaviour should be perceived: trustworthy, transparent, reliable, precise, calm, responsible, and empowering.',
        },
        {
          kind: 'p',
          text: 'The distinction stopped visual design from carrying responsibilities that belonged to interaction design. A muted color palette cannot make a destructive action safe. Typography cannot explain the scope of an override. But visual hierarchy, tone, contrast, spacing, and composition can reinforce the behavioural safeguards already present.',
        },
      ],
    },
    {
      id: 'theme',
      heading: 'A theme should eliminate options',
      nav: 'The theme',
      blocks: [
        {
          kind: 'p',
          text: 'I combined the concepts into broader directions and ultimately selected Responsible Authority as the primary theme.',
        },
        {
          kind: 'p',
          text: 'The phrase became a decision filter. “Responsible” meant changes should feel considered, traceable, and safe. “Authority” meant the user should feel capable of directing a professional system, not timid or dependent on it.',
        },
        {
          kind: 'p',
          text: 'The theme ruled out several attractive but inappropriate directions. A playful visual language could undermine the seriousness of financial changes. A dense power-user dashboard could signal capability while increasing anxiety. An excessively minimal interface could hide context users needed before acting.',
        },
        {
          kind: 'p',
          text: 'I borrowed selected qualities from a softer direction, Calm Assurance, meaning lighter surfaces, readable typography, and generous spacing, without losing the stronger governance tone.',
        },
        {
          kind: 'p',
          text: 'That combination was important. Authority without calm can feel intimidating. Calm without authority can feel passive. The final direction needed both.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'vxd-concept-directions',
            alt: 'The two theme territories, Responsible Authority and Calm Assurance, shown side by side with the chosen synthesis beneath them.',
            caption:
              'Two territories and the synthesis between them. The theme is useful mainly for what it refuses.',
            ratio: '16 / 8',
          },
        },
      ],
    },
    {
      id: 'boards',
      heading: 'Concept boards are alignment tools, not decoration',
      nav: 'Concept boards',
      blocks: [
        {
          kind: 'p',
          text: 'Photography, interface references, color, typography, composition, and iconography were selected to communicate the intended qualities, not simply to match the healthcare domain.',
        },
        {
          kind: 'p',
          text: 'For each reference, I documented what it contributed. Did the composition create focus? Did the type feel precise without becoming cold? Did contrast distinguish risk from routine information? Did the interface make system state visible without creating alarm?',
        },
        {
          kind: 'p',
          text: 'This made the concept board more useful in a review. A stakeholder could disagree with the rationale, compare alternatives, or point to a mismatch. The discussion did not have to collapse into personal taste.',
        },
        {
          kind: 'p',
          text: 'The board became a provisional contract: if we agree the product should feel calm, controlled, and professionally accountable, later screen decisions can be evaluated against that agreement.',
        },
        {
          kind: 'p',
          text: 'I did not conduct a formal stakeholder-alignment study during the coursework, so I would not claim that the board created organisational consensus. What it did demonstrate was a structured way to make alignment possible.',
        },
      ],
    },
    {
      id: 'variation',
      heading: 'Variation is valuable only when it tests a decision',
      nav: 'Variation',
      blocks: [
        {
          kind: 'p',
          text: 'For the course project, I selected the template dashboard as the hero screen and created several distinct layout directions.',
        },
        {
          kind: 'p',
          text: 'Each variation changed more than surface styling. The alternatives tested different answers to questions such as:',
        },
        {
          kind: 'list',
          items: [
            { text: 'Should system health or operational detail appear first?' },
            { text: 'How much performance information can the user scan without losing focus?' },
            {
              text: 'Should client billing and internal billing appear together or in clearly separated zones?',
            },
            { text: 'How prominent should high-impact actions feel?' },
            { text: 'What visual rhythm communicates control without becoming rigid?' },
          ],
        },
        {
          kind: 'p',
          text: 'I evaluated each direction against five criteria: clarity, confidence, control, focus, and safety.',
        },
        {
          kind: 'p',
          text: 'The final design was a convergence rather than a wholesale selection. It used the calm structure of one layout, simplified performance visibility from another, and adopted clearer separation between client templates and internal billing configuration.',
        },
        {
          kind: 'p',
          text: 'This was a useful correction to the idea that exploration ends with picking a winner. Sometimes the right design emerges by understanding why each alternative worked, then combining strengths without carrying forward their weaknesses.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'vxd-hero-variations',
            alt: 'Three hero-dashboard alternatives for the template screen, each annotated with the hypothesis it tested.',
            caption:
              'Three hero variations, each with the question it was built to answer. Convergence took something from all three.',
            ratio: '16 / 8',
          },
        },
      ],
    },
    {
      id: 'hierarchy',
      heading: 'Visual hierarchy is risk architecture',
      nav: 'Hierarchy as risk',
      blocks: [
        {
          kind: 'p',
          text: 'The final dashboard prioritised template status and system health before detailed operational information. Secondary content was softened. Revenue and profit were combined into one clearer comparison. Client billing templates and internal billing configuration were separated into distinct zones.',
        },
        { kind: 'p', text: 'These decisions were visual, but not merely aesthetic:' },
        {
          kind: 'list',
          items: [
            { text: 'Prioritising status made risk visible earlier.' },
            {
              text: 'Reducing clutter lowered the chance that secondary information competed with a consequential issue.',
            },
            { text: 'Combining related metrics reduced visual weight and comparison effort.' },
            {
              text: 'Separating responsibilities helped users understand which rules affected clients and which affected the organisation itself.',
            },
            {
              text: 'Keeping important actions visible but visually restrained supported deliberate action rather than urgency theatre.',
            },
          ],
        },
        {
          kind: 'quote',
          text: 'Visual hierarchy determines what a person notices, compares, and treats as consequential. In a high-stakes system, that makes hierarchy part of the product’s risk architecture.',
        },
      ],
    },
    {
      id: 'workflow',
      heading: 'A direction is not finished until it survives the workflow',
      nav: 'Across the workflow',
      blocks: [
        {
          kind: 'p',
          text: 'A strong hero screen can hide a weak design language. The course project therefore required the selected direction to extend across complete workflows and multiple states: empty, error, active, and completed.',
        },
        {
          kind: 'p',
          text: 'This tested whether the visual foundation was systematic enough to handle different information densities and emotional moments.',
        },
        {
          kind: 'p',
          text: 'Trust, for example, could not mean the same visual treatment everywhere. A routine saved state should feel quiet. A configuration conflict should be unmistakable without appearing catastrophic. A high-impact overwrite should create a deliberate pause. An empty state should guide the user without making an enterprise product feel casual.',
        },
        {
          kind: 'p',
          text: 'Consistency did not mean making every screen look alike. It meant applying the same principles to different conditions.',
        },
      ],
    },
    {
      id: 'process',
      heading: 'The process I would reuse',
      nav: 'What carries forward',
      blocks: [
        { kind: 'p', text: 'I would now approach visual direction through these questions:' },
        {
          kind: 'list',
          ordered: true,
          items: [
            { text: 'What responsibility is the user carrying?' },
            { text: 'What should they understand and feel before acting?' },
            { text: 'Which qualities describe behaviour, and which describe perception?' },
            { text: 'What theme can guide decisions and rule out unsuitable options?' },
            { text: 'What hypothesis does each visual variation test?' },
            { text: 'Which evaluation criteria are more useful than personal preference?' },
            { text: 'Can the direction handle risk, error, empty, and completion states?' },
            { text: 'Can another designer explain why the system looks and behaves this way?' },
          ],
        },
        {
          kind: 'p',
          text: 'The project taught me that visual design is not the final coat applied after the product has been solved. It is a system for directing attention, communicating consequence, and helping people feel appropriately confident in what they are about to do.',
        },
        {
          kind: 'p',
          text: 'Good visual design does not remove responsibility from a high-stakes task. It makes that responsibility easier to carry.',
        },
      ],
    },
  ],
  studio: {
    body: 'This article is based on graduate visual-design coursework for Biller Hero, covering product framing, usability and look-and-feel concepts, theme development, concept boards, hero-screen variations, evaluated convergence, workflow application, UI states, and a high-fidelity prototype.',
  },
  meta: {
    title: 'Visual Design Is a Decision System',
    description:
      'How responsibility, risk, concept boards, and evaluated variation shaped a healthcare billing interface.',
  },
};
