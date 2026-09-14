import MentalMathChallenge from "@/components/MentalMathChallenge";
import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/mental-math-challenge",
  "Free Mental Math Challenge for Kids",
  "Try BrightRise Academy's free mental math game: 10 questions, three difficulty levels, and 30 or 60 seconds. Practise addition, subtraction, multiplication and division."
);

export default function MentalMathPage() {
  return <>
    <PageHero eyebrow="A LITTLE PRACTICE. A BIG CONFIDENCE BOOST." title="Bright Rise Mental Math Challenge" description="Ten questions. Your pace. Choose a level and see what you can do—no signup needed." path="/mental-math-challenge" label="Mental Math Challenge" />
    <MentalMathChallenge />
  </>;
}
