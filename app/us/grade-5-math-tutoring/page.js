import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/us/grade-5-math-tutoring",
  "Grade 5 Math Tutoring US | Decimals, Fractions & Middle School Readiness | BrightRise Academy",
  "Specialized 1-on-1 Grade 5 math tutoring for US students. Master adding/subtracting unlike fractions, decimal operations, coordinate grids, and volume. Free trial."
);

const topics = [
  { title: "Adding & Subtracting Unlike Fractions", desc: "Finding lowest common denominators, adding and subtracting mixed numbers, and solving complex word problems." },
  { title: "Multiplying & Dividing Fractions", desc: "Multiplying fractions by whole numbers/fractions, dividing unit fractions by whole numbers, and visual area models." },
  { title: "Multi-Digit Decimal Operations", desc: "Adding, subtracting, multiplying, and dividing decimals to hundredths using place value strategies and algorithms." },
  { title: "Volume of Rectangular Prisms", desc: "Understanding unit cubes, applying volume formulas (V = l × w × h and V = b × h), and additive volume." },
  { title: "Coordinate Plane & Graphing", desc: "Plotting (x, y) coordinates in the first quadrant, interpreting real-world data points, and finding geometric patterns." },
  { title: "Order of Operations & Expressions", desc: "Using parentheses, brackets, and braces to evaluate numerical expressions accurately (PEMDAS)." },
];

const faqs = [
  {
    q: "Why is 5th Grade math crucial for US students?",
    a: "Grade 5 represents the final foundation of elementary school before middle school math. Concepts like operations with unlike fractions, decimals, and coordinate geometry are essential prerequisites for Grade 6 Pre-Algebra.",
  },
  {
    q: "How does BrightRise prepare 5th graders for middle school?",
    a: "We focus on mathematical reasoning and self-checking strategies rather than rote memorization. This gives students the academic resilience needed for faster-paced middle school classes.",
  },
  {
    q: "Can the tutor prepare my student for 5th grade state exams?",
    a: "Yes. Our tutors help students practice state assessment question types (MAP, STAAR, SBAC, i-Ready, etc.) so they approach standardized testing with calm confidence.",
  },
];

export default function Grade5MathUSPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "United States", href: "/us" },
          { name: "Math Tutoring", href: "/us/math-tutoring" },
          { name: "Grade 5 Math", href: "/us/grade-5-math-tutoring" },
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
            <span>Grade 5</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> UNITED STATES &bull; MIDDLE SCHOOL READINESS
              </p>
              <h1>
                Grade 5 Math Tutoring <br />
                <span className="serif-accent">for US Students.</span>
              </h1>
              <p className="hero-description">
                Prepare your child for middle school success. Live 1-on-1 tutoring focused on unlike fractions, decimal mastery, coordinate graphing, and independent mathematical reasoning.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#topics">
                  Explore 5th Grade Topics <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> Unlike Fractions &amp; Decimals</span>
                <span><Check size={15} /> 5th Grade State Assessment Ready</span>
              </div>
            </div>

            <div className="trial-home-form-wrap" id="book-free-trial">
              <ContactForm defaultGrade="Grade 5" defaultSubject="Math" />
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GRADE 5 MILESTONES</p>
              <h2>
                Key 5th Grade Competencies<br />
                <span className="serif-accent">building middle school readiness.</span>
              </h2>
            </div>
          </div>

          <div className="geo-grades-grid">
            {topics.map((t) => (
              <div key={t.title} className="geo-grade-card">
                <span className="geo-grade-pill">Grade 5 Focus</span>
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
            <h2>Grade 5 Math Tutoring FAQs</h2>
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
