import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export default function MentalMathTeaser() {
  return (
    <section className="mental-math-section section-space" id="mental-math">
      <div className="container-page mental-math-intro">
        <div>
          <p className="eyebrow"><Sparkles size={13} /> BRIGHTRISE MENTAL MATH CHALLENGE</p>
          <h2>Test your mental<br /><span className="serif-accent">math skills.</span></h2>
          <p>How fast can you solve 10 questions? Challenge yourself, find your rhythm, and see your score.</p>
          <Link className="button button-orange" href="/mental-math-challenge" prefetch={false}>Play now <ArrowRight size={18} /></Link>
        </div>
        <div className="mental-math-preview" aria-hidden="true">
          <span className="math-preview-label">WARM UP</span>
          <strong>27 <i>+</i> 18 <em>= ?</em></strong>
          <div><span>45</span><span><Check size={16} /> Nice work!</span></div>
          <p>10 questions · choose your pace</p>
        </div>
      </div>
    </section>
  );
}
