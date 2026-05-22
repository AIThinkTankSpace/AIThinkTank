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
  {
    date: "2026-05-20",
    headline: "xAI burned $6.4B last year — SpaceX’s IPO filing shows why the spending is far from over",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/20/xai-burned-6-4b-last-year-spacexs-ipo-filing-shows-why-the-spending-is-far-from-over/",
  },
  {
    date: "2026-05-20",
    headline: "Nvidia posts another record quarter, reveals $43B of holdings in startups",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/20/nvidia-posts-another-record-quarter-reveals-43-billion-of-holdings-in-startups/",
  },
  {
    date: "2026-05-20",
    headline: "Musk’s xAI is being sued over its data center generators — now it’s buying $2.8B more",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/20/musks-xai-is-being-sued-over-its-data-center-generators-now-its-buying-2-8b-more/",
  },
  {
    date: "2026-05-19",
    headline: "Google just declared itself a contender in AI design at IO 2026",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/19/ai-design-tools-are-the-next-big-battleground-and-google-is-going-all-in-at-io-2026/",
  },
  {
    date: "2026-05-19",
    headline: "You can now talk to your Gmail inbox, as seen at Google IO 2026",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/19/you-can-now-talk-to-your-gmail-inbox-as-seen-at-google-io-2026/",
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
