import Reveal from "@/components/Reveal";
import { GIVING_TIERS, DONATE_URL } from "@/lib/content";

export default function GivingCircles() {
  return (
    <section id="give" className="bg-cream py-24 sm:py-32">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker">Join a Giving Circle</p>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl">
            Find your place in the movement.
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink/70">
            Whatever your capacity, there is a circle for you — and a child whose life you&apos;ll
            change.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {GIVING_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.07}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  tier.featured
                    ? "border-purple bg-purple text-white shadow-lg"
                    : "border-ink/12 bg-canvas"
                }`}
              >
                {tier.featured && (
                  <span className="mb-4 w-fit rounded-full bg-white/20 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em]">
                    Greatest impact
                  </span>
                )}
                <h3 className={`font-serif text-2xl ${tier.featured ? "text-white" : "text-ink"}`}>
                  {tier.name}
                </h3>
                <p
                  className={`mt-3 font-body text-sm leading-relaxed ${
                    tier.featured ? "text-white/85" : "text-ink/65"
                  }`}
                >
                  {tier.blurb}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tier.amounts.map((amt) => (
                    <a
                      key={amt}
                      href={DONATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full px-4 py-2 font-sans text-sm font-semibold transition-colors ${
                        tier.featured
                          ? "bg-white/15 text-white hover:bg-white hover:text-purple"
                          : "bg-bone text-ink hover:bg-purple hover:text-white"
                      }`}
                    >
                      ${amt.toLocaleString()}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-9 py-4 text-base"
          >
            Make a Gift
          </a>
        </div>
      </div>
    </section>
  );
}
