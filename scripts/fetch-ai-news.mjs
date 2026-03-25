#!/usr/bin/env node
/**
 * Automated AI News Fetcher
 * Pulls headlines from RSS feeds and news APIs, categorizes them,
 * and updates src/lib/news-digest.ts
 *
 * Run: node scripts/fetch-ai-news.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const NEWS_FILE = join(__dirname, "../src/lib/news-digest.ts");
const MAX_ITEMS = 12;

// ── RSS Feed Sources ──────────────────────────────────────────────
const RSS_FEEDS = [
  {
    url: "https://techcrunch.com/category/artificial-intelligence/feed/",
    name: "TechCrunch AI",
    baseUrl: "https://techcrunch.com",
  },
  {
    url: "https://www.technologyreview.com/feed/",
    name: "MIT Tech Review",
    baseUrl: "https://www.technologyreview.com",
  },
  {
    url: "https://feeds.arstechnica.com/arstechnica/technology-lab",
    name: "Ars Technica",
    baseUrl: "https://arstechnica.com",
  },
  {
    url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml",
    name: "The Verge AI",
    baseUrl: "https://www.theverge.com",
  },
  {
    url: "https://venturebeat.com/category/ai/feed/",
    name: "VentureBeat AI",
    baseUrl: "https://venturebeat.com",
  },
];

// ── Keyword-based audience categorization ──────────────────────────
const AUDIENCE_KEYWORDS = {
  "ai-for-kids": [
    "kids", "children", "child", "elementary", "school", "classroom",
    "education", "parents", "parental", "teach", "student", "learning",
    "scratch", "coding for kids", "kid-friendly", "family", "young",
    "playground", "toy", "game", "age-appropriate", "screen time",
    "voice assistant", "alexa", "siri",
  ],
  "ai-for-teens": [
    "student", "college", "university", "teen", "study", "exam",
    "career", "internship", "competition", "homework", "essay",
    "coding", "developer", "beginner", "tutorial", "learn",
    "portfolio", "resume", "scholarship", "coursework", "campus",
    "graduation", "high school", "prompt engineering",
  ],
  "ai-for-corporates": [
    "enterprise", "business", "company", "corporate", "CEO", "CTO",
    "ROI", "revenue", "budget", "strategy", "deployment", "implement",
    "workforce", "employee", "HR", "recruitment", "governance",
    "compliance", "regulation", "policy", "market", "billion",
    "million", "investment", "funding", "startup", "IPO",
    "productivity", "efficiency", "automation", "agent", "agentic",
    "copilot", "microsoft", "google", "amazon", "nvidia", "openai",
    "anthropic", "meta", "salesforce", "security", "privacy",
  ],
};

// Headlines with these terms are generally interesting across audiences
const BROAD_INTEREST = [
  "chatgpt", "gpt", "claude", "gemini", "ai model", "generative ai",
  "artificial intelligence", "machine learning", "deep learning",
  "regulation", "safety", "open source",
];

// ── Fetch and parse RSS ────────────────────────────────────────────
async function fetchRSS(feed) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(feed.url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "AIThinkTank-NewsBot/1.0 (+https://www.aithinktank.space)",
      },
    });
    clearTimeout(timeout);

    if (!res.ok) {
      console.warn(`  ⚠ ${feed.name}: HTTP ${res.status}`);
      return [];
    }

    const xml = await res.text();
    return parseRSSItems(xml, feed);
  } catch (err) {
    console.warn(`  ⚠ ${feed.name}: ${err.message}`);
    return [];
  }
}

function parseRSSItems(xml, feed) {
  const items = [];

  // Match <item> or <entry> blocks
  const itemRegex = /<(?:item|entry)[\s>]([\s\S]*?)<\/(?:item|entry)>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    // Extract title
    const titleMatch = block.match(/<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
    if (!titleMatch) continue;
    let title = titleMatch[1].trim().replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&apos;/g, "'");

    // Extract link
    let link = "";
    const linkMatch = block.match(/<link[^>]*href=["']([^"']+)["'][^>]*\/?>/i)
      || block.match(/<link[^>]*>([^<]+)<\/link>/i);
    if (linkMatch) link = linkMatch[1].trim();

    // Extract date
    const dateMatch = block.match(/<(?:pubDate|published|updated|dc:date)[^>]*>([\s\S]*?)<\/(?:pubDate|published|updated|dc:date)>/i);
    let dateStr = "";
    if (dateMatch) {
      try {
        const d = new Date(dateMatch[1].trim());
        dateStr = d.toISOString().split("T")[0]; // YYYY-MM-DD
      } catch {
        dateStr = new Date().toISOString().split("T")[0];
      }
    }

    // Only include items from the last 3 days
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    if (dateStr) {
      const itemDate = new Date(dateStr);
      if (itemDate < threeDaysAgo) continue;
    }

    // Filter: must be AI-related
    const lowerTitle = title.toLowerCase();
    const isAI = [
      "ai", "artificial intelligence", "machine learning", "chatgpt",
      "gpt", "claude", "gemini", "llm", "neural", "deep learning",
      "openai", "anthropic", "generative", "automation", "copilot",
      "robot", "nvidia", "model", "training", "inference",
    ].some(kw => lowerTitle.includes(kw));

    if (!isAI) continue;

    items.push({ title, link, date: dateStr, source: feed.name });
  }

  return items.slice(0, 5); // Max 5 per feed
}

// ── Categorize by audience ─────────────────────────────────────────
function categorize(title) {
  const lower = title.toLowerCase();
  const audiences = [];

  for (const [audience, keywords] of Object.entries(AUDIENCE_KEYWORDS)) {
    if (keywords.some(kw => lower.includes(kw))) {
      audiences.push(audience);
    }
  }

  // If broad interest but no specific audience, assign to all
  if (audiences.length === 0 && BROAD_INTEREST.some(kw => lower.includes(kw))) {
    return ["ai-for-kids", "ai-for-teens", "ai-for-corporates"];
  }

  // Default to teens + corporates if still uncategorized
  if (audiences.length === 0) {
    return ["ai-for-teens", "ai-for-corporates"];
  }

  return audiences;
}

// ── Truncate headline to ~100 chars ─────────────────────────────────
function truncateHeadline(title) {
  if (title.length <= 100) return title;
  return title.substring(0, 97).replace(/\s+\S*$/, "") + "…";
}

// ── Read existing news items from the TS file ───────────────────────
function readExistingItems() {
  const content = readFileSync(NEWS_FILE, "utf-8");

  // Extract the array content between the brackets
  const arrayMatch = content.match(/export const newsItems:\s*NewsItem\[\]\s*=\s*\[([\s\S]*?)\];/);
  if (!arrayMatch) return [];

  const items = [];
  // Match each object in the array
  const objRegex = /\{\s*date:\s*"([^"]+)",\s*headline:\s*"([^"]+)",\s*audiences:\s*\[([^\]]+)\](?:,\s*link:\s*"([^"]*)")?\s*,?\s*\}/g;
  let m;
  while ((m = objRegex.exec(arrayMatch[1])) !== null) {
    items.push({
      date: m[1],
      headline: m[2],
      audiences: m[3].split(",").map(s => s.trim().replace(/"/g, "")),
      link: m[4] || "",
    });
  }

  return items;
}

// ── Write updated items back to the TS file ─────────────────────────
function writeNewsFile(items) {
  const itemsStr = items
    .map((item) => {
      const audiences = item.audiences.map(a => `"${a}"`).join(", ");
      const linkLine = item.link ? `\n    link: "${item.link}",` : "";
      return `  {
    date: "${item.date}",
    headline: "${item.headline.replace(/"/g, '\\"')}",
    audiences: [${audiences}],${linkLine}
  }`;
    })
    .join(",\n");

  const fileContent = `import type { Category } from "./articles";

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
${itemsStr},
];

/**
 * Get news items filtered for a specific hub audience.
 * Returns the most recent \`limit\` items.
 */
