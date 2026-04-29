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
  {
    date: "2026-04-27",
    headline: "Investors back Skye’s AI home screen app for iPhone ahead of launch",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/27/investors-back-skye-signull-labs-ai-home-screen-app-for-iphone-ahead-of-launch/",
  },
  {
    date: "2026-04-27",
    headline: "OpenAI could be making a phone with AI agents replacing apps",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/27/openai-could-be-making-a-phone-with-ai-agents-replacing-apps/",
  },
  {
    date: "2026-04-27",
    headline: "Elon Musk and Sam Altman are going to court over OpenAI’s future",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/27/1136466/elon-musk-and-sam-altman-are-going-to-court-over-openais-future/",
  },
  {
    date: "2026-04-26",
    headline: "To buy this Bay Area home, you’ll need Anthropic equity",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/26/to-buy-this-bay-area-home-youll-need-anthropic-equity/",
  },
  {
    date: "2026-04-25",
    headline: "Anthropic created a test marketplace for agent-on-agent commerce",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/25/anthropic-created-a-test-marketplace-for-agent-on-agent-commerce/",
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
