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
    headline: "When it came to Cal AI&#8217;s viral success, a small army of influencers paid off",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/15/when-it-came-to-cal-ais-viral-success-a-small-army-of-influencers-paid-off/",
  },
  {
    date: "2026-10-15",
    headline: "Meta launches an open-weight AI model that runs on Macs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/",
  },
  {
    date: "2026-10-15",
    headline: "Amazon devices chief Panos Panay sees a future where AI devices replace the need to use apps",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/15/amazon-devices-chief-panos-panay-sees-a-future-where-ai-devices-replace-the-need-to-use-apps/",
  },
  {
    date: "2026-10-15",
    headline: "Anthropic is letting METR researchers look under the hood with employee-level access",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/15/anthropic-is-letting-metr-researchers-look-under-the-hood-with-employee-level-access/",
  },
  {
    date: "2026-10-15",
    headline: "Bluesky expands its AI-powered Attie app to let anyone build websites, games, and more",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/2026/10/15/bluesky-expands-its-ai-powered-attie-app-to-let-anyone-build-websites-games-and-more/",
  },
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
