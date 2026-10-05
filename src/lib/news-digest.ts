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
