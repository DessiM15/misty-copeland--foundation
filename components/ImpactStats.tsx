"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/content";

function parseValue(v: string) {
  const prefix = v.match(/^[^\d]*/)?.[0] ?? "";
  const suffix = v.match(/[^\d]*$/)?.[0] ?? "";
  const num = parseInt(v.replace(/[^\d]/g, ""), 10);
  return { prefix, suffix, num: isNaN(num) ? 0 : num };
}

function CountUp({ value, start }: { value: string; start: boolean }) {
  const { prefix, suffix, num } = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start || num === 0) return;
    let raf = 0;
    const duration = 1400;
    let startTime: number | null = null;
    const tick = (t: number) => {
      if (startTime === null) startTime = t;
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * num));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, num]);

  // Preserve the source formatting: only group with commas if the original had them
  // (so "2021" stays a year, while "1,000+" keeps its comma).
  const hadComma = value.includes(",");
  const body = hadComma ? display.toLocaleString() : String(display);
  const shown = num === 0 ? value.replace(/\d/g, "") : `${prefix}${body}${suffix}`;
  return <span>{shown}</span>;
}

export default function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="border-y border-ink/10 bg-cream py-20 sm:py-28">
      <div className="container-content">
        <p className="kicker text-center">By the numbers</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center font-serif text-3xl sm:text-4xl md:text-5xl">
          A movement measured in lives changed.
        </h2>

        <div ref={ref} className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-5xl text-purple sm:text-6xl md:text-7xl">
                <CountUp value={s.value} start={inView} />
              </div>
              <div className="mx-auto mt-4 h-px w-10 bg-gold" />
              <p className="mx-auto mt-4 max-w-[12rem] font-sans text-sm leading-relaxed text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
