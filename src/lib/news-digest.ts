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
    date: "2026-10-28",
    headline: "Google expands AI Search ads globally as core ad growth slows",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/28/google-expands-ai-search-ads-globally-as-core-ad-growth-slows/",
  },
  {
    date: "2026-10-28",
    headline: "Microsoft recorded $10 billion in revenue from OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/28/microsoft-recorded-10-billion-in-revenue-from-openai/",
  },
  {
    date: "2026-10-28",
    headline: "Anthropic just launched tools to show companies what their AI spending is buying",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/28/anthropic-just-launched-tools-to-show-companies-what-their-ai-spending-is-buying/",
  },
  {
    date: "2026-10-28",
    headline: "Chrome&#8217;s AI-powered Autofill can now dig through your Gmail to fill out forms",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/28/chromes-ai-powered-autofill-can-now-dig-through-your-gmail-to-fill-out-forms/",
  },
  {
    date: "2026-10-28",
    headline: "As AI agents reshape the web, Google opens Gemini and Search to more apps",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/28/as-ai-agents-reshape-the-web-google-opens-gemini-and-search-to-more-apps/",
  },
  {
    date: "2026-10-28",
    headline: "VCs will make billions on Anthropic&#8217;s IPO, but Amazon is set to make much (much) more",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/27/vcs-will-make-billions-on-anthropics-ipo-but-amazon-is-set-to-make-much-much-more/",
  },
  {
    date: "2026-10-27",
    headline: "Parents sue OpenAI, alleging GPT-4o coached their daughter off seizure medication",
    audiences: ["ai-for-kids", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/27/parents-sue-openai-alleging-gpt-4o-coached-their-daughter-off-seizure-medication/",
  },
  {
    date: "2026-10-27",
    headline: "Bank of America kindly asks that you don&#8217;t share your banking password with your AI assistant",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/27/bank-of-america-kindly-asks-that-you-dont-share-your-banking-password-with-your-ai-assistant/",
  },
  {
    date: "2026-10-27",
    headline: "Who&#8217;s really in charge at Anthropic after the IPO?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/27/whos-really-in-charge-at-anthropic-after-the-ipo/",
  },
  {
    date: "2026-10-27",
    headline: "Disruptive raises $10B fund to make big bets on at least 10 companies",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/27/disruptive-raises-10b-fund-to-make-big-bets-on-at-least-10-companies/",
  },
  {
    date: "2026-10-27",
    headline: "Nvidia backs Indian startup helping companies run AI models with fewer GPUs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/27/nvidia-backs-indian-startup-helping-companies-run-ai-models-with-fewer-gpus/",
  },
  {
    date: "2026-10-27",
    headline: "How OpenAI turned its coding tools into dots, an always-on personal assistant",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/26/how-openai-turned-its-coding-tools-into-dots-an-always-on-personal-assistant/",
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
