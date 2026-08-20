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
    date: "2026-08-19",
    headline: "OpenAI seeks to one-up Anthropic with new customer privacy protections",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/19/openai-seeks-to-one-up-anthropic-with-new-customer-privacy-protections/",
  },
  {
    date: "2026-08-19",
    headline: "AI was supposed to win people over by now &#8212; it hasn&#8217;t",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/19/ai-was-supposed-to-win-people-over-by-now-it-hasnt/",
  },
  {
    date: "2026-08-19",
    headline: "Google packs Search and Gemini with new AI study tools",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/19/google-launches-new-study-tools-for-students-across-search-and-gemini/",
  },
  {
    date: "2026-08-19",
    headline: "Researchers say OpenAI revoked their access to limited cyber program",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/19/researchers-complain-that-openai-revoked-their-access-to-limited-cyber-program/",
  },
  {
    date: "2026-08-19",
    headline: "Meet the startup helping Wall Street put a price on AI compute",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/meet-the-startup-helping-wall-street-put-a-price-on-ai-compute/",
  },
  {
    date: "2026-08-18",
    headline: "OpenAI institutes new safeguards after Hugging Face breach",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/18/openai-institutes-new-safeguards-after-hugging-face-breach/",
  },
  {
    date: "2026-08-18",
    headline: "Why Apple&#8217;s camera-equipped AirPods may not be the &#8216;pervert pods&#8217; consumers fear",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/18/why-apples-camera-equipped-airpods-may-not-be-the-pervert-pods-consumers-fear/",
  },
  {
    date: "2026-08-18",
    headline: "Warp&#8217;s new system is an out-of-the-box software factory for AI development",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/18/warps-new-system-is-an-out-of-the-box-software-factory-for-ai-development/",
  },
  {
    date: "2026-08-18",
    headline: "OpenAI launches a safer ChatGPT for teens — years after teens started using it",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/18/openai-launches-a-safer-chatgpt-for-teens-years-after-teens-started-using-it/",
  },
  {
    date: "2026-08-18",
    headline: "Perplexity’s free AI offer left it with millions more users in India",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/18/perplexitys-free-ai-offer-left-it-with-millions-more-users-in-india/",
  },
  {
    date: "2026-08-17",
    headline: "Anthropic&#8217;s annualized revenue surges to $65B",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/17/anthropics-annualized-revenue-surges-to-65b/",
  },
  {
    date: "2026-08-17",
    headline: "AI automation startup Relay shuts down, staff joins Google&#8217;s Chrome team",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/17/ai-automation-startup-relay-shuts-down-staff-joins-googles-chrome-team/",
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
