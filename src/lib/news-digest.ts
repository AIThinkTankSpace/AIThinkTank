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
    date: "2026-06-16",
    headline: "Malaysia&#8217;s AI agent-powered messaging app Respond.io raises $62.5M, eyes acquisitions",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/15/malaysias-respond-io-raises-62-5m-eyes-acquisitions-in-north-america-and-europe/",
  },
  {
    date: "2026-06-15",
    headline: "Sundar Pichai faces boos, walkout at Stanford graduation ceremony over Google&#8217;s Israel,…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/15/sundar-pichai-faces-boos-walkout-at-stanford-graduation-ceremony-over-googles-israel-ice-ties/",
  },
  {
    date: "2026-06-15",
    headline: "The US government&#8217;s Anthropic models ban was never about an AI jailbreak",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/15/the-us-governments-anthropic-models-ban-was-never-about-an-ai-jailbreak/",
  },
  {
    date: "2026-06-15",
    headline: "Meta&#8217;s new ‘AI Mode’ on Facebook pulls from public info across its platforms",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/15/metas-new-ai-mode-on-facebook-pulls-from-public-info-across-its-platforms/",
  },
  {
    date: "2026-06-15",
    headline: "Cybersecurity vets protest &#8216;dangerous&#8217; US government ban on Anthropic&#8217;s most…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/15/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models/",
  },
  {
    date: "2026-06-15",
    headline: "The AI layoff wave is becoming a powder keg",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/15/the-ai-layoff-wave-is-becoming-a-powder-keg/",
  },
  {
    date: "2026-06-14",
    headline: "As AI companies race to go public, who else is along for the ride?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/14/as-ai-companies-race-to-go-public-who-else-is-along-for-the-ride/",
  },
  {
    date: "2026-06-13",
    headline: "Anthropic cuts off Fable 5 and Mythos 5 access following government order",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/949553/anthropic-fable-5-mythos-5-government-national-security",
  },
  {
    date: "2026-06-14",
    headline: "As Anthropic suspends access to new models, India debates its AI future",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/13/as-anthropic-suspends-access-to-new-models-india-debates-its-ai-future/",
  },
  {
    date: "2026-06-13",
    headline: "KPMG pulls report on AI usage due to apparent hallucinations",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/13/kpmg-pulls-report-on-ai-usage-due-to-apparent-hallucinations/",
  },
  {
    date: "2026-06-13",
    headline: "Amazon CEO reportedly raised Anthropic model concerns before government crackdown",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/13/amazon-ceo-reportedly-raised-anthropic-model-concerns-before-government-crackdown/",
  },
  {
    date: "2026-06-13",
    headline: "OpenAI faces investigation from state attorneys general",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/13/openai-faces-investigation-from-state-attorneys-general/",
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
