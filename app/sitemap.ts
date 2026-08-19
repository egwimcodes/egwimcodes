import type { MetadataRoute } from "next";
import { SITE_URL, navLinks, projects } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...navLinks
      .filter(({ id }) => id !== "home")
      .map(({ id }) => ({
        url: `${SITE_URL}/#${id}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ...projects.map((project) => ({
      url: `${SITE_URL}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
