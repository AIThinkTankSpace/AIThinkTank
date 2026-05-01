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
    date: "2026-05-01",
    headline: "ChatGPT Images 2.0 is a hit in India, but not a big winner elsewhere, yet",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/30/chatgpt-images-2-0-is-a-hit-in-india-but-not-a-big-winner-elsewhere-yet/",
  },
  {
    date: "2026-04-30",
    headline: "Sources: Anthropic potential $900B+ valuation round could happen within 2 weeks",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/30/anthropic-potential-900b-valuation-round-could-happen-within-two-weeks/",
  },
  {
    date: "2026-04-30",
    headline: "Apple was surprised by AI-driven demand for Macs",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/30/apple-was-surprised-by-ai-driven-demand-for-macs/",
  },
  {
    date: "2026-04-30",
    headline: "Legal AI startup Legora hits $5.6B valuation and its battle with Harvey just got hotter",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/30/legal-ai-startup-legora-hits-5-6-valuation-and-its-battle-with-harvey-just-got-hotter/",
  },
  {
    date: "2026-04-30",
    headline: "After dissing Anthropic for limiting Mythos, OpenAI restricts access to Cyber, too",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/30/after-dissing-anthropic-for-limiting-mythos-openai-restricts-access-to-cyber-too/",
  },
  {
    date: "2026-04-30",
    headline: "SoftBank is creating a robotics company that builds data centers — and already eyeing a $100B IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/29/softbank-is-creating-a-robotics-company-that-builds-data-centers-and-already-eyeing-a-100b-ipo/",
  },
  {
    date: "2026-04-30",
    headline: "Sources: Anthropic could raise a new $50B round at a valuation of $900B",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/29/sources-anthropic-could-raise-a-new-50b-round-at-a-valuation-of-900b/",
  },
  {
    date: "2026-04-29",
    headline: "Satya Nadella says he&#8217;s ready to &#8216;exploit&#8217; the new OpenAI deal",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/29/satya-nadella-says-hes-ready-to-exploit-the-new-openai-deal/",
  },
  {
    date: "2026-04-29",
    headline: "Microsoft says it has over 20M paid Copilot users, and they really are using it",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/29/microsoft-says-it-has-over-20m-paid-copilot-users-and-they-really-are-using-it/",
  },
  {
    date: "2026-04-29",
    headline: "Google Cloud surpasses $20B, but says growth was capacity-constrained",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/29/google-cloud-surpasses-20b-but-says-growth-was-capacity-constrained/",
  },
  {
    date: "2026-04-29",
    headline: "At his OpenAI trial, Musk relitigates an old friendship",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/28/at-his-openai-trial-musk-relitigates-an-old-friendship/",
  },
  {
    date: "2026-04-28",
    headline: "Amazon is already offering new OpenAI products on AWS",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/28/amazon-is-already-offering-new-openai-products-on-aws/",
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
