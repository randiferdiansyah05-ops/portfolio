import type { AnchorHTMLAttributes } from "react";
import { cx } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-signal text-[#0A0E14] font-medium hover:bg-signal/90",
    secondary:
      "border border-border-strong text-ink hover:border-signal/50 hover:text-signal",
    ghost: "text-ink-muted hover:text-ink",
  };

  return (
    <a
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm transition-colors duration-200",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
