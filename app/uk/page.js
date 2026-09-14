import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle, ArrowRight, Award } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import Reveal from "@/components/Reveal";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/uk",
  "Online Tutoring UK | Maths, English & Science | BrightRise Academy",
  "One-on-one online tutoring for children across the UK, tailored to the National Curriculum, Key Stages 1–4 and GCSE preparation. Book your free trial session."
);

const ukStages = [
  {
    stage: "Early Years",
    years: "Reception",
    age: "Ages 4–5",
    desc: "Early phonics, number bonds, shapes, and fostering a love for learning.",
  },
  {
    stage: "Key Stage 1 (KS1)",
    years: "Year 1 & Year 2",
    age: "Ages 5–7",
    desc: "Phonics screening preparation, foundational arithmetic, reading fluency, and KS1 SATs support.",
  },
  {
    stage: "Key Stage 2 (KS2)",
    years: "Year 3, Year 4, Year 5 & Year 6",
    age: "Ages 7–11",
    desc: "Multiplication tables, fractions, paragraph composition, Year 6 SATs, and 11+ entrance exam readiness.",
  },
  {
    stage: "Key Stage 3 (KS3)",
    years: "Year 7, Year 8 & Year 9",
    age: "Ages 11–14",
    desc: "Transition to secondary school, algebraic expressions, structured essays, and introduction to sciences.",
  },
  {
    stage: "Key Stage 4 & GCSEs (KS4)",
    years: "Year 10 & Year 11",
    age: "Ages 14–16",
    desc: "Comprehensive GCSE preparation in Maths, Combined/Triple Science, English Language, and English Literature.",
  },
];

const ukSubjects = [
  {
    name: "Maths",
    topics: ["Number & Place Value", "Fractions & Percentages", "Algebra & Equations", "Geometry & Measures", "GCSE Exam Papers"],
    blurb: "From primary arithmetic to higher-tier GCSE Maths, our tutors make complex problems click.",
  },
  {
    name: "Science",
    topics: ["Biology", "Chemistry", "Physics", "Combined Science", "Triple Award GCSE"],
    blurb: "Clear explanations of scientific concepts, practical investigations, and exam question techniques.",
  },
  {
    name: "English",
    topics: ["Phonics & Reading", "Creative Writing", "SPaG (Spelling, Punctuation & Grammar)", "GCSE Literature Analysis"],
    blurb: "Developing articulate expression, critical reading, and confident essay writing skills.",
  },
  {
    name: "Coding",
    topics: ["Scratch", "Python", "Logic & Algorithms", "GCSE Computer Science concepts"],
    blurb: "Problem-solving and digital literacy taught through engaging step-by-step programming.",
  },
];

const ukFaqs = [
  {
    q: "Do your tutors follow the National Curriculum in England?",
    a: "Yes. Our tutoring programmes strictly mirror the National Curriculum in England across Key Stages 1 through 4. Tutors can also adapt to Scottish Curriculum for Excellence or Welsh frameworks.",
  },
  {
    q: "Do you provide support for GCSE exams and exam boards?",
    a: "Yes. We support all major UK exam boards including AQA, Edexcel, and OCR for GCSE Maths, Science, and English, focusing on mark schemes and past-paper techniques.",
  },
  {
    q: "What UK times are sessions available?",
    a: "We offer after-school tutoring slots from 3:30 PM to 8:30 PM GMT, as well as full Saturday and Sunday scheduling to fit around family life.",
  },
  {
    q: "How does the free trial lesson work?",
    a: "Your initial 50-minute trial session is completely free. We assess your child's current year group and target areas, pairing them with an expert British curriculum tutor.",
  },
];

