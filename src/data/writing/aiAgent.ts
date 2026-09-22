import { summaries } from './catalogue';
import type { Article } from './types';
import agentInterface from '@/assets/writing/ai-agent-interface.png';
import linearPipeline from '@/assets/writing/ai-agent-linear-pipeline.png';
import fourResponsibilities from '@/assets/writing/ai-agent-four-responsibilities.png';

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
    alt: 'The mind-map helper screen, showing a question asking the user to be clearer, the finished map, and a panel next to it for checking quality and making it better.',
    caption:
      'The improved helper: it asks questions before making the map, and keeps the quality checks visible next to the map instead of hiding them behind one score.',
    // Captured from the live agent on a real run, so the ratio is the app's
    // own rather than a chosen crop.
    ratio: '16 / 10',
    src: agentInterface,
    width: 3360,
    height: 2100,
  },
  intro: [
    'When I started designing my first AI helper, I thought the hard part would be writing the right prompt.',
    'The task sounded simple: take a topic, ask an AI to split it into sensible branches, and give back a mind map. But a useful AI product has to do much more than give an answer that sounds right. It has to know whether what you typed is usable, decide what should happen next, show when it is unsure, recover when something breaks, and give you enough control to judge the result.',
    'Building the helper changed how I think. A prompt can give you an answer. An AI helper needs to support a whole journey.',
  ],
  sections: [
    {
      id: 'pipeline',
      heading: 'The first version proved the machine worked, not that the experience was good',
      nav: 'The pipeline',
      blocks: [
        {
          kind: 'p',
          text: 'My first version was a chain of automatic steps built in Make.com. You could send in a topic. The chain gave it an ID, passed the topic to an AI language model, read the answer, turned it into a diagram format called PlantUML, made a PDF, saved it in Google Drive, and wrote any follow-up questions into Google Sheets.',
        },
        {
          kind: 'p',
          text: 'It worked from start to end. That mattered, because I come from design and needed to understand how information moves through a working AI service, not only how the final screen looks.',
        },
        {
          kind: 'p',
          text: 'I built it in separate parts on purpose. Taking in the topic, thinking, reading the answer, drawing it, making the file, saving it and collecting feedback each had their own job. If the AI model, the drawing service or the storage changed, I would not have to rebuild everything.',
        },
        {
          kind: 'p',
          text: 'But getting it to work showed a bigger problem: the system could work perfectly and still give a bad result.',
        },
        {
          kind: 'p',
          text: 'A vague topic gave a vague map. A map that looked confident could still have weak logic. The chain had no real way to decide whether the result was good enough, and the user had no real way to steer it afterwards. Steps timing out and usage limits also showed that something that can technically run is not always something you can rely on.',
        },
        {
          kind: 'p',
          text: 'The first version answered, “Can this run?” The second one had to answer, “Should anyone rely on what it makes?”',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ai-agent-linear-pipeline',
            alt: 'The first Make.com chain, from left to right: a webhook that receives the topic, a step that makes the map ID, a call to the Gemini AI that makes the map and its questions, a step that reads the answer, a step that turns it into a PlantUML PDF, an upload to Google Drive, a loop, and a new row in Google Sheets.',
            // The module count is visible in the screenshot, so the caption
            // no longer asserts one: the prose names seven responsibilities,
            // which is not the same as the eight modules on screen.
            caption:
              'The first build, from start to end. Every part could be swapped out, and nowhere in the chain was there a place to ask whether the result was any good.',
            ratio: '2584 / 591',
            src: linearPipeline,
            width: 2584,
            height: 591,
          },
        },
      ],
    },
    {
      id: 'before-generation',
      heading: 'Good AI helper design starts before the answer is made',
      nav: 'Before generation',
      blocks: [
        {
          kind: 'p',
          text: 'The clearest lesson was also the simplest: what the user types in is part of the product.',
        },
        {
          kind: 'p',
          text: 'If someone types “Cars”, the system can make a big, neat mind map. But it cannot know whether the person wants the history of cars, how engines work, a comparison of brands, or an overview of electric cars.',
        },
        {
          kind: 'p',
          text: 'Making the map straight away would make the product feel fast, while quietly guessing what the user meant for them.',
        },
        {
          kind: 'p',
          text: 'In the new version, I added a Context Clarity Agent. Its job was not to answer the topic. First, it decided whether the topic was clear enough to answer well. When it was not, the system asked a few focused questions.',
        },
        {
          kind: 'p',
          text: 'This changed the conversation from “give an order, get an answer” to working out the question together. The user did not have to get better at writing prompts; the product took on the job of helping them say what they needed.',
        },
        {
          kind: 'p',
          text: 'That difference matters beyond mind maps. If an AI’s answer depends a lot on context, asking questions should be designed as a real part of the product, not left as a tip on an empty screen.',
        },
      ],
    },
    {
      id: 'responsibilities',
      heading: 'Several AI helpers are only useful when each one has a clear job',
      nav: 'Four responsibilities',
      blocks: [
        {
          kind: 'p',
          text: 'For the course project, I split the single chain of steps into four helpers, each with its own job:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            {
              lead: 'Context Clarity Agent',
              text: 'checks whether the request is clear enough, and asks questions when it is not.',
            },
            {
              lead: 'Knowledge Validator Agent',
              text: 'spots topics that may be too new, too niche or too uncertain for the AI, and makes that limit visible.',
            },
            {
              lead: 'Structure Builder Agent',
              text: 'splits the topic into sensible branches and levels, without repeating itself.',
            },
            {
              lead: 'Quality Checker Agent',
              text: 'checks the map to see if anything is missing, if each branch belongs where it is, and if it is balanced, and then suggests how to improve it.',
            },
          ],
        },
        {
          kind: 'p',
          text: 'The value was not that “several helpers” sounded more advanced. The value was that each one had its own job. Each step had a different question, a different result and a different way of failing.',
        },
        {
          kind: 'p',
          text: 'That made the system easier to think about. It also made it easier to explain to users: make the question clear, check what the AI knows, build the structure, then check its quality.',
        },
        {
          kind: 'p',
          text: 'Splitting a task between helpers does not make it accurate. One AI checking another AI can repeat the same mistakes. So I treated the quality score as something to help decide and to trigger improvements, not as proof that the map was right.',
        },
        {
          kind: 'figure',
          figure: {
            asset: 'ai-agent-four-responsibilities',
            // Describes the diagram as drawn. The four questions are named
            // in the list above it, not printed on the boxes, so the alt no
            // longer promises labels a reader would go looking for.
            alt: 'The system design: a manager that runs the Context Clarity, Knowledge Validator and Structure Builder helpers, and a Quality Checker that either sends the work back to the Structure Builder to improve it or releases the final mind map, all talking to the AI services through one connector.',
            caption:
              'Four helpers, four questions. The split is worth it because each step fails in a different way, not because more helpers sound more powerful.',
            ratio: '1583 / 1329',
            src: fourResponsibilities,
            width: 1583,
            height: 1329,
          },
        },
      ],
    },
    {
      id: 'evaluation',
      heading: 'Checking the result belongs inside the experience',
      nav: 'Evaluation',
      blocks: [
        {
          kind: 'p',
          text: 'The first version made a result and stopped. The new version checked the map in three practical ways:',
        },
        {
          kind: 'list',
          items: [
            {
              lead: 'Nothing missing',
              text: 'Does it cover the important parts of the topic?',
            },
            {
              lead: 'Makes sense',
              text: 'Do the smaller branches really belong under their bigger branches?',
            },
            {
              lead: 'Balanced',
              text: 'Is it easy to read, instead of one branch being overloaded?',
            },
          ],
        },
        {
          kind: 'p',
          text: 'If the result was not good enough, the system could start another round to improve it.',
        },
        {
          kind: 'p',
          text: 'This was the first time I really used checking results as part of the design. Success could not mean “the AI replied” or “a PDF was made”. The result had to be judged against what the user was trying to do.',
        },
        {
          kind: 'p',
          text: 'Properly checking results would, in the end, need a chosen set of test topics, the same checks every time, types of failure, and people reviewing the work. The mock-up only pointed in that direction. But even a small set of checks changed the conversation from whether the result looked impressive to whether it did its job.',
        },
      ],
    },
    {
      id: 'trust',
      heading: 'Trust is not just a panel that explains things',
      nav: 'Trust',
      blocks: [
        {
          kind: 'p',
          text: 'It is tempting to think trust means a sidebar with a score and a short reason. That can help, but it is not enough.',
        },
        {
          kind: 'p',
          text: 'In this project, trust came from several choices that worked together:',
        },
        {
          kind: 'list',
          items: [
            { text: 'The system asked for more detail instead of quietly guessing.' },
            { text: 'It warned users when the AI might not know enough.' },
            { text: 'It showed its quality checks instead of one mysterious score.' },
            { text: 'Users could improve, retry, edit, or change how detailed the result was.' },
            { text: 'The screen explained what the system could and could not do.' },
          ],
        },
        {
          kind: 'p',
          text: 'The goal was not to convince people the AI could be trusted. It was to give them enough information and control to decide when to trust it.',
        },
        {
          kind: 'p',
          text: 'This also meant not pretending to be more exact than it was. A “how sure” number should not suggest the facts are certain when it is really measuring how well the map is organised. Labels, explanations and controls have to match what the system really knows.',
        },
      ],
    },
    {
      id: 'failure',
      heading: 'Failing gracefully is part of the main path',
      nav: 'Failure',
      blocks: [
        {
          kind: 'p',
          text: 'My first build ran into steps timing out, usage limits, formatting problems and answers it could not read. At first these felt like technical problems that got in the way of the design. They were actually part of the design.',
        },
        {
          kind: 'p',
          text: 'A useful AI experience has to answer:',
        },
        {
          kind: 'list',
          items: [
            { text: 'What happens when what you type is too vague?' },
            { text: 'What happens when the AI’s answer cannot be read?' },
            { text: 'What happens when the topic is beyond what the AI reliably knows?' },
            { text: 'What happens when another service it depends on is down?' },
            { text: 'What still works after a step fails?' },
            { text: 'Can the user try again without losing their work?' },
          ],
        },
        {
          kind: 'p',
          text: 'The right answer is not always to ask the AI again. Sometimes the safest thing is to keep what the user typed, explain which step failed, offer a limited retry, and let the user carry on by hand.',
        },
        {
          kind: 'p',
          text: 'It also got more reliable when I made the chain simpler. Fewer extra AI calls meant less waiting, lower cost and fewer things that could break. So designing an AI helper meant balancing cleverness with holding back.',
        },
      ],
    },
    {
      id: 'next',
      heading: 'What I would take into my next AI product',
      nav: 'What I take forward',
      blocks: [
        {
          kind: 'p',
          text: 'This project did not make me an AI engineer, and the helper stayed a learning project, not a finished product. Its value was the change in how I approached the problem.',
        },
        {
          kind: 'p',
          text: 'Now I would start any AI helper idea with seven questions:',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            { text: 'What is the user trying to decide or get done?' },
            { text: 'What information must be there before the system should act?' },
            { text: 'Which parts need the AI to make something, and which parts need checking?' },
            { text: 'What does success mean, beyond just getting an answer?' },
            { text: 'What doubts can the system honestly tell the user about?' },
            { text: 'Where can the user steer, fix, approve or recover?' },
            { text: 'What should happen when the AI or a connected service fails?' },
          ],
        },
        {
          kind: 'p',
          text: 'The most important lesson was that AI designed around people is not something you add after the AI works. It is everything built around the AI: the questions asked before it answers, the checks made afterwards, the controls the user gets, and how honestly the system deals with its limits.',
        },
        {
          kind: 'quote',
          text: 'An AI helper is not measured by how much it can do on its own. It is measured by how responsibly it helps a person get to a better result.',
        },
      ],
    },
  ],
  studio: {
    body: 'This article is based on a three-week master’s project where I built an AI mind-map maker and kept improving it: from a simple chain of automatic steps to a mock-up with several helpers, designed around people, that asks questions, scores and improves its maps, builds trust, and recovers from problems.',
    links: [
      { label: 'Live agent', url: 'https://mindmap-agent.vercel.app/' },
      { label: 'GitHub repository', url: 'https://github.com/tanyameriam/mindmap-agent' },
    ],
  },
  meta: {
    title: 'An AI Helper Is More Than a Prompt',
    description:
      'Lessons from building an AI mind-map helper: asking questions, checking results, trust, controls, and failing gracefully.',
  },
};
