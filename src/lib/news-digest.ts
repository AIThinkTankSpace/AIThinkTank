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
    date: "2026-08-21",
    headline: "AI data startup Micro1 reaches $500M gross run rate amid AI training boom",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/20/ai-data-startup-micro1-reaches-500m-gross-run-rate-amid-ai-training-boom/",
  },
  {
    date: "2026-08-20",
    headline: "OpenAI is gaining on Anthropic with business users, new data indicates",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/20/openai-is-gaining-on-anthropic-with-business-users-new-data-indicates/",
  },
  {
    date: "2026-08-20",
    headline: "ChatGPT can now send texts for you with new Apple Messages plug-in",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/20/chatgpt-can-now-send-texts-for-you-with-new-apple-messages-plugin/",
  },
  {
    date: "2026-08-20",
    headline: "Google gives publishers a new way to fight AI-driven traffic losses",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/20/google-gives-publishers-a-new-way-to-fight-ai-driven-traffic-losses/",
  },
  {
    date: "2026-08-20",
    headline: "A third of web pages published since ChatGPT&#8217;s launch show signs of AI authorship, study finds",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/08/20/a-third-of-webpages-published-since-chatgpts-launch-show-signs-of-ai-authorship-study-finds/",
  },
  {
    date: "2026-08-19",
    headline: "OpenAI seeks to one-up Anthropic with new customer privacy protections",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/19/openai-seeks-to-one-up-anthropic-with-new-customer-privacy-protections/",
  },
  {
    date: "2026-08-19",
    headline: "AI was supposed to win people over by now &#8212; it hasn&#8217;t",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/19/ai-was-supposed-to-win-people-over-by-now-it-hasnt/",
  },
  {
    date: "2026-08-19",
    headline: "Google packs Search and Gemini with new AI study tools",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/19/google-launches-new-study-tools-for-students-across-search-and-gemini/",
  },
  {
    date: "2026-08-19",
    headline: "Researchers say OpenAI revoked their access to limited cyber program",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/19/researchers-complain-that-openai-revoked-their-access-to-limited-cyber-program/",
  },
  {
    date: "2026-08-19",
    headline: "Meet the startup helping Wall Street put a price on AI compute",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/meet-the-startup-helping-wall-street-put-a-price-on-ai-compute/",
  },
  {
    date: "2026-08-18",
    headline: "OpenAI institutes new safeguards after Hugging Face breach",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/18/openai-institutes-new-safeguards-after-hugging-face-breach/",
  },
  {
    date: "2026-08-18",
    headline: "Why Apple&#8217;s camera-equipped AirPods may not be the &#8216;pervert pods&#8217; consumers fear",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/18/why-apples-camera-equipped-airpods-may-not-be-the-pervert-pods-consumers-fear/",
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
