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
    date: "2026-08-07",
    headline: "OpenAI says it slowed Astra model development over security concerns",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/07/openai-says-it-slowed-astra-model-development-over-security-concerns/",
  },
  {
    date: "2026-08-07",
    headline: "After Rippling blew millions on AI in months, it built an employee ROI tool",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/07/after-rippling-blew-millions-on-ai-in-months-it-built-an-employee-roi-tool/",
  },
  {
    date: "2026-08-07",
    headline: "Cloudflare launches Kitesurf, a browser built for AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/07/cloudflare-launches-kitesurf-a-browser-built-for-ai-agents/",
  },
  {
    date: "2026-08-07",
    headline: "Airbnb says AI is helping it ship features faster as it tests a new search function",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/07/airbnb-says-ai-is-helping-it-ship-features-faster-as-it-tests-a-new-search-function/",
  },
  {
    date: "2026-08-07",
    headline: "The Download: a censorship conspiracy theory and the first virus created by AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/07/1141389/the-download-censorship-conspiracy-theory-first-ai-virus/",
  },
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
