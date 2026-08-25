"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export function Hero() {
  const reduced = useReducedMotion();
  const item = {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="top" className="relative isolate overflow-hidden text-paper">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Aerial view of Lagos Marina and the Civic Centre skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-dark via-ink-dark/50 to-ink-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-dark/55 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-dark/50 via-ink-dark/10 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container relative flex min-h-[92vh] flex-col items-start justify-center py-28"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm"
        >
          Àgbára · Ìdásílẹ̀ · Ìṣọ̀kan
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-3xl text-balance font-display text-[2.75rem] font-semibold leading-[1.05] sm:text-6xl lg:text-[4.5rem]"
        >
          Lagos first.
          <br />
          <span className="italic text-gold">People always.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-lg leading-relaxed text-paper/85"
        >
          <em className="not-italic text-gold-light">
            &ldquo;A gbára ẹ̀niyàn, a kọ́ ìdásílẹ̀, a ṣiṣẹ́ fún Eko.&rdquo;
          </em>{" "}
          — Empowering people. Building development. Working for Lagos.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink-dark shadow-lg shadow-gold/20 transition-all hover:bg-gold-light"
          >
            Join the movement
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#what-we-do"
            className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-semibold text-paper backdrop-blur-sm transition-colors hover:border-paper/50 hover:bg-white/5"
          >
            <PlayCircle size={16} />
            See what we do
          </a>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-paper/15 pt-8"
        >
          {[
            ["5", "Core values in action"],
            ["4", "Focus programs across Lagos"],
            ["1", "Movement — One Eko, one future"],
          ].map(([n, label]) => (
            <div key={label as string}>
              <dt className="font-display text-3xl font-semibold text-gold">{n}</dt>
              <dd className="mt-1 text-xs leading-snug text-paper/60">{label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
