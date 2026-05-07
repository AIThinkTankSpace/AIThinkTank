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
    date: "2026-05-07",
    headline: "Five architects of the AI economy explain where the wheels are coming off",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/06/five-architects-of-the-ai-economy-explain-where-the-wheels-are-coming-off/",
  },
  {
    date: "2026-05-06",
    headline: "Is xAI a neocloud now?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/06/is-xai-a-neocloud-now/",
  },
  {
    date: "2026-05-06",
    headline: "How Elon Musk left OpenAI, according to Greg Brockman",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/06/how-elon-musk-left-openai-according-to-greg-brockman/",
  },
  {
    date: "2026-05-06",
    headline: "Google updates AI search to include quotes from Reddit and other sources",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/06/google-updates-ai-search-to-include-expert-advice-from-reddit-and-other-web-forums/",
  },
  {
    date: "2026-05-06",
    headline: "Khosla-backed robotics startup Genesis AI has gone full stack, demo shows",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/06/khosla-backed-robotics-startup-genesis-ai-has-gone-full-stack-demo-shows/",
  },
  {
    date: "2026-05-06",
    headline: "Marc Lore says that AI will soon enable anyone open a restaurant",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/05/marc-lore-says-that-ai-will-soon-enable-anyone-open-a-restaurant/",
  },
  {
    date: "2026-05-05",
    headline: "SAP bets $1.16B on 18-month-old German AI lab and says yes to NemoClaw",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/05/sap-bets-1-16b-on-18-month-old-german-ai-lab-and-says-yes-to-nemoclaw/",
  },
  {
    date: "2026-05-05",
    headline: "Apple plans to make iOS 27 a Choose Your Own Adventure of AI models",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/05/apple-plans-to-make-ios-27-a-choose-your-own-adventure-of-ai-models/",
  },
  {
    date: "2026-05-05",
    headline: "Pennsylvania sues Character.AI after a chatbot allegedly posed as a doctor",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/05/pennsylvania-sues-character-ai-after-a-chatbot-allegedly-posed-as-a-doctor/",
  },
  {
    date: "2026-05-05",
    headline: "OpenAI releases GPT-5.5 Instant, a new default model for ChatGPT",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/",
  },
  {
    date: "2026-05-05",
    headline: "As workers worry about AI, Nvidia&#8217;s Jensen Huang says AI is &#8216;creating an enormous…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/04/as-workers-worry-about-ai-nvidias-jensen-huang-says-ai-is-creating-an-enormous-number-of-jobs/",
  },
  {
    date: "2026-05-04",
    headline: "OpenAI&#8217;s cozy partner Cerebras is on track for a blockbuster IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/04/openais-cozy-partner-cerebras-is-on-track-for-a-blockbuster-ipo/",
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
