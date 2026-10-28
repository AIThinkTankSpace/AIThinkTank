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
  {
    date: "2026-10-27",
    headline: "Cohere says Alibaba’s Qwen model tried to send a file to Beijing",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/26/cohere-says-alibabas-qwen-model-tried-to-send-a-file-to-beijing/",
  },
  {
    date: "2026-10-26",
    headline: "Anthropic’s IPO filing reveals its strategy for keeping enterprise customers hooked",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/26/anthropics-ipo-filing-reveals-its-strategy-for-keeping-enterprise-customers-hooked/",
  },
  {
    date: "2026-10-26",
    headline: "Anthropic officially files for its public debut",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/26/anthropic-officially-files-for-its-public-debut/",
  },
  {
    date: "2026-10-25",
    headline: "Grok releases the first seven minutes of its AI-generated ‘Odyssey’",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/25/grok-releases-the-first-seven-minutes-of-its-ai-generated-odyssey/",
  },
  {
    date: "2026-10-25",
    headline: "AI delivers ‘zero financial payoff’ to most companies, Apollo economist says",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/25/ai-delivers-zero-financial-payoff-to-most-companies-according-to-apollo-economist/",
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
