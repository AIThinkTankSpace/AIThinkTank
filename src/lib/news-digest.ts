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
    date: "2026-10-13",
    headline: "Cerebras CEO says we&#8217;re nearing a future where everyone has a personal AI assistant at home",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/13/cerebras-ceo-says-were-nearing-a-future-where-everyone-has-a-personal-ai-assistant-at-home/",
  },
  {
    date: "2026-10-13",
    headline: "Industrial Next wants factory robots to switch tasks in minutes, not weeks",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/13/industrial-next-wants-factory-robots-to-switch-tasks-in-minutes-not-weeks/",
  },
  {
    date: "2026-10-13",
    headline: "Cerebras CEO pushes back on AI doomsday warnings",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/13/cerebras-ceo-pushes-back-on-ai-doomsday-warnings/",
  },
  {
    date: "2026-10-13",
    headline: "Judge orders OpenAI to turn over hiring records in Apple trade secrets case",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/13/judge-orders-openai-to-turn-over-hiring-records-in-apple-trade-secrets-case/",
  },
  {
    date: "2026-10-13",
    headline: "Flox Intelligence is building AI to keep wildlife away from trains, airports, and roads",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/13/flox-intelligence-is-building-ai-to-keep-wildlife-away-from-trains-airports-and-roads/",
  },
  {
    date: "2026-10-13",
    headline: "Amex introduces a framework to prevent AI agents from making unauthorized purchases",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/13/amex-introduces-a-framework-to-prevent-ai-agents-from-making-unauthorized-purchases/",
  },
  {
    date: "2026-10-13",
    headline: "Just 5 years in, interactive chatbot platform Character.AI files for bankruptcy",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/13/just-5-years-in-interactive-chatbot-platform-character-ai-files-for-bankruptcy/",
  },
  {
    date: "2026-10-12",
    headline: "Meta releases its first frontier model, Muse Wonder",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/",
  },
  {
    date: "2026-10-12",
    headline: "WindBorne wins a hefty US Air Force contract for its balloon data",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/12/windborne-wins-a-hefty-us-air-force-contract-for-its-balloon-data/",
  },
  {
    date: "2026-10-12",
    headline: "Honeyjar offers AI tools to improve PR and comms at every company",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/12/honeyjar-offers-ai-tools-to-improve-pr-and-comms-at-every-company/",
  },
  {
    date: "2026-10-12",
    headline: "Former Plaud exec raises $26M for AI app that listens to you in the background",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/12/former-plaud-exec-raises-26m-for-ai-app-that-listens-to-you-in-the-background/",
  },
  {
    date: "2026-10-11",
    headline: "Can the AI industry persuade data center opponents by getting rid of NDAs?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/11/can-the-ai-industry-persuade-data-center-opponents-by-getting-rid-of-ndas/",
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
