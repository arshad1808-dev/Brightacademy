import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SubjectsGrid from "@/components/SubjectsGrid";
import WhyUs from "@/components/WhyUs";
import VideoSection from "@/components/VideoSection";
import GradeGrid from "@/components/GradeGrid";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import MentalMathChallenge from "@/components/MentalMathTeaser";
import PricingSection from "@/components/PricingSection";
import FreeTrialSection from "@/components/FreeTrialSection";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, faqSchema } from "@/lib/seo";
import { faqs } from "@/lib/site-data";
export const metadata = pageMetadata(
  "/",
  "Online Tutoring for K–10 Students | Math, Science & More | BrightRise Academy",
  "Personalized 1-on-1 online tutoring for K–10 students in the US. Math, Science, English, Social Studies and Coding. Book a free trial with BrightRise Academy."
);
export default function HomePage() { return <><StructuredData data={faqSchema(faqs)} /><Hero /><StatsBar /><SubjectsGrid /><WhyUs /><VideoSection /><HowItWorks /><MentalMathChallenge /><GradeGrid /><Testimonials /><PricingSection id="pricing" /><FreeTrialSection id="book-free-trial" /><FAQ /><CTABand /></>; }
