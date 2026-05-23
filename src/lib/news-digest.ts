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
  {
    date: "2026-05-21",
    headline: "Spotify adds AI-powered Q&#038;A and briefing generation features to podcasts",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/21/spotify-adds-ai-powered-qa-and-briefing-generation-features-to-podcasts/",
  },
  {
    date: "2026-05-21",
    headline: "The Path, founded by Tony Robbins and Calm alums, hopes to offer safer AI therapy",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/21/the-path-founded-by-tony-robbins-and-calm-alums-wants-to-offer-safer-ai-therapy/",
  },
  {
    date: "2026-05-21",
    headline: "Hark raises $700M Series A for its secretive &#8216;universal&#8217; AI interface",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/21/hark-raises-700m-series-a-for-its-secretive-universal-ai-interface/",
  },
  {
    date: "2026-05-21",
    headline: "Jensen Huang says he&#8217;s found a &#8216;brand new&#8217; $200B market for Nvidia",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/20/jensen-huang-says-hes-found-a-brand-new-200b-market-for-nvidia/",
  },
  {
    date: "2026-05-21",
    headline: "Anthropic says it&#8217;s about to have its first profitable quarter",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/20/anthropic-says-its-about-to-have-its-first-profitable-quarter/",
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
