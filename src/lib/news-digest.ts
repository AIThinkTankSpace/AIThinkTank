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
  {
    date: "2026-10-11",
    headline: "These execs think voice AI hasn&#8217;t reached its ChatGPT moment yet",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/11/these-execs-think-voice-ai-hasnt-reached-its-chatgpt-moment-yet/",
  },
  {
    date: "2026-10-12",
    headline: "The ecologist revealing the invisible networks that revive rainforests",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/12/1145745/daisy-dent-ecologist-revealing-invisible-networks-revive-rainforests/",
  },
  {
    date: "2026-10-12",
    headline: "Microsoft’s new AI chip makes it less reliant on Nvidia’s GPUs",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/news/1009465/microsoft-maia-300-chip-improvements-rollout",
  },
  {
    date: "2026-10-10",
    headline: "Microsoft’s Satya Nadella says AI models need an ‘emergency brake’",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/10/microsofts-satya-nadella-says-ai-models-need-an-emergency-brake/",
  },
  {
    date: "2026-10-10",
    headline: "3 days to TechCrunch Disrupt 2026: Meet the startups before they hit mainstream",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/10/3-days-to-disrupt-2026-meet-the-startups-before-they-hit-mainstream/",
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
