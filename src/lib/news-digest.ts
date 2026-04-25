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
  {
    date: "2026-04-23",
    headline: "Meet Noscroll, an AI bot that does your doomscrolling for you",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/meet-noscroll-an-ai-bot-that-does-your-doomscrolling-for-you/",
  },
  {
    date: "2026-04-23",
    headline: "OpenAI releases GPT-5.5, bringing company one step closer to an AI &#8216;super app&#8217;",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/openai-chatgpt-gpt-5-5-ai-model-superapp/",
  },
  {
    date: "2026-04-23",
    headline: "Era raises $11M to build a software platform for AI gadgets",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/era-computer-raises-11m-to-build-a-software-platform-for-ai-gadgets/",
  },
  {
    date: "2026-04-23",
    headline: "AI galaxy hunters are adding to the global GPU crunch",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/ai-galaxy-hunters-are-adding-to-the-global-gpu-crunch/",
  },
  {
    date: "2026-04-23",
    headline: "India&#8217;s app market is booming — but global platforms are capturing most of the gains",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/22/indias-app-market-is-booming-but-global-platforms-are-capturing-most-of-the-gains/",
  },
  {
    date: "2026-04-22",
    headline: "Google updates Workspace to make AI your new office intern",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/22/google-updates-workspace-to-make-ai-your-new-office-intern/",
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
