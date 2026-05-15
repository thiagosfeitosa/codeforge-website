import type { Metadata } from "next";
import { CheckCircle2, Compass, Hammer, IterationCw, Lightbulb, Network, Palette, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";

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
    title: "Understand the business problem",
    description:
      "Clarify the real constraint, the users involved, the operational context, and the outcome the software needs to create.",
    icon: Compass,
  },
  {
    title: "Design a practical technical path",
    description:
      "Shape the architecture, interface, workflow, and delivery plan around what can move the business forward.",
    icon: Lightbulb,
  },
  {
    title: "Build, test, and deliver iteratively",
    description:
      "Ship in focused increments, validate the behavior, and keep the implementation clean enough to evolve.",
    icon: IterationCw,
  },
];

const differences = [
  { title: "Technical leadership", icon: Hammer },
  { title: "Product thinking", icon: Lightbulb },
  { title: "Clean architecture", icon: Network },
  { title: "User-centered interfaces", icon: Palette },
  { title: "Automation-first mindset", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker="About CodeForge"
        title="Software consulting shaped by engineering depth and product judgment."
        description="CodeForge was created to help companies move faster with thoughtful software engineering, modern interfaces, automation, and AI-enabled workflows."
      />

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="surface p-7">
            <div className="grid-lines" aria-hidden="true" />
            <p className="relative text-xl font-black leading-8 text-white">
              CodeForge works best where business operations, product ambition,
              and engineering execution need to become one practical system.
            </p>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
            <p>
              The practice is focused on turning vague product ideas, manual
              workflows, outdated systems, and fragmented tools into software
              that is easier to use, easier to maintain, and easier to scale.
            </p>
            <p>
              The work is intentionally hands-on: define the problem, design the
              path, build the interface and system behavior, then improve it
              with the team as real usage reveals what matters.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#11141a]">
        <div className="shell">
          <SectionTitle
            kicker="Our approach"
            title="A practical delivery model for software that has to work in the real world."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {approach.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="hover-lift surface p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.05] text-[var(--orange)]">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-7 text-xl font-black text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionTitle
            kicker="What makes us different"
            title="The work sits between strategy, interface quality, and reliable engineering."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {differences.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="panel flex items-center gap-3 p-4">
                  <Icon size={20} className="text-[var(--orange)]" />
                  <span className="font-bold text-white">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell surface p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Consulting", "Architecture", "Automation", "Delivery"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[var(--muted)]">
                <CheckCircle2 size={18} className="text-[var(--orange)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
