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
    date: "2026-07-11",
    headline: "OpenAI bets on families as ChatGPT goes deeper into households",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/11/openai-bets-on-families-as-chatgpt-goes-deeper-into-households/",
  },
  {
    date: "2026-07-10",
    headline: "The Download: Claude&#8217;s inner workings and OpenAI&#8217;s &#8220;super app&#8221;",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/10/1140316/the-download-anthropic-claude-hidden-space-openai-super-app/",
  },
  {
    date: "2026-07-10",
    headline: "Meta turns off the Instagram feature that let users make AI deepfakes of public accounts",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/964416/meta-instagram-ai-muse-image-deepfakes",
  },
  {
    date: "2026-07-10",
    headline: "Apple sues OpenAI for allegedly stealing hardware secrets",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/964350/apple-openai-lawsuit-trade-secrets",
  },
  {
    date: "2026-07-10",
    headline: "Instagram’s Adam Mosseri: If you don&#8217;t like AI, &#8216;then you shouldn&#8217;t have it in…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/963961/instagram-adam-mosseri-ai-feed-filters",
  },
  {
    date: "2026-07-10",
    headline: "Meta removes controversial AI feature on Instagram after backlash",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/",
  },
  {
    date: "2026-07-10",
    headline: "Apple sues OpenAI over alleged trade secret theft",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/",
  },
  {
    date: "2026-07-10",
    headline: "Open source AI matters more than ever, according to Hugging Face&#8217;s Clem Delangue",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/podcast/open-source-ai-matters-more-than-ever-according-to-hugging-faces-clem-delangue/",
  },
  {
    date: "2026-07-10",
    headline: "SK Hynix raises $26.5B in the biggest foreign IPO in US history, is urged to build new US fabs",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/10/sk-hynix-raises-26-5b-in-the-biggest-foreign-ipo-in-us-history-is-urged-to-build-new-us-fabs/",
  },
  {
    date: "2026-07-10",
    headline: "Hugging Face&#8217;s CEO on why companies are done renting their AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/10/hugging-faces-ceo-on-why-companies-are-done-renting-their-ai/",
  },
  {
    date: "2026-07-10",
    headline: "OpenAI says GPT 5.6 is the &#8216;preferred model&#8217; for Microsoft Copilot 365 amid breakup…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/09/openai-says-gpt-5-6-is-the-preferred-model-for-microsoft-copilot-amid-breakup-chatter/",
  },
  {
    date: "2026-07-09",
    headline: "Fidji Simo steps down from OpenAI&#8217;s no. 2 role",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/09/fidji-simo-steps-down-from-openais-no-2-role/",
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
