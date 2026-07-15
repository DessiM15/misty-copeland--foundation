"use client";

import { useState } from "react";
import { DONATE_URL } from "@/lib/content";

const PRESETS = [50, 150, 500, 1500, 3000, 5000];

export default function DonateForm() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(150);
  const [custom, setCustom] = useState("");

  const effective = custom ? parseInt(custom.replace(/[^\d]/g, ""), 10) || 0 : amount;

  return (
    <div id="donate-form" className="scroll-mt-28 rounded-2xl border border-ink/10 bg-cream p-7 shadow-xl sm:p-9">
      <h2 className="font-serif text-3xl text-ink">Make your gift</h2>
      <p className="mt-2 font-body text-sm text-ink/60">
        100% tax-deductible. Cancel a recurring gift anytime.
      </p>

      {/* Frequency */}
      <div className="mt-7 grid grid-cols-2 gap-1 rounded-full bg-bone p-1">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={`rounded-full py-3 font-sans text-sm font-semibold transition-all ${
              frequency === f ? "bg-purple text-white shadow" : "text-ink/60 hover:text-ink"
            }`}
          >
            {f === "once" ? "One-time" : "Monthly"}
          </button>
        ))}
      </div>

      {/* Amounts */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        {PRESETS.map((amt) => {
          const active = !custom && amount === amt;
          return (
            <button
              key={amt}
              type="button"
              onClick={() => {
                setAmount(amt);
                setCustom("");
              }}
              className={`rounded-xl border py-4 font-sans text-base font-semibold transition-all ${
                active
                  ? "border-purple bg-purple/5 text-purple"
                  : "border-ink/15 text-ink/80 hover:border-purple/50"
              }`}
            >
              ${amt.toLocaleString()}
            </button>
          );
        })}
      </div>

      {/* Custom */}
      <div className="relative mt-3">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-sans text-base text-ink/50">
          $
        </span>
        <input
          inputMode="numeric"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="Other amount"
          aria-label="Custom donation amount"
          className="w-full rounded-xl border border-ink/15 py-4 pl-9 pr-4 font-sans text-base text-ink placeholder:text-ink/40 focus:border-purple focus:outline-none"
        />
      </div>

      {/* Submit — hands off to the Foundation's secure NeonCRM checkout */}
      <a
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-accent mt-6 w-full py-4 text-base"
      >
        {effective > 0
          ? `Give $${effective.toLocaleString()}${frequency === "monthly" ? " / month" : ""}`
          : "Continue to donate"}
      </a>

      <p className="mt-4 text-center font-sans text-xs text-ink/50">
        You&apos;ll complete your secure, tax-deductible gift on our donation partner, NeonCRM.
      </p>

      <p className="mt-3 text-center font-sans text-xs text-ink/45">
        The Misty Copeland Foundation is a registered 501(c)(3). EIN available on request.
      </p>
    </div>
  );
}
