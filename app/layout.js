import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MathChallengeInvite from "@/components/MathChallengeInvite";
import StructuredData from "@/components/StructuredData";
import { site } from "@/lib/site-data";
const body = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-body" });
const display = Newsreader({ subsets: ["latin"], weight: ["500"], style: ["italic"], display: "swap", adjustFontFallback: false, variable: "--font-display" });
export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Online Tutoring for K–10 Students | Math, Science & More | BrightRise Academy", template: "%s | BrightRise Academy" },
  description: "Personalized 1-on-1 online tutoring for K–10 students in the US. Math, Science, English, Social Studies and Coding. Book a free trial with BrightRise Academy.",
  applicationName: site.name,
  robots: { index: true, follow: true },
  icons: { icon: "/logo-icon.png", apple: "/logo-icon.png" },
};
export const viewport = { themeColor: "#172c43", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }) {
  const organization = { "@context": "https://schema.org", "@type": "EducationalOrganization", "@id": site.url + "/#organization", name: site.name, url: site.url, logo: site.url + "/logo-icon.png", email: site.email, telephone: site.phone, description: site.tagline };
  return <html lang="en" className={`${body.variable} ${display.variable}`}><body className="font-sans"><a href="#main-content" className="skip-link">Skip to content</a><StructuredData data={organization} /><StructuredData data={{ "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url }} /><Navbar /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><FloatingWhatsApp /><MathChallengeInvite /></body></html>;
}
