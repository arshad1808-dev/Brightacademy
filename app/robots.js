import { site } from "@/lib/site-data";
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] }],
    sitemap: site.url + "/sitemap.xml",
    host: site.url,
  };
}
