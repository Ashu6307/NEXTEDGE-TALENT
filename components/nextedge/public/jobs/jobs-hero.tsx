import Link from "next/link";
import { ArrowUpRight, EyeOff, FileText, ShieldCheck, UserCheck } from "lucide-react";
import type { ComponentType } from "react";

import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NEContainer, NESection } from "@/components/nextedge/primitives/ne-section";
import { routes } from "@/lib/constants/routes";

export function JobsHero() {
  return (
    <NESection tone="canvas" className="relative overflow-hidden border-b border-[hsl(var(--border))] !py-0">
      <div aria-hidden className="absolute inset-0 ne-grid-bg opacity-45" />
      <div
        aria-hidden
        className="ne-spotlight -top-28 left-[5%] h-[360px] w-[360px] bg-[hsl(var(--brand))/0.15] dark:bg-[hsl(var(--brand))/0.22]"
      />
      <div
        aria-hidden
        className="ne-spotlight -bottom-28 right-[3%] h-[360px] w-[360px] bg-[hsl(var(--accent))/0.12] dark:bg-[hsl(var(--accent))/0.2]"
      />

      <NEContainer className="relative pt-10 pb-5 sm:pt-12 sm:pb-6 lg:pt-14 lg:pb-8">
        <span className="ne-kicker">Verified job previews</span>

        <h1 className="mt-5 max-w-[20ch] text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-[hsl(var(--foreground))] sm:text-[52px]">
          Explore roles without exposing <span className="ne-editorial text-[hsl(var(--brand))]">company identity</span>.
        </h1>

        <p className="mt-5 max-w-[70ch] text-[15.5px] leading-relaxed text-[hsl(var(--muted-foreground))]">
          Public users can preview role, salary, location, skills, work mode, and fee disclosure. Company identity remains hidden until shortlist.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <NEButton asChild size="lg">
            <Link href="/under-construction?source=candidate-register">
              Join ₹99/month
              <ArrowUpRight className="ne-btn-arrow h-4 w-4" />
            </Link>
            </NEButton>
          <NEButton asChild variant="outline" size="lg">
            <Link href={routes.pricing}>View Pricing</Link>
          </NEButton>
        </div>

        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <TrustChip icon={EyeOff} text="Company hidden until shortlist" />
          <TrustChip icon={ShieldCheck} text="OTP-secured candidate account" />
          <TrustChip icon={FileText} text="Fee disclosure before apply" />
          <TrustChip icon={UserCheck} text="Admin-reviewed employers" />
        </div>
      </NEContainer>
    </NESection>
  );
}

function TrustChip({
  icon: Icon,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3.5 py-2 text-[12.5px] text-[hsl(var(--foreground))]">
      <Icon className="h-3.5 w-3.5 text-[hsl(var(--brand))]" />
      {text}
    </div>
  );
}
