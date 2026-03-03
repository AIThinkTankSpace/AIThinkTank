import type { MetadataRoute } from "next";
import { getArticlesByCategory, type Category } from "@/lib/articles";

const BASE_URL = "https://www.aithinktank.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const categories: Category[] = [
    "ai-for-kids",
    "ai-for-teens",
    "ai-for-corporates",
  ];

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/ai-for-kids`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ai-for-teens`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ai-for-corporates`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = categories.flatMap((category) => {
    const articles = getArticlesByCategory(category);
    return articles.map((article) => ({
      url: `${BASE_URL}/${category}/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  });

  return [...staticPages, ...articlePages];
}
