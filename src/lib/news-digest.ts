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
    date: "2026-10-08",
    headline: "Pretend you&#8217;re sitting at Elizabeth Holmes&#8217; desk on this weirdly detailed website",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/08/pretend-youre-sitting-at-elizabeth-holmes-desk-on-this-weirdly-detailed-website/",
  },
  {
    date: "2026-10-08",
    headline: "Fired OpenAI safety researchers dispute misconduct claims, warn of chilling effect",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/08/fired-openai-safety-researchers-dispute-misconduct-claims-warn-of-chilling-effect/",
  },
  {
    date: "2026-10-08",
    headline: "Ben Affleck is an AI nerd, and the internet is impressed",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/08/ben-affleck-is-an-ai-nerd-and-the-internet-is-impressed/",
  },
  {
    date: "2026-10-08",
    headline: "Popular AI leaderboard Arena nearly doubles valuation to $3.1B valuation in 10 months",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/08/popular-ai-leaderboard-arena-nearly-doubles-valuation-to-3-1b-valuation-in-10-months/",
  },
  {
    date: "2026-10-08",
    headline: "OpenAI&#8217;s revenue is reportedly $20 billion less than previously projected",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/08/openais-revenue-is-reportedly-20-billion-less-than-previously-projected/",
  },
  {
    date: "2026-10-07",
    headline: "Nous Research confirms it hit $1.5B valuation, launches AI agents for business users",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/07/nous-research-confirms-it-hit-1-5b-valuation-launches-ai-agents-for-business-users/",
  },
  {
    date: "2026-10-07",
    headline: "Microsoft releases new Nvidia-chip AI PCs with revamped Windows 11",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/07/microsoft-releases-new-nvidia-chip-ai-pcs-with-revamped-windows-11/",
  },
  {
    date: "2026-10-07",
    headline: "ChatGPT for Teens keeps teens talking, even during mental health crises",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/10/07/chatgpt-for-teens-keeps-teens-talking-even-during-mental-health-crises/",
  },
  {
    date: "2026-10-07",
    headline: "ChatGPT is getting a lot more visual, with the launch of a new interface",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/07/chatgpt-is-getting-a-lot-more-visual-with-the-launch-of-a-new-interface/",
  },
  {
    date: "2026-10-07",
    headline: "Meta rolls out new AI tools to detect ads that secretly lead to child sexual abuse material",
    audiences: ["ai-for-kids", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/07/meta-rolls-out-new-ai-tools-to-detect-ads-that-secretly-lead-to-child-sexual-abuse-material/",
  },
  {
    date: "2026-10-06",
    headline: "Ex-Ramp engineers raise $20M for platform Melius after scrapping their first product",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/06/ex-ramp-engineers-raise-20m-for-platform-melius-after-scrapping-their-first-product/",
  },
  {
    date: "2026-10-06",
    headline: "How AI decision models could change content moderation",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/06/how-ai-decision-models-could-change-content-moderation/",
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
