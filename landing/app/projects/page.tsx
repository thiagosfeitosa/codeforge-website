import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectsGrid } from "@/components/projects-grid";

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
        kicker="Projects"
        title="Systems, workflows, and product foundations built for modern digital teams."
        description="These mock case studies are structured so real project work can replace them later without redesigning the page."
      />
      <section className="section">
        <div className="shell">
          <ProjectsGrid />
        </div>
      </section>
    </div>
  );
}
