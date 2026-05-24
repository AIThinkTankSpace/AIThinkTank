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
  {
    date: "2026-05-22",
    headline: "We tried Google’s AI glasses and they’re almost there",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/22/we-tried-googles-ai-glasses-and-theyre-almost-there/",
  },
  {
    date: "2026-05-22",
    headline: "SpaceX files to go public, and the math requires a little faith",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/video/spacex-files-to-go-public-and-the-math-requires-a-little-faith/",
  },
  {
    date: "2026-05-22",
    headline: "The Download: coding&#8217;s future, the &#8216;Steroid Olympics,&#8217; and AI-driven science",
    audiences: ["ai-for-teens"],
    link: "https://www.technologyreview.com/2026/05/22/1137845/the-download-coding-future-steroid-olympics-ai-science/",
  },
  {
    date: "2026-05-21",
    headline: "Spotify and Universal Music strike deal allowing fan-made AI covers and remixes",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/21/spotify-and-universal-music-strike-deal-allowing-fan-made-ai-covers-and-remixes/",
  },
  {
    date: "2026-05-21",
    headline: "Trump delays AI security executive order, saying language &#8216;could have been a blocker&#8217;",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/21/trump-delays-ai-security-executive-order-i-dont-want-to-get-in-the-way-of-that-leading/",
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
