import { ArrowUpRight, CalendarDays, UserRoundCheck, Sprout } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
const steps = [
  [CalendarDays, "Tell us about your learner", "Share their grade, subjects, and what you’d love for them to feel more confident in."],
  [UserRoundCheck, "Meet their learning partner", "We match your child with a tutor and arrange a free introductory session."],
  [Sprout, "Watch the little wins add up", "Build understanding with live, one-on-one lessons shaped around their needs."],
];
export default function HowItWorks() {
  return <section className="section-space process-section"><div className="container-page"><div className="section-heading"><div><p className="eyebrow">A SIMPLE START</p><h2>The next chapter starts<br /><span className="serif-accent">with one small step.</span></h2></div><Link className="text-link" href="/book-a-free-trial">Let’s get started <ArrowUpRight size={17} /></Link></div><div className="process-grid">{steps.map(([Icon, title, description], index) => <Reveal key={title} delay={index * 100}><article className="process-card"><div className="process-top"><span>0{index + 1}</span><Icon size={26} strokeWidth={1.5} /></div><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div>
    <Reveal delay={180}>
      <div className="process-bottom-cta">
        <p>Get started today with a complimentary introductory lesson.</p>
        <Link className="button button-orange" href="#book-free-trial">Book a FREE Trial <ArrowUpRight size={17} /></Link>
      </div>
    </Reveal>
  </div></section>;
}
