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
    date: "2026-05-19",
    headline: "Google just declared itself a contender in AI design at IO 2026",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/19/ai-design-tools-are-the-next-big-battleground-and-google-is-going-all-in-at-io-2026/",
  },
  {
    date: "2026-05-19",
    headline: "You can now talk to your Gmail inbox, as seen at Google IO 2026",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/19/you-can-now-talk-to-your-gmail-inbox-as-seen-at-google-io-2026/",
  },
  {
    date: "2026-05-19",
    headline: "How to use Google’s new AI agents to go beyond your standard searches",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/19/how-to-use-googles-new-ai-agents-to-go-beyond-your-standard-searches/",
  },
  {
    date: "2026-05-19",
    headline: "From teen hacker to Iron Dome researcher, this founder raised $28M to fight AI phishing",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/05/19/from-teen-hacker-to-iron-dome-researcher-this-founder-raised-28m-to-fight-ai-phishing/",
  },
  {
    date: "2026-05-19",
    headline: "Elon Musk said Sam Altman &#8216;stole&#8217; a non-profit — but the trial showed he had similar…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/19/elon-musk-said-sam-altman-stole-a-non-profit-but-the-trial-showed-he-had-similar-aims/",
  },
  {
    date: "2026-05-18",
    headline: "SandboxAQ brings its drug discovery models to Claude — no PhD in computing required",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/18/sandboxaq-brings-its-drug-discovery-models-to-claude-no-phd-in-computing-required/",
  },
  {
    date: "2026-05-18",
    headline: "Anthropic has acquired the dev tools startup used by OpenAI, Google, and Cloudflare",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/18/anthropic-has-acquired-the-dev-tools-startup-used-by-openai-google-and-cloudflare/",
  },
  {
    date: "2026-05-18",
    headline: "Elon Musk has lost his lawsuit against Sam Altman and OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/18/elon-musk-has-lost-his-lawsuit-against-sam-altman-and-openai/",
  },
  {
    date: "2026-05-18",
    headline: "South Korea&#8217;s LetinAR is building optics behind AI glasses",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/18/south-koreas-letinar-is-building-the-optics-behind-ai-glasses/",
  },
  {
    date: "2026-05-19",
    headline: "Here’s why Elon Musk lost his suit against OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/18/1137488/elon-musk-suit-openai-verdict/",
  },
  {
    date: "2026-05-17",
    headline: "Why trust is a big question at the Elon Musk-OpenAI trial",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/17/why-trust-is-a-big-question-at-the-elon-musk-openai-trial/",
  },
  {
    date: "2026-05-17",
    headline: "If you’re giving a commencement speech in 2026, maybe don’t mention AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/17/if-youre-giving-a-commencement-speech-in-2026-maybe-dont-mention-ai/",
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
