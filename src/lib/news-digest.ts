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
    date: "2026-08-26",
    headline: "India&#8217;s Ringg gets backing from Peak XV as it pushes voice AI past the phone call",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/25/indias-ringg-gets-backing-from-peak-xv-as-it-pushes-voice-ai-past-the-phone-call/",
  },
  {
    date: "2026-08-26",
    headline: "Robotics startup Generalist reaches $3B valuation, sources say",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/25/robotics-startup-generalist-reaches-3b-valuation-sources-say/",
  },
  {
    date: "2026-08-26",
    headline: "OpenAI loses a top data center exec as stream of high-profile departures continues",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/25/openai-loses-a-top-data-center-exec-as-stream-of-high-profile-departures-continues/",
  },
  {
    date: "2026-08-25",
    headline: "Stability AI, maker of image generator Stable Diffusion, raises $76 million in fresh funding",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/25/stability-ai-maker-of-image-generator-stable-diffusion-raises-76-million-in-fresh-funding/",
  },
  {
    date: "2026-08-25",
    headline: "Claude Cowork finally remembers what you told the app in chat",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/25/claude-cowork-finally-remembers-what-you-told-the-app-in-chat/",
  },
  {
    date: "2026-08-25",
    headline: "Situational Awareness, star AI hedge fund that nearly imploded, now being probed by the SEC",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/24/situational-awareness-star-ai-hedge-fund-that-nearly-imploded-now-being-probed-by-the-sec/",
  },
  {
    date: "2026-08-24",
    headline: "Instinct’s powerful AI assistant is raising privacy and security concerns",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/24/instincts-powerful-ai-assistant-is-raising-privacy-and-security-concerns/",
  },
  {
    date: "2026-08-24",
    headline: "Valor, Point72 back General Intuition at $6B valuation as AI startup pushes into robotics",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/24/valor-point72-back-general-intuition-at-6b-valuation-as-ai-startup-pushes-into-robotics/",
  },
  {
    date: "2026-08-24",
    headline: "OpenAI is building AI agents for everything. Will everyone use them?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/24/openai-is-building-an-ai-agent-for-everything-will-everyone-use-them/",
  },
  {
    date: "2026-08-24",
    headline: "How to encourage smarter AI use in the classroom",
    audiences: ["ai-for-kids"],
    link: "https://www.technologyreview.com/2026/08/24/1142630/ai-school-classroom-policies/",
  },
  {
    date: "2026-08-23",
    headline: "Who&#8217;s behind the new ‘stealth model’ Ox Alpha?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/23/whos-behind-the-new-stealth-model-ox-alpha/",
  },
  {
    date: "2026-08-23",
    headline: "Is it legal to train AI models on copyrighted books? It’s complicated",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/23/is-it-legal-to-train-ai-models-on-copyrighted-books-its-complicated/",
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
