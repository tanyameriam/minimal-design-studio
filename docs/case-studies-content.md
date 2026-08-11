# Case Study Content System — Two Views

> **Superseded, August 2026.** The data files under `src/data/caseStudies/` are now
> the source of truth for all case study copy. This document reflects the
> pre-rewrite state and is kept for its method sections.

Working document. Rewrites every case study into two views, written for senior-level
signal and outcome-based framing.

**Nothing here invents a number.** Anywhere a real figure belongs, you'll see
`[NEED: …]`. Section 6 lists every one of them, who has it, and what to do if it
doesn't exist.

---

## 1. The two views — what each is for

| | **The Pitch** | **The Deep Dive** |
|---|---|---|
| Reader | Recruiter / hiring manager screening 40 portfolios | Design lead or panel who already decided you're interesting |
| Time budget | 60 seconds, no scrolling into detail | 8–10 minutes, deliberate reading |
| Question it answers | *What was broken, what did you decide, what changed* | *How did you know, what did you reject, what went wrong* |
| Failure mode | Too much process, no consequence | A feature tour |
| Length | ~250 words + 3 stats | ~900–1,200 words + evidence |

The Pitch may **compress** the Deep Dive. It may never **claim more** than it.
That single rule fixes most of what's currently wrong.

---

## 2. The senior test

Before publishing any paragraph, ask: *could a competent mid-level designer have
written this?* If yes, it isn't senior yet. Senior writing shows five things, and
your current case studies show one of them.

| Signal | Present today? |
|---|---|
| **Judgment under constraint** — you chose, and the choice cost something | ✗ Every decision reads as obviously correct |
| **Rejected alternatives** — what you didn't do, and why | ✗ Absent from all 7 |
| **Influence on people** — stakeholders, adoption, governance, mentoring | ~ BrynQ gestures at it; nowhere else |
| **Measurement literacy** — you know what you'd instrument, even if you couldn't | ✗ "Impact" sections contain no impact |
| **Honest failure** — where you were wrong and what changed | ~ Once, in STREE (the mentor moment) |

---

## 3. Outcome-based vs feature-based — the rewrite rule

Every sentence about what you made must answer **"so what?"**, not **"what?"**

| Feature-based (current) | Outcome-based (target) |
|---|---|
| "I designed a wizard structured into three phases." | "Requirements stopped arriving incomplete — which was the actual bottleneck, not build speed." |
| "Full-width SOS button for high visibility under stress." | "Testing showed users froze at the decision point, not the tap. The button stopped being the problem." |
| "Restaurants can list surplus food quickly." | "A donation only works if the NGO can predict it. We designed for rhythm, not volume." |
| "Reduce food wastage significantly." | "Intended outcome: pickup within the 4-hour safe window. Metric I'd instrument: % of listings collected before expiry." |

**Three mechanical fixes that do most of the work:**

1. **Delete every "Features" and "Solutions" heading.** Replace with the decision
   the feature implements: *"Why the SOS lives on the lock screen"* beats
   *"Solution 3: Lock Screen Shortcut."*
2. **Every list of things you made becomes a list of things that changed.** If you
   can't write the change, the feature doesn't earn a mention.
3. **Cut the build section to ~30% of the deep dive.** It's currently ~70%. The
   space goes to evidence, rejected options, and what happened.

---

## 4. The honesty ladder — how to handle unshipped work

This is what fixes your integrity problem *and* reads as more senior, not less,
because it demonstrates measurement literacy.

Put one badge at the top of **both** views:

- **`SHIPPED`** — in production. Show the data.
- **`BUILT · NOT MEASURED`** — shipped without instrumentation. Say what you'd
  measure and why it wasn't.
- **`PROPOSED`** — designed and validated with users, not built. State the
  intended outcome *and the metric you'd instrument to know if it worked.*

A `PROPOSED` badge next to a well-specified metric is a strength. An unlabelled
claim that a concept "reduced wastage significantly" is a liability.

