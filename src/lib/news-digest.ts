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
    date: "2026-09-27",
    headline: "Google tests buying from Walmart-owned Flipkart through Gemini and AI Mode in India",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/26/google-tests-buying-from-walmart-owned-flipkart-through-gemini-and-ai-mode-in-india/",
  },
  {
    date: "2026-09-26",
    headline: "Insurers claim AI is already increasing healthcare costs",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/26/insurers-claim-ai-is-already-increasing-healthcare-costs/",
  },
  {
    date: "2026-09-25",
    headline: "The Download: the Pentagon’s AI-powered lie detector and young organ limits",
    audiences: ["ai-for-kids"],
    link: "https://www.technologyreview.com/2026/09/25/1145157/the-download-pentagon-ai-lie-detector-young-organ-limits/",
  },
  {
    date: "2026-09-25",
    headline: "The Pentagon wants $30 million to build an AI-powered lie detector",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/09/25/1145144/pentagon-ai-lie-detector/",
  },
  {
    date: "2026-09-25",
    headline: "Young organs may not be a fountain of youth for recipients",
    audiences: ["ai-for-kids"],
    link: "https://www.technologyreview.com/2026/09/25/1145083/young-organs-may-not-be-a-fountain-of-youth-for-recipients/",
  },
  {
    date: "2026-09-25",
    headline: "Crusoe abandons $1.25B plan to use Boom turbines at AI data centers",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/25/crusoe-abandons-1-25b-plan-to-use-boom-turbines-at-ai-data-centers/",
  },
  {
    date: "2026-09-25",
    headline: "Unsecured OpenAI agents posted 53 user images on the internet without the lab&#8217;s knowledge",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/25/unsecured-openai-agents-posted-53-user-images-on-the-internet-without-the-labs-knowledge/",
  },
  {
    date: "2026-09-25",
    headline: "Anthropic to pay Akamai $11.6 billion over seven years in cloud deal",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/25/anthropic-to-pay-akamai-11-6-billion-over-seven-years-in-cloud-deal/",
  },
  {
    date: "2026-09-25",
    headline: "Ahead of US IPO, British AI neocloud Nscale secures $3.36B in convertible financing",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/25/ahead-of-u-s-ipo-british-ai-neocloud-nscale-secures-3-36b-in-convertible-finacing/",
  },
  {
    date: "2026-09-25",
    headline: "Meta’s Muse just stole the AI spotlight from OpenAI and Anthropic",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/metas-muse-just-stole-the-ai-spotlight-from-openai-and-anthropic/",
  },
  {
    date: "2026-09-25",
    headline: "Lightspeed targets $250M for new India fund, focusing on early-stage AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/24/lightspeed-targets-250m-for-new-india-fund-focusing-on-early-stage-ai/",
  },
  {
    date: "2026-09-24",
    headline: "PrismML brings its tiny LLMs to Qualcomm-powered smart glasses",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/24/prismml-brings-its-tiny-llms-to-qualcomm-powered-smart-glasses/",
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
