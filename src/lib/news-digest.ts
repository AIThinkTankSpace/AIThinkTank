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
  {
    date: "2026-06-01",
    headline: "Florida sues OpenAI, Sam Altman, in first-of-its-kind lawsuit over violent incidents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/01/florida-sues-openai-sam-altman-in-first-of-its-kind-lawsuit-over-violent-incidents/",
  },
  {
    date: "2026-06-01",
    headline: "Anthropic files to go public",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/01/anthropic-files-to-go-public/",
  },
  {
    date: "2026-06-01",
    headline: "This AI weather startup is out-forecasting government agencies",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/01/this-ai-weather-startup-is-out-forecasting-government-agencies/",
  },
  {
    date: "2026-05-31",
    headline: "Erin Brockovich takes aim at data center secrecy",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/31/erin-brockovich-takes-aim-at-data-center-secrecy/",
  },
  {
    date: "2026-05-31",
    headline: "Making sense of the debate over AI psychosis",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/31/making-sense-of-the-debate-over-ai-psychosis/",
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
