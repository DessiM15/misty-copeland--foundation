import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import DonateForm from "@/components/DonateForm";
import CampaignSection from "@/components/CampaignSection";
import GivingCircles from "@/components/GivingCircles";
import GiftImpact from "@/components/GiftImpact";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support The Misty Copeland Foundation. Your tax-deductible gift makes ballet accessible to children in under-resourced communities.",
};

export default function DonatePage() {
  return (
    <>
      <PageHeader
        kicker="Support the Movement"
        title="Your gift opens the door to dance."
        intro="For every child who has been told ballet isn't for them, your generosity says otherwise. Give today and change a life."
      />

      {/* Donate widget + why give */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="container-content grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-20">
          <Reveal>
            <DonateForm />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="kicker">Why give</p>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl">
              A gift that lasts a lifetime.
            </h2>
            <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-ink/75">
              <p>
                Ballet has the power to build confidence, discipline and joy. But for too many
                children, the barre has always been out of reach — because of cost, geography or the
                simple absence of anyone who looks like them.
              </p>
              <p>
                Your gift changes that. It puts ballet shoes on small feet, professional teaching
                artists in community classrooms, and possibility in the hearts of children who have
                never been told they belong.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {[
                ["100%", "Tax-deductible"],
                ["501(c)(3)", "Registered nonprofit"],
                ["Secure", "Encrypted giving"],
              ].map(([big, small]) => (
                <div key={small}>
                  <p className="font-serif text-2xl text-purple sm:text-3xl">{big}</p>
                  <p className="mt-1 font-sans text-xs uppercase tracking-[0.12em] text-muted">
                    {small}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CampaignSection />
      <GivingCircles />
      <GiftImpact />

      {/* Other ways to give */}
      <section className="border-t border-ink/10 bg-cream py-20 sm:py-28">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker">More ways to give</p>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl">
              Generosity comes in many forms.
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                t: "By Mail",
                d: `Send a check payable to The Misty Copeland Foundation to ${CONTACT.address}.`,
              },
              {
                t: "Employer Matching",
                d: "Many employers match charitable gifts — doubling your impact. Ask your HR team about matching programs.",
              },
              {
                t: "Stock & DAF",
                d: "Give appreciated securities or through a donor-advised fund. Contact us to arrange a transfer.",
              },
            ].map((w) => (
              <Reveal key={w.t}>
                <div className="h-full rounded-2xl border border-ink/10 bg-canvas p-7">
                  <h3 className="font-serif text-xl text-ink">{w.t}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-center font-body text-sm text-ink/60">
            Questions about giving? Email{" "}
            <a href={`mailto:${CONTACT.email}`} className="link-underline text-purple">
              {CONTACT.email}
            </a>{" "}
            or call {CONTACT.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
