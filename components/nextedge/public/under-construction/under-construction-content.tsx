"use client";

import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { NEButton } from "@/components/nextedge/primitives/ne-button";

type UnderConstructionContentProps = {
  title: string;
  description?: string;
  sourceLabel?: string;
};

export function UnderConstructionContent({
  title,
  description,
  sourceLabel,
}: UnderConstructionContentProps) {
  return (
    <main className="ne-container relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center sm:py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-[hsl(var(--brand))] opacity-10 blur-3xl"></div>
        <div className="ne-pulse-delay absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-[hsl(var(--accent))] opacity-10 blur-3xl"></div>
      </div>

      <div className="w-full max-w-3xl rounded-3xl border border-[hsl(var(--border))] bg-[linear-gradient(140deg,hsl(var(--surface))/0.95,hsl(var(--surface-elevated))/0.92)] px-5 py-7 shadow-[var(--shadow-elevated)] backdrop-blur sm:px-8 sm:py-9">
        <div className="mx-auto mb-7 flex h-48 w-48 items-center justify-center rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))]/80 p-2 shadow-[var(--shadow-soft)] sm:h-56 sm:w-56">
          <DotLottieReact
            src="https://lottie.host/c30f9ef6-cbdc-420e-b145-98342717d223/PypLoJxFML.lottie"
            loop
            autoplay
            className="h-full w-full"
          />
        </div>

        <span className="inline-flex animate-pulse items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand))] sm:text-[11px]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[hsl(var(--brand))]"></span>
          Coming Soon
        </span>

        {sourceLabel ? (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[hsl(var(--muted-foreground))]">
            Module: {sourceLabel}
          </div>
        ) : null}

        <h1 className="mt-8 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-balance text-2xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-[15px]">
            {description}
          </p>
        )}

        <p className="mx-auto mt-2 max-w-2xl text-pretty text-[12.5px] text-[hsl(var(--muted-foreground))] sm:text-[13px]">
          Public rollout is currently staged. For immediate updates, use WhatsApp support or join the updates group below.
        </p>

        <div className="mx-auto mt-5 grid w-full max-w-xl gap-2 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))/0.62] p-3 sm:grid-cols-3">
          <StatusChip label="UI Polish" value="In Progress" />
          <StatusChip label="Security Review" value="In Progress" />
          <StatusChip label="Public Release" value="Staged" />
        </div>

        <div className="mt-8 flex w-full flex-col flex-wrap items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <NEButton asChild size="md" className="w-full sm:w-auto">
            <Link href="/">Back to Home</Link>
          </NEButton>
          <NEButton asChild variant="outline" size="md" className="w-full sm:w-auto">
            <a
              href="https://wa.me/918750268005?text=Hi, I'm interested in learning more about NEXTEDGE. Please share more details."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact via WhatsApp
            </a>
          </NEButton>
          <NEButton asChild variant="outline" size="md" className="w-full sm:w-auto">
            <a
              href="https://chat.whatsapp.com/DaKTdkskkSWAbypY8Iz1Vg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Updates Group
            </a>
          </NEButton>
        </div>
      </div>
      <style>{__UNDER_CONSTRUCTION_STYLE}</style>
    </main>
  );
}

const __UNDER_CONSTRUCTION_STYLE = `
  .ne-pulse-delay{animation-delay:1s;}
`;

function StatusChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-h-[66px] flex-col items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))/0.7] px-3 py-2 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))]">{label}</p>
      <p className="mt-0.5 text-[12px] font-semibold text-[hsl(var(--foreground))]">{value}</p>
    </div>
  );
}
