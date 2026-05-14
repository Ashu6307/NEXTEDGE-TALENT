import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { NEBadge } from "@/components/nextedge/primitives/ne-badge";
import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NECard } from "@/components/nextedge/primitives/ne-card";
import { NEContainer, NESection } from "@/components/nextedge/primitives/ne-section";
import { routes } from "@/lib/constants/routes";
export function HomeHero() {
  return (
    <NESection tone="canvas" className="overflow-hidden ne-noise-overlay !py-0">
      <div aria-hidden className="absolute inset-0 ne-grid-bg ne-grid-fade opacity-60" />
      <div aria-hidden className="ne-spotlight -top-24 -left-24 h-[420px] w-[420px] bg-[hsl(var(--brand))/0.15] dark:bg-[hsl(var(--brand))/0.22]" />
      <div aria-hidden className="ne-spotlight -bottom-32 right-[-10%] h-[460px] w-[460px] bg-[hsl(var(--accent))/0.14] dark:bg-[hsl(var(--accent))/0.2]" />

      <NEContainer className="relative pt-14 pb-10 sm:pt-20 sm:pb-14 lg:pt-28 lg:pb-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="ne-reveal-up flex flex-wrap items-center gap-2">
              <span className="ne-kicker">NEXTEDGE Verified Hiring</span>
              <NEBadge variant="brand" className="normal-case tracking-normal">
                <Sparkles className="h-3 w-3" /> Shortlist-first reveal
              </NEBadge>
            </div>

            <h1 className="ne-reveal-up mt-6 max-w-[18ch] text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] text-[hsl(var(--foreground))] sm:text-[56px] lg:text-[68px]">
              Verified jobs.
              <span className="ne-editorial text-[hsl(var(--brand))]"> Protected</span> identity.
              <span className="ne-gradient-text"> Shortlist-first hiring.</span>
            </h1>

            <p className="ne-reveal-up mt-6 max-w-[60ch] text-[16px] leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-[17.5px]">
              Membership unlocks apply access, agreement preview, and tracking. It does not reveal company identity.
              Employer identity appears only after shortlist. Rejected candidates never see company name.
            </p>

            <div className="ne-reveal-up mt-8 flex flex-wrap items-center gap-3">
              <NEButton asChild size="lg" className="pl-5 pr-2">
                <Link href="/under-construction?source=candidate-register">
                  Join ₹99/month
                  <span className="ne-btn-chip grid h-9 w-9 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--background))]">
                    <ArrowUpRight className="ne-btn-arrow h-4 w-4" strokeWidth={2.5} />
                  </span>
                </Link>
              </NEButton>
              <NEButton asChild variant="outline" size="lg">
                <Link href={routes.jobs}>Browse Jobs</Link>
              </NEButton>
            </div>

            <div className="ne-reveal-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12.5px] text-[hsl(var(--muted-foreground))]">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--success))]" /> OTP-secured accounts</span>
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-3.5 w-3.5 text-[hsl(var(--brand))]" /> Admin-reviewed employers</span>
              <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Privacy-first workflow</span>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="lg:hidden">
              <NECard className="rounded-2xl border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--success))/0.14] px-2.5 py-1 text-[11px] font-semibold text-[hsl(var(--success))]">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Admin-approved employer flow
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[hsl(var(--muted-foreground))]">
                  Company identity stays hidden until shortlist. Membership unlocks apply access, tracking, and agreement preview.
                </p>
              </NECard>
            </div>
            <div className="hidden lg:block">
            <HeroVisual />
            </div>
          </div>
        </div>
      </NEContainer>
    </NESection>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[480px]">
      <NECard className="absolute inset-0 rounded-[28px] bg-[hsl(var(--surface))]">
        <div aria-hidden className="absolute inset-0 rounded-[28px] ne-grid-bg ne-grid-fade opacity-40" />
      </NECard>

      <NECard className="ne-animate-float absolute left-5 top-6 right-5 rounded-2xl bg-[hsl(var(--surface-elevated))] p-4 shadow-[var(--shadow-elevated)] sm:left-8 sm:right-8">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--ink))] text-[hsl(var(--primary-foreground))]">
            <EyeOff className="h-4.5 w-4.5" />
          </span>
          <div>
            <div className="flex items-center gap-2 text-[13.5px] font-semibold">
              Senior Product Designer
              <NEBadge variant="brand" className="px-2 py-0.5 text-[10px]">Hidden</NEBadge>
            </div>
            <p className="mt-0.5 text-[12px] text-[hsl(var(--muted-foreground))]">Company hidden · Series B Fintech</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[11.5px] text-[hsl(var(--muted-foreground))]">
          <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> Noida</span>
          <span className="inline-flex items-center gap-1"><Briefcase className="h-3 w-3" /> 5-8 yrs</span>
          <span>₹12-15 LPA</span>
        </div>
      </NECard>

      <div className="ne-animate-float absolute right-3 top-[176px] w-[230px] rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--ink))] p-3.5 text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-elevated)] sm:right-[-12px]">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[hsl(var(--primary-foreground))/0.6]">
          <span>Membership</span>
          <span className="rounded-full bg-[hsl(var(--accent))] px-1.5 py-0.5 text-[9.5px] font-semibold text-[hsl(var(--accent-foreground))]">Unlocked</span>
        </div>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-[12px] line-through opacity-55">₹199</span>
          <span className="text-[28px] font-semibold leading-none">₹99</span>
          <span className="pb-1 text-[12px] opacity-75">/month</span>
        </div>
        <div className="mt-2.5 grid gap-1 text-[11px]">
          <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-[hsl(var(--accent))]" /> Apply access</span>
          <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-[hsl(var(--accent))]" /> App tracking</span>
          <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-[hsl(var(--accent))]" /> Agreement preview</span>
        </div>
      </div>

      <NECard className="ne-animate-float absolute left-3 top-[320px] w-[286px] rounded-2xl p-3.5 sm:left-[-10px]">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
          <span>Application status</span>
          <span className="font-mono text-[10.5px]">NEX-JB-26-NO-T3Q6T</span>
        </div>
        <ol className="mt-3 space-y-2.5 text-[12.5px]">
          {[
            { label: "Applied", meta: "Resume sent" },
            { label: "Admin screened" },
            { label: "Forwarded to employer" },
            { label: "Shortlist -> Company revealed" },
          ].map((step, i) => (
            <li key={step.label} className="flex items-center gap-2.5">
              <span
                className={
                  `grid h-5 w-5 place-items-center rounded-full border text-[10px] font-semibold ${
                    i <= 1
                      ? "bg-[hsl(var(--success))/0.15] border-[hsl(var(--success))/0.3] text-[hsl(var(--success))]"
                      : i === 2
                      ? "bg-[#1B4EDA26] border-[hsl(var(--accent))/0.12] text-[#1B4EDA]"
                      : "bg-[hsl(var(--surface-elevated))] text-[hsl(var(--muted-foreground))]"
                  }`
                }
              >
                {i <= 1 ? <CheckCircle2 className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span className={i === 3 ? "text-[hsl(var(--muted-foreground))]" : "text-[hsl(var(--foreground))]"}>
                {step.label}
                {step.meta ? <span className="text-[hsl(var(--muted-foreground))]"> · {step.meta}</span> : null}
              </span>
            </li>
          ))}
        </ol>
      </NECard>

      <div className="ne-animate-float absolute right-4 bottom-[93px] inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1.5 text-[11.5px] font-medium shadow-sm">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-[hsl(var(--success))/0.15] text-[hsl(var(--success))]">
          <BadgeCheck className="h-3 w-3" />
        </span>
        Admin-approved employer
      </div>

      <div className="ne-animate-float absolute bottom-5 left-8 right-8 rounded-2xl border border-[hsl(var(--brand))/0.3] bg-[linear-gradient(135deg,hsl(var(--brand)/0.12),hsl(var(--accent)/0.08))] p-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[hsl(var(--brand))] text-[hsl(var(--brand-foreground))]">
            <Eye className="h-4 w-4" />
          </span>
          <div className="flex-1">
            <p className="text-[12.5px] font-semibold">Company revealed only after shortlist</p>
            <p className="text-[11px] text-[hsl(var(--muted-foreground))]">Interview details unlocked after shortlist</p>
          </div>
          <Building2 className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
        </div>
      </div>
    </div>
  );
}
