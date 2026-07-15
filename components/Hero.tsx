"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DONATE_URL } from "@/lib/content";

// Misty's own footage (A Ballerina's Tale), cropped + graded. Cycles between clips.
const CLIPS = ["/video/misty1.mp4", "/video/misty2.mp4"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.35 } },
};
const line = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};
const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);

  // Nudge playback without calling load() (load() resets the element and delays
  // the first frame). autoPlay + the key remount already load each source.
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
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
        preload="auto"
        poster="/video/misty1-poster.jpg"
        onEnded={next}
        onError={() => attempts < CLIPS.length && next()}
        key={index}
      >
        <source src={CLIPS[index]} type="video/mp4" />
      </video>

      {/* Cinematic scrims */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/25 to-noir" />
      <div className="absolute inset-0 bg-gradient-to-tr from-noir/85 via-noir/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-noir via-noir/85 to-transparent" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_90%_at_50%_40%,transparent_45%,rgba(0,0,0,0.55)_100%)]" />

      {/* Headline block (lower-left) */}
      <div className="container-content relative flex h-full flex-col justify-end pb-28 sm:pb-32">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-serif text-[13.5vw] leading-[0.92] text-cream sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span variants={line} className="block">
              In a just world,
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span variants={line} className="block">
              <span className="italic text-gold">everyone</span> can dance.
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.75 }}
          className="mt-7 max-w-md font-body text-lg leading-relaxed text-cream/80"
        >
          Bringing the beauty and power of ballet to children in under-resourced communities.
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.88 }}
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

      {/* Documentary-style info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-0 border-t border-cream/15"
      >
        <div className="container-content flex items-center justify-between py-4 font-sans text-[10px] uppercase tracking-[0.25em] text-cream/55 sm:text-[11px]">
          <div className="flex items-center gap-3 sm:gap-5">
            <span>Est. 2021</span>
            <span className="text-cream/25">/</span>
            <span className="hidden sm:inline">New York City</span>
            <span className="hidden text-cream/25 sm:inline">/</span>
            <span>501(c)(3)</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Scroll</span>
            <span className="block h-px w-8 animate-pulse bg-cream/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
