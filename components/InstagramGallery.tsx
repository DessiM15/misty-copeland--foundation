import type { CSSProperties } from "react";
import { GALLERY, SOCIALS } from "@/lib/content";

// Split the 20 images across 4 columns (5 each)
const columns = [0, 1, 2, 3].map((c) => GALLERY.filter((_, i) => i % 4 === c));
// Odd columns drift down, even columns drift up (cols 1 & 3 up, 2 & 4 down)
const directions = ["animate-scroll-up", "animate-scroll-down", "animate-scroll-up", "animate-scroll-down"];
const durations = ["52s", "62s", "58s", "48s"];

function Column({ images, dir, duration, hideBelowMd }: { images: string[]; dir: string; duration: string; hideBelowMd?: boolean }) {
  const doubled = [...images, ...images];
  return (
    <div className={`flex-1 overflow-hidden ${hideBelowMd ? "hidden md:block" : ""}`}>
      <div className={`marquee-col ${dir}`} style={{ "--marquee-duration": duration } as CSSProperties}>
        {doubled.map((src, i) => (
          <div key={i} className="mb-4 overflow-hidden rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Dancers and students of The Misty Copeland Foundation"
              loading="lazy"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InstagramGallery() {
  return (
    <section className="relative overflow-hidden bg-noir py-20 sm:py-28">
      <div className="container-content">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
              In Motion
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl text-white sm:text-4xl md:text-5xl">
              Every day, our dancers are writing a new story.
            </h2>
          </div>
          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light shrink-0 px-6 py-3"
          >
            Follow {SOCIALS.instagramHandle}
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-group relative">
        <div className="container-content flex h-[560px] gap-4 sm:h-[640px] lg:h-[720px]">
          <Column images={columns[0]} dir={directions[0]} duration={durations[0]} />
          <Column images={columns[1]} dir={directions[1]} duration={durations[1]} />
          <Column images={columns[2]} dir={directions[2]} duration={durations[2]} hideBelowMd />
          <Column images={columns[3]} dir={directions[3]} duration={durations[3]} hideBelowMd />
        </div>
        {/* Fade masks top & bottom */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-noir to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-noir to-transparent" />
      </div>
    </section>
  );
}
