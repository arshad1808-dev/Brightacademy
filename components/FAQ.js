import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";
import { faqs } from "@/lib/site-data";
export default function FAQ({ items = faqs, heading = true }) {
  return <section className="section-space faq-section"><div className="container-page">{heading && <div className="center-heading"><p className="eyebrow">LET’S CLEAR THINGS UP</p><h2>Big questions.<br /><span className="serif-accent">Straightforward answers.</span></h2></div>}<div className="faq-list">{items.map((item, index) => <details key={item.q} className="faq-item" open={index === 0}><summary><span className="faq-number">0{index + 1}</span><span>{item.q}</span><Plus size={19} /></summary><p>{item.a}</p></details>)}</div>    <div className="faq-bottom-cta">
      <p>Still have questions? Or ready to see the BrightRise difference?</p>
      <Link href="#book-free-trial" className="button button-orange">Book a FREE Trial <ArrowUpRight size={17} /></Link>
    </div>
    <p className="faq-footer">Something else on your mind? <Link href="/contact">Let’s talk <ArrowUpRight size={15} /></Link></p>
  </div></section>;
}
