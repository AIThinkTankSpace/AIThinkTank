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
    date: "2026-08-22",
    headline: "Harvard’s $699 startup bootcamp offers AI avatars of its instructors",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/22/harvards-699-startup-bootcamp-offers-ai-avatars-of-its-instructors/",
  },
  {
    date: "2026-08-22",
    headline: "Inherent, founded by DeepMind alumni, says its AI &#8216;teammate&#8217; just outperformed…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/22/inherent-founded-by-deepmind-alumni-says-its-ai-teammate-just-outperformed-anthropic-and-openai-at-replicating-research/",
  },
  {
    date: "2026-08-22",
    headline: "OpenAI says California should strengthen its AI safety bill",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/22/openai-says-california-should-strengthen-its-ai-safety-bill/",
  },
  {
    date: "2026-08-22",
    headline: "Frontier AI labs still won&#8217;t say how they&#8217;d contain a rogue model",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/22/frontier-ai-labs-still-wont-say-how-theyd-contain-a-rogue-model/",
  },
  {
    date: "2026-08-21",
    headline: "When AI designs a drug, who gets the credit?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/21/1142627/when-ai-designs-a-drug-who-gets-the-credit/",
  },
  {
    date: "2026-08-21",
    headline: "Anthropic’s Opus 4.6 is a smut-machine",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/21/anthropics-opus-4-6-is-a-smut-machine/",
  },
  {
    date: "2026-08-21",
    headline: "Nvidia partners with data center developer Cloverleaf",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/21/nvidia-partners-with-data-center-developer-cloverleaf/",
  },
  {
    date: "2026-08-21",
    headline: "Nvidia just showed that the harness, not the AI model, is now the real hero",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/",
  },
  {
    date: "2026-08-21",
    headline: "Starcloud raises $250 million for orbital data centers as launch options dry up",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/21/starcloud-raises-200-million-for-orbital-data-centers-as-launch-options-dry-up/",
  },
  {
    date: "2026-08-21",
    headline: "The Download: threats from space mirrors and credit for AI drugs",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/21/1142762/the-download-space-mirrors-threats-ai-designed-drugs-credit/",
  },
  {
    date: "2026-08-21",
    headline: "AI data startup Micro1 reaches $500M gross run rate amid AI training boom",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/20/ai-data-startup-micro1-reaches-500m-gross-run-rate-amid-ai-training-boom/",
  },
  {
    date: "2026-08-20",
    headline: "OpenAI is gaining on Anthropic with business users, new data indicates",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/20/openai-is-gaining-on-anthropic-with-business-users-new-data-indicates/",
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
