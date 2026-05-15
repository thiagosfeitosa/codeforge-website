import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="forge-footer border-t border-white/8 bg-[#0b0d11] py-16 sm:py-20">
      <div className="ember-field" aria-hidden="true">
        {Array.from({ length: 64 }, (_, index) => (
          <span key={index} className="ember-particle" />
        ))}
      </div>
      <div className="shell relative z-10 grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr]">
        <div>
          <BrandLogo />
          <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
            Forging scalable software, intelligent workflows, and modern digital
            experiences.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
              { href: "https://github.com", label: "GitHub", icon: Github },
              { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.04] text-[var(--muted)] transition hover:border-[rgba(255,106,26,0.45)] hover:text-[var(--orange)]"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-white">Links</h2>
          <div className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-white">Contact</h2>
          <div className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
              {siteConfig.email}
            </a>
            <p>Florida, USA / Remote</p>
            <p>&copy; {year} {siteConfig.legalName}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
