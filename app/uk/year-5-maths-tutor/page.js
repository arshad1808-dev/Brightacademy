import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/uk/year-5-maths-tutor",
  "Year 5 Maths Tutor Online UK | Fractions, Decimals & 11+ Preparation | BrightRise Academy",
  "Targeted 1-on-1 Year 5 maths tutoring for UK pupils. Master long multiplication, fractions, decimals, percentages, and 11+ entrance exam reasoning. Free trial lesson."
);

const topics = [
  { title: "Formal Long Multiplication & Division", desc: "Multiplying up to 4-digit numbers by 2-digit numbers using formal written methods; short division with remainders." },
  { title: "Fractions, Decimals & Percentages", desc: "Comparing and ordering fractions with denominators that are multiples of the same number; converting between decimals and fractions." },
  { title: "Negative Numbers & Rounding", desc: "Counting forwards and backwards through zero with positive and negative whole numbers; rounding to the nearest 10, 100, 1,000, and 100,000." },
  { title: "Perimeter, Area & Volume", desc: "Calculating perimeter of composite rectilinear shapes; estimating volume and capacity of cuboids." },
  { title: "Geometry & Angles", desc: "Identifying 3D shapes from 2D representations; measuring acute, obtuse, and reflex angles in degrees." },
  { title: "11+ & Entrance Exam Reasoning", desc: "Non-verbal and numerical reasoning problem sets for selective grammar and independent school exams." },
];

const faqs = [
  {
    q: "Why is Year 5 considered the most important primary year for maths in the UK?",
    a: "Year 5 is when pupils solidify the mathematical core needed for the Year 6 SATs and sit 11+ entrance examinations for grammar schools. Falling behind in Year 5 creates severe pressure in Year 6.",
  },
  {
    q: "Do your Year 5 tutors assist with 11+ preparations?",
    a: "Yes. In addition to National Curriculum Year 5 Maths, we provide structured preparation for 11+ numerical reasoning (GL and CEM style assessments).",
  },
  {
    q: "How does the tutor support after-school homework?",
    a: "Tutors can review school homework sheets, ensuring your child understands methods (such as grid method vs formal column method) without parent frustration at the dining table.",
  },
];

export default function Year5MathsUKPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "United Kingdom", href: "/uk" },
          { name: "Maths Tutoring", href: "/uk/maths-tutoring" },
          { name: "Year 5 Maths", href: "/uk/year-5-maths-tutor" },
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
            <span>Year 5</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> UNITED KINGDOM &bull; YEAR 5 MATHS SPECIALISTS
              </p>
              <h1>
                Year 5 Maths Tutor Online <br />
                <span className="serif-accent">for UK Pupils.</span>
              </h1>
              <p className="hero-description">
                Transform your child&apos;s Year 5 maths confidence. Personalized 1-on-1 tutoring covering formal written methods, fractions, decimals, and 11+ entrance preparation.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#topics">
                  Explore Year 5 Topics <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> National Curriculum KS2 Aligned</span>
                <span><Check size={15} /> 11+ Grammar Exam Support Available</span>
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
              <p className="eyebrow">YEAR 5 NATIONAL CURRICULUM</p>
              <h2>
                Key Year 5 Mathematical Competencies<br />
                <span className="serif-accent">taught with patience and clarity.</span>
              </h2>
            </div>
          </div>

          <div className="geo-grades-grid">
            {topics.map((t) => (
              <div key={t.title} className="geo-grade-card">
                <span className="geo-grade-pill">Year 5 Focus</span>
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
            <h2>Year 5 Maths Tutoring FAQs</h2>
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
