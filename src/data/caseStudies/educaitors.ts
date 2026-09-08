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
  headline: 'Making an AI evaluation show its evidence before it shows a score',
  qualifier: 'Concept',
  year: '2026',
  status: 'concept',
  tagline: 'AI in education . Human-in-the-loop evaluation',

  intro: [
    'EducAItors supports instructors who grade against a rubric: it reads a submission, matches evidence to criteria, proposes a level for each one, and hands the result to the instructor to approve, adjust or override. I led the design team responsible for the middle of that system, Instructor Evaluation and Supervision.',
    'When AI enters grading, accuracy is only half the problem. A grade is a decision an instructor has to defend, to a student, to a moderator, and to an accreditation process. If the instructor cannot see the evidence behind a score, the only way to stand behind it is to grade the paper again, and the efficiency the system promised disappears.',
  ],

  meta: [
    { label: 'Role', value: 'Team lead and product designer, Instructor Evaluation & Supervision' },
    { label: 'Engagement', value: 'MDes academic practicum, cross-module design team' },
    { label: 'Scope', value: 'Research, systems strategy, product design, team leadership, integration' },
    { label: 'Stage', value: 'Development-ready interactive prototype. Not deployed.' },
    { label: 'Domain', value: 'AI in education, higher education, human-in-the-loop systems' },
  ],

  sections: [
    {
      kind: 'pitch',
      id: 'pitch',
      label: 'Quick pitch',
      footnote:
        'Short on time? The pitch above is the whole case. The journey below is how it actually went.',
      summary: {
        problems:
          'Faculty cannot verify every AI-supported score, and the work they do to check one is invisible until somebody counts it. Handwritten submissions arrive as photographs, rubric freedom varies by institution, and step marking means a single number cannot represent the judgment being made. A confidence badge on top of all that tells an instructor nothing about what to do next.',
        solution:
          'A supervision workflow rather than a review screen. Calibration compares the instructor and the system on a small sample and turns the disagreements into a finite queue. The grading desk keeps the original work, the criterion evidence, the reasoning and the score on one surface. Re-evaluation requests are typed by what actually went wrong, so a broken scan and a genuine dispute do not travel the same path.',
        why:
          'Hiding the AI would have removed the one thing that makes supervision informed, and showing every confidence percentage would have trained people to ignore all of them. So confidence is spent only where it changes what gets reviewed next, and the instructor stays the final authority at every point where a grade can move.',
        resultsLabel: 'Intended results',
        results:
          'Less verification effort without less academic judgment. That is the intent, not a measurement: the work was delivered as a development-ready prototype and never ran a field pilot, so comprehension, review time, override quality and calibration variance all remain untested.',
      },
    },

    {
      kind: 'journey',
      id: 'journey',
      label: 'The full journey',
      question: 'How do you let an instructor supervise uncertainty at scale, without making them re-grade every paper?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'I interviewed three faculty members at autonomous colleges in Kerala, including a vice principal. A teammate added perspectives from other instructors and students. Alongside that we read NEP 2020, Outcome Based Education guidance, Bloom’s Taxonomy, accreditation requirements and the existing literature on rubric standards and faculty trust in AI-supported grading.',
            'Five findings survived synthesis, and each one had to change an interaction to count as an insight.',
          ],
        },
        {
          kind: 'points',
          items: [
            {
              title: 'Institution type changes instructor autonomy',
              body: 'Affiliated, deemed and autonomous colleges do not create or use rubrics in the same way. A single setup flow would have fitted almost nobody.',
            },
            {
              title: 'Evaluation is increasingly traceable',
              body: 'NEP 2020 and Outcome Based Education push institutions toward Bloom’s levels, CO to PO mapping, and explicit assessment criteria that have to survive an audit.',
            },
            {
              title: 'The input is not always clean or digital',
              body: 'Handwritten assignments photographed or scanned into PDFs remain common, which makes extraction quality a product problem rather than an implementation detail.',
            },
            {
              title: 'Teachers grade reasoning, not only answers',
              body: 'Step marking rewards the method even when the final answer is wrong, so one number per submission cannot carry the judgment being made.',
            },
            {
              title: 'Trust depends on visibility and control',
              body: 'Faculty were markedly more open to AI support when they could inspect its evidence and remain accountable for the final grade.',
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
            'Put together, the findings described one pattern rather than five problems. Weak inputs create weak evidence. Weak evidence makes scoring uncertain. Uncertainty creates rechecking, and rechecking destroys the efficiency the product was sold on.',
            'So we stopped treating EducAItors as a collection of grading features and started treating it as a chain of knowledge quality: usable evidence, clear standards, an explainable match between the two, human judgment where it matters, and a learning loop that closes. A failure at any link reappears later as an AI problem, a trust problem, or an appeal.',
          ],
        },
      ],
    },

    {
      kind: 'step',
      id: 'step-01',
      index: '01',
      nav: '01 Calibration',
      problem: 'A confidence percentage tells an instructor that the system is unsure, but not what to do about it',
      intervention: 'so calibration compares their scoring with the system on a small sample and turns the disagreements into the queue',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The instructor scores a handful of representative papers. The system scores the same ones. The screen then shows the aggregate gap, and underneath it a matrix: every rubric criterion against every sample paper, the instructor’s level beside the system’s, and the absolute difference between them.',
            'That structure separates two failures that look identical from the outside. One criterion out of alignment across every paper is a rubric wording problem. Four criteria drifting on two papers is a calibration problem. Reading the aggregate alone would have told the instructor neither.',
            'The divergent cells become the review task, and the task has an end. That is the difference between bounded work and an instruction to look at everything again.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Calibrate before grading at scale',
              cost: 'An extra step before the batch, at exactly the moment an instructor wants to start marking. It only pays off across a cohort, so a small class feels the cost more than the benefit.',
              gain: 'The system learns how this instructor applies this rubric before it scores sixty papers, and the instructor gets a defensible reason to rely on it for the ones where the two already agree.',
            },
            {
              title: 'Alignment as context, never as permission',
              cost: 'The screen deliberately stops short of an auto-approve action, which is the thing a rushed user would most want from it.',
              gain: 'No instructor ever releases a batch on the strength of a percentage. Approval stays an act, not a default.',
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
      problem: 'A score with no visible source sends the instructor back to reading the whole paper again',
      intervention: 'so evidence, reasoning, confidence and the score sit on one surface, next to the student’s actual work',
      blocks: [
        {
          kind: 'prose',
          body: [
            'The grading desk was designed as a supervision surface rather than a scorecard. Cohort triage runs down one side, ordered by uncertainty and validation issues rather than by student number. The submission itself holds the centre, and the instructor can move between the original document and the extracted text, which matters most for the scanned handwriting that this research said to expect.',
            'The criterion panel carries the decision. For each criterion: the score, the detailed feedback, the evidence linked to it, the system’s reasoning, and an instructor-only note that the student never sees. Adjusting the score is one action; the rationale and the audit history are what make the adjustment accountable afterwards.',
            'Confidence appears here to prioritise exceptions, not to decorate every output. A percentage on every field trains people to stop reading percentages.',
          ],
        },
        {
          kind: 'tradeoffs',
          items: [
            {
              title: 'Criterion-level evidence over a single score',
              cost: 'Far more state to design, build and keep coherent: every criterion needs its own evidence links, reasoning, confidence and override path.',
              gain: 'A score becomes defensible without a full reread. The instructor checks the link between evidence and rubric level, which is the judgment they were actually being asked for.',
            },
            {
              title: 'Keep the original document in view',
              cost: 'Screen real estate, and a layout that has to hold three panes at once on smaller displays.',
              gain: 'When extraction is wrong, and on handwritten work it will be, the instructor sees it while deciding rather than after releasing the grade.',
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
      problem: 'A re-evaluation request treated as a support ticket loses the one thing that makes it useful, which is why it was raised',
      intervention: 'so the queue types each request by what actually went wrong and keeps its context intact',
      blocks: [
        {
          kind: 'prose',
          body: [
            'An appeal can mean a missed page, a broken extraction, an ambiguous rubric, a feedback mismatch, a calculation error, or a genuine disagreement about the work. Those need different people and different fixes, and flattening them into one workflow guarantees the cheap ones crowd out the important ones.',
            'So the concern type is set at intake and becomes the sort key. The student’s own reasoning travels with the request, next to the criterion it disputes. Ageing and anything escalated for institutional review are separated from new arrivals, because an appeal window is a deadline.',
            'Every resolution keeps the original score, the updated score, the reason, the evidence, the instructor identity and the timestamp. That record is what the continuous-improvement module reads to find the rubrics and the teaching that need attention.',
          ],
        },
        {
          kind: 'note',
          label: 'Where the value is',
          body: 'Appeals, overrides and calibration gaps are not edge cases around the product. They are its highest-value learning signals, and they were designed as first-class states rather than as exception handling bolted on at the end.',
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
          option: 'Hide the AI to reduce fear',
          why: 'Research surfaced real anxiety about replacement, so downplaying the system was tempting. But hiding the source of a recommendation removes the basis for supervising it. We name AI at decision moments and keep the instructor’s judgment primary instead.',
        },
        {
          option: 'Silently normalise missing rubric weights',
          why: 'Equal weighting is a defensible default and an indefensible secret. Applying it quietly would manufacture confidence in a number nobody chose, so it surfaces as an assumption that needs review.',
        },
        {
          option: 'Show a confidence signal everywhere',
          why: 'Confidence is only information when it changes something. Shown on every field it becomes furniture, and the one place it should have stopped somebody gets skipped along with the rest.',
        },
        {
          option: 'Keep our module self-contained',
          why: 'It was the cleanest scope and the wrong one. Submission quality sets the ceiling on evaluation quality, and override patterns are what the improvement module runs on, so we designed explicit handshakes with both neighbours.',
        },
        {
          option: 'Design the happy path first',
          why: 'OCR failures, missing artifacts, ambiguous evidence and instructor-system disagreement are the normal condition of this product, not the exception. Designing them last would have made the happy path assume things that are rarely true.',
        },
        {
          option: 'Claim a time saving',
          why: 'Lower review effort is the intended value and the reason the workflow is shaped this way. It was never measured in a field pilot, so it stays an intention on this page rather than becoming a number.',
        },
      ],
    },

    {
      kind: 'outcomes',
      id: 'outcomes',
      label: 'Intended outcomes',
      nav: '05 Outcome',
      heading: 'What we delivered, and what would have to be proven',
      blocks: [
        {
          kind: 'points',
          items: [
            {
              title: 'A development-ready interactive prototype',
              body: 'Spanning assignment preparation, calibration, grading, re-evaluation and result insights, as one instructor journey rather than five screens.',
            },
            {
              title: 'Criterion-level states, fully specified',
              body: 'Evidence, confidence, scoring, overrides and internal instructor context, with the workflows, error states, decision objects and audit requirements written up for handoff.',
            },
            {
              title: 'Cross-module handshakes',
              body: 'Defined data and decision exchanges with submission readiness and continuous improvement, instead of three concepts that only connected in the presentation.',
            },
          ],
        },
        {
          kind: 'intended',
          items: [
            {
              outcome: 'Instructors can explain why the system produced a score, and what needs review',
              metric: 'Comprehension testing: ask instructors to justify a score from the interface alone, and count how often they can',
            },
            {
              outcome: 'Confidence-based triage cuts review time without letting more errors through',
              metric: 'Time per batch against a seeded-error rate, measured on the same cohort with and without triage',
            },
            {
              outcome: 'Calibration reduces variance across a grading batch',
              metric: 'Score dispersion across the same criteria, before and after a calibration round',
            },
            {
              outcome: 'Overrides stay meaningful and documented',
              metric: 'Share of overrides carrying a rationale, and whether the audit trail is sufficient to reconstruct a disputed grade',
            },
          ],
        },
        {
          kind: 'note',
          label: 'Status',
          body: 'Concept work, delivered as a prototype with a cross-module design team. Nothing here ran a field pilot, so every outcome above is intended rather than measured. Institutional fit between affiliated and autonomous colleges, and technical recovery from handwritten OCR and missing-page failures, are both untested.',
        },
      ],
      callouts: [
        {
          title: 'Do not ask for trust',
          emphasis: 'Let people set the conditions',
          body: 'under which they will rely on the system. Calibration is that mechanism: it makes reliance a decision the instructor makes on evidence, rather than a request the product makes of them.',
        },
        {
          title: 'Disagreement is the queue',
          emphasis: 'The gap between human and system',
          body: 'is more actionable than any confidence score, because it points at a specific criterion on a specific paper and has a finite end.',
        },
        {
          title: 'Judgment before, during and after',
          emphasis: 'The instructor is never reduced',
          body: 'to a final approve click. Authority enters at rubric setup, at calibration, at every criterion, and again at appeal.',
        },
      ],
    },

    {
      kind: 'reflection',
      id: 'reflection',
      label: 'What I took out of it',
      blocks: [
        {
          kind: 'prose',
          body: [
            'At the start, EducAItors looked like an AI-assisted grading workflow. After the research and the system mapping, I saw it differently: it was an accountability system for academic judgment. That shift is what moved calibration, evidence, re-evaluation and learning from secondary features to the centre of the product.',
            'Leading it taught me a second thing, which was about the team rather than the product. The project was too broad for one designer to own every workflow and too interconnected for people to work as independent contributors. Modular ownership only works when integration is designed into the process, so I built the shared map first, gave each designer a module or a critical workflow end to end, and then paired them across the boundaries where data and decisions crossed.',
            'What I would keep: reviewing logic, edge cases, vocabulary and data exchanges rather than visual consistency. What I would do differently: test the calibration language with instructors at genuinely different levels of AI familiarity before building around it, and prototype explicitly for affiliated colleges, where the teacher may not control the rubric at all.',
          ],
        },
        {
          kind: 'note',
          label: 'The line the project came down to',
          body: 'AI earns a place in high-stakes education only when human judgment becomes more visible, not less.',
        },
      ],
    },
  ],
};
