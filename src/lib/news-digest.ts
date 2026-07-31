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
    date: "2026-07-31",
    headline: "Anthropic says its own AI models breached three companies during security tests",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/30/anthropic-says-its-own-ai-models-breached-three-companies-during-security-tests/",
  },
  {
    date: "2026-07-30",
    headline: "AI hedge fund Situational Awareness may have sold its public portfolio, but it still has its…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/30/ai-hedge-fund-situational-awareness-may-have-sold-its-public-portfolio-but-it-still-has-its-anthropic-shares/",
  },
  {
    date: "2026-07-30",
    headline: "Reddit reports a solid quarter but shows signs of AI&#8217;s impact",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/30/reddit-reports-a-solid-quarter-but-shows-signs-of-ais-impact/",
  },
  {
    date: "2026-07-30",
    headline: "Investors love AI, as long as you’re a cloud host",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/30/investors-love-ai-as-long-as-youre-a-cloud-host/",
  },
  {
    date: "2026-07-30",
    headline: "Judge says Trump admin still lacks evidence for Anthropic ‘supply-chain risk’ label",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/30/judge-says-trump-admin-still-lacks-evidence-for-anthropic-supply-chain-risk-label/",
  },
  {
    date: "2026-07-30",
    headline: "Microsoft is openly competing with OpenAI, Anthropic more than ever",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/29/microsoft-is-openly-competing-with-openai-anthropic-more-than-ever/",
  },
  {
    date: "2026-07-29",
    headline: "Mark Zuckerberg predicts that billions of people will have personal AI agents in five years",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/29/mark-zuckerberg-predicts-that-billions-of-people-will-have-personal-ai-agents-in-five-years/",
  },
  {
    date: "2026-07-29",
    headline: "Microsoft logs $3.2B from Anthropic investment, but OpenAI was a mixed bag",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/29/microsoft-logs-3-2b-from-anthropic-investment-but-openai-was-a-mixed-bag/",
  },
  {
    date: "2026-07-29",
    headline: "Zuckerberg says Meta&#8217;s enterprise AI opportunity extends beyond agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/29/zuckerberg-says-metas-enterprise-ai-opportunity-extends-beyond-agents/",
  },
  {
    date: "2026-07-29",
    headline: "Discover what&#8217;s next for AI, from the SaaS reckoning to the agent security gap, at…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/29/discover-whats-next-for-ai-from-the-saas-reckoning-to-the-agent-security-gap-at-techcrunch-disrupt-2026/",
  },
  {
    date: "2026-07-29",
    headline: "Cyera agrees to acquire Oasis Security for $1B to safeguard proliferating AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/28/cyera-agrees-to-acquire-oasis-security-for-1b-to-safeguard-proliferating-ai-agents/",
  },
  {
    date: "2026-07-28",
    headline: "Fish Audio raises $52M seed to build AI voice models for creators and enterprises",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/28/fish-audio-raises-50m-seed-to-build-ai-voice-models-for-creators-and-enterprises/",
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
