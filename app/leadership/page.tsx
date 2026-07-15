import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { FOUNDER, STAFF, BOARD } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the team and Board of Directors of The Misty Copeland Foundation — led by founder Misty Copeland.",
};

const board = BOARD.filter((p) => p.slug !== "misty");

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        kicker="Leadership"
        title="The people behind the movement."
        intro="A founder who changed ballet forever, a dedicated staff, and a distinguished board — united by the belief that dance belongs to everyone."
      />

      {/* Founder feature */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src={FOUNDER.photo}
                alt={FOUNDER.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">Founder &amp; President</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{FOUNDER.name}</h2>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/75">
              {FOUNDER.bio}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Staff */}
      <section className="border-t border-ink/10 bg-cream py-20 sm:py-28">
        <div className="container-content">
          <p className="kicker">Our Team</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">Staff</h2>

          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {STAFF.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-xl">
                    <Image src={p.photo} alt={p.name} fill sizes="160px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{p.name}</h3>
                    <p className="mt-1 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-purple">
                      {p.role}
                    </p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{p.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="border-t border-ink/10 bg-canvas py-20 sm:py-28">
        <div className="container-content">
          <p className="kicker">Governance</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">Board of Directors</h2>
          <p className="mt-4 max-w-xl font-body text-base text-ink/60">
            Chaired by founder Misty Copeland, our board brings leadership from the arts, law,
            finance, technology and beyond.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {board.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 0.06}>
                <div>
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 45vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-ink">{p.name}</h3>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-muted">{p.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