**Assignments** (correct me where I've guessed wrong):

| Project | Badge | Why |
|---|---|---|
| BrynQ | `SHIPPED` | Real product, real users, in production |
| Merry Health | `PROPOSED` | Your own deep dive is written in future tense throughout |
| STREE | `PROPOSED` | You already disclose it wasn't deployed |
| Hunger Project | `PROPOSED` | Your own role field says "self-initiated project" |

---

## 5. The structures

### Pitch — 5 beats

1. **The stake** — what it was costing, in the business's language
2. **The reframe** — the insight that changed the question *(the senior signal)*
3. **The bet** — what you decided, and what you gave up to decide it
4. **The change** — what's different now, measured or explicitly modelled
5. **The judgment** — what the domain taught you

### Deep Dive — 8 beats

1. Context & stake
2. How I knew — evidence, **with its limits stated**
3. The reframe
4. **What I considered and rejected** — with costs *(new; currently missing everywhere)*
5. What I designed — compressed
6. What happened / what I'd measure
7. **Where I was wrong** *(new; currently in STREE only)*
8. What I'd do differently

---

# 6. The copy

---

## BRYNQ — `SHIPPED`
### Make this your first and longest case study. It's your only current, production, multi-year work and it's currently third and thinnest.

### PITCH

**Meta row:** B2B iPaaS · HR & Payroll integrations · `[NEED: correct dates]` · Product Designer

**One-liner:**
> Integration projects were running weeks late — and none of the delay was in
> engineering. I moved the bottleneck upstream into a workflow that didn't exist
> in the product yet.

**The stake**
BrynQ connects HR systems to payroll providers across the EU. Every integration
started with an Excel file — a "Scenario" — describing field mappings and
transformation logic, gathered from the customer over calls and follow-ups. The
delays weren't in development. They were before development started: incomplete
requirements, weeks of clarification, and no visibility into where any project
actually stood.

**The reframe**
The team was asking *how do we build integrations faster?* Shadowing interface
developers, I found the Excel file wasn't a form — it was a coordination tool doing
the job of a product surface nobody had built. The real question was *how do we
help customers express what they need, clearly and early?* Stabilise the input and
everything downstream gets faster on its own.

**The bet — and what it cost**
I argued *against* redesigning the process. The MVP deliberately mirrored the
existing Excel workflow: same phases, same mental model, mostly manual entry. That
meant shipping something barely faster to fill in, and defending that internally
against the obvious objection — *why did we rebuild the spreadsheet?* What it
bought: a single source of truth, structured data inside the platform, and adoption
from a team that would have rejected a better-but-unfamiliar tool. Optimisation
came second, on purpose.

**What changed**
- Requirements moved into the product instead of living in email and spreadsheets — `[NEED: % of new integrations started in-product]`
- Incomplete information surfaced at submission instead of mid-build — `[NEED: rework/rejection rate, before vs after]`
- Scenario completion time dropped — `[NEED: from X to Y]`
- Structured data made templates possible: repeat system combinations became
  reusable starting points, shifting setup from developer-led toward self-serve — `[NEED: % of integrations now template-started]`
- That foundation carried into lightweight project management and AI-assisted
  interface creation

**The judgment**
Digitising before optimising is unglamorous, and it was right — you can't template
patterns you haven't captured yet. The harder lesson: in enterprise B2B, adoption
and governance decide whether a design succeeds more than usability does. I spent
as much time aligning the interface team and the PO as I did designing screens.

**Stats row — replace the current process-volume stats:**
| `[NEED]` | `[NEED]` | `[NEED]` |
|---|---|---|
| Setup time reduction | Requirements rework rate | Integrations from templates |

*If none of these exist, use: years on product · integration types supported ·
teams whose workflow changed. Never "flows redesigned" — that counts your output,
not its effect.*

---

### DEEP DIVE

**1 · Context & stake**
Keep your existing `brynqBackground` and `brynqLegacyReality` — they're well
written. Promote this sentence to a pull-quote, it's the best line in your
portfolio:

> *"Most integration delays did not occur during development. They occurred before
> development even started."*

Add what's currently missing — the number. `[NEED: typical integration lead time,
and how much of it was pre-development]`

**2 · How I knew**
Your existing `brynqResearch` is solid. Add the limits paragraph:

> Four contextual interviews with the interface team and PO, a review of `[NEED: N]`
> real scenario files, and shadowing sessions with interface developers during live
> customer calls. **What this didn't cover:** I never observed a customer filling in
> a Scenario alone, without a developer on the call — which is exactly the situation
> the wizard would create. That gap showed up later. *(→ beat 7)*

Stating a limit is a senior move. It shows you know what your evidence can and
can't support.

**3 · The reframe**
Keep `brynqKeyInsight` as-is. It's the strongest thinking on the site. Give it a
full-width moment.

**4 · What I considered and rejected** *(write this — it doesn't exist yet)*

| Option | Why rejected |
|---|---|
| **Redesign the requirements process from scratch** | Highest ceiling, but required the interface team to abandon a mental model they'd built the business on. Adoption risk outweighed the gain — and with no structured data yet, we'd have been designing the optimisation blind. |
| **Guided/conversational intake instead of a form** | Better for customers who lack technical clarity — the actual root cause. Rejected for MVP: it needed a structured data model that didn't exist yet. This became viable later, once the wizard produced that model. |
| **Keep Excel, add validation tooling around it** | Cheapest, near-zero adoption cost. Rejected because the data would still live outside the platform — killing the templates, the review flow, and everything after. |

*Correct these against what was actually on the table. The shape is what matters:
a real option, a real reason, a real cost.*

**5 · What I designed** — compress hard
Three phases, the review-and-reject loop, the notification model. One abstracted
flow diagram. Under 250 words. Frame each around the decision, not the feature:
*"Why review is a state, not an email"* — because ownership was ambiguous and a
predictable system state is what replaced the thread.

**6 · What happened**
Your `brynqMvpOutcomes` says "dropped significantly." Either source the number or
write:

> We didn't instrument this properly at launch — a mistake I'd correct now. What
> we could see: `[qualitative evidence]`. The metric I'd put on it today is
> time-from-request-to-development-ready, split by whether the customer had
> integrated before.

That paragraph is *more* impressive than a vague "significantly." It shows you
know what should have been measured.

**7 · Where I was wrong** *(write this)*
Candidate — the research gap from beat 2: the first version assumed customers could
self-serve the mapping definitions, because every session you observed had a
developer present to interpret. What actually happened when they were alone?
`[NEED: your recollection]` That's your paragraph.

**8 · What I'd do differently**
Instrument before shipping. Name the adoption metric on day one. And test the
unassisted path — the one your research never saw.

**Also add — it's on your CV and in none of your case studies:**
You guided a junior designer, owned Figma file structure, and led design for an
internal task-tracking feature. That's design governance and mentorship, the
clearest senior signal you have, and it appears nowhere in your work. One short
section: what you delegated, how you reviewed, what you standardised.

---

## MERRY HEALTH — `PROPOSED`
### The analysis here is the most senior thinking in your portfolio. The presentation buries it.

### PITCH

**Meta row:** Healthcare ops · Emergency dispatch · India Tier 2/3 · `[NEED: real role + engagement type — this project is absent from your CV]`

**One-liner:**
> Ambulance dispatch ran on WhatsApp threads across four parties, and every handoff
> dropped data. I designed for the failure modes first — because in emergency
> systems, the exception *is* the workflow.

**The stake**
In Tier 2 and 3 Indian hospitals, ~95% of ambulance requests arrive by phone or
WhatsApp. Four parties — patient's family, hospital admin, driver, Merry Health
ops — coordinate across a dozen steps with no shared record. Information dies at
every handoff: an imprecise address, an unstated floor number, a trip nobody
marked as started. Post-incident review was impossible because there was nothing
to review.

**The reframe**
The obvious answer was a dashboard to replace WhatsApp. Auditing every data point
across 4 actors and 12 steps, I found WhatsApp wasn't the problem — it was the
only thing working. It was the de facto operating system, chosen because it
survives bad networks and needs no training. The question wasn't *how do we move
them off WhatsApp?* but *how do we make WhatsApp produce structured data?*

**The bet — and what it cost**
Two constraints, both deliberate:
- **Build inside WhatsApp, not beside it.** Cost: we inherited its limits — no rich
  UI, no guaranteed delivery, no real validation. Gain: adoption at near-zero
  friction for staff with no time to learn a tool.
- **Define the operational minimum, not the complete record.** For each handoff I
  specified the smallest dataset that unblocks the *next* actor — not the most
  complete one. Cost: thinner analytics. Gain: handoffs that complete while
  someone is panicking.

**The change — intended, and how I'd know**
| Intended outcome | Metric I'd instrument |
|---|---|
| Requests intake without repeated clarification calls | Follow-up calls per dispatch |
| Every trip leaves an auditable record | % of trips with complete start/end timestamps |
| Handoffs survive degraded conditions | % of dispatches completing when GPS or WhatsApp fails |
| Peak load doesn't collapse coordination | Response time at p95 vs median |

*This table replaces the current future-tense outcome list. Same content, honest
framing, and it demonstrates you think in measurement.*

**The judgment**
> *"UI is only 30% of the solution. The other 70% is workflow logic, integrations,
> and system constraints."*

Designing for resilience rather than perfection changed how I scope work: every
flow needed a Plan B, C, and D before it needed a visual design.

---

### DEEP DIVE

**The single biggest fix: lead with conclusions, demote the tables to evidence.**

Nobody reads 40 rows of `dataPoint / source / usedBy / purpose / frequency /
issues`. Right now that's the whole section. Invert it:

> **Four actors. Twelve steps. No shared truth.**
> I audited every data point in the dispatch flow against three questions: who owns
> it, who initiates it, and what decision it enables. Three handoffs accounted for
> most of the failure — `[name them]`. The full audit is below.
>
> *[collapsed / expandable: the tables]*

The tables then work as proof that you did the work, rather than as the thing the
reader must wade through to find out what you concluded.

**Fill the two empty sections.** `merryOverview` and `merryCurrentProblem` are
published as empty strings with `// Placeholder - add content here` comments. Two
more empty bodies sit in the solutions list.

