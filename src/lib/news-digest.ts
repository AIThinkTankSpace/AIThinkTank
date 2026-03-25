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
  {
    date: "2026-03-18",
    headline: "Snowflake launches Project SnowWork — autonomous AI platform for business users",
    audiences: ["ai-for-corporates"],
    link: "https://www.snowflake.com/en/news/press-releases/snowflake-launches-project-snowwork-bringing-outcome-driven-ai-to-every-business-user/",
  },
  {
    date: "2026-03-16",
    headline: "NVIDIA GTC 2026 — Jensen Huang envisions 100 AI agents per employee by 2036",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://nvidianews.nvidia.com/news/ai-agents",
  },
  {
    date: "2026-03-16",
    headline: "US Senate introduces NSF AI Education Act — creating AI Centers of Excellence at colleges",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.commerce.senate.gov/2026/3/cantwell-moran-introduce-bill-to-boost-ai-education",
  },
  {
    date: "2026-03-15",
    headline: "Apple reimagines Siri with Google Gemini AI — context-aware assistant coming in iOS 26.4",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techstartups.com/2026/03/24/top-tech-news-today-march-24-2026/",
  },
  {
    date: "2026-03-14",
    headline: "India to launch AI & Computational Thinking curriculum from Class 3 onwards in 2026-27",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2184211",
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
