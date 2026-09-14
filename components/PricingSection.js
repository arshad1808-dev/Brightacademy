import Link from "next/link";
import { Check, ArrowUpRight, ArrowRight, UserCheck, Target, BookOpen, TrendingUp, Laptop, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const plans = [
  {
    name: "STARTER",
    price: "$80",
    period: "/ month",
    sessions: "1 session per week",
    description: "Perfect for students who need consistent academic support.",
    popular: false,
    buttonText: "Start with Starter",
    features: [
      "4 live 1-on-1 sessions per month",
      "60-minute personalized lessons",
      "Any core subject",
      "Personalized learning plan",
      "Homework & concept support",
      "Parent progress updates",
      "Flexible scheduling",
    ],
  },
  {
    name: "GROWTH",
    price: "$160",
    period: "/ month",
    sessions: "2 sessions per week",
    description: "Ideal for students who want steady improvement and stronger academic confidence.",
    popular: true,
    badge: "MOST POPULAR",
    buttonText: "Choose Growth",
    features: [
      "8 live 1-on-1 sessions per month",
      "60-minute personalized lessons",
      "Any core subject",
      "Personalized learning plan",
      "Homework & concept support",
      "Weekly progress tracking",
      "Parent progress updates",
      "Priority tutor scheduling",
    ],
  },
  {
    name: "ACCELERATE",
    price: "$240",
    period: "/ month",
    sessions: "3 sessions per week",
    description: "Best for students who need extra support, want to catch up quickly, or are preparing for important exams.",
    popular: false,
    buttonText: "Choose Accelerate",
    features: [
      "12 live 1-on-1 sessions per month",
      "60-minute personalized lessons",
      "Any core subject",
      "Personalized learning plan",
      "Homework & concept support",
      "Weekly progress tracking",
      "Parent progress updates",
      "Priority scheduling",
    ],
  },
];

const inclusions = [
  {
    icon: UserCheck,
    title: "1-on-1 Live Tutoring",
    description: "Your child gets the tutor's full attention.",
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description: "Lessons are adapted to your child's needs and learning goals.",
  },
  {
    icon: BookOpen,
    title: "Multiple Subjects",
    description: "Math • Science • English • Social Studies • Coding",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Parents stay informed about their child's learning journey.",
  },
  {
    icon: Laptop,
    title: "Learn From Home",
    description: "Convenient online classes from anywhere in the US.",
  },
];

export default function PricingSection({ id = "pricing" }) {
  return (
    <section id={id} className="pricing-section section-space">
      <div className="container-page">
        {/* Section Heading */}
        <div className="center-heading">
          <p className="eyebrow">
            <span className="status-dot" /> PRICING
          </p>
          <h2>
            Simple Plans.<br />
            <span className="serif-accent">Personalized Learning.</span>
          </h2>
          <p className="pricing-heading-desc">
            Choose the plan that fits your child&apos;s learning goals.<br />
            Every BrightRise plan includes live, one-on-one tutoring with a dedicated tutor.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90} direction="up" className="pricing-reveal-wrap">
              <article className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}>
                {plan.popular && (
                  <div className="pricing-badge">
                    <Sparkles size={13} /> {plan.badge}
                  </div>
                )}
                <div className="pricing-card-header">
                  <span className="plan-name">{plan.name}</span>
                  <div className="plan-pricing-row">
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-period">{plan.period}</span>
                  </div>
                  <span className="plan-sessions-pill">{plan.sessions}</span>
                  <p className="plan-desc">{plan.description}</p>
                </div>

                <div className="plan-divider" />

                <ul className="plan-features">
                  {plan.features.map((feat) => (
                    <li key={feat}>
                      <span className="feat-check"><Check size={14} strokeWidth={2.5} /></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="plan-action">
                  <Link
                    href="#book-free-trial"
                    className={`button ${plan.popular ? "button-orange" : "button-outline"} w-full`}
                  >
                    {plan.buttonText} <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Every Plan Includes Section */}
        <div className="every-plan-wrapper">
          <div className="every-plan-heading">
            <p className="eyebrow">STANDARDS OF EXCELLENCE</p>
            <h3>Every Plan Includes</h3>
          </div>

          <div className="every-plan-grid">
            {inclusions.map(({ icon: Icon, title, description }, idx) => (
              <Reveal key={title} delay={idx * 60}>
                <div className="inclusion-card">
                  <div className="inclusion-icon-wrap">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Reassurance Trial Callout Banner */}
        <Reveal delay={120}>
          <div className="pricing-trial-callout">
            <div className="callout-copy">
              <span className="callout-kicker">Not sure which plan is right for your child?</span>
              <h3>Start with a FREE Trial Lesson.</h3>
              <p>Experience BrightRise before committing to a plan.</p>
            </div>
            <div className="callout-action-wrap">
              <Link href="#book-free-trial" className="button button-orange">
                Book Your FREE Trial <ArrowRight size={17} />
              </Link>
              <span className="callout-reassurance">No payment required for your trial. No commitment.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
