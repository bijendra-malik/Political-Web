import type { Metadata } from "next";

const siteUrl = "https://bijendramalik.com";

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}
