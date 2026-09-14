"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [["/subjects", "Subjects"], ["/grades", "Grades"], ["/#pricing", "Pricing"], ["/how-it-works", "How it works"], ["/about", "Our story"], ["/contact", "Contact"]];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <>
    <div className="announcement"><span>A little support. A brighter future.</span><Link href="/book-a-free-trial">Try your first session free <ArrowUpRight size={13} /></Link></div>
    <header className="site-header">
      <div className="container-page header-inner">
        <Link href="/" className="brand" aria-label="BrightRise Academy home"><Image src="/logo-icon.png" width={38} height={38} alt="" /><span>BrightRise <span>Academy</span></span></Link>
        <nav aria-label="Main navigation" className="desktop-nav">{links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</nav>
        <Link href="/book-a-free-trial" className="button button-dark header-cta">Book a free trial <ArrowUpRight size={17} /></Link>
        <button className="mobile-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation" hidden={!open}>
        {[["/", "Home"], ...links, ["/online-tutoring", "Online tutoring"], ["/mental-math-challenge", "Mental Math Challenge"], ["/faq", "FAQs"], ["/blog", "Journal"]].map(([href, label]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></Link>)}
        <Link className="button button-dark" href="/book-a-free-trial">Book a free trial <ArrowUpRight size={17} /></Link>
      </nav>
    </header>
  </>;
}
