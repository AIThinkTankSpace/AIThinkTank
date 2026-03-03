import type { Category } from "@/lib/articles";
import { getArticlesByCategory } from "@/lib/articles";
import { hubConfigs } from "@/lib/hub-config";
import ArticleCard from "./ArticleCard";
import NewsletterCTA from "./NewsletterCTA";

export default function HubPage({ category }: { category: Category }) {
  const hub = hubConfigs[category];
  const articles = getArticlesByCategory(category);

  return (
    <>
      {/* Hero */}
      <section className={`${hub.bgClass} py-14 sm:py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-4xl mb-4 block">{hub.icon}</span>
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${hub.textClass} mb-3`}>
            {hub.title}
          </h1>
          <p className={`text-lg font-medium ${hub.colorClass} mb-4`}>
            {hub.tagline}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {hub.heroDescription}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {articles.length > 0 ? (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-8">
                Latest Content
                <span className="text-sm font-normal text-gray-400 ml-2">
                  ({articles.length} {articles.length === 1 ? "article" : "articles"})
                </span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <span className="text-5xl mb-4 block">{hub.icon}</span>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Content coming soon!
              </h2>
              <p className="text-gray-500">
                We're working on amazing {hub.title.toLowerCase()} content. Subscribe to be the first to know.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterCTA category={category} />
        </div>
      </section>
    </>
  );
}
