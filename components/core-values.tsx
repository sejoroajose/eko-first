import { Users, Sparkles, Handshake, Building2, Link2 } from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";

const VALUES = [
  {
    icon: Users,
    yoruba: "Ẹniyan",
    en: "People",
    body: "We are at the heart of all we do.",
  },
  {
    icon: Sparkles,
    yoruba: "Ìtẹ̀lẹ̀",
    en: "Empowerment",
    body: "We empower with knowledge and opportunities.",
  },
  {
    icon: Handshake,
    yoruba: "Iṣẹ́ Pẹ̀lú",
    en: "Partnership",
    body: "We collaborate, we build together.",
  },
  {
    icon: Building2,
    yoruba: "Ìdásílẹ̀",
    en: "Development",
    body: "We build sustainable communities.",
  },
  {
    icon: Link2,
    yoruba: "Ìṣọ̀kan",
    en: "Unity",
    body: "One Lagos, one people, one future.",
  },
];

export function CoreValues() {
  return (
    <section id="values" className="bg-paper py-24 sm:py-32">
      <div className="container">
        <Reveal className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-green">
            Àgbára wa
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-[2.75rem]">
            Our core values
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-5">
          {VALUES.map((v) => (
            <RevealItem key={v.en} className="bg-paper p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/10 text-green">
                <v.icon size={18} />
              </div>
              <p className="mt-5 font-display text-lg font-semibold text-ink">
                {v.en}
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-dark">
                {v.yoruba}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {v.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
