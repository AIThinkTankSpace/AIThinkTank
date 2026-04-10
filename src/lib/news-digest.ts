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
  {
    date: "2026-04-08",
    headline: "Tubi is the first streamer to launch a native app within ChatGPT",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/08/tubi-is-the-first-streamer-to-launch-a-native-app-within-chatgpt/",
  },
  {
    date: "2026-04-08",
    headline: "Astropad&#8217;s Workbench reimagines remote desktop for AI agents, not IT support",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/08/astropads-workbench-reimagines-remote-desktop-for-ai-agents-not-it-support/",
  },
  {
    date: "2026-04-08",
    headline: "OpenAI releases a new safety blueprint to address the rise in child sexual exploitation",
    audiences: ["ai-for-kids", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/08/openai-releases-a-new-safety-blueprint-to-address-the-rise-in-child-sexual-exploitation/",
  },
  {
    date: "2026-04-07",
    headline: "I can&#8217;t help rooting for tiny open source AI model maker Arcee",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/07/i-cant-help-rooting-for-tiny-open-source-ai-model-maker-arcee/",
  },
  {
    date: "2026-04-07",
    headline: "Firmus, the &#8216;Southgate&#8217; AI data center builder backed by Nvidia, hits $5.5B valuation",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/07/firmus-the-southgate-ai-datacenter-builder-backed-by-nvidia-hits-5-5b-valuation/",
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
