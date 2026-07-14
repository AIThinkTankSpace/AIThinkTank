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
  {
    date: "2026-07-13",
    headline: "Apple’s failed self-driving car program left a legacy of powerful AI chips",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/964519/apple-silicon-self-driving-car-ai-m7-ultra",
  },
  {
    date: "2026-07-11",
    headline: "OpenAI bets on families as ChatGPT goes deeper into households",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/11/openai-bets-on-families-as-chatgpt-goes-deeper-into-households/",
  },
  {
    date: "2026-07-10",
    headline: "The Download: Claude&#8217;s inner workings and OpenAI&#8217;s &#8220;super app&#8221;",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/10/1140316/the-download-anthropic-claude-hidden-space-openai-super-app/",
  },
  {
    date: "2026-07-10",
    headline: "Meta turns off the Instagram feature that let users make AI deepfakes of public accounts",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/964416/meta-instagram-ai-muse-image-deepfakes",
  },
  {
    date: "2026-07-10",
    headline: "Apple sues OpenAI for allegedly stealing hardware secrets",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/964350/apple-openai-lawsuit-trade-secrets",
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