export default function UKLandingPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "United Kingdom", href: "/uk" }])} />
      <StructuredData data={faqSchema(ukFaqs)} />

      {/* Hero Section */}
      <section className="hero-section geo-hero">
        <div className="container-page hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> UNITED KINGDOM &bull; 1-ON-1 ONLINE TUTORING
            </p>
            <h1>
              Online Tutoring <span className="serif-accent">for UK Students</span>
            </h1>
            <p className="hero-description">
              One-on-one online tutoring for children across the UK, tailored to their year group, school curriculum, and individual learning goals.
            </p>

            <div className="hero-actions">
              <Link className="button button-orange" href="#book-free-trial">
                Book a FREE Trial <ArrowUpRight size={19} />
              </Link>
              <Link className="text-link" href="#key-stages">
                View Key Stages <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="hero-reassurance">
              <span><Check size={15} /> National Curriculum Aligned</span>
              <span><Check size={15} /> Key Stages 1–4 &amp; GCSEs</span>
              <span><Check size={15} /> UK Time Zones (GMT / BST)</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit-stamp" aria-hidden="true">
              <Award size={24} />
              <span>UK NATIONAL<br />CURRICULUM</span>
            </div>
            <div className="lesson-window">
              <div className="lesson-toolbar">
                <span><i /> Live UK Online Classroom</span>
                <span>Year 1–11</span>
              </div>
              <div className="hero-photo">
                <Image
                  src="/student-learning.jpg"
                  alt="UK student revising with an online tutor during a live one-on-one session"
                  fill
                  priority
                  sizes="(max-width: 767px) 90vw, 540px"
                />
              </div>
              <div className="lesson-footer">
                <span><span className="status-dot" /> Key Stages 1–4 &amp; GCSE Tuition</span>
              </div>
            </div>
            <div className="learning-note">
              <span className="note-icon"><Check size={20} /></span>
              <div>
                <strong>AQA, Edexcel &amp; OCR</strong>
                <span>Past papers &amp; exam technique</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Curriculum Section */}
      <section className="section-space geo-curriculum-section">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">NATIONAL CURRICULUM COMPLIANT</p>
              <h2>
                Aligned With the UK<br />
                <span className="serif-accent">Learning Journey.</span>
              </h2>
            </div>
            <div>
              <p>
                Our tutors tailor lessons to the National Curriculum in England and adapt teaching to your child&apos;s school, year group, and individual learning needs.
              </p>
            </div>
          </div>

          <div className="geo-feature-grid">
            <div className="geo-feature-card">
              <div className="geo-icon-box"><Compass size={24} /></div>
              <h3>Key Stages &amp; SATs Preparation</h3>
              <p>Reinforcing primary numeracy and literacy for Year 2 and Year 6 SATs, ensuring confident transitions between key stages.</p>
            </div>

            <div className="geo-feature-card">
              <div className="geo-icon-box"><Award size={24} /></div>
              <h3>GCSE Exam Technique</h3>
              <p>Targeted exam practice focusing on mark schemes, time management, and multi-mark questions for GCSE Maths, Science, and English.</p>
            </div>

            <div className="geo-feature-card">
              <div className="geo-icon-box"><BookOpen size={24} /></div>
              <h3>Consistent Weekly Progress</h3>
              <p>Detailed tutor feedback after every session keeps parents informed about achievements, targets, and schoolwork alignment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stages Grid */}
      <section id="key-stages" className="section-space grades-section">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YEAR GROUPS &amp; KEY STAGES</p>
              <h2>
                Tailored Support Through Every Key Stage<br />
                <span className="serif-accent">from Reception to Year 11.</span>
              </h2>
            </div>
            <Link href="#book-free-trial" className="button button-orange">
              Book a FREE Trial <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="geo-stages-grid">
            {ukStages.map((stage, idx) => (
              <Reveal key={stage.stage} delay={idx * 50}>
                <div className="geo-stage-card">
                  <div className="stage-top">
                    <span className="geo-grade-pill">{stage.years}</span>
                    <span className="stage-age">{stage.age}</span>
                  </div>
                  <h3>{stage.stage}</h3>
                  <p>{stage.desc}</p>
                  {stage.stage.includes("Key Stage 2") && (
                    <Link href="/uk/year-5-maths-tutor" className="geo-grade-link">
                      Year 5 Maths Tutor Online <ArrowRight size={13} />
                    </Link>
                  )}
                  {stage.stage.includes("Key Stage 4") && (
                    <Link href="/uk/gcse-maths-tutoring" className="geo-grade-link">
                      GCSE Maths Tutoring (Years 10–11) <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UK Subjects */}
      <section className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CORE UK SUBJECTS</p>
              <h2>
                Live 1-on-1 tutoring in Maths,<br />
                <span className="serif-accent">Science, English &amp; Coding.</span>
              </h2>
            </div>
          </div>

          <div className="geo-subjects-grid">
            {ukSubjects.map((sub, index) => (
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
                  {sub.name === "Maths" && (
                    <Link href="/uk/maths-tutoring" className="geo-grade-link" style={{ marginTop: "16px", display: "inline-flex" }}>
                      Explore Online Maths Tutoring UK <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="section-cta-bar">
            <span>Looking for an expert UK Maths or Science tutor?</span>
            <Link href="#book-free-trial" className="button button-orange">
              Book a FREE Trial <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Free Trial Form Section */}
      <section id="book-free-trial" className="section-space trial-home-section">
        <div className="container-page trial-home-grid">
          <div className="trial-home-copy">
            <p className="eyebrow">
              <span className="status-dot" /> UNITED KINGDOM &bull; FREE INTRODUCTORY LESSON
            </p>
            <h2>
              Book Your FREE Trial.<br />
              <span className="serif-accent">See the difference in one session.</span>
            </h2>
            <p className="trial-home-desc">
              Experience personalized British curriculum tutoring. We&apos;ll match your child with an experienced tutor for their year group and target subjects. 100% free with zero commitment.
            </p>
            <div className="trial-perks-list">
              <div className="trial-perk-item">
                <span className="perk-icon"><UserCheck size={18} /></span>
                <div>
                  <strong>One-on-One Dedicated UK Tutor</strong>
                  <p>Individual attention, encouraging guidance, and tailored pacing.</p>
                </div>
              </div>
              <div className="trial-perk-item">
                <span className="perk-icon"><Sparkles size={18} /></span>
                <div>
                  <strong>National Curriculum &amp; GCSE Aligned</strong>
                  <p>Targeted practice for SATs, school exams, and GCSE syllabus.</p>
                </div>
              </div>
              <div className="trial-perk-item">
                <span className="perk-icon"><ShieldCheck size={18} /></span>
                <div>
                  <strong>Zero Obligation, Completely Free</strong>
                  <p>No credit card required. A genuine opportunity to try before deciding.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="trial-home-form-wrap">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* UK FAQs */}
      <section className="section-space faq-section">
        <div className="container-page">
          <div className="center-heading">
            <p className="eyebrow">QUESTIONS FROM UK PARENTS</p>
            <h2>Frequently Asked Questions.<br /><span className="serif-accent">UK Tuition.</span></h2>
          </div>

          <div className="faq-list">
            {ukFaqs.map((faq, idx) => (
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
