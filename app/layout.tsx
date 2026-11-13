import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";

import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

// next/font self-hosts the fonts (no render-blocking Google request)
const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-fraunces", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "EB Global — Cotton Indenting & Sourcing",
  description:
    "EB Global is a distinguished cotton indenting and sourcing firm connecting the world's most reputable cotton merchants with Bangladesh's leading spinning mills.",
  authors: [{ name: "EB Global" }],
  openGraph: {
    title: "EB Global — Cotton Indenting & Sourcing",
    description:
      "A Trusted Bridge Between Continents — premium cotton sourcing for Bangladesh's spinning mills.",
    type: "website",
  },
  twitter: { card: "summary_large_image", site: "@EBGlobal" },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: next-themes sets the `dark` class before hydration
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${sora.variable} ${manrope.variable}`}>
      <body className="relative min-h-screen bg-background text-foreground">
        <Providers>
          {/* Ambient background glows */}
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-royal/10 blur-3xl" />
            <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-sky-pop/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-royal-glow/10 blur-3xl" />
          </div>

          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
