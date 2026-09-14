import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/uk/maths-tutoring",
  "Online Maths Tutoring UK | Key Stage 1 to GCSE Maths | BrightRise Academy",
  "One-on-one online maths tutoring for UK primary and secondary pupils. Aligned with the National Curriculum in England, KS2 SATs, KS3, and GCSE preparation. Free trial."
);

const modules = [
  {
    title: "Primary Maths (KS1 & KS2 / Years 1–6)",
    items: [
      "Place value, number bonds, and mental arithmetic",
      "Times tables fluency and rapid recall",
      "Fractions, decimals, percentages, and ratios",
      "Year 6 SATs exam question technique",
      "11+ grammar and independent school entrance prep",
    ],
  },
  {
    title: "Lower Secondary Maths (KS3 / Years 7–9)",
    items: [
      "Transition from primary arithmetic to formal algebra",
      "Linear equations, formulae, and coordinate geometry",
      "Fractions, powers, roots, and standard form",
      "Angles, bearings, polygons, and Pythagoras' theorem",
      "Probability trees and statistical representations",
    ],
  },
  {
    title: "GCSE Maths (KS4 / Years 10–11)",
    items: [
      "Higher & Foundation tier specialist support",
      "Quadratic equations, graphs, and simultaneous equations",
      "Circle theorems, trigonometry, and vector geometry",
      "AQA, Edexcel, and OCR past-paper practice",
      "Targeting Grades 7, 8, and 9 grade boundaries",
    ],
  },
];

const faqs = [
  {
    q: "Do your tutors teach according to the National Curriculum in England?",
    a: "Yes. Our tutoring programmes strictly align with the National Curriculum in England across Key Stages 1 to 4. We ensure that terminology (e.g. vertices, BIDMAS, partitioning) matches what your child learns in school.",
  },
  {
    q: "Which exam boards do you cover for GCSE Maths?",
    a: "We support all major UK exam boards including Edexcel (1MA1), AQA (8300), and OCR (J560) for both Foundation and Higher tiers.",
  },
  {
    q: "How does the free trial lesson work for UK parents?",
    a: "Your initial 50-minute trial session is 100% free with no commitment or credit card needed. We match your pupil with an experienced British curriculum maths tutor who assesses their confidence and target areas.",
  },
];

export default function UKMathsTutoringPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "United Kingdom", href: "/uk" },
          { name: "Maths Tutoring", href: "/uk/maths-tutoring" },
        ])}
      />
      <StructuredData data={faqSchema(faqs)} />

      <section className="geo-subpage-hero">
        <div className="container-page">
          <nav className="geo-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/uk">United Kingdom</Link>
            <span>/</span>
            <span>Online Maths Tutoring</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> UNITED KINGDOM &bull; NATIONAL CURRICULUM MATHS
              </p>
              <h1>
                Online Maths Tutoring <br />
                <span className="serif-accent">for UK Students.</span>
              </h1>
              <p className="hero-description">
                Tailored 1-on-1 online maths tutoring for children across the UK. From primary times tables and SATs to KS3 confidence and GCSE exam success.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#curriculum">
                  View Key Stages <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> National Curriculum KS1 – KS4</span>
                <span><Check size={15} /> AQA, Edexcel &amp; OCR Exam Boards</span>
              </div>
            </div>

            <div className="trial-home-form-wrap" id="book-free-trial">
              <ContactForm defaultSubject="Math" />
            </div>
          </div>
        </div>
      </section>

      {/* Specific UK Quick Links */}
      <section className="section-space" style={{ paddingBlock: "48px", background: "#f5f3ee", borderBottom: "1px solid var(--line)" }}>
        <div className="container-page">
          <p className="eyebrow" style={{ marginBottom: "12px" }}>EXPLORE TARGETED UK MATHS PAGES</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/uk/year-5-maths-tutor" className="button button-outline" style={{ background: "#fff", fontSize: "12px", minHeight: "40px", padding: "8px 16px" }}>
              Year 5 Maths Tutor Online <ArrowRight size={14} />
            </Link>
            <Link href="/uk/gcse-maths-tutoring" className="button button-outline" style={{ background: "#fff", fontSize: "12px", minHeight: "40px", padding: "8px 16px" }}>
              GCSE Maths Tutoring (Years 10–11) <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section id="curriculum" className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">KEY STAGES BREAKDOWN</p>
              <h2>
                Step-by-Step Maths Progression<br />
                <span className="serif-accent">from Primary through GCSEs.</span>
              </h2>
            </div>
            <div>
              <p>
                Our British curriculum tutors make difficult mathematical concepts feel accessible, removing stress and building clear logical thought patterns.
              </p>
            </div>
          </div>

          <div className="geo-curriculum-breakdown">
            {modules.map((mod) => (
              <div key={mod.title} className="curriculum-module-card">
                <h4><BookOpen size={18} color="#a34e1c" /> {mod.title}</h4>
                <ul>
                  {mod.items.map((item) => (
                    <li key={item}>
                      <Check size={14} /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-space faq-section">
        <div className="container-page">
          <div className="center-heading">
            <p className="eyebrow">FREQUENT QUESTIONS</p>
            <h2>UK Maths Tutoring FAQs</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <details key={faq.q} className="faq-item" open={idx === 0}>
                <summary>
                  <span className="faq-number">0{idx + 1}</span>
                  <span>{faq.q}</span>
                  <HelpCircle size={18} />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
