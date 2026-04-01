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
    date: "2026-04-01",
    headline: "Mercor says it was hit by cyberattack tied to compromise of open-source LiteLLM project",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/31/mercor-says-it-was-hit-by-cyberattack-tied-to-compromise-of-open-source-litellm-project/",
  },
  {
    date: "2026-03-31",
    headline: "Anthropic is having a month",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/31/anthropic-is-having-a-month/",
  },
  {
    date: "2026-03-31",
    headline: "Salesforce announces an AI-heavy makeover for Slack, with 30 new features",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/31/salesforce-announces-an-ai-heavy-makeover-for-slack-with-30-new-features/",
  },
  {
    date: "2026-03-31",
    headline: "OpenAI, not yet public, raises $3B from retail investors in monster $122B fund raise",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/31/openai-not-yet-public-raises-3b-from-retail-investors-in-monster-122b-fund-raise/",
  },
  {
    date: "2026-03-31",
    headline: "Yupp shuts down after raising $33M from a16z crypto&#8217;s Chris Dixon",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/31/yupp-ai-shuts-down-33m-a16z-crypto-chris-dixon/",
  },
  {
    date: "2026-03-30",
    headline: "15% of Americans say they&#8217;d be willing to work for an AI boss, according to new poll",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/ai-work-boss-supervisor-us-quinnipiac-poll/",
  },
  {
    date: "2026-03-30",
    headline: "Popular AI gateway startup LiteLLM ditches controversial startup Delve",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/popular-ai-gateway-startup-litellm-ditches-controversial-startup-delve/",
  },
  {
    date: "2026-03-30",
    headline: "As more Americans adopt AI tools, fewer say they can trust the results",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/ai-trust-adoption-poll-more-americans-adopt-tools-fewer-say-they-can-trust-the-results/",
  },
  {
    date: "2026-03-30",
    headline: "Mantis Biotech is making &#8216;digital twins&#8217; of humans to help solve medicine&#8217;s…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/mantis-biotech-is-making-digital-twins-of-humans-to-help-solve-medicines-data-availability-problem/",
  },
  {
    date: "2026-03-30",
    headline: "ScaleOps raises $130M to improve computing efficiency amid AI demand",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/scaleops-130m-series-c-kubernetes-efficiency-ai-demand-funding/",
  },
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
