"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme/use-theme";

const themeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
] as const;

export function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const activeTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <div
      className="relative inline-flex items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-0.5"
      role="group"
      aria-label="Theme selector"
      suppressHydrationWarning
    >
      <span
        aria-hidden
        className={[
          "absolute top-0.5 left-0.5 h-8 w-8 rounded-full bg-[hsl(var(--secondary))] transition-transform duration-300 ease-out",
          activeTheme === "dark" ? "translate-x-8" : "translate-x-0",
        ].join(" ")}
      />
      {themeOptions.map((option) => {
        const Icon = option.icon;
        const isActive = activeTheme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            className={[
              "relative z-10 grid h-8 w-8 place-items-center rounded-full transition-colors duration-300",
              isActive ? "text-[hsl(var(--foreground))]" : "text-[hsl(var(--muted-foreground))]",
            ].join(" ")}
            onClick={() => setTheme(option.value)}
            aria-pressed={isActive}
            aria-label={option.label}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
          </button>
        );
      })}
    </div>
  );
}
