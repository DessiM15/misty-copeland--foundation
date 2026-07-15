"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Phase = "draw" | "part" | "done";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<Phase>("draw");

  useEffect(() => {
    // On a full load / refresh, start at the top (the hero) unless a hash is targeted.
    try {
      window.history.scrollRestoration = "manual";
    } catch {}
    if (!window.location.hash) window.scrollTo(0, 0);

    // Only on the first load of a session; respect reduced motion.
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (sessionStorage.getItem("mcf_loaded") || reduce) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("mcf_loaded", "1");
    const t1 = setTimeout(() => setPhase("part"), 1350);
    const t2 = setTimeout(() => setPhase("done"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show || phase === "done") return null;

  const easeCurtain = [0.7, 0, 0.2, 1] as const;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      {/* Two-panel curtain */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-noir"
        initial={{ y: 0 }}
        animate={{ y: phase === "part" ? "-100%" : 0 }}
        transition={{ duration: 0.9, ease: easeCurtain }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-noir"
        initial={{ y: 0 }}
        animate={{ y: phase === "part" ? "100%" : 0 }}
        transition={{ duration: 0.9, ease: easeCurtain }}
      />

      {/* Logo — "draws on" left-to-right via a sliding cover panel */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: phase === "part" ? 0 : 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="relative">
          <Image src="/logo/logo-mark.png" alt="The Misty Copeland Foundation" width={184} height={172} priority />
          <motion.div
            className="absolute inset-y-0 -left-1 right-0 bg-noir"
            initial={{ x: "0%" }}
            animate={{ x: "103%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
