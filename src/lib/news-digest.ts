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
