import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/canada/math-tutoring",
  "Online Math Tutoring Canada | Grades 1–12 Provincial Curriculum | BrightRise Academy",
  "Personalized 1-on-1 online math tutoring for Canadian students. Aligned with Ontario Ministry of Education, BC redesigned curriculum, and Alberta Program of Studies."
);

const modules = [
  {
    title: "Elementary Math (Grades 1 – 6)",
    items: [
      "Number sense, operational fluency, and mental math",
      "Fractions, decimals, percentages, and proportions",
      "Spatial reasoning, patterning, and algebraic thinking",
      "Ontario EQAO Grade 3 & Grade 6 Math preparation",
      "Word problems connecting math to everyday situations",
    ],
  },
  {
    title: "Middle & Junior High Math (Grades 7 – 9)",
    items: [
      "Integers, rational numbers, and powers",
      "Linear relations, rates, ratios, and graphing",
      "Algebraic equations, polynomials, and inequalities",
      "Ontario Grade 9 De-streamed Math (MTH1W) alignment",
      "Alberta Provincial Achievement Tests (PAT) readiness",
    ],
  },
  {
    title: "Senior High School Math (Grades 10 – 12)",
    items: [
      "Grade 10 Principles of Math (MPM2D) / Foundations",
      "Grade 11 Functions (MCR3U) & Pre-Calculus 11",
      "Grade 12 Advanced Functions (MHF4U) & Calculus (MCV4U)",
      "Trigonometric functions, sequences, and vectors",
      "University admissions GPA and diploma exam prep",
    ],
  },
];

const faqs = [
  {
    q: "How do your tutors handle provincial curriculum differences across Canada?",
    a: "Because Canadian education is administered provincially, our tutors specifically tailor lessons to your province's ministry of education framework—whether that is Ontario, British Columbia, Alberta, or other provinces.",
  },
  {
    q: "Do you offer support for high school university-track math in Ontario?",
    a: "Yes! We specialize in Ontario high school math including Grade 9 De-streamed (MTH1W), Grade 10 Academic (MPM2D), Grade 11 Functions (MCR3U), Grade 12 Advanced Functions (MHF4U), and Calculus & Vectors (MCV4U).",
  },
  {
    q: "How does the free trial math lesson work for Canadian families?",
    a: "Your initial 50-minute trial session is completely free. We match your student with an expert tutor familiar with your province's grade-level expectations.",
  },
];

export default function CanadaMathTutoringPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Canada", href: "/canada" },
          { name: "Math Tutoring", href: "/canada/math-tutoring" },
        ])}
      />
      <StructuredData data={faqSchema(faqs)} />

      <section className="geo-subpage-hero">
        <div className="container-page">
          <nav className="geo-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/canada">Canada</Link>
            <span>/</span>
            <span>Online Math Tutoring</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> CANADA &bull; PROVINCIAL CURRICULUM SPECIALISTS
              </p>
              <h1>
                Online Math Tutoring <br />
                <span className="serif-accent">for Canadian Students.</span>
              </h1>
              <p className="hero-description">
                Master Canadian school mathematics with confidence. Live 1-on-1 tutoring tailored to provincial curricula in Ontario, British Columbia, Alberta, and across Canada.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#curriculum">
                  Explore Math Tiers <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> Ontario, BC &amp; Alberta Standards</span>
                <span><Check size={15} /> Elementary to Grade 12 Calculus</span>
              </div>
            </div>

            <div className="trial-home-form-wrap" id="book-free-trial">
              <ContactForm defaultSubject="Math" />
            </div>
          </div>
        </div>
      </section>

      {/* Grade Quick Link */}
      <section className="section-space" style={{ paddingBlock: "48px", background: "#f5f3ee", borderBottom: "1px solid var(--line)" }}>
        <div className="container-page">
          <p className="eyebrow" style={{ marginBottom: "12px" }}>POPULAR CANADIAN MATH TUTORING</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/canada/grade-6-math-tutor" className="button button-outline" style={{ background: "#fff", fontSize: "12px", minHeight: "40px", padding: "8px 16px" }}>
              Grade 6 Math Tutor Canada <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section id="curriculum" className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CANADIAN MATH PATHWAYS</p>
              <h2>
                Structured Math Learning<br />
                <span className="serif-accent">from Elementary through Grade 12.</span>
              </h2>
            </div>
            <div>
              <p>
                From foundational arithmetic to advanced university-prep calculus, our tutors explain concepts clearly, removing frustration and boosting grades.
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
            <h2>Canadian Math Tutoring FAQs</h2>
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
