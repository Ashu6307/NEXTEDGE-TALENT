import Link from "next/link";
import { ArrowUpRight, SearchX } from "lucide-react";

import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NECard } from "@/components/nextedge/primitives/ne-card";

export function JobsEmptyState({ onClearFilters }: { onClearFilters: () => void }) {
  return (
    <NECard className="rounded-2xl border-dashed p-8 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--brand))/0.14] text-[hsl(var(--brand))]">
        <SearchX className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-[20px] font-semibold text-[hsl(var(--foreground))]">
        No matching verified previews found.
      </h3>
      <p className="mt-2 text-[14px] text-[hsl(var(--muted-foreground))]">
        Adjust your filters or unlock membership to access broader opportunities.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <NEButton type="button" variant="outline" onClick={onClearFilters}>
          Clear filters
        </NEButton>
        <NEButton asChild>
          <Link href="/under-construction?source=candidate-register">
            Join ₹99/month
            <ArrowUpRight className="ne-btn-arrow h-4 w-4" />
          </Link>
        </NEButton>
      </div>
    </NECard>
  );
}
