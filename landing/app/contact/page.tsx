import type { Metadata } from "next";
import { Bot, Code2, Mail, MapPin, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { T } from "@/lib/i18n";
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
    titleKey: "contact.card.email",
    value: siteConfig.email,
    icon: Mail,
  },
  {
    titleKey: "contact.card.location",
    value: "Florida, USA / Remote",
    icon: MapPin,
  },
  {
    titleKey: "contact.card.services",
    valueKey: "contact.card.servicesValue",
    icon: Code2,
  },
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker={<T k="contact.kicker" />}
        title={<T k="contact.title" />}
        description={<T k="contact.description" />}
      />

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <div className="surface p-7">
              <Sparkles className="text-[var(--orange)]" size={30} />
              <h2 className="mt-7 text-3xl font-black text-white">
                <T k="contact.panel.title" />
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                <T k="contact.panel.description" />
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.titleKey} className="panel flex gap-4 p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[rgba(255,106,26,0.1)] text-[var(--orange)]">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-black text-white"><T k={item.titleKey} /></p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {item.valueKey ? <T k={item.valueKey} /> : item.value}
                      </p>
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
                <p className="text-sm font-black text-white"><T k="contact.ai.title" /></p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  <T k="contact.ai.description" />
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
