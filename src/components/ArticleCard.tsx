import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { hubConfigs } from "@/lib/hub-config";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  const hub = hubConfigs[article.category];

  const typeLabel = {
    article: "Article",
    interactive: "Interactive",
    guide: "Guide",
    "tool-review": "Tool Review",
  }[article.type];

  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className={`block bg-white rounded-xl border ${hub.borderClass} p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${hub.badgeClass}`}>
          {typeLabel}
        </span>
        <span className="text-xs text-gray-400">{article.readTime}</span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
        {article.title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {article.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-gray-400">
              #{tag}
            </span>
          ))}
        </div>
        <span className={`text-sm font-medium ${hub.colorClass}`}>
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}
