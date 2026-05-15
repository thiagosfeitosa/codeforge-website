"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { SparkButton } from "@/components/spark-button";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
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
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-white/10 bg-[#0f1115]/88 shadow-[0_14px_42px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-white/6 bg-[#0f1115]/58 backdrop-blur-lg",
      )}
    >
      <div className="shell flex min-h-[74px] items-center justify-between gap-6">
        <BrandLogo />

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
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <SparkButton href="/contact">Start a Project</SparkButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.05] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/8 bg-[#0f1115]/96 backdrop-blur-xl lg:hidden">
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
                {item.label}
              </Link>
            ))}
            <SparkButton href="/contact" className="mt-2 w-full">
              Start a Project
            </SparkButton>
          </div>
        </div>
      )}
    </header>
  );
}
