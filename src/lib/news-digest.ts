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
    date: "2026-04-19",
    headline: "OpenAI’s existential questions",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/19/openais-existential-questions/",
  },
  {
    date: "2026-04-19",
    headline: "This charming gadget writes bad AI poetry",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/gadgets/913981/poetry-camera-ai-hands-on",
  },
  {
    date: "2026-04-18",
    headline: "Tesla brings its robotaxi service to Dallas and Houston",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/18/tesla-brings-its-robotaxi-service-to-dallas-and-houston/",
  },
  {
    date: "2026-04-18",
    headline: "AI chip startup Cerebras files for IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/18/ai-chip-startup-cerebras-files-for-ipo/",
  },
  {
    date: "2026-04-18",
    headline: "Anthropic’s relationship with the Trump administration seems to be thawing",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/18/anthropics-relationship-with-the-trump-administration-seems-to-be-thawing/",
  },
  {
    date: "2026-04-18",
    headline: "The App Store is booming again, and AI may be why",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/18/the-app-store-is-booming-again-and-ai-may-be-why/",
  },
  {
    date: "2026-04-17",
    headline: "How robots learn: A brief, contemporary history",
    audiences: ["ai-for-teens"],
    link: "https://www.technologyreview.com/2026/04/17/1135416/how-robots-learn-brief-contemporary-history/",
  },
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
