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
  {
    date: "2026-05-04",
    headline: "Image AI models now drive app growth, beating chatbot upgrades",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/04/image-ai-models-now-drive-app-growth-beating-chatbot-upgrades/",
  },
  {
    date: "2026-05-04",
    headline: "Elon Musk&#8217;s only AI expert witness at the OpenAI trial fears an AGI arms race",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/04/elon-musks-only-expert-witness-at-the-openai-trial-fears-an-agi-arms-race/",
  },
  {
    date: "2026-05-04",
    headline: "Sierra raises $950M as the race to own enterprise AI gets serious",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/04/sierra-raises-950m-as-the-race-to-own-enterprise-ai-gets-serious/",
  },
  {
    date: "2026-05-03",
    headline: "‘This is fine’ creator says AI startup stole his art",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/03/this-is-fine-creator-says-ai-startup-stole-his-art/",
  },
  {
    date: "2026-05-03",
    headline: "In Harvard study, AI offered more accurate emergency room diagnoses than two human doctors",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/05/03/in-harvard-study-ai-offered-more-accurate-diagnoses-than-emergency-room-doctors/",
  },
  {
    date: "2026-05-03",
    headline: "AI music is flooding streaming services — but who wants it?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/column/921599/ai-music-is-flooding-streaming-services-but-who-wants-it",
  },
  {
    date: "2026-05-02",
    headline: "Live updates from Elon Musk and Sam Altman’s court battle over the future of OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/917225/sam-altman-elon-musk-openai-lawsuit",
  },
  {
    date: "2026-05-02",
    headline: "AI-generated actors and scripts are now ineligible for Oscars",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/02/ai-generated-actors-and-scripts-are-now-ineligible-for-oscars/",
  },
  {
    date: "2026-05-02",
    headline: "The best AI dictation apps, tested and ranked",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/02/the-best-ai-powered-dictation-apps-of-2025/",
  },
  {
    date: "2026-05-01",
    headline: "The Download: a new Christian phone network, and debugging LLMs",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/01/1136762/the-download-christian-phone-network-debugging-llms/",
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
