import type { ImgHTMLAttributes } from 'react';

/**
 * An img that fades in once its pixels are ready, so images arrive softly
 * instead of popping. Cached images render instantly (the ref sees
 * `complete` before paint). The global reduced-motion rule collapses the
 * transition, so this degrades to a plain img.
 */
const FadeInImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const { className = '', ...rest } = props;

  const markLoaded = (el: HTMLImageElement | null) => {
    if (el?.complete) el.dataset.loaded = 'true';
  };

  return (
    <img
      ref={markLoaded}
      onLoad={(e) => {
        e.currentTarget.dataset.loaded = 'true';
      }}
      data-loaded="false"
      className={`opacity-0 transition-opacity duration-700 ease-smooth data-[loaded=true]:opacity-100 ${className}`}
      {...rest}
    />
  );
};

export default FadeInImage;
