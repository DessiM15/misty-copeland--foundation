import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PROGRAMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "BE BOLD, BE BOLD: Next Steps, BE BOLDER and our Teaching Artists — how The Misty Copeland Foundation brings ballet to every community and generation.",
};

const IMAGES = ["/gallery/g12.jpg", "/gallery/g6.jpg", "/gallery/g20.jpg", "/gallery/g13.jpg"];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        kicker="Our Programs"
        title="From a first plié to a lifetime of movement."
        intro="We meet people where they are — introducing children to ballet, nurturing those who want to go further, and bringing the joy of dance to every generation."
      />

      {PROGRAMS.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`scroll-mt-24 py-20 sm:py-28 ${i % 2 === 0 ? "bg-canvas" : "bg-bone"}`}
        >
          <div
            className={`container-content grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES[i % IMAGES.length]}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                {p.kicker}
              </span>
              <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl md:text-5xl">{p.name}</h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-ink/80">{p.summary}</p>
              <p className="mt-4 font-body text-base leading-relaxed text-ink/65">{p.detail}</p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-ink py-20 text-center sm:py-24">
        <div className="container-content">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl text-white sm:text-4xl">
            Help us bring these programs to more children.
          </h2>
          <Link href="/donate" className="btn bg-white mt-8 px-9 py-4 text-ink hover:bg-gold">
            Support our programs
          </Link>
        </div>
      </section>
    </>
  );
}
