"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Calendar,
  Factory,
  Globe2,
  Handshake,
  Layers,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Ship,
  Sparkles,
  Users,
  UsersCollaboration,
  Zap,
  type LucideIcon,
} from "lucide-react";

import marketing from "@/assets/marketing.png";
import heroPoster from "@/assets/hero-poster.png";
import cottonRight from "@/assets/cotton-right.png";
import { COMPANY, EXCELLENCE, MEMBERSHIPS, SOLUTIONS } from "@/lib/site-data";
import {
  Backdrop,
  Badge,
  Bar,
  CottonPlant,
  CountUp,
  FanIn,
  LINES_ALL,
  LINES_BOTTOM,
  LINES_TEAM,
  MaskLine,
  Reveal,
  ScrollProgress,
  SharedDefs,
  UserAvatar,
} from "./motion-kit";
import { DarkCard, IntroCard, LazyVideo, SectionHead, SectionPanel, imgSrc } from "./ui-kit";

/* ───────────────────────────── Static data ───────────────────────────── */

// Put your videos in /public/videos (Next.js serves /public as the site root)
const HERO_VIDEO = "/videos/heroCotton.mp4";
const PORT_VIDEO = "/videos/port-container.mp4";

const TEAM = [
  { name: "Kazi Raiyan Hasan" },
  { name: "Kazi Rakib Hasan" },
  { name: "Shafiul Yeasin" },
  { name: "Md. Shafiur Rahman" },
];

const ORIGINS = [
  { label: "Americas", icon: Globe2 },
  { label: "Africa", icon: Globe2 },
  { label: "Central Asia", icon: Globe2 },
  { label: "Indian subcontinent", icon: Globe2 },
];

const ICONS: LucideIcon[] = [Sparkles, Layers, Globe2, Users, ShieldCheck, Handshake, Building2];
const SOLUTION_ICONS = [Globe2, Handshake, ShieldCheck, Sparkles];

const STATS = [
  { icon: Calendar, value: "10+", label: "Years Of Experience" },
  { icon: Ship, value: "20+", label: "Global Cotton Suppliers" },
  { icon: Factory, value: "20+", label: "Reputed Spinning Mills" },
  { icon: Handshake, value: "1000+", label: "Contracts Served" },
];

const VALUES = [
  { icon: ShieldCheck, title: "Honesty", text: "Straight answers and open dealings at every step." },
  { icon: Briefcase, title: "Professionalism", text: "Careful work across the whole cotton supply chain." },
  { icon: Zap, title: "Efficiency", text: "Simple trade that keeps suppliers and buyers in step." },
];

const CONTACT_ITEMS = [
  { icon: Phone, label: "Phone", lines: COMPANY.phones, hrefs: COMPANY.phoneLinks.map((p) => `tel:${p}`) },
  { icon: Mail, label: "Email", lines: ["Info@ebglobalbd.com"], hrefs: ["mailto:Info@ebglobalbd.com"] },
  {
    icon: Building2,
    label: "Registered Office",
    lines: ["1138/A, JCX Business Tower, Block I, Bashundhara, Dhaka-1229"],
    hrefs: [],
  },
  {
    icon: MapPin,
    label: "Corporate Office",
    lines: ["House-581, Road-20, Block-J, Bashundhara, Dhaka-1229"],
    hrefs: [],
  },
];

const RINGS = [
  { r: 150, o: 0.2 },
  { r: 112, o: 0.32 },
  { r: 74, o: 0.5 },
  { r: 36, o: 0.75 },
];

/** Mobile route geometry (outer card = outer lane, so lines never cross) */
const MOBILE_LANES = [6, 16, 26, 36];

const DESKTOP_ROUTES = [
  "M125 0 C125 90 400 40 400 128",
  "M375 0 C375 90 470 40 470 128",
  "M625 0 C625 90 530 40 530 128",
  "M875 0 C875 90 600 40 600 128",
];

/** gradient pill text shared by the origin labels */
const PLANT_GLOW =
  "absolute -bottom-10 -left-10 size-[26rem] rounded-full bg-[var(--royal-glow)]/35 soft-blob dark:bg-[var(--royal-glow)]/30";

/* ───────────────────────────── Hero ───────────────────────────── */

