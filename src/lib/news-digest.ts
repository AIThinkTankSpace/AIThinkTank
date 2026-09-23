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
    date: "2026-09-23",
    headline: "&#8216;We&#8217;re already fighting yesterday&#8217;s battle&#8217;: Greece&#8217;s prime…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/22/were-already-fighting-yesterdays-battle-greeces-prime-minister-gets-candid-about-ai/",
  },
  {
    date: "2026-09-22",
    headline: "TechCrunch Founder Summit’s agenda revealed: Unlock fundraising, hiring, and AI insights in…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/22/techcrunch-founder-summits-agenda-revealed-unlock-fundraising-hiring-and-ai-insights-in-boston-on-november-4/",
  },
  {
    date: "2026-09-22",
    headline: "Snorkel AI triples valuation to $3.5B as demand for AI training data booms",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/22/snorkel-ai-triples-valuation-to-3-5b-as-demand-for-ai-training-data-booms/",
  },
  {
    date: "2026-09-22",
    headline: "Qualcomm launches two new smartphone chips with emphasis on AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/22/qualcomm-launches-two-new-smartphone-chips-with-emphasis-on-ai/",
  },
  {
    date: "2026-09-22",
    headline: "OpenAI launches GPT-6 Sol and Luna, boasting lower cost and fewer mistakes",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/",
  },
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
