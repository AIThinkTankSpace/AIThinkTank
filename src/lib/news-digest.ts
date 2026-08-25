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
    date: "2026-08-25",
    headline: "Situational Awareness, star AI hedge fund that nearly imploded, now being probed by the SEC",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/24/situational-awareness-star-ai-hedge-fund-that-nearly-imploded-now-being-probed-by-the-sec/",
  },
  {
    date: "2026-08-24",
    headline: "Instinct’s powerful AI assistant is raising privacy and security concerns",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/24/instincts-powerful-ai-assistant-is-raising-privacy-and-security-concerns/",
  },
  {
    date: "2026-08-24",
    headline: "Valor, Point72 back General Intuition at $6B valuation as AI startup pushes into robotics",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/24/valor-point72-back-general-intuition-at-6b-valuation-as-ai-startup-pushes-into-robotics/",
  },
  {
    date: "2026-08-24",
    headline: "OpenAI is building AI agents for everything. Will everyone use them?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/24/openai-is-building-an-ai-agent-for-everything-will-everyone-use-them/",
  },
  {
    date: "2026-08-24",
    headline: "How to encourage smarter AI use in the classroom",
    audiences: ["ai-for-kids"],
    link: "https://www.technologyreview.com/2026/08/24/1142630/ai-school-classroom-policies/",
  },
  {
    date: "2026-08-23",
    headline: "Who&#8217;s behind the new ‘stealth model’ Ox Alpha?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/23/whos-behind-the-new-stealth-model-ox-alpha/",
  },
  {
    date: "2026-08-23",
    headline: "Is it legal to train AI models on copyrighted books? It’s complicated",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/23/is-it-legal-to-train-ai-models-on-copyrighted-books-its-complicated/",
  },
  {
    date: "2026-08-22",
    headline: "Inherent, founded by DeepMind alumni, says its AI &#8216;teammate&#8217; just outperformed…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/22/inherent-founded-by-deepmind-alumni-says-its-ai-teammate-just-outperformed-anthropic-and-openai-at-replicating-research/",
  },
  {
    date: "2026-08-22",
    headline: "Harvard’s $699 startup bootcamp offers AI avatars of its instructors",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/22/harvards-699-startup-bootcamp-offers-ai-avatars-of-its-instructors/",
  },
  {
    date: "2026-08-22",
    headline: "Inherent, founded by DeepMind alumni, says its AI &#8216;teammate&#8217; just outperformed…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/22/inherent-founded-by-deepmind-alumni-says-its-ai-teammate-just-outperformed-anthropic-and-openai-at-replicating-research/",
  },
  {
    date: "2026-08-22",
    headline: "OpenAI says California should strengthen its AI safety bill",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/22/openai-says-california-should-strengthen-its-ai-safety-bill/",
  },
  {
    date: "2026-08-22",
    headline: "Frontier AI labs still won&#8217;t say how they&#8217;d contain a rogue model",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/22/frontier-ai-labs-still-wont-say-how-theyd-contain-a-rogue-model/",
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
