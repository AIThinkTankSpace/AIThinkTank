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
    date: "2026-11-13",
    headline: "Jensen Huang’s departure blasts big hole in AI startup funding, VCs and founders say",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/13/jensen-huangs-departure-blasts-big-hole-in-ai-startup-funding-vcs-and-founders-say/",
  },
  {
    date: "2026-11-13",
    headline: "AI agent startup LangChain hits $3B valuation",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/13/ai-agent-startup-langchain-hits-3b-valuation/",
  },
  {
    date: "2026-11-13",
    headline: "Export-banned Nvidia chips are behind China&#8217;s most powerful AI models — uh-oh, Jensen!",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/13/export-banned-nvidia-chips-are-behind-chinas-most-powerful-ai-models-uh-oh-jensen/",
  },
  {
    date: "2026-11-13",
    headline: "ChatGPT&#8217;s new Wallet lets AI agents shop and check out for you",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/13/chatgpts-new-wallet-lets-ai-agents-shop-and-check-out-for-you/",
  },
  {
    date: "2026-11-13",
    headline: "The Download: Silicon Valley’s blind spot and Nvidia’s chip-tracking plan",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/13/1148551/the-download-silicon-valley-midterms-nvidia-chip-tracking/",
  },
  {
    date: "2026-11-13",
    headline: "Israel&#8217;s VCs see opportunity for challengers in Nvidia&#8217;s turmoil",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/13/israels-vcs-see-opportunity-for-challengers-in-nvidias-turmoil/",
  },
  {
    date: "2026-11-12",
    headline: "Democrats launch Nvidia investigation, write scathing letter on Huang&#8217;s…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/12/democrats-launch-nvidia-investigation-write-scathing-letter-on-huangs-scheme-with-trump/",
  },
  {
    date: "2026-11-12",
    headline: "Jensen Huang was having a third affair, Reuters reports",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/12/jensen-huang-was-having-a-third-affair-reuters-reports/",
  },
  {
    date: "2026-11-12",
    headline: "Nectar launches an AI agent to automate creator discovery and outreach for brands",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/12/nectar-launches-an-ai-agent-to-automate-creator-discovery-and-outreach-for-brands/",
  },
  {
    date: "2026-11-12",
    headline: "Jensen Huang’s exit puts Nvidia’s support for open source in question",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/12/jensen-huangs-exit-puts-nvidias-support-for-open-source-in-question/",
  },
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
