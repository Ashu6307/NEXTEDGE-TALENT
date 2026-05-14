import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type Variant = "default" | "brand" | "success" | "warning";

type NEBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  default:
    "border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--muted-foreground))]",
  brand:
    "border-[hsl(var(--brand))/0.3] bg-[hsl(var(--brand))/0.1] text-[hsl(var(--brand))]",
  success:
    "border-[hsl(var(--success))/0.3] bg-[hsl(var(--success))/0.12] text-[hsl(var(--success))]",
  warning:
    "border-[hsl(var(--warning))/0.35] bg-[hsl(var(--warning))/0.12] text-[hsl(var(--warning))]",
};

export function NEBadge({ className, variant = "default", ...props }: NEBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
