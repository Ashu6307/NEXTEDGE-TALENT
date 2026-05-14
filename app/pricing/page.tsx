import type { Metadata } from "next";

import { PricingPage } from "@/components/nextedge/public/pricing/pricing-page";
import { SITE_KEYWORDS, SITE_NAME } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Subscription",
  description:
    "Membership pricing with clear unlock boundaries: apply access opens at ₹99/month, company identity stays hidden until shortlist.",
  keywords: [...SITE_KEYWORDS, "subscription", "pricing", "membership"],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: `${SITE_NAME} · Subscription`,
    description:
      "Transparent membership pricing with strict privacy policy and shortlist-first company reveal.",
    url: "/pricing",
  },
};

export default function PricingRoutePage() {
  return <PricingPage />;
}
