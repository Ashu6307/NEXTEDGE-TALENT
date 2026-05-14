import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Lock, ShieldCheck, Sparkles } from "lucide-react";

import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NECard } from "@/components/nextedge/primitives/ne-card";
import { NEContainer, NESection } from "@/components/nextedge/primitives/ne-section";
import { routes } from "@/lib/constants/routes";

const trustChips = [
  { label: "Company hidden until shortlist", icon: Lock },
  { label: "OTP-secured account", icon: ShieldCheck },
  { label: "Fee disclosure before apply", icon: BadgeCheck },
  { label: "No job guarantee claims", icon: Sparkles },
];

export function PricingHero() {
  return (
    <NESection tone="canvas" className="overflow-hidden ne-noise-overlay !py-0">
      <div aria-hidden className="absolute inset-0 ne-grid-bg ne-grid-fade opacity-60" />
      <div
        aria-hidden
        className="ne-spotlight -top-20 -left-20 h-[380px] w-[380px] bg-[hsl(var(--brand))/0.14] dark:bg-[hsl(var(--brand))/0.22]"
      />
      <div
        aria-hidden
        className="ne-spotlight -bottom-24 right-[-8%] h-[420px] w-[420px] bg-[hsl(var(--accent))/0.15] dark:bg-[hsl(var(--accent))/0.2]"
      />

      <NEContainer className="relative pt-14 pb-12 sm:pt-20 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <span className="ne-kicker">Candidate membership</span>
            <h1 className="mt-5 max-w-[18ch] text-[40px] font-semibold leading-[1.03] tracking-[-0.035em] sm:text-[52px] lg:text-[62px]">
              Unlock apply access without compromising company privacy.
            </h1>
            <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-[hsl(var(--muted-foreground))]">
              Membership helps you apply, track applications, preview agreement terms, and receive support.
              Company identity remains hidden until shortlist.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
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

            <div className="mt-8 flex flex-wrap gap-2.5">
              {trustChips.map((chip) => (
                <div
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1.5 text-[12px] text-[hsl(var(--muted-foreground))]"
                >
                  <chip.icon className="h-3.5 w-3.5 text-[hsl(var(--brand))]" />
                  {chip.label}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <NECard className="rounded-[28px] border-[hsl(var(--brand))/0.24] bg-[linear-gradient(165deg,hsl(var(--surface))_0%,hsl(var(--surface-elevated))_100%)] p-6 sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))]">
                Privacy-first membership policy
              </p>
              <h2 className="mt-4 text-[26px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[30px]">
                Apply access opens first. Company reveal stays controlled.
              </h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[hsl(var(--muted-foreground))]">
                Rejected candidates never see company identity. Selection outcomes never use guarantee claims.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-[12.5px] text-[hsl(var(--muted-foreground))]">
                  Membership unlocks apply access, agreement preview, and tracking.
                </div>
                <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-[12.5px] text-[hsl(var(--muted-foreground))]">
                  Candidate fee disclosure appears before each application.
                </div>
              </div>
            </NECard>
          </div>
        </div>
      </NEContainer>
    </NESection>
  );
}

