"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { UnderConstructionContent } from "@/components/nextedge/public/under-construction/under-construction-content";
import { LEGAL_PLACEHOLDER_LINE } from "@/lib/constants/content-freeze";

const pageConfig: Record<
  string,
  {
    title: string;
    description: string;
    sourceLabel: string;
  }
> = {
  "candidate-register": {
    title: "Candidate Registration Under Development",
    description:
      "We are refining OTP-first candidate onboarding with stronger validation and production-grade privacy controls. Public registration will open shortly after final QA.",
    sourceLabel: "Authentication",
  },
  signin: {
    title: "Sign-in Flow Under Development",
    description:
      "We are finalizing role-based sign-in, secure session handling, and account recovery checkpoints for a stable public release.",
    sourceLabel: "Authentication",
  },
  register: {
    title: "Registration Flow Under Development",
    description:
      "We are preparing a guided registration journey with OTP verification, consent checkpoints, and cleaner onboarding states.",
    sourceLabel: "Authentication",
  },
  "employer-login": {
    title: "Employer Access Under Development",
    description:
      "Employer workspace access, job submission flow, and approval pipeline controls are in final integration and compliance review.",
    sourceLabel: "Authentication",
  },
  "jobs-public": {
    title: "Jobs Module Under Development",
    description:
      "Public jobs listing is being finalized with improved filters, search relevance, and production-grade performance checks.",
    sourceLabel: "Public Jobs",
  },
  "pricing-public": {
    title: "Pricing Module Under Development",
    description:
      "Membership pricing experience is being refined for clearer disclosures, payment guidance, and final policy validation.",
    sourceLabel: "Public Pricing",
  },
  "success-stories-public": {
    title: "Success Stories Under Development",
    description:
      "Candidate outcome stories are under structured review for consistency, moderation quality, and publication standards.",
    sourceLabel: "Public Stories",
  },
  "feedback-public": {
    title: "Feedback Module Under Development",
    description:
      "Verified feedback publishing flow is being hardened with moderation checkpoints and stronger content quality controls.",
    sourceLabel: "Public Feedback",
  },
  "for-employers-public": {
    title: "For Employers Module Under Development",
    description:
      "Employer onboarding and job submission journey are in active development with admin-governed publishing safeguards.",
    sourceLabel: "Employer Experience",
  },
  "about-public": {
    title: "About Section Under Development",
    description:
      "Company profile and platform narrative are being updated with trust, compliance, and transparency-focused messaging.",
    sourceLabel: "Company Content",
  },
  "contact-public": {
    title: "Contact Section Under Development",
    description:
      "Support and contact channels are being consolidated for faster response workflows and verified communication paths.",
    sourceLabel: "Support Access",
  },
  "system-check": {
    title: "System Check Module Under Development",
    description:
      "Diagnostics and public system-status tools are currently being validated for reliability and support readiness.",
    sourceLabel: "Platform Operations",
  },
  "legal-terms": {
    title: "Legal Terms Under Development",
    description: LEGAL_PLACEHOLDER_LINE,
    sourceLabel: "Legal Content",
  },
  "legal-privacy": {
    title: "Privacy Policy Under Development",
    description: LEGAL_PLACEHOLDER_LINE,
    sourceLabel: "Legal Content",
  },
  "legal-refund": {
    title: "Refund Policy Under Development",
    description: LEGAL_PLACEHOLDER_LINE,
    sourceLabel: "Legal Content",
  },
  "legal-disclaimer": {
    title: "Disclaimer Section Under Development",
    description: LEGAL_PLACEHOLDER_LINE,
    sourceLabel: "Legal Content",
  },
  "legal-candidate-agreement": {
    title: "Candidate Agreement Under Development",
    description: LEGAL_PLACEHOLDER_LINE,
    sourceLabel: "Legal Content",
  },
  "legal-employer-terms": {
    title: "Employer Terms Under Development",
    description: LEGAL_PLACEHOLDER_LINE,
    sourceLabel: "Legal Content",
  },
};

const fallbackConfig = {
  title: "Coming Soon",
  description:
    "This module is in active development. We are shipping a production-ready experience with stronger reliability, secure access controls, and polished workflows.",
  sourceLabel: "Platform Update",
};

export function UnderConstructionClientPage() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  const config = useMemo(() => {
    const sourceKey = typeof source === "string" && source.length > 0 ? source : undefined;
    return sourceKey && sourceKey in pageConfig
      ? pageConfig[sourceKey as keyof typeof pageConfig]
      : fallbackConfig;
  }, [source]);

  return (
    <UnderConstructionContent
      title={config.title}
      description={config.description}
      sourceLabel={config.sourceLabel}
    />
  );
}
