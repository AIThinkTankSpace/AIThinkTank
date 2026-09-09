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
    date: "2026-09-08",
    headline: "Hackers are stealing Claude tokens from subscribers",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/08/hackers-are-stealing-claude-tokens-from-subscribers/",
  },
  {
    date: "2026-09-08",
    headline: "Cognition hits $48B valuation, signaling investors believe AI coding is far from a…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/08/cognition-hits-48b-valuation-signaling-investors-believe-ai-coding-is-far-from-a-winner-take-all-market/",
  },
  {
    date: "2026-09-08",
    headline: "Meta debuts its Muse AI agent. Will consumers trust it?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/",
  },
  {
    date: "2026-09-08",
    headline: "OpenAI fought dirty on career-making math problem, says NYU mathematician",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/08/openai-fought-dirty-on-career-making-math-problem-says-nyu-mathematician/",
  },
  {
    date: "2026-09-08",
    headline: "Google Cloud races to catch up in the AI deployment wars with Accenture deal",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/08/google-cloud-races-to-catch-up-in-the-ai-deployment-wars-with-accenture-deal/",
  },
  {
    date: "2026-09-07",
    headline: "Opaque recurrence, and other AI terms that you should probably know",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/07/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/",
  },
  {
    date: "2026-09-07",
    headline: "The Download: the hunt for underground hydrogen and more rogue OpenAI agents",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/09/07/1143592/the-download-underground-hydrogen-search-rogue-openai-agents/",
  },
  {
    date: "2026-09-06",
    headline: "Authors push back as publishers and agents make claims on Anthropic settlement",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/06/authors-push-back-as-publishers-and-agents-seek-share-of-anthropic-settlement/",
  },
  {
    date: "2026-09-06",
    headline: "Travis Kalanick’s Atoms might be getting into the robotaxi business",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/06/travis-kalanicks-atoms-might-be-getting-into-the-robotaxi-business/",
  },
  {
    date: "2026-09-05",
    headline: "OpenAI admits to German wiki ‘incident’",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/990773/openai-german-wiki-incident",
  },
  {
    date: "2026-09-05",
    headline: "Seattle Times and Newsday are the latest publications to sue OpenAI and Microsoft",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/05/seattle-times-and-newsday-are-the-latest-publications-to-sue-openai-and-microsoft/",
  },
  {
    date: "2026-09-05",
    headline: "Hikers rescued after using Google Gemini for planning",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/05/hikers-rescued-after-using-google-gemini-for-planning/",
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
