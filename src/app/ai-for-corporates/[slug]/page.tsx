import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticleBySlug, getArticlesByCategory } from "@/lib/articles";
import { hubConfigs } from "@/lib/hub-config";
import NewsletterCTA from "@/components/NewsletterCTA";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

const CATEGORY = "ai-for-corporates" as const;
const hub = hubConfigs[CATEGORY];

export async function generateStaticParams() {
  const articles = getArticlesByCategory(CATEGORY);
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(CATEGORY, slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(CATEGORY, slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd article={article} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.aithinktank.space" },
          { name: hub.title, url: `https://www.aithinktank.space/${CATEGORY}` },
          { name: article.title, url: `https://www.aithinktank.space/${CATEGORY}/${article.slug}` },
        ]}
      />
      <article className="hub-corp">
        <div className={`${hub.bgClass} border-b ${hub.borderClass}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <Link href={`/${CATEGORY}`} className={`hover:${hub.colorClass}`}>
                {hub.title}
              </Link>
              <span>/</span>
              <span className="text-gray-700 truncate">{article.title}</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${hub.badgeClass}`}>
              {hub.title}
            </span>
            <span className="text-xs text-gray-400">{article.readTime}</span>
            <span className="text-xs text-gray-400">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {article.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
          <div
            className="article-content text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        </div>
      </article>

      <section className="py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterCTA category={CATEGORY} />
        </div>
      </section>
    </>
  );
}
