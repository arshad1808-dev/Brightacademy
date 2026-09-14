import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/us/grade-4-math-tutoring",
  "Grade 4 Math Tutoring US | Fractions, Multi-Digit & Word Problems | BrightRise Academy",
  "Targeted 1-on-1 Grade 4 math tutoring for US elementary students. Master fractions, multi-digit multiplication, division, and word problems with confidence. Free trial."
);

const topics = [
  { title: "Multi-Digit Multiplication", desc: "Understanding the area model, partial products, and the standard multiplication algorithm (up to 4 digits by 1 digit, and 2 digits by 2 digits)." },
  { title: "Long Division with Remainders", desc: "Decomposing dividends, understanding remainders conceptually, and applying division to multi-step word problems." },
  { title: "Fraction Equivalence & Comparison", desc: "Visual fraction models, comparing fractions with different numerators and denominators, and generating equivalent fractions." },
  { title: "Adding & Subtracting Fractions", desc: "Adding and subtracting fractions and mixed numbers with like denominators, plus introducing fractions as multiples of unit fractions." },
  { title: "Decimals & Place Value", desc: "Connecting tenths and hundredths to fraction notation (e.g. 0.62 = 62/100) and comparing decimal values." },
  { title: "Angles & Geometric Measurement", desc: "Measuring angles with protractors, classifying shapes by parallel/perpendicular lines, and perimeter/area problem solving." },
];

const faqs = [
  {
    q: "Why do so many US 4th graders struggle with math?",
    a: "Grade 4 is the pivotal transition from basic fact memorization to multi-step conceptual thinking. Students face long division, multi-digit multiplication, and abstract fraction concepts for the first time. Without 1-on-1 guidance, minor confusion quickly compounds into math anxiety.",
  },
  {
    q: "Does your tutoring align with Common Core Grade 4 Math?",
    a: "Yes. Our Grade 4 math curriculum directly mirrors Common Core standard domains: Operations & Algebraic Thinking (OA), Numbers & Operations in Base Ten (NBT), Numbers & Operations Fractions (NF), and Measurement & Data (MD).",
  },
  {
    q: "How does the tutor help with 4th grade homework?",
    a: "Tutors review the exact worksheets and assignments your child brings home from school, guiding them through difficult problem formulations without just giving them the answers.",
  },
];

export default function Grade4MathUSPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "United States", href: "/us" },
          { name: "Math Tutoring", href: "/us/math-tutoring" },
          { name: "Grade 4 Math", href: "/us/grade-4-math-tutoring" },
        ])}
      />
      <StructuredData data={faqSchema(faqs)} />

      <section className="geo-subpage-hero">
        <div className="container-page">
          <nav className="geo-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/us">United States</Link>
            <span>/</span>
            <Link href="/us/math-tutoring">Math Tutoring</Link>
            <span>/</span>
            <span>Grade 4</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> UNITED STATES &bull; ELEMENTARY MATH SPECIALISTS
              </p>
              <h1>
                Grade 4 Math Tutoring <br />
                <span className="serif-accent">for US Students.</span>
              </h1>
              <p className="hero-description">
                Help your 4th grader master long division, fractions, and multi-digit problem solving. Live 1-on-1 tutoring that turns confusion into smiles and self-assurance.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#topics">
                  Explore 4th Grade Topics <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> Common Core &amp; State Testing Ready</span>
                <span><Check size={15} /> Homework &amp; Foundation Support</span>
              </div>
            </div>

            <div className="trial-home-form-wrap" id="book-free-trial">
              <ContactForm defaultGrade="Grade 4" defaultSubject="Math" />
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GRADE 4 FOCUS AREAS</p>
              <h2>
                Core 4th Grade Math Concepts<br />
                <span className="serif-accent">taught step by step.</span>
              </h2>
            </div>
          </div>

          <div className="geo-grades-grid">
            {topics.map((t) => (
              <div key={t.title} className="geo-grade-card">
                <span className="geo-grade-pill">Grade 4 Focus</span>
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
            <h2>Grade 4 Math Tutoring FAQs</h2>
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
