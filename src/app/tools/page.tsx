import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Free AI Tools for Kids, Teens & Professionals",
  description:
    "Interactive AI literacy tools — homework assessor, career explorer, hallucination spotter, prompt libraries, and more. All free, no signup. Built by AI Think Tank.",
  keywords: [
    "free AI tools",
    "AI tools for students",
    "AI literacy tools",
    "interactive AI tools",
    "AI homework tool",
    "AI career tool",
  ],
  openGraph: {
    type: "website",
    url: "https://www.aithinktank.space/tools",
    siteName: "AI Think Tank",
    title: "Free AI Tools for Kids, Teens & Professionals",
    description:
      "Interactive AI literacy tools designed for real pain points — homework ethics, AI-proof careers, hallucination detection, and more. Free, no signup.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "AI Think Tank — Free AI Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Tools for Kids, Teens & Professionals",
    description:
      "Interactive AI literacy tools — all free, no signup.",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: "https://www.aithinktank.space/tools",
  },
};

interface Tool {
  href: string;
  title: string;
  description: string;
  audience: string;
  audienceColor: string;
  status: "live" | "coming-soon";
  icon: string;
}

const tools: Tool[] = [
  {
    href: "/tools/homework-zone",
    title: "AI Homework Zone Assessor",
    description:
      "Describe your assignment and how you want to use AI. Get a green/yellow/red verdict + a disclosure note to attach to your submission.",
    audience: "For teens",
    audienceColor: "bg-indigo-100 text-indigo-700",
    status: "live",
    icon: "📝",
  },
  {
    href: "/tools/ai-proof-careers",
    title: "AI-Proof Career Explorer",
    description:
      "7 quick questions → 3 careers AI can't easily replace + what to study for them + what roles look like day-to-day.",
    audience: "For teens",
    audienceColor: "bg-indigo-100 text-indigo-700",
    status: "coming-soon",
    icon: "🧭",
  },
  {
    href: "/tools/hallucination-spotter",
    title: "Hallucination Spotter",
    description:
      "Paste what AI told you. We'll ask 4 structured questions to flag likely hallucinations and show you exactly how to verify each claim.",
    audience: "For teens",
    audienceColor: "bg-indigo-100 text-indigo-700",
    status: "coming-soon",
    icon: "🔍",
  },
];

export default function ToolsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.aithinktank.space" },
          { name: "Tools", url: "https://www.aithinktank.space/tools" },
        ]}
      />

      <div className="bg-indigo-50/60 border-b border-indigo-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-700">Tools</span>
          </div>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-4">
            Free · No signup
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            AI literacy tools for real situations
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Small, focused tools that solve specific problems — not another
            explainer article. Designed for curious kids, ambitious teens, and
            professionals figuring out AI at work.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const isLive = tool.status === "live";
            const card = (
              <div
                className={`h-full rounded-xl border p-6 transition ${
                  isLive
                    ? "border-indigo-200 bg-white hover:border-indigo-400 hover:shadow-md"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{tool.icon}</span>
                  <div className="flex gap-2">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${tool.audienceColor}`}
                    >
                      {tool.audience}
                    </span>
                    {!isLive && (
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 text-gray-600">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
                <h2
                  className={`text-xl font-bold mb-2 ${isLive ? "text-gray-900" : "text-gray-500"}`}
                >
                  {tool.title}
                </h2>
                <p
                  className={`text-sm leading-relaxed ${isLive ? "text-gray-600" : "text-gray-400"}`}
                >
                  {tool.description}
                </p>
                {isLive && (
                  <div className="mt-5 inline-flex items-center text-sm font-semibold text-indigo-700">
                    Open tool →
                  </div>
                )}
              </div>
            );
            return isLive ? (
              <Link key={tool.href} href={tool.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={tool.href}>{card}</div>
            );
          })}
        </div>

        {/* Future audiences teaser */}
        <div className="mt-16 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
            More tools coming
          </h3>
          <p className="text-sm text-gray-600">
            Phase 1 launches teen-first with 3 tools. Kids and young
            professionals get their own tool sets as we grow — including Family
            AI Agreement Generator, AI Vocabulary learning, Prompt Libraries,
            and workplace AI starters.
          </p>
        </div>
      </section>
    </>
  );
}
