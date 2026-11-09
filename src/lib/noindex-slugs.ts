/**
 * Slugs for articles that Google has judged "Crawled — currently not indexed"
 * in Search Console. We apply <meta name="robots" content="noindex, follow">
 * to signal that we agree these pages should not be in the index — this
 * removes the quality-drag signal on the overall domain.
 *
 * `follow: true` preserves internal link equity flowing through these pages
 * to other parts of the site (hub pages, cross-promo links, etc.).
 *
 * Reversible: if any slug here is later rewritten with substantial original
 * depth, remove it from this list and request re-indexing in GSC.
 *
 * Last verified in GSC: 2026-11-09 (16 URLs, Crawled — currently not indexed).
 */

type CategorySlug = "ai-for-kids" | "ai-for-teens" | "ai-for-corporates";

export const NOINDEX_SLUGS: Record<CategorySlug, Set<string>> = {
  "ai-for-kids": new Set([
    "ai-problem-solving-formula-for-kids",
    "creativity-and-logic-in-ai",
    "what-is-generative-ai-explained-for-kids",
    "future-ai-jobs-and-staying-ai-ready",
    "how-kids-can-use-ai-to-learn-coding",
    "how-ai-learns-from-mistakes",
    "ai-homework-help-for-elementary-students",
    "ai-and-screen-time-finding-the-balance",
    "should-kids-use-voice-assistants-like-alexa",
  ]),
  "ai-for-teens": new Set<string>([]),
  "ai-for-corporates": new Set([
    "ai-glossary-in-plain-english",
    "ai-and-jobs-what-will-actually-change",
  ]),
};

export function shouldNoindex(category: string, slug: string): boolean {
  const set = NOINDEX_SLUGS[category as CategorySlug];
  return set ? set.has(slug) : false;
}
