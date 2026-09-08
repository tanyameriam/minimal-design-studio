import { summaries } from './catalogue';
import type { Article } from './types';

/**
 * The mind-map agent essay. Copy is the finished article, edited only for
 * the portfolio's punctuation rules; no claim in it has been strengthened.
 * The prototype was coursework and the piece says so twice, in the origin
 * line and in the studio note, because the argument does not need it to
 * have been production software.
 */
export const aiAgent: Article = {
  ...summaries['an-ai-agent-is-more-than-a-prompt'],
  lead: {
    asset: 'ai-agent-interface',
    alt: 'The mind-map agent interface, showing a clarification prompt, the generated map, and the quality and refinement panel beside it.',
    caption:
      'The revised agent: clarification before generation, and the quality criteria kept visible next to the map rather than behind a single score.',
    ratio: '16 / 9',
  },
  intro: [
    'When I began designing my first AI agent, I thought the difficult part would be writing the right prompt.',
    'The task sounded straightforward: take a topic, ask a model to break it into meaningful branches, and return a mind map. But a useful AI product has to do far more than generate a plausible response. It has to understand whether the input is usable, decide what should happen next, expose uncertainty, recover when something fails, and give the user enough control to judge the result.',
    'Building the agent changed my mental model. A prompt can produce an answer. An agent needs to support a journey.',
  ],
  sections: [
    {
      id: 'pipeline',
      heading: 'The first version proved the pipeline, not the experience',
      nav: 'The pipeline',
      blocks: [
        {
          kind: 'p',
          text: 'My first version was a webhook-driven workflow built in Make.com. A user could send a topic through a POST request. The workflow generated an ID, passed the topic to a language model, parsed the structured response, converted it into PlantUML, rendered a PDF, stored it in Google Drive, and logged clarification questions in Google Sheets.',
        },
        {
          kind: 'p',
          text: 'It worked from end to end. That mattered because I was coming from a design background and needed to understand how data moved through a functioning AI service, not only how the final interface looked.',
        },
        {
          kind: 'p',
          text: 'The system was intentionally modular. Input, reasoning, parsing, representation, rendering, storage, and feedback each had a distinct responsibility. If the model, rendering service, or storage layer changed, the entire flow would not need to be rebuilt.',
        },
        {
          kind: 'p',
          text: 'But functional completion exposed a more important problem: the system could successfully produce a poor result.',
        },
        {
          kind: 'p',
          text: 'A vague topic produced a vague map. A confident-looking structure could still contain weak logic. The workflow had no meaningful way to decide whether the output was good enough, and the user had no real way to steer it after generation. Timeouts and usage limits also showed that a technically possible flow is not automatically a dependable product.',
        },
        {
          kind: 'p',
          text: 'The first prototype answered, “Can this run?” The second phase had to answer, “Should someone rely on what it produces?”',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ai-agent-linear-pipeline',
            alt: 'The original linear automation: webhook, then language model, then parser, then PlantUML, then PDF render, then Drive storage, with clarification questions logged to a spreadsheet.',
            caption:
              'The first build, end to end. Seven stages, each replaceable, and nowhere in the chain a place to ask whether the result was any good.',
            ratio: '16 / 7',
          },
        },
      ],
    },
    {
      id: 'before-generation',
      heading: 'Good agent design begins before generation',
      nav: 'Before generation',
      blocks: [
        {
          kind: 'p',
          text: 'The clearest lesson was also the simplest: input quality is part of the product.',
        },
        {
          kind: 'p',
          text: 'If someone types “Cars,” the system can generate a large, polished mind map. But it cannot know whether the person wants the history of cars, the mechanics of combustion engines, a comparison of brands, or an overview of electric mobility.',
        },
        {
          kind: 'p',
          text: 'Generating immediately would make the product feel fast while quietly choosing the user’s intent for them.',
        },
        {
          kind: 'p',
          text: 'In the revised version, I introduced a Context Clarity Agent. Its job was not to answer the topic. It first decided whether the topic was specific enough to answer meaningfully. When it was not, the system asked focused clarification questions.',
        },
        {
          kind: 'p',
          text: 'This changed the interaction from command-and-response to collaborative framing. The user was not asked to become better at prompt writing; the product accepted responsibility for helping them express what they needed.',
        },
        {
          kind: 'p',
          text: 'That distinction matters beyond mind maps. If an AI system’s output depends heavily on context, clarification should be designed as a product capability, not left as advice in an empty-state message.',
        },
      ],
    },
    {
      id: 'responsibilities',
      heading: 'Multiple agents are useful only when responsibilities are clear',
      nav: 'Four responsibilities',
      blocks: [
        {
          kind: 'p',
          text: 'For the course project, I evolved the single linear workflow into four specialised responsibilities:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            {
              lead: 'Context Clarity Agent',
              text: 'checks whether the request is clear enough and asks questions when it is not.',
            },
            {
              lead: 'Knowledge Validator Agent',
              text: 'identifies topics that may be too recent, niche, or uncertain for the model and makes that limitation visible.',
            },
            {
              lead: 'Structure Builder Agent',
              text: 'decomposes the clarified topic into meaningful branches and hierarchy while reducing repetition.',
            },
            {
              lead: 'Quality Checker Agent',
              text: 'reviews the proposed map for completeness, parent-child logic, and structural balance, then recommends refinement.',
            },
          ],
        },
        {
          kind: 'p',
          text: 'The value was not that “multi-agent” sounded more advanced. The value was separation of responsibility. Each stage had a different question, output, and failure condition.',
        },
        {
          kind: 'p',
          text: 'That made the system easier to reason about. It also made the user experience easier to explain: clarify the intent, assess the knowledge boundary, build the structure, then inspect its quality.',
        },
        {
          kind: 'p',
          text: 'Splitting a task among agents does not guarantee accuracy. A model checking another model can reproduce the same weaknesses. I therefore treated the quality score as a decision aid and refinement trigger, not objective proof that the map was correct.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ai-agent-four-responsibilities',
            alt: 'The four-agent workflow, each stage labelled with the question it answers: is the intent clear, is this knowledge dependable, how should it be structured, is the result usable.',
            caption:
              'Four agents, four questions. The split earns its keep because each stage fails differently, not because more agents sound more capable.',
            ratio: '16 / 8',
          },
        },
      ],
    },
    {
      id: 'evaluation',
      heading: 'Evaluation belongs inside the experience',
      nav: 'Evaluation',
      blocks: [
        {
          kind: 'p',
          text: 'The first version generated an output and stopped. The revised version assessed the map against three practical dimensions:',
        },
        {
          kind: 'list',
          items: [
            {
              lead: 'Completeness',
              text: 'Does it cover the important dimensions of the topic?',
            },
            {
              lead: 'Logic',
              text: 'Do child nodes meaningfully belong under their parent nodes?',
            },
            {
              lead: 'Balance',
              text: 'Is the hierarchy readable rather than overloaded in one branch?',
            },
          ],
        },
        {
          kind: 'p',
          text: 'If the result fell below the intended threshold, the system could trigger a refinement loop.',
        },
        {
          kind: 'p',
          text: 'This was my first real encounter with evaluation as a design material. Success could not be defined as “the API responded” or “a PDF was created.” The output had to be judged against the user’s task.',
        },
        {
          kind: 'p',
          text: 'A robust evaluation would eventually need a curated test set, repeatable criteria, failure categories, and human review. The prototype only established that direction. But even a small evaluation framework changed the product conversation from whether the output looked impressive to whether it served its purpose.',
        },
      ],
    },
    {
      id: 'trust',
      heading: 'Trust is not an explanation panel',
      nav: 'Trust',
      blocks: [
        {
          kind: 'p',
          text: 'It is tempting to treat trust as a sidebar containing a score and a short rationale. That can help, but it is not enough.',
        },
        {
          kind: 'p',
          text: 'In this project, trust came from several connected decisions:',
        },
        {
          kind: 'list',
          items: [
            { text: 'The system asked for clarity rather than silently guessing.' },
            { text: 'It warned users when the model’s knowledge might be weak.' },
            { text: 'It showed quality criteria instead of presenting one mysterious score.' },
            { text: 'Users could refine, retry, edit, or change the depth of the output.' },
            { text: 'The interface explained what the system could and could not do.' },
          ],
        },
        {
          kind: 'p',
          text: 'The purpose was not to persuade people that the AI was trustworthy. It was to give them enough information and control to decide when to trust it.',
        },
        {
          kind: 'p',
          text: 'This also meant avoiding false precision. A confidence value should not imply factual certainty when it is actually measuring structural quality. Labels, explanations, and controls have to match what the system genuinely knows.',
        },
      ],
    },
    {
      id: 'failure',
      heading: 'Graceful failure is part of the main flow',
      nav: 'Failure',
      blocks: [
        {
          kind: 'p',
          text: 'My first build encountered timeouts, quota limits, formatting problems, and parsing failures. Initially, these felt like technical interruptions around the design. They were actually part of the design.',
        },
        {
          kind: 'p',
          text: 'A useful AI experience needs to answer:',
        },
        {
          kind: 'list',
          items: [
            { text: 'What happens when the input is too vague?' },
            { text: 'What happens when structured output cannot be parsed?' },
            { text: 'What happens when the topic exceeds the model’s dependable knowledge?' },
            { text: 'What happens when an external service is unavailable?' },
            { text: 'What remains available after a failed step?' },
            { text: 'Can the user retry without losing their work?' },
          ],
        },
        {
          kind: 'p',
          text: 'The right response is not always another model call. Sometimes the safest experience is to preserve the user’s input, explain which stage failed, offer a bounded retry, and let the user continue manually.',
        },
        {
          kind: 'p',
          text: 'Reliability also improved when I simplified the flow. Fewer unnecessary model calls reduced latency, cost, and failure points. Designing an agent therefore required balancing intelligence with operational restraint.',
        },
      ],
    },
    {
      id: 'next',
      heading: 'What I would carry into the next AI product',
      nav: 'What carries forward',
      blocks: [
        {
          kind: 'p',
          text: 'This project did not make me an AI engineer, and the agent remained a learning prototype rather than a production system. Its value was the shift in how I approached the problem.',
        },
        {
          kind: 'p',
          text: 'I would now begin any agent concept with seven questions:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            { text: 'What is the user trying to decide or accomplish?' },
            { text: 'What context must be present before the system should act?' },
            { text: 'Which parts require generation, and which require validation?' },
            { text: 'What does success mean beyond receiving a response?' },
            { text: 'What uncertainty can the system honestly communicate?' },
            { text: 'Where can the user steer, correct, approve, or recover?' },
            { text: 'What should happen when the model or a connected service fails?' },
          ],
        },
        {
          kind: 'p',
          text: 'The most important lesson was that human-centred AI is not a layer added after the model works. It is the architecture around the model: the questions asked before generation, the checks performed afterwards, the controls given to the user, and the honesty with which the system handles its limits.',
        },
        {
          kind: 'quote',
          text: 'An AI agent is not defined by how independently it can act. It is defined by how responsibly it helps a person reach a better outcome.',
        },
      ],
    },
  ],
  studio: {
    body: 'This article is based on a three-week graduate project in which I built and iterated an AI mind-map generator, from a webhook-based automation to a multi-agent, human-centred prototype with clarification, scoring, refinement, trust, and recovery mechanisms.',
    links: [
      { label: 'Live agent', url: 'https://mindmap-agent.vercel.app/' },
      { label: 'GitHub repository', url: 'https://github.com/tanyameriam/mindmap-agent' },
    ],
  },
  meta: {
    title: 'An AI Agent Is More Than a Prompt',
    description:
      'Lessons from building a mind-map agent around clarification, evaluation, trust, controls, and graceful failure.',
  },
};
