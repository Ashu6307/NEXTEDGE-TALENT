import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";

import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NEContainer, NESection } from "@/components/nextedge/primitives/ne-section";
import { routes } from "@/lib/constants/routes";
import { DoesNotUnlockPanel } from "./does-not-unlock-panel";
import { MembershipCard } from "./membership-card";
import { PricingHero } from "./pricing-hero";
import { UnlocksPanel } from "./unlocks-panel";

export function PricingPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <main>
        <PricingHero />

        <NESection tone="canvas" className="ne-noise-overlay">
          <NEContainer className="grid gap-4 py-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <MembershipCard />
            </div>
            <div className="space-y-4 lg:col-span-7">
              <UnlocksPanel />
              <DoesNotUnlockPanel />
            </div>
          </NEContainer>
        </NESection>
        <NESection tone="ink" className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 ne-grid-bg opacity-[0.1]" />
          <div
            aria-hidden
            className="absolute -top-24 left-[12%] h-64 w-64 rounded-full bg-[hsl(var(--brand))/0.28] blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 right-[6%] h-64 w-64 rounded-full bg-[hsl(var(--accent))/0.24] blur-3xl"
          />

          <NEContainer className="relative py-16 sm:py-20">
            <div className="grid items-center gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="max-w-[20ch] text-[36px] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-[48px]">
                  Start with protected apply access.
                  <span className="block ne-editorial text-[hsl(var(--accent))]">Company identity follows shortlist.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[hsl(var(--primary-foreground))/0.74]">
                  Join membership to apply confidently while privacy boundaries remain enforced for candidates and employers.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--primary-foreground))/0.22] bg-[hsl(var(--primary-foreground))/0.05] px-3 py-1.5 text-[12px] text-[hsl(var(--primary-foreground))/0.82]">
                  <Lock className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
                  Membership unlocks apply access, not company identity.
                </div>
              </div>

              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <NEButton asChild variant="secondary" size="lg">
                  <Link href="/under-construction?source=candidate-register">
                    Join ₹99/month
                    <ArrowUpRight className="ne-btn-arrow h-4 w-4" />
                  </Link>
                </NEButton>
                <NEButton
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[hsl(var(--cta-contrast-border))] bg-[hsl(var(--cta-contrast-bg))] text-[hsl(var(--cta-contrast-text))] hover:border-[hsl(var(--cta-contrast-hover-bg))] hover:bg-[hsl(var(--cta-contrast-hover-bg))] hover:text-[hsl(var(--cta-contrast-hover-text))]"
                >
                  <Link href={routes.jobs}>Browse Jobs</Link>
                </NEButton>
              </div>
            </div>
          </NEContainer>
        </NESection>
      </main>
    </div>
  );
}


