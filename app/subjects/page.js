import PageHero from "@/components/PageHero";
import SubjectsGrid from "@/components/SubjectsGrid";
import CTABand from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/subjects", "Subjects We Teach — K–10 Online Tutoring", "Explore one-on-one Mathematics, Science, English, Social Studies and Coding lessons for Kindergarten through Grade 10.");
export default function SubjectsPage() {
  return <><PageHero path="/subjects" label="Subjects" eyebrow="FOLLOW THEIR CURIOSITY" title={<>Five subjects.<br /><span className="serif-accent">Endless possibilities.</span></>} description="A stronger foundation, a new interest, or a tricky topic finally understood. Find the right support for whatever comes next." /><SubjectsGrid showLinkOut={false} /><CTABand /></>;
}
