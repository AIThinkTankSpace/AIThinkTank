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
  {
    date: "2026-07-25",
    headline: "I tried out OpenAI&#8217;s new AI keypad — which will be fun for some coders and slightly…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/24/i-tried-out-openais-new-ai-keypad-which-will-be-fun-for-coders-and-slightly-mystifying-to-everyone-else/",
  },
  {
    date: "2026-07-24",
    headline: "Prentis, new AI lab co-founded by Reid Hoffman, Mark Pincus in talks to raise $100M",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/24/prentis-new-ai-lab-co-founded-by-reid-hoffman-mark-pincus-in-talks-to-raise-100m/",
  },
  {
    date: "2026-07-24",
    headline: "Why Cognition bought Poke: AI personality is becoming a competitive advantage",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/24/why-cognition-bought-poke-ai-personality-is-becoming-a-competitive-advantage/",
  },
  {
    date: "2026-07-24",
    headline: "Anthropic launches Opus 5",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/",
  },
  {
    date: "2026-07-24",
    headline: "As US weighs response to Chinese AI, industry urges against broad open-weight restrictions",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/24/as-us-weighs-response-to-chinese-ai-industry-urges-against-broad-open-weight-restrictions/",
  },
  {
    date: "2026-07-24",
    headline: "How AI guardrails are impeding the work of offensive cybersecurity researchers",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/23/how-ai-guardrails-are-impeding-the-work-of-offensive-cybersecurity-researchers/",
  },
  {
    date: "2026-07-23",
    headline: "AMD takes on Nvidia with its Helios AI rack-scale system",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/23/amd-takes-on-nvidia-with-its-helios-ai-rack-scale-system/",
  },
  {
    date: "2026-07-23",
    headline: "Anthropic updates Claude voice mode with more capable models",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/23/anthropic-updates-claude-voice-mode-with-more-capable-models/",
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
