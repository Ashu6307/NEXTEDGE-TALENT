import Link from "next/link";
import { ArrowUpRight, Check, Lock, X } from "lucide-react";

import { NEBadge } from "@/components/nextedge/primitives/ne-badge";
import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NECard } from "@/components/nextedge/primitives/ne-card";
import {
  NEContainer,
  NESection,
  NESectionHeading,
} from "@/components/nextedge/primitives/ne-section";
import { routes } from "@/lib/constants/routes";
import { subscriptionPayload } from "@/lib/constants/subscription";
import {
  MEMBERSHIP_DOES_NOT_UNLOCK,
  MEMBERSHIP_UNLOCKS,
  PRIVACY_RULE_LINE,
  REJECTED_PRIVACY_LINE,
} from "@/lib/constants/content-freeze";
import { SubscriptionQr } from "@/components/nextedge/public/pricing/subscription-qr";

export function MembershipOffer() {
  return (
    <NESection tone="canvas" className="ne-noise-overlay">
      <NEContainer className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <NESectionHeading
            kicker="Candidate Membership"
            title={
              <>
                Membership that protects privacy while unlocking{" "}
                <span className="ne-editorial text-[hsl(var(--brand))]">real apply access</span>.
              </>
            }
            description={
              <>
                {PRIVACY_RULE_LINE}
              </>
            }
          />

          <div className="mt-7 inline-flex items-start gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3.5 py-2 text-[12px] text-[hsl(var(--muted-foreground))]">
            <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(var(--warning))]" />
            {REJECTED_PRIVACY_LINE}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <FeatureGroup title="Membership unlocks" items={MEMBERSHIP_UNLOCKS} good />
            <FeatureGroup title="Membership does NOT unlock" items={MEMBERSHIP_DOES_NOT_UNLOCK} />
          </div>
        </div>

        <div className="lg:col-span-6 lg:pt-28">
          <NECard className="relative overflow-hidden rounded-3xl border-[hsl(var(--brand))/0.35] bg-[linear-gradient(165deg,hsl(var(--membership))_0%,hsl(var(--membership))_58%,hsl(var(--brand))_120%)] p-6 text-white sm:p-8">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[hsl(var(--accent))/0.28] blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-28 -left-10 h-72 w-72 rounded-full bg-[hsl(var(--brand))/0.22] blur-3xl"
            />

            <div className="relative">
              <NEBadge className="border-[hsl(var(--accent))/0.45] bg-[hsl(var(--membership))] text-[hsl(var(--accent))] shadow-sm">
                Launch offer
              </NEBadge>

              <p className="mt-3 text-[15px] uppercase tracking-[0.1em] text-white/72">
                Membership pricing
              </p>

              <div className="mt-1 flex flex-wrap items-end justify-between gap-4">
                <div className="flex items-end gap-3">
                  <span className="text-[20px] font-medium text-white/55 line-through">
                    ₹199
                  </span>
                  <span className="text-[64px] font-semibold leading-none tracking-[-0.04em]">₹99</span>
                  <span className="mb-2 text-[14px] text-white/82">/month</span>
                </div>
                <div className="w-[110px] shrink-0">
                  <SubscriptionQr value={subscriptionPayload} size={96} />
                </div>
              </div>

              <p className="mt-2 text-[13.5px] text-white/80">
                Monthly only. No yearly bundle. Cancel anytime as per terms.
              </p>

              <div className="mt-7 grid gap-2 rounded-2xl border border-white/24 bg-white/10 p-4">
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/72">
                  Included highlights
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {MEMBERSHIP_UNLOCKS.slice(0, 6).map((item) => (
                    <div key={item} className="inline-flex items-center gap-2 text-[12.5px]">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[hsl(var(--accent))/0.24] text-[hsl(var(--accent-foreground))]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <NEButton asChild variant="secondary" size="md" className="font-semibold">
                  <Link href="/under-construction?source=candidate-register">
                    Join ₹99/month
                    <ArrowUpRight className="ne-btn-arrow h-4 w-4" />
                  </Link>
                </NEButton>
                <NEButton
                  asChild
                  variant="outline"
                  size="md"
                  className="border-[hsl(var(--cta-contrast-border))] bg-[hsl(var(--cta-contrast-bg))] text-[hsl(var(--cta-contrast-text))] hover:border-[hsl(var(--cta-contrast-hover-bg))] hover:bg-[hsl(var(--cta-contrast-hover-bg))] hover:text-[hsl(var(--cta-contrast-hover-text))]"
                >
                  <Link href={routes.pricing}>View Pricing</Link>
                </NEButton>
              </div>
            </div>
          </NECard>
        </div>
      </NEContainer>
    </NESection>
  );
}

function FeatureGroup({
  title,
  items,
  good = false,
}: {
  title: string;
  items: readonly string[];
  good?: boolean;
}) {
  return (
    <NECard className="rounded-2xl p-4">
      <p className="text-[11.5px] uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))]">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="inline-flex w-full items-start gap-2 text-[13px] text-[hsl(var(--foreground))]">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                good
                  ? "bg-[hsl(var(--success))/0.14] text-[hsl(var(--success))]"
                  : "bg-[hsl(var(--warning))/0.14] text-[hsl(var(--warning))]"
              }`}
            >
              {good ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </NECard>
  );
}

