import type { MetadataRoute } from "next";
import { SITE_URL, projects } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Hash fragments (#about, etc.) are not separate crawlable URLs — omit them.
    ...projects.map((project) => ({
      url: `${SITE_URL}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
