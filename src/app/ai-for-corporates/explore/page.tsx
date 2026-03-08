import type { Metadata } from "next";
import Link from "next/link";
import { getInteractivesByCategory } from "@/lib/interactive-config";
import InteractiveCard from "@/components/InteractiveCard";

export const metadata: Metadata = {
  title: "Explore AI — Assessments & Tools for Professionals",
  description:
    "AI readiness assessments, jargon decoders, use case finders, and executive infographics. Practical AI tools for business leaders.",
  keywords: [
    "AI readiness assessment",
    "AI for business leaders",
    "AI use cases by industry",
    "AI governance framework",
    "corporate AI tools",
  ],
};

export default function ExploreCorporatesPage() {
  const interactives = getInteractivesByCategory("ai-for-corporates");

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/30 to-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/ai-for-corporates" className="hover:text-teal-600">AI for Corporates</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">Explore</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Assess & Discover <span className="text-teal-600">📊</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Interactive assessments, jargon-free tools, and executive visual briefs. Cut through the hype and find what works for your organization.
        </p>
      </section>

      {/* Interactive cards grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interactives.map((item) => (
            <InteractiveCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <Link
          href="/ai-for-corporates"
          className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
        >
          ← Back to AI for Corporates
        </Link>
      </section>
    </div>
  );
}
