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
    date: "2026-07-16",
    headline: "Google Vids now lets you star in your own AI videos",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/16/google-vids-now-lets-you-star-in-your-own-ai-videos/",
  },
  {
    date: "2026-07-16",
    headline: "Roblox launches an AI-powered game-creation feature in its mobile app",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/2026/07/16/roblox-launches-an-ai-powered-game-creation-feature-in-its-mobile-app/",
  },
  {
    date: "2026-07-16",
    headline: "Google&#8217;s AI Mode now lets you link and interact with select apps",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/16/googles-ai-mode-now-lets-you-link-and-interact-with-select-apps/",
  },
  {
    date: "2026-07-16",
    headline: "Why is OpenAI selling a ChatGPT basketball?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/16/why-is-openai-selling-a-chatgpt-basketball/",
  },
  {
    date: "2026-07-16",
    headline: "How a former DeepMind researcher raised at a $300M pre-seed valuation before launching a product",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/16/how-a-former-deepmind-researcher-raised-at-a-300m-pre-seed-valuation-before-launching-a-product/",
  },
  {
    date: "2026-07-16",
    headline: "Applied Computing wants to give oil and gas operators an AI model for the entire plant",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/15/applied-computing-wants-to-give-oil-and-gas-operators-an-ai-model-for-the-entire-plant/",
  },
  {
    date: "2026-07-15",
    headline: "Microsoft is reportedly training salespeople to talk down OpenAI and Anthropic",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/15/microsoft-is-reportedly-training-salespeople-to-talk-down-openai-and-anthropic/",
  },
  {
    date: "2026-07-15",
    headline: "Amid hardware legal battle, OpenAI releases a $230 keyboard for Codex",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/15/amid-hardware-legal-battle-openai-releases-a-230-keyboard-for-codex/",
  },
  {
    date: "2026-07-15",
    headline: "Thinking Machines amps up its bet against one-size-fits-all AI with its first open model, Inkling",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/",
  },
  {
    date: "2026-07-15",
    headline: "Hack suggests AI music generator Suno scraped YouTube for training data",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/15/hack-suggests-ai-music-generator-suno-scraped-youtube-for-training-data/",
  },
  {
    date: "2026-07-15",
    headline: "OpenAI researcher Miles Wang in talks to launch AI drug discovery startup valued at $2B",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/14/openai-researcher-miles-wang-in-talks-to-launch-ai-drug-discovery-startup-valued-at-2b/",
  },
  {
    date: "2026-07-14",
    headline: "Lorde says AI glasses are &#8216;not sexy&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/14/lorde-says-ai-glasses-are-not-sexy/",
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
