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
  {
    date: "2026-11-14",
    headline: "The AI graveyard: a running list of projects and startups that didn&#8217;t make it",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/14/the-ai-graveyard-a-running-list-of-projects-and-startups-that-didnt-make-it/",
  },
  {
    date: "2026-11-14",
    headline: "Asian governments react to Nvidia CEO Jensen Huang’s exit",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/14/asian-governments-react-to-nvidia-ceo-jensen-huangs-exit/",
  },
  {
    date: "2026-11-13",
    headline: "More autonomy, fewer NDAs: Volunteers have new requests for brain implant trials",
    audiences: ["ai-for-teens", "ai-for-corporates"],
    link: "https://www.technologyreview.com/2026/11/13/1148474/more-autonomy-fewer-ndas-volunteers-have-new-requests-for-brain-implant-trials/",
  },
  {
    date: "2026-11-13",
    headline: "Jensen Huang’s departure blasts big hole in AI startup funding, VCs and founders say",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/13/jensen-huangs-departure-blasts-big-hole-in-ai-startup-funding-vcs-and-founders-say/",
  },
  {
    date: "2026-11-13",
    headline: "AI agent startup LangChain hits $3B valuation",
    audiences: ["ai-for-corporates"],
    link: "https://techcrunch.com/2026/11/13/ai-agent-startup-langchain-hits-3b-valuation/",
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
