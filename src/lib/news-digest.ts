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
    date: "2026-11-08",
    headline: "Nvidia will investigate CEO Jensen Huang’s relationship with possible Chinese spy",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/08/nvidia-says-its-investigating-ceo-jensen-huangs-relationship-with-possible-chinese-spy/",
  },
  {
    date: "2026-11-09",
    headline: "The Download: empty AI climate claims, and an Nvidia investigation",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/09/1148176/the-download-empty-ai-climate-claims-and-an-nvidia-investigation/",
  },
  {
    date: "2026-11-09",
    headline: "Innovating with AI in the special chemicals industry",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/09/1147654/innovating-with-ai-in-the-special-chemicals-industry/",
  },
  {
    date: "2026-11-09",
    headline: "The climate case for AI has not been made",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/09/1148166/the-climate-case-for-ai-has-not-been-made/",
  },
  {
    date: "2026-11-08",
    headline: "Here’s the full text of Jensen Huang’s memo to Nvidia",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/1029595/full-text-jensen-huang-affair-memo-nvidia",
  },
  {
    date: "2026-11-07",
    headline: "Megaspeed exec was recruited to spy on Nvidia CEO, according to US intelligence memo",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/07/chinese-exec-was-recruited-to-spy-on-nvidia-ceo-according-to-us-intelligence-memo/",
  },
  {
    date: "2026-11-06",
    headline: "The Download: a humanoid cleans house and Samsung builds for the AI boom",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/06/1148154/the-download-humanoid-robot-cleaner-samsung-ai-chip-boom/",
  },
  {
    date: "2026-11-06",
    headline: "I watched a humanoid robot clean my apartment. It felt like a taste of the future.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/06/1148090/i-watched-a-humanoid-robot-clean-my-apartment-it-felt-like-a-taste-of-the-future/",
  },
  {
    date: "2026-11-06",
    headline: "Chainalysis says hackers stole credentials and tokens for all of its customers",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://arstechnica.com/security/2026/11/chainalysis-says-hackers-stole-credentials-and-tokens-for-all-of-its-customers/",
  },
  {
    date: "2026-11-07",
    headline: "NYT Cooking’s AI assistant saved my weeknight chicken, but almost ruined my cake",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/1029489/nyt-cooking-ai-assistant-review",
  },
  {
    date: "2026-11-06",
    headline: "OpenAI reportedly raises an additional $11 billion at a $1.25 trillion valuation",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/06/openai-reportedly-raises-an-additional-11-billion-at-a-1-25-trillion-valuation/",
  },
  {
    date: "2026-11-06",
    headline: "Hundreds of Artex AI hacking tools found publicly exposed to the web",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/06/hundreds-of-artex-ai-hacking-tools-found-publicly-exposed-to-the-web/",
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
