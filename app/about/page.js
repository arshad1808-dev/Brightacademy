import Image from "next/image";
import PageHero from "@/components/PageHero";
import WhyUs from "@/components/WhyUs";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/about", "Our Story & Approach to Personalised Learning", "BrightRise Academy helps Kindergarten to Grade 10 students understand concepts and grow in confidence through personalised one-on-one online tutoring.");
export default function AboutPage() {
  return <><PageHero path="/about" label="Our story" eyebrow="HERE FOR THEIR NEXT CHAPTER" title={<>Every child has a spark.<br /><span className="serif-accent">We help it shine.</span></>} description="BrightRise Academy is built around a simple belief: learning works better when it feels personal." />
    <section className="section-space"><div className="container-page content-grid"><div><p className="eyebrow">OUR MISSION</p><h2 className="mt-4">Understanding today.<br />Confidence for tomorrow.</h2><p>We help students understand what they are learning, at their own pace, with support shaped around the individual. Some learners need more time with the foundations. Others are ready to go deeper.</p><p>Our live, one-on-one online tutoring connects Kindergarten through Grade 10 students with personalised support in Mathematics, Science, English, Social Studies, and Coding.</p><p>As their understanding grows, their learning plan can grow with them. We believe each question, each attempt, and each small discovery deserves room.</p></div><Reveal direction="right" className="approach-image"><Image src="/learning-together.jpg" alt="Children exploring and learning through classroom activities" fill sizes="(max-width: 767px) 90vw, 450px" /></Reveal></div></section>
    <WhyUs /><CTABand /></>;
}
