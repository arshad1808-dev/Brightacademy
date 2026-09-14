"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Quote, ArrowUpRight } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];
  const move = (direction) => setIndex((value) => (value + direction + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials-section section-space">
      <div className="container-page">
        <div className="testimonials-layout">
          <div className="testimonials-intro">
            <p className="eyebrow">FAMILIES’ WORDS</p>
            <h2>The kind of progress<br /><span className="serif-accent">you can feel at home.</span></h2>
            <p>Families often notice the smaller things first: less hesitation, more questions, and a little more confidence with every lesson.</p>
            <div className="testimonial-controls">
              <button type="button" aria-label="Previous family story" onClick={() => move(-1)}><ArrowLeft size={18} /></button>
              <span>{String(index + 1).padStart(2, "0")} <i /> {String(testimonials.length).padStart(2, "0")}</span>
              <button type="button" aria-label="Next family story" onClick={() => move(1)}><ArrowRight size={18} /></button>
            </div>
          </div>
          <article className="testimonial-feature" aria-live="polite">
            <Quote size={34} strokeWidth={1.2} aria-hidden="true" />
            <blockquote>“{current.quote}”</blockquote>
            <footer>
              <span className="testimonial-avatar">{current.name.split(" ").map((name) => name[0]).join("")}</span>
              <div><strong>{current.name}</strong><span>{current.role}</span></div>
            </footer>
            <div className="testimonial-dots" aria-label="Choose a family story">
              {testimonials.map((testimonial, itemIndex) => (
                <button key={testimonial.name} type="button" aria-label={`Show feedback from ${testimonial.name}`} aria-current={itemIndex === index} onClick={() => setIndex(itemIndex)} />
              ))}
            </div>
          </article>
        </div>

        <div className="testimonials-cta">
          <p>Join hundreds of satisfied parents worldwide. See what a difference one trial session makes.</p>
          <Link href="#book-free-trial" className="button button-orange">Book a FREE Trial <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}
