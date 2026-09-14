import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import Reveal from "@/components/Reveal";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/canada",
  "Online Tutoring Canada | Math, Science & English | BrightRise Academy",
  "Personalized one-on-one online tutoring for students across Canada, tailored to provincial curricula in Ontario, BC, Alberta, and beyond. Book a free trial."
);

const canadaGrades = [
  {
    tier: "Early Years",
    grades: "Kindergarten",
    desc: "Early numeracy, phonics, spatial awareness, and building fundamental curiosity.",
  },
  {
    tier: "Elementary School",
    grades: "Grades 1 – 6",
    desc: "Number sense, fractions, problem-solving habits, reading fluency, and introductory science.",
  },
  {
    tier: "Middle / Intermediate",
    grades: "Grades 7 – 8",
    desc: "Algebraic foundations, proportional reasoning, essay writing, and transition to high school expectations.",
  },
  {
    tier: "Secondary School",
    grades: "Grades 9 – 12",
    desc: "Functions, Advanced Functions, Calculus & Vectors, Biology, Chemistry, Physics, and university prep.",
  },
];

const provinces = [
  { name: "Ontario", desc: "Aligned with the Ontario Ministry of Education curriculum (EQAO, Grade 9 De-streamed Math, MCR3U, MHF4U, MCV4U)." },
  { name: "British Columbia", desc: "Tailored to BC's redesigned curriculum, emphasizing core competencies and provincial numeracy assessments." },
  { name: "Alberta", desc: "Targeted support for the Alberta Program of Studies, PATs (Provincial Achievement Tests), and Diploma Exams." },
  { name: "Other Provinces & Territories", desc: "Expert tutoring customized to school syllabi across Quebec, Manitoba, Saskatchewan, and Atlantic Canada." },
];

const canadaSubjects = [
  {
    name: "Mathematics",
    topics: ["Foundational Math", "Fractions & Decimals", "Pre-Algebra", "Functions", "Advanced Functions & Calculus"],
    blurb: "Step-by-step problem-solving aligned with provincial math standards across Canada.",
  },
  {
    name: "Science",
    topics: ["General Science", "Biology", "Chemistry", "Physics", "Environmental Science"],
    blurb: "Clear conceptual mastery and practical problem-solving for elementary and high school science.",
  },
  {
    name: "English & Writing",
    topics: ["Reading Comprehension", "Essay Writing", "Literary Analysis", "Grammar & Vocabulary"],
    blurb: "Developing structured academic writing, analytical reading, and self-expression.",
  },
  {
    name: "Coding & STEM",
    topics: ["Scratch", "Python", "Problem Solving", "Computational Thinking"],
    blurb: "Empowering young Canadian learners with essential programming and digital logic skills.",
  },
];

const canadaFaqs = [
  {
    q: "How do your tutors handle provincial curriculum differences in Canada?",
    a: "Because education in Canada is administered provincially, our tutors specifically adapt lesson plans to your province's guidelines—whether that is Ontario's curriculum, BC's framework, or Alberta's Program of Studies.",
  },
  {
    q: "What Canadian time zones do you accommodate?",
    a: "We offer flexible class timings across all Canadian time zones: Pacific (PST), Mountain (MST), Central (CST), Eastern (EST), and Atlantic (AST), with slots in the afternoon, evening, and weekends.",
  },
  {
    q: "Can you help with preparation for high school courses and exams in Canada?",
    a: "Yes. We support high school students with Grade 9–12 Math (including Functions and Calculus), Chemistry, Physics, and English, assisting with homework, unit tests, and culminating projects.",
  },
  {
    q: "How does the free trial work for Canadian families?",
    a: "Your initial 50-minute trial session is 100% free with no payment details required. We match your student with an experienced tutor for their grade and province to experience our one-on-one approach.",
  },
];

