import {
  BadgeCheck,
  EyeOff,
  KeyRound,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";
import type { CSSProperties, ComponentType } from "react";

import { NECard } from "@/components/nextedge/primitives/ne-card";
import { NEContainer } from "@/components/nextedge/primitives/ne-section";

const trustItems = [
  {
    icon: KeyRound,
    title: "OTP-secured registration",
    text: "Candidate and employer onboarding uses verified OTP steps.",
  },
  {
    icon: BadgeCheck,
    title: "Admin-reviewed employers",
    text: "Roles go live only after profile and listing review.",
  },
  {
    icon: EyeOff,
    title: "Company hidden until shortlist",
    text: "Identity stays masked until employer shortlist decision.",
  },
  {
    icon: ShieldCheck,
    title: "Verified job previews",
    text: "Public cards show validated role details without exposing identity.",
  },
  {
    icon: LayoutGrid,
    title: "Role-protected dashboards",
    text: "Candidate, employer, and admin experiences remain isolated.",
  },
];

export function TrustStrip({ duration = "10s" }: { duration?: string }) {
  const marqueeStyles = `${__TRUST_STRIP_MARQUEE_STYLE}
  .ne-marquee-duration{--ne-marquee-duration:${duration};}`;

  return (
    // <NESection className="py-10">
      <NEContainer>
        {/* <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4 sm:p-5"> */}
          {/* <div aria-hidden className="absolute inset-0 ne-grid-bg opacity-40" /> */}

          <div className="relative hidden lg:flex items-center overflow-hidden p-10">
            <div className="flex-shrink-0 pr-6">
              <div className="text-[14px] text-[hsl(var(--muted-foreground))]">
                <span className="font-medium">Trust signals built into every interaction — by</span>
                <br/>
                <span className="italic ml-2"> design, not afterthought.</span>
              </div>
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="ne-marquee ne-marquee-duration flex items-center gap-3">
                {trustItems.map((item) => (
                  <TrustChip key={item.title} item={item} />
                ))}
                {trustItems.map((item) => (
                  <TrustChip key={item.title + "-dup"} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative grid gap-3 lg:hidden sm:grid-cols-2">
            {trustItems.map((item) => (
              <TrustTile key={item.title} item={item} />
            ))}
          </div>

        {/* </div> */}
        <style>{marqueeStyles}</style>
      </NEContainer>
    // </NESection>
  );
}

function TrustChip({
  item,
}: {
  item: { icon: ComponentType<{ className?: string }>; title: string; text: string };
}) {
  return (
    <div className="inline-flex min-w-0 items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] px-3 py-2">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[hsl(var(--brand))/0.12] text-[hsl(var(--brand))]">
        <item.icon className="h-3.5 w-3.5" />
      </span>
      <span className="truncate text-[12.5px] font-medium text-[hsl(var(--foreground))]">{item.title}</span>
    </div>
  );
}

// Marquee styles (server component-safe)
export const __TRUST_STRIP_MARQUEE_STYLE = `
  .ne-marquee{display:flex; gap:0.75rem; align-items:center; white-space:nowrap; will-change:transform; animation:ne-marquee var(--ne-marquee-duration,10s) linear infinite;}
  .ne-marquee > *{flex:0 0 auto}
  @keyframes ne-marquee{0%{transform:translateX(0%);}100%{transform:translateX(-50%);}}
`;

function TrustTile({
  item,
}: {
  item: { icon: ComponentType<{ className?: string }>; title: string; text: string };
}) {
  return (
    <NECard className="rounded-2xl bg-[hsl(var(--surface-elevated))] p-4">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-[hsl(var(--brand))/0.12] text-[hsl(var(--brand))]">
        <item.icon className="h-4 w-4" />
      </span>
      <p className="mt-3 text-[13.5px] font-semibold text-[hsl(var(--foreground))]">{item.title}</p>
      <p className="mt-1 text-[12px] leading-relaxed text-[hsl(var(--muted-foreground))]">{item.text}</p>
    </NECard>
  );
}
