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
    date: "2026-10-31",
    headline: "Nvidia weighs playing the cosigner for Nscale’s AI data center in West Virginia",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/30/nvidia-weighs-playing-the-cosigner-for-nscales-ai-data-center-in-west-virginia/",
  },
  {
    date: "2026-10-30",
    headline: "Ollie, a privacy-focused AI assistant, is shutting down",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/30/ollie-a-privacy-focused-ai-assistant-is-shutting-down/",
  },
  {
    date: "2026-10-30",
    headline: "Anthropic expected to receive high &#8216;junk&#8217; rating from credit agencies following IPO,…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/30/anthropic-expected-to-receive-high-junk-rating-from-credit-agencies-following-ipo-report-says/",
  },
  {
    date: "2026-10-30",
    headline: "Cracks are emerging in the AI spending boom",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/30/cracks-are-emerging-in-the-ai-spending-boom/",
  },
  {
    date: "2026-10-30",
    headline: "Zest&#8217;s new AI agent finds restaurants and books reservations over text",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/30/zests-new-ai-agent-finds-restaurants-and-books-reservations-over-text/",
  },
  {
    date: "2026-10-30",
    headline: "You don&#8217;t need to believe in a god to get a religious exemption from using AI at work",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/you-dont-need-to-believe-in-a-god-to-get-a-religious-exemption-from-using-ai-at-work/",
  },
  {
    date: "2026-10-29",
    headline: "Rivian expands joint venture with VW to include AI assistant",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/rivian-expands-joint-venture-with-vw-to-include-ai-assistant/",
  },
  {
    date: "2026-10-29",
    headline: "OpenAI-backed Thrive Holdings acquires ADT",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/openai-backed-thrive-holdings-acquires-adt/",
  },
  {
    date: "2026-10-29",
    headline: "Meta quietly launches an AI fashion app called Style Sketch",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/meta-quietly-launches-an-ai-fashion-app-called-style-sketch/",
  },
  {
    date: "2026-10-29",
    headline: "Mistral releases weights for its trillion-parameter AI model, targeting cybersecurity",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/",
  },
  {
    date: "2026-10-28",
    headline: "Google expands AI Search ads globally as core ad growth slows",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/28/google-expands-ai-search-ads-globally-as-core-ad-growth-slows/",
  },
  {
    date: "2026-10-28",
    headline: "Microsoft recorded $10 billion in revenue from OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/10/28/microsoft-recorded-10-billion-in-revenue-from-openai/",
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
