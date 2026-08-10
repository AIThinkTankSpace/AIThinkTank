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
    date: "2026-08-09",
    headline: "Anthropic is turning Claude Code’s auto mode on by default",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/09/anthropic-is-turning-claude-codes-auto-mode-on-by-default/",
  },
  {
    date: "2026-08-09",
    headline: "The AI safety test is becoming a safety risk",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/09/the-ai-safety-test-is-becoming-a-safety-risk/",
  },
  {
    date: "2026-08-08",
    headline: "OpenAI acquires presentation startup NextSlide",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/08/openai-acquires-presentation-startup-nextslide/",
  },
  {
    date: "2026-08-07",
    headline: "Fenix Flexin isn’t even denying using AI to make ‘Rubberz’ anymore",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/976801/fenix-flexin-rubberz-ai-song-treblo",
  },
  {
    date: "2026-08-07",
    headline: "Watching Roku’s AI channel is like eating from a trough",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/entertainment/976939/roku-fairground-ai-fast-channel",
  },
  {
    date: "2026-08-07",
    headline: "OpenAI puts the brakes on a new model because it&#8217;s supposedly too powerful",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/976948/openai-astra-model-pause-critical-cyber-capabilities",
  },
  {
    date: "2026-08-07",
    headline: "What&#8217;s behind the Google AI shake-up",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/podcast/976784/google-deepmind-ai-race-vergecast",
  },
  {
    date: "2026-08-07",
    headline: "OpenAI says it slowed Astra model development over security concerns",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/07/openai-says-it-slowed-astra-model-development-over-security-concerns/",
  },
  {
    date: "2026-08-07",
    headline: "After Rippling blew millions on AI in months, it built an employee ROI tool",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/07/after-rippling-blew-millions-on-ai-in-months-it-built-an-employee-roi-tool/",
  },
  {
    date: "2026-08-07",
    headline: "Cloudflare launches Kitesurf, a browser built for AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/07/cloudflare-launches-kitesurf-a-browser-built-for-ai-agents/",
  },
  {
    date: "2026-08-07",
    headline: "Airbnb says AI is helping it ship features faster as it tests a new search function",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/07/airbnb-says-ai-is-helping-it-ship-features-faster-as-it-tests-a-new-search-function/",
  },
  {
    date: "2026-08-07",
    headline: "The Download: a censorship conspiracy theory and the first virus created by AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/07/1141389/the-download-censorship-conspiracy-theory-first-ai-virus/",
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
