import type { Metadata } from "next";

import dynamic from "next/dynamic";
import Link from "next/link";

import { HomeHero } from "@/components/nextedge/public/home/home-hero";
import { HiddenCompanyPolicy } from "@/components/nextedge/public/home/hidden-company-policy";
import { MembershipOffer } from "@/components/nextedge/public/home/membership-offer";
import { TrustStrip } from "@/components/nextedge/public/home/trust-strip";
import { SuccessStoriesPreview } from "@/components/nextedge/public/home/success-stories-preview";
import { FeedbackPreview } from "@/components/nextedge/public/home/feedback-preview";
import { TrustPartnerStrip } from "@/components/nextedge/public/home/trust-partner-strip";
import { NEContainer, NESection } from "@/components/nextedge/primitives/ne-section";
import { routes } from "@/lib/constants/routes";
import { SITE_KEYWORDS, SITE_NAME } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore verified roles with shortlist-first company reveal. Membership unlocks apply access without exposing company identity before shortlist.",
  keywords: [...SITE_KEYWORDS, "home", "apply access", "shortlist reveal"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} · Home`,
    description:
      "Verified hiring with membership-led apply access and strict company privacy until shortlist.",
    url: "/",
  },
};

const JobsPreview = dynamic(
  () => import("@/components/nextedge/public/home/jobs-preview").then((m) => m.JobsPreview),
  {
    loading: () => <section className="ne-section border-b border-[hsl(var(--border))] bg-[hsl(var(--canvas))]" />,
  },
);

export default function Home() {
  return (
    <main>
      <HomeHero />
      <TrustStrip />
      <HiddenCompanyPolicy />
      <JobsPreview />
      <MembershipOffer />
      <div className="hidden md:block">
        <SuccessStoriesPreview />
      </div>
      <div className="hidden md:block">
        <FeedbackPreview />
      </div>
      <div className="hidden md:block">
        <TrustPartnerStrip />
      </div>
      <MobileQuickLinks />
    </main>
  );
}

function MobileQuickLinks() {
  return (
    <NESection tone="canvas" className="md:hidden">
      <NEContainer>
        <div className="grid gap-3">
          <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4">
            <p className="text-sm font-semibold text-[hsl(var(--foreground))]">Success Stories</p>
            <p className="mt-1 text-[12.5px] text-[hsl(var(--muted-foreground))]">
              Verified candidate outcomes are rolling out in stages.
            </p>
            <Link
              href="/under-construction?source=success-stories-public"
              className="mt-3 inline-flex text-[12.5px] font-semibold text-[hsl(var(--brand))]"
            >
              See module status
            </Link>
          </div>
          <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4">
            <p className="text-sm font-semibold text-[hsl(var(--foreground))]">Candidate Feedback</p>
            <p className="mt-1 text-[12.5px] text-[hsl(var(--muted-foreground))]">
              Moderated feedback preview is available in the staged release.
            </p>
            <Link
              href="/under-construction?source=feedback-public"
              className="mt-3 inline-flex text-[12.5px] font-semibold text-[hsl(var(--brand))]"
            >
              Open feedback module
            </Link>
          </div>
          <Link
            href={routes.jobs}
            className="inline-flex justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-2.5 text-[13px] font-semibold text-[hsl(var(--foreground))]"
          >
            Browse verified jobs
          </Link>
        </div>
      </NEContainer>
    </NESection>
  );
}
