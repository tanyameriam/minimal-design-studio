# Curateus, artwork still owed

The case study at `/case-study/curateus` (`src/pages/CurateusCaseStudy.tsx`) is
written and built. Every product visual on it is currently an `<ArtSlot>`: a
visible dashed frame naming the file it is waiting for. There is not a single
Curateus image in `src/assets` yet, and nothing on the page pretends otherwise.

The home page card for Curateus has no cover either. It renders the drawn
plugin composition instead (`drawnCovers` in `src/components/ProjectCard.tsx`).
Once `curateus-plugin-hero.png` exists, set it as `cover` on the Curateus row in
`src/data/projects.ts` and delete that registry entry.

## How to fill one

1. Export the image to `src/assets/<filename>.png`.
2. In `CurateusCaseStudy.tsx`, import it and swap the `<ArtSlot ... />` for
   `<FadeInImage src={file} alt="..." className="w-full" />`.
3. `npm run build` to confirm nothing broke.

Fill them in priority order. The page is designed so the plugin screens carry
the most weight; the mobile and process shots support them.

## Priority 1, the final plugin (biggest visual weight)

| File | Where it appears |
| --- | --- |
| `curateus-plugin-open.png` | The final experience |
| `curateus-plugin-metadata.png` | The final experience |
| `curateus-plugin-topics.png` | The final experience, gallery |
| `curateus-plugin-rating.png` | The final experience |
| `curateus-plugin-confirm.png` | The final experience, gallery |
| `curateus-plugin-draft.png` | The final experience |
| `curateus-plugin-hero.png` | Gallery, the large 60% frame |

Export from Figma at full size. Do not crop these out of the Miro board: the
board resolution will not survive being shown this large.

## Priority 2, the fidelity progression

| File | Where it appears |
| --- | --- |
| `curateus-lofi-start.png` | Turning the flow into screens |
| `curateus-lofi-details.png` | Turning the flow into screens |
| `curateus-lofi-preview.png` | Turning the flow into screens |
| `curateus-lofi-entry.png` + `curateus-hifi-entry.png` | Lo-fi to hi-fi, pair 1 |
| `curateus-lofi-rating.png` + `curateus-hifi-rating.png` | Lo-fi to hi-fi, pair 2 |
| `curateus-lofi-final.png` + `curateus-hifi-final.png` | Lo-fi to hi-fi, pair 3 |

The three pairs have to be the *same* screen at two fidelities, otherwise the
section stops making its point. If a matched pair does not exist for one of the
three, cut that row rather than pairing mismatched screens.

## Priority 3, the mobile product

`curateus-mobile-discover.png`, `curateus-mobile-home.png`,
`curateus-mobile-preferences.png`, `curateus-mobile-bookmarks.png`,
`curateus-mobile-drafts.png`, `curateus-mobile-profile.png`

Used twice: a large 3-column grid in chapter 01, and a six-across strip in the
gallery. Portrait crops, 9:16.

## Priority 4, supporting artifacts (kept small on purpose)

| File | Source | Where |
| --- | --- | --- |
| `curateus-sketch-open.png` | Miro board, crop 1 | Exploring the recommendation flow |
| `curateus-sketch-context.png` | Miro board, crop 1 | same |
| `curateus-sketch-preview.png` | Miro board, crop 1 | same |
| `curateus-sketch-save.png` | Miro board, "save for later" crop | same |
| `curateus-miro-flow.png` | Miro board, the working flow | Reducing the journey, thumbnail |
| `curateus-research-headlines.png` | The press-headlines collage | Learning from existing behaviour |
| `curateus-research-landscape.png` | Content producers vs recommendation apps | same |
| `curateus-research-curation.png` | Human-curation players | same |

The three research images are the slides shared in the brief. They are supporting
evidence, not centrepieces, so they render in a narrow three-across strip.

The full Miro board is never shown whole. It is a source, and it is used at
thumbnail size once, deliberately, as a "working artifact" next to the redrawn
final flow.

## Facts to confirm before this page is linked publicly

The page currently follows the brief. These four points contradict what the rest
of the repo already says about Curateus, and one of them is a claim a recruiter
can check:

1. **Role.** This page says part-time UI/UX Design Intern throughout.
   `src/data/projects.ts` and `src/data/caseStudies/curateus.ts` say UX/UI intern
   who then became UI Designer. Both cannot be the headline.
2. **Team.** This page says Product Owner / PM plus three developers.
   The existing copy says founder plus Product Owner. Pick one.
3. **Implementation.** The outcome section says only that the designs were
   prepared and handed to development through Zeplin. It does **not** claim the
   plugin shipped, because that is not established. If the plugin was built and
   released, say so there. If it was not, leave it as it stands.
4. **Deepstash.** The existing draft says Curateus was live on the Play Store
   until it was "taken up by Deepstash". That claim is not on this page at all,
   because the exact meaning and date are still owed. It is checkable, so it
   should only go on once the wording is exact.

There are no adoption, conversion or usage numbers anywhere on the page, and none
should be added unless they were actually measured.
