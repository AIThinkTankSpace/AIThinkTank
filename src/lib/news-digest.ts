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
    date: "2026-06-03",
    headline: "Alphabet&#8217;s record-breaking $85B raise for Google&#8217;s AI business is a helluva good signal",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/03/alphabets-record-breaking-85b-raise-for-googles-ai-business-is-a-helluva-good-signal/",
  },
  {
    date: "2026-06-03",
    headline: "Google&#8217;s Dreambeans, its weirdest-named AI tool to date, will turn your life into a cartoon",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/03/googles-dreambeans-its-weirdest-named-ai-tool-to-date-will-turn-your-life-into-a-cartoon/",
  },
  {
    date: "2026-06-03",
    headline: "Amazon will show AI product images when you search for some reason",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/03/amazon-will-show-ai-product-images-when-you-search-for-some-reason/",
  },
  {
    date: "2026-06-03",
    headline: "These two founders left Goldman and Meta to build voice AI for markets everyone else overlooked",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/03/these-two-founders-left-goldman-and-meta-to-build-voice-ai-for-markets-everyone-else-overlooked/",
  },
  {
    date: "2026-06-03",
    headline: "Publishers will be able to opt out of AI Search, thanks to new regulation",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/03/publishers-will-be-able-to-opt-out-of-ai-search-thanks-to-new-regulation/",
  },
  {
    date: "2026-06-02",
    headline: "Uber caps employee AI spending after blowing through budget in 4 months",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/",
  },
  {
    date: "2026-06-02",
    headline: "New Microsoft tool lets devs spin up AI behavior tests using text descriptions",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/02/new-microsoft-tool-lets-devs-spin-up-ai-behavior-tests-using-text-descriptions/",
  },
  {
    date: "2026-06-02",
    headline: "Martin Scorsese becomes the latest — and most unlikely — Hollywood voice for AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/02/martin-scorsese-becomes-the-latest-and-most-unlikely-hollywood-voice-for-ai/",
  },
  {
    date: "2026-06-02",
    headline: "Google rolls out fake call detection to protect against AI deepfake impersonation scams",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/02/google-rolls-out-fake-call-detection-to-protect-against-ai-deepfake-impersonation-scams/",
  },
  {
    date: "2026-06-02",
    headline: "Microsoft offers devs a better way to control AI agent behavior",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/02/microsoft-offers-devs-a-better-way-to-control-ai-agent-behavior/",
  },
  {
    date: "2026-06-01",
    headline: "Alphabet plans to raise $80B to pay for AI buildout",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/01/alphabet-plans-to-raise-80-billion-to-pay-for-ai-buildout/",
  },
  {
    date: "2026-06-01",
    headline: "Nvidia chases $200B CPU market with AI agent PCs from Microsoft, Dell, and HP",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/01/nvidia-chases-200b-cpu-market-with-ai-agent-pcs-from-microsoft-dell-and-hp/",
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
