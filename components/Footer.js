import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { site, subjects } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <Image src="/logo-icon.png" width={38} height={38} alt="" />
              <span>BrightRise <span>Academy</span></span>
            </Link>
            <p className="footer-description">
              Big dreams deserve a little<br />personal attention.
            </p>
            <p className="footer-small">
              Live online tutoring for curious minds.<br />
              Kindergarten through Grade 10, worldwide.
            </p>
          </div>

          <div>
            <h2>Explore</h2>
            {[
              ["/online-tutoring", "Online tutoring"],
              ["/grades", "Find your grade"],
              ["/how-it-works", "How it works"],
              ["/about", "Our story"],
            ].map(([href, label]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>

          <div>
            <h2>Discover</h2>
            {subjects.map((subject) => (
              <Link key={subject.slug} href={subject.href}>{subject.name}</Link>
            ))}
          </div>

          <div>
            <h2>Tutoring by Region</h2>
            <Link href="/us">United States (K–10)</Link>
            <Link href="/uk">United Kingdom (KS1–KS4)</Link>
            <Link href="/canada">Canada (Grades K–12)</Link>
          </div>

          <div>
            <h2>Let’s connect</h2>
            <a href={`mailto:${site.email}`}>
              <Mail size={15} />
              {site.email}
            </a>
            <a href={`https://wa.me/${site.whatsapp}`}>
              <MessageCircle size={15} />
              {site.phone}
            </a>
            <Link href="/faq">
              Your questions, answered <ArrowUpRight size={14} />
            </Link>
            <Link href="/blog">
              The BrightRise journal <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BrightRise Academy</span>
          <span>A little support. A lifetime of possibility.</span>
          <Link href="/contact">Contact us <ArrowUpRight size={14} /></Link>
        </div>
      </div>
    </footer>
  );
}
