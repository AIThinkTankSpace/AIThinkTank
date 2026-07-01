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
    date: "2026-07-01",
    headline: "Trump drops restrictions on Anthropic&#8217;s Mythos and Fable models",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/30/trump-drops-restrictions-on-anthropics-mythos-and-fable-models/",
  },
  {
    date: "2026-06-30",
    headline: "OpenClaw is finally available on Android and iOS",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/30/openclaw-is-finally-available-on-android-and-ios/",
  },
  {
    date: "2026-06-30",
    headline: "The DeepMind trio who built a poker AI are now making money for quant hedge funds",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/30/the-deepmind-trio-who-built-a-poker-ai-are-now-making-money-for-quant-hedge-funds/",
  },
  {
    date: "2026-06-30",
    headline: "Nvidia competitor Etched hits $5B valuation, $1B in sales for AI chip",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/",
  },
  {
    date: "2026-06-30",
    headline: "Anthropic launches Claude Sonnet 5 as a cheaper way to run agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/",
  },
  {
    date: "2026-06-30",
    headline: "Crypto exchange OKX wants AI agents to hire and pay each other",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/30/crypto-exchange-okx-wants-ai-agents-to-hire-and-pay-each-other/",
  },
  {
    date: "2026-06-30",
    headline: "The AI jobs debate just got messier",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/29/the-ai-jobs-debate-just-got-messier/",
  },
  {
    date: "2026-06-30",
    headline: "Vibe coding platform Base44 launches own model as AI startups seek defensibility",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/29/vibe-coding-platform-base44-launches-own-model-as-ai-startups-seek-defensibility/",
  },
  {
    date: "2026-06-29",
    headline: "Gemini&#8217;s personalized AI image generation is now free for US users",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/29/geminis-personalized-ai-image-generation-is-now-free-for-u-s-users/",
  },
  {
    date: "2026-06-29",
    headline: "Anthropic and Gov. Newsom forge deal allowing California government to use Claude at half price",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price/",
  },
  {
    date: "2026-06-28",
    headline: "Ford rehires ‘gray beard’ engineers after AI falls short",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/28/ford-rehires-gray-beard-engineers-after-ai-falls-short/",
  },
  {
    date: "2026-06-28",
    headline: "Why Wall Street thinks US memory maker Micron is the next Nvidia",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/28/why-wall-street-thinks-us-memory-maker-micron-is-the-next-nvidia/",
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
