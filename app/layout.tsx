import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { NEFooter } from "@/components/nextedge/public/ne-footer";
import { NEHeaderTicker, NENavbar } from "@/components/nextedge/public/ne-navbar";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-editorial",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-app text-main font-sans">
        <ThemeScript />
        <ThemeProvider>
          <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
            <Suspense fallback={<div className="h-16 border-b border-[hsl(var(--border))]" />}>
              <NENavbar />
            </Suspense>
            <NEHeaderTicker />
            {children}
            <Suspense fallback={<div className="h-32 border-t border-[hsl(var(--border))]" />}>
              <NEFooter />
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
