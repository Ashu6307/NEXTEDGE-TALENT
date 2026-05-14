"use client";

import { useMemo, useRef, useState } from "react";
import { MessageCircle, Search, Sparkles } from "lucide-react";

import { NEBadge } from "@/components/nextedge/primitives/ne-badge";
import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NEContainer, NESection } from "@/components/nextedge/primitives/ne-section";
import { WHATSAPP_UPDATES_CTA } from "@/lib/constants/content-freeze";
import { JobListingCard, type PublicJobListing } from "./job-listing-card";
import { JobsEmptyState } from "./jobs-empty-state";
import { JobsHero } from "./jobs-hero";

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
    id: "ne-real-2",
    slug: "domestic-it-recruiter-noida-62",
    publicId: "NEX-JB-26-NO-P2M8C",
    title: "Domestic IT Recruiter",
    city: "Noida Sector 62",
    salary: "As per experience",
    experience: "0.6-3 yrs",
    category: "Recruitment",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Multiple openings",
    skills: [
      "IT Recruitment",
      "Naukri/LinkedIn",
      "Screening",
      "Pipeline Building",
      "Follow-ups",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Day shift · Male candidates only · Freshers welcome",
    minSalaryLpa: 2,
    maxSalaryLpa: 5,
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
    id: "ne-real-4",
    slug: "front-office-executive-faridabad-27c",
    publicId: "NEX-JB-26-HR-V4N6D",
    title: "Front Office Executive (Female)",
    city: "Faridabad Sector 27C",
    salary: "₹20,000-₹35,000/month",
    experience: "2-4 yrs",
    category: "Front Office",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: ["Front Desk", "Tele Sales", "CRM", "Customer Handling", "MS Office"],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Female only · Updated photo required",
    minSalaryLpa: 2.4,
    maxSalaryLpa: 4.2,
  },
  {
    id: "ne-real-5",
    slug: "receptionist-noida-49",
    publicId: "NEX-JB-26-NO-B8X1Q",
    title: "Receptionist",
    city: "Noida Sector 49",
    salary: "₹30,000-₹35,000/month",
    experience: "2-3 yrs",
    category: "Reception",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: ["Patient Handling", "Scheduling", "Billing", "MS Office", "Communication"],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Clinic/hospital experience preferred · 6 days working",
    minSalaryLpa: 3.6,
    maxSalaryLpa: 4.2,
  },
  {
    id: "ne-real-6",
    slug: "talent-acquisition-executive-noida-sector-2",
    publicId: "NEX-JB-26-NO-H5W2K",
    title: "Talent Acquisition Executive",
    city: "Sector-2, Noida",
    salary: "As per last drawn salary",
    experience: "1-4 yrs",
    category: "Recruitment",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Multiple openings",
    skills: [
      "End-to-end Recruitment",
      "Screening",
      "Interviews",
      "Hiring Coordination",
      "Candidate Database",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "5.5 days working · Face-to-face interview only",
    minSalaryLpa: 0,
    maxSalaryLpa: 6,
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
    id: "ne-real-8",
    slug: "business-development-executive-international-clients",
    publicId: "NEX-JB-26-NS-J8P4T",
    title: "Business Development Executive",
    city: "Not specified",
    salary: "Up to ₹10 LPA",
    experience: "2-8 yrs",
    category: "Business Development",
    mode: "Not specified",
    jobType: "Full-time",
    openings: "Not specified",
    skills: [
      "International Clients",
      "Business Development",
      "Client Meetings",
      "Proposals",
      "Sales Follow-ups",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "International client handling required",
    minSalaryLpa: 0,
    maxSalaryLpa: 10,
  },
  {
    id: "ne-real-9",
    slug: "hr-recruiter-inderlok-delhi",
    publicId: "NEX-JB-26-DL-L2F7Y",
    title: "HR Recruiter (0.6-1 Year)",
    city: "Inderlok, Delhi",
    salary: "Up to ₹20,000/month",
    experience: "0.6-1 yr",
    category: "Recruitment",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: ["Recruitment Process", "Sourcing", "Screening", "Interview Scheduling", "Follow-ups"],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Nearby metro: Kashmiri Gate / Kirti Nagar",
    minSalaryLpa: 2.2,
    maxSalaryLpa: 2.4,
  },
  {
    id: "ne-real-10",
    slug: "finance-manager-nsp-pitampura",
    publicId: "NEX-JB-26-DL-Q6D1N",
    title: "Finance Manager",
    city: "NSP, Pitampura",
    salary: "Up to ₹80,000/month",
    experience: "15-20 yrs",
    category: "Finance",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: ["Finance Operations", "Compliance", "MIS Reporting", "Taxation", "Team Leadership"],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Role for another consultancy (not NextEdge)",
    minSalaryLpa: 9.6,
    maxSalaryLpa: 9.6,
  },
  {
    id: "ne-real-11",
    slug: "accounts-executive-netaji-subhash-palace",
    publicId: "NEX-JB-26-DL-M4K8S",
    title: "Accounts Executive",
    city: "Netaji Subhash Palace",
    salary: "Up to ₹30,000/month",
    experience: "2-5 yrs",
    category: "Accounts",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: ["BUSY Software", "Ledger Maintenance", "Bank Reconciliation", "GST/TDS", "Invoicing"],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Basic accounting skills accepted",
    minSalaryLpa: 3,
    maxSalaryLpa: 3.6,
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
  {
    id: "ne-real-13",
    slug: "logistics-manager-netaji-subhash-palace",
    publicId: "NEX-JB-26-DL-W9C5P",
    title: "Logistics Manager",
    city: "Netaji Subhash Palace, New Delhi",
    salary: "₹35,000-₹40,000/month",
    experience: "8-10 yrs",
    category: "Logistics",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: ["Logistics Strategy", "Vendor Management", "OTIF/TAT KPIs", "Team Leadership", "Cost Control"],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Chemical trading · No consultancy charges",
    minSalaryLpa: 4.2,
    maxSalaryLpa: 4.8,
  },
  {
    id: "ne-real-14",
    slug: "purchase-executive-punjabi-bagh-west",
    publicId: "NEX-JB-26-DL-X1T6G",
    title: "Purchase Executive",
    city: "Punjabi Bagh West (shifting to Gurugram)",
    salary: "₹3-6 LPA",
    experience: "2-5 yrs",
    category: "Procurement",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: ["Procurement", "Vendor Management", "Purchase Orders", "MIS Reporting", "Negotiation"],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Shifting to Gurugram soon",
    minSalaryLpa: 3,
    maxSalaryLpa: 6,
  },
  {
    id: "ne-real-15",
    slug: "devops-engineer-cloud-ai-gpu-noida",
    publicId: "NEX-JB-26-NO-D9V2K",
    title: "DevOps Engineer (Cloud, AI Infrastructure & GPU)",
    city: "Noida",
    salary: "As per experience",
    experience: "3-4 yrs",
    category: "DevOps / Cloud",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: [
      "AWS/Azure/GCP",
      "CI/CD Pipelines",
      "Docker & Kubernetes",
      "GPU/CUDA for AI workloads",
      "Terraform (IaC)",
      "Prometheus/Grafana/ELK/Datadog",
      "Networking & System Architecture",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "UK shift 1:30 PM - 10:30 PM IST · AI infrastructure focus",
    minSalaryLpa: 0,
    maxSalaryLpa: 0,
  },
  {
    id: "ne-real-16",
    slug: "hr-talent-acquisition-lead-noida-62",
    publicId: "NEX-JB-26-NO-H7K3Q",
    title: "HR - Talent Acquisition (Team Lead)",
    city: "Sector 62, Noida",
    salary: "No bar for the right candidate",
    experience: "1-6 yrs (4+ yrs US staffing preferred)",
    category: "HR / Talent Acquisition",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Immediate joining",
    skills: [
      "Team Handling",
      "End-to-end Recruitment",
      "Sourcing & Screening",
      "Interview Coordination",
      "Offer Rollout",
      "Stakeholder Management",
      "US Staffing",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "UK shift 2:00 PM - 11:00 PM IST · Cab facility within 30 KM",
    minSalaryLpa: 0,
    maxSalaryLpa: 0,
  },
  {
    id: "ne-real-17",
    slug: "calibration-engineer-faridabad",
    publicId: "NEX-JB-26-HR-C4N8F",
    title: "Calibration Engineer",
    city: "Faridabad",
    salary: "Up to ₹30,000/month",
    experience: "1-3 yrs",
    category: "Calibration / Quality",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: [
      "Calibration Standards",
      "Lab Operations",
      "Instrumentation (Pressure/Temperature/Electrical)",
      "Documentation & Reports",
      "Quality Procedures (ISO)",
      "Troubleshooting",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Lab + client site calibration · Diploma/B.Tech preferred",
    minSalaryLpa: 2.4,
    maxSalaryLpa: 3.6,
  },
  {
    id: "ne-real-18",
    slug: "inspection-engineer-faridabad-sector-31",
    publicId: "NEX-JB-26-HR-I2P6S",
    title: "Inspection Engineer",
    city: "Sector 31, Faridabad",
    salary: "Up to ₹30,000/month",
    experience: "2-3 yrs",
    category: "Quality / Inspection",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Not specified",
    skills: [
      "Inspection Processes",
      "NDT Certification",
      "Engineering Drawings",
      "Measuring Instruments",
      "Quality Documentation",
      "Corrective Actions",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "NDT certification mandatory · Mechanical background required",
    minSalaryLpa: 2.4,
    maxSalaryLpa: 3.6,
  },
  {
    id: "ne-real-19",
    slug: "bde-bdm-it-staffing-noida-63",
    publicId: "NEX-JB-26-NO-B5T9L",
    title: "BDE / BDM - IT Staffing (Domestic)",
    city: "Noida Sector 63",
    salary: "Up to ₹35,000/month",
    experience: "1-8 yrs",
    category: "Business Development",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Multiple openings",
    skills: [
      "Client Acquisition",
      "Staffing Sales",
      "Client Handling",
      "Business Development",
      "IT Staffing",
      "Pipeline Management",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Mon-Fri 9:00 AM - 6:00 PM · Incentives + growth",
    minSalaryLpa: 3,
    maxSalaryLpa: 4.2,
  },
  {
    id: "ne-real-20",
    slug: "technical-recruiter-domestic-staffing-noida-63",
    publicId: "NEX-JB-26-NO-R3D8M",
    title: "Technical Recruiter - Domestic Staffing",
    city: "Noida Sector 63",
    salary: "Up to ₹35,000/month",
    experience: "1-3 yrs",
    category: "Recruitment",
    mode: "Onsite",
    jobType: "Full-time",
    openings: "Multiple openings",
    skills: [
      "End-to-end IT Recruitment",
      "Sourcing (Portals/LinkedIn)",
      "Screening & Shortlisting",
      "Interview Coordination",
      "Offer Closures",
    ],
    feeDisclosure: applyInfo,
    paymentTrigger: contactInfo,
    shortlistNote: "Mon-Fri 9:00 AM - 6:00 PM · Immediate/early joiners preferred",
    minSalaryLpa: 3,
    maxSalaryLpa: 4.2,
  },
];

const jobsGroupLink = "https://chat.whatsapp.com/DaKTdkskkSWAbypY8Iz1Vg";
const jobsPerPage = 8;

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function getPaginationItems(totalPages: number, currentPage: number): Array<number | "ellipsis"> {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

  const items: Array<number | "ellipsis"> = [1];
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  if (start > 2) items.push("ellipsis");
  for (let page = start; page <= end; page += 1) items.push(page);
  if (end < totalPages - 1) items.push("ellipsis");

  items.push(totalPages);
  return items;
}

export function JobsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const jobsStartRef = useRef<HTMLDivElement | null>(null);
  const filtersAnchorRef = useRef<HTMLDivElement | null>(null);
  const shouldScrollAfterPaginateRef = useRef(false);

  const indexedJobs = useMemo(() => jobs.map((job, index) => ({ job, index })), []);

  const filteredAndSortedJobs = useMemo(() => {
    const q = normalize(query);

    const filtered = indexedJobs.filter(({ job }) => {
      if (!q) return true;

      const searchable = [
        job.title,
        job.city,
        job.category,
        job.experience,
        job.jobType,
        job.skills.join(" "),
        job.shortlistNote,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(q);
    });

    filtered.sort((a, b) => a.index - b.index);

    return filtered.map(({ job }) => job);
  }, [indexedJobs, query]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedJobs.length / jobsPerPage));
  const activePage = Math.min(currentPage, totalPages);
  const paginatedJobs = filteredAndSortedJobs.slice(
    (activePage - 1) * jobsPerPage,
    activePage * jobsPerPage,
  );

  const paginationItems = useMemo(
    () => getPaginationItems(totalPages, activePage),
    [totalPages, activePage],
  );

  const hasActiveSearch = query.trim().length > 0;

  const clearAllFilters = () => {
    setQuery("");
    setCurrentPage(1);
  };

  const scrollToJobsStart = () => {
    const target = filtersAnchorRef.current ?? jobsStartRef.current;
    if (!target) return;

    const stickyHeaderOffset = 86;
    const y = target.getBoundingClientRect().top + window.scrollY - stickyHeaderOffset;
    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });
  };

  const goToPage = (nextPage: number) => {
    shouldScrollAfterPaginateRef.current = true;
    setCurrentPage(nextPage);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (shouldScrollAfterPaginateRef.current) {
          scrollToJobsStart();
          shouldScrollAfterPaginateRef.current = false;
        }
      });
    });
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <JobsHero />

      <NESection className="!pt-2 !pb-8 sm:!pt-3 sm:!pb-10">
        <NEContainer className="py-0">
          {jobs.length === 0 ? (
            <JobsEmptyState onClearFilters={() => setCurrentPage(1)} />
          ) : (
            <>
              <div ref={filtersAnchorRef} className="mx-auto mb-6 flex max-w-2xl flex-col items-center gap-3">
                <label className="group relative block w-full max-w-[38rem]">
                  <span className="sr-only">Search jobs</span>
                  <div className="relative overflow-hidden rounded-full p-px">
                    <div className="pointer-events-none absolute inset-[-130%] bg-[conic-gradient(from_0deg,hsl(var(--brand)/0.15),hsl(var(--brand)/0.92),hsl(var(--accent)/0.86),hsl(var(--brand)/0.15))] opacity-75 animate-[spin_6s_linear_infinite]" />
                    <div className="relative rounded-full bg-[hsl(var(--surface))]">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
                      <input
                        type="text"
                        value={query}
                        onChange={(event) => {
                          setQuery(event.target.value);
                          setCurrentPage(1);
                        }}
                        placeholder="Search role, city, skill..."
                        className="h-10 w-full rounded-full border border-transparent bg-transparent pl-10 pr-10 text-sm text-[hsl(var(--foreground))] outline-none ring-offset-2 transition focus:ring-2 focus:ring-[hsl(var(--brand)/0.28)]"
                      />
                      {hasActiveSearch ? (
                        <button
                          type="button"
                          onClick={clearAllFilters}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-[11.5px] font-semibold text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--surface-elevated))] hover:text-[hsl(var(--foreground))]"
                          aria-label="Clear search"
                        >
                          Clear
                        </button>
                      ) : null}
                    </div>
                  </div>
                </label>
                <NEBadge variant="brand" className="normal-case">
                  {filteredAndSortedJobs.length} matching roles
                </NEBadge>
              </div>

              {filteredAndSortedJobs.length === 0 ? (
                <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-8 text-center">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
                    <Sparkles className="h-4 w-4 text-[hsl(var(--brand))]" />
                    No jobs match current filters
                  </p>
                  <p className="mt-2 text-[13px] text-[hsl(var(--muted-foreground))]">
                    Try broader keywords or reset filters to explore all approved listings.
                  </p>
                  <div className="mt-4">
                    <NEButton type="button" variant="outline" size="sm" onClick={clearAllFilters}>
                      Reset filters
                    </NEButton>
                  </div>
                </div>
              ) : (
                <>
                  <div ref={jobsStartRef} className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
                    {paginatedJobs.map((job) => (
                      <JobListingCard key={job.id} job={job} />
                    ))}
                  </div>

                  <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 items-center gap-3 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-4 md:grid-cols-[1fr_auto_1fr]">
                    <div className="text-center md:text-left">
                      <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                        Showing {paginatedJobs.length} jobs
                      </p>
                      <p className="mt-1 text-[12.5px] text-[hsl(var(--muted-foreground))]">
                        Page {activePage} of {totalPages}
                      </p>
                    </div>

                    {totalPages > 1 ? (
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => goToPage(Math.max(1, activePage - 1))}
                          disabled={activePage === 1}
                          className="cursor-pointer rounded-lg border border-[hsl(var(--border))] px-3 py-1.5 text-[13px] font-medium text-[hsl(var(--muted-foreground))] transition hover:border-[hsl(var(--brand))] hover:bg-[hsl(var(--surface-elevated))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand)/0.35)] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Prev
                        </button>

                        {paginationItems.map((item, index) =>
                          item === "ellipsis" ? (
                            <span
                              key={`ellipsis-${index}`}
                              className="px-2 text-[13px] text-[hsl(var(--muted-foreground))]"
                            >
                              ...
                            </span>
                          ) : (
                            <button
                              key={item}
                              type="button"
                              onClick={() => goToPage(item)}
                                className={`cursor-pointer rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand)/0.35)] ${
                                activePage === item
                                  ? "border-[hsl(var(--brand))] bg-[hsl(var(--brand))] text-[hsl(var(--primary-foreground))]"
                                  : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--brand))] hover:bg-[hsl(var(--surface-elevated))]"
                              }`}
                            >
                              {item}
                            </button>
                          ),
                        )}

                        <button
                          type="button"
                          onClick={() => goToPage(Math.min(totalPages, activePage + 1))}
                          disabled={activePage === totalPages}
                          className="cursor-pointer rounded-lg border border-[hsl(var(--border))] px-3 py-1.5 text-[13px] font-medium text-[hsl(var(--muted-foreground))] transition hover:border-[hsl(var(--brand))] hover:bg-[hsl(var(--surface-elevated))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand)/0.35)] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    ) : (
                      <div />
                    )}

                    <div className="flex justify-center md:justify-end">
                      <NEButton asChild variant="outline" size="sm">
                        <a href={jobsGroupLink} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          {WHATSAPP_UPDATES_CTA}
                        </a>
                      </NEButton>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </NEContainer>
      </NESection>
    </div>
  );
}
