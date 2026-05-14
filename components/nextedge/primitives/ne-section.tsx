import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type NESectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "background" | "canvas" | "ink";
};

const toneClass: Record<NonNullable<NESectionProps["tone"]>, string> = {
  background: "bg-[hsl(var(--background))]",
  canvas: "bg-[hsl(var(--canvas))]",
  ink: "bg-[hsl(var(--ink))] text-[hsl(var(--primary-foreground))]",
};

export function NESection({ className, tone = "background", ...props }: NESectionProps) {
  return <section className={cn("ne-section", toneClass[tone], className)} {...props} />;
}

export function NEContainer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("ne-container", className)} {...props} />;
}

type HeadingProps = {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function NESectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: HeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {kicker ? <span className="ne-kicker">{kicker}</span> : null}
      <h2 className="mt-5 text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] text-[hsl(var(--foreground))] sm:text-[44px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-[hsl(var(--muted-foreground))]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
