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
    date: "2026-10-06",
    headline: "Ex-Ramp engineers raise $20M for platform Melius after scrapping their first product",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/06/ex-ramp-engineers-raise-20m-for-platform-melius-after-scrapping-their-first-product/",
  },
  {
    date: "2026-10-06",
    headline: "How AI decision models could change content moderation",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/06/how-ai-decision-models-could-change-content-moderation/",
  },
  {
    date: "2026-10-06",
    headline: "AI computing startup Lambda to raise $4B ahead of planned IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/06/ai-computing-startup-lambda-to-raise-4b-ahead-of-planned-ipo/",
  },
  {
    date: "2026-10-06",
    headline: "The next hurdle for AI agents: getting websites to let them in",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/06/the-next-hurdle-for-ai-agents-getting-websites-to-let-them-in/",
  },
  {
    date: "2026-10-06",
    headline: "Hark releases an AI personal assistant with a focus on privacy",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/06/hark-releases-an-ai-personal-assistant-with-a-focus-on-privacy/",
  },
  {
    date: "2026-10-05",
    headline: "OpenAI will start watermarking ChatGPT&#8217;s text in the EU",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu/",
  },
  {
    date: "2026-10-05",
    headline: "Reflection debuts Beam, an open-weight AI model to rival Chinese models at lower compute cost",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/",
  },
  {
    date: "2026-10-05",
    headline: "Instinct brings its AI agent to group chats, even for friends without an account",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/05/instinct-brings-its-ai-agent-to-group-chats-even-for-friends-without-an-account/",
  },
  {
    date: "2026-10-05",
    headline: "TikTok rolls out an AI shopping assistant and one-click checkout",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/05/tiktok-rolls-out-an-ai-shopping-assistant-and-one-click-checkout/",
  },
  {
    date: "2026-10-05",
    headline: "Hot Girl Hotline is like &#8216;Dear Abby&#8217; for the AI era",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/05/hot-girl-hotline-is-like-dear-abby-for-the-ai-era/",
  },
  {
    date: "2026-10-05",
    headline: "Can Safeworld convince people that GenAI robots won&#8217;t hurt them?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/05/can-safeworld-convince-people-that-gen-ai-robots-wont-hurt-them/",
  },
  {
    date: "2026-10-04",
    headline: "Google froze its open source bug bounty program due to a &#8216;significant rise&#8217; in AI…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/04/google-froze-its-open-source-bug-bounty-program-due-to-a-significant-rise-in-ai-submissions/",
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
