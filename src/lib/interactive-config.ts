import type { Category } from "./articles";

export interface InteractiveItem {
  slug: string;
  title: string;
  description: string;
  category: Category;
  type: "quiz" | "game" | "tool" | "explainer" | "assessment" | "infographic";
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
    {
      slug: "infographic-homework-help",
      title: "AI Homework Help — Visual Guide",
      description:
        "A colorful guide to how AI can help with homework the right way. See the do's, don'ts, and best tools at a glance!",
      category: "ai-for-kids",
      type: "infographic",
      icon: "📚",
      duration: "3 min",
      color: "amber",
    },
    {
      slug: "infographic-learning-apps",
      title: "Best AI Learning Apps for Kids",
      description:
        "Discover the top AI-powered learning apps of 2026 in this visual guide — with ratings, age groups, and parent tips.",
      category: "ai-for-kids",
      type: "infographic",
      icon: "📱",
      duration: "3 min",
      color: "amber",
    },
    {
      slug: "infographic-coding-for-kids",
      title: "How Kids Can Learn Coding with AI",
      description:
        "A step-by-step visual journey showing how AI makes learning to code fun, easy, and age-appropriate.",
      category: "ai-for-kids",
      type: "infographic",
      icon: "💻",
      duration: "3 min",
      color: "amber",
    },
    {
      slug: "infographic-parental-controls",
      title: "Parental Controls for AI Apps",
      description:
        "Your visual checklist for keeping AI apps safe for kids — platform-by-platform setup guides and safety tiers.",
      category: "ai-for-kids",
      type: "infographic",
      icon: "🛡️",
      duration: "3 min",
      color: "amber",
    },
    {
      slug: "infographic-voice-assistants",
      title: "Should Kids Use Voice Assistants?",
      description:
        "Alexa, Siri, Google — are they safe for kids? See the benefits, risks, and smart setup tips in this visual guide.",
      category: "ai-for-kids",
      type: "infographic",
      icon: "🗣️",
      duration: "3 min",
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
    {
      slug: "infographic-college-apps",
      title: "AI for College Applications",
      description:
        "How to use AI in your college essays without getting flagged. Red flags, smart prompts, and a 5-week writing roadmap.",
      category: "ai-for-teens",
      type: "infographic",
      icon: "🎓",
      duration: "4 min",
      color: "blue",
    },
    {
      slug: "infographic-ai-portfolio",
      title: "Build Your AI Portfolio",
      description:
        "A visual guide to building a portfolio that impresses colleges and recruiters — with project ideas and a 3-month timeline.",
      category: "ai-for-teens",
      type: "infographic",
      icon: "📁",
      duration: "4 min",
      color: "blue",
    },
    {
      slug: "infographic-internships",
      title: "AI Internships & Competitions",
      description:
        "Real paid opportunities and competitions for high schoolers — with India-specific platforms, earnings, and action plans.",
      category: "ai-for-teens",
      type: "infographic",
      icon: "💰",
      duration: "4 min",
      color: "blue",
    },
    {
      slug: "infographic-ai-bias",
      title: "Understanding AI Bias",
      description:
        "Why all AI systems are biased, how to spot it, and what you can do about it — with real-world examples that matter to teens.",
      category: "ai-for-teens",
      type: "infographic",
      icon: "⚖️",
      duration: "4 min",
      color: "blue",
    },
    {
      slug: "infographic-board-exams",
      title: "AI Tools for Board Exam Prep",
      description:
        "A visual study plan using AI tools for CBSE, ICSE, and state boards — subject-by-subject strategies and a 3-month roadmap.",
      category: "ai-for-teens",
      type: "infographic",
      icon: "📝",
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
    {
      slug: "infographic-hr-recruitment",
      title: "AI in HR & Recruitment",
      description:
        "Where AI works in hiring, critical mistakes to avoid, and an ethical framework — in one visual executive brief.",
      category: "ai-for-corporates",
      type: "infographic",
      icon: "👥",
      duration: "4 min",
      color: "slate",
    },
    {
      slug: "infographic-governance",
      title: "AI Governance Framework",
      description:
        "The four pillars of AI governance for small businesses — classification, approvals, data standards, and monitoring.",
      category: "ai-for-corporates",
      type: "infographic",
      icon: "⚖️",
      duration: "4 min",
      color: "slate",
    },
    {
      slug: "infographic-security-privacy",
      title: "AI Security & Data Privacy",
      description:
        "Five real risks, a privacy framework, and actionable checklists for business leaders — in executive brief format.",
      category: "ai-for-corporates",
      type: "infographic",
      icon: "🔒",
      duration: "4 min",
      color: "slate",
    },
    {
      slug: "infographic-ai-culture",
      title: "Building an AI-First Culture",
      description:
        "Three phases from activation to normalization — with a 90-day culture roadmap and common concerns addressed.",
      category: "ai-for-corporates",
      type: "infographic",
      icon: "🌱",
      duration: "4 min",
      color: "slate",
    },
    {
      slug: "infographic-measuring-success",
      title: "Measuring AI Success",
      description:
        "A three-layer measurement framework — adoption, quality, and business impact — with timelines and common mistakes.",
      category: "ai-for-corporates",
      type: "infographic",
      icon: "📈",
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
