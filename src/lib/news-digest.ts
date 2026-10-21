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
    headline: "Anthropic pitches AI safety bill that may block a model if 50+ people could be killed",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/anthropic-pitches-ai-safety-bill-that-may-block-a-model-if-50-people-could-be-killed/",
  },
  {
    date: "2026-10-20",
    headline: "Hugging Face CEO warns that Netflix&#8217;s OpenAI hack documentary isn&#8217;t accurate",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/hugging-face-ceo-warns-that-netflixs-openai-hack-documentary-isnt-accurate/",
  },
  {
    date: "2026-10-20",
    headline: "Anthropic’s cloud partnerships are getting messy",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/anthropics-cloud-partnerships-are-getting-messy/",
  },
  {
    date: "2026-10-20",
    headline: "SpaceX&#8217;s AI business is beating expectations",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/spacexs-ai-business-is-beating-expectations/",
  },
  {
    date: "2026-10-20",
    headline: "OpenAI acquires startup Orchestra Bio⁠ to beef up its biotech business",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/20/openai-acquires-startup-orchestra-bio%e2%81%a0-to-beef-up-its-biotech-business/",
  },
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
