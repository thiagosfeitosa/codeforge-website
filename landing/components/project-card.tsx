import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { T } from "@/lib/i18n";

type ProjectCardProps = {
  title: ReactNode;
  category: ReactNode;
  description: ReactNode;
  tags: string[];
};

export function ProjectCard({ title, category, description, tags }: ProjectCardProps) {
  return (
    <article className="hover-lift surface relative min-h-[320px] overflow-hidden p-6">
      <div className="project-lines" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col">
        <span className="w-fit rounded-[8px] border border-[rgba(255,106,26,0.26)] bg-[rgba(255,106,26,0.1)] px-3 py-1 text-xs font-bold uppercase text-[var(--orange)]">
          {category}
        </span>
        <h3 className="mt-8 text-2xl font-black leading-tight text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[8px] border border-white/10 bg-black/18 px-3 py-1 text-xs text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-white transition hover:text-[var(--orange)]"
        >
          <T k="cta.viewCaseStudy" /> <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
