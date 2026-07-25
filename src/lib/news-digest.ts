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
  {
    date: "2026-07-23",
    headline: "AegisAI, founded by former Google security execs, lands $36M to stop AI-driven spear phishing",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/23/aegisai-founded-by-former-google-security-execs-lands-36m-to-stop-ai-driven-spear-phishing/",
  },
  {
    date: "2026-07-23",
    headline: "Runway launches AI model router as generative media gets crowded",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/23/runway-bets-on-ai-model-routing-as-generative-media-gets-crowded/",
  },
  {
    date: "2026-07-22",
    headline: "After shocking quarter, IBM insists that AI isn&#8217;t killing the mainframe",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/22/after-shocking-quarter-ibm-insists-that-ai-isnt-killing-the-mainframe/",
  },
  {
    date: "2026-07-22",
    headline: "Google justifies its massive AI spending with a booming cloud business",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/22/google-justifies-its-massive-ai-spending-with-a-booming-cloud-business/",
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
