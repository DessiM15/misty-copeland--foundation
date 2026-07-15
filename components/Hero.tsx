"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DONATE_URL } from "@/lib/content";

// Misty's own footage (A Ballerina's Tale), cropped + graded. Cycles between clips.
const CLIPS = ["/video/misty1.mp4", "/video/misty2.mp4"];

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
    <section className="grain relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        poster="/video/misty1-poster.jpg"
        onEnded={next}
        onError={() => attempts < CLIPS.length && next()}
        key={index}
      >
        <source src={CLIPS[index]} type="video/mp4" />
      </video>

      {/* Cinematic scrims — top (nav), bottom (headline + hides archival title), corner, vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/25 to-noir" />
      <div className="absolute inset-0 bg-gradient-to-tr from-noir/85 via-noir/20 to-transparent" />
      {/* Strong bottom band — fully opaque at the base to hide the archival footage title */}
      <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-noir via-noir/85 to-transparent" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_90%_at_50%_40%,transparent_45%,rgba(0,0,0,0.55)_100%)]" />

      {/* Content */}
      <div className="container-content relative flex h-full flex-col justify-end pb-[10vh] sm:pb-[12vh]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.34em] text-cream/70"
        >
          Founded by Misty Copeland · Est. 2021
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[16ch] font-serif text-[13vw] leading-[0.95] text-cream sm:text-7xl md:text-8xl lg:text-9xl"
        >
          In a just world, <span className="italic text-gold">everyone</span> can dance.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-7 max-w-md font-body text-lg leading-relaxed text-cream/80"
        >
          Bringing the beauty and power of ballet to children in under-resourced communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.62 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="btn bg-cream px-8 py-4 text-ink hover:bg-gold">
            Support the Movement
          </a>
          <Link href="/#mission" className="btn-ghost-light px-8 py-4">
            Discover our work
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/50">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-cream/40" />
      </div>
    </section>
  );
}
