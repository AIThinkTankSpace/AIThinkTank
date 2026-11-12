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
    date: "2026-11-11",
    headline: "Nvidia’s stock drops as board reportedly preps to oust CEO Jensen Huang",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/11/nvidias-stock-drops-as-board-reportedly-preps-to-oust-ceo-jensen-huang/",
  },
  {
    date: "2026-11-11",
    headline: "Jensen Huang accused of having another affair — with an Nvidia exec",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/11/jensen-huang-accused-of-having-another-affair-with-a-nvidia-exec/",
  },
  {
    date: "2026-11-11",
    headline: "CoreWeave turns to customer prepayments, shorter contracts to fund AI growth",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/11/coreweave-turns-to-customer-prepayments-shorter-contracts-to-fund-ai-growth/",
  },
  {
    date: "2026-11-11",
    headline: "With $720M round, Britain&#8217;s Fractile gets a leg up in the race for AI chips",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/11/with-720m-round-britains-fractile-gets-a-leg-up-in-the-race-for-ai-chips/",
  },
  {
    date: "2026-11-11",
    headline: "Congress to call Jensen Huang in to answer for alleged Chinese spy affair",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/11/congress-to-call-jensen-huang-in-to-answer-for-alleged-chinese-spy-affair/",
  },
  {
    date: "2026-11-11",
    headline: "Nvidia’s crisis has corporate governance experts reaching for the popcorn",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/nvidias-crisis-has-corporate-governance-experts-reaching-for-the-popcorn/",
  },
  {
    date: "2026-11-10",
    headline: "OpenAI acquires Odessia, travel startup created by Sonder founder",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/openai-acquires-odessia-travel-startup-created-by-sonder-founder/",
  },
  {
    date: "2026-11-10",
    headline: "OpenAI, Anthropic face new oversight as New York’s AI safety law takes effect",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/",
  },
  {
    date: "2026-11-10",
    headline: "All 7 Anthropic founders will each cash out about $250M in IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/all-7-anthropic-founders-will-each-cash-out-about-250m-in-ipo/",
  },
  {
    date: "2026-11-10",
    headline: "Oura to acquire AI-native primary care startup Counsel Health for $625M",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/oura-to-acquire-ai-native-primary-care-startup-counsel-health-for-625m/",
  },
  {
    date: "2026-11-10",
    headline: "Adobe brings AI agents and new creative tools to Photoshop, Premiere, and Firefly",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/adobe-adds-more-ai-to-its-products-and-launches-an-mcp/",
  },
  {
    date: "2026-11-10",
    headline: "Anthropic sets IPO price range of $70 to $78 per share to reach an implied valuation of $1.404…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/anthropic-sets-ipo-price-range-of-70-to-78-per-share-to-reach-an-implied-valuation-of-1-404-trillion/",
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
