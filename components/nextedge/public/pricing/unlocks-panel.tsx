import { CheckCircle2 } from "lucide-react";

import { NECard } from "@/components/nextedge/primitives/ne-card";

const unlocks = [
  "Apply access",
  "Agreement preview",
  "Application tracking",
  "Personalized jobs",
  "Interview updates",
  "Candidate support",
  "Agreement history",
  "Renewal reminders",
];

export function UnlocksPanel() {
  return (
    <NECard className="rounded-3xl p-5 sm:p-6">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))]">
        Membership unlocks
      </p>
      <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.02em]">What you gain with membership</h3>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {unlocks.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] px-3 py-2 text-[13px] text-[hsl(var(--foreground))]"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[hsl(var(--success))]" />
            {item}
          </div>
        ))}
      </div>
    </NECard>
  );
}
