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
    date: "2026-09-17",
    headline: "Iceland-based Treble raises $18 million for its voice simulation platform",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/16/iceland-based-treble-raises-18-million-for-its-voice-simulation-platform/",
  },
  {
    date: "2026-09-17",
    headline: "Your startup’s next teammate might be an AI agent: Gusto, Insight Partners, and Leland explain…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/16/your-startups-next-teammate-might-be-an-ai-agent-gusto-insight-partners-and-leland-explain-what-that-changes-at-techcrunch-disrupt-2026/",
  },
  {
    date: "2026-09-17",
    headline: "Snap tries to make the case again for its $2,200 smart glasses",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/16/snap-tries-to-make-the-case-again-for-its-2200-smart-glasses/",
  },
  {
    date: "2026-09-16",
    headline: "Al Gore says the real AI risk isn&#8217;t data centers",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/16/al-gore-has-a-surprisingly-calm-take-on-the-ai-data-center-backlash/",
  },
  {
    date: "2026-09-16",
    headline: "Anthropic and OpenAI want to embed safety evaluators. Will they really be independent?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/16/anthropic-and-openai-want-to-embed-safety-evaluators-will-they-really-be-independent/",
  },
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
