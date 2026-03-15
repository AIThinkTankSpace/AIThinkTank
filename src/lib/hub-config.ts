import type { Category } from "./articles";

export interface HubConfig {
  category: Category;
  title: string;
  tagline: string;
  description: string;
  heroDescription: string;
  colorClass: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  badgeClass: string;
  buttonClass: string;
  icon: string;
  accentColor: string;
  lastUpdated: string; // e.g. "2026-03-15"
  updateFrequency: string; // e.g. "every few days"
}

export const hubConfigs: Record<Category, HubConfig> = {
  "ai-for-kids": {
    category: "ai-for-kids",
    title: "AI for Kids",
    tagline: "Explore AI Together",
    description:
      "Give your child a head start in an AI world. Fun, safe, and educational AI content designed for parents and kids to explore together.",
    heroDescription:
      "Discover the world of Artificial Intelligence through fun activities, interactive explainers, and engaging stories. Built for curious families who want to understand AI together.",
    colorClass: "text-teal-600",
    bgClass: "bg-teal-50/50",
    textClass: "text-gray-900",
    borderClass: "border-teal-200",
    badgeClass: "bg-amber-100 text-amber-700",
    buttonClass: "bg-teal-500 hover:bg-teal-600 text-white",
    icon: "🔭",
    accentColor: "#F59E0B",
    lastUpdated: "2026-03-15",
    updateFrequency: "every few days",
  },
  "ai-for-teens": {
    category: "ai-for-teens",
    title: "AI for Teens",
    tagline: "Your AI Advantage",
    description:
      "The skills your school isn't teaching you — yet. AI tools, study hacks, and career insights for the next generation of innovators.",
    heroDescription:
      "Master AI tools that boost your grades, explore careers of the future, and build skills that top employers want. Your competitive edge starts here.",
    colorClass: "text-teal-600",
    bgClass: "bg-teal-50/50",
    textClass: "text-gray-900",
    borderClass: "border-teal-200",
    badgeClass: "bg-indigo-100 text-indigo-700",
    buttonClass: "bg-teal-500 hover:bg-teal-600 text-white",
    icon: "🚀",
    accentColor: "#6366F1",
    lastUpdated: "2026-03-15",
    updateFrequency: "every few days",
  },
  "ai-for-corporates": {
    category: "ai-for-corporates",
    title: "AI for Corporates",
    tagline: "AI, Without the Jargon",
    description:
      "Understand AI in plain English. Use it at work this week. Practical AI guidance for non-technical professionals.",
    heroDescription:
      "Cut through the hype. Real frameworks, real case studies, and real results for business leaders who want AI to actually deliver ROI.",
    colorClass: "text-teal-700",
    bgClass: "bg-teal-50/50",
    textClass: "text-gray-900",
    borderClass: "border-teal-200",
    badgeClass: "bg-sky-100 text-sky-700",
    buttonClass: "bg-teal-600 hover:bg-teal-700 text-white",
    icon: "📊",
    accentColor: "#0EA5E9",
    lastUpdated: "2026-03-15",
    updateFrequency: "every few days",
  },
};
