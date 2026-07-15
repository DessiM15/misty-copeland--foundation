import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PROGRAMS, DONATE_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "BE BOLD, BE BOLD: Next Steps, BE BOLDER and our Teaching Artists — how The Misty Copeland Foundation brings ballet to every community and generation.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        kicker="Our Programs"
        title="From a first plié to a lifetime of movement."
        intro="We meet people where they are — introducing children to ballet, nurturing those who want to go further, and bringing the joy of dance to every generation."
      />

      <section className="bg-canvas py-20 sm:py-28">
        <div className="container-content grid gap-8 md:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/programs/${p.slug}`}
                className="group relative flex h-[62vh] min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-noir p-8 sm:p-10"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: p.color, mixBlendMode: "multiply" }}
                />
                <div className="relative">
                  <span
                    className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em]"
                    style={{ color: p.color }}
                  >
                    <span className="rounded bg-cream/90 px-2 py-1">{p.kicker}</span>
                  </span>
                  <h2 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">{p.name}</h2>
                  <p className="mt-3 max-w-md font-serif text-xl italic text-cream/85">{p.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-cream">
                    Explore
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grain vignette relative overflow-hidden bg-noir py-20 text-center sm:py-24">
        <div className="container-content relative">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl text-cream sm:text-4xl md:text-5xl">
            Help us bring these programs to more children.
          </h2>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-8 bg-cream px-9 py-4 text-ink hover:bg-gold"
          >
            Support our programs
          </a>
        </div>
      </section>
    </>
  );
}
