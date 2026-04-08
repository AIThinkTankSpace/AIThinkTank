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
    date: "2026-04-07",
    headline: "I can&#8217;t help rooting for tiny open source AI model maker Arcee",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/07/i-cant-help-rooting-for-tiny-open-source-ai-model-maker-arcee/",
  },
  {
    date: "2026-04-07",
    headline: "Firmus, the &#8216;Southgate&#8217; AI data center builder backed by Nvidia, hits $5.5B valuation",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/07/firmus-the-southgate-ai-datacenter-builder-backed-by-nvidia-hits-5-5b-valuation/",
  },
  {
    date: "2026-04-07",
    headline: "Anthropic debuts preview of powerful new AI model Mythos in new cybersecurity initiative",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/07/anthropic-mythos-ai-model-preview-security/",
  },
  {
    date: "2026-04-07",
    headline: "Uber is the latest to be won over by Amazon&#8217;s AI chips",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/07/uber-is-the-latest-to-be-won-over-by-amazons-ai-chips/",
  },
  {
    date: "2026-04-07",
    headline: "The Download: AI&#8217;s impact on jobs, and data centres in space",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/07/1135208/the-download-ai-impact-jobs-data-centres-space/",
  },
  {
    date: "2026-04-07",
    headline: "AI startup Rocket offers vibe McKinsey-style reports at a fraction of the cost",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/06/indian-startup-rocket-wants-its-ai-to-do-mckinsey-style-consulting-at-a-fraction-of-the-cost/",
  },
  {
    date: "2026-04-06",
    headline: "OpenAI alums have been quietly investing from a new, potentially $100M fund",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/06/openai-alums-have-been-quietly-investing-from-a-new-potentially-100m-fund/",
  },
  {
    date: "2026-04-06",
    headline: "Google quietly launched an AI dictation app that works offline",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/06/google-quietly-releases-an-offline-first-ai-dictation-app-on-ios/",
  },
  {
    date: "2026-04-06",
    headline: "Iran threatens &#8216;Stargate&#8217; AI data centers",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/06/iran-threatens-stargate-ai-data-centers/",
  },
  {
    date: "2026-04-06",
    headline: "OpenAI’s vision for the AI economy: public wealth funds, robot taxes, and a four-day workweek",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/06/openais-vision-for-the-ai-economy-public-wealth-funds-robot-taxes-and-a-four-day-work-week/",
  },
  {
    date: "2026-04-05",
    headline: "Copilot is ‘for entertainment purposes only,’ according to Microsoft’s terms of use",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/05/copilot-is-for-entertainment-purposes-only-according-to-microsofts-terms-of-service/",
  },
  {
    date: "2026-04-05",
    headline: "In Japan, the robot isn&#8217;t coming for your job; it&#8217;s filling the one nobody wants",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/05/japan-is-proving-experimental-physical-ai-is-ready-for-the-real-world/",
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
