import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,var(--brand),var(--brand-deep))] px-6 py-3 text-sm text-white shadow-[0_16px_40px_rgba(252,135,0,0.28)] hover:-translate-y-0.5",
        secondary:
          "border border-white/12 bg-white/6 px-6 py-3 text-sm text-white hover:bg-white/10",
        ghost:
          "px-3 py-2 text-sm text-[var(--muted)] hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export function ButtonLink({ className, variant, ...props }: ButtonLinkProps) {
  return <a className={cn(buttonVariants({ variant }), className)} {...props} />;
}
