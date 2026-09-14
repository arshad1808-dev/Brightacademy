import Image from "next/image";
import { ArrowUpRight, Heart, Fingerprint, MessagesSquare, Compass } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
const features = [
  [Fingerprint, "Their pace. Their potential.", "We start with where your child is today, and build from there."],
  [MessagesSquare, "Every question is welcome.", "A comfortable space to ask again, think aloud, and try something new."],
  [Compass, "Connected to their schoolwork.", "Lessons shaped around their subjects, curriculum, and learning goals."],
  [Heart, "A human connection.", "Real conversations with a tutor who helps learning feel personal."],
];
export default function WhyUs() {
  return <section className="approach-section section-space"><div className="container-page">
    <div className="section-heading"><div><p className="eyebrow">THE BRIGHTRISE DIFFERENCE</p><h2>Learning is personal.<br /><span className="serif-accent">We keep it that way.</span></h2></div><p>Because progress starts when a child<br />feels seen, heard, and understood.</p></div>
    <div className="approach-grid"><Reveal direction="left" className="approach-image"><Image src="/student-learning.jpg" alt="A student taking notes during an online lesson" fill sizes="(max-width: 767px) 90vw, 480px" /><div><span>SMALL STEPS. BIG MOMENTS.</span><h3>More “aha!”<br />Less “I can’t.”</h3></div></Reveal><div className="feature-grid">{features.map(([Icon, title, description], index) => <Reveal key={title} delay={index * 65}><article className="feature-card"><Icon size={24} strokeWidth={1.6} /><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div></div>
    <div className="why-us-actions">
      <Link href="#book-free-trial" className="button button-orange">Book a FREE Trial <ArrowUpRight size={17} /></Link>
      <Link href="/online-tutoring" className="text-link light-link">Discover our approach <ArrowUpRight size={17} /></Link>
    </div>
  </div></section>;
}
