import type { Metadata } from "next";

const siteUrl = "https://bijendramalik.com";

/**
 * WhatsApp / Facebook / X-style link-preview metadata for a page.
 *
 * Canonical URLs MUST match the real served URLs exactly. The site runs with
 * `trailingSlash: true` (static export on GitHub Pages), so every page lives
 * at `/path/` — the trailing slash is appended here automatically so the
 * declared canonical, the sitemap and the served URL never disagree.
 * A mismatched canonical is what causes Google's
 * "Duplicate without user-selected canonical" indexing error.
 *
 * @param title       Tab + preview card title
 * @param description Preview card description (shown under the title)
 * @param path        Route path, e.g. "/about" or "/about/" — both fine
 * @param image       Preview image under /public — site-wide common brand card by default
 */
export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/og-image.jpg"
): Metadata {
  const normalizedPath = path.endsWith("/") ? path : `${path}/`;
  const url = `${siteUrl}${normalizedPath}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Bijendra Malik",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
