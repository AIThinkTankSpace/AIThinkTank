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
    date: "2026-10-10",
    headline: "Anthropic can&#8217;t reliably control its AI agents. It&#8217;s cutting off its internal evals…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/09/anthropic-cant-reliably-control-its-ai-agents-its-cutting-off-its-internal-evals-from-the-live-internet-instead/",
  },
  {
    date: "2026-10-09",
    headline: "The maker of non-text AI model Jev valued at $7.5B just weeks after launch",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/09/the-maker-of-non-text-ai-model-jev-valued-at-7-5b-just-weeks-after-launch/",
  },
  {
    date: "2026-10-09",
    headline: "An Anthropic AI model sent a false homicide tip to Philadelphia police",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/09/an-anthropic-ai-model-sent-a-false-homicide-tip-to-philadelphia-police/",
  },
  {
    date: "2026-10-09",
    headline: "Amazon drops data center NDAs, and AI agents want your credit card",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/amazon-drops-data-center-ndas-and-ai-agents-want-your-credit-card/",
  },
  {
    date: "2026-10-09",
    headline: "Danu Robotics&#8217; fight to build a better recycling robot",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/09/danu-robotics-fight-to-build-a-better-recycling-robot/",
  },
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
