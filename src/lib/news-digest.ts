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
    date: "2026-11-26",
    headline: "As Anthropic IPOs, Grand Theft Auto VI proves why efficiency isn&#8217;t a virtue",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/26/as-anthropic-ipos-grand-theft-auto-vi-proves-why-efficiency-isnt-a-virtue/",
  },
  {
    date: "2026-11-25",
    headline: "S&#038;P considers Nvidia credit downgrade over governance and &#8216;key man&#8217; risks",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/25/sp-considers-nvidia-credit-downgrade-over-governance-and-key-man-risks/",
  },
  {
    date: "2026-11-25",
    headline: "OpenAI says heavy ChatGPT users may hit limits sooner as it merges Chat and Work",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/25/openai-says-heavy-chatgpt-users-may-hit-limits-sooner-as-it-merges-chat-and-work/",
  },
  {
    date: "2026-11-25",
    headline: "Jensen Huang broke Nvidia&#8217;s code of conduct, and his employees may not forget it",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/25/jensen-huang-broke-nvidias-code-of-conduct-and-his-employees-may-not-forget-it/",
  },
  {
    date: "2026-11-25",
    headline: "Anthropic’s Dario Amodei calls accusations of surrendering human control to AI ‘absurd’",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/25/anthropics-dario-amodei-calls-accusations-of-surrendering-human-control-to-ai-absurd/",
  },
  {
    date: "2026-11-25",
    headline: "AI data centers are becoming harder to build, and neoclouds are feeling it",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/podcast/ai-data-centers-are-becoming-harder-to-build-and-neoclouds-are-feeling-it/",
  },
  {
    date: "2026-11-25",
    headline: "Amazon and Meta reportedly in talks to lift blockade on AI agent Muse",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/25/amazon-and-meta-reportedly-in-talks-to-lift-blockade-on-ai-agent-muse/",
  },
  {
    date: "2026-11-25",
    headline: "The questions Jensen Huang and Nvidia will still have to answer about Megaspeed",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/25/the-questions-jensen-huang-and-nvidia-will-still-have-to-answer-about-megaspeed/",
  },
  {
    date: "2026-11-25",
    headline: "Yale&#8217;s Sonnenfeld: Nvidia is a &#8216;detriment&#8217; to US industrial might — not a champion",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/24/yales-sonnenfeld-nvidia-is-a-detriment-to-u-s-industrial-might-not-a-champion/",
  },
  {
    date: "2026-11-24",
    headline: "Even the best AI agents struggle with everyday life",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/24/even-the-best-ai-agents-struggle-with-everyday-life/",
  },
  {
    date: "2026-11-24",
    headline: "Meta brings its Muse AI assistant directly into Instagram DMs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/24/meta-brings-its-muse-ai-assistant-directly-into-instagram-dms/",
  },
  {
    date: "2026-11-24",
    headline: "Tidal to ban and remove millions of AI-generated tracks as AI slop inundates music streaming",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/24/tidal-to-ban-and-remove-millions-of-ai-generated-tracks-as-ai-slop-inundates-music-streaming/",
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
