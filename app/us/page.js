import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, Star, HelpCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import Reveal from "@/components/Reveal";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/us",
  "Online Tutoring for US Students | K–10 Math, Science & More | BrightRise Academy",
  "Personalized 1-on-1 online tutoring for K–10 students in the US. Math, Science, English, Social Studies and Coding aligned with Common Core and state standards. Book a free trial."
);

const usGrades = [
  { level: "Kindergarten", name: "Kindergarten Tutoring", desc: "Early phonics, number sense, shapes, and building curiosity." },
  { level: "Grade 1", name: "Grade 1 Tutoring", desc: "Early reading fluency, addition/subtraction, and basic science." },
  { level: "Grade 2", name: "Grade 2 Tutoring", desc: "Place value, sentence composition, and independent reading." },
  { level: "Grade 3", name: "Grade 3 Tutoring", desc: "Multiplication, division, paragraph writing, and life science." },
  { level: "Grade 4", name: "Grade 4 Tutoring", desc: "Fractions, decimals, organized multi-step problem solving." },
  { level: "Grade 5", name: "Grade 5 Tutoring", desc: "Middle school readiness, advanced decimals, essay structure." },
  { level: "Grade 6", name: "Grade 6 Tutoring", desc: "Ratios, early algebra, evidence-based reading, and earth science." },
  { level: "Grade 7", name: "Grade 7 Tutoring", desc: "Linear expressions, proportions, text analysis, and physical science." },
  { level: "Grade 8", name: "Grade 8 Tutoring", desc: "Algebra readiness, functions, geometry, and high school prep." },
  { level: "Grade 9", name: "Grade 9 Tutoring", desc: "Algebra 1, Biology, literary analysis, and study habits." },
  { level: "Grade 10", name: "Grade 10 Tutoring", desc: "Geometry, Algebra 2, Chemistry, and exam preparation." },
];

const usSubjects = [
  {
    name: "Mathematics",
    topics: ["Elementary Math", "Middle School Math", "Pre-Algebra", "Algebra 1 & 2", "Geometry", "Problem Solving"],
    blurb: "From early arithmetic to high school algebra, we build solid mathematical reasoning.",
  },
  {
    name: "Science",
    topics: ["Elementary Science", "Earth & Space", "Life Science", "Physical Science", "Biology", "Chemistry"],
    blurb: "Hands-on conceptual understanding connecting textbook science to real-world phenomena.",
  },
  {
    name: "English & Language Arts",
    topics: ["Reading Comprehension", "Essay Writing", "Grammar & Vocabulary", "Literary Analysis", "Phonics"],
    blurb: "Strengthen writing confidence, vocabulary, and deep reading comprehension.",
  },
  {
    name: "Coding & Computer Science",
    topics: ["Scratch", "Python Programming", "Algorithmic Logic", "Computational Thinking"],
    blurb: "Turn screen time into creative thinking with beginner to intermediate coding.",
  },
];

const usFaqs = [
  {
    q: "Do your tutors follow US Common Core standards?",
    a: "Yes. Our tutors are experienced with Common Core Math and ELA standards, as well as state-specific frameworks (such as Texas TEKS, Florida B.E.S.T., and California frameworks). We tailor lessons directly to your student's school syllabus.",
  },
  {
    q: "What US time zones do you accommodate?",
    a: "We offer flexible scheduling across all US time zones: Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST), with convenient afternoon, evening, and weekend slots.",
  },
  {
    q: "How does the free trial work for US families?",
    a: "Your first 50-minute trial session is 100% free with zero obligation. You'll meet a dedicated tutor matched to your child's grade and subject to experience our teaching approach.",
  },
  {
    q: "Can the tutor help with daily US school homework and tests?",
    a: "Absolutely. Tutors can review upcoming quizzes, clarify confusing homework problems, and reinforce foundational concepts that were missed in class.",
  },
];

const struggleItems = [
  "Understanding tricky Math concepts & word problems",
  "Daily frustration and battles during homework time",
  "Reading fluency, essay organization, and grammar",
  "Science concepts, formulas, and test preparation",
  "Falling behind classroom pace or state assessments",
  "Hesitation and lack of confidence to participate in class",
];

