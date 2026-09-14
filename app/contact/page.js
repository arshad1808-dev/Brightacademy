import { MessageCircle, Mail, Globe2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/contact", "Contact BrightRise Academy", "Ask about subjects, grades, scheduling or your child's free trial. Contact BrightRise Academy by email, WhatsApp or our enquiry form.");
export default function ContactPage() {
  return <><PageHero path="/contact" label="Contact" eyebrow="A REAL CONVERSATION STARTS HERE" title={<>Let’s talk about<br /><span className="serif-accent">their next chapter.</span></>} description="Wondering which subject fits, how lessons work, or where to begin? Tell us a little about your learner. We'll help you find a way forward." /><section className="section-space"><div className="container-page content-grid"><div><div className="contact-option"><MessageCircle size={25} strokeWidth={1.5} /><div><h2>A quick hello on WhatsApp</h2><p>Talk to the BrightRise team about your questions.</p><a href={`https://wa.me/${site.whatsapp}`}>{site.phone}</a></div></div><div className="contact-option"><Mail size={25} strokeWidth={1.5} /><div><h2>A little more to share?</h2><p>Send an email. We’d love to hear from you.</p><a href={`mailto:${site.email}`}>{site.email}</a></div></div><div className="contact-option"><Globe2 size={25} strokeWidth={1.5} /><div><h2>At home, around the world</h2><p>Live online tutoring for families worldwide. Let us know your country and time zone when you get in touch.</p></div></div></div><ContactForm enquiry /></div></section></>;
}
