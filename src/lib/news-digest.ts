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
    date: "2026-09-25",
    headline: "Lightspeed targets $250M for new India fund, focusing on early-stage AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/24/lightspeed-targets-250m-for-new-india-fund-focusing-on-early-stage-ai/",
  },
  {
    date: "2026-09-24",
    headline: "PrismML brings its tiny LLMs to Qualcomm-powered smart glasses",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/24/prismml-brings-its-tiny-llms-to-qualcomm-powered-smart-glasses/",
  },
  {
    date: "2026-09-24",
    headline: "Google Photos &#8216;Clueless&#8217;-inspired virtual closet is now available on Android and iOS",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/24/google-photos-clueless-inspired-virtual-closet-is-now-available-on-android-and-ios/",
  },
  {
    date: "2026-09-24",
    headline: "Google tests letting Gemini call businesses for you",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/24/google-tests-letting-gemini-make-phone-calls-initially-for-us-pixel-owners/",
  },
  {
    date: "2026-09-24",
    headline: "Shield AI, Waabi, and General Motors on building AI when failure is not an option at TechCrunch…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/24/shield-ai-waabi-and-general-motors-on-building-ai-when-failure-is-not-an-option-at-techcrunch-disrupt-2026/",
  },
  {
    date: "2026-09-24",
    headline: "Everything new coming to Meta&#8217;s AI agent Muse",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/23/everything-new-coming-to-metas-ai-agent-muse/",
  },
  {
    date: "2026-09-24",
    headline: "Meta made a Tamagotchi-like wearable for its Muse AI agent",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/23/meta-made-a-tamagotchi-like-wearable-for-its-muse-ai-agent/",
  },
  {
    date: "2026-09-23",
    headline: "Meta introduces camera-free AI glasses",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/23/meta-introduces-camera-free-ai-glasses/",
  },
  {
    date: "2026-09-23",
    headline: "Anthropic says its biology lab has already found something big",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/23/anthropic-says-its-biology-lab-has-already-found-something-big/",
  },
  {
    date: "2026-09-23",
    headline: "Enveda secures $311M to bring more nature-derived AI drugs into clinical trials",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/23/enveda-secures-311m-to-bring-more-nature-derived-ai-drugs-into-clinical-trials/",
  },
  {
    date: "2026-09-23",
    headline: "&#8216;We&#8217;re already fighting yesterday&#8217;s battle&#8217;: Greece&#8217;s prime…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/22/were-already-fighting-yesterdays-battle-greeces-prime-minister-gets-candid-about-ai/",
  },
  {
    date: "2026-09-22",
    headline: "TechCrunch Founder Summit’s agenda revealed: Unlock fundraising, hiring, and AI insights in…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/22/techcrunch-founder-summits-agenda-revealed-unlock-fundraising-hiring-and-ai-insights-in-boston-on-november-4/",
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
