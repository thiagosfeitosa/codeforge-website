"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Spark = {
  id: number;
  angle: string;
  distance: string;
};

type SparkButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  showArrow?: boolean;
  disabled?: boolean;
};

const variantClass = {
  primary:
    "bg-[var(--orange)] text-[#111318] shadow-[0_18px_48px_rgba(255,106,26,0.28)] hover:bg-[var(--orange-hover)]",
  secondary:
    "border border-white/12 bg-white/[0.06] text-white hover:border-[rgba(255,106,26,0.48)] hover:bg-white/[0.09]",
  ghost: "text-[var(--muted)] hover:text-white",
};

export function SparkButton({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  showArrow = true,
  disabled,
}: SparkButtonProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  function burst() {
    const now = Date.now();
    const next = Array.from({ length: 9 }, (_, index) => ({
      id: now + index,
      angle: `${(index / 9) * Math.PI * 2}rad`,
      distance: `${24 + (index % 3) * 10}px`,
    }));

    setSparks(next);
    window.setTimeout(() => setSparks([]), 680);
    onClick?.();
  }

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight size={17} aria-hidden="true" />}
      </span>
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="spark-particle"
          style={
            {
              "--angle": spark.angle,
              "--distance": spark.distance,
            } as React.CSSProperties
          }
          aria-hidden="true"
        />
      ))}
    </>
  );

  const classes = cn(
    "spark-button inline-flex min-h-12 items-center justify-center rounded-[8px] px-5 py-3 text-sm font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115] disabled:pointer-events-none disabled:opacity-50",
    variantClass[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={burst}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={burst} disabled={disabled}>
      {content}
    </button>
  );
}
