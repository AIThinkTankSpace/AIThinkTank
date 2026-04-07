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
  {
    date: "2026-04-04",
    headline: "Anthropic says Claude Code subscribers will need to pay extra for OpenClaw usage",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/",
  },
  {
    date: "2026-04-04",
    headline: "A folk musician became a target for AI fakes and a copyright troll",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/entertainment/907111/murphy-campbell-folk-music-ai-copyright",
  },
  {
    date: "2026-04-04",
    headline: "Really, you made this without AI? Prove it",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/906453/human-made-ai-free-logo-creative-content",
  },
  {
    date: "2026-04-04",
    headline: "Anthropic essentially bans OpenClaw from Claude by making subscribers pay extra",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban",
  },
  {
    date: "2026-04-03",
    headline: "OpenAI’s AGI boss is taking a leave of absence",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/906965/openais-agi-boss-is-taking-a-leave-of-absence",
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
