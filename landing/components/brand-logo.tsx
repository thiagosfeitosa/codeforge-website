import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  compact?: boolean;
  variant?: "badge" | "plain-white";
  stackedText?: boolean;
};

export function BrandLogo({
  compact = false,
  variant = "badge",
  stackedText = false,
}: BrandLogoProps) {
  const isPlainWhite = variant === "plain-white";

  return (
    <Link
      href="/"
      className={[
        "inline-flex items-center",
        stackedText ? "gap-2.5" : "gap-3",
      ].join(" ")}
      aria-label="CodeForge home"
    >
      <span
        className={[
          "relative inline-flex items-center justify-center overflow-hidden",
          isPlainWhite
            ? "h-9 w-9 p-0"
            : "h-11 w-11 rounded-[10px] border border-white/10 bg-[#f4f4f4] p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.18)]",
        ].join(" ")}
      >
        <Image
          src={isPlainWhite ? "/brand/codeforge-symbol-white.svg" : "/brand/codeforge-symbol.svg"}
          alt=""
          aria-hidden="true"
          width={44}
          height={44}
          priority={!compact}
          className={[
            "h-full w-full object-contain",
            isPlainWhite ? "theme-logo-dark" : "",
            isPlainWhite ? "absolute" : "",
            isPlainWhite ? "inset-0" : "",
            isPlainWhite ? "scale-110" : "scale-125",
          ].join(" ")}
        />
        {isPlainWhite && (
          <Image
            src="/brand/codeforge-symbol.svg"
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            priority={!compact}
            className="theme-logo-light absolute inset-0 h-full w-full scale-110 object-contain"
          />
        )}
      </span>
      {!compact && (
        <span
          className={[
            "font-black tracking-[0.015em] text-white",
            stackedText ? "grid translate-y-[2px] gap-0 text-[17px] leading-[0.86]" : "text-lg",
          ].join(" ")}
        >
          <span>CODE</span>
          <span className="text-[var(--orange)]">FORGE</span>
        </span>
      )}
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
