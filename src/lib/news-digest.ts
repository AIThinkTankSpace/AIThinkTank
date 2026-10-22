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
  {
    date: "2026-10-20",
    headline: "Anthropic’s cloud partnerships are getting messy",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/anthropics-cloud-partnerships-are-getting-messy/",
  },
  {
    date: "2026-10-20",
    headline: "SpaceX&#8217;s AI business is beating expectations",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/spacexs-ai-business-is-beating-expectations/",
  },
  {
    date: "2026-10-20",
    headline: "OpenAI acquires startup Orchestra Bio⁠ to beef up its biotech business",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/openai-acquires-startup-orchestra-bio%e2%81%a0-to-beef-up-its-biotech-business/",
  },
  {
    date: "2026-10-20",
    headline: "Mamdani says feds have abdicated on AI, urges New Yorkers to push back",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/19/mamdani-says-feds-have-abdicated-on-ai-urges-new-yorkers-to-push-back/",
  },
  {
    date: "2026-10-19",
    headline: "Nscale and Anthropic are reportedly in talks for yet another $45B compute deal",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/19/nscale-and-anthropic-are-reportedly-in-talks-for-yet-another-45-billion-compute-deal/",
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
