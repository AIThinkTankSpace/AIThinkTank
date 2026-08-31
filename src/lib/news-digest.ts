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
    date: "2026-08-31",
    headline: "The U.S. is building barriers around drones and robots, but China has scale to get around them",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/30/the-u-s-is-building-barriers-around-drones-and-robots-china-still-has-scale/",
  },
  {
    date: "2026-08-30",
    headline: "Caterpillar is bringing to AI deployment what it learned from automating mining",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/30/caterpillar-is-bringing-to-ai-deployment-what-it-learned-from-automating-mining/",
  },
  {
    date: "2026-08-30",
    headline: "Inside Meta’s push to put robots to work in data centers",
    audiences: ["ai-for-corporates"],
    link: "https://arstechnica.com/ai/2026/08/inside-metas-push-to-put-robots-to-work-in-data-centers/",
  },
  {
    date: "2026-08-29",
    headline: "Sony Music, Warner sue Anthropic, alleging a &#8220;brazen campaign&#8221; of intellectual…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/29/sony-music-warner-sue-anthropic-alleging-a-brazen-campaign-of-intellectual-property-theft/",
  },
  {
    date: "2026-08-29",
    headline: "Nvidia’s AI advantage is moving beyond the GPU",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/29/nvidias-ai-advantage-is-moving-beyond-the-gpu/",
  },
  {
    date: "2026-08-29",
    headline: "Sony Music and Warner Chappell are suing Anthropic",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/986438/sony-music-warner-chappell-anthropic-lawsuit-copyright",
  },
  {
    date: "2026-08-28",
    headline: "Musicians-turned-detectives are hunting for AI grifters",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/entertainment/985866/h4rris-nihil-young-edm-suno-ai",
  },
  {
    date: "2026-08-28",
    headline: "Trump’s EPA wants to let data centers hide their air pollution",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/986176/data-center-pollution-epa-rule-change-air-permit",
  },
  {
    date: "2026-08-28",
    headline: "An Anthropic researcher just gave us a peek at self-improving AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/",
  },
  {
    date: "2026-08-28",
    headline: "Open-weight AI companies are the Valley&#8217;s hottest acquisition targets",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/28/open-weight-ai-companies-are-the-valleys-hottest-acquisition-targets/",
  },
  {
    date: "2026-08-27",
    headline: "A startup claims it’s found a drug to make your blood young",
    audiences: ["ai-for-kids", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/27/1143037/startup-claims-its-found-a-drug-to-make-your-blood-young/",
  },
  {
    date: "2026-08-27",
    headline: "The Download: inside OpenAI&#8217;s Hugging Face hack, and a new EV takes on the US",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/27/1143033/the-download-openai-hugging-face-hack-slate-truck-ev/",
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
