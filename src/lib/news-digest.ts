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
    date: "2026-08-12",
    headline: "Some Claude users are mad that Anthropic&#8217;s new watermarks will catch them using it at…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/12/some-claude-users-are-mad-that-anthropics-new-watermarks-will-catch-them-cheating-at-their-jobs-classes/",
  },
  {
    date: "2026-08-12",
    headline: "Amazon will train on Twitch streamers&#8217; content by default, unless they opt out",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/12/amazon-will-train-on-twitch-streamers-content-by-default-unless-they-opt-out/",
  },
  {
    date: "2026-08-12",
    headline: "AI coding startup Cognition reportedly already in talks to raise at $40B valuation",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/12/ai-coding-startup-cognition-reportedly-already-in-talks-to-raise-at-40b-valuation/",
  },
  {
    date: "2026-08-12",
    headline: "As AI safety concerns mount, three pioneers make the case for staying open",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/12/as-ai-safety-concerns-mount-three-pioneers-make-the-case-for-staying-open/",
  },
  {
    date: "2026-08-12",
    headline: "OpenAI-backed Thrive Holdings raises $2B to bring AI to the enterprise",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/12/openai-backed-thrive-holdings-raises-2b-to-bring-ai-to-the-enterprise/",
  },
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
