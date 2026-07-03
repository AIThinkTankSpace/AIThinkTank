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
    headline: "Mark Zuckerberg tells staff that AI agents haven&#8217;t progressed as quickly as he&#8217;d hoped",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/",
  },
  {
    date: "2026-07-02",
    headline: "Jersey Mike&#8217;s IPO illustrates how bad the AI hype has become",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/02/jersey-mikes-ipo-illustrates-how-bad-the-ai-hype-has-become/",
  },
  {
    date: "2026-07-02",
    headline: "Anthropic is discussing a new custom chip with Samsung",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/",
  },
  {
    date: "2026-07-02",
    headline: "OpenAI proposed donating 5% of its equity to a US sovereign wealth fund",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/02/openai-proposed-donating-5-of-its-equity-to-a-us-sovereign-wealth-fund/",
  },
  {
    date: "2026-07-02",
    headline: "Microsoft launches its own AI deployment company with $2.5 billion commitment",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/02/microsoft-launches-its-own-ai-deployment-company-with-2-5-billion-commitment/",
  },
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
