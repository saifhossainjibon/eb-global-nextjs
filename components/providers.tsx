"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import { ThemeProvider } from "next-themes";
import { useState, type ReactNode } from "react";
import { Toaster } from "sonner";
import { SmoothScroll } from "./smooth-scroll";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    // defaultTheme: change to "light" if you want visitors to land on the white version
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        {/* LazyMotion loads only the animation features we use (smaller JS bundle) */}
        <LazyMotion features={domAnimation} strict>
          <MotionConfig reducedMotion="user">
            <SmoothScroll />
            {children}
            <Toaster position="top-right" richColors />
          </MotionConfig>
        </LazyMotion>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
