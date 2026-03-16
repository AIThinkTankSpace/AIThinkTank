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
    date: "2026-03-16",
    headline: "NVIDIA GTC 2026 kicks off today — Jensen Huang keynote covers the full AI stack",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://blogs.nvidia.com/blog/gtc-2026-news/",
  },
  {
    date: "2026-03-16",
    headline: "US Senate introduces NSF AI Education Act — creating AI Centers of Excellence at colleges",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.commerce.senate.gov/2026/3/cantwell-moran-introduce-bill-to-boost-ai-education",
  },
  {
    date: "2026-03-16",
    headline: "NVIDIA report: 86% of companies increasing AI budgets in 2026",
    audiences: ["ai-for-corporates"],
    link: "https://blogs.nvidia.com/blog/state-of-ai-report-2026/",
  },
  {
    date: "2026-03-16",
    headline: "NPR: 85% of college students now using AI for coursework — brainstorming, outlining, studying",
    audiences: ["ai-for-teens"],
    link: "https://www.npr.org/2026/03/03/nx-s1-5716176/ai-college-students-professors",
  },
  {
    date: "2026-03-15",
    headline: "Microsoft announces Copilot Wave 3 — agentic AI features for Word, Excel & PowerPoint",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.neowin.net/news/microsoft-365-copilot-wave-3-announced-new-agentic-features-for-word-excel-and-outlook/",
  },
  {
    date: "2026-03-14",
    headline: "India to launch AI & Computational Thinking curriculum from Class 3 onwards in 2026-27",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2184211",
  },
  {
    date: "2026-03-13",
    headline: "OECD report: GenAI can support learning when guided, but risks no real gains without it",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html",
  },
  {
    date: "2026-03-12",
    headline: "Agentic AI market booming — projected to grow from $9B to $139B by 2034",
    audiences: ["ai-for-corporates"],
    link: "https://bostoninstituteofanalytics.org/blog/agentic-ai-news-roundup-7-13-march-2026-market-growth-enterprise-adoption-new-ai-agents/",
  },
  {
    date: "2026-03-11",
    headline: "Anthropic expands Claude for Education — Teach For All partnership reaches 100K+ teachers",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.anthropic.com/news/advancing-claude-for-education",
  },
  {
    date: "2026-03-10",
    headline: "ChatGPT now has 900 million weekly active users — over 10% of the global population",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.a16z.news/p/top-100-gen-ai-consumer-apps-march",
  },
  {
    date: "2026-03-09",
    headline: "Google launches unified enterprise AI platform at $30/month to rival Microsoft and Amazon",
    audiences: ["ai-for-corporates"],
    link: "https://www.therundown.ai/p/googles-new-enterprise-ai-play",
  },
  {
    date: "2026-03-08",
    headline: "MIT RAISE Playground lets kids build AI games using Scratch — free and hands-on",
    audiences: ["ai-for-kids"],
    link: "https://playground.raise.mit.edu/",
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
