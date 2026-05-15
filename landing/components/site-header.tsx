"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSelector } from "@/components/language-selector";
import { SparkButton } from "@/components/spark-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled
          ? "site-header-scrolled shadow-[0_14px_42px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "backdrop-blur-lg",
      )}
    >
      <div className="shell flex min-h-[74px] items-center justify-between gap-6">
        <BrandLogo variant="plain-white" stackedText />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-bold text-[var(--muted)] transition hover:text-white",
                pathname === item.href && "text-white",
              )}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelector />
          <ThemeToggle />
          <SparkButton href="/contact">{t("cta.startProject")}</SparkButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSelector />
          <ThemeToggle />
          <button
            type="button"
            className="theme-menu-button inline-flex h-11 w-11 items-center justify-center rounded-[8px]"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="site-mobile-menu border-t backdrop-blur-xl lg:hidden">
          <div className="shell grid gap-2 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[8px] px-4 py-3 text-sm font-bold text-[var(--muted)] transition hover:bg-white/[0.06] hover:text-white",
                  pathname === item.href && "bg-white/[0.06] text-white",
                )}
                onClick={() => setOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <SparkButton href="/contact" className="mt-2 w-full">
              {t("cta.startProject")}
            </SparkButton>
          </div>
        </div>
      )}
    </header>
  );
}
