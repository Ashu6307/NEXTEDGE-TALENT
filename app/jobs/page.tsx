import type { Metadata } from "next";

import { JobsPage } from "@/components/nextedge/public/jobs/jobs-page";
import { SITE_KEYWORDS, SITE_NAME } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Browse verified public job listings with salary, location, and skills. Company identity remains hidden until employer shortlist.",
  keywords: [...SITE_KEYWORDS, "jobs", "verified jobs", "recruitment"],
  alternates: {
    canonical: "/jobs",
  },
  openGraph: {
    title: `${SITE_NAME} · Jobs`,
    description:
      "Public roles with transparent preview fields and privacy-first company reveal policy.",
    url: "/jobs",
  },
};

export default function JobsRoutePage() {
  return <JobsPage />;
}
