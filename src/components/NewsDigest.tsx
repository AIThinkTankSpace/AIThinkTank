import type { Category } from "@/lib/articles";
import { getNewsForCategory } from "@/lib/news-digest";
import { hubConfigs } from "@/lib/hub-config";
import LiveTimestamp from "./LiveTimestamp";
import ShareBar from "./ShareBar";

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="inline-block w-3 h-3 ml-1 opacity-40 group-hover:opacity-70 transition-opacity shrink-0 mt-0.5"
    >
      <path
        fillRule="evenodd"
        d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface NewsDigestProps {
  category: Category;
  buildTime: string;
}

const shareMessages: Record<Category, string> = {
  "ai-for-kids": "Check out the latest AI news for kids and families — updated daily!",
  "ai-for-teens": "Daily AI updates for students and teens — tools, careers, and more!",
  "ai-for-corporates": "Stay ahead with daily AI news for business professionals!",
};

export default function NewsDigest({ category, buildTime }: NewsDigestProps) {
  const news = getNewsForCategory(category, 5);
  const hub = hubConfigs[category];

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
            <span className="ml-auto">
              <LiveTimestamp buildTime={buildTime} />
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
                      className="group text-sm text-gray-700 hover:text-teal-700 transition-colors leading-snug flex items-start"
                    >
                      <span className="underline decoration-gray-300 underline-offset-2 group-hover:decoration-teal-400">
                        {item.headline}
                      </span>
                      <ExternalLinkIcon />
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

          {/* Share bar */}
          <div className="mt-4 pt-4 border-t border-teal-100/60">
            <ShareBar
              shareText={shareMessages[category]}
              shareTitle={`What's New in AI — ${hub.title} | AI Think Tank`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
