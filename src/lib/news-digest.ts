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
  {
    date: "2026-10-25",
    headline: "The hottest AI wearables and gadgets you should know about",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/25/the-hottest-ai-wearables-and-gadgets-you-should-know-about/",
  },
  {
    date: "2026-10-25",
    headline: "r/opensource just banned AI, non-English speakers, and more",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/1018217/reddit-opensource-ai-ban",
  },
  {
    date: "2026-10-24",
    headline: "Pennsylvania will require labels on AI-generated ads",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/1018187/pennsylvania-ai-deceptive-advertising-act",
  },
  {
    date: "2026-10-24",
    headline: "The AI graveyard: a running list of projects and startups that didn&#8217;t make it",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/24/the-ai-graveyard-a-running-list-of-projects-and-startups-that-didnt-make-it/",
  },
  {
    date: "2026-10-24",
    headline: "Block&#8217;s new voice model sounds eerily human",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/",
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
