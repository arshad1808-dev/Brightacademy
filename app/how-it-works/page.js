import PageHero from "@/components/PageHero";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/how-it-works", "How BrightRise Online Tutoring Works", "Share your child's grade and subject, meet a suitable tutor, and begin personalised online lessons. See how to start with a free trial.");
export default function HowItWorksPage() { return <><PageHero path="/how-it-works" label="How it works" eyebrow="LESS FIGURING THINGS OUT. MORE MOVING FORWARD." title={<>A simple beginning.<br /><span className="serif-accent">A brighter way forward.</span></>} description="Finding support for your child should feel reassuring. We help you take it one step at a time, starting with a free introductory session." /><HowItWorks /><FAQ /><CTABand /></>; }
