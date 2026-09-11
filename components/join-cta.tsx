"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import {
  LAGOS_DIVISIONS,
  getLgasForDivision,
  getWardsForLga,
} from "@/lib/lagos-geo";

const DIVISIONS = Object.keys(LAGOS_DIVISIONS);

const MEMBERSHIP_TYPES = [
  {
    value: "member",
    title: "Eko-First Member",
    description: "General registered member.",
  },
  {
    value: "volunteer",
    title: "Eko-First Volunteer",
    description:
      "People actively involved in mobilisation and community activities.",
  },
] as const;

type MembershipType = (typeof MEMBERSHIP_TYPES)[number]["value"];
type Status = "idle" | "submitting" | "done" | "error";

export function JoinCta() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [membershipType, setMembershipType] = useState<MembershipType>("member");
  const [division, setDivision] = useState("");
  const [lga, setLga] = useState("");
  const [ward, setWard] = useState("");

  const lgas = useMemo(() => getLgasForDivision(division), [division]);
  const wards = useMemo(() => getWardsForLga(lga), [lga]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      membershipType,
      division,
      lga,
      ward,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
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
      <div className="container relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
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

          {/* <div className="mt-10 space-y-4">
            {MEMBERSHIP_TYPES.map((type) => (
              <div
                key={type.value}
                className="rounded-xl border border-ink-dark/15 bg-white/30 p-4"
              >
                <p className="font-display text-lg font-semibold text-ink-dark">
                  {type.title}
                </p>
                <p className="mt-1 text-sm text-ink-dark/70">
                  {type.description}
                </p>
              </div>
            ))}
          </div> */}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-ink-dark p-8 sm:p-10">
            {status === "done" ? (
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
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <fieldset className="flex flex-col gap-2">
                  <legend className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
                    Membership type
                  </legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {MEMBERSHIP_TYPES.map((type) => (
                      <label
                        key={type.value}
                        className={`cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                          membershipType === type.value
                            ? "border-gold bg-gold/10 text-paper"
                            : "border-paper/15 bg-white/5 text-paper/60 hover:border-paper/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="membershipType"
                          value={type.value}
                          checked={membershipType === type.value}
                          onChange={() => setMembershipType(type.value)}
                          className="sr-only"
                        />
                        {type.title}
                      </label>
                    ))}
                  </div>
                </fieldset>

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

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="rounded-lg border border-paper/15 bg-white/5 px-4 py-3 text-paper placeholder:text-paper/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="0803 000 0000"
                      className="rounded-lg border border-paper/15 bg-white/5 px-4 py-3 text-paper placeholder:text-paper/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="division" className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
                      Division
                    </label>
                    <select
                      id="division"
                      name="division"
                      required
                      value={division}
                      onChange={(e) => {
                        setDivision(e.target.value);
                        setLga("");
                        setWard("");
                      }}
                      className="rounded-lg border border-paper/15 bg-white/5 px-4 py-3 text-paper focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="" disabled className="text-ink">
                        Select
                      </option>
                      {DIVISIONS.map((d) => (
                        <option key={d} value={d} className="text-ink">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lga" className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
                      LGA / LCDA
                    </label>
                    <select
                      id="lga"
                      name="lga"
                      required
                      disabled={!division}
                      value={lga}
                      onChange={(e) => {
                        setLga(e.target.value);
                        setWard("");
                      }}
                      className="rounded-lg border border-paper/15 bg-white/5 px-4 py-3 text-paper focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-40"
                    >
                      <option value="" disabled className="text-ink">
                        Select
                      </option>
                      {lgas.map((l) => (
                        <option key={l} value={l} className="text-ink">
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ward" className="text-xs font-medium uppercase tracking-[0.14em] text-paper/50">
                      Ward
                    </label>
                    <select
                      id="ward"
                      name="ward"
                      required
                      disabled={!lga}
                      value={ward}
                      onChange={(e) => setWard(e.target.value)}
                      className="rounded-lg border border-paper/15 bg-white/5 px-4 py-3 text-paper focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-40"
                    >
                      <option value="" disabled className="text-ink">
                        Select
                      </option>
                      {wards.map((w) => (
                        <option key={w} value={w} className="text-ink">
                          {w}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {status === "error" && error ? (
                  <p className="text-sm text-red-400">{error}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink-dark transition-colors hover:bg-gold-light disabled:opacity-60"
                >
                  {status === "submitting" ? "Joining…" : "Join the movement"}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
