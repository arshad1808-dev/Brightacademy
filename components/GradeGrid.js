import Link from "next/link";
import { ArrowUpRight, Sprout, Shapes, Rocket } from "lucide-react";
import { grades } from "@/lib/site-data";
import Reveal from "@/components/Reveal";
const bands = [
  { name: "Little discoveries", label: "KINDERGARTEN – GRADE 2", description: "Build the foundations. Make room for wonder.", icon: Sprout, min: 0, max: 2 },
  { name: "Growing possibilities", label: "GRADES 3 – 5", description: "Connect ideas. Find their own way of thinking.", icon: Shapes, min: 3, max: 5 },
  { name: "Bigger horizons", label: "GRADES 6 – 10", description: "Go deeper. Take on the next challenge.", icon: Rocket, min: 6, max: 10 },
];
export default function GradeGrid({ showLinkOut = true }) {
  return <section className="section-space grades-section"><div className="container-page"><div className="section-heading"><div><p className="eyebrow">RIGHT HERE. RIGHT NOW.</p><h2>Every age. Every stage.<br /><span className="serif-accent">A little brighter.</span></h2></div>{showLinkOut && <Link href="/grades" className="text-link">Find your child’s grade <ArrowUpRight size={17} /></Link>}</div><div className="grade-band-grid">{bands.map(({ name, label, description, icon: Icon, min, max }, index) => <Reveal key={name} delay={index * 100} direction={index === 0 ? "left" : index === 2 ? "right" : "up"}><article className="grade-band"><Icon size={30} strokeWidth={1.5} /><p className="card-kicker">{label}</p><h3>{name}</h3><p>{description}</p><div className="grade-links">{grades.filter(grade => grade.number >= min && grade.number <= max).map(grade => <Link key={grade.slug} href={`/grades/${grade.slug}`}>{grade.number === 0 ? "K" : grade.number}<span className="sr-only"> {grade.number === 0 ? "Kindergarten" : "grade tutoring"}</span></Link>)}</div></article></Reveal>)}</div>
    <Reveal delay={150}>
      <div className="section-cta-bar">
        <span>Classes available from Kindergarten through Grade 12 for all boards and curricula.</span>
        <Link href="#book-free-trial" className="button button-orange">Book a FREE Trial <ArrowUpRight size={17} /></Link>
      </div>
    </Reveal>
  </div></section>;
}
