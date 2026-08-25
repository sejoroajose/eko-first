import {
  GraduationCap,
  Briefcase,
  HeartPulse,
  TrendingUp,
  Home,
} from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";

const PROGRAMS = [
  {
    icon: GraduationCap,
    yoruba: "Ẹkọ & Ìmọ̀",
    title: "Education",
    body: "Scholarships, digital literacy training, and mentorship.",
  },
  {
    icon: Briefcase,
    yoruba: "Agbára Àjọṣe",
    title: "Youth Empowerment",
    body: "Jobs, entrepreneurship support, training and youth development.",
  },
  {
    icon: HeartPulse,
    yoruba: "Ìlera",
    title: "Health",
    body: "Health outreaches, wellness programs, mental health support.",
  },
  {
    icon: TrendingUp,
    yoruba: "Ìdàgbàsókè Ọrọ̀-ajé",
    title: "Economic Empowerment",
    body: "Support for SMEs, cooperatives, market women, artisans and traders.",
  },
  {
    icon: Home,
    yoruba: "Ìdásílẹ̀ Àwọn Àgbègbè",
    title: "Community Development",
    body: "Community projects, clean environment, security support, housing & more.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-green-dark py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Àwọn iṣẹ́ wa
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-paper sm:text-[2.75rem]">
              What we do
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-paper/65">
              Five programs, one purpose: putting power, knowledge, and
              opportunity within reach of every Lagosian.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <RevealItem
              key={p.title}
              className="group rounded-2xl border border-paper/10 bg-white/[0.04] p-8 transition-colors hover:border-gold/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald/20 text-emerald-light">
                <p.icon size={20} />
              </div>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.16em] text-emerald-light/80">
                {p.yoruba}
              </span>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-paper">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">
                {p.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