**Promote the edge cases — they're your best material and they're at the bottom.**
WhatsApp fails / GPS fails / information unclear / driver unreachable / duplicate
bookings / hospital group unreachable. Designing the degradation path *is* the
senior skill on display here. Move it up, directly after the reframe, and frame it
as a principle:

> In an emergency system, the exception isn't an edge case — it's the operating
> condition. I designed the fallbacks before the happy path.

**What to reject** *(write this)*: the dashboard-first approach, and completeness-first
data capture. You clearly considered and rejected both. Say so, with costs.

**Where you were wrong** *(write this)*: `[NEED: something the data audit
overturned — an assumption about who owned a data point, or a step you thought
mattered and didn't]`

**Fix the role field.** It currently reads *"Research & Discovery, Strategy &
Systems Thinking, Design Execution, Collaboration & Delivery"* — that's a list of
activity buckets, not a role. And it must match whatever you put in the Pitch.

---

## STREE — `PROPOSED`
### Cut to roughly a third. Move below your professional work. Keep the reframe and the mentor moment — they're the whole point.

### PITCH

**Meta row:** Women's safety · India · Mobile · 2022 · `[NEED: settle 1 month vs 6]` · PGP final project, IDC IIT Bombay

**One-liner:**
> Safety apps are built for the worst moment. Fifteen interviews said the worst
> moment isn't where women actually live — so I designed for the other 99% of the
> time.

