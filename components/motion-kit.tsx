"use client";
import { useEffect, useId, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ───────────────────────────── Reveal (CSS + one shared observer) ───────────────────────────── */

let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.classList.add("is-in");
            sharedObserver?.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
    );
  }
  return sharedObserver;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  as?: "div" | "li";
  scale?: number;
  duration?: number;
};

// export function Reveal({ children, className, delay = 0, x = 0, y = 16, as = "div" }: RevealProps) {
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = getObserver();
//     io.observe(el);
//     return () => io.unobserve(el);
//   }, []);

//   const Tag: ElementType = as;
//   return (
//     <Tag
//       ref={ref}
//       className={cn("eb-reveal", className)}
//       style={{ "--rx": `${x}px`, "--ry": `${y}px`, transitionDelay: delay ? `${delay}s` : undefined } as CSSProperties}
//     >
//       {children}
//     </Tag>
//   );
// }

export function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 16,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = getObserver();
    io.observe(el);

    return () => io.unobserve(el);
  }, []);

  const commonProps = {
    className: cn("eb-reveal", className),
    style: {
      "--rx": `${x}px`,
      "--ry": `${y}px`,
      transitionDelay: delay ? `${delay}s` : undefined,
    } as CSSProperties,
  };

  if (as === "li") {
    return (
      <li
        ref={(node) => {
          ref.current = node;
        }}
        {...commonProps}
      >
        {children}
      </li>
    );
  }

  return (
    <div
      ref={(node) => {
        ref.current = node;
      }}
      {...commonProps}
    >
      {children}
    </div>
  );
}


// export function Reveal({
//   children,
//   className,
//   delay = 0,
//   x = 0,
//   y = 16,
//   as = "div",
// }: RevealProps) {
//   const ref = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     // If the element is already in view at mount (common on desktop),
//     // don't animate — just show it. Otherwise observe it.
//     const rect = el.getBoundingClientRect();
//     const alreadyVisible =
//       rect.top < window.innerHeight && rect.bottom > 0;

//     if (alreadyVisible) {
//       el.classList.add("is-in");
//       return;
//     }

//     const io = getObserver();
//     io.observe(el);
//     return () => io.unobserve(el);
//   }, []);


//   const commonProps = {
//     className: cn("eb-reveal", className),
//     style: {
//       "--rx": `${x}px`,
//       "--ry": `${y}px`,
//       transitionDelay: delay ? `${delay}s` : undefined,
//     } as CSSProperties,
//   };

//   if (as === "li") {
//     return (
//       <li
//         ref={(node) => {
//           ref.current = node;
//         }}
//         {...commonProps}
//       >
//         {children}
//       </li>
//     );
//   }

//   return (
//     <div
//       ref={(node) => {
//         ref.current = node;
//       }}
//       {...commonProps}
//     >
//       {children}
//     </div>
//   );
// }

/** Cards in a grid: simple staggered fade-up (no springs, no rotation) */
export function FanIn({
  index,
  children,
  className,
}: {
  index: number;
  cols?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal delay={Math.min(index, 4) * 0.06} y={20} className={className}>
      {children}
    </Reveal>
  );
}

/** Headline line that slides up once on load (CSS only) */
export function MaskLine({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="-mx-[0.1em] -my-[0.3em] block overflow-hidden px-[0.1em] py-[0.3em]">
      <span className={cn("eb-mask block", className)} style={{ "--d": `${delay}s` } as CSSProperties}>
        {children}
      </span>
    </span>
  );
}

/* ───────────────────────────── CountUp (writes straight to the DOM) ───────────────────────────── */

export function CountUp({ value, duration = 1500, delay = 0 }: { value: string; duration?: number; delay?: number }) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const [, prefix = "", digits = "", suffix = ""] = match ?? [];
  const isNumber = digits !== "";
  const target = isNumber ? parseFloat(digits) : 0;
  const decimals = digits.split(".")[1]?.length ?? 0;
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!isNumber || !el) return;
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = format(target);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now() + delay;
        const tick = (now: number) => {
          const p = Math.min(Math.max((now - start) / duration, 0), 1);
          el.textContent = format(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [isNumber, prefix, suffix, target, decimals, duration, delay]);

  if (!isNumber) return <>{value}</>;
  return (
    <span ref={ref} aria-label={value} className="tabular-nums">
      {`${prefix}${(0).toFixed(decimals)}${suffix}`}
    </span>
  );
}

