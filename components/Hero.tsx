"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// The hero cycles through whatever clips exist. Missing files error out and are
// skipped automatically, so it stays robust as real footage is dropped in.
const CLIPS = ["/video/ballet1.mp4", "/video/ballet2.mp4", "/video/programs.mp4"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.load();
      v.play().catch(() => {});
    }
  }, [index]);

  const next = () => {
    setAttempts((a) => a + 1);
    setIndex((i) => (i + 1) % CLIPS.length);
  };

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        poster="/video/ballet1-poster.jpg"
        onEnded={next}
        // If a clip is missing/unsupported, skip to the next (unless we've cycled all)
        onError={() => attempts < CLIPS.length && next()}
        key={index}
      >
        <source src={CLIPS[index]} type="video/mp4" />
      </video>

      {/* Warm editorial scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/25 to-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="container-content relative flex h-full flex-col justify-end pb-20 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-white/75"
        >
          Founded by Misty Copeland · Est. 2021
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-balance font-serif text-4xl leading-[1.06] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          In a just world, everyone can experience the{" "}
          <span className="italic text-gold">beauty and power</span> of dance.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link href="/donate" className="btn bg-white px-8 py-4 text-ink hover:bg-gold">
            Support the Movement
          </Link>
          <Link href="/#mission" className="btn-ghost-light px-8 py-4">
            Discover our work
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/40" />
      </div>
    </section>
  );
}
