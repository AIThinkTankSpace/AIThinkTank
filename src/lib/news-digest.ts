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
    date: "2026-10-20",
    headline: "Mamdani says feds have abdicated on AI, urges New Yorkers to push back",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/19/mamdani-says-feds-have-abdicated-on-ai-urges-new-yorkers-to-push-back/",
  },
  {
    date: "2026-10-19",
    headline: "Nscale and Anthropic are reportedly in talks for yet another $45B compute deal",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/19/nscale-and-anthropic-are-reportedly-in-talks-for-yet-another-45-billion-compute-deal/",
  },
  {
    date: "2026-10-19",
    headline: "Embedded AI evaluators won&#8217;t be an easy solution, Hugging Face&#8217;s policy chief says",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/19/embedded-ai-evaluators-wont-be-an-easy-solution-hugging-faces-policy-chief-says/",
  },
  {
    date: "2026-10-19",
    headline: "Microsoft says AI agents are like insider threats as &#8216;frontier models can&#8217;t be…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/19/microsoft-says-ai-agents-are-like-insider-threats-as-frontier-models-cant-be-trusted/",
  },
  {
    date: "2026-10-19",
    headline: "Amazon is taking its biggest shot at Nvidia yet with new TorchNeuron dev tool",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/19/amazon-is-taking-its-biggest-shot-at-nvidia-yet-with-new-torchneuron-dev-tool/",
  },
  {
    date: "2026-10-18",
    headline: "Anthropic says it’s committing 5% of its shares to a ‘public benefit fund’",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/18/anthropic-says-its-committing-5-of-its-shares-to-a-public-benefit-fund/",
  },
  {
    date: "2026-10-18",
    headline: "Disney agrees to hire the majority of Character.AI’s workforce",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/18/disney-agrees-to-hire-the-majority-of-character-ais-workforce/",
  },
  {
    date: "2026-10-19",
    headline: "AI researchers stranded Claude on a virtual desert island. It started to “play.”",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/10/19/1147095/ai-stranded-claude-virtual-desert-island-play/",
  },
  {
    date: "2026-10-18",
    headline: "A woman was arrested in Philly for blocking a delivery robot",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/1013541/a-woman-was-arrested-in-philly-for-blocking-a-delivery-robot",
  },
  {
    date: "2026-10-17",
    headline: "Meta’s new terms may allow it to train AI on news sites for free",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/1012846/meta-business-terms-scrape-news-publishers",
  },
  {
    date: "2026-10-17",
    headline: "Meta removes language that raised scraping and AI training concerns",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/",
  },
  {
    date: "2026-10-17",
    headline: "Anthropic says its workforce has become less junior and is spending more time in meetings",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/17/anthropic-says-its-workforce-has-become-less-junior-and-is-spending-more-time-in-meetings/",
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
