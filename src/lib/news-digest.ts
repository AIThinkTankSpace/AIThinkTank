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
  {
    date: "2026-11-18",
    headline: "Amidst fears of AI cyberattacks, Satya Nadella says lots of critical infrastructure is…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/18/amidst-fears-of-ai-cyberattacks-satya-nadella-says-lots-of-critical-infrastructure-is-unpatchable/",
  },
  {
    date: "2026-11-18",
    headline: "Microsoft CEO Satya Nadella remains confident in Nvidia after Huang’s exit",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/18/microsoft-ceo-satya-nadella-remains-confident-in-nvidia-after-huangs-exit/",
  },
  {
    date: "2026-11-18",
    headline: "Satya Nadella predicts AI agents will reshuffle the economics of the web",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/18/satya-nadella-predicts-ai-agents-will-reshuffle-the-economics-of-the-web/",
  },
  {
    date: "2026-11-18",
    headline: "Nvidia clarifies when it will — and won&#8217;t —keep financing neoclouds",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/18/nvidia-clarifies-when-it-will-and-wont-keep-financing-neoclouds/",
  },
  {
    date: "2026-11-18",
    headline: "Felicis leads $7.5M bet on Unsiloed AI to make enterprise documents usable by AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/18/felicis-leads-7-5m-bet-on-unsiloed-ai-to-make-enterprise-documents-usable-by-ai-agents/",
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
