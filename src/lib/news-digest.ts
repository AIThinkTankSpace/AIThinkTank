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
    date: "2026-07-08",
    headline: "Hot French startup ZML releases free product to speed inference across lots of AI chips",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/hot-french-startup-zml-releases-free-product-to-speed-inference-across-lots-of-ai-chips/",
  },
  {
    date: "2026-07-08",
    headline: "AI chip maker SambaNova raises $1B at $11B valuation, 5 months after last mega round",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/sambanova-draws-1b-at-11b-valuation-in-series-f-first-close/",
  },
  {
    date: "2026-07-07",
    headline: "Meta just launched a new AI generator, Muse Image, and users are already pushing back over use…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/07/meta-rolls-out-muse-a-new-ai-image-generator/",
  },
  {
    date: "2026-07-07",
    headline: "Why the rise of open source AI isn&#8217;t hurting Anthropic &#8230; yet",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/07/why-the-rise-of-open-source-ai-isnt-hurting-anthropic-yet/",
  },
  {
    date: "2026-07-07",
    headline: "Microsoft joins AI cost-cutting trend by relying more on its own models",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/07/microsoft-joins-ai-cost-cutting-trend-by-relying-more-on-its-own-models/",
  },
  {
    date: "2026-07-07",
    headline: "The first American autonomous ground vehicles are fighting in Ukraine",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/07/the-first-american-autonomous-ground-vehicles-are-fighting-in-ukraine/",
  },
  {
    date: "2026-07-06",
    headline: "The &#8216;first&#8217; AI-run ransomware attack still needed a human",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human/",
  },
  {
    date: "2026-07-06",
    headline: "US investors will soon get access to SK Hynix, another memory maker riding the AI boom",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/06/us-investors-will-soon-get-access-to-sk-hynix-another-memory-maker-riding-the-ai-boom/",
  },
  {
    date: "2026-07-06",
    headline: "Vercel CEO Guillermo Rauch on the fight to split off models from agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/06/vercel-ceo-guillermo-rauch-on-the-fight-to-split-off-models-from-agents/",
  },
  {
    date: "2026-07-06",
    headline: "Every major tech layoff in 2026 that has name-checked AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/06/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai/",
  },
  {
    date: "2026-07-06",
    headline: "Some of the nation’s rich are letting AI teach their kids",
    audiences: ["ai-for-kids"],
    link: "https://www.theverge.com/ai-artificial-intelligence/961505/wealthy-ai-schools-alpha-forge-prep",
  },
  {
    date: "2026-07-06",
    headline: "Infuriating Google commercial imagines the founding fathers embracing AI",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/961468/google-ai-commercial-founding-fathers-declaration-of-independence",
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
