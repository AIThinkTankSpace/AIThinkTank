import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export type Category = "ai-for-kids" | "ai-for-teens" | "ai-for-corporates";

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: Category;
  readTime: string;
  tags: string[];
  type: "article" | "interactive" | "guide" | "tool-review";
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

export function getArticlesByCategory(category: Category): ArticleMeta[] {
  const categoryDir = path.join(contentDirectory, category);

  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".md"));

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(categoryDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "2025-03-01",
      description: data.description || "",
      category,
      readTime: data.readTime || "5 min read",
      tags: data.tags || [],
      type: data.type || "article",
    } as ArticleMeta;
  });

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getArticleBySlug(
  category: Category,
  slug: string
): Promise<Article | null> {
  const fullPath = path.join(contentDirectory, category, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || "2025-03-01",
    description: data.description || "",
    category,
    readTime: data.readTime || "5 min read",
    tags: data.tags || [],
    type: data.type || "article",
    contentHtml,
  };
}

export function getAllArticleSlugs(): { category: Category; slug: string }[] {
  const categories: Category[] = [
    "ai-for-kids",
    "ai-for-teens",
    "ai-for-corporates",
  ];
  const slugs: { category: Category; slug: string }[] = [];

  for (const category of categories) {
    const articles = getArticlesByCategory(category);
    for (const article of articles) {
      slugs.push({ category, slug: article.slug });
    }
  }

  return slugs;
}
