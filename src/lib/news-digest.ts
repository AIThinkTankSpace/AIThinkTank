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
  {
    date: "2026-05-26",
    headline: "Uber president says AI spending is getting ‘harder to justify’",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/transportation/937116/uber-ai-investment-hard-to-justify",
  },
  {
    date: "2026-05-25",
    headline: "Pope Leo calls for being ‘profoundly human’ in the age of AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/news/936945/pope-leo-letter-encyclical-ai-anthropic-labor-warfare",
  },
  {
    date: "2026-05-24",
    headline: "Everyone is navigating AI security in real time &#8212; even Google",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/24/everyone-is-navigating-ai-security-in-real-time-even-google/",
  },
  {
    date: "2026-05-23",
    headline: "Ferrari is using IBM&#8217;s AI to create F1 superfans",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/23/ferrari-is-using-ai-to-create-f1-superfans/",
  },
  {
    date: "2026-05-22",
    headline: "Google I/O showed how the path for AI-driven science is shifting",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/22/1137813/google-i-o-showed-how-the-path-for-ai-science-is-shifting/",
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
