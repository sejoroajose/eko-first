"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function JoinCta() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
  }

  return (
    <section id="join" className="relative overflow-hidden bg-gold py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(16,138,0,0.3), transparent 45%)",
        }}
      />
      <div className="container relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-dark">
            Darapo Eko Wa
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-ink-dark sm:text-[2.75rem]">
            Ó jẹ́ tiwa — better Lagos, our Lagos.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ink-dark/70">
            Add your voice to a movement of Lagosians building power,
            partnership, and progress from the ground up. Tell us where
            you&rsquo;re based and we&rsquo;ll bring the movement to you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-ink-dark p-8 sm:p-10">
            {status === "idle" ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Adetuji Adegoke"
                    className="rounded-lg border border-paper/15 bg-white/5 px-4 py-3 text-paper placeholder:text-paper/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ward" className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
                    LGA / Ward
                  </label>
                  <input
                    id="ward"
                    name="ward"
                    type="text"
                    required
                    placeholder="Ikeja, Alausa"
                    className="rounded-lg border border-paper/15 bg-white/5 px-4 py-3 text-paper placeholder:text-paper/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
                    Email or phone
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    required
                    placeholder="you@example.com"
                    className="rounded-lg border border-paper/15 bg-white/5 px-4 py-3 text-paper placeholder:text-paper/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink-dark transition-colors hover:bg-gold-light"
                >
                  Join the movement
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-start gap-3 py-6">
                <CheckCircle2 size={32} className="text-gold" />
                <p className="font-display text-xl font-semibold text-paper">
                  Ẹ ṣé — you&rsquo;re in.
                </p>
                <p className="text-paper/60">
                  Thank you for joining EKO-FIRST. A movement organizer will
                  reach out with next steps for your ward.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
