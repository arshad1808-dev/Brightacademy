"use client";
import { useEffect, useRef } from "react";
export default function Reveal({ children, delay = 0, direction = "up", className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!node || preference.matches || !("IntersectionObserver" in window)) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    node.dataset.reveal = "pending";
    const show = () => { delete node.dataset.reveal; observer.disconnect(); };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) show();
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
    observer.observe(node);
    node.addEventListener("focusin", show);
    preference.addEventListener("change", show);
    return () => {
      observer.disconnect();
      node.removeEventListener("focusin", show);
      preference.removeEventListener("change", show);
      delete node.dataset.reveal;
    };
  }, []);
  return <Tag ref={ref} data-direction={direction} className={`reveal ${className}`} style={{ "--reveal-delay": `${Math.min(delay, 280)}ms` }}>{children}</Tag>;
}
