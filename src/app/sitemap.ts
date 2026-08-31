import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bijendramalik.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/media`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/political-journey`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/social-work`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/vision-mission`,
      lastModified: new Date(),
    },
  ];
}