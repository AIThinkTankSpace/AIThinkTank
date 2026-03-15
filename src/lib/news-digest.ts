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
 */
export const newsItems: NewsItem[] = [
  {
    date: "2026-03-15",
    headline: "Google releases Gemini 2.5 Pro — its most capable model for reasoning and coding",
    audiences: ["ai-for-teens", "ai-for-corporates"],
  },
  {
    date: "2026-03-14",
    headline: "UNESCO launches global AI literacy framework for schools worldwide",
    audiences: ["ai-for-kids", "ai-for-teens"],
  },
  {
    date: "2026-03-13",
    headline: "Microsoft brings Copilot AI to PowerPoint, Excel & Word for all business users",
    audiences: ["ai-for-corporates"],
  },
  {
    date: "2026-03-12",
    headline: "MIT creates a free AI playground game to teach kids how chatbots think",
    audiences: ["ai-for-kids"],
  },
  {
    date: "2026-03-11",
    headline: "Anthropic launches Claude for Education with special student safety features",
    audiences: ["ai-for-kids", "ai-for-teens"],
  },
  {
    date: "2026-03-10",
    headline: "McKinsey report: 72% of companies now using AI in at least one business function",
    audiences: ["ai-for-corporates"],
  },
  {
    date: "2026-03-09",
    headline: "OpenAI introduces Sora video generator — create videos from text descriptions",
    audiences: ["ai-for-teens", "ai-for-corporates"],
  },
  {
    date: "2026-03-08",
    headline: "India adds AI as a subject in CBSE curriculum from Class 6 onwards",
    audiences: ["ai-for-kids", "ai-for-teens"],
  },
  {
    date: "2026-03-07",
    headline: "Duolingo now uses AI to create personalized language lessons for every learner",
    audiences: ["ai-for-kids", "ai-for-teens"],
  },
  {
    date: "2026-03-06",
    headline: "AWS announces free AI training program with certificates for business professionals",
    audiences: ["ai-for-corporates"],
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
