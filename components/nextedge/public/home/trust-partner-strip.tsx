import { EyeOff, FileText, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

import { NEContainer, NESection } from "@/components/nextedge/primitives/ne-section";

const items = [
  { icon: ShieldCheck, label: "Verified job previews" },
  { icon: UserCheck, label: "Admin-reviewed employers" },
  { icon: Sparkles, label: "OTP-secured accounts" },
  { icon: EyeOff, label: "Privacy-first applications" },
  { icon: FileText, label: "Fee disclosure before apply" },
];

export function TrustPartnerStrip() {
  return (
    <NESection className="py-8">
      <NEContainer>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3.5 py-2 text-[12.5px] font-medium text-[hsl(var(--foreground))]"
            >
              <item.icon className="h-3.5 w-3.5 text-[hsl(var(--brand))]" />
              {item.label}
            </div>
          ))}
        </div>
      </NEContainer>
    </NESection>
  );
}
