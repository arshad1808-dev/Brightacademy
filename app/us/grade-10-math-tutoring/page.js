import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/us/grade-10-math-tutoring",
  "Grade 10 Math Tutoring US | Geometry & Algebra 2 Tutoring | BrightRise Academy",
  "1-on-1 Grade 10 math tutoring for US high school students. Expert help with Geometry proofs, quadratic functions, trigonometry, and PSAT/SAT readiness. Book a free trial."
);

const topics = [
  { title: "Geometric Proofs & Logic", desc: "Two-column and paragraph proofs, CPCTC, parallel lines with transversals, and deductive reasoning." },
  { title: "Triangle Congruence & Similarity", desc: "SSS, SAS, ASA, AAS, and HL congruence; similar figures and indirect measurement problem solving." },
  { title: "Quadratic Functions & Parabola Graphing", desc: "Factoring trinomials, completing the square, using the quadratic formula, and vertex form transformations." },
  { title: "Circles & Coordinate Geometry", desc: "Equation of a circle, arc length, sector area, tangent lines, and distance/midpoint formulas." },
  { title: "Introductory Trigonometry", desc: "Sine, Cosine, and Tangent ratios (SOH CAH TOA), inverse trig functions, and solving right triangle application problems." },
  { title: "Polynomial & Radical Expressions", desc: "Operations with polynomials, simplifying square roots and cube roots, and rational exponents." },
];

const faqs = [
  {
    q: "Is Grade 10 math typically Geometry or Algebra 2?",
    a: "In the United States, 10th graders usually take either High School Geometry or Algebra 2 (or an Integrated Math II/III curriculum), depending on whether they took Algebra 1 in 8th or 9th grade. Our tutors provide dedicated instruction in both pathways.",
  },
  {
    q: "Can the tutor help raise my 10th grader's GPA?",
    a: "Yes. Grade 10 GPA is heavily weighted by college admissions. We assist directly with homework, lab activities, unit tests, and semester final exams to protect and elevate their academic transcript.",
  },
  {
    q: "Do you integrate PSAT/SAT math preparation?",
    a: "Yes. Grade 10 is the ideal time to develop testing stamina. We introduce heart of algebra and advanced math strategies aligned with the Digital SAT format.",
  },
];

export default function Grade10MathUSPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "United States", href: "/us" },
          { name: "Math Tutoring", href: "/us/math-tutoring" },
          { name: "Grade 10 Math", href: "/us/grade-10-math-tutoring" },
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
            <span>Grade 10</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> UNITED STATES &bull; HIGH SCHOOL MATH EXPERTS
              </p>
              <h1>
                Grade 10 Math Tutoring <br />
                <span className="serif-accent">for US Students.</span>
              </h1>
              <p className="hero-description">
                Elevate your high school GPA. Expert 1-on-1 tutoring covering Geometry proofs, Algebra 2 quadratic functions, trigonometry, and college entrance readiness.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#topics">
                  Explore 10th Grade Topics <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> Geometry, Algebra 2 &amp; Integrated Math</span>
                <span><Check size={15} /> GPA Protection &amp; SAT Foundations</span>
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
              <p className="eyebrow">GRADE 10 CURRICULUM</p>
              <h2>
                Geometry &amp; Algebra 2 Mastery<br />
                <span className="serif-accent">for high school excellence.</span>
              </h2>
            </div>
          </div>

          <div className="geo-grades-grid">
            {topics.map((t) => (
              <div key={t.title} className="geo-grade-card">
                <span className="geo-grade-pill">Grade 10 Focus</span>
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
            <h2>Grade 10 Math Tutoring FAQs</h2>
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
