import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import StructuredData from "@/components/StructuredData";
import { faqs } from "@/lib/site-data";
import { pageMetadata, faqSchema } from "@/lib/seo";
export const metadata = pageMetadata("/faq", "Frequently Asked Questions About Online Tutoring", "Get answers about BrightRise Academy's subjects, grades, one-on-one lessons, school curricula and free introductory trial.");
export default function FAQPage() { return <><PageHero path="/faq" label="FAQs" eyebrow="GOOD TO KNOW" title={<>A few questions?<br /><span className="serif-accent">You’re in the right place.</span></>} description="Here are the things families often want to know before getting started. If you need something more specific, our team is happy to help." /><StructuredData data={faqSchema(faqs)} /><FAQ heading={false} /><CTABand /></>; }
