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
    date: "2026-04-23",
    headline: "Bret Taylor&#8217;s Sierra buys YC-backed AI startup Fragment",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/bret-taylors-sierra-buys-yc-backed-ai-startup-fragment/",
  },
  {
    date: "2026-04-23",
    headline: "Meet Noscroll, an AI bot that does your doomscrolling for you",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/meet-noscroll-an-ai-bot-that-does-your-doomscrolling-for-you/",
  },
  {
    date: "2026-04-23",
    headline: "OpenAI releases GPT-5.5, bringing company one step closer to an AI &#8216;super app&#8217;",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/openai-chatgpt-gpt-5-5-ai-model-superapp/",
  },
  {
    date: "2026-04-23",
    headline: "Era raises $11M to build a software platform for AI gadgets",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/era-computer-raises-11m-to-build-a-software-platform-for-ai-gadgets/",
  },
  {
    date: "2026-04-23",
    headline: "AI galaxy hunters are adding to the global GPU crunch",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/23/ai-galaxy-hunters-are-adding-to-the-global-gpu-crunch/",
  },
  {
    date: "2026-04-23",
    headline: "India&#8217;s app market is booming — but global platforms are capturing most of the gains",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/22/indias-app-market-is-booming-but-global-platforms-are-capturing-most-of-the-gains/",
  },
  {
    date: "2026-04-22",
    headline: "Google updates Workspace to make AI your new office intern",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/22/google-updates-workspace-to-make-ai-your-new-office-intern/",
  },
  {
    date: "2026-04-22",
    headline: "Hands on with X&#8217;s new AI-powered custom feeds",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/22/hands-on-with-xs-new-ai-powered-custom-feeds/",
  },
  {
    date: "2026-04-22",
    headline: "How SpaceX preempted a $2B fundraise with a $60B buyout offer",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/22/how-spacex-preempted-a-2b-fundraise-with-a-60b-buyout-offer/",
  },
  {
    date: "2026-04-22",
    headline: "Google Cloud launches two new AI chips to compete with Nvidia",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/22/google-cloud-next-new-tpu-ai-chips-compete-with-nvidia/",
  },
  {
    date: "2026-04-21",
    headline: "Meta will record employees&#8217; keystrokes and use it to train its AI models",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/21/meta-will-record-employees-keystrokes-and-use-it-to-train-its-ai-models/",
  },
  {
    date: "2026-04-21",
    headline: "Unauthorized group has gained access to Anthropic&#8217;s exclusive cyber tool Mythos, report claims",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/21/unauthorized-group-has-gained-access-to-anthropics-exclusive-cyber-tool-mythos-report-claims/",
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
