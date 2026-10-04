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
  {
    date: "2026-10-02",
    headline: "Redefining enterprise intelligence with autonomous AI",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/02/1143774/redefining-enterprise-intelligence-with-autonomous-ai/",
  },
  {
    date: "2026-10-02",
    headline: "The Download: a biological de-aging contest and why LLMs don&#8217;t reason",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/02/1145666/the-download-biological-de-aging-ai-reasoning/",
  },
  {
    date: "2026-10-02",
    headline: "A new contest pits competitors against each other in a race to biological youth",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/02/1145610/younger-contest-race-to-biological-youth/",
  },
  {
    date: "2026-10-02",
    headline: "Sean Parker is rebuilding Stability AI around music",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/02/sean-parker-is-rebuilding-stability-ai-around-music/",
  },
  {
    date: "2026-10-02",
    headline: "Apple says it&#8217;s tightening macOS &#8216;Full Disk Access&#8217; controls due to new risks…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/02/apple-says-its-tightening-macos-full-disk-access-controls-due-to-new-risks-from-ai-agents/",
  },
  {
    date: "2026-10-02",
    headline: "Call it AI, call it Super Intelligence, only 2% of consumers are buying it",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/podcast/call-it-ai-call-it-super-intelligence-only-2-of-consumers-are-buying-it/",
  },
  {
    date: "2026-10-02",
    headline: "It&#8217;s not AI anymore, it&#8217;s ‘super intelligence’ (according to the White House)",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/video/its-not-ai-anymore-its-super-intelligence-according-to-the-white-house/",
  },
  {
    date: "2026-10-02",
    headline: "TechCrunch Disrupt 2026: Blackstone’s Jas Khaira on building the next generation of AI giants",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/02/techcrunch-disrupt-2026-blackstones-jas-khaira-on-building-the-next-generation-of-ai-giants/",
  },
  {
    date: "2026-10-01",
    headline: "Musk&#8217;s AI chatbot Grok reportedly encouraged Trump to capture  Venezuela&#8217;s president",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/01/musks-ai-chatbot-grok-reportedly-encouraged-trump-to-capture-venezuelas-president/",
  },
  {
    date: "2026-10-01",
    headline: "ChatGPT can now virtually try on clothes for you",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/01/chatgpt-can-now-virtually-try-on-clothes-for-you/",
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
