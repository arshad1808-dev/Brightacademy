import { UserRound, Globe2, BookOpen, GraduationCap } from "lucide-react";
export default function StatsBar() {
  const items = [
    [UserRound, "One student. One tutor.", "Undivided attention, every session"],
    [BookOpen, "5 ways to discover", "Math, Science, English, Social Studies & Coding"],
    [GraduationCap, "Kindergarten – Grade 10", "Support for every chapter"],
    [Globe2, "At home. Around the world.", "Live learning, wherever you are"],
  ];
  return <section className="promise-strip" aria-label="Learning at BrightRise"><div className="container-page promise-grid">{items.map(([Icon, title, text]) => <div key={title}><Icon size={23} strokeWidth={1.6} aria-hidden="true" /><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></section>;
}
