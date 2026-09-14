import { Check, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site-data";
export const metadata = pageMetadata("/book-a-free-trial", "Book a Free One-on-One Tutoring Trial", "Book your child's free introductory tutoring session. Share their grade, subject and timing to meet a suitable BrightRise Academy tutor.");
export default function TrialPage() {
  return <><StructuredData data={breadcrumbSchema([{ name: "Book a free trial", href: "/book-a-free-trial" }])} /><section><div className="container-page trial-layout"><div className="trial-copy"><p className="eyebrow">THE FIRST STEP IS ON US</p><h1>Meet their tutor.<br /><span className="serif-accent">Find their spark.</span></h1><p>Every child deserves a learning experience that feels right. Start with a free introductory session and discover how personal support can help.</p><ul>{["A live, one-on-one introduction", "A tutor matched to their learning needs", "Subjects from Kindergarten to Grade 10", "Online, wherever your family calls home"].map(point => <li key={point}><Check size={18} />{point}</li>)}</ul><div className="trial-contact"><p>Prefer to talk it through first?</p><a href={`https://wa.me/${site.whatsapp}`}><MessageCircle size={16} />Chat with our team</a><a href={`mailto:${site.email}`}><Mail size={16} />{site.email}</a></div></div><ContactForm /></div></section></>;
}