export default function USLandingPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "United States", href: "/us" }])} />
      <StructuredData data={faqSchema(usFaqs)} />

      {/* Hero Section */}
      <section className="hero-section geo-hero">
        <div className="container-page hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> UNITED STATES &bull; 1-ON-1 ONLINE TUTORING
            </p>
            <h1>
              Personalized Online Tutoring <span className="serif-accent">for K–10 Students in the US</span>
            </h1>
            <p className="hero-description">
              Help your child learn with confidence through live, one-on-one online tutoring designed around their grade level, learning goals, and US school curriculum.
            </p>

            <div className="hero-actions">
              <Link className="button button-orange" href="#book-free-trial">
                Book a FREE Trial <ArrowUpRight size={19} />
              </Link>
              <Link className="text-link" href="#curriculum">
                Explore US Curriculum <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="hero-reassurance">
              <span><Check size={15} /> Common Core &amp; State Standards</span>
              <span><Check size={15} /> All US Time Zones (EST, CST, MST, PST)</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit-stamp" aria-hidden="true">
              <Sparkles size={24} />
              <span>US K–10<br />CURRICULUM</span>
            </div>
            <div className="lesson-window">
              <div className="lesson-toolbar">
                <span><i /> 1-on-1 Live US Classroom</span>
                <span>US Standard</span>
              </div>
              <div className="hero-photo">
                <Image
                  src="/student-at-home.jpg"
                  alt="US student engaged in a live one-on-one online tutoring class at home"
                  fill
                  priority
                  sizes="(max-width: 767px) 90vw, 540px"
                />
              </div>
              <div className="lesson-footer">
                <span><span className="status-dot" /> Matched to your state syllabus</span>
              </div>
            </div>
            <div className="learning-note">
              <span className="note-icon"><Check size={20} /></span>
              <div>
                <strong>Curriculum Matched</strong>
                <span>Common Core, TEKS, B.E.S.T. &amp; more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* US Curriculum Section */}
      <section id="curriculum" className="section-space geo-curriculum-section">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TAILORED TO US SCHOOLS</p>
              <h2>
                Tutoring That Fits Your Child&apos;s<br />
                <span className="serif-accent">US School Curriculum.</span>
              </h2>
            </div>
            <div>
              <p>
                Every state and school district has unique expectations. Our tutors carefully adapt lessons to your child&apos;s grade level, teacher expectations, and state testing benchmarks.
              </p>
            </div>
          </div>

          <div className="geo-feature-grid">
            <div className="geo-feature-card">
              <div className="geo-icon-box"><Compass size={24} /></div>
              <h3>Common Core &amp; State Frameworks</h3>
              <p>Whether your state adopts Common Core Math/ELA, Texas TEKS, or Florida standards, tutors structure concepts to match classroom lessons.</p>
            </div>

            <div className="geo-feature-card">
              <div className="geo-icon-box"><BookOpen size={24} /></div>
              <h3>Homework &amp; Concept Reinforcement</h3>
              <p>We eliminate homework stress by helping students understand the foundational &ldquo;why&rdquo; behind multi-step formulas and problem sets.</p>
            </div>

            <div className="geo-feature-card">
              <div className="geo-icon-box"><ShieldCheck size={24} /></div>
              <h3>Standardized Test Prep</h3>
              <p>Targeted confidence-building for state testing (e.g. MAP, STAAR, FAST, NY State exams) and school placement tests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels Breakdown */}
      <section className="section-space grades-section">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GRADE-BY-GRADE SUPPORT</p>
              <h2>
                From Kindergarten through Grade 10,<br />
                <span className="serif-accent">support for every milestone.</span>
              </h2>
            </div>
            <Link href="#book-free-trial" className="button button-orange">
              Book a FREE Trial <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="geo-grades-grid">
            {usGrades.map((g, idx) => (
              <Reveal key={g.level} delay={idx * 40}>
                <div className="geo-grade-card">
                  <span className="geo-grade-pill">{g.level}</span>
                  <h3>{g.name}</h3>
                  <p>{g.desc}</p>
                  {g.level === "Grade 4" && (
                    <Link href="/us/grade-4-math-tutoring" className="geo-grade-link">
                      Explore Grade 4 Math <ArrowRight size={13} />
                    </Link>
                  )}
                  {g.level === "Grade 5" && (
                    <Link href="/us/grade-5-math-tutoring" className="geo-grade-link">
                      Explore Grade 5 Math <ArrowRight size={13} />
                    </Link>
                  )}
                  {g.level === "Grade 6" && (
                    <Link href="/us/grade-6-math-tutoring" className="geo-grade-link">
                      Explore Grade 6 Math <ArrowRight size={13} />
                    </Link>
                  )}
                  {g.level === "Grade 10" && (
                    <Link href="/us/grade-10-math-tutoring" className="geo-grade-link">
                      Explore Grade 10 Math <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Taught */}
      <section className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CORE US SUBJECTS</p>
              <h2>
                Focused instruction in the subjects<br />
                <span className="serif-accent">that matter most.</span>
              </h2>
            </div>
          </div>

          <div className="geo-subjects-grid">
            {usSubjects.map((sub, index) => (
              <Reveal key={sub.name} delay={index * 60}>
                <div className="geo-subject-card">
                  <h3>{sub.name}</h3>
                  <p className="geo-subject-blurb">{sub.blurb}</p>
                  <div className="geo-topics-list">
                    {sub.topics.map((top) => (
                      <span key={top} className="geo-topic-chip">
                        <Check size={12} /> {top}
                      </span>
                    ))}
                  </div>
                  {sub.name === "Mathematics" && (
                    <Link href="/us/math-tutoring" className="geo-grade-link" style={{ marginTop: "16px", display: "inline-flex" }}>
                      Explore Online Math Tutoring for US Students <ArrowRight size={13} />
                    </Link>
                  )}
                  {sub.name === "Science" && (
                    <Link href="/us/science-tutoring" className="geo-grade-link" style={{ marginTop: "16px", display: "inline-flex" }}>
                      Explore Online Science Tutoring for US Students <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="section-cta-bar">
            <span>Looking for personalized Math or Science help for your child?</span>
            <Link href="#book-free-trial" className="button button-orange">
              Book a FREE Trial <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Struggling Section */}
      <section className="section-space geo-struggle-section">
        <div className="container-page">
          <div className="geo-struggle-panel">
            <div className="struggle-copy">
              <p className="eyebrow">TURNING STRUGGLE INTO CONFIDENCE</p>
              <h2>Is Your Child Struggling With...?</h2>
              <p>Academic frustration is rarely about ability—it is almost always about missing foundations or pacing. 1-on-1 tutoring bridges that gap quickly.</p>
              
              <ul className="struggle-checklist">
                {struggleItems.map((item) => (
                  <li key={item}>
                    <span className="struggle-check"><Check size={15} strokeWidth={3} /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="#book-free-trial" className="button button-orange mt-6">
                Get Started with a Free Trial <ArrowRight size={17} />
              </Link>
            </div>

            <div className="struggle-stats">
              <div className="struggle-stat-card">
                <strong>92%</strong>
                <p>of parents report measurable improvement in test scores within 8 weeks.</p>
              </div>
              <div className="struggle-stat-card">
                <strong>100%</strong>
                <p>Live one-on-one sessions customized to your student&apos;s learning style.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Form Section */}
      <section id="book-free-trial" className="section-space trial-home-section">
        <div className="container-page trial-home-grid">
          <div className="trial-home-copy">
            <p className="eyebrow">
              <span className="status-dot" /> UNITED STATES &bull; START WITH A FREE TRIAL
            </p>
            <h2>
              Book Your FREE Trial.<br />
              <span className="serif-accent">Watch their confidence grow.</span>
            </h2>
            <p className="trial-home-desc">
              Experience the BrightRise difference firsthand. We&apos;ll pair your child with an expert US curriculum tutor for a live 1-on-1 introductory session. Zero cost, no commitment.
            </p>
            <div className="trial-perks-list">
              <div className="trial-perk-item">
                <span className="perk-icon"><UserCheck size={18} /></span>
                <div>
                  <strong>Live 1-on-1 Dedicated Tutor</strong>
                  <p>Individual attention for all questions without peer pressure.</p>
                </div>
              </div>
              <div className="trial-perk-item">
                <span className="perk-icon"><Sparkles size={18} /></span>
                <div>
                  <strong>Aligned with US School Standards</strong>
                  <p>Direct assistance with your child&apos;s textbook and curriculum.</p>
                </div>
              </div>
              <div className="trial-perk-item">
                <span className="perk-icon"><ShieldCheck size={18} /></span>
                <div>
                  <strong>Zero Obligation, 100% Free</strong>
                  <p>No credit card required. A pure demonstration of quality tutoring.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="trial-home-form-wrap">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* US FAQs */}
      <section className="section-space faq-section">
        <div className="container-page">
          <div className="center-heading">
            <p className="eyebrow">FREQUENT QUESTIONS</p>
            <h2>US Tutoring Questions.<br /><span className="serif-accent">Clear answers.</span></h2>
          </div>

          <div className="faq-list">
            {usFaqs.map((faq, idx) => (
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
