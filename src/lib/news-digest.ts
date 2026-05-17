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
  {
    date: "2026-05-16",
    headline: "OpenAI co-founder Greg Brockman takes charge of product strategy",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/16/openai-co-founder-greg-brockman-reportedly-takes-charge-of-product-strategy/",
  },
  {
    date: "2026-05-15",
    headline: "The Download: China’s AI drama factory and the WHO’s missing health targets",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/15/1137341/the-download-china-short-drama-ai-who-health-targets/",
  },
  {
    date: "2026-05-15",
    headline: "How Chinese short dramas became AI content machines",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/05/15/1137326/chinese-short-dramas-ai/",
  },
  {
    date: "2026-05-15",
    headline: "The OpenAI trial wraps up, and the Musk founder machine keeps spinning",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/the-openai-trial-wraps-up-and-the-musk-founder-machine-keeps-spinning/",
  },
  {
    date: "2026-05-15",
    headline: "Silicon Valley’s vacationland needs a new energy provider just as AI is driving prices up",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/15/silicon-valleys-vacationland-needs-a-new-energy-provider-just-as-ai-is-driving-prices-up/",
  },
  {
    date: "2026-05-15",
    headline: "OpenAI launches ChatGPT for personal finance, will let you connect bank accounts",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/15/openai-launches-chatgpt-for-personal-finance-will-let-you-connect-bank-accounts/",
  },
  {
    date: "2026-05-15",
    headline: "Runway started by helping filmmakers — now it wants to beat Google at AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/15/runway-started-by-helping-filmmakers-now-it-wants-to-beat-google-at-ai/",
  },
  {
    date: "2026-05-15",
    headline: "Osaurus brings both local and cloud AI models to your Mac",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/15/osaurus-brings-both-local-and-cloud-ai-models-to-your-mac/",
  },
  {
    date: "2026-05-14",
    headline: "Elon Musk&#8217;s SpaceXAI has been bleeding staff since its merger",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/14/elon-musks-spacexai-has-been-bleeding-staff-since-its-merger/",
  },
  {
    date: "2026-05-14",
    headline: "OpenAI says Codex is coming to your phone",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/14/openai-says-codex-is-coming-to-your-phone/",
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
