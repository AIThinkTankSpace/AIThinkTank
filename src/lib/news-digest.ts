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
  {
    date: "2026-05-26",
    headline: "Universal Music Group and TikTok renew agreement to combat unauthorized AI music",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/26/universal-music-group-and-tiktok-renew-agreement-to-combat-unauthorized-ai-music/",
  },
  {
    date: "2026-05-26",
    headline: "Rethinking organizational design in the age of agentic AI",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/26/1137584/rethinking-organizational-design-in-the-age-of-agentic-ai/",
  },
  {
    date: "2026-05-26",
    headline: "The Download: puncturing the AI jobs panic",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/26/1138028/the-download-ai-jobs-data/",
  },
  {
    date: "2026-05-25",
    headline: "The pope’s AI encyclical isn’t really about AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/25/the-popes-ai-encyclical-isnt-really-about-ai/",
  },
  {
    date: "2026-05-26",
    headline: "A reality check on the AI jobs hysteria",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/26/1137855/a-reality-check-on-the-ai-jobs-hysteria/",
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
