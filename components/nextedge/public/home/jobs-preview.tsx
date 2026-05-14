"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { JobListingCard, type PublicJobListing } from "@/components/nextedge/public/jobs/job-listing-card";
import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NEContainer, NESection, NESectionHeading } from "@/components/nextedge/primitives/ne-section";
import { routes } from "@/lib/constants/routes";

const applyInfo = "Screening first; interview details after shortlist";
const contactInfo = "Our team will guide next steps";

const jobs: PublicJobListing[] = [
  {
    id: "ne-real-1",
    slug: "talent-acquisition-specialist-noida-135",
    publicId: "NEX-JB-26-NO-K7Q4X",
    title: "Talent Acquisition Specialist",
    city: "Noida Sector 135",
    salary: "Up to ₹35,000/month",
    experience: "2-5 yrs",
    category: "Recruitment",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Multiple openings",
    skills: [
      "Talent Acquisition",
      "Candidate Sourcing",
      "Interview Coordination",
      "Job Portals",
      "Negotiation",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Work from office · 5 days working",
    minSalaryLpa: 3,
    maxSalaryLpa: 4.2,
  },
  {
    id: "ne-real-3",
    slug: "hr-recruiter-noida-142",
    publicId: "NEX-JB-26-NO-T9L3R",
    title: "HR Recruiter",
    city: "Noida Sector 142",
    salary: "₹25,000-₹30,000/month",
    experience: "1+ yrs",
    category: "Recruitment",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Multiple openings",
    skills: [
      "End-to-end Recruitment",
      "Sales Hiring",
      "Candidate Screening",
      "Job Posting",
      "MS Excel",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "6 days working · Day shift · Immediate joiners preferred",
    minSalaryLpa: 3,
    maxSalaryLpa: 3.6,
  },
  {
    id: "ne-real-7",
    slug: "accounts-executive-ecommerce-okhla-phase-3",
    publicId: "NEX-JB-26-DL-C3R9M",
    title: "Accounts Executive (E-commerce Reconciliation)",
    city: "Okhla Phase 3, South Delhi",
    salary: "₹20,000-₹25,000/month",
    experience: "1-3 yrs",
    category: "Accounts",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: ["Reconciliation", "Advanced Excel", "MIS Reporting", "Ledger", "Tally/ERP"],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "E-commerce reconciliation experience preferred",
    minSalaryLpa: 2.4,
    maxSalaryLpa: 3,
  },
  {
    id: "ne-real-12",
    slug: "logistics-executive-netaji-subhash-palace",
    publicId: "NEX-JB-26-DL-R7B3H",
    title: "Logistics Executive",
    city: "Netaji Subhash Palace, New Delhi",
    salary: "₹20,000-₹30,000/month",
    experience: "2-4 yrs",
    category: "Logistics",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: ["Dispatch Planning", "Transport Coordination", "Inventory (FIFO/FEFO)", "E-way Bills", "MIS"],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Chemical trading industry",
    minSalaryLpa: 2.4,
    maxSalaryLpa: 3.6,
  },
];

export function JobsPreview() {
  return (
    <NESection>
      <NEContainer>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <NESectionHeading
            kicker="Verified Job Previews"
            title={
              <>
                Real roles. <span className="ne-editorial text-[hsl(var(--muted-foreground))]">Hidden companies.</span>
              </>
            }
            description="Public users can preview salary, location, skills, type, mode, openings, and fee disclosure. Company identity, logo, HR contact, and exact address stay hidden until shortlist."
            className="max-w-3xl"
          />

          <NEButton asChild variant="outline" size="md">
            <Link href={routes.jobs}>
              See more jobs <ArrowUpRight className="ne-btn-arrow h-4 w-4" />
            </Link>
          </NEButton>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {jobs.map((job) => (
            <JobListingCard key={job.id} job={job} />
          ))}
        </div>
      </NEContainer>
    </NESection>
  );
}

