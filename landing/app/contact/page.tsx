import type { Metadata } from "next";
import { Bot, Code2, Mail, MapPin, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CodeForge to discuss software consulting, AI automation, full-stack development, MVPs, and product modernization.",
  alternates: {
    canonical: "/contact",
  },
};

const contactCards = [
  {
    title: "Email",
    value: siteConfig.email,
    icon: Mail,
  },
  {
    title: "Location",
    value: "Florida, USA / Remote",
    icon: MapPin,
  },
  {
    title: "Services",
    value: "Software Consulting, AI Automation, Full-Stack Development",
    icon: Code2,
  },
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker="Contact"
        title="Let&apos;s Forge Your Next Digital Product"
        description="Share what you are building, modernizing, or automating. CodeForge can help shape the technical path and turn the idea into a practical product experience."
      />

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <div className="surface p-7">
              <Sparkles className="text-[var(--orange)]" size={30} />
              <h2 className="mt-7 text-3xl font-black text-white">
                Start with the problem, then forge the system around it.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                The first conversation is about understanding the workflow,
                business goal, timeline, and technical constraints. The result
                should be a path that feels concrete, not vague.
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="panel flex gap-4 p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[rgba(255,106,26,0.1)] text-[var(--orange)]">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-black text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 panel flex gap-4 p-5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[rgba(255,106,26,0.1)] text-[var(--orange)]">
                <Bot size={20} />
              </span>
              <div>
                <p className="text-sm font-black text-white">AI-ready conversations</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  Bring workflow bottlenecks, repetitive operations, or product
                  ideas that could benefit from intelligent automation.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
