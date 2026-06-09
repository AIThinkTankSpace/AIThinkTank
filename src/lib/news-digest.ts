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
    date: "2026-06-09",
    headline: "Why Apple&#8217;s slow-and-steady AI bet is starting to look pretty smart",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/08/why-apples-slow-and-steady-ai-bet-is-starting-to-look-pretty-smart/",
  },
  {
    date: "2026-06-08",
    headline: "As OpenAI files for IPO, Sam Altman&#8217;s eye-scanning company is doing layoffs, report says",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/08/as-openai-files-for-ipo-sam-altmans-eye-scanning-company-is-doing-layoffs-report-says/",
  },
  {
    date: "2026-06-08",
    headline: "Apple&#8217;s WWDC AI demos looked more real after $250M false ad settlement",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/08/apples-wwdc-ai-demos-looked-more-real-after-250m-false-ad-settlement/",
  },
  {
    date: "2026-06-08",
    headline: "OpenAI files confidentially for IPO, following Anthropic",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/08/following-anthropic-openai-files-confidentially-for-ipo/",
  },
  {
    date: "2026-06-08",
    headline: "Apple bets cheaper AI will woo small developers",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/06/08/apple-bets-cheaper-ai-will-woo-small-developers/",
  },
  {
    date: "2026-06-07",
    headline: "Notion restores access to Anthropic after service disruption",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/07/notion-restores-access-to-anthropic-after-service-disruption/",
  },
  {
    date: "2026-06-07",
    headline: "OpenAI is still working on that ‘super app’",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/07/openai-is-still-working-on-that-super-app/",
  },
  {
    date: "2026-06-06",
    headline: "OpenAI unveils Lockdown Mode to protect sensitive data from prompt injection attacks",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/",
  },
  {
    date: "2026-06-06",
    headline: "Sriram Krishnan is leaving his role as White House AI advisor",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/06/sriram-krishnan-is-leaving-his-role-as-white-house-ai-advisor/",
  },
  {
    date: "2026-06-06",
    headline: "The Trump administration might take an equity stake in OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/06/the-trump-administration-might-take-an-equity-stake-in-openai/",
  },
  {
    date: "2026-06-05",
    headline: "Meta made its own AI-generated clickbait news feed",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/944235/meta-app-ai-clickbait-articles",
  },
  {
    date: "2026-06-05",
    headline: "Here comes new Siri again",
    audiences: ["ai-for-kids"],
    link: "https://www.theverge.com/tech/944245/apple-wwdc-2026-ai-siri-gemini",
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
