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
    date: "2026-06-11",
    headline: "Opendoor&#8217;s India exit is fueling a bigger conversation about AI and outsourcing",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/opendoors-india-exit-is-fueling-a-bigger-conversation-about-ai-and-outsourcing/",
  },
  {
    date: "2026-06-11",
    headline: "Anthropic&#8217;s Dario Amodei has just one direct report",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/anthropics-dario-amodei-has-just-one-direct-report/",
  },
  {
    date: "2026-06-10",
    headline: "xAI fired an engineer who raised alarms about Grok safety, new lawsuit claims",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/xai-fired-an-engineer-who-raised-alarms-about-grok-safety-new-lawsuit-claims/",
  },
  {
    date: "2026-06-10",
    headline: "Fresh off bond sale, Amazon borrows $17.5B from banks as AI spending continues",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/fresh-off-bond-sale-amazon-borrows-17-5-billion-from-banks-as-ai-spending-continues/",
  },
  {
    date: "2026-06-10",
    headline: "‘AI-pilled’ firms spend $7,500 per employee each month on AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/ai-pilled-firms-spend-7500-per-employee-each-month-on-ai/",
  },
  {
    date: "2026-06-10",
    headline: "Meta signs first AI data center deal in India with Reliance",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/meta-signs-first-ai-data-center-deal-in-india-with-reliance/",
  },
  {
    date: "2026-06-10",
    headline: "Google just fired a warning shot in the AI subscription price wars",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/09/google-just-fired-a-warning-shot-in-the-ai-subscription-price-wars/",
  },
  {
    date: "2026-06-09",
    headline: "Hey, Siri, here&#8217;s what I actually want from AI",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/2026/06/09/hey-siri-heres-what-i-actually-want-from-ai/",
  },
  {
    date: "2026-06-09",
    headline: "Anthropic&#8217;s Fable 5 can make weirdly fun video games with the click of a button",
    audiences: ["ai-for-kids", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/09/anthropics-fable-5-can-make-weirdly-fun-video-games-with-the-click-of-a-button/",
  },
  {
    date: "2026-06-09",
    headline: "Can tech companies learn to love cheaper AI models?",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/06/09/can-tech-companies-learn-to-love-cheaper-models/",
  },
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
