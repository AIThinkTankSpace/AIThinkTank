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
    date: "2026-10-24",
    headline: "The AI graveyard: a running list of projects and startups that didn&#8217;t make it",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/24/the-ai-graveyard-a-running-list-of-projects-and-startups-that-didnt-make-it/",
  },
  {
    date: "2026-10-24",
    headline: "Block&#8217;s new voice model sounds eerily human",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/",
  },
  {
    date: "2026-10-24",
    headline: "Forced to pick, Grok’s AI model chooses Republicans. OpenAI’s picks Democrats.",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/",
  },
  {
    date: "2026-10-24",
    headline: "Here are the top AI agents that can live in your text messages",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/24/all-the-ai-agents-that-can-live-in-your-text-messages/",
  },
  {
    date: "2026-10-24",
    headline: "Blue Planet III is keeping the rough edges in the age of AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/1018205/blue-planet-iii-authentic-organic-ai",
  },
  {
    date: "2026-10-23",
    headline: "OpenAI says it will no longer train its AI models on the live internet, citing “significant risks”",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/",
  },
  {
    date: "2026-10-23",
    headline: "Hottest toy for Christmas? Nvidia CEO plays with adorable Microduck robots, 20,000 sell",
    audiences: ["ai-for-kids", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/23/hottest-toy-for-christmas-nvidia-ceo-plays-with-adorable-microduck-robots-20000-sell/",
  },
  {
    date: "2026-10-22",
    headline: "Designing an AI serving harness built to last",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/22/1146109/designing-an-ai-serving-harness-built-to-last/",
  },
  {
    date: "2026-10-22",
    headline: "The Foundations of Scalable AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/22/1146103/the-foundations-of-scalable-ai/",
  },
  {
    date: "2026-10-22",
    headline: "Making the case for context-aware AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/22/1146812/making-the-case-for-context-aware-ai/",
  },
  {
    date: "2026-10-23",
    headline: "Uber rival inDrive eyes 2027 robotaxi tests in Central Asia with Pony.ai and Nvidia",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/22/uber-rival-indrive-eyes-2027-robotaxi-tests-in-central-asia-with-pony-ai-and-nvidia/",
  },
  {
    date: "2026-10-23",
    headline: "Left alone with nothing to do, AI agents started playing",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/22/left-alone-with-nothing-to-do-ai-agents-started-playing/",
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
