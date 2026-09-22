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
    date: "2026-09-21",
    headline: "The man who built Apple&#8217;s stores doesn&#8217;t buy Silicon Valley&#8217;s bet on AI shopping",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/21/the-man-who-built-apples-stores-doesnt-buy-silicon-valleys-bet-on-ai-shopping/",
  },
  {
    date: "2026-09-21",
    headline: "OpenAI forms math advisory group as its AI resolves more than 100 open problems",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/21/openai-forms-math-advisory-group-as-its-ai-resolves-more-than-100-open-problems/",
  },
  {
    date: "2026-09-21",
    headline: "Meta&#8217;s Muse is outpacing ChatGPT’s early mobile launch",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/21/metas-muse-is-outpacing-chatgpts-early-mobile-launch/",
  },
  {
    date: "2026-09-21",
    headline: "Meta&#8217;s AI agent has been blocked from using Amazon.com",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/21/metas-ai-agent-has-been-blocked-from-using-amazon-com/",
  },
  {
    date: "2026-09-21",
    headline: "With Tabby, a former accountant is using AI to make accountants obsolete",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/21/with-tabby-a-former-accountant-is-using-ai-to-make-accountants-obsolete/",
  },
  {
    date: "2026-09-20",
    headline: "World model companies are keeping a lot of secrets",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/20/world-model-companies-are-keeping-a-lot-of-secrets/",
  },
  {
    date: "2026-09-20",
    headline: "Is the AI industry really ready to slow down?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/20/is-the-ai-industry-really-ready-to-slow-down/",
  },
  {
    date: "2026-09-20",
    headline: "An undercover Google analyst infiltrated a notorious supply-chain hacking gang",
    audiences: ["ai-for-corporates"],
    link: "https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/",
  },
  {
    date: "2026-09-21",
    headline: "UN says AI safeguards can’t wait for certainty",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/998090/un-ai-panel-hugging-face-hack-precautionary-principle",
  },
  {
    date: "2026-09-21",
    headline: "Amazon doesn’t trust Meta’s Muse AI agent",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/998078/amazon-blocks-meta-muse-ai-agent-shopping",
  },
  {
    date: "2026-09-19",
    headline: "Trump says it&#8217;s time to rebrand AI with a new name — and he&#8217;s also creating an AI Force",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/19/trump-suggests-rebranding-ai-with-a-new-name-says-hes-also-creating-an-ai-force/",
  },
  {
    date: "2026-09-19",
    headline: "Google’s Gemini is the latest AI model to hack other companies",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/19/googles-gemini-is-the-latest-ai-model-to-hack-other-companies/",
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
