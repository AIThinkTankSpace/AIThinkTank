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
    date: "2026-05-10",
    headline: "Voice AI in India is hard. Wispr Flow is betting on it anyway.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/09/voice-ai-in-india-is-hard-wispr-flow-is-betting-on-it-anyway/",
  },
  {
    date: "2026-05-09",
    headline: "So you&#8217;ve heard these AI terms and nodded along; let&#8217;s fix that",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/09/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/",
  },
  {
    date: "2026-05-09",
    headline: "Nvidia has already committed $40B to equity AI deals this year",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/09/nvidia-has-already-committed-40b-to-equity-ai-deals-this-year/",
  },
  {
    date: "2026-05-08",
    headline: "All the latest updates on AI data centers",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/902546/data-centers-ai-energy-power-grids-controversy",
  },
  {
    date: "2026-05-08",
    headline: "PlayStation sees AI as a ‘powerful tool’ to help make games",
    audiences: ["ai-for-kids"],
    link: "https://www.theverge.com/games/926914/sony-playstation-ai-powerful-tool-games",
  },
  {
    date: "2026-05-08",
    headline: "Laid-off Oracle workers tried to negotiate better severance. Oracle said no.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/08/laid-off-oracle-workers-tried-to-negotiate-better-severance-oracle-said-no/",
  },
  {
    date: "2026-05-08",
    headline: "Cloudflare says AI made 1,100 jobs obsolete, even as revenue hit a record high",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/08/cloudflare-says-ai-made-1100-jobs-obsolete-even-as-revenue-hit-a-record-high/",
  },
  {
    date: "2026-05-08",
    headline: "The “people’s airline” and the enterprise AI gold rush",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/the-peoples-airline-and-the-enterprise-ai-gold-rush/",
  },
  {
    date: "2026-05-08",
    headline: "Musk v. Altman week 2: OpenAI fires back, and Shivon Zilis reveals that Musk tried to poach Sam…",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/08/1137008/musk-v-altman-week-2-openai-fires-back-and-shivon-zilis-reveals-that-musk-tried-to-poach-sam-altman/",
  },
  {
    date: "2026-05-08",
    headline: "The Download: AI malaise and babymaking tech",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/08/1136985/the-download-ai-malaise-babymaking-ivf-tech/",
  },
  {
    date: "2026-05-07",
    headline: "OpenAI launches new voice intelligence features in its API",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/07/openai-launches-new-voice-intelligence-features-in-its-api/",
  },
  {
    date: "2026-05-07",
    headline: "Voi founders&#8217; new AI startup Pit has become the latest rising star out of Stockholm",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/07/voi-founders-new-ai-startup-pit-has-become-the-latest-rising-star-out-of-stockholm/",
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
