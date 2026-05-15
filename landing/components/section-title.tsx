import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionTitleProps = {
  kicker: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({
  kicker,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <span className={cn("section-kicker", align === "center" && "justify-center")}>
        {kicker}
      </span>
      <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
