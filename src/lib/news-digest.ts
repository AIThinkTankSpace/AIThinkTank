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
    date: "2026-10-17",
    headline: "Meta removes language that raised scraping and AI training concerns",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/",
  },
  {
    date: "2026-10-17",
    headline: "Anthropic says its workforce has become less junior and is spending more time in meetings",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/17/anthropic-says-its-workforce-has-become-less-junior-and-is-spending-more-time-in-meetings/",
  },
  {
    date: "2026-10-17",
    headline: "Replit makes OpenAI its default over Anthropic, CEO says",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/",
  },
  {
    date: "2026-10-16",
    headline: "Roundtables: A Conversation With the Creator of AI-Designed Viruses",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/16/1146224/roundtables-a-conversation-with-the-creator-of-ai-designed-viruses/",
  },
  {
    date: "2026-10-16",
    headline: "The Download: failed social media bans, and extending pets&#8217; lives",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/16/1146864/the-download-failed-social-media-bans-and-extending-pets-lives/",
  },
  {
    date: "2026-10-16",
    headline: "Replit is no longer working with Anthropic, CEO says",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/16/replit-is-no-longer-working-with-anthropic-ceo-says/",
  },
  {
    date: "2026-10-16",
    headline: "India becomes the latest country to report rogue AI agent activity",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/",
  },
  {
    date: "2026-10-16",
    headline: "An Nvidia insider-turned-VC on why robotics hasn’t hit its ChatGPT moment, yet",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/a-nvidia-insider-turned-vc-on-why-robotics-hasnt-hit-its-chatgpt-moment-yet/",
  },
  {
    date: "2026-10-16",
    headline: "Physical AI is more than robots, says the Nvidia veteran now investing in it",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/physical-ai-is-more-than-robots-says-the-nvidia-veteran-now-investing-in-it/",
  },
  {
    date: "2026-10-16",
    headline: "Elorian’s first AI model wants to reason with images, not just about them",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/16/elorians-first-ai-model-wants-to-reason-with-images-not-just-about-them/",
  },
  {
    date: "2026-10-15",
    headline: "When it came to Cal AI&#8217;s viral success, a small army of influencers paid off",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/15/when-it-came-to-cal-ais-viral-success-a-small-army-of-influencers-paid-off/",
  },
  {
    date: "2026-10-15",
    headline: "Meta launches an open-weight AI model that runs on Macs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/",
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
