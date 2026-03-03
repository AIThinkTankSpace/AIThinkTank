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
    colorClass: "text-amber-600",
    bgClass: "bg-amber-50",
    textClass: "text-amber-900",
    borderClass: "border-amber-200",
    badgeClass: "bg-amber-100 text-amber-700",
    buttonClass: "bg-amber-500 hover:bg-amber-600 text-white",
    icon: "🔭",
  },
  "ai-for-teens": {
    category: "ai-for-teens",
    title: "AI for Teens",
    tagline: "Your AI Advantage",
    description:
      "The skills your school isn't teaching you — yet. AI tools, study hacks, and career insights for the next generation of innovators.",
    heroDescription:
      "Master AI tools that boost your grades, explore careers of the future, and build skills that top employers want. Your competitive edge starts here.",
    colorClass: "text-blue-600",
    bgClass: "bg-blue-50",
    textClass: "text-blue-900",
    borderClass: "border-blue-200",
    badgeClass: "bg-blue-100 text-blue-700",
    buttonClass: "bg-blue-500 hover:bg-blue-600 text-white",
    icon: "🚀",
  },
  "ai-for-corporates": {
    category: "ai-for-corporates",
    title: "AI for Corporates",
    tagline: "AI, Without the Jargon",
    description:
      "Understand AI in plain English. Use it at work this week. Practical AI guidance for non-technical professionals.",
    heroDescription:
      "Cut through the hype. Real frameworks, real case studies, and real results for business leaders who want AI to actually deliver ROI.",
    colorClass: "text-slate-700",
    bgClass: "bg-slate-50",
    textClass: "text-slate-900",
    borderClass: "border-slate-200",
    badgeClass: "bg-slate-100 text-slate-700",
    buttonClass: "bg-slate-700 hover:bg-slate-800 text-white",
    icon: "📊",
  },
};
