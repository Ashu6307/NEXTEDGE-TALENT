"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronRight, Menu, Sparkles, X } from "lucide-react";

import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";

const uc = (source: string) => `/under-construction?source=${source}`;

const ThemeToggle = dynamic(
  () => import("@/components/theme/theme-toggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => (
      <div className="h-9 w-[72px] rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))]" />
    ),
  },
);
const navItems = [
  {
    label: "Jobs",
    href: routes.jobs,
    match: { pathname: routes.jobs, matchPrefix: true },
  },
  {
    label: "Subscription",
    href: routes.pricing,
    match: { pathname: routes.pricing },
  },
  {
    label: "Success Stories",
    href: uc("success-stories-public"),
    match: { pathname: "/under-construction", source: "success-stories-public" },
  },
  {
    label: "Feedback",
    href: uc("feedback-public"),
    match: { pathname: "/under-construction", source: "feedback-public" },
  },
  {
    label: "For Employers",
    href: uc("for-employers-public"),
    match: { pathname: "/under-construction", source: "for-employers-public" },
  },
  {
    label: "About",
    href: uc("about-public"),
    match: { pathname: "/under-construction", source: "about-public" },
  },
  {
    label: "Contact",
    href: uc("contact-public"),
    match: { pathname: "/under-construction", source: "contact-public" },
  },
];

const liveTickerItems = [
  "Platform in active development",
  "Public release coming soon",
  "Verified jobs and subscription are live",
  "New modules rolling out in stages",
  "Privacy-first upgrades in progress",
];

function normalizePathname(path: string) {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
}

export function NENavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const normalizedPathname = normalizePathname(pathname);
  const searchParams = useSearchParams();

  const isActive = (item: (typeof navItems)[number]) => {
    const match = item.match;
    if (!match) return false;
    if (match.matchPrefix) {
      if (!normalizedPathname.startsWith(match.pathname)) return false;
    } else if (match.pathname && normalizedPathname !== match.pathname) {
      return false;
    }
    if (match.source) {
      const source = searchParams.get("source");
      if (source !== match.source) return false;
    }
    return true;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[hsl(var(--border))]/80 bg-[hsl(var(--background))]/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="ne-container flex h-16 items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-4 xl:gap-6">
          <Link href={routes.home} className="group inline-flex items-center gap-2.5">
            <span className="relative grid h-8 w-8 place-items-center rounded-[10px] bg-[hsl(var(--ink))] text-[hsl(var(--primary-foreground))] ring-1 ring-[hsl(var(--ink))]">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M5 18V6l9 12V6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="19" cy="7" r="2" fill="hsl(var(--accent))" />
              </svg>
            </span>
            <span className="flex items-baseline gap-1">
              <span className="text-[15px] font-semibold tracking-tight text-[hsl(var(--foreground))]">NEXTEDGE</span>
              <span className="hidden text-[13px] text-[hsl(var(--muted-foreground))] sm:inline ne-editorial">talent</span>
            </span>
          </Link>

          <nav className="hidden min-w-0 items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative whitespace-nowrap rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-colors",
                  isActive(item)
                    ? "bg-[hsl(var(--surface-elevated))] text-[hsl(var(--foreground))] ring-1 ring-[hsl(var(--accent))]/40 shadow-[var(--shadow-soft)] font-semibold after:absolute after:-bottom-1 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-[hsl(var(--accent))]"
                    : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden shrink-0 items-center gap-1 xl:flex">
          <ThemeToggle />
          <NEButton asChild variant="ghost" size="sm" className="px-2.5">
            <Link href="/under-construction?source=employer-login">Employer</Link>
          </NEButton>
          <NEButton asChild variant="outline" size="sm">
            <Link href="/under-construction?source=signin">Sign in</Link>
          </NEButton>
          <NEButton asChild size="sm" className="pr-1.5">
            <Link href="/under-construction?source=register">
              Join ₹99/mo
              <span className="ne-btn-chip grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--background))]">
                <ArrowUpRight className="ne-btn-arrow h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </Link>
          </NEButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] xl:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 xl:hidden",
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="ne-container border-t border-[hsl(var(--border))] bg-[hsl(var(--background))] py-5">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-xl border border-transparent px-3 py-3 text-[15px] font-medium transition-colors",
                  isActive(item)
                    ? "border-[hsl(var(--accent))]/40 bg-[hsl(var(--surface-elevated))] text-[hsl(var(--foreground))] shadow-[var(--shadow-soft)]"
                    : "text-[hsl(var(--foreground))] hover:border-[hsl(var(--border))] hover:bg-[hsl(var(--surface-elevated))]",
                )}
              >
                {item.label}
                <ChevronRight className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
              </Link>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] p-3">
            <span className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">Theme</span>
            <ThemeToggle />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <NEButton asChild variant="outline" className="rounded-xl">
              <Link href="/under-construction?source=employer-login" onClick={() => setOpen(false)}>
                Employer Login
              </Link>
            </NEButton>
            <NEButton asChild variant="outline" className="rounded-xl">
              <Link href="/under-construction?source=signin" onClick={() => setOpen(false)}>
                Candidate Login
              </Link>
            </NEButton>
          </div>

          <NEButton asChild className="mt-2 h-12 w-full rounded-xl">
            <Link href="/under-construction?source=register" onClick={() => setOpen(false)}>
              Join ₹99/month
              <ArrowUpRight className="ne-btn-arrow h-4 w-4" />
            </Link>
          </NEButton>
        </div>
      </div>
    </header>
  );
}

export function NEHeaderTicker() {
  return (
    <div className="sticky top-16 z-40 overflow-hidden border-b border-[hsl(var(--border))] bg-[linear-gradient(90deg,hsl(var(--surface))_0%,hsl(var(--surface-elevated))_100%)] py-1.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[hsl(var(--background))] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[hsl(var(--background))] to-transparent" />
      <div className="flex w-max items-center gap-10 whitespace-nowrap pl-6 pr-6 text-[11.5px] font-medium tracking-[0.08em] text-[hsl(var(--muted-foreground))] ne-animate-marquee">
        {[...liveTickerItems, ...liveTickerItems].map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-1.5 uppercase">
            <Sparkles className="h-3 w-3 text-[hsl(var(--accent))]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
