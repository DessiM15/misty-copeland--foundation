"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, DONATE_URL, PROGRAMS } from "@/lib/content";

const LEFT = NAV.slice(0, 3); // About, Programs, Impact
const RIGHT = NAV.slice(3); // Leadership, Support

function ProgramsMenu({ dark }: { dark: boolean }) {
  return (
    <div className="group relative">
      <Link
        href="/programs"
        className={`link-underline inline-flex items-center gap-1 font-sans text-[13px] font-medium tracking-[0.04em] transition-colors ${
          dark ? "text-cream/90 hover:text-cream" : "text-ink/80 hover:text-ink"
        }`}
      >
        Programs
        <svg viewBox="0 0 24 24" className="h-3 w-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      {/* Dropdown */}
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-2xl">
          {PROGRAMS.map((p) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-bone"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: p.color }} />
              <span className="font-sans text-sm font-medium text-ink">{p.name}</span>
            </Link>
          ))}
          <Link
            href="/programs"
            className="block border-t border-ink/10 px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted hover:text-ink"
          >
            All programs →
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavLink({ item, dark }: { item: { label: string; href: string }; dark: boolean }) {
  if (item.label === "Programs") return <ProgramsMenu dark={dark} />;
  return (
    <Link
      href={item.href}
      className={`link-underline font-sans text-[13px] font-medium tracking-[0.04em] transition-colors ${
        dark ? "text-cream/90 hover:text-cream" : "text-ink/80 hover:text-ink"
      }`}
    >
      {item.label}
    </Link>
  );
}

function DonateBtn() {
  return (
    <a
      href={DONATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn bg-purple px-6 py-3 text-white hover:bg-indigo"
    >
      Donate
    </a>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome;
  const dark = !solid && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-ink/10 bg-cream/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-content relative h-[76px]">
        {/* ---------- DESKTOP ---------- */}
        {/* Arrangement A — top of page: logo left, links right */}
        <div
          className={`absolute inset-0 hidden items-center justify-between transition-opacity duration-500 lg:flex ${
            solid ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <Link href="/" aria-label="The Misty Copeland Foundation — home">
            <Image
              src="/logo/logo-horizontal-white.png"
              alt="The Misty Copeland Foundation"
              width={104}
              height={56}
              priority
              className="h-11 w-auto"
            />
          </Link>
          <div className="flex items-center gap-9">
            {NAV.map((item) => (
              <NavLink key={item.href} item={item} dark />
            ))}
            <DonateBtn />
          </div>
        </div>

        {/* Arrangement B — scrolled: logo centered, links split */}
        <div
          className={`absolute inset-0 hidden grid-cols-[1fr_auto_1fr] items-center transition-opacity duration-500 lg:grid ${
            solid ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex items-center gap-8 justify-self-start">
            {LEFT.map((item) => (
              <NavLink key={item.href} item={item} dark={false} />
            ))}
          </div>
          <Link href="/" aria-label="The Misty Copeland Foundation — home" className="justify-self-center">
            <Image
              src="/logo/logo-horizontal.png"
              alt="The Misty Copeland Foundation"
              width={104}
              height={56}
              className="h-11 w-auto"
            />
          </Link>
          <div className="flex items-center gap-8 justify-self-end">
            {RIGHT.map((item) => (
              <NavLink key={item.href} item={item} dark={false} />
            ))}
            <DonateBtn />
          </div>
        </div>

        {/* ---------- MOBILE ---------- */}
        <div className="flex h-full items-center justify-between lg:hidden">
          <Link href="/" aria-label="The Misty Copeland Foundation — home" className="relative z-10">
            <Image
              src={dark ? "/logo/logo-horizontal-white.png" : "/logo/logo-horizontal.png"}
              alt="The Misty Copeland Foundation"
              width={100}
              height={54}
              priority
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-11 w-11 items-center justify-center"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col items-end gap-[6px]">
              <span className={`block h-[2px] rounded-full transition-all duration-300 ${open ? "w-6 translate-y-[8px] rotate-45 bg-ink" : dark ? "w-6 bg-cream" : "w-6 bg-ink"}`} />
              <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${open ? "opacity-0" : dark ? "bg-cream" : "bg-ink"}`} />
              <span className={`block h-[2px] rounded-full transition-all duration-300 ${open ? "w-6 -translate-y-[8px] -rotate-45 bg-ink" : dark ? "w-6 bg-cream" : "w-6 bg-ink"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-0 flex flex-col overflow-y-auto bg-cream px-6 pb-10 pt-28 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-4 font-serif text-3xl text-ink"
            >
              {item.label}
            </Link>
          ))}
          {/* Program sub-links */}
          <div className="mt-5">
            <p className="kicker mb-3">Programs</p>
            <div className="flex flex-col gap-1">
              {PROGRAMS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-2 font-body text-lg text-ink/80"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn-accent mt-8 w-full py-4 text-base"
        >
          Donate
        </a>
      </div>
    </header>
  );
}
