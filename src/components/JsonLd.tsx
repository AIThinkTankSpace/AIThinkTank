import type { Article } from "@/lib/articles";

const BASE_URL = "https://www.aithinktank.space";

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Think Tank",
    url: BASE_URL,
    description:
      "Free AI education for kids, teens, and professionals. No jargon, no signup walls.",
    publisher: {
      "@type": "Organization",
      name: "AI Think Tank",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({ article }: { article: Article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    url: `${BASE_URL}/${article.category}/${article.slug}`,
    author: {
      "@type": "Organization",
      name: "AI Think Tank",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Think Tank",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/${article.category}/${article.slug}`,
    },
    keywords: article.tags.join(", "),
    articleSection:
      article.category === "ai-for-kids"
        ? "AI for Kids"
        : article.category === "ai-for-teens"
        ? "AI for Teens"
        : "AI for Corporates",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