/* ───────────────────────────── Scroll progress (one rAF-throttled transform) ───────────────────────────── */

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      el.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ transform: "scaleX(0)", willChange: "transform" }}
      className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]"
    />
  );
}

/* ───────────────────────────── Shared UI ───────────────────────────── */

export const GC_WRAP = "bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)]";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold tracking-[0.24em] text-sky-pop uppercase">
        {children}
      </span>
    </span>
  );
}

export function Bar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-1 w-24 rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] dark:from-amber-300 dark:via-amber-300/50 dark:to-white/10",
        className,
      )}
    />
  );
}

/**
 * Soft glowing blobs behind a section. Static, and drawn with a radial mask
 * instead of a CSS blur filter (a lot cheaper to paint).
 */
const BLOB_COLORS = [
  "bg-[var(--royal-glow)]/25 dark:bg-[var(--primary)]/55",
  "bg-[var(--primary)]/20 dark:bg-[var(--royal-glow)]/45",
];

export function Backdrop({
  blobs,
  strength = 14,
  panel = true,
}: {
  blobs: string[];
  strength?: number;
  panel?: boolean;
}) {
  return (
    <>
      {panel && (
        <div
          aria-hidden
          className="eb-backdrop-panel absolute inset-x-0 top-16 -bottom-10 -z-10 rounded-[2.5rem]"
          style={{ "--bd": strength } as CSSProperties}
        />
      )}
      {blobs.map((b, i) => (
        <div
          key={b}
          aria-hidden
          className={cn("soft-blob absolute -z-10 rounded-full scale-[1.7]", BLOB_COLORS[i % BLOB_COLORS.length], b)}
        />
      ))}
    </>
  );
}

export type Line = { d: string; o: number };

export const LINES_BOTTOM: Line[] = [
  { d: "M-50 660 C250 740 520 540 800 640 S1100 760 1260 680", o: 0.5 },
  { d: "M-50 710 C250 790 520 590 800 690 S1100 810 1260 730", o: 0.3 },
  { d: "M-50 760 C250 840 520 640 800 740 S1100 860 1260 780", o: 0.18 },
];
export const LINES_TOP: Line[] = [
  { d: "M-50 120 C250 40 450 240 750 130 S1100 0 1260 90", o: 0.5 },
  { d: "M-50 170 C250 90 450 290 750 180 S1100 50 1260 140", o: 0.3 },
  { d: "M-50 220 C250 140 450 340 750 230 S1100 100 1260 190", o: 0.18 },
];
export const LINES_ALL: Line[] = [...LINES_TOP, ...LINES_BOTTOM];
export const LINES_TEAM: Line[] = LINES_ALL.slice(1);

