import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Mission() {
  return (
    <section id="mission" className="bg-canvas py-24 sm:py-32">
      <div className="container-content grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <Reveal>
          <p className="kicker">Our Mission</p>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] sm:text-4xl md:text-[2.9rem]">
            We make ballet more{" "}
            <span className="italic text-purple">diverse, equitable</span> and accessible —
            for every child, in every community.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 font-body text-lg leading-relaxed text-ink/75">
            <p>
              Founded in 2021 by Misty Copeland — the first African-American female principal
              dancer at American Ballet Theatre — the Foundation provides opportunities for children
              in under-resourced communities to engage their bodies, hearts and minds in learning
              through dance, especially ballet.
            </p>
            <p>
              Through greater diversity, equity and inclusion, we pursue social justice through arts
              activism — making ballet affordable, accessible and joyful.
            </p>
          </div>
          <p className="mt-10 border-l-2 border-gold pl-6 font-serif text-xl italic leading-relaxed text-ink/80">
            “I want every child to know that ballet belongs to them, too.”
            <span className="mt-2 block font-sans text-xs uppercase not-italic tracking-[0.2em] text-muted">
              — Misty Copeland
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/gallery/g1.jpg"
              alt="A dancer of The Misty Copeland Foundation"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
