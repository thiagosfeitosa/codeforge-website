"use client";

import {
  Bot,
  Cloud,
  Code2,
  Database,
  Figma,
  Layers,
  Rocket,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const items = [
  { labelKey: "marquee.code", icon: Code2 },
  { labelKey: "marquee.cloud", icon: Cloud },
  { labelKey: "marquee.database", icon: Database },
  { labelKey: "marquee.ai", icon: Bot },
  { labelKey: "marquee.design", icon: Figma },
  { labelKey: "marquee.security", icon: ShieldCheck },
  { labelKey: "marquee.workflow", icon: Workflow },
  { labelKey: "marquee.server", icon: Server },
  { labelKey: "marquee.launch", icon: Rocket },
  { labelKey: "marquee.systems", icon: Layers },
];

export function LogoMarquee() {
  const { t } = useI18n();
  const groups = [items, items];

  return (
    <section className="logo-marquee py-5 mt-8" aria-label="Technology experience trail">
      <div className="logo-marquee-track px-4">
        {groups.map((group, groupIndex) => (
          <div className="logo-marquee-group" key={groupIndex} aria-hidden={groupIndex === 1}>
            {group.map((item) => {
              const Icon = item.icon;
              const label = t(item.labelKey);
              return (
                <div
                  key={`${item.labelKey}-${groupIndex}`}
                  className="inline-flex min-w-45 items-center justify-center gap-4 text-[var(--muted)]"
                  title={label}
                >
                  <Icon size={28} aria-hidden="true" />
                  <span className="text-sm font-bold">{label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