**The stake**
Existing safety tools in India are post-incident panic buttons. But fear operates
continuously: choosing a longer route, avoiding a street after dark, deciding
whether discomfort is "enough" to act on. Products built only for the emergency
address a fraction of the experience — and, worse, function as a daily reminder
of threat.

**The reframe**
> *"I want safety without feeling controlled."*

Women defined safety as **independence**, not protection. That reframed the brief
from an SOS tool to a companion supporting the whole arc — before, during, and
after. The strongest finding wasn't a feature request: harassment is frequently by
known people, and many women freeze rather than react, questioning whether their
own discomfort is justified. No panic button addresses that.

**The bet — and what it cost**
Crowdsourced safety maps were the obvious feature. My mentor challenged it: labelling
places "unsafe" reinforces the exact fear the product claims to reduce, and
disproportionately marks the neighbourhoods people already avoid. I reframed the maps
as **contextual and time-sensitive** rather than absolute — the same street reads
differently at 2pm and 11pm. Cost: weaker, fuzzier signal than a simple red/green
map. Gain: a product that doesn't shrink its users' world.

**The change — intended, and how I'd know**
| Intended outcome | Metric I'd instrument |
|---|---|
| SOS reachable without deliberation under stress | Time-to-activation, unprompted, in simulated conditions |
| Users understand what contacts actually receive | Comprehension check post-task — the #1 confusion in testing |
| The product isn't abandoned as a fear reminder | 30-day retention among users with no incident |

