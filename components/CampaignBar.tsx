import { CAMPAIGN, DONATE_URL } from "@/lib/content";

// Static "ticker-style" campaign bar shown directly under the hero.
export default function CampaignBar() {
  const pct = Math.min(Math.round((CAMPAIGN.raised / CAMPAIGN.goal) * 100), 100);
  const segments = [
    "The Celebrating Misty Campaign",
    `${pct}% toward $1M`,
    "Give before September 2026",
  ];

  return (
    <div className="relative z-10 overflow-hidden border-b border-cream/10 bg-gradient-to-r from-indigo via-purple to-[#6d3fd6]">
      <div className="container-content flex flex-col items-center gap-3 py-4 sm:flex-row sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/90 sm:text-xs">
          {segments.map((s, i) => (
            <span key={i} className="flex items-center gap-5">
              {i > 0 && <span className="text-gold">✦</span>}
              {s}
            </span>
          ))}
        </div>
        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn shrink-0 bg-cream px-6 py-2.5 text-ink hover:bg-gold"
        >
          Donate to the Campaign
        </a>
      </div>
      {/* slim progress line */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-cream/15">
        <div className="h-full bg-gold" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
