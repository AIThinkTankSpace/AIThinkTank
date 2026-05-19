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
    date: "2026-05-18",
    headline: "SandboxAQ brings its drug discovery models to Claude — no PhD in computing required",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/18/sandboxaq-brings-its-drug-discovery-models-to-claude-no-phd-in-computing-required/",
  },
  {
    date: "2026-05-18",
    headline: "Anthropic has acquired the dev tools startup used by OpenAI, Google, and Cloudflare",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/18/anthropic-has-acquired-the-dev-tools-startup-used-by-openai-google-and-cloudflare/",
  },
  {
    date: "2026-05-18",
    headline: "Elon Musk has lost his lawsuit against Sam Altman and OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/18/elon-musk-has-lost-his-lawsuit-against-sam-altman-and-openai/",
  },
  {
    date: "2026-05-18",
    headline: "South Korea&#8217;s LetinAR is building optics behind AI glasses",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/18/south-koreas-letinar-is-building-the-optics-behind-ai-glasses/",
  },
  {
    date: "2026-05-19",
    headline: "Here’s why Elon Musk lost his suit against OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/18/1137488/elon-musk-suit-openai-verdict/",
  },
  {
    date: "2026-05-17",
    headline: "Why trust is a big question at the Elon Musk-OpenAI trial",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/17/why-trust-is-a-big-question-at-the-elon-musk-openai-trial/",
  },
  {
    date: "2026-05-17",
    headline: "If you’re giving a commencement speech in 2026, maybe don’t mention AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/17/if-youre-giving-a-commencement-speech-in-2026-maybe-dont-mention-ai/",
  },
  {
    date: "2026-05-17",
    headline: "TechCrunch Mobility: The AI skills arms race is coming for automotive",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/17/techcrunch-mobility-the-ai-skills-arms-race-is-coming-for-automotive/",
  },
  {
    date: "2026-05-17",
    headline: "University of Arizona students boo Eric Schmidt’s AI cheerleading during commencement",
    audiences: ["ai-for-kids", "ai-for-teens"],
    link: "https://www.theverge.com/ai-artificial-intelligence/932203/university-of-arizona-students-boo-eric-schmidt-ai-commencement",
  },
  {
    date: "2026-05-18",
    headline: "Sony tries to explain that its AI Camera Assistant doesn’t suck",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/tech/932133/sony-xperia-1-xiii-ai-camera-assistant",
  },
  {
    date: "2026-05-16",
    headline: "The haves and have nots of the AI gold rush",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/16/the-haves-and-have-nots-of-the-ai-gold-rush/",
  },
  {
    date: "2026-05-16",
    headline: "Research repository ArXiv will ban authors for a year if they let AI do all the work",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/16/research-repository-arxiv-will-ban-authors-for-a-year-if-they-let-ai-do-all-the-work/",
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
