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
    date: "2026-11-23",
    headline: "Amazon snaps up Decart&#8217;s AI optimization tech for $7.5B as it prepares to sell Trainium chips",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/",
  },
  {
    date: "2026-11-23",
    headline: "Trump reportedly called into Nvidia board meeting to advocate for Huang&#8217;s return",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/23/trump-reportedly-called-into-nvidia-board-meeting-to-advocate-for-huangs-return/",
  },
  {
    date: "2026-11-23",
    headline: "Trump endorses Jensen Huang&#8217;s return to Nvidia, says US has no evidence of wrongdoing",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/23/trump-endorses-jensen-huangs-return-to-nvidia-says-us-has-no-evidence-of-wrongdoing/",
  },
  {
    date: "2026-11-23",
    headline: "Sierra doubles valuation to $30B within six months as demand for AI in CX takes off",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/23/sierra-doubles-valuation-to-30b-within-six-months-as-demand-for-ai-in-cx-takes-off/",
  },
  {
    date: "2026-11-23",
    headline: "Nvidia reverses course and brings Jensen Huang back as CEO",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/23/nvidia-reverses-course-and-brings-jensen-huang-back-as-ceo/",
  },
  {
    date: "2026-11-21",
    headline: "Signal restricts mobile screenshots as it confronts ‘existential threat’ of AI surveillance",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/21/signal-restricts-mobile-screenshots-as-it-confronts-existential-threat-of-ai-surveillance/",
  },
  {
    date: "2026-11-21",
    headline: "A tale of two Nvidias",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/21/a-tale-of-two-nvidias/",
  },
  {
    date: "2026-11-21",
    headline: "Here are the top AI agents that can live in your text messages",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/21/all-the-ai-agents-that-can-live-in-your-text-messages/",
  },
  {
    date: "2026-11-21",
    headline: "Is selling an AI version of your face to this microdrama startup the future of Hollywood?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/21/is-selling-an-ai-version-of-your-face-to-this-microdrama-startup-the-future-of-hollywood/",
  },
  {
    date: "2026-11-21",
    headline: "The UN fails to agree on rules regulating ‘killer robots’",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/1039554/un-regulations-killer-robots",
  },
  {
    date: "2026-11-20",
    headline: "Daniel Ek backs AI researcher&#8217;s fusion power startup. Here&#8217;s what they&#8217;re…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/20/daniel-ek-backs-ai-researchers-fusion-power-startup-heres-what-theyre-building/",
  },
  {
    date: "2026-11-20",
    headline: "AI claimed a solution to the 167-year-old Riemann hypothesis — and a human did, too",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/",
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
