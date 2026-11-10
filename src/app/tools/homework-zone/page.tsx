import type { Metadata } from "next";
import Link from "next/link";
import HomeworkZoneAssessor from "@/components/interactives/HomeworkZoneAssessor";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI Homework Zone Assessor — Is Your AI Use Cheating?",
  description:
    "Free tool for teens: describe your assignment and how you want to use AI. Get a green / yellow / red verdict + a disclosure note to attach to your submission. No signup.",
  keywords: [
    "AI homework cheating",
    "is ChatGPT cheating",
    "AI homework help ethical",
    "when is AI cheating",
    "AI disclosure student",
    "AI homework policy",
    "responsible AI for students",
  ],
  openGraph: {
    type: "website",
    url: "https://www.aithinktank.space/tools/homework-zone",
    siteName: "AI Think Tank",
    title: "AI Homework Zone Assessor — Green, Yellow, or Red?",
    description:
      "4 quick questions → clear verdict on whether your AI use crosses the line + a disclosure note you can attach to your submission. Free, no signup.",
    images: [
      {
        url: "/og-teens.png",
        width: 1200,
        height: 630,
        alt: "AI Homework Zone Assessor — Green, Yellow, or Red?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Homework Zone Assessor — Green, Yellow, or Red?",
    description:
      "4 quick questions → verdict + disclosure note. Free tool from AI Think Tank.",
    images: ["/og-teens.png"],
  },
  alternates: {
    canonical: "https://www.aithinktank.space/tools/homework-zone",
  },
};

export default function HomeworkZonePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.aithinktank.space" },
          { name: "Tools", url: "https://www.aithinktank.space/tools" },
          {
            name: "AI Homework Zone Assessor",
            url: "https://www.aithinktank.space/tools/homework-zone",
          },
        ]}
      />
      {/* Breadcrumb strip */}
      <div className="bg-indigo-50/60 border-b border-indigo-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-indigo-700">
              Tools
            </Link>
            <span>/</span>
            <span className="text-gray-700 truncate">
              AI Homework Zone Assessor
            </span>
          </div>
        </div>
      </div>

      <HomeworkZoneAssessor />

      {/* Printable download CTA */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-8">
        <div className="rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-2xl">
              📄
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Print the 3-Zone Framework
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A one-page study-desk poster with all three zones + 5 examples each. Free PDF. Pin it on your study desk or your classroom wall.
              </p>
            </div>
            <a
              href="/printables/homework-zone-framework.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition whitespace-nowrap"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Related / further reading */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-16">
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Why we built this
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            70% of teens now use AI tools for schoolwork, and 26% of teachers
            have caught a student using AI. Most students aren't trying to
            cheat — they just don't know where the line is. This tool gives you
            a clear verdict on your specific situation, and a disclosure note
            that turns a fear-driven conversation into a confidence-driven one.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            For your school's specific policy, always check with your teacher
            first. This tool reflects common patterns, not any single
            institution's rules.
          </p>
        </div>
      </section>
    </>
  );
}