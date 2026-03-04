import Link from "next/link";
import Image from "next/image";
import { hubConfigs } from "@/lib/hub-config";
import { getArticlesByCategory, type Category } from "@/lib/articles";
import { getInteractivesByCategory } from "@/lib/interactive-config";
import NewsletterCTA from "@/components/NewsletterCTA";

const hubOrder: Category[] = ["ai-for-kids", "ai-for-teens", "ai-for-corporates"];

const hubIcons: Record<Category, { emoji: string; label: string }> = {
  "ai-for-kids": { emoji: "🔭", label: "Ages 6-12" },
  "ai-for-teens": { emoji: "🚀", label: "Ages 13-17" },
  "ai-for-corporates": { emoji: "📊", label: "Professionals" },
};

export default function Home() {
  const hubData = hubOrder.map((cat) => ({
    category: cat,
    articleCount: getArticlesByCategory(cat).length,
    interactiveCount: getInteractivesByCategory(cat).length,
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-white to-white py-20 sm:py-28">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14B8A6 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/60 border border-teal-200/50 text-teal-700 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            Free AI education for everyone
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            AI Made Simple.
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              For Everyone.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Practical AI education for kids, teens, and professionals.
            No jargon, no signup walls — just real knowledge you can use today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/ai-for-kids" className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all shadow-sm shadow-teal-200 hover:shadow-md hover:shadow-teal-200">
              For Kids &amp; Parents
            </Link>
            <Link href="/ai-for-teens" className="px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-300 transition-all">
              For Teens
            </Link>
            <Link href="/ai-for-corporates" className="px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-300 transition-all">
              For Professionals
            </Link>
          </div>
        </div>
      </section>

      {/* Hub Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Choose Your Learning Path
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Three hubs, each designed for its audience. Pick yours and start exploring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hubData.map(({ category, articleCount, interactiveCount }) => {
              const hub = hubConfigs[category];
              const { emoji, label } = hubIcons[category];

              return (
                <Link
                  key={category}
                  href={`/${category}`}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300"
                >
                  {/* Accent line at top */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{emoji}</span>
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">{label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {hub.title}
                  </h3>
                  <p className="text-sm font-medium text-teal-600 mb-3">
                    {hub.tagline}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {hub.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span>{articleCount} articles</span>
                      <span>{interactiveCount} interactive</span>
                    </div>
                    <span className="text-sm font-semibold text-teal-600 group-hover:translate-x-1 transition-transform">
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
      <section className="py-16 bg-gray-50/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Why AI Think Tank?
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            In a world flooded with AI hype, we provide clear, honest education that anyone can understand and use.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:shadow-teal-50 transition-shadow">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Free</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                No paywalls, no gated content. AI literacy is a right, not a privilege.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:shadow-teal-50 transition-shadow">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Age-Appropriate</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Each hub speaks the language of its readers. Not one-size-fits-all.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:shadow-teal-50 transition-shadow">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Practical</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every piece includes actionable tips and real tools you can try today.
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