export function getNewsForCategory(category: Category, limit = 5): NewsItem[] {
  return newsItems
    .filter((item) => item.audiences.includes(category))
    .slice(0, limit);
}
`;

  writeFileSync(NEWS_FILE, fileContent, "utf-8");
}

// ── Deduplicate by checking headline similarity ─────────────────────
function isDuplicate(newTitle, existingItems) {
  const lowerNew = newTitle.toLowerCase();
  return existingItems.some((item) => {
    const lowerExisting = item.headline.toLowerCase();
    // Exact match
    if (lowerNew === lowerExisting) return true;
    // High overlap (>60% words in common)
    const newWords = new Set(lowerNew.split(/\s+/));
    const existingWords = lowerExisting.split(/\s+/);
    const overlap = existingWords.filter(w => newWords.has(w)).length;
    return overlap / Math.max(newWords.size, existingWords.length) > 0.6;
  });
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  const today = new Date().toISOString().split("T")[0];
  console.log(`\n🗞️  AI Think Tank News Fetcher — ${today}\n`);

  // 1. Fetch from all RSS feeds in parallel
  console.log("Fetching RSS feeds...");
  const feedResults = await Promise.all(RSS_FEEDS.map(fetchRSS));
  const allRawItems = feedResults.flat();
  console.log(`  Found ${allRawItems.length} AI-related items across ${RSS_FEEDS.length} feeds\n`);

  if (allRawItems.length === 0) {
    console.log("No new items found. Skipping update.");
    process.exit(0);
  }

  // 2. Read existing items
  const existingItems = readExistingItems();
  console.log(`  Existing items in file: ${existingItems.length}`);

  // 3. Process and deduplicate
  const newItems = [];
  for (const raw of allRawItems) {
    if (isDuplicate(raw.title, [...existingItems, ...newItems])) continue;

    newItems.push({
      date: raw.date || today,
      headline: truncateHeadline(raw.title),
      audiences: categorize(raw.title),
      link: raw.link,
    });
  }

  console.log(`  New unique items: ${newItems.length}\n`);

  if (newItems.length === 0) {
    console.log("No new unique items to add. Skipping update.");
    process.exit(0);
  }

  // 4. Take top 5 new items, merge with existing, cap at MAX_ITEMS
  const topNew = newItems.slice(0, 5);
  const merged = [...topNew, ...existingItems].slice(0, MAX_ITEMS);

  console.log("New headlines added:");
  topNew.forEach((item) => {
    console.log(`  ✓ [${item.date}] ${item.headline}`);
    console.log(`    Audiences: ${item.audiences.join(", ")}`);
    console.log(`    Source: ${item.link}\n`);
  });

  // 5. Write updated file
  writeNewsFile(merged);
  console.log(`\n✅ Updated ${NEWS_FILE} with ${merged.length} items (${topNew.length} new)\n`);
}

main().catch((err) => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});
