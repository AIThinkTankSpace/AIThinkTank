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
    date: "2026-09-02",
    headline: "Palo Alto Networks paid $500M for Thrive-backed Console, sources say",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/02/palo-alto-networks-paid-500m-for-thrive-backed-console-sources-say/",
  },
  {
    date: "2026-09-02",
    headline: "TechCrunch Disrupt 2026’s new Real World AI Stage features Nvidia, robots, and extinct animals",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/02/techcrunch-disrupt-2026s-new-real-world-ai-stage-features-nvidia-robots-and-extinct-animals/",
  },
  {
    date: "2026-09-02",
    headline: "OpenAI’s new reasoning technique alarms AI safety experts",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/02/openais-new-reasoning-technique-alarms-ai-safety-experts/",
  },
  {
    date: "2026-09-02",
    headline: "Pangram&#8217;s Max Spero on why AI detection is harder than &#8216;Real or Fake&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/video/pangrams-max-spero-on-why-ai-detection-is-harder-than-real-or-fake/",
  },
  {
    date: "2026-09-02",
    headline: "US government sides with OpenAI on issue of training LLMs on copyrighted material",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/02/u-s-government-sides-with-openai-on-issue-of-training-llms-on-copyrighted-material/",
  },
  {
    date: "2026-09-01",
    headline: "OpenAI&#8217;s Astra model is on the way — and very good at breaking into computer systems",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/01/open-ais-astra-model-is-on-the-way-and-very-good-at-breaking-into-computer-systems/",
  },
  {
    date: "2026-09-01",
    headline: "Anthropic&#8217;s new Fable release is cheaper, less restrictive",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/01/anthropics-new-fable-release-is-cheaper-less-restrictive/",
  },
  {
    date: "2026-09-01",
    headline: "Google&#8217;s answer to Canva is an AI tool where you prompt instead of design",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/01/googles-answer-to-canva-is-an-ai-tool-where-you-prompt-instead-of-design/",
  },
  {
    date: "2026-09-01",
    headline: "ChatGPT Health adds Epic integration for clinicians to import patient data",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/01/chatgpt-health-adds-epic-integration-for-clinicians-to-import-patient-data/",
  },
  {
    date: "2026-09-01",
    headline: "AIR raises $50M to help companies vet the skills and add-ons AI agents use",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/01/air-raises-50m-to-help-companies-vet-the-skills-and-add-ons-ai-agents-use/",
  },
  {
    date: "2026-09-01",
    headline: "Apple shares &#8216;shocking evidence&#8217; against former employee accused of stealing company…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/31/apple-shares-shocking-evidence-against-former-employee-accused-of-stealing-company-data-for-openai/",
  },
  {
    date: "2026-08-31",
    headline: "The Pentagon now has its own version of ChatGPT and Grok",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/31/the-pentagon-now-has-its-own-version-of-chatgpt-and-grok/",
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
