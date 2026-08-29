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
    date: "2026-08-28",
    headline: "An Anthropic researcher just gave us a peek at self-improving AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/",
  },
  {
    date: "2026-08-28",
    headline: "Open-weight AI companies are the Valley&#8217;s hottest acquisition targets",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/28/open-weight-ai-companies-are-the-valleys-hottest-acquisition-targets/",
  },
  {
    date: "2026-08-27",
    headline: "A startup claims it’s found a drug to make your blood young",
    audiences: ["ai-for-kids", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/27/1143037/startup-claims-its-found-a-drug-to-make-your-blood-young/",
  },
  {
    date: "2026-08-27",
    headline: "The Download: inside OpenAI&#8217;s Hugging Face hack, and a new EV takes on the US",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/27/1143033/the-download-openai-hugging-face-hack-slate-truck-ev/",
  },
  {
    date: "2026-08-27",
    headline: "Claude, Codex, and Hermes installed unowned code inside corporate networks",
    audiences: ["ai-for-corporates"],
    link: "https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unowned-code-inside-corporate-networks/",
  },
  {
    date: "2026-08-28",
    headline: "Anthropic gets its first court win over the Pentagon’s supply-chain risk label",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/28/anthropic-gets-its-first-court-win-over-the-pentagons-supply-chain-risk-label/",
  },
  {
    date: "2026-08-28",
    headline: "Meta executive leaves for OpenAI as the social media giant faces growing scrutiny in India",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/28/meta-executive-leaves-for-openai-as-the-social-media-giant-faces-growing-scrutiny-in-india/",
  },
  {
    date: "2026-08-27",
    headline: "Anthropic and OpenAI are joining the AI stage at TechCrunch Disrupt 2026",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/anthropic-and-openai-are-joining-the-ai-stage-at-techcrunch-disrupt-2026/",
  },
  {
    date: "2026-08-27",
    headline: "Barret Zoph, the Thinking Machines co-founder ousted before joining OpenAI, is now at Google",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/barret-zoph-the-thinking-machines-co-founder-who-defected-to-openai-is-now-at-google/",
  },
  {
    date: "2026-08-27",
    headline: "OpenAI, Anthropic, Google, and 100 other companies call for action to defend against rogue AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/openai-anthropic-google-and-100-other-companies-call-for-action-to-defend-against-rogue-ai/",
  },
  {
    date: "2026-08-27",
    headline: "Google&#8217;s AI Mode can now track flight prices, help book hotels, and more",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/googles-ai-mode-can-now-track-flight-prices-help-book-hotels-and-more/",
  },
  {
    date: "2026-08-27",
    headline: "Hugging Face is selling a cute $399 open source duck robot, Microduck",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/27/hugging-face-is-selling-a-cute-399-open-source-duck-robot-microduck/",
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
