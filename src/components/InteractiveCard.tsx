import Link from "next/link";
import type { InteractiveItem } from "@/lib/interactive-config";

const typeLabels: Record<InteractiveItem["type"], string> = {
  quiz: "Quiz",
  game: "Game",
  tool: "Interactive Tool",
  explainer: "Explainer",
  assessment: "Assessment",
};

const colorMap: Record<string, { border: string; bg: string; badge: string; button: string; accent: string }> = {
  amber: {
    border: "border-amber-300",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50",
    badge: "bg-amber-100 text-amber-700",
    button: "bg-amber-500 text-white",
    accent: "text-amber-600",
  },
  blue: {
    border: "border-blue-300",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    badge: "bg-blue-100 text-blue-700",
    button: "bg-blue-500 text-white",
    accent: "text-blue-600",
  },
  slate: {
    border: "border-slate-300",
    bg: "bg-gradient-to-br from-slate-50 to-gray-100",
    badge: "bg-slate-100 text-slate-700",
    button: "bg-slate-700 text-white",
    accent: "text-slate-700",
  },
};

export default function InteractiveCard({ item }: { item: InteractiveItem }) {
  const colors = colorMap[item.color] || colorMap.blue;

  return (
    <Link
      href={`/${item.category}/explore/${item.slug}`}
      className={`block ${colors.bg} rounded-2xl border-2 ${colors.border} p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
    >
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
        <div className="text-6xl transform translate-x-4 -translate-y-2">{item.icon}</div>
      </div>

      {/* Type badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.badge} uppercase tracking-wide`}>
          {typeLabels[item.type]}
        </span>
        <span className="text-xs text-gray-500 font-medium">⏱ {item.duration}</span>
      </div>

      {/* Icon & Title */}
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl flex-shrink-0">{item.icon}</span>
        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          {item.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {item.description}
      </p>

      {/* CTA */}
      <div className="flex justify-end">
        <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${colors.accent} group-hover:gap-2 transition-all`}>
          Start now →
        </span>
      </div>
    </Link>
  );
}
