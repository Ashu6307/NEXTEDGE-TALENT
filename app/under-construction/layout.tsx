import type { Metadata } from "next";

import { SITE_KEYWORDS, SITE_NAME } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Coming Soon",
  description:
    "Selected modules are in active development and will roll out in staged public release with production-grade UX and policy safeguards.",
  keywords: [...SITE_KEYWORDS, "coming soon", "under development"],
  alternates: {
    canonical: "/under-construction",
  },
  openGraph: {
    title: `${SITE_NAME} · Coming Soon`,
    description:
      "Module rollout in progress with quality, compliance, and privacy-first release checks.",
    url: "/under-construction",
  },
};

export default function UnderConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

