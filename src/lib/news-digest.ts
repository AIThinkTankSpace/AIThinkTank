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
    date: "2026-11-05",
    headline: "A YC startup is putting $1M behind five unsolved materials science problems for AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/05/a-yc-startup-is-putting-1m-behind-five-unsolved-materials-science-problems-for-ai/",
  },
  {
    date: "2026-11-05",
    headline: "Agility is the first pure humanoid robot company on the stock market. Are you buying?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/05/agility-is-the-first-pure-humanoid-robot-company-on-the-stock-market-are-you-buying/",
  },
  {
    date: "2026-11-05",
    headline: "Apple is reportedly cutting budgets for its internal AI usage",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/04/apple-is-reportedly-cutting-budgets-for-its-internal-ai-usage/",
  },
  {
    date: "2026-11-04",
    headline: "AI PACs spent millions trying to shape Congress — here&#8217;s how they fared",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/04/ai-pacs-spent-millions-trying-to-shape-congress-heres-how-they-fared/",
  },
  {
    date: "2026-11-04",
    headline: "Nothing CEO says company&#8217;s mysterious AI-first device is dropping next month",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/04/nothing-ceo-says-companys-mysterious-ai-first-device-is-dropping-next-month/",
  },
  {
    date: "2026-11-03",
    headline: "Anthropic is working on a system to prove AI models&#8217; identity",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/",
  },
  {
    date: "2026-11-03",
    headline: "Data centers are turning to old jet engines as the wait for power grows",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/03/data-centers-are-turning-to-old-jet-engines-as-the-wait-for-power-grows/",
  },
  {
    date: "2026-11-03",
    headline: "Ted Schlein&#8217;s Ballistic Ventures seeks $490M for new funds amid AI-driven cybersecurity boom",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/03/ted-schleins-ballistic-ventures-seeks-490m-for-new-funds-amid-ai-driven-cybersecurity-boom/",
  },
  {
    date: "2026-11-03",
    headline: "AI inference startup Fal doubles its valuation to $16B as demand surges",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/03/ai-inference-startup-fal-doubles-its-valuation-to-16b-as-demand-surges/",
  },
  {
    date: "2026-11-03",
    headline: "Netflix&#8217;s new AI Discover tab helps you find something to watch based on your mood",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/03/netflixs-new-ai-discover-tab-helps-you-find-something-to-watch-based-on-your-mood/",
  },
  {
    date: "2026-11-03",
    headline: "Apple Watch&#8217;s AI features for rewinding and recapping conversations begin beta testing",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/02/apple-watchs-ai-features-for-rewinding-and-recapping-conversations-begin-beta-testing/",
  },
  {
    date: "2026-11-03",
    headline: "Google takes Dreambeans to India in bid to bring AI-generated personal stories to the masses",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/02/google-takes-dreambeans-to-india-in-bid-to-bring-ai-generated-personal-stories-to-the-masses/",
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
