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
    date: "2026-07-17",
    headline: "The Download: perimenopause misinformation and China&#8217;s latest AI leap",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/17/1140640/the-download-perimenopause-misinformation-china-moonshot-ai/",
  },
  {
    date: "2026-07-18",
    headline: "Dave Eggers told OpenAI staff  that ChatGPT was ‘silencing an entire generation’",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/967630/dave-eggers-openai-chatgpt-silencing-an-entire-generation",
  },
  {
    date: "2026-07-17",
    headline: "TikTok is testing an AI likeness detection tool",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/967486/tiktok-ai-likeness-detection-tool",
  },
  {
    date: "2026-07-17",
    headline: "Apple’s plot to crush OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/podcast/967244/apple-openai-lawsuit-vergecast",
  },
  {
    date: "2026-07-18",
    headline: "Neil Rimer thinks the AI money is coming back out",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/17/neil-rimer-thinks-the-ai-money-is-coming-back-out/",
  },
  {
    date: "2026-07-17",
    headline: "Vertu wants executives to pay $6,880 for an AI agent — here&#8217;s how it actually performs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/17/vertu-wants-executives-to-pay-6880-for-an-ai-agent-heres-how-it-actually-performs/",
  },
  {
    date: "2026-07-17",
    headline: "Databricks hits $188B valuation, extending its run as AI&#8217;s favorite second act",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/17/databricks-hits-188b-valuation-extending-its-run-as-ais-favorite-second-act/",
  },
  {
    date: "2026-07-17",
    headline: "Agility Robotics plants its flag in Tesla&#8217;s backyard",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/17/agility-robotics-plants-its-flag-in-teslas-backyard/",
  },
  {
    date: "2026-07-17",
    headline: "AI-driven memory crunch jolts India&#8217;s smartphone market",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/17/ai-driven-memory-crunch-jolts-indias-smartphone-market/",
  },
  {
    date: "2026-07-16",
    headline: "Google Vids now lets you star in your own AI videos",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/16/google-vids-now-lets-you-star-in-your-own-ai-videos/",
  },
  {
    date: "2026-07-16",
    headline: "Roblox launches an AI-powered game-creation feature in its mobile app",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/2026/07/16/roblox-launches-an-ai-powered-game-creation-feature-in-its-mobile-app/",
  },
  {
    date: "2026-07-16",
    headline: "Google&#8217;s AI Mode now lets you link and interact with select apps",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/16/googles-ai-mode-now-lets-you-link-and-interact-with-select-apps/",
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
