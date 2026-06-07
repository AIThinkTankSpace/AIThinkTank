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
    date: "2026-06-06",
    headline: "OpenAI unveils Lockdown Mode to protect sensitive data from prompt injection attacks",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/",
  },
  {
    date: "2026-06-06",
    headline: "Sriram Krishnan is leaving his role as White House AI advisor",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/06/sriram-krishnan-is-leaving-his-role-as-white-house-ai-advisor/",
  },
  {
    date: "2026-06-06",
    headline: "The Trump administration might take an equity stake in OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/06/the-trump-administration-might-take-an-equity-stake-in-openai/",
  },
  {
    date: "2026-06-05",
    headline: "Meta made its own AI-generated clickbait news feed",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/944235/meta-app-ai-clickbait-articles",
  },
  {
    date: "2026-06-05",
    headline: "Here comes new Siri again",
    audiences: ["ai-for-kids"],
    link: "https://www.theverge.com/tech/944245/apple-wwdc-2026-ai-siri-gemini",
  },
  {
    date: "2026-06-05",
    headline: "The token bill comes due: Inside the industry scramble to manage AI’s runaway costs",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/05/the-token-bill-comes-due-inside-the-industry-scramble-to-manage-ais-runaway-costs/",
  },
  {
    date: "2026-06-05",
    headline: "AirTrunk commits $30B to build 5GW of AI data centers in India",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/05/airtrunk-commits-30b-to-build-5gw-of-ai-data-centers-in-india/",
  },
  {
    date: "2026-06-05",
    headline: "The Download: AI hacking beyond Mythos, and chatbots&#8217; impact on our brains",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/05/1138452/the-download-ai-hacking-mythos-chatbots-brain-impacts/",
  },
  {
    date: "2026-06-05",
    headline: "Are AI chatbots making us lose control of our brains?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/05/1138427/are-ai-chatbots-making-us-lose-control-of-our-brains/",
  },
  {
    date: "2026-06-05",
    headline: "The Meta hack shows there’s more to AI security than Mythos",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/05/1138437/the-meta-hack-shows-theres-more-to-ai-security-than-mythos/",
  },
  {
    date: "2026-06-04",
    headline: "Ahead of its IPO, Anthropic&#8217;s Daniela Amodei shrugs off doubts about AI&#8217;s returns",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/04/ahead-of-its-ipo-anthropics-daniela-amodei-shrugs-off-doubts-about-ais-returns/",
  },
  {
    date: "2026-06-04",
    headline: "Airbnb&#8217;s Brian Chesky plans to launch a new AI lab",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/04/airbnbs-brian-chesky-plans-to-launch-a-new-ai-lab/",
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
