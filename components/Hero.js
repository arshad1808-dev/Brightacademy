import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, ArrowDown, Video, Mic, Monitor } from "lucide-react";
export default function Hero() {
  return <section className="hero-section">
    <div className="container-page hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> K–10 STUDENTS • 1-ON-1 LIVE CLASSES • PERSONALIZED LEARNING</p>
        <h1>Personalized <span style={{ whiteSpace: "nowrap" }}>1-on-1</span><br />Online Tutoring<br /><span className="serif-accent">for Students Worldwide</span></h1>
        <p className="hero-description">Live, engaging classes in Math, Science, English, Social Studies &amp; Coding, tailored to your child’s grade level, curriculum and learning goals.</p>
        <div className="hero-actions"><Link className="button button-orange" href="#book-free-trial">Book a FREE Trial <ArrowUpRight size={19} /></Link><Link className="text-link" href="#subjects">Explore Our Subjects <ArrowUpRight size={17} /></Link></div>
        <div className="hero-reassurance"><span><Check size={15} /> See the BrightRise difference before you commit — your first trial lesson is FREE.</span></div>
      </div>
      <div className="hero-visual">
        <div className="orbit-stamp" aria-hidden="true"><Sparkles size={26} /><span>ROOM TO<br />GROW</span></div>
        <div className="lesson-window">
          <div className="lesson-toolbar"><span><i /> A little curiosity goes a long way</span><span>1:1</span></div>
          <div className="hero-photo"><Image src="/student-at-home.jpg" alt="A young student learning at home with a tutor on a video call" fill priority sizes="(max-width: 767px) 90vw, (max-width: 1100px) 50vw, 540px" /></div>
          <div className="lesson-footer"><span><span className="status-dot" /> Learning, together.</span><div aria-hidden="true"><Mic size={14} /><Video size={15} /><Monitor size={15} /></div></div>
        </div>
        <div className="learning-note"><span className="note-icon"><Check size={20} /></span><div><strong>The best kind of progress?</strong><span>A little more confidence, every day.</span></div></div>
        <div className="subject-float" aria-hidden="true"><span>✦</span> Made for their way of learning</div>
      </div>
    </div>
    <div className="container-page hero-bottom"><span>Every learner is different. Their lessons should be, too.</span><a href="#subjects" aria-label="Explore our subjects"><ArrowDown size={17} /></a></div>
  </section>;
}
