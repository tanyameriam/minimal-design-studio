# Case study QA ledger

Scored August 2026 against the portfolio playbook's 15-criterion rubric
(0 = absent, 1 = partial, 2 = clear; maximum 30). Scores reflect the site as
built, with draft markers unfilled. Filling the gap ledger below is what moves
the partial scores.

## Scores

| Criterion | BrynQ | Layrrrd | Merry Health | STREE | Hunger Project |
| --- | --- | --- | --- | --- | --- |
| Problem clarity | 2 | 2 | 2 | 2 | 2 |
| Stakes | 2 | 1 | 2 | 2 | 2 |
| Evidence | 2 | 1 | 1 | 2 | 1 |
| Insight | 2 | 2 | 2 | 2 | 2 |
| Decision making | 2 | 2 | 2 | 2 | 2 |
| Rationale | 2 | 2 | 2 | 2 | 2 |
| Trade-offs | 2 | 2 | 2 | 2 | 2 |
| Constraints | 2 | 2 | 2 | 1 | 1 |
| Individual contribution | 2 | 1 | 1 | 0 | 2 |
| Solution clarity | 2 | 2 | 2 | 2 | 2 |
| Visual communication | 1 | 0 | 2 | 2 | 2 |
| Outcome | 1 | 2 | 1 | 1 | 1 |
| Reflection | 2 | 2 | 1 | 2 | 1 |
| Scannability | 2 | 2 | 2 | 2 | 2 |
| Distinctiveness | 2 | 2 | 2 | 2 | 2 |
| **Total** | **28** | **25** | **26** | **26** | **26** |

Interpretation band: 26 to 30 is "excellent portfolio story", 21 to 25 is
"strong but needs refinement". Every lost point below traces to a named gap.

## Why points were lost

**BrynQ (28).** Visual communication: three diagrams but no screen of the
wizard itself; the case argues a product surface it never shows. Outcome: the
~6-months-to-~2-weeks figure is estimated from the template-led delivery
model rather than instrumented in production, and the rework rate and
template-share numbers are still owed (todo in the outcomes section). The
one-week variant that used to appear on the story deck and the CV has been
removed: 92% and 13x are the arithmetic of 26 weeks down to 2, not down to 1.
See CONTENT_VERIFICATION.md.

**Layrrrd (25).** Visual communication: zero imagery anywhere; the cover and
2 to 3 screenshots are the single highest-leverage fix on the site. Evidence:
the mid-sprint user testing is described but its findings deserve one concrete
trace from finding to change. Stakes: consumer stakes are argued but soft next
to the operational studies. Contribution: team size and roles are a draft
marker, so "I led design" has no visible boundary.

**Merry Health (26, scored before the 29 Aug 2026 rebuild).** Evidence: the
flow audit is described, but whether it came from observed dispatches or
reconstruction is unstated. Contribution: team unknown. Outcome: intended
only, correctly framed. Reflection: the "where I was wrong" paragraph is
still a todo. The rebuilt page at `/case-study/merry-health` closes the
contribution and reflection gaps and leaves the evidence one open; it has
not been rescored.

**STREE (26).** Contribution: the only zero on the board. Role is a draft
marker with a "Team project" fallback; until roles are named, a reviewer
cannot tell Tanya's work from the team's. Constraints: present (one month,
mentor reviews) but never framed as forces that shaped decisions. Outcome:
intended only.

**Hunger Project (26).** Evidence: research is one-sided (NGO staff only,
honestly flagged) and the sample size is a todo. Constraints: thinnest of the
five. Reflection: lessons stated, but no assumption is shown being wrong.
Outcome: intended only.

## Red flags checked (playbook list)

Cleared: identical section order (structures now vary per study and STREE has
a decisions band), research disconnected from decisions, personas that never
influence the product, process-as-evidence, unsupported business metrics
(every number is either confirmed by Tanya or explicitly intended), missing
reflection, missing constraints, generic template appearance.

Still standing:

- Layrrrd has no imagery at all.
- STREE ownership is unresolved, which the playbook treats as a contribution
  integrity issue.
- AI capability is claimed in the hero, About, and CV, but no case study
  shows AI-native design work directly. Layrrrd's design-system-governance
  step partially covers it; the docs backlog names a dedicated AI case study
  as the highest-value new piece.

## Gap ledger (facts only Tanya can supply)

Everything here exists as a `[NEED: ...]` marker or todo block in the data
files. Never fill these by invention; they are checkable against her CV and
LinkedIn.

- **Layrrrd**: team size and roles; cover image plus 2 to 3 screenshots
  (extension, digest, Rudolf states).
- **STREE**: team roles and what she owned; taps-to-SOS count (derivable from
  her Figma flow, belongs on the project card chip).
- **Merry Health**: mostly resolved on 29 Aug 2026, when the scroll case
  study was built. Team is five designers; the engagement is an MDes
  practicum apprenticeship with the company, 2026, not freelance 2024; the
  failure-mode fallbacks are named on the proposed-workflow board and are
  now written out. Still open: whether the current-state flow was observed
  live or reconstructed with the operations team (the page hedges rather
  than claims either), the duplicate-booking reconciliation rule, and the
  Figma prototype URL for the call to action. The "where I was wrong"
  paragraph is replaced on the new page by a stated limit: the system has
  never met a real dispatch.
- **BrynQ**: requirements rework rate; share of integrations started from
  templates; the "where I was wrong" paragraph (drafted as a todo in the
  reflection); whether other workstreams are worth naming.
- **Hunger Project**: NGO conversation count and with whom; handoff-point
  count (derivable from the service blueprint, belongs on the project card
  chip).
- **EducAItors** (dev-only draft at `/case-study/educaitors`): the AI case
  study, scaffolded with every owed fact as a marker. Needs the problem and
  stakes, the faculty research findings, rationale and trade-off for each of
  the three decisions (evidence-first scoring, fail-check with fallback,
  double-blind calibration), what Tanya owned vs the six-person team, the
  project year and timeline, and 1 to 3 reflection points from the
  apprenticeship report. Filling this also closes the site-wide AI gap.
- **Curateus** (dev-only draft at `/case-study/curateus`): confirmed facts are
  in; needs the why behind the curator/subscriber split and the plugin,
  evidence, dual-mode and plugin detail, what "taken up by Deepstash" means
  precisely and when, adoption signals if any, a reflection, and an NDA pass
  before screens are added. Once filled, decide how the two earlier-work rows
  fold into it.
