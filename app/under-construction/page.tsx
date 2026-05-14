import { Suspense } from "react";

import { UnderConstructionClientPage } from "./under-construction-client";

export const dynamic = "force-static";

export default function UnderConstructionPage() {
  return (
    <Suspense fallback={<div className="min-h-[55vh] border-b border-[hsl(var(--border))]" />}>
      <UnderConstructionClientPage />
    </Suspense>
  );
}

