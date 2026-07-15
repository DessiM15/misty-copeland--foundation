"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, DONATE_URL } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome;
  const dark = !solid && !open; // white treatment over the hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-ink/10 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-content flex h-[74px] items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label={"The Misty Copeland Foundation — home"} className="relative z-10">
          <Image
            src={dark ? "/logo/logo-horizontal-white.png" : "/logo/logo-horizontal.png"}
            alt="The Misty Copeland Foundation"
            width={104}
            height={56}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-underline font-sans text-[13px] font-medium tracking-[0.04em] transition-colors ${
                dark ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={DONATE_URL === "#donate-form" ? "/donate" : DONATE_URL}
            className="btn bg-purple px-6 py-3 text-white hover:bg-indigo"
          >
            Donate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col items-end gap-[6px]">
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 ${
                open ? "w-6 translate-y-[8px] rotate-45 bg-ink" : dark ? "w-6 bg-white" : "w-6 bg-ink"
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                open ? "opacity-0" : dark ? "bg-white" : "bg-ink"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 ${
                open ? "w-6 -translate-y-[8px] -rotate-45 bg-ink" : dark ? "w-6 bg-white" : "w-6 bg-ink"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-0 flex flex-col bg-cream px-6 pb-10 pt-28 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-5 font-serif text-3xl text-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/donate"
          onClick={() => setOpen(false)}
          className="btn-accent mt-8 w-full py-4 text-base"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
