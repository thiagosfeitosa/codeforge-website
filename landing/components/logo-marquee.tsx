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

const items = [
  { label: "Code", icon: Code2 },
  { label: "Cloud", icon: Cloud },
  { label: "Database", icon: Database },
  { label: "AI", icon: Bot },
  { label: "Design", icon: Figma },
  { label: "Security", icon: ShieldCheck },
  { label: "Workflow", icon: Workflow },
  { label: "Server", icon: Server },
  { label: "Launch", icon: Rocket },
  { label: "Systems", icon: Layers },
];

export function LogoMarquee() {
  const groups = [items, items];

  return (
    <section className="logo-marquee py-5 mt-8" aria-label="Technology experience trail">
      <div className="logo-marquee-track px-4">
        {groups.map((group, groupIndex) => (
          <div className="logo-marquee-group" key={groupIndex} aria-hidden={groupIndex === 1}>
            {group.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.label}-${groupIndex}`}
                  className="inline-flex min-w-45 items-center justify-center gap-4 text-[var(--muted)]"
                  title={item.label}
                >
                  <Icon size={28} aria-hidden="true" />
                  <span className="text-sm font-bold">{item.label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