export default function CanadaLandingPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: "Canada", href: "/canada" }])} />
      <StructuredData data={faqSchema(canadaFaqs)} />

      {/* Hero Section */}
      <section className="hero-section geo-hero">
        <div className="container-page hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> CANADA &bull; 1-ON-1 ONLINE TUTORING
            </p>
            <h1>
              Online Tutoring <span className="serif-accent">for Canadian Students</span>
            </h1>
            <p className="hero-description">
              Personalized one-on-one online tutoring for students across Canada, tailored to their grade level, provincial curriculum, and academic goals.
            </p>

            <div className="hero-actions">
              <Link className="button button-orange" href="#book-free-trial">
                Book a FREE Trial <ArrowUpRight size={19} />
              </Link>
              <Link className="text-link" href="#provinces">
                Explore Provincial Support <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="hero-reassurance">
              <span><Check size={15} /> Ontario, BC, Alberta &amp; more</span>
              <span><Check size={15} /> Kindergarten to Grade 12</span>
              <span><Check size={15} /> All Canadian Time Zones (EST, CST, MST, PST)</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit-stamp" aria-hidden="true">
              <Compass size={24} />
              <span>CANADIAN<br />CURRICULA</span>
            </div>
            <div className="lesson-window">
              <div className="lesson-toolbar">
                <span><i /> 1-on-1 Online Classroom Canada</span>
                <span>K–12</span>
              </div>
              <div className="hero-photo">
                <Image
                  src="/learning-together.jpg"
                  alt="Canadian student engaged in personalized online tutoring lesson at home"
                  fill
                  priority
                  sizes="(max-width: 767px) 90vw, 540px"
                />
              </div>
              <div className="lesson-footer">
                <span><span className="status-dot" /> Aligned to Provincial Ministry Guidelines</span>
              </div>
            </div>
            <div className="learning-note">
              <span className="note-icon"><Check size={20} /></span>
              <div>
                <strong>Provincial Alignment</strong>
                <span>Ontario, BC, Alberta &amp; nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provincial Support Section */}
      <section id="provinces" className="section-space geo-curriculum-section">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">COAST TO COAST EXPERTISE</p>
              <h2>
                Tailored to Your<br />
                <span className="serif-accent">Provincial Curriculum.</span>
              </h2>
            </div>
            <div>
              <p>
                Education in Canada is managed at the provincial level. Our tutors take the time to understand your school board&apos;s curriculum expectations and textbook requirements.
              </p>
            </div>
          </div>

          <div className="geo-feature-grid">
            {provinces.map((prov) => (
              <div key={prov.name} className="geo-feature-card">
                <div className="geo-icon-box"><MapPin size={24} /></div>
                <h3>{prov.name}</h3>
                <p>{prov.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canadian Grade Levels */}
      <section className="section-space grades-section">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ACADEMIC JOURNEY</p>
              <h2>
                Structured Support Across Every Level<br />
                <span className="serif-accent">from Kindergarten through Grade 12.</span>
              </h2>
            </div>
            <Link href="#book-free-trial" className="button button-orange">
              Book a FREE Trial <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="geo-grades-grid">
            {canadaGrades.map((cg, idx) => (
              <Reveal key={cg.tier} delay={idx * 60}>
                <div className="geo-grade-card">
                  <span className="geo-grade-pill">{cg.grades}</span>
                  <h3>{cg.tier}</h3>
                  <p>{cg.desc}</p>
                  {cg.tier === "Elementary School" && (
                    <Link href="/canada/grade-6-math-tutor" className="geo-grade-link">
                      Grade 6 Math Tutor Canada <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CORE SUBJECTS IN CANADA</p>
              <h2>
                Personalized instruction in Math,<br />
                <span className="serif-accent">Science, English &amp; STEM.</span>
              </h2>
            </div>
          </div>

          <div className="geo-subjects-grid">
            {canadaSubjects.map((sub, index) => (
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
                    <Link href="/canada/math-tutoring" className="geo-grade-link" style={{ marginTop: "16px", display: "inline-flex" }}>
                      Explore Online Math Tutoring Canada <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="section-cta-bar">
            <span>Need personalized tutoring tailored to your child&apos;s Canadian school syllabus?</span>
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
              <span className="status-dot" /> CANADA &bull; COMPLIMENTARY TRIAL LESSON
            </p>
            <h2>
              Book Your FREE Trial.<br />
              <span className="serif-accent">Experience the BrightRise difference.</span>
            </h2>
            <p className="trial-home-desc">
              We&apos;ll match your child with an expert tutor familiar with your province&apos;s curriculum for a live 1-on-1 introductory session. Completely free, no credit card required.
            </p>
            <div className="trial-perks-list">
              <div className="trial-perk-item">
                <span className="perk-icon"><UserCheck size={18} /></span>
                <div>
                  <strong>1-on-1 Dedicated Canadian Tutor</strong>
                  <p>Focused attention to answer questions and explain concepts clearly.</p>
                </div>
              </div>
              <div className="trial-perk-item">
                <span className="perk-icon"><Sparkles size={18} /></span>
                <div>
                  <strong>Provincial Ministry Aligned</strong>
                  <p>Targeted help with Ontario, BC, Alberta, or regional expectations.</p>
                </div>
              </div>
              <div className="trial-perk-item">
                <span className="perk-icon"><ShieldCheck size={18} /></span>
                <div>
                  <strong>Zero Obligation, 100% Free</strong>
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

      {/* Canada FAQs */}
      <section className="section-space faq-section">
        <div className="container-page">
          <div className="center-heading">
            <p className="eyebrow">QUESTIONS FROM CANADIAN PARENTS</p>
            <h2>Frequently Asked Questions.<br /><span className="serif-accent">Canada Tutoring.</span></h2>
          </div>

          <div className="faq-list">
            {canadaFaqs.map((faq, idx) => (
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
