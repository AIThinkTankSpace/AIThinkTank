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
    date: "2026-06-13",
    headline: "Anthropic&#8217;s safety warnings may have just backfired — the government has pulled the plug…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai/",
  },
  {
    date: "2026-06-12",
    headline: "Meta&#8217;s months-old AI unit is a soul-crushing gulag, say the engineers stuck inside it",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/12/metas-months-old-ai-unit-is-a-soul-crushing-gulag-say-the-engineers-stuck-inside-it/",
  },
  {
    date: "2026-06-12",
    headline: "Chinese cybercrime operation that used AI to scam &#8216;hundreds of thousands of victims&#8217;…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/12/chinese-cybercrime-operation-that-used-ai-to-scam-hundreds-of-thousands-of-victims-sued-by-google/",
  },
  {
    date: "2026-06-12",
    headline: "Mistral is rumored to be raising €3B at €20B valuation",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/12/mistral-is-rumored-to-be-raising-e3b-at-e20-valuation/",
  },
  {
    date: "2026-06-12",
    headline: "SpaceX, Anthropic, and OpenAI’s hot IPO summer",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/spacex-anthropic-and-openais-hot-ipo-summer/",
  },
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
