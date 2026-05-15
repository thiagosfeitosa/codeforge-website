import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="hover-lift surface group p-6">
      <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.05] text-[var(--orange)] transition group-hover:border-[rgba(255,106,26,0.5)] group-hover:bg-[rgba(255,106,26,0.1)]">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
    </article>
  );
}
