import { ArrowRight, Eye, EyeOff, Lock, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

import { NEBadge } from "@/components/nextedge/primitives/ne-badge";
import { NECard } from "@/components/nextedge/primitives/ne-card";
import { NEContainer, NESection, NESectionHeading } from "@/components/nextedge/primitives/ne-section";

const compareRows = [
  {
    label: "Company name before shortlist",
    normalPortal: "Often visible",
    nextedge: "Always hidden",
  },
  {
    label: "HR contact before shortlist",
    normalPortal: "Sometimes visible",
    nextedge: "Hidden",
  },
  {
    label: "Exact office address",
    normalPortal: "May appear early",
    nextedge: "Hidden",
  },
  {
    label: "Rejected candidate identity view",
    normalPortal: "Can remain exposed",
    nextedge: "Never revealed",
  },
];

export function HiddenCompanyPolicy() {
  return (
    <NESection tone="canvas" className="ne-noise-overlay">
      <NEContainer className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <NESectionHeading
            kicker="Privacy Differentiator"
            title={
              <>
                Company identity stays <span className="ne-editorial text-[hsl(var(--brand))]">hidden</span> until shortlist.
              </>
            }
            description="Membership unlocks apply access only. Company identity, HR contact, and exact address remain hidden unless the employer shortlists the candidate."
          />

          <div className="mt-8 grid gap-3">
            <PolicyNote ok={false} text="Membership does not reveal company name" />
            <PolicyNote ok text="Company reveals only after shortlist" />
            <PolicyNote ok={false} text="Rejected candidates never see company identity" />
            <PolicyNote ok text="Protects both candidate and employer privacy" />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <PolicyStage
              title="Before shortlist"
              icon={<EyeOff className="h-4 w-4" />}
              badge="Locked"
              rows={[
                ["Company", "Hidden"],
                ["HR Contact", "Hidden"],
                ["Exact Address", "Hidden"],
              ]}
            />

            <div className="hidden sm:block">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] shadow-sm">
                <ArrowRight className="h-4 w-4 text-[hsl(var(--brand))]" />
              </span>
            </div>

            <PolicyStage
              title="After shortlist"
              icon={<Eye className="h-4 w-4" />}
              badge="Unlocked"
              highlighted
              rows={[
                ["Company", "Revealed in dashboard"],
                ["HR Contact", "Shared post-shortlist"],
                ["Interview", "Scheduling enabled"],
              ]}
            />
          </div>

          <NECard className="overflow-hidden rounded-2xl">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-[hsl(var(--surface-elevated))] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))]">
              <span>Policy Check</span>
              <span>Normal Portals</span>
              <span>NEXTEDGE</span>
            </div>

            <div className="divide-y divide-[hsl(var(--border))]">
              {compareRows.map((row) => (
                <div key={row.label} className="grid grid-cols-[1.2fr_1fr_1fr] gap-3 px-4 py-3 text-[12.5px]">
                  <span className="text-[hsl(var(--foreground))]">{row.label}</span>
                  <span className="text-[hsl(var(--muted-foreground))]">{row.normalPortal}</span>
                  <span className="font-medium text-[hsl(var(--brand))]">{row.nextedge}</span>
                </div>
              ))}
            </div>
          </NECard>

          <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1.5 text-[12px] text-[hsl(var(--muted-foreground))]">
            <Lock className="h-3.5 w-3.5 text-[hsl(var(--warning))]" />
            Company hidden until shortlist policy is enforced platform-wide.
          </div>
        </div>
      </NEContainer>
    </NESection>
  );
}

function PolicyNote({ ok, text }: { ok: boolean; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3.5 py-3">
      <span
        className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ${
          ok
            ? "bg-[hsl(var(--success))/0.15] text-[hsl(var(--success))]"
            : "bg-[hsl(var(--warning))/0.16] text-[hsl(var(--warning))]"
        }`}
      >
        {ok ? <ShieldCheck className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5" />}
      </span>
      <span className="text-[13.5px] text-[hsl(var(--foreground))]">{text}</span>
    </div>
  );
}

function PolicyStage({
  title,
  icon,
  badge,
  rows,
  highlighted,
}: {
  title: string;
  icon: ReactNode;
  badge: string;
  rows: [string, string][];
  highlighted?: boolean;
}) {
  return (
    <NECard
      className={`rounded-2xl p-5 ${
        highlighted
          ? "border-[hsl(var(--brand))/0.35] bg-[linear-gradient(140deg,hsl(var(--brand)/0.09),hsl(var(--accent)/0.06))]"
          : ""
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <NEBadge variant={highlighted ? "success" : "default"} className="normal-case tracking-normal">
          {icon} {title}
        </NEBadge>
        <span className="font-mono text-[10.5px] text-[hsl(var(--muted-foreground))]">{badge}</span>
      </div>

      <div className="grid gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] p-3">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between text-[12.5px]">
            <span className="text-[hsl(var(--muted-foreground))]">{k}</span>
            <span className="font-medium text-[hsl(var(--foreground))]">{v}</span>
          </div>
        ))}
      </div>
    </NECard>
  );
}
