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
    date: "2026-06-24",
    headline: "AI was supposed to kill engineering jobs, but new data suggests they&#8217;re the most resilient",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/24/ai-was-supposed-to-kill-engineering-jobs-but-new-data-suggests-theyre-the-most-resilient/",
  },
  {
    date: "2026-06-24",
    headline: "AI researchers continue to leave Google for its rivals",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/",
  },
  {
    date: "2026-06-24",
    headline: "Companies are scrambling to stop employees from maxing out AI budgets with small tasks",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/24/companies-are-scrambling-to-stop-employees-from-maxing-out-ai-budgets-with-small-tasks/",
  },
  {
    date: "2026-06-24",
    headline: "Facebook rolls out an AI companion app for creators",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/24/facebook-rolls-out-an-ai-companion-app-for-creators/",
  },
  {
    date: "2026-06-24",
    headline: "Agility Robotics plans to go public via SPAC in a $2.5B deal",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/24/agility-robotics-plans-to-go-public-via-spac-in-a-2-5b-deal/",
  },
  {
    date: "2026-06-23",
    headline: "India&#8217;s MoEngage bets that the future of marketing is millions of AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/23/indias-moengage-bets-marketings-future-on-millions-of-ai-agents/",
  },
  {
    date: "2026-06-23",
    headline: "Anthropic’s Claude Tag is learning your company, one Slack message at a time",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/",
  },
  {
    date: "2026-06-23",
    headline: "Fika Jobs raises $4M to build a video-first hiring platform where AI agents interview candidates",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/23/fika-jobs-raises-4m-to-build-a-video-first-hiring-platform-where-ai-agents-interview-candidates/",
  },
  {
    date: "2026-06-24",
    headline: "This flying solar-powered platform could deliver better internet from the air",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/24/1138771/solar-powered-platform-delivers-better-internet/",
  },
  {
    date: "2026-06-23",
    headline: "Ultrasound imaging turns a robot hand into a skillful mimic",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/23/1138279/ultrasound-imaging-turns-a-robot-hand-into-a-skillful-mimic/",
  },
  {
    date: "2026-06-23",
    headline: "The running list: major tech layoffs in 2026 where employers cited AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/22/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai/",
  },
  {
    date: "2026-06-23",
    headline: "OpenAI launches new initiative to help find and patch open source bugs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/",
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
