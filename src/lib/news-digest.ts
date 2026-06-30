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
    date: "2026-06-30",
    headline: "Crypto exchange OKX wants AI agents to hire and pay each other",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/30/crypto-exchange-okx-wants-ai-agents-to-hire-and-pay-each-other/",
  },
  {
    date: "2026-06-30",
    headline: "The AI jobs debate just got messier",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/29/the-ai-jobs-debate-just-got-messier/",
  },
  {
    date: "2026-06-30",
    headline: "Vibe coding platform Base44 launches own model as AI startups seek defensibility",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/29/vibe-coding-platform-base44-launches-own-model-as-ai-startups-seek-defensibility/",
  },
  {
    date: "2026-06-29",
    headline: "Gemini&#8217;s personalized AI image generation is now free for US users",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/29/geminis-personalized-ai-image-generation-is-now-free-for-u-s-users/",
  },
  {
    date: "2026-06-29",
    headline: "Anthropic and Gov. Newsom forge deal allowing California government to use Claude at half price",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price/",
  },
  {
    date: "2026-06-28",
    headline: "Ford rehires ‘gray beard’ engineers after AI falls short",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/28/ford-rehires-gray-beard-engineers-after-ai-falls-short/",
  },
  {
    date: "2026-06-28",
    headline: "Why Wall Street thinks US memory maker Micron is the next Nvidia",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/28/why-wall-street-thinks-us-memory-maker-micron-is-the-next-nvidia/",
  },
  {
    date: "2026-06-28",
    headline: "China’s Z.ai claims it can match Mythos on cybersecurity",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/958804/chinas-z-ai-glm-52-mythos-cybersecurity",
  },
  {
    date: "2026-06-28",
    headline: "Suno launches Spark incubator program to feed independent artists to its AI machine",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/958801/suno-launches-spark-incubator-program-to-feed-independent-artists-to-its-ai-machine",
  },
  {
    date: "2026-06-28",
    headline: "Prosecutors used ChatGPT logs as evidence in the Palisades fire trial",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/958751/prosecutors-chatgpt-palisades-wildfire-arson-mistrial",
  },
  {
    date: "2026-06-27",
    headline: "Apple Vision Pro exec is reportedly leaving for OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/27/apple-vision-pro-exec-is-reportedly-leaving-for-openai/",
  },
  {
    date: "2026-06-27",
    headline: "The fittest founder in the room got cancer. Here&#8217;s how he used AI to fight back.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/27/the-fittest-founder-in-the-room-got-cancer-heres-how-he-used-ai-to-fight-back/",
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
