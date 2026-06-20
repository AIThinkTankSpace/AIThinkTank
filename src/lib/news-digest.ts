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
    date: "2026-06-19",
    headline: "Is the US government&#8217;s Anthropic ban accidentally helping the brand?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/is-the-us-governments-anthropic-ban-accidentally-helping-the-brand/",
  },
  {
    date: "2026-06-19",
    headline: "The US banned Anthropic&#8217;s Fable 5 release, but the numbers don&#8217;t seem to care",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/the-us-banned-anthropics-fable-5-release-but-the-numbers-dont-seem-to-care/",
  },
  {
    date: "2026-06-19",
    headline: "Billionaire Ambani wants AI in every call, app, and home",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/19/billionaire-ambani-wants-ai-in-every-call-app-and-home/",
  },
  {
    date: "2026-06-19",
    headline: "The CEO of Allbirds&#8217; new AI biz has a plan, but no team",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/19/the-ceo-of-allbirds-new-ai-biz-has-a-plan-but-no-employees/",
  },
  {
    date: "2026-06-19",
    headline: "The Download: AI bottleneck debates, and BCI trials take off",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/19/1139327/the-download-llms-bottleneck-breakthrough-bci-trials-take-off/",
  },
  {
    date: "2026-06-19",
    headline: "Source: Elastic agrees to buy CRV-backed DeductiveAI for up to $85M",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/18/source-elastic-agrees-to-buy-crv-backed-deductiveai-for-up-to-85m/",
  },
  {
    date: "2026-06-18",
    headline: "AI inference startup Baseten reportedly raising $1.5B months after its last mega-round",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/",
  },
  {
    date: "2026-06-18",
    headline: "Snap spins off AI video team into new company, Dotmo, due to costs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/18/snap-spins-off-ai-video-team-into-new-company-dotmo-due-to-costs/",
  },
  {
    date: "2026-06-18",
    headline: "OpenAI is bringing on some big guns in the lead-up to its IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/",
  },
  {
    date: "2026-06-18",
    headline: "Almost half of US singles feel negatively about AI in dating, Match says",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/18/almost-half-of-u-s-singles-feel-negatively-about-ai-in-dating-match-says/",
  },
  {
    date: "2026-06-18",
    headline: "How to turn off AI in your Google Docs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/17/how-to-turn-off-ai-in-your-google-docs/",
  },
  {
    date: "2026-06-17",
    headline: "NEA’s Tiffany Luck says enterprises are still figuring out their AI ROI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/neas-tiffany-luck-says-enterprises-are-still-figuring-out-their-ai-roi/",
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
