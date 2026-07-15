import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GIFT_IMPACT } from "@/lib/content";

export default function GiftImpact() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      <div className="container-content grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-2xl">
            <Image
              src="/gallery/g11.jpg"
              alt="Students learning ballet through the Foundation"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="kicker">Where your gift goes</p>
            <h2 className="mt-5 max-w-lg font-serif text-3xl sm:text-4xl md:text-5xl">
              Every dollar becomes a step, a leap, a future.
            </h2>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink/70">
              You don&apos;t give to a foundation — you give to a child at the barre. Here&apos;s what
              your generosity makes possible.
            </p>
          </Reveal>

          <div className="mt-12 space-y-5">
            {GIFT_IMPACT.map((g, i) => (
              <Reveal key={g.amount} delay={i * 0.08}>
                <div className="flex items-center gap-6 border-b border-ink/10 pb-5">
                  <span className="w-24 shrink-0 font-serif text-3xl text-purple sm:text-4xl">
                    {g.amount}
                  </span>
                  <span className="font-body text-base leading-relaxed text-ink/80 sm:text-lg">
                    {g.outcome}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
