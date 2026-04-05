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
    date: "2026-04-04",
    headline: "Anthropic says Claude Code subscribers will need to pay extra for OpenClaw usage",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/",
  },
  {
    date: "2026-04-04",
    headline: "A folk musician became a target for AI fakes and a copyright troll",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/entertainment/907111/murphy-campbell-folk-music-ai-copyright",
  },
  {
    date: "2026-04-04",
    headline: "Really, you made this without AI? Prove it",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/906453/human-made-ai-free-logo-creative-content",
  },
  {
    date: "2026-04-04",
    headline: "Anthropic essentially bans OpenClaw from Claude by making subscribers pay extra",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban",
  },
  {
    date: "2026-04-03",
    headline: "OpenAI’s AGI boss is taking a leave of absence",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/906965/openais-agi-boss-is-taking-a-leave-of-absence",
  },
  {
    date: "2026-04-04",
    headline: "Anthropic is having a moment in the private markets; SpaceX could spoil the party",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/03/anthropic-is-having-a-moment-in-the-private-markets-spacex-could-spoil-the-party/",
  },
  {
    date: "2026-04-03",
    headline: "OpenAI executive shuffle includes new role for COO Brad Lightcap to lead &#8216;special…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/03/openai-executive-shuffle-new-roles-coo-brad-lightcap-fidji-simo-kate-rouch/",
  },
  {
    date: "2026-04-03",
    headline: "Anthropic buys biotech startup Coefficient Bio in $400M deal: Reports",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/03/anthropic-buys-biotech-startup-coefficient-bio-in-400m-deal-reports/",
  },
  {
    date: "2026-04-03",
    headline: "Anthropic ramps up its political activities with a new PAC",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/03/anthropic-ramps-up-its-political-activities-with-a-new-pac/",
  },
  {
    date: "2026-04-03",
    headline: "AI companies are building huge natural gas plants to power data centers. What could go wrong?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/03/ai-companies-are-building-huge-natural-gas-plants-to-power-data-centers-what-could-go-wrong/",
  },
  {
    date: "2026-04-02",
    headline: "OpenAI acquires TBPN, the buzzy founder-led business talk show",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/02/openai-acquires-tbpn-the-buzzy-founder-led-business-talk-show/",
  },
  {
    date: "2026-04-02",
    headline: "Microsoft takes on AI rivals with three new foundational models",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/02/microsoft-takes-on-ai-rivals-with-three-new-foundational-models/",
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
