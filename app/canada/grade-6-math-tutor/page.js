import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/canada/grade-6-math-tutor",
  "Grade 6 Math Tutor Canada | Ontario, BC & Alberta Curriculum | BrightRise Academy",
  "1-on-1 Grade 6 math tutoring for Canadian elementary students. Master ratios, fractions, integers, algebra readiness, and provincial assessments. Free trial."
);

const topics = [
  { title: "Ratios, Rates & Percentages", desc: "Understanding part-to-part and part-to-whole ratios, equivalent ratios, and calculating percentages of numbers in real life." },
  { title: "Fractions & Decimals Operations", desc: "Adding and subtracting fractions with unlike denominators, multiplying and dividing decimals by whole numbers." },
  { title: "Integers on the Number Line", desc: "Representing and ordering integers (-10 to +10), understanding zero pairs, and comparing positive and negative numbers." },
  { title: "Algebraic Patterning & Equations", desc: "Describing numerical patterns using algebraic expressions (e.g. 2n + 1), and solving one-variable equations." },
  { title: "Geometry & Coordinate Graphing", desc: "Classifying triangles and quadrilaterals by angles/sides; plotting coordinates in all four quadrants." },
  { title: "Ontario EQAO & Provincial Prep", desc: "Targeted practice with provincial math assessment problem types to build endurance and test confidence." },
];

const faqs = [
  {
    q: "How does Grade 6 math tutoring prepare students for middle school in Canada?",
    a: "Grade 6 is the capstone year of elementary school in Ontario, BC, and Alberta. Mastering integers, fractions, and early algebraic expressions ensures students transition into Grade 7 with high confidence.",
  },
  {
    q: "Do your tutors prepare students for the Ontario EQAO Grade 6 Math assessment?",
    a: "Yes! In Ontario, students write the provincial EQAO assessment at the end of Grade 6. Our tutors review multiple-choice and open-response question formats to ensure your child feels fully prepared.",
  },
  {
    q: "Can the tutor assist with weekly homework and unit tests?",
    a: "Absolutely. Tutors adapt each session to review difficult school questions, explain teacher feedback, and ensure concepts are understood deeply.",
  },
];

export default function Grade6MathCanadaPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Canada", href: "/canada" },
          { name: "Math Tutoring", href: "/canada/math-tutoring" },
          { name: "Grade 6 Math", href: "/canada/grade-6-math-tutor" },
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
            <Link href="/canada/math-tutoring">Math Tutoring</Link>
            <span>/</span>
            <span>Grade 6</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> CANADA &bull; ELEMENTARY MATH SPECIALISTS
              </p>
              <h1>
                Grade 6 Math Tutor Canada <br />
                <span className="serif-accent">for Canadian Students.</span>
              </h1>
              <p className="hero-description">
                Equip your child for intermediate school success. Personalized 1-on-1 tutoring focused on ratios, fractions, integers, patterning, and provincial assessment readiness.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#topics">
                  Explore Grade 6 Topics <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> Ontario, BC &amp; Alberta Frameworks</span>
                <span><Check size={15} /> EQAO &amp; Provincial Test Prep</span>
              </div>
            </div>

            <div className="trial-home-form-wrap" id="book-free-trial">
              <ContactForm defaultGrade="Grade 6" defaultSubject="Math" />
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GRADE 6 MILESTONES</p>
              <h2>
                Essential Grade 6 Competencies<br />
                <span className="serif-accent">aligned with Canadian standards.</span>
              </h2>
            </div>
          </div>

          <div className="geo-grades-grid">
            {topics.map((t) => (
              <div key={t.title} className="geo-grade-card">
                <span className="geo-grade-pill">Grade 6 Focus</span>
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
            <h2>Grade 6 Canadian Math FAQs</h2>
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