/** Decorative gradient lines (static) */
export function FlowingLines({ lines, className }: { lines: Line[]; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" style={{ stopColor: "var(--royal-deep)" }} stopOpacity="0" />
          <stop offset="50%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--royal-glow)" }} stopOpacity="0" />
        </linearGradient>
      </defs>
      {lines.map((l) => (
        <path
          key={l.d}
          d={l.d}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="1.5"
          strokeOpacity={l.o}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

/** Gradient-border box with top bar + decorative lines */
export function GradientFrame({
  id,
  className,
  innerClassName,
  lines,
  decoZ = "-z-10",
  highlight = false,
  children,
}: {
  id?: string;
  className?: string;
  innerClassName?: string;
  lines?: Line[];
  decoZ?: string;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className={cn(
        "relative rounded-[2.5rem] bg-linear-to-br from-white via-[var(--royal-glow)] to-[var(--primary)]/0 p-[1.5px] shadow-2xl shadow-[var(--royal-deep)]/25",
        className,
      )}
    >
      <div className={cn("relative isolate overflow-hidden rounded-[calc(2.5rem-1.5px)]", innerClassName)}>
        <div
          aria-hidden
          className={cn(
            "absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]",
            decoZ,
          )}
        />
        {lines && <FlowingLines lines={lines} className={decoZ} />}
        {highlight && (
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent",
              decoZ,
            )}
          />
        )}
        {children}
      </div>
    </div>
  );
}

/* ───────────────────────────── SVG art ───────────────────────────── */

/** Render ONCE at the top of the page; plants and avatars reference these gradients. */
export function SharedDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="pointer-events-none absolute">
      <defs>
        <radialGradient id="cf-puff" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" style={{ stopColor: "color-mix(in oklab, var(--royal-glow) 22%, white)" }} />
          <stop offset="100%" style={{ stopColor: "color-mix(in oklab, var(--primary) 38%, white)" }} />
        </radialGradient>
        <linearGradient id="cf-burr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--primary)", stopOpacity: 0.85 }} />
          <stop offset="100%" style={{ stopColor: "var(--royal-deep)", stopOpacity: 0.95 }} />
        </linearGradient>
        <linearGradient id="cf-stem" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" style={{ stopColor: "var(--royal-deep)" }} />
          <stop offset="100%" style={{ stopColor: "var(--primary)" }} />
        </linearGradient>
        <linearGradient id="cf-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--royal-glow)", stopOpacity: 0.55 }} />
          <stop offset="100%" style={{ stopColor: "var(--primary)", stopOpacity: 0.5 }} />
        </linearGradient>
        <linearGradient id="avatar-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--royal-glow)" }} />
          <stop offset="100%" style={{ stopColor: "var(--primary)" }} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function UserAvatar({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 120" className={cn("overflow-hidden rounded-full", className)}>
      <rect width="120" height="120" fill="url(#avatar-bg)" />
      <circle cx="60" cy="46" r="20" fill="#ffffff" fillOpacity="0.95" />
      <path d="M18 112c0-23 19-38 42-38s42 15 42 38z" fill="#ffffff" fillOpacity="0.95" />
    </svg>
  );
}

const BOLLS = [
  { x: 254, y: 150, s: 1, rot: 14 },
  { x: 46, y: 276, s: 0.85, rot: -18 },
  { x: 264, y: 326, s: 0.9, rot: 22 },
  { x: 150, y: 282, s: 0.8, rot: -6 },
];

function Boll({ x, y, s, rot }: { x: number; y: number; s: number; rot: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path
        d="M0,24 C-32,22 -46,-6 -38,-32 C-24,-14 -9,-10 0,2 C9,-10 24,-14 38,-32 C46,-6 32,22 0,24 Z"
        fill="url(#cf-burr)"
      />
      <g fill="url(#cf-puff)" stroke="white" strokeOpacity="0.9" strokeWidth="1.5">
        <circle cx="-22" cy="-16" r="21" />
        <circle cx="22" cy="-16" r="21" />
        <circle cx="-11" cy="-44" r="19" />
        <circle cx="13" cy="-42" r="19" />
        <circle cx="0" cy="-26" r="25" />
      </g>
    </g>
  );
}

/** Static cotton plant (no sway, no filter) */
export function CottonPlant({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 420 500" className={cn("dark:opacity-90", className)} fill="none">
      <g stroke="url(#cf-stem)" strokeWidth="6" strokeLinecap="round">
        <path d="M70,500 C78,420 96,345 150,270" />
        <path d="M150,270 C180,220 210,180 254,140" />
        <path d="M104,372 C70,340 50,305 44,262" />
        <path d="M96,404 C150,380 200,372 262,318" />
      </g>
      <g fill="url(#cf-leaf)">
        <path d="M120,330 C84,322 64,296 66,268 C98,272 122,296 120,330 Z" />
        <path d="M186,236 C214,222 242,226 258,246 C230,262 200,258 186,236 Z" />
        <path d="M84,440 C118,434 146,452 152,480 C118,484 90,468 84,440 Z" />
        <path d="M204,360 C230,364 250,384 250,408 C224,404 206,386 204,360 Z" />
      </g>
      {BOLLS.map((b) => (
        <Boll key={`${b.x}-${b.y}`} {...b} />
      ))}
    </svg>
  );
}
