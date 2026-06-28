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
    date: "2026-06-27",
    headline: "Apple Vision Pro exec is reportedly leaving for OpenAI",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/27/apple-vision-pro-exec-is-reportedly-leaving-for-openai/",
  },
  {
    date: "2026-06-27",
    headline: "The fittest founder in the room got cancer. Here&#8217;s how he used AI to fight back.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/27/the-fittest-founder-in-the-room-got-cancer-heres-how-he-used-ai-to-fight-back/",
  },
  {
    date: "2026-06-27",
    headline: "Asian AI startups launch Mythos-like  models as Anthropic&#8217;s export ban drags on",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/27/asian-ai-startups-launch-mythos-like-models-as-anthropics-export-ban-drags-on/",
  },
  {
    date: "2026-06-26",
    headline: "The Download: brain-melting heatwaves and unprecedented OpenAI restrictions",
    audiences: ["ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/26/1139780/the-download-heatwaves-brain-health-openai-restrictions/",
  },
  {
    date: "2026-06-26",
    headline: "Heat waves mess with your brain. Scientists are trying to figure out why.",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/06/26/1139760/heat-waves-mess-with-your-brain-scientists-are-trying-to-figure-out-why/",
  },
  {
    date: "2026-06-27",
    headline: "Trump Admin releases Anthropic  Mythos to be used by more than 100 US companies, agencies",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/26/trump-admin-releases-anthropic-mythos-to-be-used-by-more-than-100-us-companies-agencies/",
  },
  {
    date: "2026-06-26",
    headline: "OpenAI limits GPT-5.6 rollout after government request, says restrictions shouldn’t be the norm",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/26/openai-limits-gpt-5-6-rollout-after-government-request-says-restrictions-shouldnt-be-the-norm/",
  },
  {
    date: "2026-06-26",
    headline: "OpenAI poaches Uber India chief to lead its biggest market outside the US",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/26/openai-poaches-uber-india-chief-to-lead-its-biggest-market-outside-the-u-s/",
  },
  {
    date: "2026-06-26",
    headline: "Why everyone from OpenAI to SpaceX is building their own chips (and turning up the heat on Nvidia)",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/video/why-everyone-from-openai-to-spacex-is-building-their-own-chips-and-turning-up-the-heat-on-nvidia/",
  },
  {
    date: "2026-06-26",
    headline: "It&#8217;s not about Anthropic vs. OpenAI anymore",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/26/its-not-about-anthropic-vs-openai-anymore/",
  },
  {
    date: "2026-06-25",
    headline: "The White House is asking OpenAI to slow roll the release of its new model over safety concerns",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/25/the-white-house-is-asking-openai-to-slow-roll-the-release-of-its-new-model-over-safety-concerns/",
  },
  {
    date: "2026-06-25",
    headline: "Patronus AI lands $50M to build ‘digital worlds’ that stress-test AI agents",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/06/25/patronus-ai-lands-50m-to-build-digital-worlds-that-stress-test-ai-agents/",
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
