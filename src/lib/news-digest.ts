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
  {
    date: "2026-05-14",
    headline: "What happens when AI starts building itself?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/14/what-happens-when-ai-starts-building-itself/",
  },
  {
    date: "2026-05-14",
    headline: "OpenAI is reportedly preparing legal action against Apple; it wouldn&#8217;t be the first…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/14/openai-is-reportedly-preparing-legal-action-against-apple-it-wouldnt-be-the-first-partner-to-feel-burned/",
  },
  {
    date: "2026-05-14",
    headline: "Clawdmeter turns your Claude Code usage stats into a tiny desktop dashboard",
    audiences: ["ai-for-kids", "ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/14/clawdmeter-turns-your-claude-code-usage-stats-into-a-tiny-desktop-dashboard/",
  },
  {
    date: "2026-05-14",
    headline: "Who decides what AI tells you? Campbell Brown, once Meta&#8217;s news chief, has thoughts",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/13/who-decides-what-ai-tells-you-campbell-brown-once-metas-news-chief-has-thoughts/",
  },
  {
    date: "2026-05-14",
    headline: "Clio&#8217;s $500M milestone arrives just as Anthropic ups the ante",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/05/13/clios-500m-milestone-arrives-just-as-anthropic-ups-the-ante/",
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
