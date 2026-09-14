import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
export default function CTABand({ title = "Their next “I did it!” starts here.", body = "Let’s find the right support for your child. A real tutor, a free trial, and a world of possibility." }) {
  return <section className="cta-section"><div className="container-page"><div className="cta-panel"><Sparkles className="cta-spark" size={58} strokeWidth={1} aria-hidden="true" /><p className="eyebrow">A BRIGHTER TOMORROW STARTS TODAY</p><h2>{title}</h2><p>{body}</p><Link href="#book-free-trial" className="button button-dark">Book a FREE Trial <ArrowUpRight size={19} /></Link><span className="cta-note">One-on-one. Online. All about your child.</span></div></div></section>;
}
