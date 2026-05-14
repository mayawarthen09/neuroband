import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ChevronRight,
  CircleDot,
  Headphones,
  Radio,
  Smartphone,
  TrendingUp,
  Watch,
  Waves
} from "lucide-react";

export default function App() {
  const features = [
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Brainwave awareness",
      text: "See focus, calm, and cognitive load signals translated into simple daily guidance."
    },
    {
      icon: <CircleDot className="h-6 w-6" />,
      title: "Focus tracking",
      text: "Measure your best mental windows and learn when to work, pause, or recover."
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: "Connected feedback",
      text: "A subtle wearable experience that keeps your mind, body, and habits in sync."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Elevation over time",
      text: "Build better routines with trend reports that show progress across focus and recovery."
    }
  ];

  const stats = [
    ["Focus", "96%"],
    ["Session", "45:00"],
    ["Calm", "High"],
    ["Load", "Low"]
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0A0F26] text-white">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,224,255,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(37,99,255,0.24),transparent_32%),linear-gradient(180deg,rgba(10,15,38,0.2),#0A0F26_82%)]" />
        <div className="absolute left-1/2 top-28 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#2563FF]/10 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
          <a href="#top" className="flex items-center gap-4">
            <NeuroBandMark size="small" />
            <div>
              <p className="font-mono text-xl font-semibold uppercase tracking-[0.36em] text-white">
                NeuroBand
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.38em] text-[#00E0FF]">
                Tune your mind
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-9 font-mono text-xs uppercase tracking-[0.24em] text-[#A5B4C7] md:flex">
            <a href="#features" className="hover:text-[#00E0FF]">
              Features
            </a>
            <a href="#app" className="hover:text-[#00E0FF]">
              App
            </a>
            <a href="#waitlist" className="hover:text-[#00E0FF]">
              Waitlist
            </a>
          </div>

          <a
            href="#waitlist"
            className="rounded-full border border-[#00E0FF]/40 bg-[#00E0FF]/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#00E0FF] hover:bg-[#00E0FF]/20"
          >
            Early access
          </a>
        </nav>

        <div
          id="top"
          className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-12 md:grid-cols-[1.05fr_0.95fr] md:pb-32 md:pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#00E0FF]/25 bg-[#00E0FF]/8 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#00E0FF] shadow-[0_0_28px_rgba(0,224,255,0.18)]">
              <span className="h-2 w-2 rounded-full bg-[#00E0FF] shadow-[0_0_16px_#00E0FF]" />
              Brainwaves • Focus • Wearable
            </div>

            <h1 className="max-w-4xl font-mono text-5xl font-semibold uppercase leading-[0.95] tracking-[0.18em] text-white md:text-7xl">
              Tune your mind. Elevate your life.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A5B4C7]">
              NeuroBand is a sleek neurotech wearable designed to help you
              understand focus, stress, and recovery through real-time
              brainwave-inspired insights.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-[#00E0FF] px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#0A0F26] shadow-[0_0_32px_rgba(0,224,255,0.28)] hover:bg-white"
              >
                Join waitlist <ChevronRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-white hover:bg-white/10"
              >
                Explore tech
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-[#00E0FF]/12 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <NeuroBandMark size="small" />
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A5B4C7]">
                    Live session
                  </span>
                </div>
                <span className="rounded-full border border-[#00E0FF]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#00E0FF]">
                  Active
                </span>
              </div>

              <div className="flex justify-center py-8">
                <NeuroBandMark size="hero" />
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#071126] p-6">
                <div className="mb-5 flex items-end justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#A5B4C7]">
                      Focus
                    </p>
                    <p className="mt-2 text-5xl font-semibold text-white">
                      96%
                    </p>
                    <p className="mt-1 text-sm text-[#00E0FF]">Excellent</p>
                  </div>
                  <Activity className="h-10 w-10 text-[#00E0FF]" />
                </div>

                <div className="h-20 overflow-hidden rounded-2xl border border-[#00E0FF]/20 bg-[#00E0FF]/5 p-3">
                  <svg viewBox="0 0 420 88" className="h-full w-full" fill="none">
                    <path
                      d="M0 50 C 22 28, 44 28, 66 50 S 110 72, 132 50 S 176 28, 198 50 S 242 72, 264 50 S 308 28, 330 50 S 374 72, 420 42"
                      stroke="#00E0FF"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 50 C 22 28, 44 28, 66 50 S 110 72, 132 50 S 176 28, 198 50 S 242 72, 264 50 S 308 28, 330 50 S 374 72, 420 42"
                      stroke="#2563FF"
                      strokeWidth="12"
                      strokeLinecap="round"
                      opacity="0.18"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {stats.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A5B4C7]">
                      {label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 border-b border-white/10 pb-10 md:grid-cols-6">
          {[
            [<Activity className="h-5 w-5" />, "Brainwaves"],
            [<CircleDot className="h-5 w-5" />, "Focus"],
            [<Radio className="h-5 w-5" />, "Connection"],
            [<Headphones className="h-5 w-5" />, "Neurotech"],
            [<Watch className="h-5 w-5" />, "Wearable"],
            [<TrendingUp className="h-5 w-5" />, "Elevation"]
          ].map(([icon, label]) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#00E0FF]"
            >
              {icon}
              {label}
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-[0.32em] text-[#00E0FF]">
            Core system
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Designed around clarity, connection, and control.
          </h2>
          <p className="mt-5 leading-8 text-[#A5B4C7]">
            The visual identity is clean, futuristic, and premium: deep navy
            surfaces, electric cyan accents, and signal-inspired motion
            throughout.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] text-white shadow-xl transition hover:border-[#00E0FF]/40 hover:bg-[#00E0FF]/5"
            >
              <div className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00E0FF]/20 bg-[#00E0FF]/10 text-[#00E0FF] shadow-[0_0_24px_rgba(0,224,255,0.12)]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#A5B4C7]">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="app"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-xl">
          <Smartphone className="h-10 w-10 text-[#00E0FF]" />
          <p className="mt-8 font-mono text-sm uppercase tracking-[0.32em] text-[#00E0FF]">
            Companion app
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Your focus dashboard, simplified.
          </h2>
          <p className="mt-5 leading-8 text-[#A5B4C7]">
            NeuroBand turns complex signals into clean visuals, readiness
            scores, and micro-prompts that help users tune their day.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [
              "Morning readiness",
              "Start each day with a clear snapshot of mental energy and recovery."
            ],
            [
              "Focus sessions",
              "Track deep work windows and see when your attention is strongest."
            ],
            [
              "Stress alerts",
              "Receive gentle haptic nudges before overload turns into burnout."
            ],
            [
              "Trend reports",
              "Understand long-term patterns across sleep, stress, and performance."
            ]
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-[#071126] p-6"
            >
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#A5B4C7]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#00E0FF]/20 bg-[#00E0FF]/8 p-10 shadow-[0_0_60px_rgba(0,224,255,0.12)] md:p-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#00E0FF]/20 blur-3xl" />

          <div className="relative">
            <div className="mb-8 flex justify-center">
              <NeuroBandMark size="medium" />
            </div>

            <p className="font-mono text-sm uppercase tracking-[0.32em] text-[#00E0FF]">
              Reserve early access
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Be first to wear the future of focus.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#A5B4C7]">
              Join the NeuroBand waitlist for launch updates, beta testing
              opportunities, and founder-only access.
            </p>

            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-h-12 flex-1 rounded-full border border-white/10 bg-[#0A0F26]/80 px-5 text-white placeholder:text-[#A5B4C7] outline-none focus:ring-2 focus:ring-[#00E0FF]"
              />

              <button
                type="button"
                className="min-h-12 rounded-full border-0 bg-[#00E0FF] px-8 font-mono text-xs uppercase tracking-[0.22em] text-[#0A0F26] hover:bg-white"
              >
                Join waitlist
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function NeuroBandMark({ size = "medium" }) {
  const dimensions = {
    small: "h-10 w-16",
    medium: "h-20 w-32",
    hero: "h-48 w-72"
  }[size];

  return (
    <div
      className={`relative ${dimensions} flex items-center justify-center`}
      aria-label="NeuroBand signal mark"
    >
      <span className="absolute h-4 w-4 rounded-full bg-[#64D9FF] shadow-[0_0_28px_rgba(0,224,255,0.95)]" />
      <span className="absolute h-16 w-16 rounded-full border-l-2 border-r-2 border-[#00E0FF] opacity-95" />
      <span className="absolute h-24 w-24 rounded-full border-l-2 border-r-2 border-[#16A8FF] opacity-80" />
      <span className="absolute h-32 w-32 rounded-full border-l-2 border-r-2 border-[#2563FF] opacity-70" />
      <span className="absolute h-40 w-40 rounded-full border-l-2 border-r-2 border-[#2563FF] opacity-45" />
    </div>
  );
}