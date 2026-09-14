import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowUpRight } from "lucide-react";
import { grades, subjects } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, faqSchema } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() { return grades.map(grade => ({ gradeSlug: grade.slug })); }
export async function generateMetadata({ params }) {
  params = await params;
  const grade = grades.find(item => item.slug === params.gradeSlug);
  return grade ? pageMetadata(`/grades/${grade.slug}`, `${grade.name} Online Tutoring`, `${grade.focus} Discover one-on-one ${grade.name} tutoring at BrightRise Academy.`) : {};
}
export default async function GradePage({ params }) {
  params = await params;
  const index = grades.findIndex(item => item.slug === params.gradeSlug);
  if (index < 0) notFound();
  const grade = grades[index];
  const questions = [
    { q: `What can my child study in ${grade.name}?`, a: `We offer Mathematics, Science, English, Social Studies, and beginner-friendly Coding. Typical areas of focus include ${grade.topics.join(", ").toLowerCase()}. Lessons adapt to their school curriculum.` },
    { q: `How is ${grade.name} tutoring personalised?`, a: "The tutor starts with your child's current understanding and goals. One-on-one sessions give them space to ask questions and revisit concepts at a comfortable pace." },
    { q: "How do we get started?", a: "Book a free trial and share your child's subject and preferred timing. Our team will contact you to arrange a suitable introductory session." },
  ];
  return <><PageHero path={`/grades/${grade.slug}`} label={grade.name} parent={{ name: "Grades", href: "/grades" }} eyebrow={grade.ageRange} title={<>{grade.name}.<br /><span className="serif-accent">A new world to discover.</span></>} description={grade.focus} />
    <section className="section-space"><div className="container-page content-grid"><div><h2>Confidence for what comes next.</h2><p>New schoolwork can feel like a big leap. Our one-on-one {grade.name} tutoring offers focused help with the ideas your child is learning now, and the foundations they need to move forward.</p><p>School expectations differ across countries and curricula. These are illustrative topic areas; your tutor will adapt the plan to your child's actual learning needs.</p><Link href="/book-a-free-trial" className="button button-orange mt-7">Book a free {grade.name} trial <ArrowUpRight size={17} /></Link></div><Reveal direction="right"><aside className="detail-panel"><h2>A few things to explore</h2><ul>{grade.topics.map(topic => <li key={topic}><Check size={17} />{topic}</li>)}</ul></aside></Reveal></div></section>
    <section className="section-space grades-section"><div className="container-page"><div className="section-heading"><div><p className="eyebrow">FIND THEIR STARTING POINT</p><h2>Support across their subjects.</h2></div></div><div className="related-grid">{subjects.map((subject,i) => <Reveal key={subject.slug} delay={i * 55}><Link href={subject.href} className="related-card"><h3>{subject.name}</h3><p>{subject.blurb}</p><span>Explore subject <ArrowUpRight size={15} /></span></Link></Reveal>)}</div></div></section>
    <StructuredData data={faqSchema(questions)} /><FAQ items={questions} />
    <div className="container-page"><nav className="grade-pagination" aria-label="Other grades">{grades[index - 1] ? <Link href={`/grades/${grades[index-1].slug}`}>← {grades[index-1].name}</Link> : <span />}<Link href="/grades">All grades</Link>{grades[index+1] ? <Link href={`/grades/${grades[index+1].slug}`}>{grades[index+1].name} →</Link> : <span />}</nav></div>
    <CTABand title={`Let's make ${grade.name} a little brighter.`} /></>;
}
