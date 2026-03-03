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
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About AI Think Tank
          </h1>

          <div className="prose prose-lg text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              AI Think Tank was born from a simple observation: the people who need to understand AI the most — parents, students, and everyday professionals — are the ones with the least access to clear, practical information about it.
            </p>

            <p className="leading-relaxed">
              The AI conversation is dominated by technical jargon, hype, and fear. We believe it doesn't have to be that way. Whether you're a parent wondering how to prepare your child for an AI-powered world, a teenager looking to build future-ready skills, or a professional trying to cut through the corporate AI noise — you deserve education that respects your intelligence without requiring a computer science degree.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Approach</h2>

            <p className="leading-relaxed">
              We create three distinct content experiences, each designed for its audience:
            </p>

            <div className="grid gap-4 my-6">
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-semibold text-amber-800 mb-1">AI for Kids</h3>
                <p className="text-sm text-gray-600">
                  Warm, discovery-focused content for parents and children to explore AI together. Think National Geographic Kids meets AI education.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-1">AI for Teens</h3>
                <p className="text-sm text-gray-600">
                  Sleek, empowering content that gives teenagers a genuine edge — AI study tools, career insights, and skills their schools aren't teaching yet.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-1">AI for Corporates</h3>
                <p className="text-sm text-gray-600">
                  Plain-English AI guidance for professionals. Real case studies, actionable frameworks, and ROI-focused strategies without the buzzwords.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Free?</h2>

            <p className="leading-relaxed">
              We believe AI literacy is a right, not a privilege. In a world where AI is reshaping every aspect of life, access to understanding shouldn't depend on your ability to pay. All our content is free, open, and accessible to everyone.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Connect With Us</h2>

            <p className="leading-relaxed">
              Follow us on{" "}
              <a href="https://youtube.com/@aithinktank" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                YouTube
              </a>{" "}
              for video content, or explore our hubs to start learning today.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/ai-for-kids" className="px-5 py-2.5 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors text-sm">
              Explore AI for Kids
            </Link>
            <Link href="/ai-for-teens" className="px-5 py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm">
              Explore AI for Teens
            </Link>
            <Link href="/ai-for-corporates" className="px-5 py-2.5 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors text-sm">
              Explore AI for Corporates
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
}
