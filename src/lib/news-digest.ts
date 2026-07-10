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
  {
    date: "2026-07-09",
    headline: "OpenAI launches its new family of models with GPT-5.6",
    audiences: ["ai-for-kids", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/",
  },
  {
    date: "2026-07-09",
    headline: "An AI agent startup just let its agent run its $100M fundraise",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/09/an-ai-agent-startup-just-let-its-agent-run-its-100-million-fundraise/",
  },
  {
    date: "2026-07-09",
    headline: "OpenAI is shutting down Atlas, but its AI browser ambitions are still growing",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/09/openai-is-shutting-down-atlas-but-its-ai-browser-ambitions-are-still-growing/",
  },
  {
    date: "2026-07-08",
    headline: "SpaceXAI releases Grok 4.5, which Elon describes as an &#8216;Opus-class model&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/",
  },
  {
    date: "2026-07-08",
    headline: "This startup thinks robotics is about to have its ChatGPT moment",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/this-startup-thinks-robotics-is-about-to-have-its-chatgpt-moment/",
  },
  {
    date: "2026-07-08",
    headline: "Google Photos adds a new AI &#8216;Video Remix&#8217; tool",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/google-photos-adds-a-new-ai-video-remix-tool/",
  },
  {
    date: "2026-07-08",
    headline: "Why this CEO thinks video games make better training data than the internet",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/video/why-this-ceo-thinks-video-games-make-better-training-data-than-the-internet/",
  },
  {
    date: "2026-07-08",
    headline: "Meta wants its AI glasses to seem less creepy. Its AI strategy says otherwise.",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/meta-wants-its-ai-glasses-to-seem-less-creepy-its-ai-strategy-says-otherwise/",
  },
  {
    date: "2026-07-08",
    headline: "Hot French startup ZML releases free product to speed inference across lots of AI chips",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/hot-french-startup-zml-releases-free-product-to-speed-inference-across-lots-of-ai-chips/",
  },
  {
    date: "2026-07-08",
    headline: "AI chip maker SambaNova raises $1B at $11B valuation, 5 months after last mega round",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/08/sambanova-draws-1b-at-11b-valuation-in-series-f-first-close/",
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
