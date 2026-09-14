import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Video, MessagesSquare, PencilLine } from "lucide-react";
import Reveal from "@/components/Reveal";

const moments = [
  {
    title: "A question gets room to breathe.",
    detail: "One learner, one tutor, and enough time to understand the next step.",
    icon: MessagesSquare,
    image: "/student-at-home.jpg",
    label: "LIVE 1-ON-1 SESSION",
  },
  {
    title: "Ideas become something real.",
    detail: "A shared screen, a notebook, and a lesson shaped by your child’s curiosity.",
    icon: PencilLine,
    image: "/student-learning.jpg",
    label: "LEARN AT THEIR PACE",
  },
  {
    title: "Small moments build confidence.",
    detail: "The wins may start quietly: one answer, one insight, one “I can do this.”",
    icon: Video,
    image: "/learning-together.jpg",
    label: "MADE FOR GROWTH",
  },
];

export default function VideoSection() {
  return (
    <section className="video-section section-space">
      <div className="container-page">
        <div className="section-heading video-heading">
          <div>
            <p className="eyebrow">A LITTLE LOOK INSIDE</p>
            <h2>Learning that feels<br /><span className="serif-accent">like a conversation.</span></h2>
          </div>
          <div>
            <p>Live lessons keep your child connected,<br />comfortable, and ready to give ideas a try.</p>
            <Link href="/how-it-works" className="text-link">See how BrightRise works <ArrowUpRight size={17} /></Link>
          </div>
        </div>

        <div className="video-story-grid">
          {moments.map(({ title, detail, icon: Icon, image, label }, index) => (
            <Reveal key={title} delay={index * 80} direction={index === 0 ? "left" : index === 2 ? "right" : "up"}>
              <article className="video-story-card">
                <div className="video-story-image">
                  <Image src={image} alt="" fill sizes="(max-width: 767px) 90vw, 33vw" />
                  <span className="video-label"><i />{label}</span>
                  <span className="video-play" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
                </div>
                <div className="video-story-copy">
                  <Icon size={20} strokeWidth={1.6} />
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="video-bottom-cta">
            <p>Ready to give your child the 1-on-1 attention that changes everything?</p>
            <Link href="#book-free-trial" className="button button-orange">Book a FREE Trial <ArrowUpRight size={17} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
