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
    date: "2026-09-29",
    headline: "Anthropic&#8217;s prospectus details losses, growth, and, yes, a warning that its AI could end…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/28/anthropics-prospectus-details-losses-growth-and-yes-a-warning-that-its-ai-could-end-humanity/",
  },
  {
    date: "2026-09-28",
    headline: "OpenAI reportedly ditches model over safety concerns",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/28/openai-reportedly-ditches-model-over-safety-concerns/",
  },
  {
    date: "2026-09-28",
    headline: "Source: Inference provider Modal Labs closing in on $750M round at $15.75B valuation",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/28/source-inference-provider-modal-labs-closing-in-on-750m-round-at-15-75b-valuation/",
  },
  {
    date: "2026-09-28",
    headline: "Shopify opens checkout to browser-based AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/28/shopify-opens-checkout-to-browser-based-ai-agents/",
  },
  {
    date: "2026-09-28",
    headline: "The AI boom took over Climate Week and not everyone is happy about it",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/28/the-ai-boom-took-over-climate-week-and-not-everyone-is-happy-about-it/",
  },
  {
    date: "2026-09-27",
    headline: "Anthropic’s CEO is about to have dinner with President Trump",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/27/anthropics-ceo-is-about-to-have-dinner-with-president-trump/",
  },
  {
    date: "2026-09-27",
    headline: "Anthropic&#8217;s Dario Amodei gets the SNL treatment",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/27/anthropics-dario-amodei-gets-the-snl-treatment/",
  },
  {
    date: "2026-09-28",
    headline: "The Download: rogue agent liability and the AI Hype Index",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/09/28/1145202/the-download-rogue-agent-liability-and-the-ai-hype-index/",
  },
  {
    date: "2026-09-28",
    headline: "Who’s liable when AI agents go rogue?",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/09/28/1145197/whos-liable-when-ai-agents-go-rogue/",
  },
  {
    date: "2026-09-28",
    headline: "Engram is a sampler that turns broken AI hallucinations into music",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/1001193/engram-sampler-ai-hallucinations-music",
  },
  {
    date: "2026-09-27",
    headline: "Google tests buying from Walmart-owned Flipkart through Gemini and AI Mode in India",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/26/google-tests-buying-from-walmart-owned-flipkart-through-gemini-and-ai-mode-in-india/",
  },
  {
    date: "2026-09-26",
    headline: "Insurers claim AI is already increasing healthcare costs",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/26/insurers-claim-ai-is-already-increasing-healthcare-costs/",
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
