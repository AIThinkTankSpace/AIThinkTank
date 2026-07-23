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
    date: "2026-07-22",
    headline: "After shocking quarter, IBM insists that AI isn&#8217;t killing the mainframe",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/22/after-shocking-quarter-ibm-insists-that-ai-isnt-killing-the-mainframe/",
  },
  {
    date: "2026-07-22",
    headline: "Google justifies its massive AI spending with a booming cloud business",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/22/google-justifies-its-massive-ai-spending-with-a-booming-cloud-business/",
  },
  {
    date: "2026-07-22",
    headline: "Treasury threatens sanctions after White House claims Moonshot distilled Anthropic&#8217;s Fable",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/22/treasury-threatens-sanctions-after-white-house-claims-moonshot-distilled-anthropics-fable/",
  },
  {
    date: "2026-07-22",
    headline: "How OpenAI’s human mistake led to the AI-powered hack on Hugging Face",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/",
  },
  {
    date: "2026-07-22",
    headline: "Travis Kalanick&#8217;s robotics company raises $1.7B, led by a16z",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/22/travis-kalanicks-robotics-company-raises-1-7b-led-by-a16z/",
  },
  {
    date: "2026-07-22",
    headline: "Synthesia’s AI training platform is moving beyond videos into live coaching",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/22/synthesias-ai-training-platform-is-moving-beyond-videos-into-live-coaching/",
  },
  {
    date: "2026-07-22",
    headline: "The Anthropic-Physical Intelligence rumor roiling AI Twitter",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/21/the-anthropic-physical-intelligence-rumor-roiling-ai-twitter/",
  },
  {
    date: "2026-07-21",
    headline: "Meta is testing an AI bedtime story app for people with no imagination",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/21/meta-is-testing-an-ai-bedtime-story-app-for-people-with-no-imagination/",
  },
  {
    date: "2026-07-21",
    headline: "OpenAI says Hugging Face was breached by its pre-release models",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/21/openai-says-hugging-face-was-breached-by-its-pre-release-models/",
  },
  {
    date: "2026-07-21",
    headline: "Jack Dorsey is taking on Slack with Buzz, a group chat platform for teams and their AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/21/jack-dorsey-is-taking-on-slack-with-buzz-a-group-chat-platform-for-teams-and-their-ai-agents/",
  },
  {
    date: "2026-07-21",
    headline: "Anthropic&#8217;s landmark $1.5B copyright settlement is approved",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/",
  },
  {
    date: "2026-07-20",
    headline: "Trump&#8217;s latest AI czar has already resigned",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/07/20/trumps-latest-ai-czar-has-already-resigned/",
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
