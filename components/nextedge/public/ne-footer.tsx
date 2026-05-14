"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Wrench } from "lucide-react";

import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { WHATSAPP_UPDATES_CTA, WHATSAPP_UPDATES_LINE } from "@/lib/constants/content-freeze";

const uc = (source: string) => `/under-construction?source=${source}`;

const candidateLinks = [
  { label: "Browse Jobs", href: routes.jobs },
  { label: "Membership", href: routes.pricing },
  { label: "Success Stories", href: uc("success-stories-public") },
  { label: "Feedback", href: uc("feedback-public") },
  { label: "Candidate Login", href: uc("signin") },
  { label: "Register", href: uc("candidate-register") },
];

const employerLinks = [
  { label: "For Employers", href: uc("for-employers-public") },
  { label: "Submit a Job", href: uc("submit-job-public") },
  { label: "Employer Login", href: uc("employer-login") },
  { label: "Talk to Team", href: uc("contact-public") },
];

const companyLinks = [
  { label: "About", href: uc("about-public") },
  { label: "Subscription", href: routes.pricing },
  { label: "Contact", href: uc("contact-public") },
  { label: "System Check", href: uc("system-check") },
];

const legalLinks = [
  { label: "Terms", href: uc("legal-terms") },
  { label: "Privacy", href: uc("legal-privacy") },
  { label: "Refund", href: uc("legal-refund") },
  { label: "Disclaimer", href: uc("legal-disclaimer") },
  { label: "Candidate Agreement", href: uc("legal-candidate-agreement") },
  { label: "Employer Terms", href: uc("legal-employer-terms") },
];

const jobsUpdatesLink = "https://chat.whatsapp.com/DaKTdkskkSWAbypY8Iz1Vg";

