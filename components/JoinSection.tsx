"use client";

import { useState } from "react";

export default function JoinSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="grain vignette relative overflow-hidden bg-noir py-24 text-center sm:py-32">
      <div className="container-content relative">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Stay Connected
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl text-white sm:text-4xl md:text-5xl">
          Be part of a more beautiful, more just world.
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-white/70">
          Join our community for stories from the studio, invitations to events, and news from the
          Celebrating Misty Campaign.
        </p>

        {sent ? (
          <p className="mx-auto mt-10 max-w-md font-serif text-2xl italic text-gold">
            Thank you — welcome to the movement. 🩰
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSent(true);
            }}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 font-sans text-sm text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none"
            />
            <button type="submit" className="btn bg-cream px-7 py-4 text-ink hover:bg-gold">
              Join Us
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
