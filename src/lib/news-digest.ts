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
    date: "2026-05-13",
    headline: "Medicare&#8217;s new payment model is built for AI, and most of the tech world has no idea",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/12/medicares-new-payment-model-is-built-for-ai-and-most-of-the-tech-world-has-no-idea/",
  },
  {
    date: "2026-05-12",
    headline: "Musk mulled handing OpenAI to his children, Altman testifies",
    audiences: ["ai-for-kids", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/12/musk-mulled-handing-openai-to-his-children-altman-testifies/",
  },
  {
    date: "2026-05-12",
    headline: "Anthropic warns investors against secondary platforms offering access to its shares",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/12/anthropic-warns-investors-against-secondary-platforms-offering-access-to-its-shares/",
  },
  {
    date: "2026-05-12",
    headline: "Google adds Gemini-powered dictation to Gboard, which could be bad news for dictation startups",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/12/google-adds-gemini-powered-dictation-to-gboard-which-could-be-bad-news-for-dictation-startups/",
  },
  {
    date: "2026-05-12",
    headline: "The AI legal services industry is heating up — Anthropic is getting in on the action",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/12/the-ai-legal-services-industry-is-heating-up-anthropic-is-getting-in-on-the-action/",
  },
  {
    date: "2026-05-12",
    headline: "Thinking Machines wants to build an AI that actually listens while it talks",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/11/thinking-machines-wants-to-build-an-ai-that-actually-listens-while-it-talks/",
  },
  {
    date: "2026-05-12",
    headline: "Riding an AI rally, Robinhood preps second retail venture IPO",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/11/riding-an-ai-rally-robinhood-preps-second-retail-venture-ipo/",
  },
  {
    date: "2026-05-11",
    headline: "GM just laid off hundreds of IT workers to hire those with stronger AI skills",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/11/gm-just-laid-off-hundreds-of-it-workers-to-hire-those-with-stronger-ai-skills/",
  },
  {
    date: "2026-05-11",
    headline: "Digg tries again, this time as an AI news aggregator",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/11/digg-tries-again-this-time-as-an-ai-news-aggregator/",
  },
  {
    date: "2026-05-11",
    headline: "There aren&#8217;t enough rockets for space data centers — Cowboy Space raised $275M to build them",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/11/there-arent-enough-rockets-for-space-data-centers-cowboy-space-raised-275-million-to-build-them/",
  },
  {
    date: "2026-05-10",
    headline: "Anthropic says ‘evil’ portrayals of AI were responsible for Claude’s blackmail attempts",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/10/anthropic-says-evil-portrayals-of-ai-were-responsible-for-claudes-blackmail-attempts/",
  },
  {
    date: "2026-05-10",
    headline: "We’re feeling cynical about xAI’s big deal with Anthropic",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/10/were-feeling-cynical-about-xais-big-deal-with-anthropic/",
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
