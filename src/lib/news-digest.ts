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
    date: "2026-09-19",
    headline: "Tilly Norwood&#8217;s press tour is going about as well as you&#8217;d expect for an AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/18/tilly-norwoods-press-tour-is-going-about-as-well-as-youd-expect-for-an-ai/",
  },
  {
    date: "2026-09-18",
    headline: "A startup that builds other startups raised $100M and is all-in on physical AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/18/a-startup-that-builds-other-startups-raised-100m-and-is-all-in-on-physical-ai/",
  },
  {
    date: "2026-09-18",
    headline: "Anthropic is operating a lab that conducts biology experiments",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/18/anthropic-is-operating-a-lab-that-conducts-biology-experiments/",
  },
  {
    date: "2026-09-18",
    headline: "AI hallucination nearly triggers US military operation",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/18/ai-hallucination-nearly-triggers-us-military-operation/",
  },
  {
    date: "2026-09-18",
    headline: "Anthropic&#8217;s first embedded evaluator is … Accenture?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/18/anthropics-first-embedded-evaluator-is-accenture/",
  },
  {
    date: "2026-09-17",
    headline: "Crusoe raises $3.9B to build massive data centers and small modular &#8216;AI factories&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/17/crusoe-raises-3-9b-to-build-massive-data-centers-and-small-modular-ai-factories/",
  },
  {
    date: "2026-09-17",
    headline: "PrismML hopes its tiny LLM will change how we all use AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/17/prismml-hopes-its-tiny-llm-could-change-how-we-all-use-ai/",
  },
  {
    date: "2026-09-17",
    headline: "The FAA&#8217;s plan to fix air traffic? $875M worth of AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/17/the-faas-plan-to-fix-air-traffic-875-million-worth-of-ai/",
  },
  {
    date: "2026-09-17",
    headline: "The fix for rogue AI agents could be more AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/17/the-fix-for-rogue-ai-agents-could-be-more-ai/",
  },
  {
    date: "2026-09-17",
    headline: "OpenAI caught its models leaving notes to successors to hide bad behavior",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/17/openai-caught-its-models-leaving-notes-to-successors-to-hide-bad-behavior/",
  },
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
