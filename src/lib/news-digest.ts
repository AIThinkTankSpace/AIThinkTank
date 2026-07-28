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
    date: "2026-07-28",
    headline: "Anthropic&#8217;s Dario Amodei responds: doesn&#8217;t oppose open-weight models, but fears…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/27/anthropics-dario-amodei-responds-doesnt-oppose-open-weight-models-but-fears-chinese-ai/",
  },
  {
    date: "2026-07-27",
    headline: "Satya Nadella says companies that trust one AI for everything may not survive",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/27/satya-nadella-says-companies-that-trust-one-ai-for-everything-may-not-survive/",
  },
  {
    date: "2026-07-27",
    headline: "PSA: Your Claude shared chats and Artifacts may have ended up on Google",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/27/psa-your-claude-shared-chats-and-artifacts-may-have-ended-up-on-google/",
  },
  {
    date: "2026-07-27",
    headline: "Microsoft launches its first cybersecurity model, plus a new agentic cybersecurity system",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/27/microsoft-launches-its-first-cyber-model-and-a-new-agentic-cybersecurity-system/",
  },
  {
    date: "2026-07-27",
    headline: "OpenAI’s Hugging Face breach has reignited the debate over alignment and control",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/27/openais-hugging-face-breach-has-reignited-the-debate-over-alignment-and-control/",
  },
  {
    date: "2026-07-27",
    headline: "Are brain waves the next unlock for physical AI?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/26/are-brain-waves-the-next-unlock-for-physical-ai/",
  },
  {
    date: "2026-07-26",
    headline: "Making sense of the panic over Chinese AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/26/making-sense-of-the-panic-over-chinese-ai/",
  },
  {
    date: "2026-07-26",
    headline: "Hugging Face CEO calls for ‘radical transparency’ after ‘unprecedented’ OpenAI hack",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/26/hugging-face-ceo-calls-for-radical-transparency-after-unprecedented-openai-hack/",
  },
  {
    date: "2026-07-26",
    headline: "Monday.com is the latest tech company to blame AI for layoffs — here are 20 others",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/25/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai/",
  },
  {
    date: "2026-07-25",
    headline: "Librarians are hosting viral &#8216;Avoiding AI&#8217; workshops for people who are fed up with…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/25/librarians-are-hosting-viral-avoiding-ai-workshops-for-people-who-are-fed-up-with-big-tech/",
  },
  {
    date: "2026-07-25",
    headline: "One fallen power line exposed a growing AI data center problem. Here&#8217;s how to fix it.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/25/one-fallen-power-line-exposed-a-growing-ai-data-center-problem-heres-how-to-fix-it/",
  },
  {
    date: "2026-07-24",
    headline: "Meta is making its AI chatbot more like an assistant",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/970570/meta-ai-chatbot-productivity-update",
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
