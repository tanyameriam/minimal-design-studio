# Writing, process visuals still owed

The three essays at `/writing` are written, built, and complete as copy. Every
process visual in them is currently a slot: a dashed frame naming the export it
is waiting for, with the caption already written underneath it. Nothing on the
page pretends otherwise, and nothing stands in for the missing evidence.

Ten exports are owed in total. The alt text for each one is already written, in
the article data files, so an export cannot arrive without it.

## How to fill one

1. Export to `src/assets/<filename>.webp` (or `.png` if the diagram has fine
   line work that WebP softens). Aim for about 2000px wide.
2. In the article's data file, import it and add `src` (plus `width` and
   `height`) to that figure. The alt text and caption are already there.
3. `npm run build` to confirm nothing broke.

The slot becomes an image that opens full size in the shared lightbox, which is
what the dense workflow diagrams need: several of these are unreadable at
reading-column width.

## Article 1, `src/data/writing/aiAgent.ts`

| Asset | What it shows |
| --- | --- |
| `ai-agent-interface` | Lead. The final agent UI: clarification, the map, the trust and refinement panel |
| `ai-agent-linear-pipeline` | The original Make.com flow, webhook through PDF and storage |
| `ai-agent-four-responsibilities` | Context Clarity, Knowledge Validator, Structure Builder, Quality Checker |

Optional extra named in the brief: a small before and after of the first
automation beside the evolved agent. There is no slot for it; add one if the
export exists.

## Article 2, `src/data/writing/interactionDesign.ts`

| Asset | What it shows |
| --- | --- |
| `ixd-final-prototype` | Lead. A representative resource-planning or project-detail screen |
| `ixd-brief-to-scenario` | BGPOSSTAL brief, experience and scenario map, consolidated scenario |
| `ixd-three-workflow-variations` | Manual/reactive, suggested/reactive, preventive/conflict-aware |
| `ixd-detailed-workflow` | The chosen end-to-end workflow |
| `ixd-workflow-to-wireframe` | One stage: workflow statement, Six-Ups, converged wireframe |

`ixd-brief-to-scenario` should be redrawn for reading rather than exported as
the source spreadsheet, which is illegible at page scale. Its caption says so.

## Article 3, `src/data/writing/visualDesign.ts`

| Asset | What it shows |
| --- | --- |
| `vxd-final-convergence` | Lead. The final combined dashboard direction |
| `vxd-concept-directions` | Responsible Authority and Calm Assurance territories |
| `vxd-hero-variations` | The three hero-dashboard alternatives |

Optional extra named in the brief: a colour, typography, or composition detail
from the concept board.

## Before exporting from the source pages

One of the Notion source pages carried visible testing credentials. Crop or
rebuild anything that shows an account, a key, a webhook URL, or internal
testing instructions, and do not link the source page from the site. The
essays link only to the finished public product (the live agent and its
repository, on article 1); the other two link to nothing, deliberately.
