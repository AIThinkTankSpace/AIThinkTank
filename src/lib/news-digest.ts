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
    date: "2026-09-05",
    headline: "Seattle Times and Newsday are the latest publications to sue OpenAI and Microsoft",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/05/seattle-times-and-newsday-are-the-latest-publications-to-sue-openai-and-microsoft/",
  },
  {
    date: "2026-09-05",
    headline: "Hikers rescued after using Google Gemini for planning",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/05/hikers-rescued-after-using-google-gemini-for-planning/",
  },
  {
    date: "2026-09-05",
    headline: "OpenAI confirms ‘wiki incident,’ says it’s ‘working on a framework’ for more disclosure",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/05/openai-confirms-wiki-incident-says-its-working-on-a-framework-for-more-disclosure/",
  },
  {
    date: "2026-09-04",
    headline: "Architecting memory and storage in the AI era",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/09/04/1140872/architecting-memory-and-storage-in-the-ai-era/",
  },
  {
    date: "2026-09-04",
    headline: "The Download: selling battlefield drone data and AI reshaping language",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/09/04/1143457/the-download-ukraine-selling-drone-data-ai-reshaping-language/",
  },
  {
    date: "2026-09-04",
    headline: "OpenAI&#8217;s rogue agents keep escaping, with no formal process to investigate them",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/04/openais-rogue-agents-keep-escaping-with-no-formal-process-to-investigate-them/",
  },
  {
    date: "2026-09-04",
    headline: "AI compute provider Nscale is looking for $3.5B in pre-IPO financing",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/04/ai-compute-provider-nscale-is-looking-for-3-5b-in-pre-ipo-financing/",
  },
  {
    date: "2026-09-04",
    headline: "Another swarm of OpenAI agents reached the open internet without the frontier lab&#8217;s knowledge",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/04/another-swarm-of-openai-agents-reached-the-open-internet-without-the-frontier-labs-knowledge/",
  },
  {
    date: "2026-09-04",
    headline: "Apple&#8217;s Ternus era begins as Nvidia bets on the whole AI stack",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/apples-ternus-era-begins-as-nvidia-bets-on-the-whole-ai-stack/",
  },
  {
    date: "2026-09-04",
    headline: "Google&#8217;s Gemini Spark can now manage your Google Photos library",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/04/googles-gemini-spark-can-now-manage-your-google-photos-library/",
  },
  {
    date: "2026-09-04",
    headline: "The sameness problem behind those unappetizing AI-generated menus",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/03/the-sameness-problem-behind-those-unappetizing-ai-generated-menus/",
  },
  {
    date: "2026-09-04",
    headline: "Crusoe reportedly raises $3B at a  $30B valuation",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/03/crusoe-reportedly-raises-3b-at-a-30b-valuation/",
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
