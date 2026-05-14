import { CheckCircle2, MapPin, ShieldCheck } from "lucide-react";

import { NEBadge } from "@/components/nextedge/primitives/ne-badge";
import { NECard } from "@/components/nextedge/primitives/ne-card";
import {
  NEContainer,
  NESection,
  NESectionHeading,
} from "@/components/nextedge/primitives/ne-section";

const stories = [
  {
    title: "Shortlisted for a product role",
    candidate: "A*** S.",
    category: "Product",
    city: "Noida",
    outcome: "Shortlist to interview in 9 days",
  },
  {
    title: "Joined after verified hiring review",
    candidate: "R*** M.",
    category: "Engineering",
    city: "Gurgaon",
    outcome: "Offer accepted through screened workflow",
  },
  {
    title: "Interview scheduled through NEXTEDGE workflow",
    candidate: "P*** K.",
    category: "Data",
    city: "Noida",
    outcome: "Interview round confirmed after shortlist reveal",
  },
  {
    title: "Shortlisted for a product role",
    candidate: "R*** G.",
    category: "Product",
    city: "Delhi",
    outcome: "Shortlist to interview in 3 days",
  },
];

const shouldScroll = stories.length > 3;
const marqueeStories = shouldScroll ? [...stories, ...stories] : stories;

const __SUCCESS_STORIES_MARQUEE_STYLE = `
  .ne-success-marquee-wrap {
    overflow: hidden;
  }

  .ne-success-marquee-default {
    --ne-success-duration: 24s;
    --ne-success-gap: 1rem;
  }

  .ne-success-marquee {
    display: flex;
    width: max-content;
    gap: var(--ne-success-gap, 1rem);
    align-items: stretch;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    animation: ne-success-marquee var(--ne-success-duration, 24s) linear infinite;
  }

  .ne-success-marquee > * {
    flex: 0 0 auto;
  }

  @keyframes ne-success-marquee {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(calc(-50% - (var(--ne-success-gap, 1rem) / 2)), 0, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ne-success-marquee {
      animation: none;
    }
  }
`;

function StoryCard({
  story,
  className,
}: {
  story: (typeof stories)[number];
  className?: string;
}) {
  return (
    <NECard className={className ?? "rounded-2xl p-5"}>
      <div className="flex items-center justify-between gap-2">
        <NEBadge variant="success" className="normal-case tracking-[0.04em]">
          <ShieldCheck className="h-3 w-3" />
          Verified outcome
        </NEBadge>
        <span className="text-[11px] uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))]">
          {story.category}
        </span>
      </div>

      <h3 className="mt-4 text-[16px] font-semibold text-[hsl(var(--foreground))]">
        {story.title}
      </h3>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-[12.5px] text-[hsl(var(--muted-foreground))]">
        <span>{story.candidate}</span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {story.city}
        </span>
      </div>

      <div className="mt-4 inline-flex items-start gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] px-3 py-2 text-[12.5px] text-[hsl(var(--foreground))]">
        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(var(--success))]" />
        {story.outcome}
      </div>
    </NECard>
  );
}

export function SuccessStoriesPreview() {
  return (
    <NESection>
      <NEContainer>
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <NESectionHeading
            kicker="Success Stories"
            title={
              <>
                Joined-candidate outcomes with{" "}
                <span className="ne-editorial text-[hsl(var(--brand))]">
                  privacy-first proof
                </span>
                .
              </>
            }
            description="These are outcome snapshots from the verified hiring process. Company identity remains masked in public previews."
            className="max-w-3xl"
          />
        </div>

        {shouldScroll ? (
          <div className="mt-8 ne-success-marquee-wrap">
            <div className="ne-success-marquee ne-success-marquee-default">
              {marqueeStories.map((story, index) => (
                <StoryCard
                  key={`${story.title}-${index}`}
                  story={story}
                  className="w-[380px] max-w-[85vw] shrink-0 rounded-2xl p-5"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stories.map((story) => (
              <StoryCard key={story.title} story={story} />
            ))}
          </div>
        )}

        <style>{__SUCCESS_STORIES_MARQUEE_STYLE}</style>
      </NEContainer>
    </NESection>
  );
}
