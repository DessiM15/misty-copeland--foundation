import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PROGRAMS } from "@/lib/content";

export default function ProgramsPreview() {
  return (
    <section className="bg-bone py-24 sm:py-32">
      <div className="container-content">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="kicker">Our Programs</p>
            <h2 className="mt-5 max-w-xl font-serif text-3xl sm:text-4xl md:text-5xl">
              From a first plié to a lifetime of movement.
            </h2>
          </div>
          <Link href="/programs" className="btn-ghost shrink-0 px-6 py-3">
            Explore all programs
          </Link>
        </div>

        <div className="mt-14 border-t border-ink/12">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <Link
                href={`/programs#${p.id}`}
                className="group grid grid-cols-1 gap-4 border-b border-ink/12 py-8 transition-colors hover:bg-canvas/60 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:px-4"
              >
                <span className="font-serif text-2xl text-purple/50 sm:text-3xl">
                  0{i + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-serif text-2xl text-ink sm:text-3xl">{p.name}</h3>
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted">
                      {p.kicker}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl font-body text-base leading-relaxed text-ink/70">
                    {p.summary}
                  </p>
                </div>
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-all duration-300 group-hover:border-purple group-hover:bg-purple group-hover:text-white sm:flex">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
