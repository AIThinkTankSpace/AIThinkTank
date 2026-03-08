import type { Metadata } from "next";
import Link from "next/link";
import { getInteractivesByCategory } from "@/lib/interactive-config";
import InteractiveCard from "@/components/InteractiveCard";

export const metadata: Metadata = {
  title: "Explore AI — Interactive Tools for Teens",
  description:
    "Quizzes, career explorers, prompt playgrounds, and infographics to help teens master AI skills. Free and interactive.",
  keywords: [
    "AI tools for teens",
    "AI career quiz",
    "prompt engineering for students",
    "AI readiness quiz",
    "AI infographics for teens",
  ],
};

export default function ExploreTeensPage() {
  const interactives = getInteractivesByCategory("ai-for-teens");

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/30 to-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/ai-for-teens" className="hover:text-teal-600">AI for Teens</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">Explore</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Interactive Tools <span className="text-teal-600">🚀</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Test your AI readiness, explore careers, practice prompt engineering, and more. All free, all interactive.
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
          href="/ai-for-teens"
          className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
        >
          ← Back to AI for Teens
        </Link>
      </section>
    </div>
  );
}
