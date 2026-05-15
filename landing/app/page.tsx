import type { CSSProperties } from "react";
import {
  Bot,
  CheckCircle2,
  Code2,
  Layers3,
  Palette,
  Rocket,
  Workflow,
} from "lucide-react";
import { LogoMarquee } from "@/components/logo-marquee";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { SparkButton } from "@/components/spark-button";
import { T } from "@/lib/i18n";

const services = [
  {
    titleKey: "service.full.title",
    descriptionKey: "service.full.description",
    icon: Code2,
  },
  {
    titleKey: "service.ux.title",
    descriptionKey: "service.ux.description",
    icon: Palette,
  },
  {
    titleKey: "service.ai.title",
    descriptionKey: "service.ai.description",
    icon: Bot,
  },
  {
    titleKey: "service.mvp.title",
    descriptionKey: "service.mvp.description",
    icon: Rocket,
  },
];

const projects = [
  {
    titleKey: "project.support.title",
    categoryKey: "project.support.category",
    descriptionKey: "project.support.description",
    tags: ["React", "Node.js", "AI", "APIs"],
  },
  {
    titleKey: "project.saas.title",
    categoryKey: "project.saas.category",
    descriptionKey: "project.saas.description",
    tags: ["Next.js", "TypeScript", "Cloud", "UX"],
  },
  {
    titleKey: "project.legacy.title",
    categoryKey: "project.legacy.category",
    descriptionKey: "project.legacy.description",
    tags: ["React", "Node.js", "APIs", "Cloud"],
  },
];

const aboutBullets = [
  "home.about.bullet1",
  "home.about.bullet2",
  "home.about.bullet3",
  "home.about.bullet4",
];

const editorLines = [
  { code: "export function LaunchPage() {", indent: 0 },
  { code: "const product = forge({", indent: 1 },
  { code: 'strategy: "market-ready",', indent: 2 },
  { code: 'interface: "premium",', indent: 2 },
  { code: 'automation: "AI-enabled",', indent: 2 },
  { code: 'deployment: "scalable",', indent: 2 },
  { code: "});", indent: 1 },
  { code: "return <Experience data={product} />;", indent: 1 },
  { code: "}", indent: 0 },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero-scene relative overflow-visible">
        <div className="grid-lines" aria-hidden="true" />
        <div className="hero-inner shell grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative z-10">
            <span className="section-kicker reveal"><T k="home.kicker" /></span>
            <h1 className="reveal reveal-delay-1 mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-[4.05rem] xl:text-[4.35rem]">
              <T k="home.hero.forging" /> <span className="orange-text"><T k="home.hero.software" /></span>{" "}
              <T k="home.hero.rest" />
            </h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              <T k="home.hero.description" />
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <SparkButton href="/contact"><T k="cta.startProject" /></SparkButton>
              <SparkButton href="/projects" variant="secondary">
                <T k="cta.viewProjects" />
              </SparkButton>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <div className="hero-flicker-light" aria-hidden="true" />
            <div className="hero-orbit" aria-hidden="true" />

            <div className="ide-window">
              <div className="ide-topbar">
                <div className="ide-traffic" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="ide-tabs" aria-label="Code editor tabs">
                  <span className="active">page.tsx</span>
                  <span>workflow.ts</span>
                  <span>deploy.yml</span>
                </div>
              </div>

              <div className="ide-body">
                <aside className="ide-sidebar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </aside>
                <div className="ide-editor" aria-label="Animated CodeForge code editor preview">
                  {editorLines.map((line, index) => (
                    <div
                      key={line.code}
                      className="ide-line"
                      style={{
                        "--line-index": index,
                        "--indent": line.indent,
                      } as CSSProperties}
                    >
                      <span className="ide-line-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="ide-code">
                        {line.code}
                        {index === editorLines.length - 1 && (
                          <span className="ide-code-cursor" aria-hidden="true" />
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ide-terminal" aria-label="Build status">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">npm run forge</span>
                <span className="terminal-status">build ready</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="section">
        <div className="shell">
          <SectionTitle
            kicker={<T k="home.services.kicker" />}
            title={<T k="home.services.title" />}
            description={<T k="home.services.description" />}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.titleKey}
                icon={service.icon}
                title={<T k={service.titleKey} />}
                description={<T k={service.descriptionKey} />}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[430px]">
            <div className="grid-lines" aria-hidden="true" />
            <div className="surface absolute left-0 top-8 w-[78%] p-7">
              <Layers3 className="text-[var(--orange)]" size={32} />
              <h2 className="mt-8 text-3xl font-black text-white"><T k="home.about.cardTitle" /></h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                <T k="home.about.cardDescription" />
              </p>
            </div>
            <div className="surface absolute bottom-4 right-0 w-[68%] border-[rgba(255,106,26,0.26)] p-6">
              <Workflow className="text-[var(--orange)]" size={28} />
              <p className="mt-6 text-xl font-black"><T k="home.about.workflow" /></p>
            </div>
          </div>

          <div>
            <SectionTitle
              kicker={<T k="home.about.kicker" />}
              title={<T k="home.about.title" />}
              description={<T k="home.about.description" />}
            />
            <div className="mt-8 grid gap-3">
              {aboutBullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-[var(--muted)]">
                  <CheckCircle2 size={18} className="text-[var(--orange)]" />
                  <span><T k={item} /></span>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <SparkButton href="/about" variant="secondary">
                <T k="cta.learnAbout" />
              </SparkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#11141a]">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              kicker={<T k="home.projects.kicker" />}
              title={<T k="home.projects.title" />}
              description={<T k="home.projects.description" />}
            />
            <SparkButton href="/projects" variant="secondary" className="w-fit">
              <T k="cta.viewAllProjects" />
            </SparkButton>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.titleKey}
                title={<T k={project.titleKey} />}
                category={<T k={project.categoryKey} />}
                description={<T k={project.descriptionKey} />}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="surface relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="grid-lines" aria-hidden="true" />
            <div className="relative z-10 max-w-4xl">
              <span className="section-kicker"><T k="home.final.kicker" /></span>
              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl">
                <T k="home.final.title" />
              </h2>
              <div className="mt-9">
                <SparkButton href="/contact"><T k="cta.letsTalk" /></SparkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
