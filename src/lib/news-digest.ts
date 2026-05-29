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
  {
    date: "2026-05-27",
    headline: "In more good news for Amazon, Snowflake signs $6B deal with AWS for AI CPU chips",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/27/in-more-good-news-for-amazon-snowflake-signs-6b-deal-with-aws-for-ai-cpu-chips/",
  },
  {
    date: "2026-05-27",
    headline: "Meta launches Instagram, Facebook, and WhatsApp subscriptions, with more to come, including AI plans",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/27/meta-officially-launches-instagram-facebook-and-whatsapp-subscriptions-with-more-to-come-including-ai-plans/",
  },
  {
    date: "2026-05-27",
    headline: "AI coding startup Cognition raises $1B at $25B pre-money valuation",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/",
  },
  {
    date: "2026-05-26",
    headline: "DuckDuckGo installs are up 30% as users reject being ‘force-fed’ Google’s AI Search",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/26/duckduckgo-installs-are-up-30-as-users-reject-being-force-fed-googles-ai-search/",
  },
  {
    date: "2026-05-26",
    headline: "This startup is betting India&#8217;s gig economy can train the world&#8217;s robots",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/26/human-archive-taps-into-indias-services-startups-to-collect-data-for-physical-ai/",
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
