import type { Category } from "./articles";

export interface NewsItem {
  date: string; // "2026-03-15"
  headline: string;
  audiences: Category[]; // which hub pages show this item
  link?: string; // optional external or internal link
}

/**
 * Add new items at the TOP of this array.
 * Keep ~10-15 items max — older ones will be automatically hidden.
 * Each item can target one or more audiences.
 * Always include a source link for credibility.
 */
export const newsItems: NewsItem[] = [
  {
    date: "2026-03-15",
    headline: "Microsoft announces Copilot Wave 3 — agentic AI features for Word, Excel & PowerPoint",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.neowin.net/news/microsoft-365-copilot-wave-3-announced-new-agentic-features-for-word-excel-and-outlook/",
  },
  {
    date: "2026-03-14",
    headline: "India to launch AI & Computational Thinking curriculum from Class 3 onwards in 2026-27",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2184211",
  },
  {
    date: "2026-03-13",
    headline: "McKinsey: 88% of companies now using AI, but only 6% are seeing real financial impact",
    audiences: ["ai-for-corporates"],
    link: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
  {
    date: "2026-03-12",
    headline: "MIT RAISE Playground lets kids build AI games using Scratch — free and hands-on",
    audiences: ["ai-for-kids"],
    link: "https://playground.raise.mit.edu/",
  },
  {
    date: "2026-03-11",
    headline: "Anthropic expands Claude for Education — Teach For All partnership reaches 100K+ teachers",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.anthropic.com/news/advancing-claude-for-education",
  },
  {
    date: "2026-03-10",
    headline: "Duolingo creates 148 new language courses in under a year using generative AI",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://techcrunch.com/2025/04/30/duolingo-launches-148-courses-created-with-ai-after-sharing-plans-to-replace-contractors-with-ai/",
  },
  {
    date: "2026-03-09",
    headline: "OpenAI plans to bring Sora video generator into ChatGPT for 900M+ users",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://openai.com/index/sora-2/",
  },
  {
    date: "2026-03-08",
    headline: "UNESCO releases AI competency frameworks for students and teachers worldwide",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.unesco.org/en/articles/ai-competency-framework-students",
  },
  {
    date: "2026-03-07",
    headline: "Google releases Gemini 3.1 Pro — its latest reasoning and coding model",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/",
  },
  {
    date: "2026-03-06",
    headline: "AWS offers 600+ free AI courses and certifications for business professionals",
    audiences: ["ai-for-corporates"],
    link: "https://aws.amazon.com/ai/learn/",
  },
];

/**
 * Get news items filtered for a specific hub audience.
 * Returns the most recent `limit` items.
 */
export function getNewsForCategory(category: Category, limit = 5): NewsItem[] {
  return newsItems
    .filter((item) => item.audiences.includes(category))
    .slice(0, limit);
}
