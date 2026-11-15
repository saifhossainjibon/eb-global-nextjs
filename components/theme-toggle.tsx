"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/** Icons swap with pure CSS (`dark:`), so there is no hydration flash. */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light / dark mode"
      title="Toggle light / dark mode"
      className={cn(
        "cursor-pointer relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-linear-to-br from-[var(--royal-deep)]/12 to-[var(--royal-glow)]/12 text-foreground shadow-[0_6px_16px_-8px_color-mix(in_oklab,var(--royal-deep)_60%,transparent)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none",
        className,
      )}
    >
      <Sun className="absolute h-[18px] w-[18px] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" aria-hidden />
      <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" aria-hidden />
    </button>
  );
}
