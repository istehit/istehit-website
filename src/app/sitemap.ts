import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${siteConfig.siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.siteUrl}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.siteUrl}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.siteUrl}/membership`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.siteUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.siteUrl}/code-of-conduct`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
