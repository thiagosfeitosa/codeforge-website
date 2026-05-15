import type { Metadata } from "next";
import { CheckCircle2, Compass, Hammer, IterationCw, Lightbulb, Network, Palette, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About CodeForge",
  description:
    "Learn how CodeForge approaches software engineering consulting, modern interfaces, automation, and AI-enabled workflows.",
  alternates: {
    canonical: "/about",
  },
};

const approach = [
  {
    titleKey: "about.approach.1.title",
    descriptionKey: "about.approach.1.description",
    icon: Compass,
  },
  {
    titleKey: "about.approach.2.title",
    descriptionKey: "about.approach.2.description",
    icon: Lightbulb,
  },
  {
    titleKey: "about.approach.3.title",
    descriptionKey: "about.approach.3.description",
    icon: IterationCw,
  },
];

const differences = [
  { titleKey: "about.diff.technical", icon: Hammer },
  { titleKey: "about.diff.product", icon: Lightbulb },
  { titleKey: "about.diff.architecture", icon: Network },
  { titleKey: "about.diff.interfaces", icon: Palette },
  { titleKey: "about.diff.automation", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker={<T k="about.kicker" />}
        title={<T k="about.title" />}
        description={<T k="about.description" />}
      />

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="surface p-7">
            <div className="grid-lines" aria-hidden="true" />
            <p className="relative text-xl font-black leading-8 text-white">
              <T k="about.statement" />
            </p>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
            <p>
              <T k="about.paragraph1" />
            </p>
            <p>
              <T k="about.paragraph2" />
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#11141a]">
        <div className="shell">
          <SectionTitle
            kicker={<T k="about.approach.kicker" />}
            title={<T k="about.approach.title" />}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {approach.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.titleKey} className="hover-lift surface p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.05] text-[var(--orange)]">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-7 text-xl font-black text-white"><T k={item.titleKey} /></h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]"><T k={item.descriptionKey} /></p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionTitle
            kicker={<T k="about.diff.kicker" />}
            title={<T k="about.diff.title" />}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {differences.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titleKey} className="panel flex items-center gap-3 p-4">
                  <Icon size={20} className="text-[var(--orange)]" />
                  <span className="font-bold text-white"><T k={item.titleKey} /></span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell surface p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["about.pill.consulting", "about.pill.architecture", "about.pill.automation", "about.pill.delivery"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[var(--muted)]">
                <CheckCircle2 size={18} className="text-[var(--orange)]" />
                <span><T k={item} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
