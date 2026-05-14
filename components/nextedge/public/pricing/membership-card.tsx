import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import { NEBadge } from "@/components/nextedge/primitives/ne-badge";
import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NECard } from "@/components/nextedge/primitives/ne-card";
import { routes } from "@/lib/constants/routes";
import { subscriptionPayload } from "@/lib/constants/subscription";
import { MEMBERSHIP_UNLOCKS } from "@/lib/constants/content-freeze";
import { SubscriptionQr } from "./subscription-qr";

export function MembershipCard() {
  return (
    <NECard className="relative overflow-hidden rounded-3xl border-[hsl(var(--brand))/0.3] bg-[linear-gradient(170deg,hsl(var(--membership))_0%,hsl(var(--membership))_58%,hsl(var(--brand))_130%)] p-6 text-white sm:p-7">
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[hsl(var(--accent))/0.24] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-8 h-64 w-64 rounded-full bg-[hsl(var(--brand))/0.2] blur-3xl"
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <NEBadge className="border-[hsl(var(--accent))/0.45] bg-[hsl(var(--membership))] text-[hsl(var(--accent))] shadow-sm">
            Launch offer
          </NEBadge>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/26 bg-white/8 px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] text-white/82">
            <Sparkles className="h-3 w-3" /> Monthly
          </span>
        </div>

        <p className="mt-5 text-[11px] uppercase tracking-[0.12em] text-white/70">
          Candidate membership
        </p>

        <div className="mt-2 flex items-end gap-3">
          <span className="text-[20px] font-medium text-white/55 line-through">₹199</span>
          <span className="text-[62px] font-semibold leading-none tracking-[-0.04em]">₹99</span>
          <span className="mb-2 text-[14px] text-white/82">/month</span>
        </div>

        <p className="mt-2 text-[13px] text-white/80">
          Monthly only. No yearly pricing.
        </p>

        <div className="mt-6 grid gap-4 rounded-2xl border border-white/24 bg-white/10 p-4 sm:grid-cols-[1fr_auto]">
          <div className="grid gap-2">
            {MEMBERSHIP_UNLOCKS.slice(0, 6).map((item) => (
              <div key={item} className="inline-flex items-center gap-2 text-[12.5px]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[hsl(var(--accent))/0.24] text-[hsl(var(--accent-foreground))]">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </div>
            ))}
          </div>
          <div className="w-[190px]">
            <SubscriptionQr value={subscriptionPayload} size={170} />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
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
            <Link href={routes.jobs}>Browse Jobs</Link>
          </NEButton>
        </div>
      </div>
    </NECard>
  );
}


