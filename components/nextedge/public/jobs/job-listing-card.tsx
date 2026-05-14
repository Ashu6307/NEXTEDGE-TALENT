import {
  ArrowUpRight,
  Building2,
  Briefcase,
  CalendarClock,
  EyeOff,
  FileText,
  MapPin,
  PhoneCall,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { useEffect, useRef, useState, type ComponentType } from "react";

import { NEBadge } from "@/components/nextedge/primitives/ne-badge";
import { NEButton } from "@/components/nextedge/primitives/ne-button";
import { NECard } from "@/components/nextedge/primitives/ne-card";

export type PublicJobListing = {
  id: string;
  slug: string;
  publicId: string;
  title: string;
  city: string;
  salary: string;
  experience: string;
  category: string;
  mode: string;
  jobType: string;
  openings: string;
  skills: string[];
  feeDisclosure: string;
  paymentTrigger: string;
  shortlistNote: string;
  minSalaryLpa: number;
  maxSalaryLpa: number;
};

export function JobListingCard({ job }: { job: PublicJobListing }) {
  const salaryLabel = formatSalaryCompact(job.salary);
  const [visibleSkills, setVisibleSkills] = useState<string[]>(job.skills);
  const skillsRowRef = useRef<HTMLDivElement | null>(null);
  const skillsMeasureRef = useRef<HTMLDivElement | null>(null);
  const moreChipMeasureRef = useRef<HTMLSpanElement | null>(null);
  const whatsappNumber = "8750268005";
  const whatsappMessage = [
    `Job Application - ${job.title}`,
    `Location: ${job.city}`,
    `Experience: ${job.experience}`,
    `Salary: ${salaryLabel}`,
    `Work Mode: ${job.mode}`,
    `Job Type: ${job.jobType}`,
    `Openings: ${job.openings}`,
    `Skills: ${job.skills.join(", ")}`,
    `Public ID: ${job.publicId}`,
  ].join("\n");
  const whatsappHref = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  useEffect(() => {
    const chipGap = 6; // gap-1.5 in px
    const minVisible = Math.min(3, job.skills.length);

    const measureMoreChip = (hiddenCount: number) => {
      const moreChip = moreChipMeasureRef.current;
      if (!moreChip || hiddenCount <= 0) return 0;
      moreChip.textContent = `+${hiddenCount} more`;
      return moreChip.offsetWidth;
    };

    const getRowWidth = () => skillsRowRef.current?.clientWidth ?? 0;

    const computeVisibleSkills = () => {
      const rowWidth = getRowWidth();
      const measureRoot = skillsMeasureRef.current;
      if (!rowWidth || !measureRoot) return;

      const measured = Array.from(measureRoot.querySelectorAll<HTMLSpanElement>("[data-skill-idx]"))
        .map((node) => ({
          idx: Number(node.dataset.skillIdx),
          width: node.offsetWidth,
        }))
        .sort((a, b) => a.idx - b.idx);

      const indexedSkills = job.skills.map((skill, index) => ({
        skill,
        index,
        width: measured[index]?.width ?? 80,
      }));

      // Prefer short chips first so the single row can hold more skills.
      const sortedByCompactFit = [...indexedSkills].sort(
        (a, b) => a.width - b.width || a.skill.length - b.skill.length || a.index - b.index,
      );

      let chosen = sortedByCompactFit.slice(0, minVisible);

      const totalWidthWithMore = (items: typeof indexedSkills, hiddenCount: number) => {
        const chipsWidth = items.reduce((sum, item) => sum + item.width, 0);
        const gapsBetweenChips = Math.max(0, items.length - 1) * chipGap;
        const moreChipWidth = measureMoreChip(hiddenCount);
        const gapBeforeMoreChip = hiddenCount > 0 && items.length > 0 ? chipGap : 0;
        return chipsWidth + gapsBetweenChips + moreChipWidth + gapBeforeMoreChip;
      };

      const remaining = sortedByCompactFit.slice(minVisible);
      for (const candidate of remaining) {
        const next = [...chosen, candidate];
        const hiddenCount = indexedSkills.length - next.length;
        if (totalWidthWithMore(next, hiddenCount) <= rowWidth) {
          chosen = next;
        }
      }

      const visible = chosen.sort((a, b) => a.index - b.index).map((item) => item.skill);
      setVisibleSkills(visible);
    };

    computeVisibleSkills();
    const observer = new ResizeObserver(() => computeVisibleSkills());
    if (skillsRowRef.current) observer.observe(skillsRowRef.current);

    return () => observer.disconnect();
  }, [job.skills]);

  const hiddenSkillsCount = Math.max(0, job.skills.length - visibleSkills.length);

  return (
    <NECard className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[hsl(var(--surface))] p-5 transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--border-strong))] hover:shadow-[var(--shadow-elevated)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[hsl(var(--brand))/0] transition-colors group-hover:bg-[hsl(var(--brand))/0.1]"
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[17px] font-semibold leading-tight text-[hsl(var(--foreground))]">
            {job.title}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <NEBadge variant="brand" className="shrink-0 px-2 py-0.5 text-[10px]">
              <EyeOff className="h-3 w-3" /> Company hidden
            </NEBadge>
            <p className="text-[12.5px] text-[hsl(var(--muted-foreground))]">{job.category}</p>
          </div>
        </div>
        <span className="shrink-0 whitespace-nowrap font-mono text-[10.5px] text-[hsl(var(--muted-foreground))]">
          {job.publicId}
        </span>
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-x-3 gap-y-2.5 text-[12.5px] text-[hsl(var(--foreground))] lg:grid-cols-3">
        <Meta icon={Wallet} label={salaryLabel} />
        <Meta icon={MapPin} label={job.city} />
        <Meta icon={CalendarClock} label={job.experience} />
        <Meta icon={Sparkles} label={job.mode} />
        <Meta icon={Briefcase} label={job.jobType} />
        <Meta icon={Users} label={job.openings} />
      </div>

      <div className="relative mt-4 overflow-hidden">
        <div ref={skillsRowRef} className="flex flex-nowrap gap-1.5">
          {visibleSkills.map((skill, index) => (
            <span
              key={`${job.id}-${skill}-${index}`}
              className="shrink-0 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] px-2 py-0.5 text-[11px] font-medium text-[hsl(var(--muted-foreground))]"
            >
              {skill}
            </span>
          ))}
          {hiddenSkillsCount > 0 ? (
            <span className="shrink-0 rounded-md border border-[hsl(var(--brand)/0.35)] bg-[hsl(var(--brand)/0.12)] px-2 py-0.5 text-[11px] font-semibold text-[hsl(var(--brand))]">
              +{hiddenSkillsCount} more
            </span>
          ) : null}
        </div>
        <div ref={skillsMeasureRef} className="pointer-events-none absolute left-0 top-0 -z-10 opacity-0">
          <div className="flex flex-nowrap gap-1.5">
            {job.skills.map((skill, index) => (
              <span
                key={`${job.id}-${skill}-measure-${index}`}
                data-skill-idx={index}
                className="shrink-0 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] px-2 py-0.5 text-[11px] font-medium"
              >
                {skill}
              </span>
            ))}
            <span
              ref={moreChipMeasureRef}
              className="shrink-0 rounded-md border border-[hsl(var(--brand)/0.35)] bg-[hsl(var(--brand)/0.12)] px-2 py-0.5 text-[11px] font-semibold"
            >
              +0 more
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-4 grid gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] p-3 text-[11.5px] text-[hsl(var(--muted-foreground))]">
        <div className="inline-flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5 text-[hsl(var(--brand))]" />
          Apply process: {job.feeDisclosure}
        </div>
        <div className="inline-flex items-center gap-1.5">
          <PhoneCall className="h-3.5 w-3.5 text-[hsl(var(--warning))]" />
          Contact: {job.paymentTrigger}
        </div>
        <div className="inline-flex items-center gap-1.5">
          <Building2 className="h-3.5 w-3.5 text-[hsl(var(--brand))]" />
          Work setup: {job.shortlistNote}
        </div>
      </div>

      <div className="relative mt-auto flex flex-wrap items-center justify-end gap-2 border-t border-[hsl(var(--border))] pt-4">
        <NEButton asChild size="sm" className="pl-3 pr-1.5">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Apply on WhatsApp
            <span className="ne-btn-chip grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--background))]">
              <ArrowUpRight className="ne-btn-arrow h-3.5 w-3.5" />
            </span>
          </a>
        </NEButton>
      </div>
    </NECard>
  );
}

function formatSalaryCompact(value: string) {
  return value.replace(/₹\s?(\d[\d,]*)/g, (_, amountText: string) => {
    const amount = Number(amountText.replace(/,/g, ""));
    if (!Number.isFinite(amount) || amount < 1000) {
      return `₹${amountText}`;
    }

    const compactAmount = amount / 1000;
    const rounded =
      compactAmount % 1 === 0 ? compactAmount.toFixed(0) : compactAmount.toFixed(1).replace(/\.0$/, "");
    return `₹${rounded}k`;
  });
}

function Meta({
  icon: Icon,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex min-w-0 items-center gap-1.5">
      <Icon className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--muted-foreground))]" />
      <span className="block min-w-0 truncate text-[13px] text-[hsl(var(--foreground))]" title={label}>
        {label}
      </span>
    </span>
  );
}
