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
    date: "2026-03-30",
    headline: "15% of Americans say they&#8217;d be willing to work for an AI boss, according to new poll",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/ai-work-boss-supervisor-us-quinnipiac-poll/",
  },
  {
    date: "2026-03-30",
    headline: "Popular AI gateway startup LiteLLM ditches controversial startup Delve",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/popular-ai-gateway-startup-litellm-ditches-controversial-startup-delve/",
  },
  {
    date: "2026-03-30",
    headline: "As more Americans adopt AI tools, fewer say they can trust the results",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/ai-trust-adoption-poll-more-americans-adopt-tools-fewer-say-they-can-trust-the-results/",
  },
  {
    date: "2026-03-30",
    headline: "Mantis Biotech is making &#8216;digital twins&#8217; of humans to help solve medicine&#8217;s…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/mantis-biotech-is-making-digital-twins-of-humans-to-help-solve-medicines-data-availability-problem/",
  },
  {
    date: "2026-03-30",
    headline: "ScaleOps raises $130M to improve computing efficiency amid AI demand",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/30/scaleops-130m-series-c-kubernetes-efficiency-ai-demand-funding/",
  },
  {
    date: "2026-03-30",
    headline: "Why OpenAI really shut down Sora",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/",
  },
  {
    date: "2026-03-29",
    headline: "Sora’s shutdown could be a reality check moment for AI video",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/29/soras-shutdown-could-be-a-reality-check-moment-for-ai-video/",
  },
  {
    date: "2026-03-30",
    headline: "Inside the stealthy startup that pitched brainless human clones",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/03/30/1134780/r3-bio-brainless-human-clones-full-body-replacement-john-schloendorn-aging-longevity/",
  },
  {
    date: "2026-03-30",
    headline: "All the latest in AI &#8216;music&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/903196/ai-music-suno-udio-art-lawsuit",
  },
  {
    date: "2026-03-30",
    headline: "Bluesky’s new app is an AI for customizing your feed",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/903190/bluesky-attie-ai-custom-feeds",
  },
  {
    date: "2026-03-28",
    headline: "Bluesky leans into AI with Attie, an app for building custom feeds",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/03/28/bluesky-leans-into-ai-with-attie-an-app-for-building-custom-feeds/",
  },
  {
    date: "2026-03-28",
    headline: "Stanford study outlines dangers of asking AI chatbots for personal advice",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/03/28/stanford-study-outlines-dangers-of-asking-ai-chatbots-for-personal-advice/",
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
