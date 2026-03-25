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
    date: "2026-03-25",
    headline: "With $3.5B in fresh capital, Kleiner Perkins is going all in on AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/with-3-5b-in-fresh-capital-kleiner-perkins-is-going-all-in-on-ai/",
  },
  {
    date: "2026-03-24",
    headline: "OpenAI’s Sora was the creepiest app on your phone &#8212; now it&#8217;s shutting down",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/openais-sora-was-the-creepiest-app-on-your-phone-now-its-shutting-down/",
  },
  {
    date: "2026-03-24",
    headline: "Anthropic hands Claude Code more control, but keeps it on a leash",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/anthropic-hands-claude-code-more-control-but-keeps-it-on-a-leash/",
  },
  {
    date: "2026-03-24",
    headline: "Spotify tests new tool to stop AI slop from being attributed to real artists",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/spotify-tests-new-tool-to-stop-ai-slop-from-being-attributed-to-real-artists/",
  },
  {
    date: "2026-03-24",
    headline: "Databricks bought two startups to underpin its new AI security product",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/24/databricks-buys-two-startups-lakewatch-antimatter-siftd-ai-security/",
  },
  {
    date: "2026-03-25",
    headline: "US passes AI Accountability Act — companies must publish bias audits for AI in hiring and lending",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.insightfulpost.com/what-is-artificial-intelligence-news-2026/",
  },
  {
    date: "2026-03-25",
    headline: "OpenAI unveils GPT-5.4 with 1M token context — scores above human baseline on autonomous tasks",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.crescendo.ai/news/latest-ai-news-and-updates",
  },
  {
    date: "2026-03-25",
    headline: "National AI Training Academy launches — aims to train 400,000 teachers on AI in the classroom",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.aiforeducation.io/blog/ai-education-weekly-update-mar162026",
  },
  {
    date: "2026-03-24",
    headline: "Stanford review of 800+ AI-in-education studies finds only 20 are high-quality — more research needed",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://fordhaminstitute.org/national/commentary/some-predictions-about-ai-education-2026",
  },
  {
    date: "2026-03-24",
    headline: "IBM completes acquisition of Confluent — real-time data becomes the engine of enterprise AI",
    audiences: ["ai-for-corporates"],
    link: "https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents",
  },
  {
    date: "2026-03-22",
    headline: "Snowflake research: 77% of orgs report AI-driven job creation outpaces job losses",
    audiences: ["ai-for-corporates"],
    link: "https://www.snowflake.com/en/news/press-releases/snowflake-research-reveals-ai-driven-job-creation-outpaces-job-loss-with-77-percent-reporting-workforce-gains/",
  },
  {
    date: "2026-03-20",
    headline: "Common Sense Media: 52% of parents say AI in schoolwork is unethical — 52% of teens call it innovative",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.marketingprofs.com/opinions/2026/54448/ai-update-march-20-2026-ai-news-and-views-from-the-past-week",
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
