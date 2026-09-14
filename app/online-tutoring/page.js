import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/online-tutoring", "Personalised One-on-One Online Tutoring", "Live online tutoring that adapts to your child's pace, curriculum and goals. Learn about BrightRise Academy's personalised approach for Kindergarten to Grade 10.");
export default function OnlineTutoringPage() { return <><PageHero path="/online-tutoring" label="Online tutoring" eyebrow="PERSONAL SUPPORT. WHEREVER THEY LEARN." title={<>A world of learning.<br /><span className="serif-accent">Right at home.</span></>} description="A real tutor. A live conversation. Lessons that respond to your child, from the first question to the next breakthrough." /><StatsBar /><WhyUs /><HowItWorks /><FAQ /><CTABand /></>; }
