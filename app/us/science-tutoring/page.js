import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, BookOpen, Compass, ShieldCheck, UserCheck, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  "/us/science-tutoring",
  "Online Science Tutoring for US Students | K–10 NGSS Aligned | BrightRise Academy",
  "Interactive 1-on-1 online science tutoring for US elementary, middle, and high school students. Biology, Chemistry, Earth Science, and Physical Science. Free trial."
);

const scienceModules = [
  {
    title: "Elementary Science (K – Grade 5)",
    items: [
      "Life cycles, plants, animals, and ecosystems",
      "Weather patterns, seasons, and Earth systems",
      "States of matter (solids, liquids, gases)",
      "Simple machines, magnets, and energy basics",
      "Scientific observation and asking inquiry questions",
    ],
  },
  {
    title: "Middle School Science (Grades 6 – 8)",
    items: [
      "Cell structure, genetics, and human body systems",
      "Earth & Space Science: Plate tectonics, rocks, and solar system",
      "Physical Science: Atoms, periodic table, and chemical reactions",
      "Forces & Motion: Newton's laws, velocity, and gravity",
      "Designing controlled scientific experiments",
    ],
  },
  {
    title: "High School Science (Grades 9 – 10)",
    items: [
      "Biology: Cellular respiration, photosynthesis, DNA, and evolution",
      "Chemistry: Stoichiometry, atomic bonding, acids/bases, and gas laws",
      "Lab report write-ups and scientific data analysis",
      "Honors & Advanced syllabus support",
      "Unit exam and state end-of-course test preparation",
    ],
  },
];

const faqs = [
  {
    q: "Do you teach according to Next Generation Science Standards (NGSS)?",
    a: "Yes. Our science tutors incorporate NGSS 3-dimensional learning (disciplinary core ideas, science and engineering practices, and crosscutting concepts) to ensure students understand phenomena rather than just memorizing facts.",
  },
  {
    q: "Can the tutor help with laboratory reports and science fair projects?",
    a: "Yes! Tutors assist with formulating hypotheses, understanding variables, interpreting data graphs, and structuring articulate lab reports.",
  },
  {
    q: "What science subjects do you cover in high school?",
    a: "We provide comprehensive 1-on-1 tutoring in High School Biology, Honors Biology, Chemistry, and Integrated Physical Science.",
  },
  {
    q: "How does the free science trial work?",
    a: "Your first 50-minute trial session is 100% free with no credit card required. We match your child with an expert science tutor for their specific grade level and curriculum.",
  },
];

export default function USScienceTutoringPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "United States", href: "/us" },
          { name: "Science Tutoring", href: "/us/science-tutoring" },
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
            <span>Online Science Tutoring</span>
          </nav>

          <div className="geo-subpage-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> UNITED STATES &bull; K–10 SCIENCE PROGRAM
              </p>
              <h1>
                Online Science Tutoring <br />
                <span className="serif-accent">for US Students.</span>
              </h1>
              <p className="hero-description">
                From elementary curiosity to high school Biology and Chemistry. Live, one-on-one online science tutoring aligned with NGSS and state curriculum expectations.
              </p>

              <div className="hero-actions">
                <Link className="button button-orange" href="#book-free-trial">
                  Book a FREE Trial <ArrowUpRight size={19} />
                </Link>
                <Link className="text-link" href="#curriculum">
                  View Science Syllabus <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="hero-reassurance">
                <span><Check size={15} /> NGSS &amp; State Frameworks</span>
                <span><Check size={15} /> Biology, Chemistry &amp; Earth Science</span>
              </div>
            </div>

            <div className="trial-home-form-wrap" id="book-free-trial">
              <ContactForm defaultSubject="Science" />
            </div>
          </div>
        </div>
      </section>

      {/* Science Curriculum Breakdown */}
      <section id="curriculum" className="section-space">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">INQUIRY-DRIVEN SCIENCE</p>
              <h2>
                Making Complex Science Concepts<br />
                <span className="serif-accent">clear and fascinating.</span>
              </h2>
            </div>
            <div>
              <p>
                Science shouldn&apos;t feel like a list of dry definitions. Our tutors use real-world phenomena, interactive visual diagrams, and guided problem sets to make ideas click.
              </p>
            </div>
          </div>

          <div className="geo-curriculum-breakdown">
            {scienceModules.map((mod) => (
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

      {/* Feature Grid */}
      <section className="section-space geo-curriculum-section">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE BRIGHTRISE ADVANTAGE</p>
              <h2>
                Why Students Excel in Science<br />
                <span className="serif-accent">with 1-on-1 tutoring.</span>
              </h2>
            </div>
          </div>

          <div className="geo-feature-grid">
            <div className="geo-feature-card">
              <div className="geo-icon-box"><Compass size={24} /></div>
              <h3>Conceptual Understanding</h3>
              <p>We connect textbook vocabulary to everyday mechanisms, helping students visualize microscopic or abstract phenomena.</p>
            </div>

            <div className="geo-feature-card">
              <div className="geo-icon-box"><ShieldCheck size={24} /></div>
              <h3>Homework &amp; Test Mastery</h3>
              <p>Assistance with tricky lab calculations, chapter reviews, and upcoming unit quizzes to raise GPA consistently.</p>
            </div>

            <div className="geo-feature-card">
              <div className="geo-icon-box"><UserCheck size={24} /></div>
              <h3>Personalized Pacing</h3>
              <p>Tutors spend extra time on difficult chapters like balancing equations, genetics Punnett squares, or physics formulas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-space faq-section">
        <div className="container-page">
          <div className="center-heading">
            <p className="eyebrow">FREQUENT QUESTIONS</p>
            <h2>US Science Tutoring Questions.<br /><span className="serif-accent">Clear answers.</span></h2>
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
