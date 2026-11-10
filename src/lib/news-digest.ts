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
    date: "2026-11-10",
    headline: "Adobe brings AI agents and new creative tools to Photoshop, Premiere, and Firefly",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/adobe-adds-more-ai-to-its-products-and-launches-an-mcp/",
  },
  {
    date: "2026-11-10",
    headline: "Anthropic sets IPO price range of $70 to $78 per share to reach an implied valuation of $1.404…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/anthropic-sets-ipo-price-range-of-70-to-78-per-share-to-reach-an-implied-valuation-of-1-404-trillion/",
  },
  {
    date: "2026-11-10",
    headline: "After challenging Google&#8217;s Android with Cyanogen, its co-founder takes aim at Windows for…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/after-challenging-googles-android-with-cyanogen-its-co-founder-takes-aim-at-windows-for-ai-era/",
  },
  {
    date: "2026-11-10",
    headline: "Spotify&#8217;s AI DJ gets new voices, personalities, and an option for less chatter",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/spotifys-ai-dj-gets-new-voices-personalities-and-an-option-for-less-chatter/",
  },
  {
    date: "2026-11-10",
    headline: "Cyberattacks threaten to make open-source AI a little less open, Hugging Face exec warns",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/10/cyberattacks-threaten-to-make-open-source-ai-a-little-less-open-hugging-face-exec-warns/",
  },
  {
    date: "2026-11-08",
    headline: "Nvidia will investigate CEO Jensen Huang’s relationship with possible Chinese spy",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/08/nvidia-says-its-investigating-ceo-jensen-huangs-relationship-with-possible-chinese-spy/",
  },
  {
    date: "2026-11-09",
    headline: "The Download: empty AI climate claims, and an Nvidia investigation",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/09/1148176/the-download-empty-ai-climate-claims-and-an-nvidia-investigation/",
  },
  {
    date: "2026-11-09",
    headline: "Innovating with AI in the special chemicals industry",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/09/1147654/innovating-with-ai-in-the-special-chemicals-industry/",
  },
  {
    date: "2026-11-09",
    headline: "The climate case for AI has not been made",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/09/1148166/the-climate-case-for-ai-has-not-been-made/",
  },
  {
    date: "2026-11-08",
    headline: "Here’s the full text of Jensen Huang’s memo to Nvidia",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/1029595/full-text-jensen-huang-affair-memo-nvidia",
  },
  {
    date: "2026-11-07",
    headline: "Megaspeed exec was recruited to spy on Nvidia CEO, according to US intelligence memo",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/07/chinese-exec-was-recruited-to-spy-on-nvidia-ceo-according-to-us-intelligence-memo/",
  },
  {
    date: "2026-11-06",
    headline: "The Download: a humanoid cleans house and Samsung builds for the AI boom",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/06/1148154/the-download-humanoid-robot-cleaner-samsung-ai-chip-boom/",
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
