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
    date: "2026-07-15",
    headline: "OpenAI researcher Miles Wang in talks to launch AI drug discovery startup valued at $2B",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/14/openai-researcher-miles-wang-in-talks-to-launch-ai-drug-discovery-startup-valued-at-2b/",
  },
  {
    date: "2026-07-14",
    headline: "Lorde says AI glasses are &#8216;not sexy&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/14/lorde-says-ai-glasses-are-not-sexy/",
  },
  {
    date: "2026-07-14",
    headline: "OpenAI&#8217;s first hardware device is reportedly a screenless speaker that can move",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/14/openais-first-hardware-device-is-reportedly-a-screenless-speaker-that-can-move/",
  },
  {
    date: "2026-07-14",
    headline: "OpenAI pushes back on Apple trade secret lawsuit",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/14/openai-pushes-back-on-apple-trade-secret-lawsuit/",
  },
  {
    date: "2026-07-14",
    headline: "OpenAI&#8217;s new flagship model deletes files on its own, people keep warning",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/14/openais-new-flagship-model-deletes-files-on-its-own-people-keep-warning/",
  },
  {
    date: "2026-07-14",
    headline: "Already rich, already successful, why the last wave of tech winners is grinding again",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/13/already-rich-already-successful-why-the-last-wave-of-tech-winners-is-grinding-again/",
  },
  {
    date: "2026-07-14",
    headline: "Uber&#8217;s product chief on hotels, robotaxis, and why the company doesn&#8217;t want to be…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/13/ubers-product-chief-on-hotels-robotaxis-and-why-the-company-doesnt-want-to-be-everything-for-everyone/",
  },
  {
    date: "2026-07-14",
    headline: "Video-generation startup PixVerse raises $439M, valuation soars past $2B",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/13/video-generation-startup-pixverse-raises-439m-valuation-soars-past-2b/",
  },
  {
    date: "2026-07-13",
    headline: "Satya Nadella has issued a shocking warning to companies using AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/13/satya-nadella-has-issued-a-shocking-warning-to-companies-using-ai/",
  },
  {
    date: "2026-07-13",
    headline: "The wildest allegations in Apple’s trade secrets lawsuit against OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/13/the-wildest-allegations-in-apples-trade-secrets-lawsuit-against-openai/",
  },
  {
    date: "2026-07-13",
    headline: "Waze is getting a bunch of new AI-powered features",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/transportation/964132/waze-gemini-ai-voice-commands-less-chatty",
  },
  {
    date: "2026-07-13",
    headline: "Lorde says Ray-Ban Meta AI glasses are ‘not sexy’",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/964539/lorde-says-ray-ban-meta-ai-glasses-are-not-sexy",
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
