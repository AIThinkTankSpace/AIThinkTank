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
    date: "2026-10-30",
    headline: "You don&#8217;t need to believe in a god to get a religious exemption from using AI at work",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/you-dont-need-to-believe-in-a-god-to-get-a-religious-exemption-from-using-ai-at-work/",
  },
  {
    date: "2026-10-29",
    headline: "Rivian expands joint venture with VW to include AI assistant",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/rivian-expands-joint-venture-with-vw-to-include-ai-assistant/",
  },
  {
    date: "2026-10-29",
    headline: "OpenAI-backed Thrive Holdings acquires ADT",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/openai-backed-thrive-holdings-acquires-adt/",
  },
  {
    date: "2026-10-29",
    headline: "Meta quietly launches an AI fashion app called Style Sketch",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/meta-quietly-launches-an-ai-fashion-app-called-style-sketch/",
  },
  {
    date: "2026-10-29",
    headline: "Mistral releases weights for its trillion-parameter AI model, targeting cybersecurity",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/",
  },
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
