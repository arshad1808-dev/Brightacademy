"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Gamepad2, X } from "lucide-react";

const SESSION_KEY = "brightrise-math-invite-dismissed";
const INVITE_DELAY_MS = 1000;

export default function MathChallengeInvite() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const dismissed = useRef(false);
  const excluded = ["/mental-math-challenge", "/book-a-free-trial", "/contact"].some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  useEffect(() => {
    setVisible(false);
    if (excluded || dismissed.current) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch { /* The invite still works when browser storage is unavailable. */ }

    let timer;
    const showWhenIdle = () => {
      const editing = document.activeElement?.matches("input, textarea, select, [contenteditable='true']");
      if (document.hidden || editing || document.querySelector("dialog[open], [aria-modal='true']")) {
        timer = window.setTimeout(showWhenIdle, 2000);
        return;
      }
      setVisible(true);
    };
    timer = window.setTimeout(showWhenIdle, INVITE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname, excluded]);

  const dismiss = () => {
    dismissed.current = true;
    setVisible(false);
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* In-memory dismissal remains available. */ }
  };

  if (!visible || excluded) return null;

  return (
    <aside className="math-invite" aria-labelledby="math-invite-title" onKeyDown={(event) => { if (event.key === "Escape") dismiss(); }}>
      <button type="button" className="math-invite-close" aria-label="Dismiss math challenge invitation" onClick={dismiss}><X size={18} /></button>
      <div className="math-invite-top"><span className="math-invite-icon" aria-hidden="true"><Gamepad2 size={25} /></span><span>READY FOR A BRAIN BREAK?</span></div>
      <h2 id="math-invite-title">Got a minute? Make it count.</h2>
      <p>10 quick math questions. How many can you solve?</p>
      <div className="math-invite-equation" aria-hidden="true"><span>27</span><span>+</span><span>18</span><span>=</span><span>?</span></div>
      <Link href="/mental-math-challenge" prefetch={false} className="button button-orange" onClick={dismiss}>Play math challenge <ArrowRight size={17} /></Link>
      <span className="math-invite-note">Free to play · No signup needed</span>
    </aside>
  );
}
