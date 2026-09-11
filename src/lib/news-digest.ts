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
    date: "2026-09-10",
    headline: "Jensen Huang explains why Nvidia will grow an astounding 70% next year",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/10/jensen-huang-explains-why-nvidia-will-grow-an-astounding-70-next-year/",
  },
  {
    date: "2026-09-10",
    headline: "OpenAI puts Pro subscriptions on hold due to Astra demand",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/10/openai-puts-pro-subscriptions-on-hold-due-to-astra-demand/",
  },
  {
    date: "2026-09-10",
    headline: "Anthropic details distillation campaigns from Alibaba, Moonshot AI, and DeepSeek",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/10/anthropic-details-distillation-campaigns-from-alibaba-moonshot-ai-and-deepseek/",
  },
  {
    date: "2026-09-10",
    headline: "Meta&#8217;s AI agent Muse is now the No. 2 app in the US",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/10/metas-ai-agent-muse-is-now-the-no-2-app-in-the-us/",
  },
  {
    date: "2026-09-10",
    headline: "Anthropic reveals rogue AI agents hate CAPTCHAs, just like you",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/10/anthropic-reveals-rogue-ai-agents-hate-captchas-just-like-you/",
  },
  {
    date: "2026-09-10",
    headline: "AI research startup Listen Labs scrubbed a $1.5B funding round for Salesforce talks",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/09/ai-research-startup-listen-labs-scrubbed-a-1-5b-funding-round-for-salesforce-talks/",
  },
  {
    date: "2026-09-09",
    headline: "OpenAI adds a prominent AI doomer to its board of directors",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/09/openai-adds-a-prominent-ai-doomer-to-its-board-of-directors/",
  },
  {
    date: "2026-09-09",
    headline: "Apple Watch&#8217;s new AI features are normalizing the idea that technology is always listening",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/09/apple-watchs-new-ai-features-are-normalizing-the-idea-that-technology-is-always-listening/",
  },
  {
    date: "2026-09-09",
    headline: "The hinge for Apple&#8217;s new foldable phone was built with AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/09/the-hinge-for-apples-new-foldable-phone-was-built-with-ai/",
  },
  {
    date: "2026-09-09",
    headline: "Apple has a new way to prove your iPhone photos aren’t AI slop",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/09/apple-has-a-new-way-prove-your-iphone-photos-arent-ai-slop/",
  },
  {
    date: "2026-09-08",
    headline: "Hackers are stealing Claude tokens from subscribers",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/08/hackers-are-stealing-claude-tokens-from-subscribers/",
  },
  {
    date: "2026-09-08",
    headline: "Cognition hits $48B valuation, signaling investors believe AI coding is far from a…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/08/cognition-hits-48b-valuation-signaling-investors-believe-ai-coding-is-far-from-a-winner-take-all-market/",
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