function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pt-22 pb-20"
    >
      <div aria-hidden className="absolute inset-0">
        <LazyVideo eager src={HERO_VIDEO} poster={heroPoster.src} className="h-full w-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/90 dark:from-black/10 dark:to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent dark:from-black/90" />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal delay={0.1} y={20}>
            <p className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.3em] text-white uppercase shadow-lg shadow-black/20 backdrop-blur-md">
              Cotton Indenting &amp; Sourcing
            </p>
          </Reveal>

          <h1 className="mt-8 font-latic text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.02em] text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-[5.25rem]">
            <MaskLine delay={0.25}>A Trusted Bridge</MaskLine>
            <MaskLine
              delay={0.4}
              className="inline-block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent italic [text-shadow:none]"
            >
              Between Continents
            </MaskLine>
          </h1>

          <div className="eb-bar-in mx-auto mt-7 h-1 w-24 rounded-full bg-linear-to-r from-transparent via-amber-300 to-transparent" />

          <Reveal delay={0.75} y={20}>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] sm:text-xl">
              Connecting the world&apos;s most reputable cotton merchants with Bangladesh&apos;s leading
              spinning mills built on trust, precision and discretion.
            </p>
          </Reveal>

          <Reveal delay={0.9} y={20}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <>
                <a
                  href="#team"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-xl shadow-black/25 ring-4 ring-white/20 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Explore Our Team
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </>
              <>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Contact Us
                </a>
              </>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={1 + i * 0.12} y={40} className="h-full">
              <>
                <div className="group h-full rounded-3xl shadow-xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="relative h-full overflow-hidden rounded-2xl bg-white/10 px-4 py-4 text-center backdrop-blur-md">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
                    />
                    <div className="relative">
                      <span className="mx-auto mb-3 inline-flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        <stat.icon className="h-5 w-5 text-white" aria-hidden />
                      </span>
                      <p className="text-3xl font-bold text-white sm:text-4xl">
                        <CountUp value={stat.value} delay={1000 + i * 150} />
                      </p>
                      <p className="mt-1.5 text-[10px] font-medium tracking-[0.2em] text-white/65 uppercase">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Who we are + What we do ───────────────────────────── */

