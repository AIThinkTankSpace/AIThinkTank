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
    date: "2026-06-18",
    headline: "How to turn off AI in your Google Docs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/17/how-to-turn-off-ai-in-your-google-docs/",
  },
  {
    date: "2026-06-17",
    headline: "NEA’s Tiffany Luck says enterprises are still figuring out their AI ROI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/neas-tiffany-luck-says-enterprises-are-still-figuring-out-their-ai-roi/",
  },
  {
    date: "2026-06-17",
    headline: "World leaders want American AI. They just don&#8217;t want America to be able to turn it off.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/17/world-leaders-want-american-ai-they-just-dont-want-america-to-be-able-to-turn-it-off/",
  },
  {
    date: "2026-06-17",
    headline: "Anthropic becomes first AI startup to join the Frontier carbon removal coalition",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/17/anthropic-becomes-first-ai-startup-to-join-the-frontier-carbon-removal-coalition/",
  },
  {
    date: "2026-06-17",
    headline: "NEA&#8217;s Tiffany Luck on AI IPOs, personal agents, and the ROI reckoning",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/neas-tiffany-luck-on-ai-ipos-personal-agents-and-the-roi-reckoning/",
  },
  {
    date: "2026-06-16",
    headline: "Anthropic&#8217;s latest feud with the Trump admin may actually help it, sales data suggests",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/16/anthropics-latest-feud-with-the-trump-admin-may-actually-help-it-sales-data-suggests/",
  },
  {
    date: "2026-06-16",
    headline: "Android 17 launches with new multitasking tools as Google expands Gemini features",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/16/android-17-launches-with-new-multitasking-tools-as-google-expands-gemini-features/",
  },
  {
    date: "2026-06-16",
    headline: "Sixty percent of US consumers say &#8216;AI&#8217; in brand messaging is a turnoff, survey finds",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/16/sixty-percent-of-u-s-consumers-say-ai-in-brand-messaging-is-a-turnoff-survey-finds/",
  },
  {
    date: "2026-06-16",
    headline: "DOJ claims xAI’s unpermitted gas turbines are a matter of ‘national, economic, and energy security’",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/16/doj-claims-xais-unpermitted-gas-turbines-are-a-matter-of-national-economic-and-energy-security/",
  },
  {
    date: "2026-06-16",
    headline: "Plaud says its software business topped $100M in ARR after shipping over 2M AI notetakers",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/16/plaud-says-its-software-business-topped-100m-in-arr-after-shipping-over-2m-ai-notetakers/",
  },
  {
    date: "2026-06-16",
    headline: "Malaysia&#8217;s AI agent-powered messaging app Respond.io raises $62.5M, eyes acquisitions",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/15/malaysias-respond-io-raises-62-5m-eyes-acquisitions-in-north-america-and-europe/",
  },
  {
    date: "2026-06-15",
    headline: "Sundar Pichai faces boos, walkout at Stanford graduation ceremony over Google&#8217;s Israel,…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/15/sundar-pichai-faces-boos-walkout-at-stanford-graduation-ceremony-over-googles-israel-ice-ties/",
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
