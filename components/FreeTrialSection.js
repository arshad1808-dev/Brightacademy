import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Check, Sparkles, Clock, ShieldCheck, HeartHandshake } from "lucide-react";

export default function FreeTrialSection({ id = "book-free-trial" }) {
  return (
    <section id={id} className="section-space trial-home-section">
      <div className="container-page trial-home-grid">
        <Reveal direction="left" className="trial-home-copy">
          <p className="eyebrow">
            <span className="status-dot" /> THE FIRST STEP IS 100% ON US
          </p>
          <h2>
            Book Your FREE Trial.<br />
            <span className="serif-accent">Watch their confidence grow.</span>
          </h2>
          <p className="trial-home-desc">
            See the BrightRise difference before you commit. We’ll pair your child with an expert tutor for a live, interactive 1-on-1 session tailored to their learning pace and goals.
          </p>

          <div className="trial-perks-list">
            <div className="trial-perk-item">
              <span className="perk-icon"><Sparkles size={18} /></span>
              <div>
                <strong>Live 1-on-1 Personal Attention</strong>
                <p>One dedicated tutor focused 100% on your child’s questions and pace.</p>
              </div>
            </div>

            <div className="trial-perk-item">
              <span className="perk-icon"><HeartHandshake size={18} /></span>
              <div>
                <strong>Curriculum &amp; Grade Matched</strong>
                <p>Customized lessons aligned directly to what they study in school.</p>
              </div>
            </div>

            <div className="trial-perk-item">
              <span className="perk-icon"><ShieldCheck size={18} /></span>
              <div>
                <strong>Zero Obligation, Completely Free</strong>
                <p>No credit card required. A genuine opportunity to try before deciding.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className="trial-home-form-wrap">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
