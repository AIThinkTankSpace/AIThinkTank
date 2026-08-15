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
    date: "2026-08-14",
    headline: "Google will now allow users to remove visible watermark from its AI generations",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/14/google-will-now-allow-users-to-remove-visible-watermark-from-its-ai-generations/",
  },
  {
    date: "2026-08-14",
    headline: "Does Mark Zuckerberg really believe AI is &#8216;for everyone&#8217;?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/video/does-mark-zuckerberg-really-believe-ai-is-for-everyone/",
  },
  {
    date: "2026-08-14",
    headline: "Kog is going deeper to squeeze more inference out of GPUs",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/14/kog-is-going-deeper-to-squeeze-more-inference-out-of-gpus/",
  },
  {
    date: "2026-08-14",
    headline: "Meta&#8217;s &#8216;open&#8217; AI, and a $250M deal gone very wrong",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/metas-open-ai-and-a-250m-deal-gone-very-wrong/",
  },
  {
    date: "2026-08-13",
    headline: "The Download: kids&#8217; thoughts on AI, and female clones of male mice",
    audiences: ["ai-for-kids"],
    link: "https://www.technologyreview.com/2026/08/13/1141896/the-download-kids-thoughts-on-ai-female-clones-male-mice/",
  },
  {
    date: "2026-08-13",
    headline: "Writer introduces new AI model and upgraded harness to contain token costs",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/13/writer-introduces-new-ai-model-and-upgraded-harness-to-contain-token-costs/",
  },
  {
    date: "2026-08-13",
    headline: "Databricks wanted to raise $1B, investors wanted $15B. It settled on $5B at a $190B valuation.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/13/databricks-wanted-to-raise-1b-investors-wanted-15b-it-settled-on-5b-at-a-190b-valuation/",
  },
  {
    date: "2026-08-13",
    headline: "OpenAI introduces &#8216;Ultrafast,&#8217; a new mode that makes GPT-5.6 Sol work at 14x the speed",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/13/openai-introduces-ultrafast-a-new-mode-that-makes-gpt-5-6-sol-work-at-14x-the-speed/",
  },
  {
    date: "2026-08-13",
    headline: "IBM partners with OpenAI to bolster enterprise AI push",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/13/ibm-partners-with-openai-to-bolster-enterprise-ai-push/",
  },
  {
    date: "2026-08-13",
    headline: "Anthropic set AI agents loose on the same task. They started a turf war.",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/13/anthropic-set-ai-agents-loose-on-the-same-task-they-started-a-turf-war/",
  },
  {
    date: "2026-08-12",
    headline: "Some Claude users are mad that Anthropic&#8217;s new watermarks will catch them using it at…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/12/some-claude-users-are-mad-that-anthropics-new-watermarks-will-catch-them-cheating-at-their-jobs-classes/",
  },
  {
    date: "2026-08-12",
    headline: "Amazon will train on Twitch streamers&#8217; content by default, unless they opt out",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/12/amazon-will-train-on-twitch-streamers-content-by-default-unless-they-opt-out/",
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
