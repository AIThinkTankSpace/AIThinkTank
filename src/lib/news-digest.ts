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
    date: "2026-04-26",
    headline: "To buy this Bay Area home, you’ll need Anthropic equity",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/26/to-buy-this-bay-area-home-youll-need-anthropic-equity/",
  },
  {
    date: "2026-04-25",
    headline: "Anthropic created a test marketplace for agent-on-agent commerce",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/25/anthropic-created-a-test-marketplace-for-agent-on-agent-commerce/",
  },
  {
    date: "2026-04-25",
    headline: "Maine&#8217;s governor vetoes data center moratorium",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/25/maines-governor-vetoes-data-center-moratorium/",
  },
  {
    date: "2026-04-25",
    headline: "OpenAI CEO apologizes to Tumbler Ridge community",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/25/openai-ceo-apologizes-to-tumbler-ridge-community/",
  },
  {
    date: "2026-04-24",
    headline: "Three reasons why DeepSeek’s new model matters",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/24/1136422/why-deepseeks-v4-matters/",
  },
  {
    date: "2026-04-24",
    headline: "The Download: supercharged scams and studying AI healthcare",
    audiences: ["ai-for-teens"],
    link: "https://www.technologyreview.com/2026/04/24/1136400/the-download-supercharged-scams-questionable-ai-healthcare/",
  },
  {
    date: "2026-04-24",
    headline: "Meta&#8217;s loss is Thinking Machines&#8217; gain",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/24/metas-loss-is-thinking-machines-gain/",
  },
  {
    date: "2026-04-24",
    headline: "ComfyUI hits $500M valuation as creators seek more control over AI-generated media",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/",
  },
  {
    date: "2026-04-24",
    headline: "Google to invest up to $40B in Anthropic in cash and compute",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/24/google-to-invest-up-to-40b-in-anthropic-in-cash-and-compute/",
  },
  {
    date: "2026-04-24",
    headline: "Marked-up Mac minis flood eBay amid shortages driven by AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/24/mac-mini-price-expensive-ebay-shortage-ai-memory/",
  },
  {
    date: "2026-04-24",
    headline: "Nothing introduces an AI-powered dictation tool",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/24/nothing-introduces-an-ai-powered-dictation-tool/",
  },
  {
    date: "2026-04-23",
    headline: "Bret Taylor&#8217;s Sierra buys YC-backed AI startup Fragment",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/bret-taylors-sierra-buys-yc-backed-ai-startup-fragment/",
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
