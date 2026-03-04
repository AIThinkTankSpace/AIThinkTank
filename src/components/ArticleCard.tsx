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
      className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${hub.badgeClass}`}>
          {typeLabel}
        </span>
        <span className="text-xs text-gray-400">{article.readTime}</span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
        {article.title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        {article.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex gap-2">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-gray-400">
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-sm font-semibold text-teal-600 group-hover:translate-x-1 transition-transform">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}
