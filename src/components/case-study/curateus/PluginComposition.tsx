/**
 * The Curateus plugin, drawn.
 *
 * Lives in its own module because the home page's project card uses it as a
 * cover (see the drawnCovers registry in components/ProjectCard.tsx). Keeping
 * it out of ./diagrams means the landing bundle pulls in this drawing alone
 * rather than the whole Curateus diagram set.
 */

/**
 * The plugin's structure: an article underneath, the interaction layer on
 * top of it. Drawn rather than screenshotted, because the point of the
 * picture is the relationship between the two layers, not the pixels.
 *
 * The panel is inked because that was the actual visual decision: the
 * plugin can land on any website, so it has to stop looking like part of
 * one. See the "Creating separation" slide.
 *
 * The frame carries `.light` (see index.css) so the article underneath is
 * always a light web page and the plugin over it is always the darker
 * layer, whichever theme the surrounding portfolio is in. Letting it flip
 * with the site would reverse the exact contrast the drawing argues about.
 */
export const PluginComposition = ({
  annotate = false,
  caption = true,
  className = '',
}: {
  annotate?: boolean;
  /** Off when the drawing is doing a job that explains itself, like a card cover. */
  caption?: boolean;
  className?: string;
}) => (
  <figure className={className}>
    <div className="light relative border border-border bg-background text-foreground">
      {/* Browser chrome. */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block h-2 w-2 rounded-full bg-ink-400" />
          ))}
        </span>
        <span aria-hidden="true" className="h-4 flex-1 rounded-[2px] border border-border" />
      </div>

      {/* The article, and the interaction layer sitting over it. */}
      <div className="relative overflow-hidden p-5 md:p-7">
        <div aria-hidden="true" className="max-w-[70%] space-y-3 pb-4 md:space-y-3.5">
          <span className="block h-3 w-4/5 bg-ink-400 md:h-4" />
          <span className="block h-1.5 w-2/5 bg-border" />
          <span className="mt-6 block h-24 w-full bg-border md:h-32" />
          {[
            'w-full',
            'w-11/12',
            'w-full',
            'w-3/4',
            'w-full',
            'w-5/6',
            'w-full',
            'w-2/3',
          ].map((w, i) => (
            <span key={i} className={`block h-1.5 ${w} bg-border`} />
          ))}
        </div>

        {/* The plugin. Inked, so it separates from whatever is underneath. */}
        <div className="absolute right-4 top-5 w-[58%] max-w-[19rem] bg-foreground p-4 text-background shadow-[0_10px_40px_-12px_rgba(0,0,0,0.45)] md:right-6 md:top-7 md:p-5">
          <div className="flex items-center justify-between">
            <p className="label opacity-70">Curateus</p>
            <span aria-hidden="true" className="text-xs opacity-50">
              &times;
            </span>
          </div>

          <p className="mt-4 text-sm leading-snug md:text-base">Recommend this article</p>

          <div className="mt-4 space-y-2 border-t border-background/25 pt-4">
            <p className="label opacity-50">Detected</p>
            <span aria-hidden="true" className="block h-1.5 w-full bg-background/40" />
            <span aria-hidden="true" className="block h-1.5 w-3/5 bg-background/25" />
          </div>

          <div className="mt-4">
            <p className="label opacity-50">Topics</p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {['Design', 'Product', 'Curation'].map((tag) => (
                <span
                  key={tag}
                  className="border border-background/35 px-2 py-1 text-[0.6875rem] leading-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="label opacity-50">Your take</p>
            <div aria-hidden="true" className="mt-2.5 flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`h-2 flex-1 ${i < 4 ? 'bg-background' : 'bg-background/25'}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <span className="flex-1 bg-background px-3 py-2 text-center text-xs text-foreground">
              Recommend
            </span>
            <span className="border border-background/35 px-3 py-2 text-xs">Draft</span>
          </div>
        </div>
      </div>
    </div>

    {annotate && (
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="border-t border-border pt-3">
          <p className="label text-ink-500">Source content</p>
          <p className="mt-2 text-sm leading-snug text-ink-600 md:text-base">
            Stays visible and untouched. The curator is still reading.
          </p>
        </div>
        <div className="border-t border-foreground pt-3">
          <p className="label">Curateus interaction</p>
          <p className="mt-2 text-sm leading-snug text-ink-600 md:text-base">
            Reads as a layer over the page, not as part of it.
          </p>
        </div>
      </div>
    )}

    {caption && (
      <figcaption className="label mt-5 text-ink-500">
        Drawn for this page: the structure of the plugin, not a screenshot
      </figcaption>
    )}
  </figure>
);
