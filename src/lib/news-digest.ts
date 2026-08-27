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
    date: "2026-08-27",
    headline: "Google&#8217;s AI Mode can now track flight prices, help book hotels, and more",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/googles-ai-mode-can-now-track-flight-prices-help-book-hotels-and-more/",
  },
  {
    date: "2026-08-27",
    headline: "Hugging Face is selling a cute $399 open source duck robot, Microduck",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/hugging-face-is-selling-a-cute-399-open-source-duck-robot-microduck/",
  },
  {
    date: "2026-08-27",
    headline: "AI&#8217;s memory crunch is coming for Android apps",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/ais-memory-crunch-is-coming-for-android-apps/",
  },
  {
    date: "2026-08-27",
    headline: "Here’s all the times AI has gone rogue and hacked other companies",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/heres-all-the-times-ai-has-gone-rogue-and-hacked-other-companies/",
  },
  {
    date: "2026-08-27",
    headline: "Plaud&#8217;s new earphones come with an eSIM-enabled case for talking to AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/plauds-new-earphones-come-with-an-esim-enabled-case-for-talking-to-ai-agents/",
  },
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
