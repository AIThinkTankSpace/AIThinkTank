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
    headline: "OpenAI launches new voice intelligence features in its API",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/07/openai-launches-new-voice-intelligence-features-in-its-api/",
  },
  {
    date: "2026-05-07",
    headline: "Voi founders&#8217; new AI startup Pit has become the latest rising star out of Stockholm",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/07/voi-founders-new-ai-startup-pit-has-become-the-latest-rising-star-out-of-stockholm/",
  },
  {
    date: "2026-05-07",
    headline: "OpenAI introduces new &#8216;Trusted Contact&#8217; safeguard for cases of possible self-harm",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/07/openai-introduces-new-trusted-contact-safeguard-for-cases-of-possible-self-harm/",
  },
  {
    date: "2026-05-07",
    headline: "Perplexity&#8217;s Personal Computer is now available to everyone on Mac",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/07/perplexitys-personal-computer-is-now-available-everyone-on-mac/",
  },
  {
    date: "2026-05-07",
    headline: "Elon Musk&#8217;s lawsuit is putting OpenAI&#8217;s safety record under the microscope",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/07/elon-musks-lawsuit-is-putting-openais-safety-record-under-the-microscope/",
  },
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