*Validated with 4 moderated think-aloud sessions. Not deployed — this was an
academic project, and the outcomes above are intended, not measured.*

**The judgment**
> *"Not every insight demands a feature, and not every problem can, or should, be
> solved through technology alone."*

The mentor challenge is the part I'd want to be asked about. I'd built something
that would have made the problem worse, and I couldn't see it from inside the
research.

---

### DEEP DIVE — what to keep and what to cut

**Keep** (roughly 400 words total): the five research insights, the reframe, the
mentor challenge and what it changed, the three-phase before/during/after model,
the testing findings with the *"users needed clarity on what contacts receive"*
thread traced through to what you changed.

**Cut**: the full IA rationale table, the screen inventory, the "Calm Color
System" / "Refined Icons & Microcopy" solution list — all feature-based. The
wireframe gallery drops from 14 images to 3 or 4 that show iteration, not variety.

**Fix**: settle solo vs "we" (your Pitch says solo, the prose says "we" nine-plus
times); settle 1 month vs 6 months; change "Master's thesis" to "PGP final
project" — your Master's is the separate ongoing Jindal degree, and this is a
credential a recruiter can check.

**Reframe testing honestly**: four participants is small. Say so, and say what
that means — *"four moderated sessions; enough to find comprehension failures,
not enough to validate the SOS timing claim."* Naming the limit of your own
evidence is exactly the senior signal you're missing elsewhere.

---

## THE HUNGER PROJECT — `PROPOSED · SELF-INITIATED`
### Your NGO quotes are the best raw research material on the site. The learnings currently undercut all of it.

### PITCH

**Meta row:** Social impact · Food redistribution · Self-initiated concept · India

**One-liner:**
> NGOs don't lack food to distribute. They lack notice and transport. I designed
> the handoff between restaurants and NGOs — because neither side was the product.

**The stake**
> *"Leftover food at marriage functions or company events is going down the sewer
> when there are a lot of hungry stomachs on the street."* — Manav Charities

Restaurants notify NGOs after service hours, or at unpredictable times. Most NGOs
have no dedicated vehicle or staff. Surplus food has a narrow safe window. The
result isn't a shortage of generosity — it's a coordination failure that wastes
edible food daily.

**The reframe**
Every existing tool optimises for the restaurant *or* the NGO. Interviews made it
clear the failure was never on either side — it was in the space between them.
The product isn't a donation app. It's the handoff.

**The bet — and what it cost**
- **Two roles, one system.** Building separate apps would have rebuilt the silo.
  Cost: significantly more complexity in a self-initiated project. Gain: both sides
  see the same state at the same time.
- **Give NGOs a choice of pickup or delivery, rather than standardising one.** The
  clean systems answer is a single logistics path. But NGO capacity varies daily.
  Cost: two flows to design, two failure modes to handle, fallback rules when a
  delivery partner declines. Gain: a system that fits real capacity instead of
  assuming it.
- **Forecastability over volume.** NGOs don't need bigger occasional donations —
  they need predictable smaller ones they can allocate volunteers against.

**The change — intended, and how I'd know**
| Intended outcome | Metric I'd instrument |
|---|---|
| Food is collected inside its safe window | % of listings collected before expiry |
| NGOs can plan against supply | Lead time from listing to notification |
| Every donation has a clear owner | % of listings reaching a terminal state |
| Failures degrade instead of vanishing | % of declined deliveries that find a fallback |

*Self-initiated concept. Research with NGO staff; not built or piloted.*

**The judgment**
Two-sided social products fail when one side is an afterthought. The design work
that mattered wasn't either app — it was the decision nodes between them, where
responsibility transfers and everything currently breaks.

