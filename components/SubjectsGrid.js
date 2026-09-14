import Link from "next/link";
import { ArrowUpRight, Calculator, FlaskConical, BookOpen, Code2, Globe2 } from "lucide-react";
import { subjects } from "@/lib/site-data";
import Reveal from "@/components/Reveal";
const icons = { math: Calculator, science: FlaskConical, english: BookOpen, coding: Code2, "social-studies": Globe2 };
export default function SubjectsGrid({ showLinkOut = true }) {
  return <section className="section-space" id="subjects"><div className="container-page">
    <div className="section-heading"><div><p className="eyebrow">A WORLD OF “WHAT IF?”</p><h2>Find the subject.<br /><span className="serif-accent">Unlock the possibility.</span></h2></div><div><p>From the first “why?” to the next big idea.<br />A little guidance can open a whole new world.</p>{showLinkOut && <Link className="text-link" href="/subjects">Explore all subjects <ArrowUpRight size={17} /></Link>}</div></div>
    <div className="subject-grid">{subjects.map((subject, index) => {
      const Icon = icons[subject.slug];
      return <Reveal key={subject.slug} delay={index * 55} direction={index % 2 ? "up" : "left"}><Link href={subject.href} className={`subject-card subject-${subject.slug}`}><div className="subject-card-top"><span className="subject-icon"><Icon size={29} strokeWidth={1.5} /></span><ArrowUpRight size={21} /></div><span className="card-kicker">{subject.grade}</span><h3>{subject.name}</h3><p>{subject.blurb}</p><div className="card-bottom"><span>{subject.topics.slice(0, 2).join(" · ")}</span><span className="round-arrow"><ArrowUpRight size={17} /></span></div></Link></Reveal>;
    })}</div>
    <Reveal delay={150}>
      <div className="section-cta-bar">
        <span>Not sure where to begin? Experience any subject with a free introductory session.</span>
        <Link href="#book-free-trial" className="button button-orange">Book a FREE Trial <ArrowUpRight size={17} /></Link>
      </div>
    </Reveal>
  </div></section>;
}
