"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n";

const projects = [
  {
    titleKey: "projects.grid.support.title",
    category: "AI Automation",
    categoryKey: "category.ai",
    descriptionKey: "projects.grid.support.description",
    tags: ["React", "Node.js", "TypeScript", "AI", "APIs"],
  },
  {
    titleKey: "projects.grid.ecommerce.title",
    category: "Automation",
    categoryKey: "category.automation",
    descriptionKey: "projects.grid.ecommerce.description",
    tags: ["React", "Cloud", "APIs", "Node.js"],
  },
  {
    titleKey: "projects.grid.saas.title",
    category: "MVP",
    categoryKey: "category.mvp",
    descriptionKey: "projects.grid.saas.description",
    tags: ["Next.js", "TypeScript", "UX", "Cloud"],
  },
  {
    titleKey: "projects.grid.legacy.title",
    category: "Modernization",
    categoryKey: "category.modernization",
    descriptionKey: "projects.grid.legacy.description",
    tags: ["React", "Node.js", "APIs", "Cloud"],
  },
  {
    titleKey: "projects.grid.design.title",
    category: "UX/UI",
    categoryKey: "category.ux",
    descriptionKey: "projects.grid.design.description",
    tags: ["React", "TypeScript", "Design System", "UX"],
  },
  {
    titleKey: "projects.grid.workflow.title",
    category: "Automation",
    categoryKey: "category.automation",
    descriptionKey: "projects.grid.workflow.description",
    tags: ["Node.js", "APIs", "Workflow", "Cloud"],
  },
];

const filters = [
  { id: "All", labelKey: "projects.filter.all" },
  { id: "AI Automation", labelKey: "category.ai" },
  { id: "Automation", labelKey: "category.automation" },
  { id: "MVP", labelKey: "category.mvp" },
  { id: "Modernization", labelKey: "category.modernization" },
  { id: "UX/UI", labelKey: "category.ux" },
];

export function ProjectsGrid() {
  const { t } = useI18n();
  const [active, setActive] = useState("All");
  const visibleProjects =
    active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={cn(
              "rounded-[8px] border px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115]",
              active === filter.id
                ? "border-[rgba(255,106,26,0.58)] bg-[rgba(255,106,26,0.12)] text-[var(--orange)]"
                : "border-white/10 bg-white/[0.04] text-[var(--muted)] hover:border-white/18 hover:text-white",
            )}
            onClick={() => setActive(filter.id)}
          >
            {t(filter.labelKey)}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.titleKey}
            title={t(project.titleKey)}
            category={t(project.categoryKey)}
            description={t(project.descriptionKey)}
            tags={project.tags}
          />
        ))}
      </div>
    </>
  );
}
