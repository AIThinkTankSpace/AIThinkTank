import { getArticlesByCategory, type Category } from "@/lib/articles";

const BASE_URL = "https://www.aithinktank.space";

export async function GET() {
  const categories: Category[] = [
    "ai-for-kids",
    "ai-for-teens",
    "ai-for-corporates",
  ];

  const staticPages = [
    { url: BASE_URL, priority: "1.0", changefreq: "weekly" },
    { url: `${BASE_URL}/ai-for-kids`, priority: "0.9", changefreq: "weekly" },
    { url: `${BASE_URL}/ai-for-teens`, priority: "0.9", changefreq: "weekly" },
    { url: `${BASE_URL}/ai-for-corporates`, priority: "0.9", changefreq: "weekly" },
    { url: `${BASE_URL}/about`, priority: "0.5", changefreq: "monthly" },
  ];

  const articlePages = categories.flatMap((category) => {
    const articles = getArticlesByCategory(category);
    return articles.map((article) => ({
      url: `${BASE_URL}/${category}/${article.slug}`,
      priority: "0.8",
      changefreq: "monthly",
      lastmod: article.date,
    }));
  });

  const allPages = [...staticPages, ...articlePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    ${("lastmod" in page && page.lastmod) ? `<lastmod>${page.lastmod}</lastmod>` : `<lastmod>${new Date().toISOString().split("T")[0]}</lastmod>`}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
