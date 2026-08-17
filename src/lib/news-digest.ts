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
  {
    date: "2026-08-14",
    headline: "OpenAI and Anthropic in price war as Chinese AI rivals gain ground",
    audiences: ["ai-for-corporates"],
    link: "https://arstechnica.com/ai/2026/08/openai-and-anthropic-in-price-war-as-chinese-ai-rivals-gain-ground/",
  },
  {
    date: "2026-08-15",
    headline: "Have a laugh at AI’s expense by roleplaying as a chatbot",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/entertainment/980502/roleplay-as-an-ai-chatbot",
  },
  {
    date: "2026-08-14",
    headline: "You can now turn off Google Gemini&#8217;s visible watermarks",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/tech/980416/google-gemini-ai-watermarks-removal",
  },
  {
    date: "2026-08-14",
    headline: "Google will now allow users to remove visible watermark from its AI generations",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/08/14/google-will-now-allow-users-to-remove-visible-watermark-from-its-ai-generations/",
  },
  {
    date: "2026-08-14",
    headline: "Does Mark Zuckerberg really believe AI is &#8216;for everyone&#8217;?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/video/does-mark-zuckerberg-really-believe-ai-is-for-everyone/",
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