export function NEFooter() {
  const pathname = usePathname();
  const normalizedPathname = normalizePathname(pathname);
  const searchParams = useSearchParams();

  return (
    <footer className="relative overflow-hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--canvas))]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand))/0.4] to-transparent" />
      <div aria-hidden className="ne-spotlight -top-32 left-[10%] h-72 w-72 bg-[hsl(var(--brand))/0.15] dark:bg-[hsl(var(--brand))/0.22]" />

      <div className="ne-container relative pt-14 pb-8">
        <div className="relative grid gap-12 lg:grid-cols-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[41%] z-0 hidden -translate-y-1/2 select-none justify-center text-center font-semibold leading-none tracking-[-0.05em] text-[clamp(88px,15.5vw,236px)] text-[hsl(var(--foreground)/0.09)] dark:text-[hsl(var(--foreground)/0.13)] md:flex"
          >
            NEXTEDGE
          </div>

          <div className="relative z-10 lg:col-span-5">
            <BrandLockup />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[hsl(var(--muted-foreground))]">
              NEXTEDGE is a verified recruitment platform. Company identity remains private until shortlist, ensuring safer candidate movement and better employer confidence.
            </p>

            <div className="mt-6 rounded-2xl border border-[hsl(var(--border))] bg-[linear-gradient(130deg,hsl(var(--surface))_0%,hsl(var(--surface-elevated))_100%)] p-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-1 text-[11.5px] font-medium text-[hsl(var(--muted-foreground))]">
                <Wrench className="h-3.5 w-3.5 text-[hsl(var(--brand))]" />
                Development Mode · Coming Soon
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[hsl(var(--muted-foreground))]">
                {WHATSAPP_UPDATES_LINE}
              </p>
              <div className="mt-3">
                <NEButton asChild size="sm" className="rounded-xl">
                  <a href={jobsUpdatesLink} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5" />
                    {WHATSAPP_UPDATES_CTA}
                  </a>
                </NEButton>
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-7">
            <div className="space-y-2 sm:hidden">
              <FooterAccordion title="Candidates" links={candidateLinks} pathname={normalizedPathname} searchParams={searchParams} />
              <FooterAccordion title="Employers" links={employerLinks} pathname={normalizedPathname} searchParams={searchParams} />
              <FooterAccordion title="Company" links={companyLinks} pathname={normalizedPathname} searchParams={searchParams} />
              <FooterAccordion title="Legal" links={legalLinks} pathname={normalizedPathname} searchParams={searchParams} />
            </div>
            <div className="hidden grid-cols-2 gap-8 sm:grid sm:grid-cols-4">
              <FooterColumn title="Candidates" links={candidateLinks} pathname={normalizedPathname} searchParams={searchParams} />
              <FooterColumn title="Employers" links={employerLinks} pathname={normalizedPathname} searchParams={searchParams} />
              <FooterColumn title="Company" links={companyLinks} pathname={normalizedPathname} searchParams={searchParams} />
              <FooterColumn title="Legal" links={legalLinks} pathname={normalizedPathname} searchParams={searchParams} />
            </div>
          </div>
        </div>

        <div className="relative mt-4 select-none border-t border-[hsl(var(--border))] pt-3">
          <div className="relative z-10 flex flex-col items-start gap-3 text-[12.5px] text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
            <span className="sm:whitespace-nowrap">
              © {new Date().getFullYear()} NextEdge Talent Pvt. Ltd.
            </span>
            <div className="flex items-center gap-2">
              <SocialLink
                label="LinkedIn"
                href="https://www.linkedin.com/in/nihal-anand9999/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandLinkedInIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink label="WhatsApp Group" href={jobsUpdatesLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BrandLockup() {
  return (
    <Link href={routes.home} className="inline-flex items-center gap-2.5">
      <span className="relative grid h-8 w-8 place-items-center rounded-[10px] bg-[hsl(var(--ink))] text-[hsl(var(--primary-foreground))] ring-1 ring-[hsl(var(--ink))]">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M5 18V6l9 12V6"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="19" cy="7" r="2" fill="hsl(var(--accent))" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-[hsl(var(--foreground))]">NEXTEDGE</span>
    </Link>
  );
}

function FooterColumn({
  title,
  links,
  pathname,
  searchParams,
}: {
  title: string;
  links: { label: string; href: string }[];
  pathname: string;
  searchParams: ReturnType<typeof useSearchParams>;
}) {
  return (
    <div>
      <div className="mb-4 text-[11.5px] uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">{title}</div>
      <ul className="space-y-2.5">
        {links.map((link) => {
          const active = isFooterLinkActive(link.href, pathname, searchParams);
          return (
            <li key={`${title}-${link.label}-${link.href}`}>
              <Link
                href={link.href}
                className={cn(
                  "relative inline-flex rounded-sm pb-0.5 text-[13.5px] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:transition-transform after:duration-300 after:ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent)/0.38)] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--canvas))]",
                  active
                    ? "bg-[hsl(var(--accent)/0.12)] px-1.5 text-[hsl(var(--accent))] after:scale-x-100 after:bg-[hsl(var(--accent))]"
                    : "text-[hsl(var(--foreground))/0.85] hover:text-[hsl(var(--foreground))] after:scale-x-0 after:bg-[hsl(var(--accent))] hover:after:scale-x-100 focus-visible:after:scale-x-100",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function normalizePathname(path: string) {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
}

function FooterAccordion({
  title,
  links,
  pathname,
  searchParams,
}: {
  title: string;
  links: { label: string; href: string }[];
  pathname: string;
  searchParams: ReturnType<typeof useSearchParams>;
}) {
  return (
    <details className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2" open={title === "Candidates"}>
      <summary className="cursor-pointer list-none text-[12px] font-semibold uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))]">
        {title}
      </summary>
      <ul className="mt-2 grid gap-2">
        {links.map((link) => {
          const active = isFooterLinkActive(link.href, pathname, searchParams);
          return (
            <li key={`${title}-${link.label}-${link.href}-mobile`}>
              <Link
                href={link.href}
                className={cn(
                  "inline-flex rounded-sm text-[13px] transition-colors",
                  active
                    ? "font-semibold text-[hsl(var(--accent))] underline decoration-[hsl(var(--accent))] underline-offset-4"
                    : "text-[hsl(var(--foreground))/0.85]",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}

function isFooterLinkActive(
  href: string,
  pathname: string,
  searchParams: ReturnType<typeof useSearchParams>,
) {
  if (href.startsWith("/under-construction?source=")) {
    const source = href.split("source=")[1] || "";
    return pathname === "/under-construction" && searchParams.get("source") === source;
  }

  const targetPath = href.split("?")[0];
  if (targetPath === "/") return pathname === "/";
  return pathname === targetPath;
}

function SocialLink({
  label,
  href,
  target,
  rel,
  children,
}: {
  label: string;
  href: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}) {
  return (
    <a
      aria-label={label}
      href={href}
      target={target}
      rel={rel}
      className="grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] transition hover:border-[hsl(var(--accent)/0.55)] hover:bg-[hsl(var(--surface))] hover:text-[hsl(var(--accent))]"
    >
      {children}
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 11.5c0 4.55-3.72 8.25-8.3 8.25-1.43 0-2.78-.36-3.95-1l-3.25.84.87-3.15A8.19 8.19 0 0 1 3.4 11.5c0-4.55 3.72-8.25 8.3-8.25 4.58 0 8.3 3.7 8.3 8.25Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.27 8.76c.13-.3.27-.3.4-.3h.34c.12 0 .3.05.36.2.15.36.5 1.25.54 1.34.04.09.06.2-.01.31-.08.12-.12.2-.24.32-.12.12-.25.26-.35.35-.12.1-.24.21-.1.41.14.2.63 1.02 1.36 1.66.94.83 1.73 1.09 1.98 1.22.25.13.4.11.55-.07.15-.17.62-.71.79-.95.17-.24.33-.2.55-.12.23.09 1.42.66 1.66.79.24.12.4.18.45.28.05.1.05.56-.13 1.1-.17.53-1 1.03-1.4 1.09-.37.06-.84.09-1.36-.08-.31-.1-.71-.23-1.23-.45-2.17-.94-3.59-3.16-3.7-3.31-.1-.15-.88-1.15-.88-2.2 0-1.04.55-1.55.74-1.77Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BrandLinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6.8 9.2h2.8V18H6.8V9.2Zm1.4-4.2a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Z" fill="currentColor" />
      <path
        d="M11.4 9.2H14v1.2h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.24 1.8 3.24 4.14V18H17v-4.26c0-1.02-.02-2.32-1.42-2.32-1.42 0-1.64 1.1-1.64 2.24V18h-2.54V9.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

