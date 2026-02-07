import { useEffect } from 'react';

const SITE_NAME = 'Tinted Technologies';
const DEFAULT_DESCRIPTION = 'Cloud & AI architecture for teams building what\'s next. Training, consulting, and workshops for individuals and small businesses.';
const DEFAULT_IMAGE = 'https://tintedtechnologies.com/logo.png';
const BASE_URL = 'https://tintedtechnologies.com';

function setMetaTag(property, content, isName = false) {
  const attr = isName ? 'name' : 'property';
  let tag = document.querySelector(`meta[${attr}="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

/**
 * Custom hook to set page-level SEO meta tags.
 * @param {Object} options
 * @param {string} options.title - Page title (will be appended with site name)
 * @param {string} [options.description] - Page description
 * @param {string} [options.path] - URL path (e.g., '/blog')
 * @param {string} [options.image] - OG image URL
 * @param {string} [options.type] - OG type ('website' or 'article')
 * @param {string} [options.publishedDate] - Article published date (ISO string)
 * @param {string} [options.author] - Article author
 */
export function useSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedDate,
  author,
} = {}) {
  useEffect(() => {
    // Title
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Cloud & AI Architecture`;
    document.title = fullTitle;

    // Standard meta
    setMetaTag('description', description, true);

    // Canonical
    const canonicalUrl = `${BASE_URL}${path}`;
    setCanonical(canonicalUrl);

    // Open Graph
    setMetaTag('og:title', fullTitle);
    setMetaTag('og:description', description);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:image', image);
    setMetaTag('og:type', type);
    setMetaTag('og:site_name', SITE_NAME);

    // Twitter
    setMetaTag('twitter:title', fullTitle, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', image, true);

    // Article-specific
    if (type === 'article' && publishedDate) {
      setMetaTag('article:published_time', publishedDate);
      if (author) {
        setMetaTag('article:author', author);
      }
    }

    // Cleanup: reset to defaults on unmount
    return () => {
      document.title = `${SITE_NAME} | Cloud & AI Architecture`;
      setMetaTag('description', DEFAULT_DESCRIPTION, true);
      setCanonical(BASE_URL + '/');
      setMetaTag('og:title', `${SITE_NAME} | Cloud & AI Architecture`);
      setMetaTag('og:description', DEFAULT_DESCRIPTION);
      setMetaTag('og:url', BASE_URL + '/');
      setMetaTag('og:image', DEFAULT_IMAGE);
      setMetaTag('og:type', 'website');
      setMetaTag('twitter:title', `${SITE_NAME} | Cloud & AI Architecture`, true);
      setMetaTag('twitter:description', DEFAULT_DESCRIPTION, true);
      setMetaTag('twitter:image', DEFAULT_IMAGE, true);
    };
  }, [title, description, path, image, type, publishedDate, author]);
}
