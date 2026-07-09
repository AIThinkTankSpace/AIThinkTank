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
    date: "2026-07-08",
    headline: "SpaceXAI releases Grok 4.5, which Elon describes as an &#8216;Opus-class model&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/",
  },
  {
    date: "2026-07-08",
    headline: "This startup thinks robotics is about to have its ChatGPT moment",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/this-startup-thinks-robotics-is-about-to-have-its-chatgpt-moment/",
  },
  {
    date: "2026-07-08",
    headline: "Google Photos adds a new AI &#8216;Video Remix&#8217; tool",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/google-photos-adds-a-new-ai-video-remix-tool/",
  },
  {
    date: "2026-07-08",
    headline: "Why this CEO thinks video games make better training data than the internet",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/video/why-this-ceo-thinks-video-games-make-better-training-data-than-the-internet/",
  },
  {
    date: "2026-07-08",
    headline: "Meta wants its AI glasses to seem less creepy. Its AI strategy says otherwise.",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/meta-wants-its-ai-glasses-to-seem-less-creepy-its-ai-strategy-says-otherwise/",
  },
  {
    date: "2026-07-08",
    headline: "Hot French startup ZML releases free product to speed inference across lots of AI chips",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/hot-french-startup-zml-releases-free-product-to-speed-inference-across-lots-of-ai-chips/",
  },
  {
    date: "2026-07-08",
    headline: "AI chip maker SambaNova raises $1B at $11B valuation, 5 months after last mega round",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/sambanova-draws-1b-at-11b-valuation-in-series-f-first-close/",
  },
  {
    date: "2026-07-07",
    headline: "Meta just launched a new AI generator, Muse Image, and users are already pushing back over use…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/07/meta-rolls-out-muse-a-new-ai-image-generator/",
  },
  {
    date: "2026-07-07",
    headline: "Why the rise of open source AI isn&#8217;t hurting Anthropic &#8230; yet",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/07/why-the-rise-of-open-source-ai-isnt-hurting-anthropic-yet/",
  },
  {
    date: "2026-07-07",
    headline: "Microsoft joins AI cost-cutting trend by relying more on its own models",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/07/microsoft-joins-ai-cost-cutting-trend-by-relying-more-on-its-own-models/",
  },
  {
    date: "2026-07-07",
    headline: "The first American autonomous ground vehicles are fighting in Ukraine",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/07/the-first-american-autonomous-ground-vehicles-are-fighting-in-ukraine/",
  },
  {
    date: "2026-07-06",
    headline: "The &#8216;first&#8217; AI-run ransomware attack still needed a human",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human/",
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
