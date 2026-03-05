export interface DownloadItem {
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  subject: "grammar" | "math" | "science";
  gradeLevel: string;
  tags: string[];
  fileName: string;
  fileSize: string;
  icon: string;
}

export const downloads: DownloadItem[] = [
  // Grammar / English
  {
    slug: "english-grammar-verbs-poster",
    title: "English Grammar Verbs Poster",
    description: "A colorful illustrated poster covering verb types, tenses, and usage. Perfect for classroom walls or study corners at home.",
    seoTitle: "Free English Grammar Verbs Poster PDF — Printable for Kids",
    seoDescription: "Download a free printable English grammar verbs poster for kids. Covers verb types, tenses, and usage with colorful illustrations. Great for classrooms and homeschool.",
    subject: "grammar",
    gradeLevel: "Grades 2–6",
    tags: ["verbs", "grammar", "english", "printable", "poster"],
    fileName: "english-grammar-verbs-poster.pdf",
    fileSize: "435 KB",
    icon: "📝",
  },
  {
    slug: "types-of-sentences-poster",
    title: "Types of Sentences Education Poster",
    description: "Learn the four types of sentences — declarative, interrogative, imperative, and exclamatory — with clear examples and visual cues.",
    seoTitle: "Free Types of Sentences Poster PDF — Printable Grammar Resource",
    seoDescription: "Download a free printable types of sentences poster. Covers declarative, interrogative, imperative, and exclamatory sentences with examples for kids.",
    subject: "grammar",
    gradeLevel: "Grades 2–5",
    tags: ["sentences", "grammar", "english", "printable"],
    fileName: "types-of-sentences-poster.pdf",
    fileSize: "103 KB",
    icon: "💬",
  },
  {
    slug: "conjunctions-grammar-poster",
    title: "Conjunctions Grammar Poster",
    description: "Master coordinating, subordinating, and correlative conjunctions with this illustrated reference poster.",
    seoTitle: "Free Conjunctions Grammar Poster PDF — Printable for Students",
    seoDescription: "Download a free printable conjunctions grammar poster. Learn coordinating, subordinating, and correlative conjunctions with examples. Perfect for kids and classrooms.",
    subject: "grammar",
    gradeLevel: "Grades 3–6",
    tags: ["conjunctions", "grammar", "english", "printable"],
    fileName: "conjunctions-grammar-poster.pdf",
    fileSize: "63 KB",
    icon: "🔗",
  },
  {
    slug: "present-continuous-grammar-poster",
    title: "Present Continuous Tense Poster",
    description: "Visual guide to forming and using the present continuous tense with rules, examples, and common patterns.",
    seoTitle: "Free Present Continuous Tense Poster PDF — Grammar Printable",
    seoDescription: "Download a free printable present continuous tense poster for kids. Visual rules, examples, and sentence patterns. Great for ESL and grammar learning.",
    subject: "grammar",
    gradeLevel: "Grades 2–5",
    tags: ["present continuous", "tenses", "grammar", "ESL"],
    fileName: "present-continuous-grammar-poster.pdf",
    fileSize: "253 KB",
    icon: "⏳",
  },
  {
    slug: "english-grammar-adverbs-poster",
    title: "English Grammar Adverbs Poster",
    description: "Explore different types of adverbs — manner, time, place, frequency, and degree — with examples and colorful illustrations.",
    seoTitle: "Free English Adverbs Poster PDF — Printable Grammar Resource",
    seoDescription: "Download a free printable English adverbs poster for kids. Covers adverbs of manner, time, place, frequency, and degree with clear examples.",
    subject: "grammar",
    gradeLevel: "Grades 3–6",
    tags: ["adverbs", "grammar", "english", "printable"],
    fileName: "english-grammar-adverbs-poster.pdf",
    fileSize: "68 KB",
    icon: "🏃",
  },
  // Math
  {
    slug: "math-split-strategy-poster",
    title: "Math Split Strategy Poster",
    description: "Learn the split strategy for addition and subtraction. Break numbers apart to make mental math easier with step-by-step visual examples.",
    seoTitle: "Free Math Split Strategy Poster PDF — Mental Math for Kids",
    seoDescription: "Download a free printable math split strategy poster. Teaches kids to break numbers apart for easier addition and subtraction. Great for mental math practice.",
    subject: "math",
    gradeLevel: "Grades 1–4",
    tags: ["split strategy", "mental math", "addition", "subtraction"],
    fileName: "math-split-strategy-poster.pdf",
    fileSize: "122 KB",
    icon: "➗",
  },
  {
    slug: "angles-math-poster",
    title: "Angles Math Poster",
    description: "A visual reference for types of angles — acute, right, obtuse, straight, reflex, and full rotation — with measurements and real-world examples.",
    seoTitle: "Free Angles Math Poster PDF — Geometry Printable for Kids",
    seoDescription: "Download a free printable angles math poster for kids. Covers acute, right, obtuse, straight, and reflex angles with clear diagrams and measurements.",
    subject: "math",
    gradeLevel: "Grades 3–6",
    tags: ["angles", "geometry", "math", "printable"],
    fileName: "angles-math-poster.pdf",
    fileSize: "49 KB",
    icon: "📐",
  },
  {
    slug: "order-of-operations-math-poster",
    title: "Order of Operations (BODMAS/PEMDAS) Poster",
    description: "Never get the order wrong again. This poster covers BODMAS/PEMDAS with worked examples and memory tricks.",
    seoTitle: "Free Order of Operations Poster PDF — BODMAS PEMDAS Printable",
    seoDescription: "Download a free printable order of operations poster. Covers BODMAS and PEMDAS with step-by-step examples. Perfect for math classrooms and homework help.",
    subject: "math",
    gradeLevel: "Grades 4–7",
    tags: ["BODMAS", "PEMDAS", "order of operations", "math"],
    fileName: "order-of-operations-math-poster.pdf",
    fileSize: "165 KB",
    icon: "🔢",
  },
  {
    slug: "math-symbols-poster",
    title: "Math Symbols Reference Poster",
    description: "A pastel-themed minimalist poster covering essential math symbols — from basic arithmetic to algebra and geometry notation.",
    seoTitle: "Free Math Symbols Poster PDF — Printable Reference for Students",
    seoDescription: "Download a free printable math symbols reference poster. Covers arithmetic, algebra, and geometry symbols with clean pastel design. Great for classrooms.",
    subject: "math",
    gradeLevel: "Grades 3–8",
    tags: ["math symbols", "reference", "algebra", "geometry"],
    fileName: "math-symbols-poster.pdf",
    fileSize: "30 KB",
    icon: "∑",
  },
  {
    slug: "regular-polygons-math-poster",
    title: "Regular Polygons Math Poster",
    description: "Visual guide to regular polygons from triangles to decagons. Includes number of sides, interior angles, and real-world examples.",
    seoTitle: "Free Regular Polygons Poster PDF — Geometry Printable for Kids",
    seoDescription: "Download a free printable regular polygons poster. Covers triangles to decagons with sides, angles, and real-world examples. Great for geometry learning.",
    subject: "math",
    gradeLevel: "Grades 3–7",
    tags: ["polygons", "geometry", "shapes", "math"],
    fileName: "regular-polygons-math-poster.pdf",
    fileSize: "45 KB",
    icon: "⬡",
  },
  // Science
  {
    slug: "forms-of-energy-science-poster",
    title: "Forms of Energy Science Poster",
    description: "Explore the different forms of energy — kinetic, potential, thermal, electrical, chemical, nuclear, light, and sound — with illustrations and examples.",
    seoTitle: "Free Forms of Energy Poster PDF — Science Printable for Kids",
    seoDescription: "Download a free printable forms of energy science poster. Covers kinetic, potential, thermal, electrical, chemical, and more. Great for physical science classrooms.",
    subject: "science",
    gradeLevel: "Grades 4–8",
    tags: ["energy", "physical science", "physics", "printable"],
    fileName: "forms-of-energy-science-poster.pdf",
    fileSize: "250 KB",
    icon: "⚡",
  },
  {
    slug: "dna-biology-poster",
    title: "DNA Biology Educational Poster",
    description: "A beautifully illustrated poster explaining DNA structure, base pairs, genes, and chromosomes. Makes biology accessible and visual.",
    seoTitle: "Free DNA Biology Poster PDF — Printable Science Resource",
    seoDescription: "Download a free printable DNA biology poster. Learn about DNA structure, base pairs, genes, and chromosomes with colorful diagrams. Perfect for biology students.",
    subject: "science",
    gradeLevel: "Grades 5–9",
    tags: ["DNA", "biology", "genetics", "science"],
    fileName: "dna-biology-poster.pdf",
    fileSize: "151 KB",
    icon: "🧬",
  },
];

export function getDownloadBySlug(slug: string): DownloadItem | undefined {
  return downloads.find((d) => d.slug === slug);
}

export function getDownloadsBySubject(subject: DownloadItem["subject"]): DownloadItem[] {
  return downloads.filter((d) => d.subject === subject);
}
