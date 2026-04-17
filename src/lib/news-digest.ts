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
    date: "2026-04-16",
    headline: "Factory hits $1.5B valuation to build AI coding for enterprises",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/16/factory-hits-1-5b-valuation-to-build-ai-coding-for-enterprises/",
  },
  {
    date: "2026-04-16",
    headline: "Luma launches AI-powered production studio with faith-focused Wonder Project",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/16/luma-launches-ai-powered-production-studio-with-faith-focused-wonder-project/",
  },
  {
    date: "2026-04-16",
    headline: "Upscale AI in talks to raise at $2B valuation, says report",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/16/upscale-ai-in-talks-to-raise-at-2b-valuation-says-report/",
  },
  {
    date: "2026-04-16",
    headline: "Physical Intelligence, a hot robotics startup, says its new robot brain can figure out tasks it…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/16/physical-intelligence-a-hot-robotics-startup-says-its-new-robot-brain-can-figure-out-tasks-it-was-never-taught/",
  },
  {
    date: "2026-04-16",
    headline: "OpenAI takes aim at Anthropic with beefed-up Codex that gives it more power over your desktop",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/16/openai-takes-aim-at-anthropic-with-beefed-up-codex-that-gives-it-more-power-over-your-desktop/",
  },
  {
    date: "2026-04-15",
    headline: "OpenAI updates its Agents SDK to help enterprises build safer, more capable agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/15/openai-updates-its-agents-sdk-to-help-enterprises-build-safer-more-capable-agents/",
  },
  {
    date: "2026-04-15",
    headline: "Hightouch reaches $100M ARR fueled by marketing tools powered by AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/15/hightouch-reaches-100m-arr-fueled-by-marketing-tools-powered-by-ai/",
  },
  {
    date: "2026-04-15",
    headline: "LinkedIn data shows AI isn&#8217;t to blame for hiring decline&#8230; yet",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/15/linkedin-data-shows-ai-isnt-to-blame-for-hiring-decline-yet/",
  },
  {
    date: "2026-04-15",
    headline: "AI learning app Gizmo levels up with 13M users and a $22M investment",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/15/ai-learning-app-gizmo-levels-up-with-13m-users-and-a-22m-investment/",
  },
  {
    date: "2026-04-15",
    headline: "Can AI judge journalism? A Thiel-backed startup says yes, even if it risks chilling whistleblowers",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/15/can-ai-judge-journalism-a-thiel-backed-startup-says-yes-even-if-it-risks-chilling-whistleblowers/",
  },
  {
    date: "2026-04-15",
    headline: "Anthropic&#8217;s rise is giving some OpenAI investors second thoughts",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/14/anthropics-rise-is-giving-some-openai-investors-second-thoughts/",
  },
  {
    date: "2026-04-14",
    headline: "Anthropic co-founder confirms the company briefed the Trump administration on Mythos",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/14/anthropic-co-founder-confirms-the-company-briefed-the-trump-administration-on-mythos/",
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
