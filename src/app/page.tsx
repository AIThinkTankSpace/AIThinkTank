import Link from "next/link";
import { hubConfigs } from "@/lib/hub-config";
import { getArticlesByCategory, type Category } from "@/lib/articles";
import NewsletterCTA from "@/components/NewsletterCTA";

const hubOrder: Category[] = ["ai-for-kids", "ai-for-teens", "ai-for-corporates"];

export default function Home() {
  const articleCounts = hubOrder.map((cat) => ({
    category: cat,
    count: getArticlesByCategory(cat).length,
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            AI Made Simple.
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-blue-500 to-slate-700 bg-clip-text text-transparent">
              For Everyone.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Free, practical AI education for kids, teens, and professionals.
            No jargon, no signup walls — just real knowledge you can use today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ai-for-kids" className="px-6 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-colors shadow-sm">
              For Kids &amp; Parents
            </Link>
            <Link href="/ai-for-teens" className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow-sm">
              For Teens
            </Link>
            <Link href="/ai-for-corporates" className="px-6 py-3 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-sm">
              For Professionals
            </Link>
          </div>
        </div>
      </section>

      {/* Hub Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Choose Your AI Learning Path
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Whether you're a parent exploring AI with your child, a teen building future-ready skills, or a professional cutting through the hype — we've got you covered.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {hubOrder.map((category) => {
              const hub = hubConfigs[category];
              const count = articleCounts.find((c) => c.category === category)?.count || 0;

              return (
                <Link
                  key={category}
                  href={`/${category}`}
                  className={`group relative rounded-2xl border-2 ${hub.borderClass} ${hub.bgClass} p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="text-4xl mb-4">{hub.icon}</div>
                  <h3 className={`text-xl font-bold mb-1 ${hub.colorClass}`}>
                    {hub.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${hub.colorClass} opacity-80`}>
                    {hub.tagline}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {hub.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {count} {count === 1 ? "article" : "articles"}
                    </span>
                    <span className={`text-sm font-semibold ${hub.colorClass} group-hover:translate-x-1 transition-transform`}>
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why AI Think Tank */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why AI Think Tank?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            In a world flooded with AI hype and misinformation, we provide clear, honest, and practical education that anyone can understand and use.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Free</h3>
              <p className="text-sm text-gray-600">
                No paywalls, no gated content. Everything is open and accessible because we believe AI literacy is a right, not a privilege.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Age-Appropriate</h3>
              <p className="text-sm text-gray-600">
                Content tailored for different audiences — not one-size-fits-all. Each hub speaks the language of its readers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Practical</h3>
              <p className="text-sm text-gray-600">
                Every article includes actionable tips, real tools, and things you can try today. Not just theory — real-world application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
}
