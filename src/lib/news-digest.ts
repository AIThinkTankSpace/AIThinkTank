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
  {
    date: "2026-04-09",
    headline: "ChatGPT finally offers $100/month Pro plan",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/09/chatgpt-pro-plan-100-month-codex/",
  },
  {
    date: "2026-04-09",
    headline: "Florida AG announces investigation into OpenAI over shooting that allegedly involved ChatGPT",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/09/florida-ag-investigation-openai-chatgpt-shooting/",
  },
  {
    date: "2026-04-09",
    headline: "Meta AI app climbs to No. 5 on the App Store after Muse Spark launch",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/09/meta-ai-app-climbs-to-no-5-on-the-app-store-after-muse-spark-launch/",
  },
  {
    date: "2026-04-09",
    headline: "Is Anthropic limiting the release of Mythos to protect the internet — or Anthropic?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/09/is-anthropic-limiting-the-release-of-mythos-to-protect-the-internet-or-anthropic/",
  },
  {
    date: "2026-04-09",
    headline: "Google and Intel deepen AI infrastructure partnership",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/09/google-and-intel-deepen-ai-infrastructure-partnership/",
  },
  {
    date: "2026-04-08",
    headline: "Poke makes using AI agents as easy as sending a text",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/08/poke-makes-ai-agents-as-easy-as-sending-a-text/",
  },
  {
    date: "2026-04-08",
    headline: "AWS boss explains why investing billions in both Anthropic and OpenAI is an OK conflict",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/08/aws-boss-explains-why-investing-billions-in-both-anthropic-and-openai-is-an-ok-conflict/",
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
