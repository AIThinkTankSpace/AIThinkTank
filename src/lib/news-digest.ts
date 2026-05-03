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
    date: "2026-05-02",
    headline: "AI-generated actors and scripts are now ineligible for Oscars",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/02/ai-generated-actors-and-scripts-are-now-ineligible-for-oscars/",
  },
  {
    date: "2026-05-02",
    headline: "The best AI dictation apps, tested and ranked",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/02/the-best-ai-powered-dictation-apps-of-2025/",
  },
  {
    date: "2026-05-01",
    headline: "The Download: a new Christian phone network, and debugging LLMs",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/01/1136762/the-download-christian-phone-network-debugging-llms/",
  },
  {
    date: "2026-05-01",
    headline: "A new US phone network for Christians aims to block porn and gender-related content",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/01/1136739/a-new-t-mobile-network-for-christians-aims-to-block-porn-and-gender-related-content/",
  },
  {
    date: "2026-05-01",
    headline: "Pentagon strikes classified AI deals with OpenAI, Google, and Nvidia — but not Anthropic",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/922113/pentagon-ai-classified-openai-google-nvidia",
  },
  {
    date: "2026-05-01",
    headline: "Meta buys robotics startup to bolster its humanoid AI ambitions",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/01/meta-buys-robotics-startup-to-bolster-its-humanoid-ai-ambitions/",
  },
  {
    date: "2026-05-01",
    headline: "Pentagon inks deals with Nvidia, Microsoft, and AWS to deploy AI on classified networks",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/01/pentagon-inks-deals-with-nvidia-microsoft-and-aws-to-deploy-ai-on-classified-networks/",
  },
  {
    date: "2026-05-01",
    headline: "Musk v. Altman week 1: Elon Musk says he was duped, warns AI could kill us all, and admits that…",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/01/1136800/musk-v-altman-week-1-musk-says-he-was-duped-warns-ai-could-kill-us-all-and-admits-that-xai-distills-openais-models/",
  },
  {
    date: "2026-05-01",
    headline: "Cyber-Insecurity in the AI Era",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/01/1136779/cyber-insecurity-in-the-ai-era/",
  },
  {
    date: "2026-05-01",
    headline: "Operationalizing AI for Scale and Sovereignty",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/01/1136772/operationalizing-ai-for-scale-and-sovereignty/",
  },
  {
    date: "2026-05-01",
    headline: "ChatGPT Images 2.0 is a hit in India, but not a big winner elsewhere, yet",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/30/chatgpt-images-2-0-is-a-hit-in-india-but-not-a-big-winner-elsewhere-yet/",
  },
  {
    date: "2026-04-30",
    headline: "Sources: Anthropic potential $900B+ valuation round could happen within 2 weeks",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/30/anthropic-potential-900b-valuation-round-could-happen-within-two-weeks/",
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
