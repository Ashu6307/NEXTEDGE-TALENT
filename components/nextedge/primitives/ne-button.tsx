import * as React from "react";

import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type NEButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 ne-focus-ring disabled:pointer-events-none disabled:opacity-60 [&_.ne-btn-arrow]:transition-transform [&_.ne-btn-arrow]:duration-200 [&_.ne-btn-arrow]:ease-out hover:[&_.ne-btn-arrow]:rotate-45 [&_.ne-btn-chip]:transition-colors [&_.ne-btn-chip]:duration-200 hover:[&_.ne-btn-chip]:bg-[hsl(var(--background))] hover:[&_.ne-btn-chip]:text-[hsl(var(--accent))]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[hsl(var(--ink))] text-[hsl(var(--primary-foreground))] shadow-sm hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] hover:-translate-y-0.5 hover:shadow-md",
  secondary:
    "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow-sm hover:bg-[hsl(var(--accent)/0.88)] hover:text-[hsl(var(--accent-foreground))] hover:-translate-y-0.5 hover:shadow-md",
  outline:
    "border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]",
  ghost:
    "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent)/0.18)] hover:text-[hsl(var(--accent-foreground))]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-12 px-6 text-[14.5px]",
};

export const NEButton = React.forwardRef<HTMLButtonElement, NEButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild, children, ...props },
    ref,
  ) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(child.props.className, classes),
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

NEButton.displayName = "NEButton";
