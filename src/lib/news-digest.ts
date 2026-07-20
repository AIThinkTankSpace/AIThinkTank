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
    date: "2026-07-19",
    headline: "Can an Apple lawsuit derail OpenAI’s hardware plans?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/19/can-an-apple-lawsuit-derail-openais-hardware-plans/",
  },
  {
    date: "2026-07-19",
    headline: "‘Odyssey’ director Christopher Nolan calls AI an obvious ‘Trojan horse’",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/19/odyssey-director-christopher-nolan-calls-ai-an-obvious-trojan-horse/",
  },
  {
    date: "2026-07-19",
    headline: "Nonprofit Current AI is racing to build the World Wide Web of AI, free for all",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/19/nonprofit-current-ai-is-racing-to-build-the-world-wide-web-of-ai-free-for-all/",
  },
  {
    date: "2026-07-20",
    headline: "AI is more likely than humans to form biases when hiring",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/20/1140655/ai-biases-hiring-humans/",
  },
  {
    date: "2026-07-17",
    headline: "The Download: perimenopause misinformation and China&#8217;s latest AI leap",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/17/1140640/the-download-perimenopause-misinformation-china-moonshot-ai/",
  },
  {
    date: "2026-07-18",
    headline: "Dave Eggers told OpenAI staff  that ChatGPT was ‘silencing an entire generation’",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/967630/dave-eggers-openai-chatgpt-silencing-an-entire-generation",
  },
  {
    date: "2026-07-17",
    headline: "TikTok is testing an AI likeness detection tool",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/967486/tiktok-ai-likeness-detection-tool",
  },
  {
    date: "2026-07-17",
    headline: "Apple’s plot to crush OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/podcast/967244/apple-openai-lawsuit-vergecast",
  },
  {
    date: "2026-07-18",
    headline: "Neil Rimer thinks the AI money is coming back out",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/17/neil-rimer-thinks-the-ai-money-is-coming-back-out/",
  },
  {
    date: "2026-07-17",
    headline: "Vertu wants executives to pay $6,880 for an AI agent — here&#8217;s how it actually performs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/17/vertu-wants-executives-to-pay-6880-for-an-ai-agent-heres-how-it-actually-performs/",
  },
  {
    date: "2026-07-17",
    headline: "Databricks hits $188B valuation, extending its run as AI&#8217;s favorite second act",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/17/databricks-hits-188b-valuation-extending-its-run-as-ais-favorite-second-act/",
  },
  {
    date: "2026-07-17",
    headline: "Agility Robotics plants its flag in Tesla&#8217;s backyard",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/17/agility-robotics-plants-its-flag-in-teslas-backyard/",
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
