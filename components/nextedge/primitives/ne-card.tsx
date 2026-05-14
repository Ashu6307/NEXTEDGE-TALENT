import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type NECardProps = HTMLAttributes<HTMLDivElement>;

export function NECard({ className, ...props }: NECardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-[var(--shadow-soft)]",
        className,
      )}
      {...props}
    />
  );
}