---

### DEEP DIVE — fixes

**Rewrite the learnings.** They're currently advocacy, not design reflection:
*"Small things make a great difference." / "If we can join hands… it would make a
big difference."* That reads like an essay conclusion. Replace with what designing
a two-sided coordination system taught you — about handoff ownership, about
designing for variable capacity, about why "decision node" turned out to be the
unit of design rather than "screen."

**Align the Pitch with reality.** The current pitch deck claims *"cross-functional
with NGO partners & restaurant pilots"* and states outcomes as fact. Your own role
field says self-initiated. Correct the pitch — the `PROPOSED · SELF-INITIATED`
badge makes this a non-issue.

**Fix the rendering bug**: `**Manav Charities**` appears with literal asterisks on
the page — markdown pasted into a plain-text field.

**Lead with the quotes.** They're the strongest evidence you have anywhere. They're
currently buried mid-page.

---

## The three unlinked case studies

`curateus-plugin`, `curateus-app`, `alhub-app` are written but unreachable from the
homepage. My recommendation for a senior application:

- **AlHub** — cut. An explicit UI reskin under "no UX changes allowed" constraints
  is a liability at senior level, not an asset.
- **Curateus plugin** — cut or compress to three lines. The title claims *"the
  hidden drop-off problem **I found**… and how a plugin **solved** it"* for a 2021
  internship, with no evidence it shipped or moved the drop-off it's named after.
- **Curateus v2.0** — compress to three lines.

Replace all three with a **"Selected earlier work"** strip: name, one line, year.
It fills the gap without inviting scrutiny you don't want.

**What to build instead — and this is the biggest gap in the portfolio:**

You market *"AI-enhanced design process"* in your hero, *"AI-Integrated UX
Workflows"* in your competencies, *"AI-assisted workflows"* on your CV, and an AI
Master's specialisation. Across all seven case studies, the word "AI" appears
**once** — a passing clause pointing at BrynQ sub-projects that don't exist on the
site.

That AI-assisted interface creation work at BrynQ is your differentiator and your
fifth case study. How you designed for trust in a generated mapping. What the
human review step looks like and why. What happens when the model is confidently
wrong. How you decided what to automate and what to leave manual. Nobody else
applying has that, and right now you're claiming it four times and showing it zero.

---

# 7. The data to go get

Ranked by how much it's worth.

| # | What | Who has it | If it doesn't exist |
|---|---|---|---|
| 1 | Scenario/requirements completion time, before vs after the wizard | BrynQ PO or interface team lead | Ask for a range and attribute it: *"the interface team estimates…"* |
| 2 | % of integrations started from a template | BrynQ product analytics | Count manually across recent customers |
| 3 | Requirements rework/rejection rate, before vs after | BrynQ review-flow data | The review flow itself logs this — it may already be there |
| 4 | Typical integration lead time, and pre-dev share of it | BrynQ PO | Even a rough split makes the opening line land |
| 5 | Merry Health engagement type, real title, dates | You | Must resolve regardless — it's absent from your CV entirely |
| 6 | STREE: solo or team; 1 month or 6 | You | Both views currently disagree |

**On attribution:** a sourced estimate beats a vague adjective every time.
*"The interface team estimated a 60% reduction in requirements clarification
rounds"* is credible, checkable, and honest. *"Dropped significantly"* is neither.

**If you get nothing:** every Pitch above still works — the intended-outcome +
metric table carries it, and it demonstrates measurement thinking, which is most
of what the metric would have proven anyway.

---

# 8. Order of work

1. **Badges and contradictions.** Add the four badges. Fix solo/we, 1mo/6mo,
   Master's/PGP, self-initiated, BrynQ dates. Half a day, removes every integrity
   risk in the portfolio.
2. **BrynQ.** Both views, using the copy above. Make it first and longest. This is
   the case study you'll actually be interviewed on.
3. **Merry Health.** Fill the empty sections, invert the data audit, promote the
   edge cases.
4. **The `[NEED]` list.** Email the PO. One conversation covers items 1–4.
5. **STREE and Hunger Project.** Cut, reframe, rewrite the learnings.
6. **The AI case study.** The highest-value new thing you could write.
