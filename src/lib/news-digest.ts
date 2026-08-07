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
    date: "2026-08-06",
    headline: "OpenAI&#8217;s new AI smart speaker will reportedly sell for between $300 and $400",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/06/openais-new-ai-smart-speaker-will-reportedly-sell-for-between-300-and-400/",
  },
  {
    date: "2026-08-06",
    headline: "ChatGPT brings unlimited text chats to free users",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/06/openai-brings-unlimited-chatgpt-text-chats-to-free-users/",
  },
  {
    date: "2026-08-06",
    headline: "Naïve raises $28.5M to automate the grunt work of setting up and running a company",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/06/naive-raises-28-5m-to-automate-the-grunt-work-of-setting-up-and-running-a-company/",
  },
  {
    date: "2026-08-06",
    headline: "Gen Z dating apps like Ditto ditch swiping in favor of AI matchmaking",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/06/gen-z-dating-apps-like-ditto-ditch-swiping-in-favor-of-ai-matchmaking/",
  },
  {
    date: "2026-08-06",
    headline: "OpenAI says Apple’s own security practices undermine its trade secrets case",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/06/openai-says-apples-own-security-practices-undermine-its-trade-secrets-case/",
  },
  {
    date: "2026-08-05",
    headline: "Meta launches Muse Code, an AI agent for large code bases",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/",
  },
  {
    date: "2026-08-05",
    headline: "Jeff Dean and other top AI researchers are leaving Google to launch their own startup",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/05/jeff-dean-and-other-top-ai-researchers-are-leaving-google-to-launch-their-own-startup/",
  },
  {
    date: "2026-08-05",
    headline: "Shopify says AI search is driving more traffic and sales, not replacing Google",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/05/shopify-says-ai-search-is-driving-more-traffic-and-sales-not-replacing-google/",
  },
  {
    date: "2026-08-05",
    headline: "TechCrunch Disrupt 2026’s Real World AI Stage features robots, automated factories, and extinct…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/05/techcrunch-disrupt-2026s-real-world-ai-stage-features-robots-automated-factories-and-extinct-animals/",
  },
  {
    date: "2026-08-05",
    headline: "Anthropic is hiring an AI chip design team",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/05/anthropic-is-hiring-an-ai-chip-design-team/",
  },
  {
    date: "2026-08-04",
    headline: "Open-weight AI models are catching up to the frontier. The safety gap remains.",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/04/open-weight-ai-models-are-catching-up-to-the-frontier-the-safety-gap-remains/",
  },
  {
    date: "2026-08-04",
    headline: "Anthropic signs $10B deal with AI cloud startup Volta",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/04/anthropic-signs-10-billion-deal-with-ai-cloud-startup-volta/",
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
