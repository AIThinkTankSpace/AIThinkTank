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
    date: "2026-05-29",
    headline: "Coders are refusing to work without AI — and that could come back to bite them",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/29/coders-are-refusing-to-work-without-ai-and-that-could-come-back-to-bite-them/",
  },
  {
    date: "2026-05-29",
    headline: "So you&#8217;ve heard these AI terms and nodded along; let&#8217;s fix that",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/29/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/",
  },
  {
    date: "2026-05-29",
    headline: "What happens when companies become too AI-pilled?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/video/what-happens-when-companies-become-too-ai-pilled/",
  },
  {
    date: "2026-05-29",
    headline: "After Nvidia&#8217;s $20B not-acqui-hire, AI chip startup Groq reportedly raising $650M",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/29/after-nvidias-20b-not-acqui-hire-ai-chip-startup-groq-reportedly-raising-650m/",
  },
  {
    date: "2026-05-29",
    headline: "Cognition&#8217;s Scott Wu says AI coding agents shouldn&#8217;t replace humans",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/29/cognitions-scott-wu-says-ai-coding-agents-shouldnt-replace-humans/",
  },
  {
    date: "2026-05-29",
    headline: "Glean&#8217;s top line crosses $300M as AI budget-cutting becomes its major selling point",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/28/gleans-top-line-crosses-300m-as-ai-budget-cutting-becomes-its-major-selling-point/",
  },
  {
    date: "2026-05-28",
    headline: "Asana acquires no-code agent-builder StackAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/28/asana-acquires-no-code-agent-builder-stack-ai/",
  },
  {
    date: "2026-05-28",
    headline: "Anthropic raises $65 billion, nears $1T valuation ahead of IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/",
  },
  {
    date: "2026-05-28",
    headline: "Just like gold and oil, we&#8217;ll soon be able to trade AI token futures",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/28/just-like-gold-and-oil-well-soon-be-able-to-trade-ai-token-futures/",
  },
  {
    date: "2026-05-28",
    headline: "Anthropic releases Opus 4.8 with new &#8216;dynamic workflow&#8217; tool",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/",
  },
  {
    date: "2026-05-28",
    headline: "Vertu wants CEOs to run companies from an AI foldable starting at $6,880",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/28/vertu-wants-ceos-to-run-companies-from-an-ai-foldable-starting-at-6880/",
  },
  {
    date: "2026-05-28",
    headline: "Why Google&#8217;s AI can&#8217;t spell Google (or anything else)",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/27/why-googles-ai-cant-spell-google-or-anything-else/",
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
