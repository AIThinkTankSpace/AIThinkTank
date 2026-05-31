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
    date: "2026-05-30",
    headline: "&#8216;What a joke&#8217;: Github Copilot&#8217;s new token-based billing spurs consternation…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/",
  },
  {
    date: "2026-05-30",
    headline: "Meta is reportedly developing an AI pendant",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/30/meta-is-reportedly-developing-an-ai-pendant/",
  },
  {
    date: "2026-05-30",
    headline: "I put Google&#8217;s 24/7 AI assistant Gemini Spark to work, and it&#8217;s actually pretty useful",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/30/i-put-googles-24-7-ai-assistant-gemini-spark-to-work-and-its-actually-pretty-useful/",
  },
  {
    date: "2026-05-29",
    headline: "How the Pope’s Magnifica Humanitas offers a template for individuals to meet the AI moment",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/29/1138107/how-the-popes-magnifica-humanitas-offers-a-template-for-individuals-to-meet-the-ai-moment/",
  },
  {
    date: "2026-05-29",
    headline: "AI grifters are creating fake Black people to sell Shein junk",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/938844/ai-tiktok-shop-blackface-shein-dropshipping",
  },
  {
    date: "2026-05-29",
    headline: "Coders are refusing to work without AI — and that could come back to bite them",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/29/coders-are-refusing-to-work-without-ai-and-that-could-come-back-to-bite-them/",
  },
  {
    date: "2026-05-29",
    headline: "So you&#8217;ve heard these AI terms and nodded along; let&#8217;s fix that",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/29/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/",
  },
  {
    date: "2026-05-29",
    headline: "What happens when companies become too AI-pilled?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/video/what-happens-when-companies-become-too-ai-pilled/",
  },
  {
    date: "2026-05-29",
    headline: "After Nvidia&#8217;s $20B not-acqui-hire, AI chip startup Groq reportedly raising $650M",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/29/after-nvidias-20b-not-acqui-hire-ai-chip-startup-groq-reportedly-raising-650m/",
  },
  {
    date: "2026-05-29",
    headline: "Cognition&#8217;s Scott Wu says AI coding agents shouldn&#8217;t replace humans",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/29/cognitions-scott-wu-says-ai-coding-agents-shouldnt-replace-humans/",
  },
  {
    date: "2026-05-29",
    headline: "Glean&#8217;s top line crosses $300M as AI budget-cutting becomes its major selling point",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/28/gleans-top-line-crosses-300m-as-ai-budget-cutting-becomes-its-major-selling-point/",
  },
  {
    date: "2026-05-28",
    headline: "Asana acquires no-code agent-builder StackAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/28/asana-acquires-no-code-agent-builder-stack-ai/",
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
