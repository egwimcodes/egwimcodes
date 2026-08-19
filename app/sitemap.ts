import type { MetadataRoute } from "next";
import { SITE_URL, navLinks } from "@/content/site";

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
  ];
}
