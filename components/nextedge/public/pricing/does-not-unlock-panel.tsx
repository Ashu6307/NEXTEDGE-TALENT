import { Lock } from "lucide-react";

import { NECard } from "@/components/nextedge/primitives/ne-card";

const doesNotUnlock = [
  "Company name before shortlist",
  "HR contact",
  "Exact company address",
  "Job guarantee",
  "Selection guarantee",
  "Service charge exemption",
];

export function DoesNotUnlockPanel() {
  return (
    <NECard className="rounded-3xl border-[hsl(var(--warning))/0.35] bg-[linear-gradient(150deg,hsl(var(--surface))_0%,hsl(var(--surface-elevated))_100%)] p-5 sm:p-6">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))]">
        Membership does not unlock
      </p>
      <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.02em]">Policy boundaries stay strict</h3>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {doesNotUnlock.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-[13px] text-[hsl(var(--muted-foreground))]"
          >
            <Lock className="h-4 w-4 shrink-0 text-[hsl(var(--warning))]" />
            {item}
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-[hsl(var(--warning))/0.28] bg-[hsl(var(--warning))/0.09] px-4 py-3 text-[13.5px] font-semibold text-[hsl(var(--foreground))]">
        Membership unlocks apply access, not company identity.
      </div>
    </NECard>
  );
}
