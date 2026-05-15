"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/cn";

const projects = [
  {
    title: "AI Customer Support Crew",
    category: "AI Automation",
    description:
      "A workflow that classifies support requests, drafts responses, and escalates sensitive conversations to the right team.",
    tags: ["React", "Node.js", "TypeScript", "AI", "APIs"],
  },
  {
    title: "E-commerce Automation Dashboard",
    category: "Automation",
    description:
      "A control surface for inventory operations, order workflows, customer notifications, and reporting APIs.",
    tags: ["React", "Cloud", "APIs", "Node.js"],
  },
  {
    title: "SaaS MVP for Service Businesses",
    category: "MVP",
    description:
      "A lean SaaS foundation with onboarding, account views, admin flows, and product analytics structure.",
    tags: ["Next.js", "TypeScript", "UX", "Cloud"],
  },
  {
    title: "Legacy Platform Modernization",
    category: "Modernization",
    description:
      "A progressive modernization path that wrapped legacy operations with cleaner UI, APIs, and fewer manual steps.",
    tags: ["React", "Node.js", "APIs", "Cloud"],
  },
  {
    title: "Design System & Front-End Architecture",
    category: "UX/UI",
    description:
      "A component system, UI architecture, and implementation model designed for a scaling engineering team.",
    tags: ["React", "TypeScript", "Design System", "UX"],
  },
  {
    title: "Workflow Automation with APIs",
    category: "Automation",
    description:
      "Connected internal tools, third-party APIs, and approval flows into a single reliable operational workflow.",
    tags: ["Node.js", "APIs", "Workflow", "Cloud"],
  },
];

const filters = ["All", "AI Automation", "Automation", "MVP", "Modernization", "UX/UI"];

export function ProjectsGrid() {
  const [active, setActive] = useState("All");
  const visibleProjects =
    active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={cn(
              "rounded-[8px] border px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115]",
              active === filter
                ? "border-[rgba(255,106,26,0.58)] bg-[rgba(255,106,26,0.12)] text-[var(--orange)]"
                : "border-white/10 bg-white/[0.04] text-[var(--muted)] hover:border-white/18 hover:text-white",
            )}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}
