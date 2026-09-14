import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { grades as classes } from "@/lib/site-data";
import Reveal from "@/components/Reveal";

export default function ClassesGrid({ showLinkOut = true }) {
  return (
    <section className="bg-cream">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-coral text-sm font-semibold">Grade by grade</p>
            <h2 className="font-display text-forest text-3xl md:text-4xl mt-3 text-balance">
              A clear plan for every grade, from Grade 1 to Grade 10
            </h2>
          </div>
          {showLinkOut && (
            <Link href="/grades" className="focus-ring text-forest font-semibold inline-flex items-center gap-1.5 hover:text-forest-700">
              See all grades <ArrowUpRight size={17} />
            </Link>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {classes.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 6) * 90} direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}>
              <Link
                href={`/grades/${c.slug}`}
                className="focus-ring group block bg-white border border-forest/10 rounded-xl2 p-6 h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/25 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl text-forest transition-colors group-hover:text-forest-700">
                    {c.name}
                  </h3>
                  <ArrowUpRight
                    size={17}
                    className="text-forest/30 transition-all duration-300 group-hover:text-forest group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="text-xs text-gold-700 font-semibold mt-1.5">{c.ageRange}</p>
                <p className="text-ink/60 text-sm mt-3 leading-relaxed">{c.focus}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
