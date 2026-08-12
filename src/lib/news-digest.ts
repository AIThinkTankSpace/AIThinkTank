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
    date: "2026-08-11",
    headline: "OpenAI launches ChatGPT desktop app for Linux",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/11/openai-launches-chatgpt-desktop-app-for-linux/",
  },
  {
    date: "2026-08-11",
    headline: "Google’s Gemini app surges to 1 billion users",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/11/googles-gemini-app-surges-to-one-billion-users/",
  },
  {
    date: "2026-08-11",
    headline: "Brad Lightcap, OpenAI&#8217;s longtime COO, is leaving to &#8216;start something new&#8217;",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/11/brad-lightcap-openais-longtime-coo-is-leaving-to-start-something-new/",
  },
  {
    date: "2026-08-11",
    headline: "General Catalyst leads $1.1B round into 2-month-old River AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/11/general-catalyst-leads-1-1b-round-into-2-month-old-river-ai/",
  },
  {
    date: "2026-08-11",
    headline: "An unreleased Anthropic model made progress on one of math&#8217;s biggest unsolved problems",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/11/an-unreleased-anthropic-model-made-progress-on-one-of-maths-biggest-unsolved-problems/",
  },
  {
    date: "2026-08-11",
    headline: "OpenAI reportedly completed a $7 billion employee tender offer",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/10/openai-reportedly-completed-a-7-billion-employee-tender-offer/",
  },
  {
    date: "2026-08-10",
    headline: "As AI-led attacks multiply, OpenAI launches a new cyber model",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/10/as-ai-led-attacks-multiply-openai-launches-a-new-cyber-model/",
  },
  {
    date: "2026-08-10",
    headline: "Mark Zuckerberg&#8217;s AI manifesto is exactly why people don&#8217;t like AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/10/mark-zuckerbergs-ai-manifesto-is-exactly-why-people-dont-like-ai/",
  },
  {
    date: "2026-08-10",
    headline: "Tech industry is buzzing after a Claude agent hacked into a gym",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/10/tech-industry-is-buzzing-after-a-claude-agent-hacked-into-a-gym/",
  },
  {
    date: "2026-08-10",
    headline: "Meta’s new Glimmer AI model offers a hint at Zuckerberg’s personal intelligence vision",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/10/metas-new-glimmer-ai-model-offers-a-hint-at-zuckerbergs-personal-intelligence-vision/",
  },
  {
    date: "2026-08-09",
    headline: "Anthropic is turning Claude Code’s auto mode on by default",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/09/anthropic-is-turning-claude-codes-auto-mode-on-by-default/",
  },
  {
    date: "2026-08-09",
    headline: "The AI safety test is becoming a safety risk",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/09/the-ai-safety-test-is-becoming-a-safety-risk/",
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
