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
    date: "2026-08-17",
    headline: "Anthropic&#8217;s annualized revenue surges to $65B",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/17/anthropics-annualized-revenue-surges-to-65b/",
  },
  {
    date: "2026-08-17",
    headline: "AI automation startup Relay shuts down, staff joins Google&#8217;s Chrome team",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/17/ai-automation-startup-relay-shuts-down-staff-joins-googles-chrome-team/",
  },
  {
    date: "2026-08-17",
    headline: "Amazon, which started off selling books, is destroying rare texts to train AI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/17/amazon-once-an-online-bookseller-is-destroying-rare-books-to-train-ai-models/",
  },
  {
    date: "2026-08-17",
    headline: "Groq raises $350M to fuel its pivot from AI chips to neocloud",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/17/groq-raises-350m-to-fuel-its-pivot-from-ai-chips-to-neocloud/",
  },
  {
    date: "2026-08-17",
    headline: "Nvidia investing $1.5B in SoftBank data center developer behind OpenAI project",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/17/nvidia-investing-1-5b-in-softbank-data-center-developer-behind-openai-project/",
  },
  {
    date: "2026-08-16",
    headline: "Stripe will reportedly acquire AI gateway startup OpenRouter for $7B+",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/16/stripe-will-reportedly-acquire-ai-gateway-startup-openrouter-for-7b/",
  },
  {
    date: "2026-08-16",
    headline: "Why people aren&#8217;t buying Mark Zuckerberg’s AI future",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/16/why-people-arent-buying-mark-zuckerbergs-ai-future/",
  },
  {
    date: "2026-08-16",
    headline: "Anthropic CEO says AI backlash is ‘fundamentally a crisis of trust’",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/16/anthropic-ceo-says-ai-backlash-is-fundamentally-a-crisis-of-trust/",
  },
  {
    date: "2026-08-16",
    headline: "OpenAI reportedly disbanded its preparedness team",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/980817/openai-disbands-preparedness-team",
  },
  {
    date: "2026-08-16",
    headline: "ChatGPT’s Computer History tracks your clicks and keystrokes",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/980742/chatgpts-computer-history-tracks-your-clicks-and-keystrokes",
  },
  {
    date: "2026-08-15",
    headline: "Woman claims her stepfather used Grok to transform childhood photo into explicit imagery",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/2026/08/15/woman-claims-her-stepfather-used-grok-to-transform-childhood-photo-into-explicit-imagery/",
  },
  {
    date: "2026-08-15",
    headline: "Anthropic shares more details about how Claude’s new watermarks will work",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/15/anthropic-shares-more-details-about-how-claudes-new-watermarks-will-work/",
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
