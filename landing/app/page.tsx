import Image from "next/image";
import {
  Bot,
  Braces,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Cpu,
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

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Modern web applications, APIs, integrations, and reliable delivery across the product stack.",
    icon: Code2,
  },
  {
    title: "UX/UI & Front-End Architecture",
    description:
      "Interfaces that feel premium, scale cleanly, and stay maintainable as products grow.",
    icon: Palette,
  },
  {
    title: "AI & Automation Workflows",
    description:
      "Operational systems, AI-assisted workflows, and API automation built around real business processes.",
    icon: Bot,
  },
  {
    title: "MVPs & Product Strategy",
    description:
      "Focused product paths for startups and teams that need to validate, launch, and iterate quickly.",
    icon: Rocket,
  },
];

const projects = [
  {
    title: "AI Customer Support Workflow",
    category: "AI Automation",
    description:
      "A support intake and response workflow that triages messages, drafts answers, and routes edge cases to humans.",
    tags: ["React", "Node.js", "AI", "APIs"],
  },
  {
    title: "SaaS MVP Launch Platform",
    category: "Product Build",
    description:
      "A lean launch platform for service businesses with onboarding, admin flows, billing-ready structure, and analytics.",
    tags: ["Next.js", "TypeScript", "Cloud", "UX"],
  },
  {
    title: "Legacy System Modernization",
    category: "Modernization",
    description:
      "A cleaner interface and API layer around legacy operations, reducing manual work without replacing everything at once.",
    tags: ["React", "Node.js", "APIs", "Cloud"],
  },
];

const aboutBullets = [
  "Senior engineering expertise",
  "Front-end and full-stack delivery",
  "Automation and AI integration",
  "Product-minded execution",
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero-scene relative overflow-visible">
        <div className="grid-lines" aria-hidden="true" />
        <div className="hero-inner shell grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative z-10">
            <span className="section-kicker reveal">Software factory for modern teams</span>
            <h1 className="reveal reveal-delay-1 mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Forging <span className="orange-text">Software</span> Solutions
              for Modern Businesses.
            </h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              CodeForge helps companies design, build, automate, and scale
              digital products with full-stack engineering, AI workflows, and
              modern user experiences.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <SparkButton href="/contact">Start a Project</SparkButton>
              <SparkButton href="/projects" variant="secondary">
                View Projects
              </SparkButton>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-scanline" aria-hidden="true" />
            <div className="spark left-[18%] top-[8%]" aria-hidden="true" />
            <div className="spark right-[12%] top-[20%] [animation-delay:400ms]" aria-hidden="true" />
            <div className="spark bottom-[22%] left-[12%] [animation-delay:900ms]" aria-hidden="true" />
            <div className="spark left-[64%] top-[4%] [animation-delay:1200ms]" aria-hidden="true" />
            <div className="spark bottom-[12%] right-[2%] [animation-delay:1600ms]" aria-hidden="true" />

            <div className="absolute left-1/2 top-12 -translate-x-1/2">
              <div className="forge-mark">
                <Image
                  src="/brand/codeforge-stacked.svg"
                  alt=""
                  aria-hidden="true"
                  width={112}
                  height={112}
                  className="forge-mark-logo"
                />
              </div>
            </div>

            <div className="tech-card hero-main-card absolute left-0 top-56 w-[72%] p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] bg-[rgba(255,106,26,0.12)] text-[var(--orange)]">
                  <Cpu size={22} />
                </span>
                <div>
                  <p className="text-sm font-black text-white">AI Automation</p>
                  <p className="text-xs text-[var(--muted)]">Workflow orchestration</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {["Full-Stack Engineering", "UX/UI Systems", "API Integrations"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-[8px] border border-white/8 bg-white/[0.04] px-4 py-3">
                    <span className="text-sm text-[var(--muted)]">{item}</span>
                    <CheckCircle2 size={17} className="text-[var(--orange)]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-card hero-metric-card absolute right-0 top-32 w-52 p-5">
              <p className="text-3xl font-black text-white">17+</p>
              <p className="mt-1 text-sm text-[var(--muted)]">years experience</p>
            </div>

            <div className="tech-card hero-mini-card absolute bottom-28 right-0 w-64 p-5">
              <div className="flex items-center gap-3">
                <CircuitBoard size={24} className="text-[var(--orange)]" />
                <div>
                  <p className="text-sm font-black text-white">AI-ready workflows</p>
                  <p className="text-xs text-[#cfd3dc]">Systems built to evolve</p>
                </div>
              </div>
            </div>

            <div className="tech-card hero-mini-card absolute bottom-2 left-2 w-60 p-5">
              <div className="flex items-center gap-3">
                <Braces size={24} className="text-[var(--orange)]" />
                <div>
                  <p className="text-sm font-black text-white">Full-stack delivery</p>
                  <p className="text-xs text-[#cfd3dc]">Frontend, APIs, cloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="section">
        <div className="shell">
          <SectionTitle
            kicker="What we build"
            title="Engineering services shaped around products, operations, and growth."
            description="CodeForge combines senior technical execution with product judgment, so the work supports both the user experience and the business model behind it."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
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
              <h2 className="mt-8 text-3xl font-black text-white">Product-minded systems</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Practical software architecture, clear UI systems, and automation
                paths that map back to the business problem.
              </p>
            </div>
            <div className="surface absolute bottom-4 right-0 w-[68%] border-[rgba(255,106,26,0.26)] p-6">
              <Workflow className="text-[var(--orange)]" size={28} />
              <p className="mt-6 text-xl font-black">Idea to workflow to product</p>
            </div>
          </div>

          <div>
            <SectionTitle
              kicker="About CodeForge"
              title="Independent software consulting for teams that need thoughtful execution."
              description="CodeForge is an independent software consulting practice focused on helping businesses transform ideas, legacy systems, and operational challenges into scalable digital products."
            />
            <div className="mt-8 grid gap-3">
              {aboutBullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-[var(--muted)]">
                  <CheckCircle2 size={18} className="text-[var(--orange)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <SparkButton href="/about" variant="secondary">
                Learn More About Us
              </SparkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#11141a]">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              kicker="Featured projects"
              title="A preview of the kind of systems CodeForge is built to deliver."
              description="These are placeholder case studies for now, designed so real project stories can replace them cleanly later."
            />
            <SparkButton href="/projects" variant="secondary" className="w-fit">
              View All Projects
            </SparkButton>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="surface relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="grid-lines" aria-hidden="true" />
            <div className="relative z-10 max-w-4xl">
              <span className="section-kicker">Start the forge</span>
              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl">
                Have an idea, workflow, or system that needs to be forged into
                something better?
              </h2>
              <div className="mt-9">
                <SparkButton href="/contact">Let&apos;s Talk</SparkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
