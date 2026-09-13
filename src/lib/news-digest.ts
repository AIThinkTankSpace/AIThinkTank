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
    date: "2026-09-12",
    headline: "OpenAI’s Sam Altman says it would be &#8216;ill-advised&#8217; to go public in 2026",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/12/openais-sam-altman-says-it-would-be-ill-advised-to-go-public-in-2026/",
  },
  {
    date: "2026-09-12",
    headline: "Anthropic CEO outlines plan to slow AI development",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/12/anthropic-ceo-outlines-plan-to-pace-the-frontier/",
  },
  {
    date: "2026-09-11",
    headline: "Roundtables: Could AI really kill us all?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/09/11/1143936/roundtables-will-ai-really-kill-us-all/",
  },
  {
    date: "2026-09-12",
    headline: "OpenAI’s rogue AI tried to hack another company in May",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/994383/openais-rogue-ai-rubygems-hack",
  },
  {
    date: "2026-09-12",
    headline: "Anthropic CEO says it’s time to pump the brakes on AI",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/994337/anthropic-ceo-slow-down-ai-development",
  },
  {
    date: "2026-09-11",
    headline: "Mecka AI nears $500M valuation in Sequoia-led deal amid rush for robot training data",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/11/mecka-ai-nears-500m-valuation-in-sequoia-led-deal-amid-rush-for-robot-training-data/",
  },
  {
    date: "2026-09-11",
    headline: "Y Combinator&#8217;s Garry Tan wants US open-weight AI labs to &#8216;distill&#8217; frontier…",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/11/y-combinators-garry-tan-wants-u-s-open-weight-ai-labs-to-distill-frontier-models-too/",
  },
  {
    date: "2026-09-11",
    headline: "OpenAI&#8217;s feud with mathematicians is only escalating",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/11/openais-feud-with-mathematicians-is-only-escalating/",
  },
  {
    date: "2026-09-11",
    headline: "Kimi-maker Moonshot AI targets $2B in annual revenue",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/11/kimi-maker-moonshot-ai-targets-2-billion-in-annual-revenue/",
  },
  {
    date: "2026-09-11",
    headline: "An Anthropic researcher’s doomsday warning comes at a very interesting time",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/an-anthropic-researchers-doomsday-warning-comes-at-a-very-interesting-time/",
  },
  {
    date: "2026-09-10",
    headline: "Jensen Huang explains why Nvidia will grow an astounding 70% next year",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/10/jensen-huang-explains-why-nvidia-will-grow-an-astounding-70-next-year/",
  },
  {
    date: "2026-09-10",
    headline: "OpenAI puts Pro subscriptions on hold due to Astra demand",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/09/10/openai-puts-pro-subscriptions-on-hold-due-to-astra-demand/",
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
