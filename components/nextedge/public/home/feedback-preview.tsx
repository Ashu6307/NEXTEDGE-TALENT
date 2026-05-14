import { MapPin, ShieldCheck, Star } from "lucide-react";

import { NEBadge } from "@/components/nextedge/primitives/ne-badge";
import { NECard } from "@/components/nextedge/primitives/ne-card";
import {
  NEContainer,
  NESection,
  NESectionHeading,
} from "@/components/nextedge/primitives/ne-section";

const feedbackEntries = [
  {
    name: "Ashutosh Tiwari",
    role: "Senior MIS Analyst",
    city: "Noida Sector 142",
    rating: 5,
    text: "Clear fee visibility and secure workflow. I always knew what step was next and what remained private.",
  },
  {
    name: "Nandini Sharma",
    role: "MIS Analyst",
    city: "Noida Sector 142",
    rating: 5,
    text: "The shortlist-first reveal policy reduced noise and made every interview feel high intent.",
  },
  {
    name: "Rohit Kumar",
    role: "Data Analyst",
    city: "Gurgaon",
    rating: 4,
    text: "Application tracking and support responses were consistent throughout the journey.",
  },
  {
    name: "Priya Singh",
    role: "QA Lead",
    city: "Delhi",
    rating: 5,
    text: "Admin-approved process gave trust. No spam outreach and no confusion around candidate terms.",
  },
];

const marqueeFeedback = [...feedbackEntries, ...feedbackEntries];

const __FEEDBACK_MARQUEE_STYLE = `
  .ne-feedback-marquee-wrap {
    overflow: hidden;
  }

  .ne-feedback-marquee-default {
    --ne-feedback-duration: 24s;
    --ne-feedback-gap: 1rem;
  }

  .ne-feedback-marquee {
    display: flex;
    width: max-content;
    gap: var(--ne-feedback-gap, 1rem);
    align-items: stretch;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    animation: ne-feedback-marquee var(--ne-feedback-duration, 24s) linear infinite;
  }

  .ne-feedback-marquee > * {
    flex: 0 0 auto;
  }

  @keyframes ne-feedback-marquee {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(calc(-50% - (var(--ne-feedback-gap, 1rem) / 2)), 0, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ne-feedback-marquee {
      animation: none;
    }
  }
`;

export function FeedbackPreview() {
  return (
    <NESection tone="canvas" className="ne-noise-overlay">
      <NEContainer>
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <NESectionHeading
            kicker="Feedback Preview"
            title={
              <>
                Admin-approved feedback from{" "}
                <span className="ne-editorial text-[hsl(var(--accent))]">
                  joined candidates
                </span>
                .
              </>
            }
            description="Feedback is curated from joined candidates and published only after verification checks."
            className="max-w-3xl"
          />
        </div>

        <div className="mt-8 ne-feedback-marquee-wrap">
          <div className="ne-feedback-marquee ne-feedback-marquee-default">
            {marqueeFeedback.map((item, index) => (
              <NECard
                key={`feedback-${index}`}
                aria-hidden={index >= feedbackEntries.length}
                className="w-[520px] max-w-[85vw] shrink-0 rounded-2xl p-5 whitespace-normal break-words"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2">
                    <NEBadge variant="success" className="normal-case tracking-[0.04em]">
                      <ShieldCheck className="h-3 w-3" />
                      Verified
                    </NEBadge>
                  </div>

                  <div className="inline-flex shrink-0 items-center gap-2">
                    <div className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] px-2.5 py-1 text-[12px] font-semibold text-[hsl(var(--foreground))]">
                      {item.rating}.0
                    </div>
                    <div className="inline-flex items-center gap-1 text-[hsl(var(--warning))]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={`feedback-${index}-star-${i}`}
                          className={`h-3.5 w-3.5 ${i < item.rating ? "fill-current" : "opacity-30"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-[14px] font-semibold text-[hsl(var(--foreground))]">
                  {item.name}{" "}
                  <span className="text-[12.5px] font-medium text-[hsl(var(--muted-foreground))]">
                    ({item.role})
                  </span>
                </p>

                <p className="mt-3 line-clamp-3 text-[13px] leading-snug text-[hsl(var(--foreground))]">
                  {item.text}
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-[hsl(var(--muted-foreground))]">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.city}
                </div>
              </NECard>
            ))}
          </div>
        </div>

        <style>{__FEEDBACK_MARQUEE_STYLE}</style>
      </NEContainer>
    </NESection>
  );
}
