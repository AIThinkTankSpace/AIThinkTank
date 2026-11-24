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
    date: "2026-11-24",
    headline: "Meta brings its Muse AI assistant directly into Instagram DMs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/24/meta-brings-its-muse-ai-assistant-directly-into-instagram-dms/",
  },
  {
    date: "2026-11-24",
    headline: "Tidal to ban and remove millions of AI-generated tracks as AI slop inundates music streaming",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/24/tidal-to-ban-and-remove-millions-of-ai-generated-tracks-as-ai-slop-inundates-music-streaming/",
  },
  {
    date: "2026-11-24",
    headline: "Why a Crusoe investor is betting on solar and batteries to power future AI data centers",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/24/why-a-crusoe-investor-is-betting-on-solar-and-batteries-to-power-future-ai-data-centers/",
  },
  {
    date: "2026-11-24",
    headline: "Pinterest will now let parents limit the AI-generated content their teens see",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://techcrunch.com/2026/11/24/pinterest-will-now-let-parents-limit-the-ai-generated-content-their-teens-see/",
  },
  {
    date: "2026-11-24",
    headline: "Amazon&#8217;s Decart acquisition is a bet on using software to narrow the gap with Nvidia in…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/24/amazons-decart-acquisition-is-a-bet-on-using-software-to-narrow-the-gap-with-nvidia-in-the-ai-chip-race/",
  },
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
