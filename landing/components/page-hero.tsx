import type { ReactNode } from "react";

type PageHeroProps = {
  kicker: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="section-tight border-b border-white/8 pt-32">
      <div className="shell">
        <div className="max-w-4xl">
          <span className="section-kicker">{kicker}</span>
          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
