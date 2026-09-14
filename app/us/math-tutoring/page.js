import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import Reveal from "@/components/Reveal";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/us/math-tutoring",
  "Online Math Tutoring for US Students | K–10 Common Core & State Standards | BrightRise Academy",
  "Expert 1-on-1 online math tutoring for US students in Kindergarten to Grade 10. Master Common Core, Pre-Algebra, Algebra, Geometry, and homework confidence. Free trial."
);

const mathModules = [
  {
    title: "Elementary Math (K – Grade 5)",
    items: [
      "Number sense, counting, and place value",
      "Addition & subtraction fact fluency",
      "Multiplication & long division concepts",
      "Fractions, decimals, and percentages",
      "Word problems & multi-step thinking",
    ],
  },
  {
    title: "Middle School Math (Grades 6 – 8)",
    items: [
      "Ratios, proportions, and unit rates",
      "Negative numbers and integer operations",
      "Pre-Algebra & variable expressions",
      "Linear equations and graphing",
      "Foundational 2D/3D geometry & volume",
    ],
  },
  {
    title: "High School Math (Grades 9 – 10)",
    items: [
      "Algebra 1: Linear, quadratic, & exponential functions",
      "High School Geometry: Proofs, congruence, & circles",
      "Algebra 2: Polynomials & complex systems",
      "Graphing calculator proficiency",
      "State end-of-course exam prep",
    ],
  },
];

const faqs = [
  {
    q: "How do your tutors align with US Common Core and state math standards?",
    a: "Our tutors are deeply versed in Common Core State Standards (CCSS) for Mathematics as well as state-specific standards like Texas TEKS, Florida B.E.S.T., and California frameworks. We teach both the conceptual understanding required by modern standards and traditional procedural fluency.",
  },
  {
    q: "Can the tutor help with my child's daily school homework?",
    a: "Yes! While we build long-term conceptual mastery, sessions often begin by reviewing difficult homework problems, clarifying confusing teacher notes, and preparing for upcoming unit tests.",
  },
  {
    q: "What US grade levels do you teach for math?",
    a: "We provide comprehensive math tutoring from Kindergarten through Grade 10, including elementary math, middle school math, Pre-Algebra, Algebra 1, Geometry, and Algebra 2.",
  },
  {
    q: "How does the free trial math session work?",
    a: "Your first 50-minute trial session is completely free. We assess your child's current math comfort, identify specific gaps, and provide a live 1-on-1 lesson with a dedicated tutor. No credit card required.",
  },
];

export default function USMathTutoringPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "United States", href: "/us" },
          { name: "Math Tutoring", href: "/us/math-tutoring" },
        ])}
      />
      <StructuredData data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="geo-subpage-hero">
        <div className="container-page">
          <nav className="geo-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/us">United States</Link>
            <span>/</span>
            <span>Online Math Tutoring</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> UNITED STATES &bull; K–10 MATHEMATICS
              </p>
              <h1>
                Online Math Tutoring <br />
                <span className="serif-accent">for US Students.</span>
              </h1>
              <p className="hero-description">
                Transform math from a source of frustration into a source of confidence. Live, one-on-one online math tutoring tailored to your child&apos;s grade level, teacher&apos;s syllabus, and US state standards.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#curriculum">
                  View Math Curriculum <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> Common Core, TEKS &amp; State Frameworks</span>
                <span><Check size={15} /> EST, CST, MST, PST Flexible Scheduling</span>
              </div>
            </div>

            <div className="trial-home-form-wrap" id="book-free-trial">
              <ContactForm defaultSubject="Math" />
            </div>
          </div>
        </div>
      </section>

      {/* Grade Quick Links */}
      <section className="section-space" style={{ paddingBlock: "48px", background: "#f5f3ee", borderBottom: "1px solid var(--line)" }}>
        <div className="container-page">
          <p className="eyebrow" style={{ marginBottom: "12px" }}>EXPLORE SPECIFIC US GRADE MATH TUTORING</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/us/grade-4-math-tutoring" className="button button-outline" style={{ background: "#fff", fontSize: "12px", minHeight: "40px", padding: "8px 16px" }}>
              Grade 4 Math Tutoring <ArrowRight size={14} />
            </Link>
            <Link href="/us/grade-5-math-tutoring" className="button button-outline" style={{ background: "#fff", fontSize: "12px", minHeight: "40px", padding: "8px 16px" }}>
              Grade 5 Math Tutoring <ArrowRight size={14} />
            </Link>
            <Link href="/us/grade-6-math-tutoring" className="button button-outline" style={{ background: "#fff", fontSize: "12px", minHeight: "40px", padding: "8px 16px" }}>
              Grade 6 Math Tutoring <ArrowRight size={14} />
            </Link>
            <Link href="/us/grade-10-math-tutoring" className="button button-outline" style={{ background: "#fff", fontSize: "12px", minHeight: "40px", padding: "8px 16px" }}>
              Grade 10 Math Tutoring <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section id="curriculum" className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">COMPREHENSIVE K–10 SCOPE</p>
              <h2>
                Mastering the Building Blocks<br />
                <span className="serif-accent">of US School Mathematics.</span>
              </h2>
            </div>
            <div>
              <p>
                Math is cumulative. Missing a single foundational concept—like fractions or integer operations—creates persistent struggles later. Our tutors identify and repair these gaps systematically.
              </p>
            </div>
          </div>

          <div className="geo-curriculum-breakdown">
            {mathModules.map((mod) => (
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

      {/* The BrightRise Approach */}
      <section className="section-space geo-curriculum-section">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHY OUR US MATH TUTORING WORKS</p>
              <h2>
                We Teach the &ldquo;Why&rdquo; Behind the Math,<br />
                <span className="serif-accent">not just memorized tricks.</span>
              </h2>
            </div>
          </div>

          <div className="geo-feature-grid">
            <div className="geo-feature-card">
              <div className="geo-icon-box"><Compass size={24} /></div>
              <h3>Visual &amp; Conceptual Explanations</h3>
              <p>Before introducing formulas, tutors use interactive diagrams and real-world representations so numbers make intuitive sense.</p>
            </div>

            <div className="geo-feature-card">
              <div className="geo-icon-box"><ShieldCheck size={24} /></div>
              <h3>Eliminating Math Anxiety</h3>
              <p>In a private 1-on-1 setting, children can ask questions without fear of judgment, building self-reliance and genuine problem-solving grit.</p>
            </div>

            <div className="geo-feature-card">
              <div className="geo-icon-box"><UserCheck size={24} /></div>
              <h3>School &amp; Test Alignment</h3>
              <p>We work directly alongside your student&apos;s school textbook and upcoming quizzes, ensuring tutoring results reflect directly on report cards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-space faq-section">
        <div className="container-page">
          <div className="center-heading">
            <p className="eyebrow">FREQUENT QUESTIONS</p>
            <h2>US Math Tutoring Questions.<br /><span className="serif-accent">Clear answers.</span></h2>
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
