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
  {
    date: "2026-03-26",
    headline: "Wikipedia cracks down on the use of AI in article writing",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/26/wikipedia-cracks-down-on-the-use-of-ai-in-article-writing/",
  },
  {
    date: "2026-03-26",
    headline: "OpenAI abandons yet another side quest: ChatGPT&#8217;s erotic mode",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/26/openai-abandons-yet-another-side-quest-chatgpts-erotic-mode/",
  },
  {
    date: "2026-03-26",
    headline: "ByteDance&#8217;s new AI video generation model, Dreamina Seedance 2.0, comes to CapCut",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/26/bytedances-new-ai-video-generation-model-dreamina-seedance-2-0-comes-to-capcut/",
  },
  {
    date: "2026-03-26",
    headline: "Mercor competitor Deccan AI raises $25M, sources experts from India",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/25/deccan-ai-raises-25m-as-ai-training-push-relies-on-india-based-workforce/",
  },
  {
    date: "2026-03-25",
    headline: "The AI skills gap is here, says AI company, and power users are pulling ahead",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/25/the-ai-skills-gap-is-here-says-ai-company-and-power-users-are-pulling-ahead/",
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
