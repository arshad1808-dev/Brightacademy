import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/us/grade-6-math-tutoring",
  "Grade 6 Math Tutoring US | Ratios, Pre-Algebra & Middle School Math | BrightRise Academy",
  "Personalized 1-on-1 Grade 6 math tutoring for US middle school students. Ratios, unit rates, negative numbers, algebraic expressions, and equations. Book free trial."
);

const topics = [
  { title: "Ratios, Rates & Proportions", desc: "Understanding unit rates, equivalent ratios, tape diagrams, and using tables to solve real-world percentage and rate problems." },
  { title: "Dividing Fractions by Fractions", desc: "Conceptualizing fraction division using visual models, reciprocal multiplication, and word problem scenarios." },
  { title: "Rational Numbers & Integers", desc: "Locating positive and negative integers on number lines, understanding absolute value, and comparing rational numbers." },
  { title: "Algebraic Expressions & Variables", desc: "Writing, reading, and evaluating expressions with letters representing numbers; applying distributive property." },
  { title: "One-Variable Equations & Inequalities", desc: "Solving one-step equations (x + p = q and px = q), graphing solutions on number lines, and dependent vs independent variables." },
  { title: "Surface Area & Statistics", desc: "Finding area of triangles/polygons, surface area with 3D nets, and summarizing data using mean, median, IQR, and box plots." },
];

const faqs = [
  {
    q: "Why is Grade 6 Math difficult for many new middle schoolers?",
    a: "Grade 6 introduces abstract mathematical symbols: variables like x and y, negative numbers, and proportional thinking. Combined with changing classrooms and new teachers, 1-on-1 tutoring keeps students anchored and ahead of the curve.",
  },
  {
    q: "Do your tutors cover Common Core Grade 6 Standards?",
    a: "Yes. Our curriculum follows CCSS.MATH.CONTENT.6: Ratios & Proportional Relationships (RP), The Number System (NS), Expressions & Equations (EE), Geometry (G), and Statistics & Probability (SP).",
  },
  {
    q: "Can you help prepare for 7th grade accelerated or honors math?",
    a: "Yes! Many of our 6th grade students are aiming for 7th grade honors math and Algebra 1 in 8th grade. We provide enrichment problem sets to help them place into advanced tracks.",
  },
];

export default function Grade6MathUSPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "United States", href: "/us" },
          { name: "Math Tutoring", href: "/us/math-tutoring" },
          { name: "Grade 6 Math", href: "/us/grade-6-math-tutoring" },
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
            <span>Grade 6</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> UNITED STATES &bull; MIDDLE SCHOOL MATH SPECIALISTS
              </p>
              <h1>
                Grade 6 Math Tutoring <br />
                <span className="serif-accent">for US Students.</span>
              </h1>
              <p className="hero-description">
                Conquer middle school math with confidence. Live 1-on-1 tutoring that makes ratios, pre-algebra expressions, negative integers, and equations crystal clear.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#topics">
                  Explore 6th Grade Topics <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> Ratios, Pre-Algebra &amp; Integers</span>
                <span><Check size={15} /> Honors Track Preparation</span>
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
                Key 6th Grade Math Topics<br />
                <span className="serif-accent">making the leap to abstract math.</span>
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
            <h2>Grade 6 Math Tutoring FAQs</h2>
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
