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
    date: "2026-11-20",
    headline: "Daniel Ek backs AI researcher&#8217;s fusion power startup. Here&#8217;s what they&#8217;re…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/20/daniel-ek-backs-ai-researchers-fusion-power-startup-heres-what-theyre-building/",
  },
  {
    date: "2026-11-20",
    headline: "AI claimed a solution to the 167-year-old Riemann hypothesis — and a human did, too",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/",
  },
  {
    date: "2026-11-20",
    headline: "The most misunderstood graph in AI just got a major update",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/20/1149399/the-most-misunderstood-graph-in-ai-just-got-a-major-update/",
  },
  {
    date: "2026-11-19",
    headline: "The Download: a living liver, a billion-dollar battery deal, and AI hype",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/19/1148979/the-download-liver-kept-alive-sila-battery-deal-ai-hype/",
  },
  {
    date: "2026-11-20",
    headline: "Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced.",
    audiences: ["ai-for-corporates"],
    link: "https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/",
  },
  {
    date: "2026-11-20",
    headline: "The fallout from Nvidia’s Jensen Huang scandal continues",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/the-fallout-from-nvidias-jensen-huang-scandal-continues/",
  },
  {
    date: "2026-11-20",
    headline: "Six AI-powered gadgets that could make your home office smarter",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/20/6-ai-powered-gadgets-that-could-make-your-home-office-smarter/",
  },
  {
    date: "2026-11-20",
    headline: "Apple may be developing its own AI agent that runs your Mac",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/19/apple-may-be-developing-its-own-ai-agent-that-runs-your-mac/",
  },
  {
    date: "2026-11-20",
    headline: "Anthropic&#8217;s 7 founders cashed out nearly $2B in record-breaking IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/19/anthropics-7-founders-cashed-out-nearly-2b-in-record-breaking-ipo/",
  },
  {
    date: "2026-11-19",
    headline: "These tech outages are giving Y2K, AI agent style",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/19/these-tech-outages-are-giving-y2k-ai-agent-style/",
  },
  {
    date: "2026-11-19",
    headline: "Anthropic&#8217;s IPO puts AI&#8217;s circular financing boom to the test",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/",
  },
  {
    date: "2026-11-19",
    headline: "Microsoft CEO Satya Nadella explains why he asked 60K employees to quit",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/18/microsoft-ceo-satya-nadella-explains-why-he-asked-60k-employees-to-quit/",
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
