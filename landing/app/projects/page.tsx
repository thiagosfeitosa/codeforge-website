import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectsGrid } from "@/components/projects-grid";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore CodeForge project examples across AI automation, SaaS MVPs, modernization, UX/UI systems, and API workflows.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker={<T k="projects.kicker" />}
        title={<T k="projects.title" />}
        description={<T k="projects.description" />}
      />
      <section className="section">
        <div className="shell">
          <ProjectsGrid />
        </div>
      </section>
    </div>
  );
}
