import PageHero from "@/components/PageHero";
import GradeGrid from "@/components/GradeGrid";
import CTABand from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/grades", "Online Tutoring by Grade — Kindergarten to Grade 10", "Find personalised online tutoring for every stage, from Kindergarten to Grade 10. Explore grade-specific learning goals and subjects.");
export default function GradesPage() { return <><PageHero path="/grades" label="Grades" eyebrow="GROWING UP. GROWING FORWARD." title={<>Their next chapter.<br /><span className="serif-accent">The right kind of support.</span></>} description="Every grade brings new ideas, new questions, and new opportunities. Explore a starting point for your child, with lessons adapted to their schoolwork and pace." /><GradeGrid showLinkOut={false} /><CTABand /></>; }
