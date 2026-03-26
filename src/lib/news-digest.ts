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
    date: "2026-03-26",
    headline: "Mercor competitor Deccan AI raises $25M, sources experts from India",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/25/deccan-ai-raises-25m-as-ai-training-push-relies-on-india-based-workforce/",
  },
  {
    date: "2026-03-25",
    headline: "The AI skills gap is here, says AI company, and power users are pulling ahead",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/25/the-ai-skills-gap-is-here-says-ai-company-and-power-users-are-pulling-ahead/",
  },
  {
    date: "2026-03-25",
    headline: "Google unveils TurboQuant, a new AI memory compression algorithm — and yes, the internet is…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/25/google-turboquant-ai-memory-compression-silicon-valley-pied-piper/",
  },
  {
    date: "2026-03-25",
    headline: "Melania Trump wants a robot to homeschool your child",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/2026/03/25/melania-trump-wants-a-robot-to-homeschool-your-child/",
  },
  {
    date: "2026-03-25",
    headline: "Google launches Lyria 3 Pro music generation model",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/25/google-launches-lyria-3-pro-music-generation-model/",
  },
  {
    date: "2026-03-25",
    headline: "With $3.5B in fresh capital, Kleiner Perkins is going all in on AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/with-3-5b-in-fresh-capital-kleiner-perkins-is-going-all-in-on-ai/",
  },
  {
    date: "2026-03-24",
    headline: "OpenAI’s Sora was the creepiest app on your phone &#8212; now it&#8217;s shutting down",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/openais-sora-was-the-creepiest-app-on-your-phone-now-its-shutting-down/",
  },
  {
    date: "2026-03-24",
    headline: "Anthropic hands Claude Code more control, but keeps it on a leash",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/anthropic-hands-claude-code-more-control-but-keeps-it-on-a-leash/",
  },
  {
    date: "2026-03-24",
    headline: "Spotify tests new tool to stop AI slop from being attributed to real artists",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/spotify-tests-new-tool-to-stop-ai-slop-from-being-attributed-to-real-artists/",
  },
  {
    date: "2026-03-24",
    headline: "Databricks bought two startups to underpin its new AI security product",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/databricks-buys-two-startups-lakewatch-antimatter-siftd-ai-security/",
  },
  {
    date: "2026-03-25",
    headline: "US passes AI Accountability Act — companies must publish bias audits for AI in hiring and lending",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.insightfulpost.com/what-is-artificial-intelligence-news-2026/",
  },
  {
    date: "2026-03-25",
    headline: "OpenAI unveils GPT-5.4 with 1M token context — scores above human baseline on autonomous tasks",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.crescendo.ai/news/latest-ai-news-and-updates",
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
