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
    date: "2026-07-02",
    headline: "Indian tech tycoon bets $30M of his own money to build AI alternative to Microsoft Office",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/01/indian-tech-tycoon-bets-30m-to-build-an-ai-alternative-to-microsoft-office/",
  },
  {
    date: "2026-07-01",
    headline: "SpaceX has an AI device prototype, and it sure sounds phone-ish",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/01/spacex-has-an-ai-device-prototype-and-it-sure-sounds-phone-ish/",
  },
  {
    date: "2026-07-01",
    headline: "Cloudflare&#8217;s new policy pushes AI companies to pay for publishers&#8217; content",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/",
  },
  {
    date: "2026-07-01",
    headline: "Venice AI becomes a unicorn with $65M Series A as its privacy-first AI platform takes off",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/01/venice-ai-becomes-a-unicorn-with-65m-series-a-as-its-privacy-first-ai-platform-takes-off/",
  },
  {
    date: "2026-07-01",
    headline: "Gemini Spark, Google&#8217;s agentic assistant, is now available on Mac",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/01/gemini-spark-googles-agentic-assistant-is-now-available-on-mac/",
  },
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
