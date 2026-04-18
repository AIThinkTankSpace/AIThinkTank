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
    date: "2026-04-17",
    headline: "Kevin Weil and Bill Peebles exit OpenAI as company continues to shed &#8216;side quests&#8217;",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/17/kevin-weil-and-bill-peebles-exit-openai-as-company-continues-to-shed-side-quests/",
  },
  {
    date: "2026-04-17",
    headline: "Sources: Cursor in talks to raise $2B+ at $50B valuation as enterprise growth surges",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/17/sources-cursor-in-talks-to-raise-2b-at-50b-valuation-as-enterprise-growth-surges/",
  },
  {
    date: "2026-04-17",
    headline: "Tokenmaxxing, OpenAI&#8217;s shopping spree, and the AI Anxiety Gap",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/tokenmaxxing-openais-shopping-spree-and-the-ai-anxiety-gap/",
  },
  {
    date: "2026-04-17",
    headline: "Anthropic launches Claude Design, a new product for creating quick visuals",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/",
  },
  {
    date: "2026-04-17",
    headline: "The Download: bad news for inner Neanderthals, and AI warfare’s human illusion",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/17/1136112/the-download-inner-neanderthal-ai-war-human-in-the-loop/",
  },
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
