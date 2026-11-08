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
  {
    date: "2026-11-06",
    headline: "How a Blue Wave midterm might reshape the AI industry",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/podcast/how-a-blue-wave-midterm-might-reshape-the-ai-industry/",
  },
  {
    date: "2026-11-06",
    headline: "After the midterms, is the AI industry in for a rough two years?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/video/after-the-midterms-is-the-ai-industry-in-for-a-rough-two-years/",
  },
  {
    date: "2026-11-06",
    headline: "Ramp data shows AI spending stalling just as Anthropic nears its IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/",
  },
  {
    date: "2026-11-06",
    headline: "Underdog shows off a 32MB speech model in new demo",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/",
  },
  {
    date: "2026-11-06",
    headline: "Physicl raises $10M to make the digital world real enough for robots",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/06/physicl-raises-10m-to-make-the-digital-world-real-enough-for-robots/",
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
