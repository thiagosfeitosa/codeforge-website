import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="CodeForge home"
    >
      <span
        className={[
          "relative inline-flex items-center justify-center overflow-hidden rounded-[10px] border border-white/10 bg-[#f4f4f4] shadow-[0_14px_34px_rgba(0,0,0,0.18)]",
          compact ? "h-11 w-11 p-1.5" : "h-11 w-[190px] px-3 py-2",
        ].join(" ")}
      >
        <Image
          src={compact ? "/brand/codeforge-stacked.svg" : "/brand/codeforge-horizontal.svg"}
          alt=""
          aria-hidden="true"
          width={compact ? 44 : 178}
          height={44}
          priority={!compact}
          className={[
            "h-full w-full object-contain",
            compact ? "scale-125" : "scale-[1.55]",
          ].join(" ")}
        />
      </span>
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
