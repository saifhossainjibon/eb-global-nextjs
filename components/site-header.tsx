"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { BrandMark } from "./brand-mark";
import { ThemeToggle } from "./theme-toggle";

const IDS = NAV_LINKS.map((l) => l.id);

/** Highlights the nav item of the section currently on screen (rAF-throttled) */
function useActiveSection() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const els = IDS.map((id) => document.getElementById(id));
    let raf = 0;

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.35;
        let best = "home";
        let bestTop = -Infinity;
        els.forEach((el, i) => {
          if (!el) return;
          const top = el.getBoundingClientRect().top;
          if (top <= line && top > bestTop) {
            bestTop = top;
            best = IDS[i];
          }
        });
        setActive(best);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return active;
}

const GRADIENT = "bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]";
const HOVER_WASH =
  "hover:bg-linear-to-r hover:from-[var(--royal-deep)]/10 hover:to-[var(--royal-glow)]/15 hover:text-foreground";

export function SiteHeader() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    // `eb-light` keeps the header's light glass + dark text in BOTH themes
    <header className="eb-light fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 ">
        <div className="glass relative isolate flex items-center justify-between rounded-full py-1 pr-4 pl-2 shadow-[0_14px_40px_-14px_color-mix(in_oklab,var(--royal-deep)_55%,transparent),0_4px_14px_-6px_color-mix(in_oklab,var(--primary)_35%,transparent)] ring-1 ring-white/50 ring-inset sm:px-6">
          <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-linear-to-r from-[var(--royal-deep)]/12 via-[var(--primary)]/6 to-[var(--royal-glow)]/14" />
          <span aria-hidden className="pointer-events-none absolute inset-x-8 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-[var(--primary)]/60 to-transparent" />
          <span aria-hidden className="pointer-events-none absolute inset-x-8 top-0 -z-10 h-px bg-linear-to-r from-transparent via-white/80 to-transparent" />

          <BrandMark />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "text-md rounded-full px-4 py-2 font-bold transition-all duration-300",
                  active === link.id
                    ? `${GRADIENT} text-white shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--primary)_80%,transparent)]`
                    : `text-foreground ${HOVER_WASH}`,
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link
              href="/#contact"
              className={`inline-flex items-center gap-2 rounded-full ${GRADIENT} px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_26px_-10px_color-mix(in_oklab,var(--primary)_85%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_color-mix(in_oklab,var(--primary)_90%,transparent)] hover:brightness-110 motion-reduce:hover:translate-y-0`}
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-linear-to-br from-[var(--royal-deep)]/12 to-[var(--royal-glow)]/12 text-foreground shadow-[0_6px_16px_-8px_color-mix(in_oklab,var(--royal-deep)_60%,transparent)]"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="glass-strong relative mt-2 rounded-2xl p-3 shadow-[0_20px_50px_-18px_color-mix(in_oklab,var(--royal-deep)_60%,transparent)] ring-1 ring-white/50 ring-inset lg:hidden">
            <span aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-[var(--primary)]/60 to-transparent" />
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    active === link.id
                      ? `${GRADIENT} text-white shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--primary)_80%,transparent)]`
                      : `text-muted-foreground ${HOVER_WASH}`,
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className={`mt-2 inline-flex items-center justify-center gap-2 rounded-xl ${GRADIENT} px-4 py-3 text-sm font-bold text-white shadow-[0_10px_26px_-10px_color-mix(in_oklab,var(--primary)_85%,transparent)]`}
              >
                Get in Touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
