import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/uk/gcse-maths-tutoring",
  "GCSE Maths Tutoring UK | Foundation & Higher Tier Online Tutors | BrightRise Academy",
  "Specialist 1-on-1 GCSE Maths tutoring online for UK Year 10 and Year 11 pupils. AQA, Edexcel, and OCR exam board preparation, past papers, and mark schemes."
);

const topics = [
  { title: "Higher vs Foundation Tier Strategy", desc: "Targeting Grades 4–5 on Foundation or unlocking Grades 7–9 on Higher tier with tailored problem-solving drills." },
  { title: "Algebra & Graphs", desc: "Quadratic formula, completing the square, algebraic fractions, simultaneous equations, and non-linear graphs." },
  { title: "Geometry & Circle Theorems", desc: "Circle theorems with formal geometric reasons, vectors, 3D trigonometry, and sine/cosine rules." },
  { title: "Ratio, Proportion & Rates of Change", desc: "Compound measures (speed, density, pressure), direct and inverse proportion formulas, and gradient of curves." },
  { title: "Probability & Statistics", desc: "Conditional probability, Venn diagrams, tree diagrams, histograms with unequal class widths, and cumulative frequency." },
  { title: "Exam Board Past-Paper Mastery", desc: "Timed practice with authentic Edexcel, AQA, and OCR past papers to master mark schemes and avoid lost method marks." },
];

const faqs = [
  {
    q: "Which GCSE exam boards do your tutors support?",
    a: "We support all UK exam boards including Edexcel (1MA1), AQA (8300), and OCR (J560), as well as Cambridge IGCSE.",
  },
  {
    q: "Can you help a student move from a Grade 5 to a Grade 7 or 8?",
    a: "Yes. Many of our pupils start at a grade 4 or 5 and achieve grade 7, 8, or 9 through structured work on multi-mark question breakdown and exam technique.",
  },
  {
    q: "Do tutors provide past paper homework?",
    a: "Yes! Weekly homework includes authentic exam questions, which tutors mark and review in detail during the subsequent 1-on-1 session.",
  },
];

export default function GCSEMathsUKPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "United Kingdom", href: "/uk" },
          { name: "Maths Tutoring", href: "/uk/maths-tutoring" },
          { name: "GCSE Maths", href: "/uk/gcse-maths-tutoring" },
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
            <Link href="/uk/maths-tutoring">Maths Tutoring</Link>
            <span>/</span>
            <span>GCSE Maths</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> UNITED KINGDOM &bull; GCSE MATHS (YEARS 10–11)
              </p>
              <h1>
                GCSE Maths Tutoring <br />
                <span className="serif-accent">for UK Students.</span>
              </h1>
              <p className="hero-description">
                Unlock top GCSE grades with expert 1-on-1 online tutoring. Rigorous past-paper practice, mark-scheme strategies, and personalized support for Edexcel, AQA, and OCR.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#topics">
                  Explore GCSE Syllabus <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> Higher &amp; Foundation Tiers</span>
                <span><Check size={15} /> Edexcel, AQA &amp; OCR Focus</span>
              </div>
            </div>

            <div className="trial-home-form-wrap" id="book-free-trial">
              <ContactForm defaultGrade="Grade 10" defaultSubject="Math" />
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GCSE TARGET MODULES</p>
              <h2>
                Mastering the Highest-Value GCSE Questions<br />
                <span className="serif-accent">across all exam papers.</span>
              </h2>
            </div>
          </div>

          <div className="geo-grades-grid">
            {topics.map((t) => (
              <div key={t.title} className="geo-grade-card">
                <span className="geo-grade-pill">GCSE Module</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
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
            <h2>GCSE Maths Tutoring FAQs</h2>
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
