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
    date: "2026-06-23",
    headline: "The running list: major tech layoffs in 2026 where employers cited AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/22/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai/",
  },
  {
    date: "2026-06-23",
    headline: "OpenAI launches new initiative to help find and patch open source bugs",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/",
  },
  {
    date: "2026-06-22",
    headline: "The AI world is getting &#8216;loopy&#8217;",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/",
  },
  {
    date: "2026-06-22",
    headline: "AI chipmaker Groq confirms $650M raise, re-staffs after Nvidia&#8217;s $20B not-acqui-hire deal",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/",
  },
  {
    date: "2026-06-22",
    headline: "Nvidia wants to cut data center water use, but that&#8217;s not the same as fixing AI&#8217;s…",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/22/nvidia-wants-to-cut-data-center-water-use-but-thats-not-the-same-as-fixing-ais-water-problem/",
  },
  {
    date: "2026-06-21",
    headline: "When the Trump administration cracks down on Anthropic, who benefits?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/21/when-the-trump-administration-cracks-down-on-anthropic-who-benefits/",
  },
  {
    date: "2026-06-21",
    headline: "Beyond Siri: Here are the practical AI features coming to your iPhone in iOS 27",
    audiences: ["ai-for-kids"],
    link: "https://techcrunch.com/2026/06/21/beyond-siri-here-are-the-practical-ai-features-coming-to-your-iphone-in-ios-27/",
  },
  {
    date: "2026-06-22",
    headline: "The Atlantic created a searchable database of the music used to train AI",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/953183/the-atlantic-searchable-database-music-ai-training-data",
  },
  {
    date: "2026-06-22",
    headline: "Barret Zoph is out at OpenAI again after just five months",
    audiences: ["ai-for-corporates"],
    link: "https://www.theverge.com/ai-artificial-intelligence/952837/barret-zoph-openai-thinking-machines-lab",
  },
  {
    date: "2026-06-20",
    headline: "Signal’s Meredith Whittaker wants you to remember that AI chatbots ‘are not your friends’",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/20/signals-meredith-whittaker-wants-you-to-remember-that-ai-chatbots-are-not-your-friends/",
  },
  {
    date: "2026-06-20",
    headline: "In the Weights is your new AI-centric vanity search",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/20/in-the-weights-is-your-new-ai-centric-vanity-search/",
  },
  {
    date: "2026-06-20",
    headline: "Nobel laureate John Jumper is leaving DeepMind for rival Anthropic",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/",
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
