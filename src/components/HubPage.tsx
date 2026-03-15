import type { Category } from "@/lib/articles";
import { getArticlesByCategory } from "@/lib/articles";
import { hubConfigs } from "@/lib/hub-config";
import { getInteractivesByCategory } from "@/lib/interactive-config";
import ArticleCard from "./ArticleCard";
import InteractiveCard from "./InteractiveCard";
import NewsletterCTA from "./NewsletterCTA";
import CrossPromoStrip from "./CrossPromoStrip";

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

  const formattedDate = new Date(hub.lastUpdated + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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

          {/* Last updated + Bookmark prompt */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/80 backdrop-blur-sm border border-teal-100 rounded-xl px-5 py-3 shadow-sm">
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg className="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Updated {formattedDate}
            </span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
              <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z" />
              </svg>
              We update this page {hub.updateFrequency} — bookmark it so you never miss out!
            </span>
          </div>
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

      {/* Cross-promo strip between sections */}
      {interactives.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <CrossPromoStrip index={0} />
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

      {/* Second cross-promo strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <CrossPromoStrip index={1} />
      </div>

      {/* Newsletter */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterCTA category={category} />
        </div>
      </section>
    </>
  );
}
