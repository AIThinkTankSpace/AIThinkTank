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
    date: "2026-07-04",
    headline: "New Google commercial imagines a Declaration of Independence written with help from AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/04/new-google-commercial-imagines-a-declaration-of-independence-written-with-help-from-ai/",
  },
  {
    date: "2026-07-04",
    headline: "Midjourney wants Hollywood studios to reveal the details of their AI usage",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/04/midjourney-wants-hollywood-studios-to-reveal-the-details-of-their-ai-usage/",
  },
  {
    date: "2026-07-04",
    headline: "Alibaba reportedly bans employees from using Claude Code",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/",
  },
  {
    date: "2026-07-04",
    headline: "What is Mistral AI? Everything to know about the OpenAI competitor",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/04/what-is-mistral-ai-everything-to-know-about-the-openai-competitor/",
  },
  {
    date: "2026-07-03",
    headline: "The fanfiction community is at war with AI — and itself",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/960854/ai-fanfiction-ao3-claude-detector",
  },
  {
    date: "2026-07-03",
    headline: "The only AI glossary you&#8217;ll need this year",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/03/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/",
  },
  {
    date: "2026-07-02",
    headline: "Achieving operational excellence with AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/02/1140045/achieving-operational-excellence-with-ai/",
  },
  {
    date: "2026-07-02",
    headline: "Teaching AI to run with the turbines",
    audiences: ["ai-for-kids"],
    link: "https://www.technologyreview.com/2026/07/02/1138433/teaching-ai-to-run-with-the-turbines/",
  },
  {
    date: "2026-07-02",
    headline: "The Download: a startup has a solution for AI’s groupthink problem",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/07/02/1140027/the-download-ai-groupthink-llms/",
  },
  {
    date: "2026-07-03",
    headline: "Anthropic wants to develop its own drugs",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/961311/anthropic-claude-science-ai-drug-development",
  },
  {
    date: "2026-07-02",
    headline: "Mark Zuckerberg tells staff that AI agents haven&#8217;t progressed as quickly as he&#8217;d hoped",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/",
  },
  {
    date: "2026-07-02",
    headline: "Jersey Mike&#8217;s IPO illustrates how bad the AI hype has become",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/02/jersey-mikes-ipo-illustrates-how-bad-the-ai-hype-has-become/",
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
