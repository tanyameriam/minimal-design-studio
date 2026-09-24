# Writing, process visuals

The three essays at `/writing` carry eleven figures between them. Five are
filled. Six are still slots: a dashed frame naming the export it is waiting
for, with the caption already written underneath it. Nothing on the page
pretends otherwise, and nothing stands in for missing evidence.

An earlier version of this file said ten were owed. There are eleven slots in
total, counting each article's lead.

## How to fill one

1. Export to `src/assets/writing/<asset-name>.png` (or `.webp` where the
   diagram has no fine line work). Aim for about 2000px wide or more.
2. In the article's data file, import it and add `src`, `width` and `height`
   to that figure, and set `ratio` to the export's real proportions rather
   than a guessed one. The alt text and caption are already there.
3. `npm run build` to confirm nothing broke.

A filled slot becomes an image that opens full size in the shared lightbox,
which is what the dense boards need: several of these are unreadable at
reading-column width and are meant to be opened.

## Article 1, `src/data/writing/aiAgent.ts` — complete

| Asset | State |
| --- | --- |
| `ai-agent-interface` | **Filled.** Captured from the live agent at mindmap-agent.vercel.app on a real run: topic entered, all three Context Clarity questions answered, map generated. Shows clarification, the map and the quality panel together, which is what the caption claims. |
| `ai-agent-linear-pipeline` | **Filled.** Tanya's Make.com scenario, supplied 17 Sep 2026. Eight modules: webhook, compose id, Gemini call, JSON parse, PlantUML PDF, Drive upload, iterator, Sheets. |
| `ai-agent-four-responsibilities` | **Filled.** The architecture diagram, supplied 17 Sep 2026. Confirms all four agents named in the prose, under an Orchestrator, reaching providers through one LLM adapter. |

The caption on the pipeline figure no longer asserts a stage count, because
the screenshot shows eight modules while the prose names seven
responsibilities. Both are true; printing one number next to the other was
not.

A second Make.com screenshot (`1st version.png`, the Claude variant) was
**not** used: it shows only six modules, ending at Sheets with no PlantUML,
PDF or Drive step, and it carries account usage, credit balance and an error
history. If it is ever wanted, crop to the module row.

## Article 2, `src/data/writing/interactionDesign.ts` — four of five

| Asset | State |
| --- | --- |
| `ixd-final-prototype` | Lead, **filled** 24 Sep 2026 with the final 2.0 project detail screen (`Roadmap Overview Wireframe-6.png` in Tanya's export). |
| `ixd-brief-to-scenario` | **Owed.** BGPOSSTAL brief, experience and scenario map, consolidated scenario. Redraw for reading rather than exporting the source spreadsheet, which is illegible at page scale. Its caption already says so. |
| `ixd-three-workflow-variations` | **Filled.** The three Figma variations, pulled from the IXD03 Notion page and composited into one stacked image at a common width. |
| `ixd-detailed-workflow` | **Filled** with `ixd-final-workflow.png`, the final Variation 3 board supplied 24 Sep 2026: five screens, ten numbered error states, and a goal/description/questions column under each screen. Replaces the earlier `ixd-detailed-workflow.png` export, which is no longer used. |
| `ixd-workflow-to-wireframe` | **Filled** 24 Sep 2026 with `ixd-six-ups.png`: the six 2.0 project detail variations composited into a numbered 3×2 grid. Caption and alt now describe the six layouts rather than the three-level view first planned. |

The two owed process figures are on the **IXD04** Notion page, as Figma
embeds Notion renders at 6752x3344 and 4289x7822. Both are reachable in a
browser but not by script: Notion now answers automated visits to that page
with a Cloudflare human check, which is not something to work around. Export
them from Figma, or open the page and save the two embed previews by hand.

## Article 3, `src/data/writing/visualDesign.ts` — two of three

| Asset | State |
| --- | --- |
| `vxd-final-convergence` | Lead, **filled** 24 Sep 2026 with `vxd-final-dashboard.png`: Layout D (masonry / asymmetric grid), confirmed by Tanya as the final. |
| `vxd-concept-directions` | **Owed.** Responsible Authority and Calm Assurance territories, with the chosen synthesis. |
| `vxd-hero-variations` | **Filled** 24 Sep 2026 with `vxd-dashboard-options.png`: the first grey wireframe beside Layout B (operate vs configure). Caption rewritten to say what the pair shows rather than claim three options. |

The two VXD Notion pages hold no images and no embeds at all, only headings
and prose, so there is no source to pull from. These three have to come out
of Figma. A concept board is the one case where redrawing would defeat the
point, since colour, type and composition are the content.

## Before exporting from the source pages

One of the Notion source pages carried visible testing credentials. Crop or
rebuild anything that shows an account, a key, a webhook URL, or internal
testing instructions, and do not link the source page from the site. The
essays link only to the finished public product (the live agent and its
repository, on article 1); the other two link to nothing, deliberately.
