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
    date: "2026-11-03",
    headline: "Apple Watch&#8217;s AI features for rewinding and recapping conversations begin beta testing",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/02/apple-watchs-ai-features-for-rewinding-and-recapping-conversations-begin-beta-testing/",
  },
  {
    date: "2026-11-03",
    headline: "Google takes Dreambeans to India in bid to bring AI-generated personal stories to the masses",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/02/google-takes-dreambeans-to-india-in-bid-to-bring-ai-generated-personal-stories-to-the-masses/",
  },
  {
    date: "2026-11-03",
    headline: "Apple may try to increase revenue by doing&#8230;something with third-party AI apps",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/02/apple-may-try-to-increase-revenue-by-doing-something-with-third-party-ai-apps/",
  },
  {
    date: "2026-11-03",
    headline: "Y Combinator&#8217;s Garry Tan uses AI agents so much, he spends up to $200K a year on tokens",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/02/y-combinators-garry-tan-uses-ai-agents-so-much-he-spends-up-to-200k-a-year-on-tokens/",
  },
  {
    date: "2026-11-02",
    headline: "Trajectory raises $45M to make AI model training accessible to nontechnical experts",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/02/trajectory-raises-45m-to-make-ai-model-training-accessible-to-nontechnical-experts/",
  },
  {
    date: "2026-11-02",
    headline: "OpenAI is finally merging ChatGPT&#8217;s chat and Work tabs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/",
  },
  {
    date: "2026-11-01",
    headline: "OpenAI might rebrand its data centers as ‘AI compute campuses’",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/01/openai-might-rebrand-its-data-centers-as-ai-compute-campuses/",
  },
  {
    date: "2026-11-01",
    headline: "AI can make tech CEOs’ lives easier. What about everyone else?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/01/ai-can-make-tech-ceos-lives-easier-what-about-everyone-else/",
  },
  {
    date: "2026-10-31",
    headline: "Apple CEO says the company doesn’t ‘want to ship AI for AI’s sake’",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/31/apple-ceo-says-the-company-doesnt-want-to-ship-ai-for-ais-sake/",
  },
  {
    date: "2026-10-31",
    headline: "Judge allows NAACP lawsuit over xAI data center pollution to move forward",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/31/judge-allows-naacp-lawsuit-over-xai-data-center-pollution-to-move-forward/",
  },
  {
    date: "2026-10-31",
    headline: "OpenAI reportedly lowers funding target for new round",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/31/openai-reportedly-lowers-funding-target-for-new-round/",
  },
  {
    date: "2026-10-30",
    headline: "Anthropic VS code extension on Cursor backdoored for nearly 12 hours",
    audiences: ["ai-for-corporates"],
    link: "https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/",
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
