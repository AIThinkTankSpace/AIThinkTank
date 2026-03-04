import Link from "next/link";
import type { InteractiveItem } from "@/lib/interactive-config";
import { hubConfigs } from "@/lib/hub-config";

const typeLabels: Record<InteractiveItem["type"], string> = {
  quiz: "Quiz",
  game: "Game",
  tool: "Interactive Tool",
  explainer: "Explainer",
  assessment: "Assessment",
  infographic: "Infographic",
};

export default function InteractiveCard({ item }: { item: InteractiveItem }) {
  const hub = hubConfigs[item.category];

  return (
    <Link
      href={`/${item.category}/explore/${item.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 relative overflow-hidden"
    >
      {/* Accent line at top */}
      <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-[0.06]">
        <div className="text-6xl transform translate-x-4 -translate-y-2">{item.icon}</div>
      </div>

      {/* Type badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${hub.badgeClass} uppercase tracking-wide`}>
          {typeLabels[item.type]}
        </span>
        <span className="text-xs text-gray-400 font-medium">{item.duration}</span>
      </div>

      {/* Icon & Title */}
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl flex-shrink-0">{item.icon}</span>
        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          {item.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        {item.description}
      </p>

      {/* CTA */}
      <div className="flex justify-end">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:translate-x-1 transition-transform">
          Start now &rarr;
        </span>
      </div>
    </Link>
  );
}
