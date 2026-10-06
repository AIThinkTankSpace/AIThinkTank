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
  {
    date: "2026-10-04",
    headline: "Can ‘super intelligence’ and a non-binding safety pact solve AI’s image problem?",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/04/can-super-intelligence-and-a-non-binding-safety-pact-solve-ais-image-problem/",
  },
  {
    date: "2026-10-05",
    headline: "The Download: AI’s popularity paradox and EmTech Future 2026",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/05/1145711/the-download-ai-popularity-paradox-emtech-future-2026/",
  },
  {
    date: "2026-10-05",
    headline: "People really hate AI, so why can’t they get enough?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/05/1145682/people-really-hate-ai-so-why-cant-they-get-enough/",
  },
  {
    date: "2026-10-03",
    headline: "OpenAI safety employee resigns, claiming the company’s ‘culture is broken’",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/03/openai-safety-employee-resigns-claiming-the-companys-culture-is-broken/",
  },
  {
    date: "2026-10-03",
    headline: "All the AI agents that can live in your text messages",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/03/all-the-ai-agents-that-can-live-in-your-text-messages/",
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
