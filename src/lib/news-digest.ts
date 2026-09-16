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
    date: "2026-09-16",
    headline: "We don&#8217;t need AI regulation — leave safety to us, Nvidia&#8217;s Jensen Huang says",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/15/we-dont-need-ai-regulation-leave-safety-to-us-nvidias-jensen-huang-says/",
  },
  {
    date: "2026-09-15",
    headline: "The AI data center boom is colliding with cities scarred by big industry",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/15/the-ai-data-center-boom-is-colliding-with-cities-scarred-by-big-industry/",
  },
  {
    date: "2026-09-15",
    headline: "Meta now lets AI agents handle the boring parts of WhatsApp Business setup",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/15/meta-now-lets-ai-agents-handle-the-boring-parts-of-whatsapp-business-setup/",
  },
  {
    date: "2026-09-15",
    headline: "The AI graveyard: a running list of projects and startups that didn&#8217;t make it",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/15/the-ai-graveyard-a-running-list-of-projects-and-startups-that-didnt-make-it/",
  },
  {
    date: "2026-09-15",
    headline: "AI agents now have a place to snitch",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/15/ai-agents-now-have-a-place-to-snitch/",
  },
  {
    date: "2026-09-14",
    headline: "Nvidia CEO Jensen Huang tells Trump &#8216;we&#8217;re not going to let [an AI slowdown]…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/14/nvidia-ceo-jensen-huang-tells-trump-were-not-going-to-let-an-ai-slowdown-happen/",
  },
  {
    date: "2026-09-14",
    headline: "OpenAI buys smartphone camera maker Glass Imaging for $300 million, report says",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/14/openai-buys-smartphone-camera-maker-glass-imaging-for-300-million-report-says/",
  },
  {
    date: "2026-09-14",
    headline: "With iOS 27, I&#8217;m actually using Siri again",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/2026/09/14/with-ios-27-im-actually-using-siri-again/",
  },
  {
    date: "2026-09-14",
    headline: "Microsoft&#8217;s new AI &#8216;code of conduct&#8217; tells models not to hack systems or trick…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/14/microsofts-new-ai-code-of-conduct-tells-models-not-to-hack-systems-or-trick-humans/",
  },
  {
    date: "2026-09-14",
    headline: "Only at TechCrunch Disrupt 2026: What happens when OpenAI ships your roadmap?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/14/only-at-techcrunch-disrupt-2026-what-happens-when-openai-ships-your-roadmap/",
  },
  {
    date: "2026-09-13",
    headline: "What&#8217;s behind the AI industry’s latest warnings of doom?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/13/whats-behind-the-ai-industrys-latest-warnings-of-doom/",
  },
  {
    date: "2026-09-13",
    headline: "Obama urges Democrats to have a ‘clear plan’ for AI safeguards",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/13/obama-urges-democrats-to-have-a-clear-plan-for-ai-safeguards/",
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
