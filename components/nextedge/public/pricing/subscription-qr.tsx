"use client";

import { QRCodeSVG } from "qrcode.react";

type SubscriptionQrProps = {
  value: string;
  size?: number;
};

export function SubscriptionQr({ value, size = 220 }: SubscriptionQrProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-3xl border border-[hsl(var(--primary-foreground))/0.12] bg-white/95 p-2 shadow-[0_12px_32px_-24px_hsl(var(--primary-foreground)/0.6)] ring-1 ring-[hsl(var(--primary-foreground))/0.08]">
      <QRCodeSVG
        value={value}
        size={size}
        bgColor="#ffffff"
        fgColor="#111111"
        includeMargin={false}
        className="h-full w-full"
      />
    </div>
  );
}
