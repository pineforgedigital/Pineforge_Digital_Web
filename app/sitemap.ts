import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pineforge.digital";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/process`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      priority: 0.3,
    },
  ];
}
