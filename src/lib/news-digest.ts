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
  {
    date: "2026-10-22",
    headline: "OpenAI working on new $30B raise at $1.25T valuation ahead of IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/22/openai-working-on-new-30b-raise-at-1-25t-valuation-ahead-of-ipo/",
  },
  {
    date: "2026-10-22",
    headline: "1Password launches a way for AI agents to log in on your behalf without seeing your password",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/22/1password-launches-a-way-for-ai-agents-to-log-in-on-your-behalf-without-seeing-your-password/",
  },
  {
    date: "2026-10-22",
    headline: "Canva releases its first image generation model",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/22/canva-releases-its-first-image-generation-model/",
  },
  {
    date: "2026-10-21",
    headline: "Blackstone&#8217;s Jas Khaira says fears over AI-buildout debt are overblown",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/21/blackstones-jas-khaira-says-fears-over-ai-buildout-debt-are-overblown/",
  },
  {
    date: "2026-10-21",
    headline: "Recursive launches Flint, a laptop coding model it says was largely built by AI",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/",
  },
  {
    date: "2026-10-21",
    headline: "While Amazon blocks AI agents, Walmart rolls out the welcome mat",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/21/while-amazon-blocks-ai-agents-walmart-rolls-out-the-welcome-mat/",
  },
  {
    date: "2026-10-21",
    headline: "PHP Armageddon: OpenAI, Google&#8217;s Wiz find ancient holes, panicking the internet",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/21/php-armageddon-openai-googles-wiz-find-ancient-holes-panicking-the-internet/",
  },
  {
    date: "2026-10-21",
    headline: "AI promises productivity, but for managers, it&#8217;s mostly a headache for now",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/21/ai-promises-productivity-but-for-managers-its-mostly-a-headache-for-now-says-new-survey/",
  },
  {
    date: "2026-10-20",
    headline: "Anthropic pitches AI safety bill that may block a model if 50+ people could be killed",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/anthropic-pitches-ai-safety-bill-that-may-block-a-model-if-50-people-could-be-killed/",
  },
  {
    date: "2026-10-20",
    headline: "Hugging Face CEO warns that Netflix&#8217;s OpenAI hack documentary isn&#8217;t accurate",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/hugging-face-ceo-warns-that-netflixs-openai-hack-documentary-isnt-accurate/",
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
