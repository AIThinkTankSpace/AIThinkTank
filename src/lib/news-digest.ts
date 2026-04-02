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
    headline: "Anthropic took down thousands of GitHub repos trying to yank its leaked source code — a move the…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/01/anthropic-took-down-thousands-of-github-repos-trying-to-yank-its-leaked-source-code-a-move-the-company-says-was-an-accident/",
  },
  {
    date: "2026-04-01",
    headline: "Cognichip wants AI to design the chips that power AI, and just raised $60M to try",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/01/cognichip-wants-ai-to-design-the-chips-that-power-ai-and-just-raised-60m-to-try/",
  },
  {
    date: "2026-04-01",
    headline: "The Download: gig workers training humanoids, and better AI benchmarks",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/01/1134993/the-download-gig-workers-training-humanoids-better-ai-benchmarks/",
  },
  {
    date: "2026-04-01",
    headline: "The gig workers who are training humanoid robots at home",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/01/1134863/humanoid-data-training-gig-economy-2026-breakthrough-technology/",
  },
  {
    date: "2026-03-31",
    headline: "Shifting to AI model customization is an architectural imperative",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/03/31/1134762/shifting-to-ai-model-customization-is-an-architectural-imperative/",
  },
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
