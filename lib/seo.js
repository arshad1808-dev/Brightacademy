import { site } from "@/lib/site-data";
export function pageMetadata(path, title, description) {
  const isAbsolute = typeof title === "string" && title.includes(site.name);
  return {
    title: isAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: isAbsolute ? title : `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "BrightRise Academy — Personal online tutoring" }],
    },
    twitter: {
      card: "summary_large_image",
      title: isAbsolute ? title : `${title} | ${site.name}`,
      description,
      images: ["/social-card.png"],
    },
  };
}
export function breadcrumbSchema(items) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ name: "Home", href: "/" }, ...items].map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: site.url + item.href })) };
}
export function faqSchema(items) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
}
