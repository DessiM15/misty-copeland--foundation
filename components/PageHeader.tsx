import Reveal from "@/components/Reveal";

export default function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <header className="border-b border-ink/10 bg-bone pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="container-content">
        <Reveal>
          <p className="kicker">{kicker}</p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-ink/70">{intro}</p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
