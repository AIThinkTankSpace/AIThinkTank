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
    date: "2026-08-02",
    headline: "Sam Altman and AI’s decel debate",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/02/sam-altman-and-ais-decel-debate/",
  },
  {
    date: "2026-08-03",
    headline: "Here’s why AI agents lie and cheat to reach their goals",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/03/1141009/heres-why-ai-agents-lie-and-cheat-to-reach-their-goals/",
  },
  {
    date: "2026-08-02",
    headline: "Fender’s CEO seems to think your bandmates are just analog AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/974265/fender-ceo-bud-cole-ai-music",
  },
  {
    date: "2026-08-01",
    headline: "Judge denies xAI’s request to block Minnesota ban on ‘nudify’ apps",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/01/judge-denies-xais-request-to-block-minnesota-ban-on-nudify-apps/",
  },
  {
    date: "2026-08-01",
    headline: "YouTuber Hank Green says his AI usage is ‘not healthy’",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/01/youtuber-hank-green-says-his-ai-usage-is-not-healthy/",
  },
  {
    date: "2026-08-01",
    headline: "Sam Altman is still making the case for parenting via ChatGPT",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/01/sam-altman-is-still-making-the-case-for-parenting-via-chatgpt/",
  },
  {
    date: "2026-07-31",
    headline: "Claude published malicious code to the Internet and attacked 3 real companies",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://arstechnica.com/security/2026/07/likely-illegally-claude-gained-access-to-3-networks-will-anthropic-be-held-to-account/",
  },
  {
    date: "2026-08-01",
    headline: "Is this Billboard Hot 100 hit AI slop?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/974209/fenix-flexin-billboard-hot-100-rubberz-ai-slop",
  },
  {
    date: "2026-07-31",
    headline: "OpenAI reportedly finds evidence that more of its agents ran amok",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/31/openai-reportedly-finds-evidence-that-more-of-its-agents-ran-amok/",
  },
  {
    date: "2026-07-31",
    headline: "Google nixes its Earth AI feature one day after launch, amid criticism it would spread…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/31/google-nixes-its-earth-ai-feature-one-day-after-launch-amid-criticism-it-would-spread-misinformation/",
  },
  {
    date: "2026-07-31",
    headline: "Sam Altman isn&#8217;t the only one who wants to pump the brakes on AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/video/sam-altman-isnt-the-only-one-who-wants-to-pump-the-brakes-on-ai/",
  },
  {
    date: "2026-07-31",
    headline: "Snapchat no longer rewards fully AI-generated Spotlight content",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/31/snapchat-no-longer-rewards-fully-ai-generated-spotlight-content/",
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
