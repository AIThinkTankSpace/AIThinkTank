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
    date: "2026-11-06",
    headline: "Underdog shows off a 32MB speech model in new demo",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/",
  },
  {
    date: "2026-11-06",
    headline: "Physicl raises $10M to make the digital world real enough for robots",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/06/physicl-raises-10m-to-make-the-digital-world-real-enough-for-robots/",
  },
  {
    date: "2026-11-06",
    headline: "Palo Alto Networks in talks to buy AI agent security startup Clutch for $500M",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/05/palo-alto-networks-in-talks-to-buy-ai-agent-security-startup-clutch-for-500m/",
  },
  {
    date: "2026-11-05",
    headline: "Airbnb says it&#8217;s launching an AI travel agent in the first half of 2027",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/05/airbnb-says-its-launching-an-ai-travel-agent-in-the-first-half-of-2027/",
  },
  {
    date: "2026-11-05",
    headline: "Meta says US users can now video chat with their Muse AI avatar",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/05/meta-says-us-users-can-now-video-chat-with-their-muse-ai-avatar/",
  },
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
