import type { CaseStudy } from './types';

/**
 * The data-driven long-form version of EducAItors. The canonical page is the
 * hand-built scroll narrative at /case-study/educaitors; this one lives at
 * /case-study/educaitors/deep and carries the same argument at article
 * length, the way BrynQ, Layrrrd, Merry Health and Curateus do.
 *
 * This replaces the earlier dev-only scaffold, which named three decisions
 * ("evidence first", a fail-check with fallback, and double-blind
 * calibration) from a checklist written before the project brief landed.
 * The brief supersedes it: the calibration flow compares instructor and
 * system scoring on a sample rather than running double-blind, and the
 * fail-check is the submission-readiness module next door, not ours.
 *
 * Nothing here was deployed, so no adoption, accuracy or time-saving figure
 * appears anywhere. The outcome section states what is still unproven.
 */
export const educaitors: CaseStudy = {
  slug: 'educaitors',
  title: 'EducAItors',
  headline: 'Making AI grading show its proof before it shows a grade',
  qualifier: 'Concept',
  year: '2026',
  status: 'concept',
  tagline: 'AI in schools . A person always checks the AI',

  intro: [
    'EducAItors helps teachers who grade using a list of grading rules. It reads a student’s work, finds proof for each rule, suggests a grade for each one, and hands the result to the teacher to approve, adjust or replace. I led the design team for the middle part of that system, where teachers review and approve grades.',
    'When AI helps with grading, being accurate is only half the problem. A grade is a choice a teacher has to explain, to a student, to another teacher who checks it, and to the people who inspect the college. If the teacher cannot see the proof behind a grade, the only way to stand behind it is to grade the paper again, and the time the system promised to save disappears.',
  ],

  meta: [
    { label: 'Role', value: 'Team lead and product designer, Instructor Evaluation & Supervision' },
    { label: 'Type of project', value: 'A master’s degree project, with designers across all three parts' },
    { label: 'Scope', value: 'Research, systems strategy, product design, team leadership, integration' },
    { label: 'Stage', value: 'Development-ready interactive prototype. Not deployed.' },
    { label: 'Area', value: 'AI in education, higher education, human-in-the-loop systems' },
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
          'Teachers cannot check every grade the AI suggests, and nobody sees how much work checking takes until somebody counts it. Handwritten work arrives as photos, how free teachers are to set their own grading rules depends on the college, and giving marks for each step means one number cannot show the judgment being made. A label saying how sure the AI is tells a teacher nothing about what to do next.',
        solution:
          'A way of working with the AI, not just a screen to check it. First, a practice round compares the teacher and the AI on a few papers, and turns their disagreements into a short to-do list. Then the grading desk shows the original work, the proof for each rule, the reasons and the grade in one place. Regrade requests are sorted by what really went wrong, so a bad scan and a real disagreement do not go down the same path.',
        why:
          'Hiding the AI would have taken away the one thing that helps teachers check it properly, and showing how sure it is on everything would have taught people to ignore it. So “how sure” only appears where it changes what gets checked next, and the teacher always has the final say wherever a grade can change.',
        resultsLabel: 'Intended results',
        results:
          'Less checking work, without less careful judgment. That is the goal, not a measured result: the work was delivered as an interactive prototype ready to build, and was never tried with real classes. So how well teachers understand it, how long checking takes, how good the grade changes are and how even the grades become are all still untested.',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question: 'How do you let a teacher keep an eye on an unsure AI across a whole class, without making them grade every paper again?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'I talked to three teachers at colleges in Kerala that set their own exams, including a vice principal. A teammate talked to more teachers and to students. We also read about India’s 2020 education policy, teaching aimed at clear learning goals, a well-known way of sorting thinking skills called Bloom’s Taxonomy, the rules colleges must meet, and what is already written about grading rules and how much teachers trust AI grading.',
            'Five findings held up after we sorted everything, and each one had to change how the product works to count.',
          ],
        },
        {
          kind: 'points',
          items: [
            {
              title: 'The type of college changes how free teachers are',
              body: 'Different kinds of colleges do not make or use grading rules the same way. One way of setting up would have fitted almost nobody.',
            },
            {
              title: 'Grading has to be easier to trace',
              body: 'India’s education policy and the push for clear learning goals ask colleges to link grades to thinking skills and learning goals, with clear rules that have to pass an inspection.',
            },
            {
              title: 'Student work is not always neat and typed',
              body: 'Handwritten work that is photographed or scanned is still common. So how well the computer reads it is a product problem, not just a technical detail.',
            },
            {
              title: 'Teachers grade the thinking, not only the answer',
              body: 'Giving marks for each step rewards the method even when the final answer is wrong, so one number per piece of work cannot show the judgment being made.',
            },
            {
              title: 'Trust depends on seeing and being in control',
              body: 'Teachers were much more open to AI help when they could look at its proof and stay responsible for the final grade.',
            },
          ],
        },
        {
          kind: 'quote',
          text: 'We are not just grading the student’s answer. We are measuring whether our teaching achieved what the course was designed to achieve.',
          source: 'Vice principal, autonomous college',
        },
        {
          kind: 'quote',
          text: 'If students type, they use ChatGPT. So we ask them to handwrite, photograph it, and upload it.',
          source: 'Professor, Kerala',
        },
        {
          kind: 'prose',
          body: [
            'Put together, the findings showed one pattern, not five problems. Bad input gives weak proof. Weak proof makes grades unsure. Unsure grades mean checking again, and checking again wipes out the time the product promised to save.',
            'So we stopped treating EducAItors as a set of grading features, and started treating it as a chain, where each link has to be good: proof you can use, clear rules, a match between the two that can be explained, a person’s judgment where it matters, and a way to learn from it all. If any link breaks, it shows up later as an AI problem, a trust problem, or a regrade request.',
          ],
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 Calibration',
      problem: 'A “how sure” percentage tells a teacher the AI is unsure, but not what to do about it',
      intervention: 'so a practice round compares their grades with the AI on a few papers and turns the disagreements into the to-do list',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The teacher grades a few typical papers. The AI grades the same ones. The screen then shows the overall gap, and below it a grid: every grading rule against every sample paper, the teacher’s grade next to the AI’s, and the difference between them.',
            'That grid tells apart two problems that look the same from outside. One rule that is off on every paper is a problem with how the rule is worded. Four rules drifting on two papers is a problem with how the AI grades. The overall number alone would have told the teacher neither.',
            'The squares with big gaps become the to-do list, and the list has an end. That is the difference between a clear job and an order to look at everything again.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Do a practice round before grading the whole class',
              cost: 'An extra step before grading, right when a teacher wants to get started. It only pays off across a whole class, so a small class feels the cost more than the benefit.',
              gain: 'The AI learns how this teacher uses these rules before it grades sixty papers, and the teacher gets a good reason to rely on it for the papers where the two already agree.',
            },
            {
              title: 'Agreement gives context, never permission',
              cost: 'The screen deliberately has no “approve all” button, even though that is what a rushed user would most want.',
              gain: 'No teacher ever sends out a whole class’s grades just because of a percentage. Approving stays something you choose to do, not something that happens by default.',
            },
          ],
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-02',
      index: '02',
      nav: '02 The grading desk',
      problem: 'A grade with no visible reason sends the teacher back to reading the whole paper again',
      intervention: 'so the proof, the reasons, how sure the AI is and the grade sit on one screen, next to the student’s actual work',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The grading desk was designed as a place to supervise, not a scorecard. A list of students runs down one side, sorted by who is unclear or failed a check, not by student number. The student’s work sits in the middle, and the teacher can switch between the original work and the text the computer read from it. That matters most for the scanned handwriting the research told us to expect.',
            'The panel for each rule is where the decision happens. For each rule: the grade, the detailed feedback, the linked proof, the AI’s reasons, and a note only the teacher can see. Changing the grade is one action; the reason and the record of changes are what make that change easy to trust later.',
            '“How sure” appears here to point out the unusual cases, not to decorate everything. A percentage on every field teaches people to stop reading percentages.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Proof for each rule, not one single grade',
              cost: 'Much more to design, build and keep consistent: every rule needs its own proof links, reasons, “how sure” number and a way to change it.',
              gain: 'A grade can be trusted without reading the whole paper again. The teacher checks the link between the proof and the rule, which is the judgment they were really being asked to make.',
            },
            {
              title: 'Keep the original work on screen',
              cost: 'It takes up space, and the layout has to fit three panels at once on smaller screens.',
              gain: 'When the computer misreads something, and on handwritten work it will, the teacher sees it while deciding, not after the grade has gone out.',
            },
          ],
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-03',
      index: '03',
      nav: '03 Appeals',
      problem: 'A regrade request treated like a help-desk ticket loses the one thing that makes it useful: why it was sent',
      intervention: 'so the list sorts each request by what really went wrong and keeps all its details together',
      blocks: [
        {
          kind: 'prose',
          body: [
            'A regrade request can mean a missed page, a bad scan, an unclear rule, feedback that does not match, a maths mistake, or a real disagreement about the work. These need different people and different fixes. Treating them all the same means the easy ones push the important ones aside.',
            'So the type of problem is chosen when the request comes in, and the list is sorted by it. The student’s own reason stays with the request, next to the rule they are asking about. Old requests and anything waiting for the college are kept apart from new ones, because there is a deadline for regrades.',
            'Every answer keeps the first grade, the new grade, the reason, the proof, who changed it and when. That record is what the “getting better over time” part reads, to find the grading rules and the teaching that need work.',
          ],
        },
        {
          kind: 'note',
          label: 'Where the value is',
          body: 'Regrade requests, changed grades and gaps in the practice round are not rare side cases. They are the most useful things to learn from, so they were designed as proper parts of the product, not tacked on at the end.',
        },
      ],
    },

    {
      kind: 'decision',
      id: 'decisions',
      label: 'What we chose not to do',
      nav: '04 Trade-offs',
      items: [
        {
          option: 'Hide the AI so teachers worry less',
          why: 'Research showed teachers really worried about being replaced, so it was tempting to play the AI down. But hiding where a suggestion comes from takes away what teachers need to check it. Instead we say clearly when AI is involved, and keep the teacher’s judgment in charge.',
        },
        {
          option: 'Quietly fill in missing rule weights',
          why: 'Giving every rule the same weight is a fair starting point, but a bad secret. Doing it quietly would make people trust a number nobody chose, so it is shown as a guess that needs checking.',
        },
        {
          option: 'Show how sure the AI is everywhere',
          why: '“How sure” is only useful when it changes something. Shown on everything, it fades into the background, and the one place it should have stopped someone gets skipped with the rest.',
        },
        {
          option: 'Keep our part completely separate',
          why: 'It was the neatest option and the wrong one. Good student work coming in sets the limit on how good grading can be, and changed grades are what the “getting better” part learns from. So we designed clear links with both neighbouring parts.',
        },
        {
          option: 'Design for when everything goes right, first',
          why: 'Bad scans, missing work, unclear proof and the teacher disagreeing with the AI are normal in this product, not rare. Designing for them last would have made the easy path expect things that are hardly ever true.',
        },
        {
          option: 'Claim that it saves time',
          why: 'Less checking is the goal, and the reason the product is shaped this way. It was never measured with real classes, so on this page it stays a goal, not a number.',
        },
      ],
    },

    {
      kind: 'outcomes',
      id: 'outcomes',
      label: 'Intended outcomes',
      nav: '05 Outcome',
      heading: 'What we delivered, and what would still have to be proven',
      blocks: [
        {
          kind: 'points',
          items: [
            {
              title: 'An interactive prototype, ready to build',
              body: 'Covering preparing an assignment, the practice round, grading, regrade requests and what the results show, as one teacher journey instead of five separate screens.',
            },
            {
              title: 'Screens for each rule, fully worked out',
              body: 'Proof, how sure the AI is, grading, changed grades and private teacher notes, with the steps, error screens, decision data and record-keeping rules written up for the developers.',
            },
            {
              title: 'Links between the parts',
              body: 'Clear ways to pass data and decisions to the “checking the work is ready” part and the “getting better over time” part, instead of three ideas that only connected in the presentation.',
            },
          ],
        },
        {
          kind: 'intended',
          items: [
            {
              outcome: 'Teachers can explain why the AI gave a grade, and what needs checking',
              metric: 'Test understanding: ask teachers to explain a grade using only the screen, and count how often they can',
            },
            {
              outcome: 'Sorting by “how sure” cuts checking time without letting more mistakes through',
              metric: 'Time per class, compared with a set number of planted mistakes, measured on the same class with and without the sorting',
            },
            {
              outcome: 'The practice round makes grades more even across a class',
              metric: 'How spread out the grades are for the same rules, before and after a practice round',
            },
            {
              outcome: 'Changed grades stay meaningful and written down',
              metric: 'Share of changed grades that come with a reason, and whether the record is good enough to rebuild a disputed grade',
            },
          ],
        },
        {
          kind: 'note',
          label: 'Status',
          body: 'Idea work, delivered as an interactive prototype with designers across all three parts. None of it was tried with real classes, so every result above is a goal, not a measurement. How well it fits different kinds of colleges, and how well it copes with misread handwriting and missing pages, are both untested.',
        },
      ],
      callouts: [
        {
          title: 'Do not ask for trust',
          emphasis: 'Let people decide the conditions',
          body: 'under which they will rely on the AI. The practice round is how: it makes relying on the AI a choice the teacher makes based on proof, not something the product asks of them.',
        },
        {
          title: 'Disagreement is the to-do list',
          emphasis: 'The gap between the teacher and the AI',
          body: 'tells you more about what to do than any “how sure” number, because it points to one rule on one paper, and the list has an end.',
        },
        {
          title: 'Judgment before, during and after',
          emphasis: 'The teacher is never just',
          body: 'a final “approve” button. They are in charge when setting up the rules, in the practice round, for every rule, and again when a student asks for a regrade.',
        },
      ],
    },

    {
      kind: 'reflection',
      id: 'reflection',
      label: 'What I took away from it',
      blocks: [
        {
          kind: 'prose',
          body: [
            'At the start, EducAItors looked like a grading tool with AI help. After the research and the mapping, I saw it differently: it was a system for keeping teachers responsible for their judgment. That change is what moved the practice round, the proof, regrade requests and learning from the edges of the product to its centre.',
            'Leading it taught me a second thing, about the team rather than the product. The project was too big for one designer to own every flow, and too connected for people to work alone. Splitting the work only works when joining it up is planned in from the start. So I built the shared map first, gave each designer a part or an important flow from start to finish, and then paired them up where data and decisions passed between parts.',
            'What I would keep: checking the logic, the unusual cases, the words and the data passing between parts, not just whether things look the same. What I would do differently: test the practice round wording with teachers who know very different amounts about AI before building around it, and design specially for colleges where the teacher may not write the grading rules at all.',
          ],
        },
        {
          kind: 'note',
          label: 'What the project came down to',
          body: 'AI deserves a place in important school decisions only when it makes people’s judgment easier to see, not harder.',
        },
      ],
    },
  ],
};
