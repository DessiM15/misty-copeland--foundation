"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { CAMPAIGN, DONATE_URL } from "@/lib/content";

const fmt = (n: number) => `$${n.toLocaleString()}`;

export default function CampaignSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const pct = Math.min(Math.round((CAMPAIGN.raised / CAMPAIGN.goal) * 100), 100);
  const [barPct, setBarPct] = useState(0);
  const [raised, setRaised] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setBarPct(pct), 200);
    let raf = 0;
    const duration = 1500;
    let s: number | null = null;
    const tick = (time: number) => {
      if (s === null) s = time;
      const p = Math.min((time - s) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setRaised(Math.round(eased * CAMPAIGN.raised));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [inView, pct]);

  return (
    <section
      id="campaign"
      className="grain relative overflow-hidden bg-gradient-to-br from-indigo via-purple to-[#6d3fd6] py-24 sm:py-32"
    >
      <div ref={ref} className="container-content relative grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Narrative */}
        <div>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
            {CAMPAIGN.window}
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {CAMPAIGN.name}
          </h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-white/85">
            {CAMPAIGN.blurb}
          </p>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-gold">
            Her farewell is not an ending — it is a beginning. Help us reach $1&nbsp;million before{" "}
            {CAMPAIGN.deadlineLabel}.
          </p>
        </div>

        {/* Progress card — frosted glass on the purple section */}
        <div className="rounded-2xl border border-cream/20 bg-cream/10 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/70">
                Raised so far
              </p>
              <p className="mt-2 font-serif text-4xl text-cream sm:text-5xl">{fmt(raised)}</p>
            </div>
            <p className="font-serif text-2xl text-cream/70">of {fmt(CAMPAIGN.goal)}</p>
          </div>

          <div className="mt-7 h-3 w-full overflow-hidden rounded-full bg-cream/20">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold to-red transition-[width] duration-[1600ms] ease-out"
              style={{ width: `${barPct}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between font-sans text-sm text-cream/70">
            <span className="font-semibold text-gold">{pct}% funded</span>
            <span>Goal by {CAMPAIGN.deadlineLabel}</span>
          </div>

          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-8 w-full bg-cream py-4 text-base text-ink hover:bg-gold"
          >
            Donate to the Campaign
          </a>
          <p className="mt-4 text-center font-sans text-xs text-cream/60">
            Every gift is tax-deductible to the fullest extent of the law.
          </p>
        </div>
      </div>
    </section>
  );
}
