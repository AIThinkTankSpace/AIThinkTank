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
    date: "2026-03-30",
    headline: "Why OpenAI really shut down Sora",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/",
  },
  {
    date: "2026-03-29",
    headline: "Sora’s shutdown could be a reality check moment for AI video",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/29/soras-shutdown-could-be-a-reality-check-moment-for-ai-video/",
  },
  {
    date: "2026-03-30",
    headline: "Inside the stealthy startup that pitched brainless human clones",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/03/30/1134780/r3-bio-brainless-human-clones-full-body-replacement-john-schloendorn-aging-longevity/",
  },
  {
    date: "2026-03-30",
    headline: "All the latest in AI &#8216;music&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/903196/ai-music-suno-udio-art-lawsuit",
  },
  {
    date: "2026-03-30",
    headline: "Bluesky’s new app is an AI for customizing your feed",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/903190/bluesky-attie-ai-custom-feeds",
  },
  {
    date: "2026-03-28",
    headline: "Bluesky leans into AI with Attie, an app for building custom feeds",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/28/bluesky-leans-into-ai-with-attie-an-app-for-building-custom-feeds/",
  },
  {
    date: "2026-03-28",
    headline: "Stanford study outlines dangers of asking AI chatbots for personal advice",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/03/28/stanford-study-outlines-dangers-of-asking-ai-chatbots-for-personal-advice/",
  },
  {
    date: "2026-03-28",
    headline: "Elon Musk’s last co-founder reportedly leaves xAI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/28/elon-musks-last-co-founder-reportedly-leaves-xai/",
  },
  {
    date: "2026-03-28",
    headline: "Anthropic&#8217;s Claude popularity with paying consumers is skyrocketing",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/28/anthropics-claude-popularity-with-paying-consumers-is-skyrocketing/",
  },
  {
    date: "2026-03-27",
    headline: "Here&#8217;s why some people choose cryonics to store their bodies and brains after death",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/03/27/1134705/cryonics-store-bodies-brains-after-death/",
  },
  {
    date: "2026-03-27",
    headline: "Why SoftBank’s new $40B loan points to a 2026 OpenAI IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/27/why-softbanks-new-40b-loan-points-to-a-2026-openai-ipo/",
  },
  {
    date: "2026-03-27",
    headline: "VCs are betting billions on AI&#8217;s next wave, so why is OpenAI killing Sora?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/vcs-are-betting-billions-on-ais-next-wave-so-why-is-openai-killing-sora/",
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
