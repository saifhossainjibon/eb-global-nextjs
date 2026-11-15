"use client";

/** Theme-aware layout pieces shared by the sections (one definition, two looks). */
import type { StaticImageData } from "next/image";
import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge, Bar, GC_WRAP, GradientFrame, type Line } from "./motion-kit";

/** next/image static imports are objects, plain strings are used as-is */
export const imgSrc = (s: string | StaticImageData) => (typeof s === "string" ? s : s.src);

/* ───────────────────────────── LazyVideo ───────────────────────────── */

/** Plays only while visible (saves CPU/battery and keeps scrolling smooth). */
export function LazyVideo({
  src,
  poster,
  className,
  eager = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      disablePictureInPicture
      autoPlay={eager}
      preload={eager ? "auto" : "metadata"}
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

/* ───────────────────────────── SectionPanel ───────────────────────────── */

/**
 * Gradient frame + frosted glass panel.
 * `deco` (plants, blobs) is painted ABOVE the glass fill and BELOW the content, as in the original.
 */
export function SectionPanel({
  id,
  className,
  lines,
  alpha,
  about = false,
  deco,
  bodyClass = "p-6 sm:p-10 lg:p-14",
  children,
}: {
  id?: string;
  className?: string;
  lines?: Line[];
  alpha?: number;
  about?: boolean;
  deco?: ReactNode;
  bodyClass?: string;
  children: ReactNode;
}) {
  return (
    <GradientFrame id={id} className={className} decoZ="z-[2]" lines={lines} highlight>
      {deco && (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-3">
          {deco}
        </div>
      )}
      <div
        aria-hidden
        className={cn("eb-panel absolute inset-0 z-1", about && "eb-about")}
        style={alpha ? ({ "--panel-a": alpha } as CSSProperties) : undefined}
      />
      <div className={cn("relative z-[3]", bodyClass)}>{children}</div>
    </GradientFrame>
  );
}

/* ───────────────────────────── DarkCard ───────────────────────────── */

const HOVER = "hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--royal-deep)]/40 dark:hover:shadow-[#0b1a4a]/60";

/**
 * Navy card with a gradient frame.
 * `always`: gradient frame in both themes.  Otherwise: gradient (light) / hairline border (dark).
 */
export function DarkCard({
  children,
  className,
  innerClassName,
  radius = "1.5rem",
  pad = "1.5px",
  darkPad,
  always = false,
  soft = false,
  hover = HOVER,
  aurora = [],
  edge = false,
  line = "via-white/40",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  radius?: string;
  pad?: string;
  darkPad?: string;
  always?: boolean;
  soft?: boolean;
  hover?: string;
  aurora?: string[];
  edge?: boolean;
  line?: string;
}) {
  return (
    <div
      className={cn(
        "group eb-pad shadow-lg shadow-[var(--royal-deep)]/20 transition-transform duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:shadow-[#0b1a4a]/40",
        always ? GC_WRAP : "eb-frame",
        // hover = movement only: animating box-shadow forces a repaint every frame
        hover.split(" ").filter((c) => !c.includes("shadow")).join(" "),
        className,
      )}
      style={{ "--r": radius, "--p": pad, "--pd": darkPad ?? pad, borderRadius: radius } as CSSProperties}
    >
      <div className={cn("eb-in relative h-full overflow-hidden", soft ? "eb-fill-soft" : "eb-fill", innerClassName)}>
        {aurora.map((a) => (
          <div key={a} className={cn("aurora-blob", a)} />
        ))}
        {edge && (
          <span
            aria-hidden
            className="absolute top-0 bottom-0 left-0 w-[3px] bg-linear-to-b from-white/80 via-white/20 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent to-transparent",
            line,
          )}
        />
        {children}
      </div>
    </div>
  );
}

/* ───────────────────────────── IntroCard ───────────────────────────── */

/** Icon + paragraph card used by Team, Logistics and Marketing */
export function IntroCard({
  icon: Icon,
  children,
  radius,
  pad,
  darkPad,
  wide = false,
  edge = true,
  amberBar = true,
  textClass = "text-white dark:text-white/85",
  className,
}: {
  icon: ElementType;
  children: ReactNode;
  radius: string;
  pad: string;
  darkPad: string;
  wide?: boolean;
  edge?: boolean;
  amberBar?: boolean;
  textClass?: string;
  className?: string;
}) {
  return (
    <DarkCard
      radius={radius}
      pad={pad}
      darkPad={darkPad}
      edge={edge}
      line="via-white/60 dark:via-white/40"
      aurora={["-top-16 -right-16 size-64 bg-[var(--royal-glow)]/35", "-bottom-24 -left-16 size-56 bg-[var(--primary)]/30"]}
      innerClassName={wide ? "p-8 sm:p-10 lg:p-12" : "p-8 sm:p-10"}
      className={className}
    >
      <div
        className={cn(
          "relative grid items-start gap-6",
          wide ? "lg:grid-cols-[auto_1fr] lg:gap-10" : "sm:grid-cols-[auto_1fr] sm:gap-8",
        )}
      >
        <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 lg:size-16">
          <Icon className="h-7 w-7 text-white lg:h-8 lg:w-8" aria-hidden />
        </span>
        <div>
          <p className={cn("text-base leading-relaxed sm:text-lg lg:text-[19px] lg:leading-relaxed", textClass)}>
            {children}
          </p>
          <div
            className={cn(
              "mt-8 h-[3px] w-12 rounded-full bg-linear-to-r from-white to-white/10 transition-all duration-500 group-hover:w-full",
              amberBar && "dark:from-amber-300",
            )}
          />
        </div>
      </div>
    </DarkCard>
  );
}

/* ───────────────────────────── SectionHead ───────────────────────────── */

export function SectionHead({
  badge,
  title,
  titleClass = "text-4xl sm:text-5xl",
  center = true,
  className,
  children,
}: {
  badge: string;
  title: ReactNode;
  titleClass?: string;
  center?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn(center && "text-center", className)}>
      <Badge>{badge}</Badge>
      <h2 className={cn("mt-6 font-display font-extrabold tracking-tight text-foreground", titleClass)}>{title}</h2>
      <Bar className={cn("mt-6", center && "mx-auto")} />
      {children}
    </div>
  );
}
