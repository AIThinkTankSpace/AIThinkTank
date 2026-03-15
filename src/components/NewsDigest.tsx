import type { Category } from "@/lib/articles";
import { getNewsForCategory } from "@/lib/news-digest";

export default function NewsDigest({ category }: { category: Category }) {
  const news = getNewsForCategory(category, 5);

  if (news.length === 0) return null;

  return (
    <section className="py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">📰</span>
            <h2 className="text-base font-bold text-gray-900">
              What&apos;s New in AI
            </h2>
            <span className="text-xs text-gray-400 ml-auto">
              Latest updates
            </span>
          </div>

          <ul className="space-y-3">
            {news.map((item, i) => {
              const date = new Date(item.date + "T00:00:00");
              const shortDate = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });

              return (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-xs font-medium text-teal-600 bg-teal-50 border border-teal-100 rounded-md px-2 py-0.5 whitespace-nowrap mt-0.5">
                    {shortDate}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-700 hover:text-teal-700 transition-colors leading-snug"
                    >
                      {item.headline}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-700 leading-snug">
                      {item.headline}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
