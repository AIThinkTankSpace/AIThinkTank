import type { Metadata } from "next";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "About AI Think Tank",
  description:
    "AI Think Tank makes AI education accessible for everyone — kids, teens, and professionals. Learn about our mission and why we believe AI literacy is for all.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14B8A6 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-medium mb-6">
            Our Mission
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            About AI Think Tank
          </h1>

          <div className="prose prose-lg text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed text-gray-500">
              AI Think Tank was born from a simple observation: the people who need to understand AI the most — parents, students, and everyday professionals — are the ones with the least access to clear, practical information about it.
            </p>

            <p className="leading-relaxed text-gray-500">
              The AI conversation is dominated by technical jargon, hype, and fear. We believe it doesn&apos;t have to be that way. Whether you&apos;re a parent wondering how to prepare your child for an AI-powered world, a teenager looking to build future-ready skills, or a professional trying to cut through the corporate AI noise — you deserve education that respects your intelligence without requiring a computer science degree.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Approach</h2>

            <p className="leading-relaxed text-gray-500">
              We create three distinct content experiences, each designed for its audience:
            </p>

            <div className="grid gap-4 my-6">
              <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md hover:shadow-teal-50 transition-shadow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🔭</span>
                  <h3 className="font-semibold text-gray-900">AI for Kids</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">Ages 6-12</span>
                </div>
                <p className="text-sm text-gray-500">
                  Warm, discovery-focused content for parents and children to explore AI together. Think National Geographic Kids meets AI education.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md hover:shadow-teal-50 transition-shadow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🚀</span>
                  <h3 className="font-semibold text-gray-900">AI for Teens</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-medium">Ages 13-17</span>
                </div>
                <p className="text-sm text-gray-500">
                  Sleek, empowering content that gives teenagers a genuine edge — AI study tools, career insights, and skills their schools aren&apos;t teaching yet.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md hover:shadow-teal-50 transition-shadow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">📊</span>
                  <h3 className="font-semibold text-gray-900">AI for Corporates</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-medium">Professionals</span>
                </div>
                <p className="text-sm text-gray-500">
                  Plain-English AI guidance for professionals. Real case studies, actionable frameworks, and ROI-focused strategies without the buzzwords.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Free?</h2>

            <p className="leading-relaxed text-gray-500">
              We believe AI literacy is a right, not a privilege. In a world where AI is reshaping every aspect of life, access to understanding shouldn&apos;t depend on your ability to pay. All our content is free, open, and accessible to everyone.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Connect With Us</h2>

            <p className="leading-relaxed text-gray-500">
              Follow us on{" "}
              <a href="https://www.youtube.com/@AI-Think-Tank-Space" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline underline-offset-2">
                YouTube
              </a>{" "}
              for video content, or explore our hubs to start learning today.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/ai-for-kids" className="px-5 py-2.5 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors text-sm shadow-sm shadow-teal-200">
              Explore AI for Kids
            </Link>
            <Link href="/ai-for-teens" className="px-5 py-2.5 bg-white text-teal-700 rounded-xl font-medium border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-300 transition-colors text-sm">
              Explore AI for Teens
            </Link>
            <Link href="/ai-for-corporates" className="px-5 py-2.5 bg-white text-teal-700 rounded-xl font-medium border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-300 transition-colors text-sm">
              Explore AI for Corporates
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
}
