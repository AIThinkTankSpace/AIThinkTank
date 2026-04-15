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
    date: "2026-04-15",
    headline: "Anthropic&#8217;s rise is giving some OpenAI investors second thoughts",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/14/anthropics-rise-is-giving-some-openai-investors-second-thoughts/",
  },
  {
    date: "2026-04-14",
    headline: "Anthropic co-founder confirms the company briefed the Trump administration on Mythos",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/14/anthropic-co-founder-confirms-the-company-briefed-the-trump-administration-on-mythos/",
  },
  {
    date: "2026-04-14",
    headline: "Max Hodak’s Science Corp. is preparing to place its first sensor in a human brain",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/14/max-hodaks-science-corp-is-preparing-to-place-its-first-sensor-in-a-human-brain/",
  },
  {
    date: "2026-04-14",
    headline: "Google adds AI Skills to Chrome to help you save favorite workflows",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/14/google-adds-ai-skills-to-chrome-to-help-you-save-favorite-workflows/",
  },
  {
    date: "2026-04-14",
    headline: "Google brings its Gemini Personal Intelligence feature to India",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/14/google-brings-its-gemini-personal-intelligence-feature-to-india/",
  },
  {
    date: "2026-04-14",
    headline: "OpenAI has bought AI personal finance startup Hiro",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/13/openai-has-bought-ai-personal-finance-startup-hiro/",
  },
  {
    date: "2026-04-13",
    headline: "Stanford report highlights growing disconnect between AI insiders and everyone else",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/13/stanford-report-highlights-growing-disconnect-between-ai-insiders-and-everyone-else/",
  },
  {
    date: "2026-04-13",
    headline: "Vercel CEO Guillermo Rauch signals IPO readiness as AI agents fuel revenue surge",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/13/vercel-ceo-guillermo-rauch-signals-ipo-readiness-as-ai-agents-fuel-revenue-surge/",
  },
  {
    date: "2026-04-13",
    headline: "Why opinion on AI is so divided",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/13/1135720/why-opinion-on-ai-is-so-divided/",
  },
  {
    date: "2026-04-13",
    headline: "Want to understand the current state of AI? Check out these charts.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/13/1135675/want-to-understand-the-current-state-of-ai-check-out-these-charts/",
  },
  {
    date: "2026-04-12",
    headline: "Trump officials may be encouraging banks to test Anthropic’s Mythos model",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/12/trump-officials-may-be-encouraging-banks-to-test-anthropics-mythos-model/",
  },
  {
    date: "2026-04-12",
    headline: "From LLMs to hallucinations, here&#8217;s a simple guide to common AI terms",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/12/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/",
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
