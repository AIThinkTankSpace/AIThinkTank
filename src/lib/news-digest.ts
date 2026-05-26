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
  {
    date: "2026-05-22",
    headline: "Texas AG sues Meta over claims that WhatsApp doesn't provide end-to-end encryption",
    audiences: ["ai-for-corporates"],
    link: "https://arstechnica.com/security/2026/05/texas-ag-sues-meta-over-claims-that-whatsapp-doesnt-provide-end-to-end-encryption/",
  },
  {
    date: "2026-05-22",
    headline: "Google’s new anything-to-anything AI model is wild",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/936507/gemini-omni-hands-on-deepfake-ai-video",
  },
  {
    date: "2026-05-22",
    headline: "Google&#8217;s AI search is so broken it can &#8216;disregard&#8217; what you&#8217;re looking for",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/936176/google-ai-overviews-search-disregard",
  },
  {
    date: "2026-05-22",
    headline: "AI is being used to resurrect the voices of dead pilots",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/",
  },
  {
    date: "2026-05-22",
    headline: "How VCs and founders use inflated ‘ARR’ to crown AI startups",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/22/how-vcs-and-founders-use-inflated-arr-to-kingmake-ai-startups/",
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
