import type { Category } from "@/lib/articles";
import { getArticlesByCategory } from "@/lib/articles";
import { hubConfigs } from "@/lib/hub-config";
import { getInteractivesByCategory } from "@/lib/interactive-config";
import ArticleCard from "./ArticleCard";
import InteractiveCard from "./InteractiveCard";
import NewsletterCTA from "./NewsletterCTA";

const sectionLabels: Record<Category, { interactive: string; articles: string }> = {
  "ai-for-kids": {
    interactive: "Explore & Play",
    articles: "Read & Learn",
  },
  "ai-for-teens": {
    interactive: "Interactive Tools",
    articles: "Articles & Guides",
  },
  "ai-for-corporates": {
    interactive: "Assess & Discover",
    articles: "Insights & Frameworks",
  },
};

export default function HubPage({ category }: { category: Category }) {
  const hub = hubConfigs[category];
  const articles = getArticlesByCategory(category);
  const interactives = getInteractivesByCategory(category);
  const labels = sectionLabels[category];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-white to-white py-16 sm:py-22">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14B8A6 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-4xl mb-4 block">{hub.icon}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {hub.title}
          </h1>
          <p className="text-lg font-medium text-teal-600 mb-4">
            {hub.tagline}
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {hub.heroDescription}
          </p>
        </div>
      </section>

      {/* Interactive Content Section */}
      {interactives.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-bold text-gray-900">
                {labels.interactive}
              </h2>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${hub.badgeClass} uppercase tracking-wide`}>
                Interactive
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {interactives.map((item) => (
                <InteractiveCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Divider */}
      {interactives.length > 0 && articles.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <hr className="border-gray-100" />
        </div>
      )}

      {/* Articles Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {articles.length > 0 ? (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-8">
                {labels.articles}
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
                We&apos;re working on amazing {hub.title.toLowerCase()} content. Subscribe to be the first to know.
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
