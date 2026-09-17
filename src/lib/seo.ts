import type { Metadata } from "next";

const siteUrl = "https://bijendramalik.com";

/**
 * WhatsApp / Facebook / X-style link-preview metadata for a page.
 *
 * @param title       Tab + preview card title
 * @param description Preview card description (shown under the title)
 * @param path        Route path, e.g. "/about"
 * @param image       Preview image under /public — site-wide common brand card by default
 */
export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/og-image.png"
): Metadata {
  const url = `${siteUrl}${path}`;

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
