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
    date: "2026-10-15",
    headline: "Ricursive Intelligence is betting on AI-designed chips to help solve the compute crisis",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/14/ricursive-intelligence-is-betting-on-ai-designed-chips-to-help-solve-the-compute-crisis/",
  },
  {
    date: "2026-10-15",
    headline: "Gudea leverages AI to help organizations prevent social media crises before they erupt",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/14/gudea-leverages-ai-to-help-organizations-prevent-social-media-crises-before-they-erupt/",
  },
  {
    date: "2026-10-14",
    headline: "YouTube Music launches new labels as AI-generated music floods streaming platforms",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/14/youtube-music-launches-new-labels-as-ai-generated-music-floods-streaming-platforms/",
  },
  {
    date: "2026-10-14",
    headline: "Apate sends AI agents undercover to get scammed so they can gather fraud intelligence",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/14/apate-sends-ai-agents-undercover-to-get-scammed-so-they-can-gather-fraud-intelligence/",
  },
  {
    date: "2026-10-14",
    headline: "Deezer will soon let you filter out AI-generated music",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/14/deezer-will-soon-let-you-filter-out-ai-generated-music/",
  },
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
