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
  {
    date: "2026-06-19",
    headline: "A startup claims it broke through a bottleneck that’s holding back LLMs",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/",
  },
  {
    date: "2026-06-19",
    headline: "Brain-computer interface trials are taking off",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/19/1139270/brain-computer-interface-trials-are-taking-off/",
  },
  {
    date: "2026-06-19",
    headline: "Is the US government&#8217;s Anthropic ban accidentally helping the brand?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/is-the-us-governments-anthropic-ban-accidentally-helping-the-brand/",
  },
  {
    date: "2026-06-19",
    headline: "The US banned Anthropic&#8217;s Fable 5 release, but the numbers don&#8217;t seem to care",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/podcast/the-us-banned-anthropics-fable-5-release-but-the-numbers-dont-seem-to-care/",
  },
  {
    date: "2026-06-19",
    headline: "Billionaire Ambani wants AI in every call, app, and home",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/19/billionaire-ambani-wants-ai-in-every-call-app-and-home/",
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
