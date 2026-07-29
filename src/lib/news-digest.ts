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
    date: "2026-07-29",
    headline: "Cyera agrees to acquire Oasis Security for $1B to safeguard proliferating AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/28/cyera-agrees-to-acquire-oasis-security-for-1b-to-safeguard-proliferating-ai-agents/",
  },
  {
    date: "2026-07-28",
    headline: "Fish Audio raises $52M seed to build AI voice models for creators and enterprises",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/28/fish-audio-raises-50m-seed-to-build-ai-voice-models-for-creators-and-enterprises/",
  },
  {
    date: "2026-07-28",
    headline: "The Download: OpenAI&#8217;s predictable hack, and an AI stock sell-off",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/28/1140868/the-download-openai-hack-ai-stock-sell-off/",
  },
  {
    date: "2026-07-27",
    headline: "OpenAI called the Hugging Face attack unprecedented. But we’ve been here before.",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/27/1140836/openai-hugging-face-attack-precedent/",
  },
  {
    date: "2026-07-27",
    headline: "Closing the data loop in AI-driven drug discovery",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/27/1139667/closing-the-data-loop-in-ai-driven-drug-discovery/",
  },
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
