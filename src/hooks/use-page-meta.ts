import { useEffect } from 'react';

const SITE = 'Tanya Sunny';

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Sets the document title and the shared description tags per route,
 * so a case study link previews as itself rather than as the home page.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const full = title === SITE ? title : `${title}, ${SITE}`;
    document.title = full;
    setMeta('meta[property="og:title"]', 'content', full);
    setMeta('meta[name="twitter:title"]', 'content', full);

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    setMeta('link[rel="canonical"]', 'href', window.location.origin + window.location.pathname);
  }, [title, description]);
}
