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
  {
    date: "2026-03-27",
    headline: "OpenAI shuts down Sora while Meta gets shut out in court",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/openai-shuts-down-sora-while-meta-gets-shut-out-in-court/",
  },
  {
    date: "2026-03-27",
    headline: "David Sacks is done as AI czar &#8212; here&#8217;s what he&#8217;s doing instead",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/26/david-sacks-is-done-as-ai-czar-heres-what-hes-doing-instead/",
  },
  {
    date: "2026-03-27",
    headline: "The Download: the internet’s best weather app, and why people freeze their brains",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/03/27/1134755/the-download-best-weather-forecasting-app-why-people-freeze-brains/",
  },
  {
    date: "2026-03-27",
    headline: "Anthropic wins injunction against Trump administration over Defense Department saga",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/26/anthropic-wins-injunction-against-trump-administration-over-defense-department-saga/",
  },
  {
    date: "2026-03-26",
    headline: "You can now transfer your chats and personal information from other chatbots directly into Gemini",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/26/you-can-now-transfer-your-chats-and-personal-information-from-other-chatbots-directly-into-gemini/",
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
