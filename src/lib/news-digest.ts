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
    date: "2026-09-01",
    headline: "Apple shares &#8216;shocking evidence&#8217; against former employee accused of stealing company…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/31/apple-shares-shocking-evidence-against-former-employee-accused-of-stealing-company-data-for-openai/",
  },
  {
    date: "2026-08-31",
    headline: "The Pentagon now has its own version of ChatGPT and Grok",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/31/the-pentagon-now-has-its-own-version-of-chatgpt-and-grok/",
  },
  {
    date: "2026-08-31",
    headline: "Instagram puts new limits on undisclosed AI profiles",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/31/instagram-puts-new-limits-on-undisclosed-ai-profiles/",
  },
  {
    date: "2026-08-31",
    headline: "Harvard Law dropout raises $6M for Blue Voice to build a &#8216;Harvey for police officers&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/31/harvard-law-dropout-raises-6m-for-blue-voice-to-build-a-harvey-for-police-officers/",
  },
  {
    date: "2026-08-31",
    headline: "Clipto uses AI to search terabytes of video and is now valued at $250M",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/31/three-year-old-ai-media-search-startup-clipto-hits-a-250m-valuation/",
  },
  {
    date: "2026-08-31",
    headline: "The U.S. is building barriers around drones and robots, but China has scale to get around them",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/30/the-u-s-is-building-barriers-around-drones-and-robots-china-still-has-scale/",
  },
  {
    date: "2026-08-30",
    headline: "Caterpillar is bringing to AI deployment what it learned from automating mining",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/30/caterpillar-is-bringing-to-ai-deployment-what-it-learned-from-automating-mining/",
  },
  {
    date: "2026-08-30",
    headline: "Inside Meta’s push to put robots to work in data centers",
    audiences: ["ai-for-corporates"],
    link: "https://arstechnica.com/ai/2026/08/inside-metas-push-to-put-robots-to-work-in-data-centers/",
  },
  {
    date: "2026-08-29",
    headline: "Sony Music, Warner sue Anthropic, alleging a &#8220;brazen campaign&#8221; of intellectual…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/29/sony-music-warner-sue-anthropic-alleging-a-brazen-campaign-of-intellectual-property-theft/",
  },
  {
    date: "2026-08-29",
    headline: "Nvidia’s AI advantage is moving beyond the GPU",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/29/nvidias-ai-advantage-is-moving-beyond-the-gpu/",
  },
  {
    date: "2026-08-29",
    headline: "Sony Music and Warner Chappell are suing Anthropic",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/986438/sony-music-warner-chappell-anthropic-lawsuit-copyright",
  },
  {
    date: "2026-08-28",
    headline: "Musicians-turned-detectives are hunting for AI grifters",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/entertainment/985866/h4rris-nihil-young-edm-suno-ai",
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
