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
    date: "2026-04-20",
    headline: "Anthropic takes $5B from Amazon and pledges $100B in cloud spending in return",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/20/anthropic-takes-5b-from-amazon-and-pledges-100b-in-cloud-spending-in-return/",
  },
  {
    date: "2026-04-20",
    headline: "Google rolls out Gemini in Chrome in 7 new countries",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/20/google-rolls-out-gemini-in-chrome-in-seven-new-countries/",
  },
  {
    date: "2026-04-20",
    headline: "NSA spies are reportedly using Anthropic’s Mythos, despite Pentagon feud",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/20/nsa-spies-are-reportedly-using-anthropics-mythos-despite-pentagon-feud/",
  },
  {
    date: "2026-04-20",
    headline: "CEO and CFO suddenly depart AI nuclear power upstart Fermi",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/20/fermi-ceo-and-cfo-depart-texas-nuclear-power-ai/",
  },
  {
    date: "2026-04-20",
    headline: "The Download: murderous &#8216;mirror&#8217; bacteria, and Chinese workers fighting AI doubles",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/04/20/1136154/the-download-murderous-mirror-bacteria-chinese-workers-fight-ai-agents/",
  },
  {
    date: "2026-04-19",
    headline: "OpenAI’s existential questions",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/19/openais-existential-questions/",
  },
  {
    date: "2026-04-19",
    headline: "This charming gadget writes bad AI poetry",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/gadgets/913981/poetry-camera-ai-hands-on",
  },
  {
    date: "2026-04-18",
    headline: "Tesla brings its robotaxi service to Dallas and Houston",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/18/tesla-brings-its-robotaxi-service-to-dallas-and-houston/",
  },
  {
    date: "2026-04-18",
    headline: "AI chip startup Cerebras files for IPO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/18/ai-chip-startup-cerebras-files-for-ipo/",
  },
  {
    date: "2026-04-18",
    headline: "Anthropic’s relationship with the Trump administration seems to be thawing",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/18/anthropics-relationship-with-the-trump-administration-seems-to-be-thawing/",
  },
  {
    date: "2026-04-18",
    headline: "The App Store is booming again, and AI may be why",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/04/18/the-app-store-is-booming-again-and-ai-may-be-why/",
  },
  {
    date: "2026-04-17",
    headline: "How robots learn: A brief, contemporary history",
    audiences: ["ai-for-teens"],
    link: "https://www.technologyreview.com/2026/04/17/1135416/how-robots-learn-brief-contemporary-history/",
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
