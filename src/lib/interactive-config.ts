import type { Category } from "./articles";

export interface InteractiveItem {
  slug: string;
  title: string;
  description: string;
  category: Category;
  type: "quiz" | "game" | "tool" | "explainer" | "assessment";
  icon: string;
  duration: string;
  color: string;
}

export const interactiveContent: Record<Category, InteractiveItem[]> = {
  "ai-for-kids": [
    {
      slug: "ai-explorer-quiz",
      title: "What Kind of AI Explorer Are You?",
      description:
        "Take this fun quiz to discover your AI superpower! Are you a Creative Inventor, a Data Detective, or a Robot Builder?",
      category: "ai-for-kids",
      type: "quiz",
      icon: "🧩",
      duration: "3 min",
      color: "amber",
    },
    {
      slug: "how-ai-learns",
      title: "How Does AI Learn?",
      description:
        "Step through an interactive story to see how AI learns from examples — just like you learn from practice!",
      category: "ai-for-kids",
      type: "explainer",
      icon: "🧠",
      duration: "5 min",
      color: "amber",
    },
    {
      slug: "spot-the-ai",
      title: "Spot the AI!",
      description:
        "Can you find where AI is hiding in everyday life? Tap the items that use AI and see if you can get a perfect score!",
      category: "ai-for-kids",
      type: "game",
      icon: "🔍",
      duration: "4 min",
      color: "amber",
    },
  ],
  "ai-for-teens": [
    {
      slug: "ai-readiness-quiz",
      title: "How AI-Ready Are You?",
      description:
        "Rate your AI skills across 5 dimensions and get a personalized learning roadmap based on your score.",
      category: "ai-for-teens",
      type: "quiz",
      icon: "📊",
      duration: "4 min",
      color: "blue",
    },
    {
      slug: "prompt-playground",
      title: "Prompt Engineering Playground",
      description:
        "Experiment with different prompts and see how small changes completely change AI responses. Master the art of asking.",
      category: "ai-for-teens",
      type: "tool",
      icon: "⚡",
      duration: "5 min",
      color: "blue",
    },
    {
      slug: "career-explorer",
      title: "AI Career Explorer",
      description:
        "Answer a few questions about your interests and discover AI careers that match your strengths — with study paths for India.",
      category: "ai-for-teens",
      type: "tool",
      icon: "🚀",
      duration: "4 min",
      color: "blue",
    },
  ],
  "ai-for-corporates": [
    {
      slug: "ai-readiness-assessment",
      title: "Is Your Organization AI-Ready?",
      description:
        "Score your company across 6 dimensions of AI readiness and get actionable recommendations for your next steps.",
      category: "ai-for-corporates",
      type: "assessment",
      icon: "🏢",
      duration: "5 min",
      color: "slate",
    },
    {
      slug: "jargon-decoder",
      title: "AI Jargon Decoder",
      description:
        "Click on real business scenarios and instantly see which AI concepts apply — explained in plain English, no PhD required.",
      category: "ai-for-corporates",
      type: "tool",
      icon: "🔤",
      duration: "3 min",
      color: "slate",
    },
    {
      slug: "use-case-finder",
      title: "AI Use Case Finder",
      description:
        "Select your industry and department to discover AI use cases that are actually working today — with ROI indicators.",
      category: "ai-for-corporates",
      type: "tool",
      icon: "🎯",
      duration: "4 min",
      color: "slate",
    },
  ],
};

export function getInteractivesByCategory(
  category: Category
): InteractiveItem[] {
  return interactiveContent[category] || [];
}

export function getInteractiveBySlug(
  category: Category,
  slug: string
): InteractiveItem | undefined {
  return interactiveContent[category]?.find((item) => item.slug === slug);
}
