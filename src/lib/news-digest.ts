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
    date: "2026-11-17",
    headline: "Voyage Labs raises $12 million for a specialized AI travel assistant",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/17/voyage-labs-raises-12-million-for-a-specialized-ai-travel-assistant/",
  },
  {
    date: "2026-11-17",
    headline: "Isomorphic Labs raises $5B as it looks to take drug candidates to clinical trials",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/17/isomorphic-labs-raises-5b-as-it-looks-to-take-drug-candidates-to-clinical-trials/",
  },
  {
    date: "2026-11-17",
    headline: "Science Corporation&#8217;s brain tech is worth $3.5 billion after new funding",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/17/science-corporations-brain-tech-is-worth-3-5-billion-after-new-funding/",
  },
  {
    date: "2026-11-17",
    headline: "Nvidia&#8217;s first big move after Jensen Huang&#8217;s exit targets national security",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/17/nvidias-first-big-move-after-jensen-huangs-exit-targets-national-security/",
  },
  {
    date: "2026-11-17",
    headline: "Spotify&#8217;s new tool aims to stop deepfakes from being attributed to real artists",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/17/spotifys-new-tool-aims-to-stop-deepfakes-from-being-attributed-to-real-artists/",
  },
  {
    date: "2026-11-16",
    headline: "Google Maps can now build trip itineraries with real-time details about each stop",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/16/google-maps-can-now-build-trip-itineraries-with-real-time-details-about-each-stop/",
  },
  {
    date: "2026-11-16",
    headline: "Freshworks alums raise $53M to take on Salesforce, HubSpot with AI-native CRM",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/16/freshworks-alums-raise-53m-to-take-on-salesforce-hubspot-with-ai-native-crm/",
  },
  {
    date: "2026-11-16",
    headline: "Apple launches new app to study how people use AI for health",
    audiences: ["ai-for-teens"],
    link: "https://techcrunch.com/2026/11/15/apple-launches-new-app-to-study-how-people-use-ai-for-health/",
  },
  {
    date: "2026-11-15",
    headline: "Indian chip startup Bharat Semi lands $24M seed round as it eyes global AI sensor market",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/15/indian-chip-startup-bharat-semi-lands-24m-seed-round-as-it-eyes-global-ai-sensor-market/",
  },
  {
    date: "2026-11-15",
    headline: "Is bad news for Jensen Huang also bad news for the AI industry?",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/15/is-bad-news-for-jensen-huang-also-bad-news-for-the-ai-industry/",
  },
  {
    date: "2026-11-15",
    headline: "Where was Nvidia&#8217;s security team?",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/14/where-was-nvidias-security-team/",
  },
  {
    date: "2026-11-14",
    headline: "Elon Musk, other tech execs sign petition calling on Nvidia to reinstate Jensen Huang",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/14/elon-musk-other-tech-execs-sign-petition-calling-on-nvidia-to-reinstate-jensen-huang/",
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
