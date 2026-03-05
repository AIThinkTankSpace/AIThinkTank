import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { downloads, getDownloadBySlug } from "@/lib/downloads-config";
import ShareButton from "@/components/ShareButton";
import NewsletterCTA from "@/components/NewsletterCTA";

export function generateStaticParams() {
  return downloads.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getDownloadBySlug(slug);
  if (!item) return {};
  return {
    title: item.seoTitle,
    description: item.seoDescription,
    openGraph: {
      title: item.seoTitle,
      description: item.seoDescription,
      type: "article",
    },
  };
}

const subjectConfig = {
  grammar: { label: "English & Grammar", color: "bg-purple-100 text-purple-700" },
  math: { label: "Mathematics", color: "bg-blue-100 text-blue-700" },
  science: { label: "Science", color: "bg-green-100 text-green-700" },
};

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getDownloadBySlug(slug);

  if (!item) {
    notFound();
  }

  const config = subjectConfig[item.subject];

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: item.title,
    description: item.seoDescription,
    url: `https://www.aithinktank.space/downloads/${item.slug}`,
    fileFormat: "application/pdf",
    educationalLevel: item.gradeLevel,
    learningResourceType: "Poster",
    isAccessibleForFree: true,
    publisher: {
      "@type": "Organization",
      name: "AI Think Tank",
      url: "https://www.aithinktank.space",
    },
  };

  // Related downloads (same subject, excluding current)
  const related = downloads
    .filter((d) => d.subject === item.subject && d.slug !== item.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-teal-50/50 to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/downloads" className="hover:text-teal-600">Downloads</Link>
            <span>/</span>
            <span className="text-gray-700 truncate">{item.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Left — Details */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${config.color}`}>
                  {config.label}
                </span>
                <span className="text-xs text-gray-400">{item.gradeLevel}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                {item.title}
              </h1>

              <p className="text-gray-500 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <ShareButton
                title={item.title}
                description={item.seoDescription}
                url={`https://www.aithinktank.space/downloads/${item.slug}`}
                variant="kids"
              />

              {/* What&apos;s inside */}
              <div className="mt-8 bg-teal-50/50 rounded-xl p-6 border border-teal-100/50">
                <h2 className="font-semibold text-gray-900 mb-3">What&apos;s inside this poster</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Print-ready PDF — works on A4 and Letter size
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Colorful illustrations that keep kids engaged
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Clear examples and visual explanations
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Great for classrooms, homeschool, and study corners
                  </li>
                </ul>
              </div>
            </div>

            {/* Right — Download Card */}
            <div className="md:col-span-2">
              <div className="sticky top-24 bg-white rounded-2xl border-2 border-teal-200 p-6 shadow-lg shadow-teal-100/30">
                <div className="text-center mb-6">
                  <span className="text-5xl block mb-3">{item.icon}</span>
                  <p className="text-sm text-gray-500">PDF Document</p>
                  <p className="text-xs text-gray-400 mt-1">{item.fileSize}</p>
                </div>

                <a
                  href={`/downloads/${item.fileName}`}
                  download
                  className="block w-full text-center px-6 py-3.5 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-sm shadow-teal-200 mb-3"
                >
                  Download Free PDF
                </a>

                <p className="text-xs text-center text-gray-400">
                  No sign-up needed. Click to download instantly.
                </p>

                <div className="border-t border-gray-100 mt-5 pt-5">
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span>Format</span>
                      <span className="font-medium text-gray-700">PDF</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grade Level</span>
                      <span className="font-medium text-gray-700">{item.gradeLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subject</span>
                      <span className="font-medium text-gray-700">{config.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>License</span>
                      <span className="font-medium text-gray-700">Free for personal use</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Downloads */}
      {related.length > 0 && (
        <section className="py-12 bg-gray-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">More {config.label} Resources</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/downloads/${rel.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-teal-300 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{rel.icon}</span>
                    <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">{rel.description}</p>
                  <span className="text-xs font-semibold text-teal-600 group-hover:translate-x-1 transition-transform inline-block">
                    Download &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
}
