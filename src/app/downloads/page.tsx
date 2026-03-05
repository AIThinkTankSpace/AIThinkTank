import type { Metadata } from "next";
import Link from "next/link";
import { downloads } from "@/lib/downloads-config";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Free Downloads — Printable Posters for Kids | AI Think Tank",
  description:
    "Download free printable educational posters for kids — grammar, math, and science. High-quality PDF resources for classrooms and homeschool. No sign-up required.",
  openGraph: {
    title: "Free Educational Downloads — Grammar, Math & Science Posters",
    description:
      "Download free printable educational posters for kids — grammar, math, and science. High-quality PDF resources for classrooms and homeschool.",
  },
};

const subjectConfig = {
  grammar: { label: "English & Grammar", icon: "📝", color: "bg-purple-100 text-purple-700 border-purple-200" },
  math: { label: "Mathematics", icon: "🔢", color: "bg-blue-100 text-blue-700 border-blue-200" },
  science: { label: "Science", icon: "🔬", color: "bg-green-100 text-green-700 border-green-200" },
};

export default function DownloadsPage() {
  const grammarResources = downloads.filter((d) => d.subject === "grammar");
  const mathResources = downloads.filter((d) => d.subject === "math");
  const scienceResources = downloads.filter((d) => d.subject === "science");

  const sections = [
    { key: "grammar" as const, items: grammarResources },
    { key: "math" as const, items: mathResources },
    { key: "science" as const, items: scienceResources },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-white to-white py-16 sm:py-22">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14B8A6 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-medium mb-4">
            100% Free — No Sign-up Required
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Free Educational Downloads
          </h1>
          <p className="text-lg text-teal-600 font-medium mb-4">
            Printable posters for classrooms, homeschool & study corners
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            High-quality PDF posters covering English grammar, mathematics, and science.
            Print them, pin them up, and watch learning happen. All resources are free to download and share.
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="text-sm text-gray-400">{downloads.length} resources</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-400">PDF format</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-400">Print-ready</span>
          </div>
        </div>
      </section>

      {/* Resources by Subject */}
      {sections.map(({ key, items }) => {
        const config = subjectConfig[key];
        return (
          <section key={key} className="py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{config.icon}</span>
                <h2 className="text-xl font-bold text-gray-900">{config.label}</h2>
                <span className="text-sm text-gray-400">({items.length})</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/downloads/${item.slug}`}
                    className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 relative overflow-hidden"
                  >
                    {/* Accent line */}
                    <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${config.color}`}>
                        {config.label}
                      </span>
                      <span className="text-xs text-gray-400">{item.gradeLevel}</span>
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <h3 className="text-lg font-bold text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">PDF • {item.fileSize}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:translate-x-1 transition-transform">
                        Download free &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Subtle divider between sections */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
              <hr className="border-gray-100" />
            </div>
          </section>
        );
      })}

      {/* Newsletter */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
}
