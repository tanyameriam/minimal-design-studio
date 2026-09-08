import type { ImgHTMLAttributes } from 'react';

/**
 * An img that defers its download until it is near the viewport, then fades
 * in once its pixels are ready, so images arrive softly instead of popping.
 *
 * Lazy loading and async decoding are defaults rather than something every
 * call site has to remember: of the thirty-odd uses across the case studies
 * only a handful passed `loading`, so most of a long study's images were
 * being fetched up front. Any image that genuinely has to be eager, an
 * above-the-fold hero, can still pass `loading="eager"` and override it.
 *
 * A muted tint sits behind the image while it loads, so the reserved space
 * reads as a frame filling in rather than as a hole in the page. Cached
 * images render instantly: the ref sees `complete` before paint. The global
 * reduced-motion rule collapses the transition, so this degrades to a plain
 * img.
 */
const FadeInImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const { className = '', loading = 'lazy', decoding = 'async', ...rest } = props;

  const markLoaded = (el: HTMLImageElement | null) => {
    if (el?.complete) el.dataset.loaded = 'true';
  };

  return (
    <img
      ref={markLoaded}
      loading={loading}
      decoding={decoding}
      onLoad={(e) => {
        e.currentTarget.dataset.loaded = 'true';
      }}
      data-loaded="false"
      className={`bg-ink-400/10 opacity-0 transition-opacity duration-700 ease-smooth data-[loaded=true]:bg-transparent data-[loaded=true]:opacity-100 ${className}`}
      {...rest}
    />
  );
};

export default FadeInImage;
