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
    date: "2026-05-14",
    headline: "Who decides what AI tells you? Campbell Brown, once Meta&#8217;s news chief, has thoughts",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/13/who-decides-what-ai-tells-you-campbell-brown-once-metas-news-chief-has-thoughts/",
  },
  {
    date: "2026-05-14",
    headline: "Clio&#8217;s $500M milestone arrives just as Anthropic ups the ante",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/13/clios-500m-milestone-arrives-just-as-anthropic-ups-the-ante/",
  },
  {
    date: "2026-05-13",
    headline: "Notion just turned its workspace into a hub for AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/",
  },
  {
    date: "2026-05-13",
    headline: "Musk’s xAI is running nearly 50 gas turbines unchecked at its Mississippi data center",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/13/musks-xai-is-running-nearly-50-gas-turbines-unchecked-at-its-mississippi-data-center/",
  },
  {
    date: "2026-05-13",
    headline: "Anthropic&#8217;s Cat Wu says that, in the future, AI will anticipate your needs before you know…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/13/anthropics-cat-wu-says-that-in-the-future-ai-will-anticipate-your-needs-before-you-know-what-they-are/",
  },
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
