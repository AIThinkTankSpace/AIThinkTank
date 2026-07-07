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
  {
    date: "2026-07-04",
    headline: "New Google commercial imagines a Declaration of Independence written with help from AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/04/new-google-commercial-imagines-a-declaration-of-independence-written-with-help-from-ai/",
  },
  {
    date: "2026-07-04",
    headline: "Midjourney wants Hollywood studios to reveal the details of their AI usage",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/04/midjourney-wants-hollywood-studios-to-reveal-the-details-of-their-ai-usage/",
  },
  {
    date: "2026-07-04",
    headline: "Alibaba reportedly bans employees from using Claude Code",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/",
  },
  {
    date: "2026-07-04",
    headline: "What is Mistral AI? Everything to know about the OpenAI competitor",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/04/what-is-mistral-ai-everything-to-know-about-the-openai-competitor/",
  },
  {
    date: "2026-07-03",
    headline: "The fanfiction community is at war with AI — and itself",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/960854/ai-fanfiction-ao3-claude-detector",
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
