import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { grades, site } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
export default function SubjectDetail({ subject }) {
  return <>
    <PageHero path={subject.href} label={subject.name} parent={{ name: "Subjects", href: "/subjects" }} eyebrow={subject.grade} title={<>{subject.name},<br /><span className="serif-accent">with a little more possibility.</span></>} description={subject.overview} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Course", name: subject.name + " online tutoring", description: subject.overview, provider: { "@type": "EducationalOrganization", name: site.name, sameAs: site.url } }} />
    <section className="section-space subject-detail-intro"><div className="container-page content-grid"><div><p className="eyebrow">UNDERSTANDING COMES FIRST</p><h2 className="mt-4">Make room for the “aha!” moments.</h2><p>{subject.blurb} One-on-one support gives your child time to explore the concepts they find challenging and build on the ones they already understand.</p><p>Topics vary by school and curriculum. Tell us what your child is working on, and we will help identify a useful starting point.</p><div className="topic-pills">{subject.topics.map(topic => <span key={topic}>{topic}</span>)}</div><Link href="/book-a-free-trial" className="button button-orange">Try a free {subject.name} session <ArrowUpRight size={17} /></Link></div>
    <Reveal direction="right"><aside className="detail-panel"><h2>A lesson shaped around them</h2><ul>{subject.highlights.map(item => <li key={item}><Check size={17} />{item}</li>)}</ul></aside></Reveal></div></section>
    <section className="section-space grades-section"><div className="container-page"><div className="section-heading"><div><p className="eyebrow">MEET THEM AT THEIR LEVEL</p><h2>Find your child’s grade.</h2></div><p>A starting point for the next chapter.</p></div><div className="related-grid">{grades.map((grade, i) => <Reveal key={grade.slug} delay={(i % 4) * 55}><Link href={`/grades/${grade.slug}`} className="related-card"><h3>{grade.name}</h3><p>{grade.ageRange}</p><span>Explore tutoring <ArrowUpRight size={15} /></span></Link></Reveal>)}</div></div></section>
    <CTABand title={`A brighter way to learn ${subject.name.toLowerCase()}.`} />
  </>;
}