function About() {
  return (
    <section id="about">
      <div className="relative isolate mt-2">
        <Backdrop panel={false} blobs={["top-20 left-0 size-72", "right-10 bottom-0 size-80"]} />
        <Backdrop panel={false} blobs={["top-180 right-0 size-72", "left-0 bottom-120 size-80"]} />

        <div className="relative overflow-hidden px-4 py-16 sm:px-8 sm:py-24">
          {/* ───────── Who We Are ───────── */}
          <Reveal>
            <SectionPanel
              about
              lines={LINES_BOTTOM}
              className="mx-auto mt-2 max-w-7xl"
              deco={
                <>
                  <div className="absolute -top-24 -left-24 size-72 rounded-full bg-white/70 soft-blob dark:hidden" />
                  <div className="absolute right-1/4 -bottom-20 size-72 rounded-full bg-[var(--primary)]/20 soft-blob dark:hidden" />
                  <div className="absolute -bottom-10 -left-10 hidden size-[26rem] rounded-full bg-[var(--royal-glow)]/30 soft-blob dark:block" />
                  <Image
                    src={cottonRight}
                    alt=""
                    sizes="(min-width: 1024px) 28rem, 24rem"
                    className="absolute right-0 bottom-0 h-auto w-[18rem] opacity-90 select-none sm:w-[24rem] lg:w-[28rem] dark:opacity-70 dark:drop-shadow-[0_0_30px_rgba(96,165,250,0.35)]"
                  />
                </>
              }
            >
              <div className="grid items-stretch gap-10 lg:grid-cols-5 lg:gap-14">
                {/* Left: story */}
                <Reveal className="lg:col-span-3">
                  <Badge className="mb-6">Who We Are</Badge>

                  <h2 className="font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[3.25rem]">
                    Trust, precision and <span className="text-gradient-royal">discretion</span> in every
                    consignment
                  </h2>

                  <Bar className="mt-6" />

                  <p className="relative mt-8 pl-6 text-lg leading-relaxed font-medium text-t2 sm:text-xl">
                    <span
                      aria-hidden
                      className="absolute top-1 bottom-1 left-0 w-[3px] rounded-full bg-linear-to-b from-[var(--royal-deep)] via-[var(--primary)] to-amber-400"
                    />
                    EB Global is a cotton indenting and sourcing company. We connect some of the world’s leading
                    cotton merchants with spinning mills across Bangladesh.
                  </p>

                  <div className="mt-6 grid gap-5 text-[16px] leading-relaxed text-t2 sm:text-base md:grid-cols-2 md:gap-8 dark:text-white/70">
                    <p>
                      We know the international cotton trade and the textile industry well, so we can offer
                      sourcing that’s reliable, transparent, and shaped around what each partner actually needs,
                      even as those needs change.
                    </p>
                    <p>
                      Over the years, we’ve put a lot of effort into building strong international networks and
                      long-term relationships, and we care about doing good work at every step of the cotton
                      supply chain.
                    </p>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-t2 sm:text-base dark:text-white/70">
                    We believe good business comes down to trust, consistency, and partnerships that last. For us,
                    being a sourcing partner is only part of the job. We want to be the reliable link between
                    global opportunities and Bangladesh’s growing textile industry.
                  </p>

                  <ul className="mt-9 grid gap-3 sm:grid-cols-3">
                    {VALUES.map(({ icon: Icon, title, text }, i) => (
                      <Reveal as="li" key={title} delay={i * 0.1} y={24}>
                        <div className="eb-tile group h-full rounded-2xl p-4 shadow-lg shadow-[var(--royal-deep)]/10 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:shadow-[#0b1a4a]/40">
                          <span className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] shadow-md shadow-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 dark:border dark:border-white/20 dark:bg-none dark:bg-white/10 dark:shadow-lg">
                            <Icon className="h-5 w-5 text-white" aria-hidden />
                          </span>
                          <h3 className="font-display text-base font-bold text-foreground">{title}</h3>
                          <p className="mt-1 text-[13px] leading-relaxed text-t3 dark:text-white/60">{text}</p>
                        </div>
                      </Reveal>
                    ))}
                  </ul>
                </Reveal>

                {/* Right: mission */}
                <Reveal delay={0.15} x={40} y={0} className="lg:col-span-2">
                  <DarkCard
                    radius="2rem"
                    pad="1.5px"
                    hover="hover:shadow-2xl"
                    className="shadow-2xl shadow-[var(--royal-deep)]/30 dark:shadow-[#0b1a4a]/60"
                    innerClassName="flex min-h-[22rem] flex-col justify-between p-8 sm:p-10"
                    line="via-white/60 dark:via-white/40"
                    aurora={[
                      "-top-16 -right-16 size-64 bg-[var(--royal-glow)]/40"
                    ]}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-14 -bottom-14 size-56 rounded-full border border-white/10 dark:hidden"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-6 -bottom-6 size-40 rounded-full border border-white/10 dark:hidden"
                    />
                    <div className="relative">
                      <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg">
                        <Quote className="h-7 w-7 text-amber-300" aria-hidden />
                      </span>
                      <span className="mt-7 block text-[12px] font-extrabold tracking-[0.3em] text-white/70 uppercase">
                        Our Mission
                      </span>
                      <div className="mt-3 h-[3px] w-12 rounded-full bg-linear-to-r from-amber-300 to-white/10" />
                      <p className="mt-6 font-latic text-2xl leading-snug font-medium text-white sm:text-[1.75rem]">
                        “To be recognized as a premier cotton sourcing partner synonymous with trust, excellence,
                        and enduring global relationships.”
                      </p>
                    </div>
                    <div className="relative mt-10 flex items-center gap-3 border-t border-white/10 pt-5">
                      <span className="text-[11px] font-semibold tracking-[0.24em] text-white/70 uppercase">
                        EB Global · The Cotton Diplomat
                      </span>
                    </div>
                  </DarkCard>
                </Reveal>
              </div>
            </SectionPanel>
          </Reveal>

          {/* ───────── What We Do ───────── */}
          <Reveal>
            <SectionPanel
              alpha={0.55}
              lines={LINES_BOTTOM}
              className="mx-auto mt-28 max-w-7xl"
              deco={
                <>
                  <div className={PLANT_GLOW} />
                  <CottonPlant className="absolute -bottom-16 -left-10 w-[22rem] sm:w-[28rem] lg:w-[37rem]" />
                </>
              }
            >
              <Reveal className="text-center">
                <SectionHead
                  badge="What We Do"
                  className="relative mb-14 pt-4 sm:pt-6"
                  title={
                    <>
                      Tailored solutions for <span className="text-gradient-royal">a global industry</span>
                    </>
                  }
                />
              </Reveal>

              <div className="z-1 mx-auto grid max-w-7xl gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-4">
                {SOLUTIONS.map((solution, i) => {
                  const Icon = SOLUTION_ICONS[i]!;
                  return (
                    <FanIn key={solution.title} index={i} cols={4} className="h-full">
                      <>
                        <DarkCard
                          always
                          radius="var(--radius-3xl)"
                          hover="hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--royal-deep)]/40 dark:hover:shadow-[#0b1a4a]/60"
                          className="h-full"
                          innerClassName="p-7"
                          aurora={["-top-16 -right-16 size-40 bg-[var(--royal-glow)]/30"]}
                        >
                          <div className="relative">
                            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                              <Icon className="h-7 w-7 text-white" />
                            </span>
                            <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                              {solution.title}
                            </h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-white/70">{solution.desc}</p>
                            <div className="mt-6 h-[3px] w-10 rounded-full bg-linear-to-r from-white to-white/10 transition-all duration-500 group-hover:w-full dark:from-amber-300" />
                          </div>
                        </DarkCard>
                      </>
                    </FanIn>
                  );
                })}
              </div>
            </SectionPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Why EB Global ───────────────────────────── */

function Excellence() {
  return (
    <section className="relative isolate overflow-x-clip px-4 pt-4 sm:px-6">
      <Backdrop blobs={[
        "top-100 left-30 size-80", 
        // "top-00 left-10 size-80", 
        // "bottom-00 left-0 size-72"
        ]} />

      <div className="relative isolate mx-auto max-w-7xl">
        <div aria-hidden className="pointer-events-none absolute inset-0 z-11 hidden sm:block">
          <div className="absolute -bottom-8 -left-6 size-[20rem] rounded-full bg-[var(--royal-glow)]/35 soft-blob sm:size-[26rem] dark:bg-[var(--royal-glow)]/30" />
          <CottonPlant className="absolute -bottom-0 -left-4 w-[16rem] sm:-left-4 sm:w-[22rem] lg:w-[28rem]" />
        </div>

        <SectionPanel
          className="z-10"
          lines={LINES_ALL}
          bodyClass="p-4 pt-8 sm:p-10 sm:pt-14 lg:p-14 lg:pt-16"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-2 py-8 sm:px-8 sm:py-14 lg:grid-cols-5 lg:gap-16 lg:px-12">
            {/* Left: heading + line art */}
            <Reveal className="lg:col-span-2">
              <div className="lg:top-28">
                <Badge>Why EB Global</Badge>
                <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Defined by{" "}
                  <span className="text-gradient-royal">
                    <br /> excellence
                  </span>
                </h2>
                <Bar className="mt-6" />

                <svg aria-hidden viewBox="0 0 320 320" className="mt-12 hidden w-full max-w-[17rem] lg:block">
                  <defs>
                    <linearGradient id="wy-ring" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" style={{ stopColor: "var(--royal-deep)" }} />
                      <stop offset="55%" style={{ stopColor: "var(--primary)" }} />
                      <stop offset="100%" style={{ stopColor: "var(--royal-glow)" }} />
                    </linearGradient>
                  </defs>
                  {RINGS.map(({ r, o }) => (
                    <circle
                      key={r}
                      cx="160"
                      cy="160"
                      r={r}
                      fill="none"
                      stroke="url(#wy-ring)"
                      strokeWidth="1.5"
                      strokeOpacity={o}
                      strokeDasharray={r === 112 ? "3 7" : undefined}
                    />
                  ))}
                  <circle cx="160" cy="10" r="4" fill="var(--primary)" />
                  <circle cx="272" cy="160" r="3.5" fill="var(--royal-glow)" />
                  <circle cx="86" cy="86" r="3" fill="var(--royal-deep)" />
                  <circle cx="160" cy="234" r="3" fill="var(--primary)" />
                  <rect
                    x="152"
                    y="152"
                    width="16"
                    height="16"
                    rx="3"
                    transform="rotate(45 160 160)"
                    fill="url(#wy-ring)"
                  />
                </svg>
              </div>
            </Reveal>

            {/* Right: timeline */}
            <ol className="relative lg:col-span-3">
              <span
                aria-hidden
                className="absolute top-4 bottom-4 left-5 w-[2px] -translate-x-1/2 rounded-full bg-linear-to-b from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]/20 lg:left-7"
              />

              {EXCELLENCE.map((text, i) => {
                const Icon = ICONS[i] || Sparkles;
                return (
                  <Reveal
                    as="li"
                    key={text}
                    x={48}
                    y={0}
                    delay={0.05}
                    className="group relative flex items-stretch gap-3.5 pb-5 last:pb-0 sm:gap-5"
                  >
                    <span className="relative z-10 mt-2 flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal-deep via-primary to-[var(--royal-glow)] shadow-lg shadow-primary/30 ring-2 ring-white/80 transition-transform duration-300 group-hover:scale-110 sm:size-14 sm:ring-4 dark:shadow-primary/40 dark:ring-white/20">
                      <Icon className="h-5 w-5 text-cotton sm:h-6 sm:w-6" />
                    </span>

                    <DarkCard
                      always
                      radius="var(--radius-lg)"
                      pad="3.5px"
                      hover="group-hover:translate-x-1.5 group-hover:shadow-2xl group-hover:shadow-[var(--royal-deep)]/40 dark:group-hover:shadow-[#0b1a4a]/60"
                      className="mb-2 flex-1"
                      innerClassName="p-4 sm:p-5 sm:pr-6"
                      edge
                      aurora={[
                        "-top-16 -right-16 size-32 bg-[var(--royal-glow)]/30 opacity-50 transition-opacity duration-300 group-hover:opacity-100",
                      ]}
                    >
                      <p className="relative text-[15px] leading-relaxed font-medium text-white transition-colors duration-300 sm:pr-12 sm:text-[18.5px] dark:text-white/85 dark:group-hover:text-white">
                        {text}
                      </p>
                    </DarkCard>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </SectionPanel>
      </div>
    </section>
  );
}

/* ───────────────────────────── Team ───────────────────────────── */

function TeamProfile() {
  return (
    <section id="team" className="relative isolate px-4 pt-28 sm:px-6" aria-labelledby="team-heading">
      <Backdrop blobs={["top-40 right-[8%] size-80", "bottom-0 left-0 size-72"]} />

      <div className="relative isolate mx-auto max-w-7xl">
        <SectionPanel
          className="z-10"
          lines={LINES_TEAM}
          deco={<div className={PLANT_GLOW} />}
          bodyClass="p-4 pt-8 sm:p-10 sm:pt-14 lg:p-14 lg:pt-16"
        >
          <div className="mx-auto max-w-7xl px-2 py-8 sm:px-8 sm:py-14 lg:px-12">
            <Reveal>
              <SectionHead
                badge="Team Profile"
                className="mb-12 sm:mb-14"
                titleClass="text-4xl sm:text-5xl lg:text-6xl"
                title={
                  <span id="team-heading">
                    Meet the <span className="text-gradient-royal">team</span>
                  </span>
                }
              />
            </Reveal>

            <Reveal delay={0.2}>
              <IntroCard
                icon={UsersCollaboration}
                radius="var(--radius-xl)"
                pad="3px"
                darkPad="1.5px"
                // amberBar={false}
                className="hover:shadow-[var(--royal-deep)]/40"
              >
                EB Global is run by a dedicated team of four: Kazi Raiyan Hasan, Kazi Rakib Hasan, Shafiul Yeasin,
                and Md. Shafiur Rahman. Between us, we cover sales, marketing, and administration, and each of us
                plays a real part in how things get done. We work closely together to take good care of our
                clients, keep our business relationships strong, and make sure the day-to-day operations run
                smoothly.
              </IntroCard>
            </Reveal>
            <div className="relative mt-14 sm:mt-16">
              <div
                aria-hidden
                className="absolute inset-x-0 top-[102px] hidden h-[2px] bg-linear-to-r from-transparent via-[var(--primary)] to-transparent lg:block"
              />

              <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {TEAM.map((member, i) => (
                  <FanIn key={member.name} index={i} cols={4} className="h-full">
                    <>
                      <DarkCard
                        radius="var(--radius-sm)"
                        pad="3px"
                        darkPad="1.5px"
                        edge
                        hover="hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[var(--royal-deep)]/40 dark:hover:shadow-[#0b1a4a]/60"
                        className="h-full"
                        innerClassName="flex flex-col items-center px-5 py-9 text-center"
                        aurora={[
                          "-top-16 -right-16 size-40 bg-[var(--royal-glow)]/30 opacity-60 transition-opacity duration-300 group-hover:opacity-100",
                        ]}
                      >
                        <div className="relative">
                          <span aria-hidden className="absolute inset-0 rounded-full bg-[var(--royal-glow)]/50 blur-xl" />
                          <div className="relative rounded-full bg-linear-to-br from-white via-[var(--royal-glow)] to-[var(--primary)] p-[3px] shadow-xl shadow-black/20 transition-transform duration-300 group-hover:scale-105 dark:from-sky-300">
                            <div className="rounded-full bg-[var(--royal-deep)] p-1 dark:bg-[#0b1a4a]">
                              <UserAvatar className="size-28" />
                            </div>
                          </div>
                        </div>
                        <h3 className="relative mt-6 font-display text-xl font-semibold tracking-tight text-white">
                          {member.name}
                        </h3>
                        <div className="relative mt-4 h-[3px] w-10 rounded-full bg-linear-to-r from-white to-white/10 transition-all duration-500 group-hover:w-24 dark:from-amber-300" />
                      </DarkCard>
                    </>
                  </FanIn>
                ))}
              </div>
            </div>
          </div>
        </SectionPanel>
      </div>
    </section>
  );
}

/* ───────────────────────────── Logistics ───────────────────────────── */

function Logistics() {
  return (
    <section className="relative isolate mb-2 px-4 pt-30 sm:px-6" aria-labelledby="logistics-heading">
      <Backdrop blobs={["top-32 right-[8%] size-72", "bottom-10 left-[8%] size-80"]} />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="group relative h-64 overflow-hidden rounded-[2.5rem] border border-border shadow-xl shadow-primary/10 sm:h-96 dark:border-white/10 dark:shadow-[#0b1a4a]/40">
            <LazyVideo src={PORT_VIDEO} poster={heroPoster.src} className="h-full w-full object-cover object-center" />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/60 via-[var(--primary)]/15 to-transparent dark:from-[#050b22]/70 dark:via-[#0b1a4a]/20"
            />
          </div>

          <SectionPanel
            className="z-10 -mt-20 sm:-mt-22 sm:mx-10"
            lines={LINES_ALL}
            deco={<div className={PLANT_GLOW} />}
            bodyClass="p-4 pt-8 sm:p-10 sm:pt-14 lg:p-14 lg:pt-16"
          >
            <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
              <div className="lg:col-span-2">
                <Badge>Global Logistics</Badge>
                <h2
                  id="logistics-heading"
                  className="mt-6 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                >
                  From origin to
                  <br />
                  <span className="text-gradient-royal">spinning mill</span>
                </h2>
              </div>

              <div className="lg:col-span-3">
                <IntroCard
                  icon={Ship}
                  radius="var(--radius-xl)"
                  pad="3px"
                  darkPad="1.5px"
                  className="hover:shadow-[var(--royal-deep)]/40"
                >
                  We make international cotton trade run smoothly, and we keep everything open and transparent
                  along the way. Whether the cotton comes from the Americas, Africa, Central Asia, or the Indian
                  subcontinent, we handle it all the way through to the mills in Bangladesh.
                </IntroCard>
              </div>
            </div>

            {/* Route: every origin connects to Mills in Bangladesh */}
            <div className="eb-route relative mx-auto mt-14 max-w-5xl" role="group" aria-label="Cotton route to Bangladesh">
              {/* MOBILE: one line from each card into the destination */}
              <svg aria-hidden viewBox="0 0 48 452" className="absolute top-0 left-0 h-[452px] w-12 md:hidden">
                <defs>
                  <linearGradient id="m-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="420">
                    <stop offset="0%" style={{ stopColor: "var(--royal-glow)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--royal-deep)" }} />
                  </linearGradient>
                </defs>
                {ORIGINS.map((_, i) => {
                  const x = MOBILE_LANES[i] ?? 36;
                  const y = 40 + i * 96;
                  const destY = 420;
                  const r = 8;
                  const d = `M48 ${y} H${x + r} Q${x} ${y} ${x} ${y + r} V${destY - r} Q${x} ${destY} ${x + r} ${destY} H44`;
                  return (
                    <g key={i}>
                      <path d={d} fill="none" stroke="url(#m-grad)" strokeWidth="2" strokeOpacity="0.55" strokeLinecap="round" />
                      <path
                        d={d}
                        fill="none"
                        stroke="var(--route)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="1 11"
                      />
                      <circle cx="47" cy={y} r="3.5" fill="var(--primary)" />
                    </g>
                  );
                })}
                <path
                  d="M39 414 L45 420 L39 426"
                  fill="none"
                  stroke="var(--route)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Origin cards */}
              <ol className="grid grid-cols-1 gap-4 pl-12 md:grid-cols-4 md:pl-0">
                {ORIGINS.map(({ label, icon: Icon }, i) => (
                  <Reveal as="li" key={label} delay={i * 0.1} y={30} className="relative h-20 md:h-auto">
                    <DarkCard
                      soft
                      radius="var(--radius-lg)"
                      pad="1.5px"
                      hover="hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--royal-deep)]/30 dark:hover:shadow-[#0b1a4a]/60"
                      className="h-full shadow-[var(--royal-deep)]/15"
                      innerClassName="flex flex-row items-center gap-4 px-4 md:flex-col md:gap-3 md:py-5 md:text-center"
                      line="via-white dark:via-white/40"
                    >
                      <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 dark:border dark:border-white/20 dark:bg-none dark:bg-white/10">
                        <Icon className="h-5 w-5 text-cotton dark:text-white" aria-hidden />
                      </span>
                      <span className="relative text-gradient-royal font-display text-base leading-tight font-extrabold sm:text-lg">
                        {label}
                      </span>
                    </DarkCard>
                  </Reveal>
                ))}
              </ol>

              {/* DESKTOP: curved lines converging into the destination */}
              <div className="relative hidden h-32 md:block" aria-hidden>
                <svg viewBox="0 0 1000 128" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                  <defs>
                    <linearGradient id="route-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" style={{ stopColor: "var(--royal-glow)" }} />
                      <stop offset="100%" style={{ stopColor: "var(--royal-deep)" }} />
                    </linearGradient>
                  </defs>
                  {DESKTOP_ROUTES.map((d) => (
                    <g key={d}>
                      <path
                        d={d}
                        fill="none"
                        stroke="url(#route-grad)"
                        strokeWidth="2"
                        strokeOpacity="0.45"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d={d}
                        fill="none"
                        stroke="var(--route)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="1 13"
                        vectorEffect="non-scaling-stroke"
                      />
                    </g>
                  ))}
                </svg>

                {["left-[40%]", "left-[47%]", "left-[53%]", "left-[60%]"].map((pos) => (
                  <span
                    key={pos}
                    className={`absolute bottom-0.5 ${pos} size-2.5 -translate-x-1/2 rounded-full bg-[var(--primary)] shadow-md shadow-primary/40 ring-4 ring-white/80 dark:ring-white/20`}
                  />
                ))}
              </div>

              {/* Destination */}
              <Reveal delay={0.4} y={20} className="relative mt-5 pl-12 md:mt-0 md:pl-0">
                <div className="relative mx-auto flex w-full items-center justify-center md:w-fit">
                  <span aria-hidden className="absolute inset-0 rounded-full bg-[var(--royal-glow)]/50 blur-xl" />
                  <div className="relative flex h-16 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] px-6 shadow-2xl shadow-[var(--royal-deep)]/40 ring-4 ring-white/70 sm:px-8 md:h-auto md:w-auto md:py-4 dark:shadow-[#0b1a4a]/60 dark:ring-white/20">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md">
                      <Factory className="h-5 w-5 text-white" aria-hidden />
                    </span>
                    <span className="font-display text-base font-extrabold tracking-tight text-white sm:text-lg">
                      Mills in Bangladesh
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </SectionPanel>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── Marketing team ───────────────────────────── */

function MarketingTeam() {
  return (
    <section className="relative isolate mb-14 px-6 pt-28" aria-labelledby="marketing-heading">
      <Backdrop blobs={["top-32 right-[8%] size-72", "left-[8%] bottom-10 size-80"]} />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="group relative h-64 overflow-hidden rounded-[2.5rem] border border-border shadow-xl shadow-primary/10 sm:h-96 dark:border-white/10 dark:shadow-[#0b1a4a]/40">
            <Image
              src={marketing}
              alt="EB Global marketing and business development team"
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/60 via-[var(--primary)]/15 to-transparent dark:from-[#050b22]/70 dark:via-[#0b1a4a]/20"
            />
          </div>

          <SectionPanel
            alpha={0.65}
            className="z-10 -mt-24 sm:-mt-32 sm:mx-10"
            lines={LINES_BOTTOM}
            deco={<div className={PLANT_GLOW} />}
            bodyClass="p-6 pt-8 sm:p-10 sm:pt-12 lg:p-14 lg:pt-14"
          >
            <SectionHead
              badge="Marketing Team"
              className="mb-12 sm:mb-14"
              titleClass="text-4xl sm:text-5xl lg:text-6xl"
              title={
                <span id="marketing-heading">
                  Driven by Expertise.
                  <br />
                  <span className="text-gradient-royal">Defined by Results.</span>
                </span>
              }
            />

            <IntroCard
              icon={Quote}
              wide
              edge={false}
              radius="2rem"
              pad="1.5px"
              darkPad="1.5px"
              textClass="text-white/90 dark:text-white/85"
              className="mx-auto max-w-5xl hover:shadow-[var(--royal-deep)]/40"
            >
              At EB Global, our Marketing and Business Development Team brings together extensive industry
              experience, market intelligence, and exceptional negotiation skills. With a deep understanding of
              international cotton markets, we excel at identifying opportunities, building lasting partnerships,
              and closing deals with confidence, precision, and professionalism.
            </IntroCard>
          </SectionPanel>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── Memberships + Contact ───────────────────────────── */

function MembershipsContact() {
  return (
    <section id="memberships" className="relative isolate" aria-labelledby="memberships-heading">
      <div className="relative mx-auto p-6 sm:p-10 lg:p-14">
        <Backdrop strength={20} blobs={["top-32 right-[8%] size-72", "bottom-130 left-[8%] size-80"]} />

        {/* ───────── Memberships ───────── */}
        <Reveal>
          <SectionPanel
            alpha={0.7}
            lines={LINES_BOTTOM}
            className="mx-auto mb-30 max-w-7xl"
            bodyClass="p-6 sm:p-8 lg:p-12"
            deco={
              <>
                <div className={PLANT_GLOW} />
                <CottonPlant className="absolute bottom-0 -left-10 w-[22rem] sm:w-[28rem] lg:w-[38rem]" />
              </>
            }
          >
            <div className="relative pt-4 sm:pt-6">
              <Reveal className="text-center">
                <SectionHead
                  badge="Industry Associations"
                  className="mb-14"
                  title={
                    <span id="memberships-heading">
                      Proud <span className="text-gradient-royal">member of</span>
                    </span>
                  }
                >
                  <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-t3 dark:text-white/70">
                    EB Global stands within the industry&apos;s most respected associations.
                  </p>
                </SectionHead>
              </Reveal>

              <Reveal delay={0.05}>
                <DarkCard
                  radius="2rem"
                  pad="1.5px"
                  hover="hover:shadow-2xl"
                  className="shadow-2xl shadow-[var(--royal-deep)]/30 dark:shadow-[#0b1a4a]/60"
                  line="via-white/0"
                >
                  <ul className="relative grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
                    <div className="aurora-blob pointer-events-none top-0 left-1/2 size-96 -translate-x-1/2 bg-[var(--royal-glow)]/20" />
                    {MEMBERSHIPS.map((mem) => (
                      <li
                        key={mem.abbr}
                        className="group relative flex flex-col items-center p-8 sm:p-10"
                      >
                        <div className="relative w-fit">
                          <div className="absolute inset-0 " />
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={imgSrc(mem.logo)}
                            alt={`${mem.name} (${mem.abbr}) logo`}
                            className="relative size-26 rounded-full bg-white object-contain p-1 transition-transform duration-500"
                            loading="lazy"
                            width={600}
                            height={600}
                          />
                        </div>
                        <p className="mt-8 font-display text-3xl font-extrabold tracking-tight text-white ">
                          {mem.abbr}
                        </p>
                        <p className="text-center mt-1 text-sm font-semibold text-white/90">{mem.name}</p>
                        <p className="mt-4 text-center text-sm leading-relaxed text-white/80">{mem.desc}</p>
                      </li>
                    ))}
                  </ul>
                </DarkCard>
              </Reveal>
            </div>
          </SectionPanel>
        </Reveal>

        {/* ───────── Contact ───────── */}
        <Reveal>
          <SectionPanel
            id="contact"
            alpha={0.7}
            lines={LINES_BOTTOM}
            className="mx-auto max-w-7xl"
            bodyClass="p-6 sm:p-8 lg:p-12"
            deco={
              <>
                <div className={PLANT_GLOW} />
                <CottonPlant className="absolute -bottom-6 -left-12 w-[22rem] sm:w-[28rem] lg:w-[34rem]" />
              </>
            }
          >
            <Reveal className="relative text-center">
              <SectionHead
                badge="Get In Touch"
                className="mb-12 pt-4 sm:mb-14 sm:pt-6"
                title={
                  <span id="contact-heading">
                    Let&apos;s start a <span className="text-gradient-royal">conversation</span>
                  </span>
                }
              >
                <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-t3 dark:text-white/70">
                  Our team is ready to build a lasting partnership with you, whether you are a global merchant or
                  a leading spinning mill.
                </p>
              </SectionHead>
            </Reveal>

            <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {CONTACT_ITEMS.map((item, i) => (
                <Reveal as="li" key={item.label} delay={i * 0.07} y={20} className="h-full">
                  <DarkCard
                    radius="var(--radius-3xl)"
                    pad="1.5px"
                    className="h-full"
                    innerClassName="p-6"
                    aurora={[
                      "-top-16 -right-16 size-32 bg-[var(--royal-glow)]/30 opacity-50 transition-opacity duration-300 group-hover:opacity-100",
                    ]}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-white via-sky-200 to-white transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none dark:from-amber-300 dark:to-amber-300"
                    />
                    <div className="relative">
                      <span className="relative flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <item.icon className="h-5 w-5 text-white" aria-hidden />
                        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20 ring-inset" />
                      </span>
                      <h3 className="mt-6 text-[10px] font-bold tracking-[0.22em] text-white/60 uppercase">{item.label}</h3>
                      {item.lines.map((line, j) =>
                        item.hrefs[j] ? (
                          <a
                            key={line}
                            href={item.hrefs[j]}
                            className="mt-1.5 flex items-center gap-1 text-[15px] font-semibold break-words text-white transition-colors hover:text-sky-200"
                          >
                            {line}
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                          </a>
                        ) : (
                          <p key={line} className="mt-1.5 text-[15px] font-semibold break-words text-white">
                            {line}
                          </p>
                        ),
                      )}
                    </div>
                  </DarkCard>
                </Reveal>
              ))}
            </ul>
          </SectionPanel>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── Page ───────────────────────────── */

export function Home() {
  return (
    <>
      <SharedDefs />
      <ScrollProgress />
      <div className="overflow-x-clip bg-background">
        <Hero />
        <About />
        <Excellence />
        <TeamProfile />
        <Logistics />
        <MarketingTeam />
        <MembershipsContact />
      </div>
    </>
  );
}
