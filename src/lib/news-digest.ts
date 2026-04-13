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
    date: "2026-04-12",
    headline: "Trump officials may be encouraging banks to test Anthropic’s Mythos model",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/12/trump-officials-may-be-encouraging-banks-to-test-anthropics-mythos-model/",
  },
  {
    date: "2026-04-12",
    headline: "From LLMs to hallucinations, here&#8217;s a simple guide to common AI terms",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/12/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/",
  },
  {
    date: "2026-04-12",
    headline: "At the HumanX conference, everyone was talking about Claude",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/12/at-the-humanx-conference-everyone-was-talking-about-claude/",
  },
  {
    date: "2026-04-11",
    headline: "Your article about AI doesn’t need AI art",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/910460/new-yorker-david-szauder-illustration-generative-ai",
  },
  {
    date: "2026-04-10",
    headline: "The Iranian Lego AI video creators credit their virality to &#8216;heart&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/909948/explosive-media-lego-iran-war-trump-netanyahu",
  },
  {
    date: "2026-04-10",
    headline: "Fear and loathing at OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/podcast/909621/openai-sam-altman-drama-vergecast",
  },
  {
    date: "2026-04-10",
    headline: "Gen Z’s love-hate relationship with AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/909687/gen-z-doesnt-like-ai-gallup",
  },
  {
    date: "2026-04-10",
    headline: "Anthropic temporarily banned OpenClaw&#8217;s creator from accessing Claude",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/",
  },
  {
    date: "2026-04-10",
    headline: "Stalking victim sues OpenAI, claims ChatGPT fueled her abuser&#8217;s delusions and ignored her…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/10/stalking-victim-sues-openai-claims-chatgpt-fueled-her-abusers-delusions-and-ignored-her-warnings/",
  },
  {
    date: "2026-04-10",
    headline: "The Download: an exclusive Jeff VanderMeer story and AI models too scary to release",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/10/1135618/the-download-jeff-vandermeer-short-story-and-ai-models-too-danger-to-release/",
  },
  {
    date: "2026-04-09",
    headline: "The Download: AstroTurf wars and exponential AI growth",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/09/1135514/the-download-astroturf-wars-exponential-ai-growth-desalination-numbers/",
  },
  {
    date: "2026-04-10",
    headline: "20-year-old man arrested for allegedly throwing a Molotov cocktail at Sam Altman’s house",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/910393/openai-sam-altman-house-molotov-cocktail",
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
