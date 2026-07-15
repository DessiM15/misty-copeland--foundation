import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { FOUNDER, BOARD, STAFF } from "@/lib/content";

export default function LeadershipPreview() {
  return (
    <section className="bg-bone py-24 sm:py-32">
      <div className="container-content grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl">
            <Image
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="kicker">Leadership</p>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl">
            Led by a legend, powered by a team who believes.
          </h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/75">
            {FOUNDER.bio}
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink/60">
            Alongside Misty, a dedicated staff and a distinguished Board of Directors guide the
            Foundation&apos;s work — {STAFF.length} team members and {BOARD.length} board leaders
            united by one belief: that dance belongs to everyone.
          </p>
          <Link href="/leadership" className="btn-ghost mt-9 px-7 py-3.5">
            Meet our team &amp; board
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
