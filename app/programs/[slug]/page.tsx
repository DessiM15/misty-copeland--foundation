import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { PROGRAMS, getProgram, DONATE_URL } from "@/lib/content";

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProgram(params.slug);
  if (!p) return { title: "Programs" };
  return {
    title: p.name,
    description: p.summary,
  };
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const p = getProgram(params.slug);
  if (!p) notFound();

  const others = PROGRAMS.filter((x) => x.slug !== p.slug);

  return (
    <div style={{ ["--accent" as string]: p.color }}>
      {/* HERO */}
      <section className="grain vignette relative flex h-[86svh] min-h-[560px] items-end overflow-hidden bg-noir">
        <Image
          src={p.image}
          alt={p.name}
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/30" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundColor: p.color, mixBlendMode: "multiply" }} />
        <div className="container-content relative pb-[10vh]">
          <Reveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: p.color }}>
              <span className="text-cream/60">Programs / </span>
              {p.kicker}
            </p>
            <h1 className="mt-5 max-w-[14ch] font-serif text-[13vw] leading-[0.95] text-cream sm:text-7xl md:text-8xl">
              {p.name}
            </h1>
            <p className="mt-6 max-w-xl font-serif text-2xl italic text-cream/85 sm:text-3xl">{p.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="container-content max-w-4xl">
          <Reveal>
            <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl md:text-[2.4rem] md:leading-[1.25]">
              {p.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-ink/10 bg-bone py-24 sm:py-28">
        <div className="container-content">
          <div className="grid gap-10 md:grid-cols-3">
            {p.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div>
                  <span className="font-serif text-5xl" style={{ color: p.color }}>
                    0{i + 1}
                  </span>
                  <div className="mt-4 h-px w-10" style={{ backgroundColor: p.color }} />
                  <h3 className="mt-5 font-serif text-2xl text-ink">{pillar.title}</h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-ink/70">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL + IMAGE */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="container-content grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image src={p.image} alt={p.name} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundColor: p.color, mixBlendMode: "multiply" }} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker" style={{ color: p.color }}>
              How it works
            </p>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink/80">{p.detail}</p>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-9 px-8 py-4 text-white"
              style={{ backgroundColor: p.color }}
            >
              Support {p.name}
            </a>
          </Reveal>
        </div>
      </section>

      {/* OTHER PROGRAMS */}
      <section className="border-t border-ink/10 bg-bone py-20 sm:py-24">
        <div className="container-content">
          <p className="kicker">Explore more</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/programs/${o.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-ink/10 bg-canvas p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: o.color }} />
                  <span className="font-serif text-xl text-ink">{o.name}</span>
                </span>
                <span className="text-ink/40 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
