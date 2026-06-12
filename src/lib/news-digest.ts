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
    date: "2026-06-12",
    headline: "Cheaper, faster, and culturally aware, Avataar&#8217;s video AI is built for India&#8217;s scale",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/11/cheaper-faster-and-culturally-aware-avataars-video-ai-is-built-for-indias-scale/",
  },
  {
    date: "2026-06-12",
    headline: "Theker just raised $85M to build the factory robot that doesn&#8217;t specialize in anything",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/11/theker-just-raised-85m-to-build-the-factory-robot-that-doesnt-specialize-in-anything/",
  },
  {
    date: "2026-06-12",
    headline: "Jeff Bezos&#8217;s Prometheus raises $12B to build an &#8216;artificial general engineer&#8217;…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/",
  },
  {
    date: "2026-06-11",
    headline: "Deezer&#8217;s new tool can identify AI music from Spotify, Apple Music, and others",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/11/deezers-new-tool-can-identify-ai-music-from-spotify-apple-music-and-others/",
  },
  {
    date: "2026-06-11",
    headline: "DoorDash&#8217;s new AI chatbot lets you order with prompts and photos",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/11/doordashs-new-ai-chatbot-lets-you-order-with-prompts-and-photos/",
  },
  {
    date: "2026-06-11",
    headline: "Opendoor&#8217;s India exit is fueling a bigger conversation about AI and outsourcing",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/opendoors-india-exit-is-fueling-a-bigger-conversation-about-ai-and-outsourcing/",
  },
  {
    date: "2026-06-11",
    headline: "Anthropic&#8217;s Dario Amodei has just one direct report",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/anthropics-dario-amodei-has-just-one-direct-report/",
  },
  {
    date: "2026-06-10",
    headline: "xAI fired an engineer who raised alarms about Grok safety, new lawsuit claims",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/xai-fired-an-engineer-who-raised-alarms-about-grok-safety-new-lawsuit-claims/",
  },
  {
    date: "2026-06-10",
    headline: "Fresh off bond sale, Amazon borrows $17.5B from banks as AI spending continues",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/fresh-off-bond-sale-amazon-borrows-17-5-billion-from-banks-as-ai-spending-continues/",
  },
  {
    date: "2026-06-10",
    headline: "‘AI-pilled’ firms spend $7,500 per employee each month on AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/ai-pilled-firms-spend-7500-per-employee-each-month-on-ai/",
  },
  {
    date: "2026-06-10",
    headline: "Meta signs first AI data center deal in India with Reliance",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/10/meta-signs-first-ai-data-center-deal-in-india-with-reliance/",
  },
  {
    date: "2026-06-10",
    headline: "Google just fired a warning shot in the AI subscription price wars",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/09/google-just-fired-a-warning-shot-in-the-ai-subscription-price-wars/",
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
