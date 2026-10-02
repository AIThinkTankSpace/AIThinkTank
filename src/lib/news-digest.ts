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
  {
    date: "2026-10-01",
    headline: "OpenAI cuts ties with 3 safety researchers, WSJ reports",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/01/openai-cuts-ties-with-three-safety-researchers-wsj-reports/",
  },
  {
    date: "2026-10-01",
    headline: "Opus 5.5 loves to tell you &#8216;this matters&#8217; (and other AI writing tells)",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/01/opus-5-5-loves-to-tell-you-this-matters-and-other-ai-writing-tells/",
  },
  {
    date: "2026-10-01",
    headline: "Amazon releases its own Jev clone as decision models flood the web",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/01/amazon-releases-its-own-jev-clone-as-decision-models-flood-the-web/",
  },
  {
    date: "2026-10-01",
    headline: "Satlyt, founded by a former Google and SpaceX product manager, raises $8M to run AI on satellites",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/01/satlyt-founded-by-a-former-google-and-spacex-product-manager-raises-8m-to-run-ai-on-satellites/",
  },
  {
    date: "2026-09-30",
    headline: "Google releases Gemini 4 Argon, called its most powerful model yet",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/30/google-releases-gemini-4-argon-called-its-most-powerful-model-yet/",
  },
  {
    date: "2026-09-30",
    headline: "Valor, Atreides, and Sequoia back AI startup Flow Engineering at $750M valuation",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/30/valor-atreides-and-sequoia-back-ai-startup-flow-engineering-at-750m-valuation/",
  },
  {
    date: "2026-09-30",
    headline: "OpenAI&#8217;s Jev clone could help the frontier lab stop its swarming agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/30/openais-jev-clone-could-help-the-frontier-lab-stop-its-swarming-agents/",
  },
  {
    date: "2026-09-30",
    headline: "AI voice startup ElevenLabs doubles valuation to $22B",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/30/ai-voice-startup-elevenlabs-doubles-valuation-to-22b/",
  },
  {
    date: "2026-09-30",
    headline: "Airbnb adds AI search, more social features",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/30/airbnb-adds-ai-search-more-social-features/",
  },
  {
    date: "2026-09-29",
    headline: "The internet is convinced Elon Musk&#8217;s xAI trolled OpenAI&#8217;s &#8216;Dots&#8217; launch",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/29/the-internet-is-convinced-elon-musks-xai-trolled-openais-dots-launch/",
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
