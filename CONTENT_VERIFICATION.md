# Content verification

Everything the home-page rebuild touched, traced back to a source. Written so
nothing on the page rests on a number nobody can point at.

Two lists: **corrected** is what was changed and why, **open** is what still
needs Tanya to confirm. Nothing in either list was invented to fill a gap; a
project with no figure shows no figure.

---

## Corrected

### BrynQ: one week became two weeks, everywhere

The site carried two incompatible versions of the same claim.

| Where | Said | Now says |
| --- | --- | --- |
| `src/pages/BrynqStory.tsx`, cover slide | `~1 wk` per interface "today" | `~2 wk`, "estimated rather than measured" |
| `src/pages/CV.tsx`, print block | "cut interface build time from 6 months to 1 week" | "~6 months on a modelled path to ~2 weeks" |
| `src/pages/CV.tsx`, on-page list | same | same, plus the estimate caveat |

The 92% and 13x figures elsewhere on the BrynQ case study are the arithmetic
of roughly 26 weeks reduced to roughly 2. They were never consistent with a
one-week claim. The internally consistent set now used everywhere is:

- Historical implementation: **approximately six months**
- Template-led implementation: **approximately two weeks**
- Reduction: **approximately 92%**
- Theoretical capacity increase: **approximately 13x**
- Templates described as **"2x easier"** by the BrynQ project manager

The first four are **estimated from the template-led delivery model**, not
observed in production, and every surface now says so. The fifth is
**stakeholder-reported**. Surfaces checked and consistent:
`src/data/projects.ts`, `src/data/caseStudies/brynq.ts`,
`src/pages/BrynqCaseStudy.tsx`, `src/pages/BrynqStory.tsx`,
`src/pages/BrynqVault.tsx`, `src/pages/CV.tsx`, `docs/playbook-qa.md`.

### Evidence status is carried by the data, not by the prose

Each featured project shows exactly one figure, and the visible provenance
label is generated from that figure's `EvidenceStatus` in
`src/data/projects.ts`. Nothing on the page can present an estimate and a
measured result in the same voice, and no label is repeated within a row.

| Project | Figure | Label shown |
| --- | --- | --- |
| BrynQ | ~6 mo to ~2 wk, potential implementation cycle | Estimated from the delivery model |
| Layrrrd | 15 paying customers, 126 freemium signups | Observed (payment records and PostHog) |
| Merry Health | 9 manual handoffs redesigned around one ride record | Proposed system |

Layrrrd's figure is labelled **observed**, not validated. "Validated" is the
right word for the 15 paying customers on their own, but this figure also
carries the freemium signups, and one label over a compound number has to be
true of both halves. Both were measured directly.

EducAItors and Curateus are no longer featured rows; they appear in the
compact index below, which carries no metrics at all. Their full numbers, with
provenance, are unchanged on `/work` and in their case studies.

The shared `estimated` label now reads "Estimated from the delivery model"
rather than "from the implementation model". Same claim, and it matches the
source string on the figure.

### Imagery: nothing generated, nothing invented

The mockup that set the visual direction contained fabricated product screens.
None were reproduced. All three rows use one ratio (16:9, `object-cover`, never
stretched). What they actually show:

- **BrynQ** - `brynq-wizard-flow.png`, the interface requirements flow. BrynQ
  product screens are under NDA, which the story deck already states. The
  redacted Scenario spreadsheet (`brynq-scenario-redacted.png`) was tried first
  and dropped: at home-page size it reads as texture rather than as an
  artefact, and the flow shows what the row actually claims, repeated setup
  knowledge structured into the product.
- **Layrrrd** - no photography exists in this repository. The row draws the
  project's own cover: the wordmark, the tagline, and the `RudolfSitting` SVG
  already in `src/components/case-study/layrrrd/Rudolf.tsx`, on the project's
  own cream token island. This is the dog and cover Tanya supplied, rebuilt as
  vector so it stays sharp and costs no image bytes.
- **Merry Health** - `merry-hifi-dashboard.png`, from the case study.

---

## Open: needs Tanya to confirm

1. **Was any BrynQ implementation actually delivered in about one week?**
   The old CV line and the old story cover both claimed it as a present-tense
   fact. If a real scoped case exists, it should come back as a separate,
   clearly scoped observation ("one integration, of this type, in this
   window"), not as the headline figure. Until then the site states the
   two-week model only.

2. **"Three to six months per interface" on the BrynQ cost slide.** It reads
   as a range across interfaces and resolves to about six months in the same
   slide's body. It does not contradict the canonical figure, but confirm this
   is the framing you want alongside "~6 months" everywhere else.

3. **Merry Health reads as two things.** The home-page row says "Academic
   practicum · Proposed system"; the card on `/work` says "(Apprenticeship)".
   Both describe the same MDes practicum apprenticeship with the company, so
   neither is wrong, but they should probably say the same thing.

4. **Layrrrd: "3 channels" on the cover.** The cover tagline you supplied says
   "15 paying customers, 3 channels deep, in 1 sprint". The case study
   describes four capture surfaces: Chrome extension, paste bar, Telegram bot,
   WhatsApp bot. Both may be right (a paste bar is arguably not a channel), but
   the public copy should settle on one count.

5. **Merry Health: nine manual handoffs.** Taken from this repository's own
   project data. `docs/playbook-qa.md` still records an open question about
   whether the flow audit came from observed dispatches or from
   reconstruction. That provenance is not yet stated anywhere on the site.

6. **Layrrrd and Curateus imagery.** Both are drawn because the exports are
   still owed. See `docs/playbook-qa.md` and `docs/curateus-assets.md`. When
   the real Layrrrd files land, add a `featured.media` block to
   `src/data/projects.ts` and the drawing is replaced automatically. Curateus
   is no longer on the home page at all, so its drawing only appears on
   `/work` now.

7. **EducAItors** still has the two open facts already tracked in the project
   notes. Neither appears in the ledger copy, so nothing on the home page
   depends on them.

---

## Not done, and why

**Server-side rendering.** The brief asked for server-rendered project
headlines. This is a client-rendered Vite SPA deployed as static files on
Vercel; adding SSR is an architectural change well outside a home-page
redesign. What was done instead: the first paint contains every word of all three
featured rows, with no placeholder, zero state or deferred content anywhere,
so nothing renders as empty and then fills in.

**Browser-rendered breakpoint check.** The cached Chromium in this environment
is missing its system libraries (`libnspr4`), which need root to install, so
the layout was verified by rendering the page to static markup and auditing
the CSS rather than by looking at it. The grid templates were sized by hand for
360, 390, 768, 1024, 1280 and 1440, but a human should look at it before this
ships.

**Accessibility.** There is no interactive state left in the project section
to get wrong: every row is static markup, the only interactive elements are
semantic links, and hover and focus change nothing but colour and a few pixels
of movement. Images carry real alt text, the image links carry their own
labels, and the decorative thumbnail in the footer carries an empty alt. It has
not been tested with a screen reader, so no conformance claim is made.
