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
    date: "2026-08-04",
    headline: "Open-weight AI models are catching up to the frontier. The safety gap remains.",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/04/open-weight-ai-models-are-catching-up-to-the-frontier-the-safety-gap-remains/",
  },
  {
    date: "2026-08-04",
    headline: "Anthropic signs $10B deal with AI cloud startup Volta",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/04/anthropic-signs-10-billion-deal-with-ai-cloud-startup-volta/",
  },
  {
    date: "2026-08-04",
    headline: "Nvidia doesn&#8217;t mess around: A week after open AI industry group formed, it&#8217;s already…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/04/nvidia-doesnt-mess-around-a-week-after-open-ai-industry-group-formed-its-already-showing-progress/",
  },
  {
    date: "2026-08-04",
    headline: "Spotify expands AI remix and covers project with Merlin partnership",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/04/spotify-adds-merlin-to-its-ai-music-remix-and-covers-effort/",
  },
  {
    date: "2026-08-04",
    headline: "Elon Musk spends half his time talking robots and AI on Tesla earnings calls",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/04/elon-musk-spends-half-his-time-talking-robots-and-ai-on-tesla-earnings-calls/",
  },
  {
    date: "2026-08-03",
    headline: "After killer quarter, Palantir CEO Alex Karp calls AI industry &#8216;Marxist&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/03/after-killer-quarter-palantir-ceo-alex-karp-calls-ai-industry-marxist/",
  },
  {
    date: "2026-08-03",
    headline: "Design Arena creators raise $7.9 million to bring taste to AI models",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/03/designarena-creators-raise-7-9-million-to-bring-taste-to-ai-models/",
  },
  {
    date: "2026-08-03",
    headline: "Influencers draw backlash for attending OpenAI&#8217;s first luxury trip",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/03/influencers-draw-backlash-for-attending-openais-first-luxury-trip/",
  },
  {
    date: "2026-08-03",
    headline: "Congress&#8217; favorite AI tool? ChatGPT",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/03/congresss-favorite-ai-tool-chatgpt/",
  },
  {
    date: "2026-08-03",
    headline: "A Marc Benioff-backed startup thinks AI can solve the AI deployment problem",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/03/a-marc-benioff-backed-startup-thinks-ai-can-solve-the-ai-deployment-problem/",
  },
  {
    date: "2026-08-02",
    headline: "Sam Altman and AI’s decel debate",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/02/sam-altman-and-ais-decel-debate/",
  },
  {
    date: "2026-08-03",
    headline: "Here’s why AI agents lie and cheat to reach their goals",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/08/03/1141009/heres-why-ai-agents-lie-and-cheat-to-reach-their-goals/",
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
