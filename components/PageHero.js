import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema } from "@/lib/seo";
export default function PageHero({ eyebrow, title, description, path, label, parent }) {
  const crumbs = [...(parent ? [parent] : []), { name: label, href: path }];
  return <section className="page-hero"><StructuredData data={breadcrumbSchema(crumbs)} /><div className="container-page">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{crumbs.map((item, index) => <span className="inline-flex items-center gap-2" key={item.href}><ChevronRight size={11} />{index < crumbs.length - 1 ? <Link href={item.href}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}</span>)}</nav>
    <div className="page-hero-inner"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{description}</p></div><div className="page-hero-symbol" aria-hidden="true"><Sparkles /></div></div>
  </div></section>;
}
