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
  {
    date: "2026-04-28",
    headline: "Amazon launches an AI-powered audio Q&#038;A experience on product pages",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/28/amazon-launches-an-ai-powered-audio-qa-experience-on-product-pages/",
  },
  {
    date: "2026-04-28",
    headline: "Google expands Pentagon&#8217;s access to its AI after Anthropic&#8217;s refusal",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/28/google-expands-pentagons-access-to-its-ai-after-anthropics-refusal/",
  },
  {
    date: "2026-04-28",
    headline: "YouTube is testing an AI-powered search feature that shows guided answers",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/28/youtube-is-testing-an-ai-powered-search-feature-that-shows-guided-answers/",
  },
  {
    date: "2026-04-27",
    headline: "OpenAI ends Microsoft legal peril over its $50B Amazon deal",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/27/openai-ends-microsoft-legal-peril-over-its-50b-amazon-deal/",
  },
  {
    date: "2026-04-27",
    headline: "DeepMind&#8217;s David Silver just raised $1.1B to build an AI that learns without human data",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/",
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
