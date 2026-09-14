import LearningJournal from "@/components/LearningJournal";
import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
    "/blog",
    "Free Daily Learning Journal for Kids",
    "A free, printable learning journal for children to reflect on lessons, build confidence, track questions and plan their next learning step.",
);
export default function BlogPage() {
    return (
        <>
            {/* <PageHero
        path="/blog"
        label="Learning Journal"
        eyebrow="A LITTLE SPACE TO PAUSE AND GROW"
        title={
          <>
            Notice the learning.
            <br />
            <span className="serif-accent">Build the confidence.</span>
          </>
        }
        description="A thoughtful, child-friendly journal to use after any class, homework session, or new discovery."
      /> */}
            <LearningJournal />
        </>
    );
}
