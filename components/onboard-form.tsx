"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { LAGOS_LGAS_WITH_WARDS, getWardsForLga } from "@/lib/lagos-geo";

const LCDAS = Object.keys(LAGOS_LGAS_WITH_WARDS).sort();

const FIELD_CLASS =
  "rounded-lg border border-paper/15 bg-white/5 px-4 py-3 text-paper placeholder:text-paper/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-40";
const LABEL_CLASS =
  "text-xs font-medium uppercase tracking-[0.14em] text-paper/50";

type Status = "idle" | "submitting" | "done" | "error";

export function OnboardForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [lcda, setLcda] = useState("");
  const [ward, setWard] = useState("");

  const wards = useMemo(() => getWardsForLga(lcda), [lcda]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      lcda,
      ward,
      briefProfile: String(formData.get("briefProfile") ?? ""),
    };

    try {
      const res = await fetch("/api/onboard", {
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
    <section id="onboard" className="relative overflow-hidden bg-gold py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(16,138,0,0.3), transparent 45%)",
        }}
      />
      <div className="container relative grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-8">
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-ink-dark p-8 sm:p-10">
            {status === "done" ? (
              <div className="flex flex-col items-start gap-3 py-6">
                <CheckCircle2 size={32} className="text-gold" />
                <p className="font-display text-xl font-semibold text-paper">
                  Ẹ ṣé &mdash; we have your details.
                </p>
                <p className="text-paper/60">
                  Thank you for onboarding with EKO-FIRST. A movement organizer
                  will reach out with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className={LABEL_CLASS}>
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Adetuji Adegoke"
                    className={FIELD_CLASS}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className={LABEL_CLASS}>
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      minLength={7}
                      placeholder="0803 000 0000"
                      className={FIELD_CLASS}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className={LABEL_CLASS}>
                      Email{" "}
                      <span className="normal-case tracking-normal text-paper/30">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className={FIELD_CLASS}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lcda" className={LABEL_CLASS}>
                      LCDA
                    </label>
                    <select
                      id="lcda"
                      name="lcda"
                      required
                      value={lcda}
                      onChange={(e) => {
                        setLcda(e.target.value);
                        setWard("");
                      }}
                      className={FIELD_CLASS}
                    >
                      <option value="" disabled className="text-ink">
                        Select
                      </option>
                      {LCDAS.map((l) => (
                        <option key={l} value={l} className="text-ink">
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ward" className={LABEL_CLASS}>
                      Ward
                    </label>
                    <select
                      id="ward"
                      name="ward"
                      required
                      disabled={!lcda}
                      value={ward}
                      onChange={(e) => setWard(e.target.value)}
                      className={FIELD_CLASS}
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

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="briefProfile" className={LABEL_CLASS}>
                    Brief profile
                  </label>
                  <textarea
                    id="briefProfile"
                    name="briefProfile"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Tell us about yourself — your work, community role, and what you want to contribute."
                    className={`${FIELD_CLASS} resize-y`}
                  />
                </div>

                {status === "error" && error ? (
                  <p className="text-sm text-red-400">{error}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink-dark transition-colors hover:bg-gold-light disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting…" : "Submit my details"}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
