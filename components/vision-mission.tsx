import { Eye, Target } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const CARDS = [
  {
    icon: Eye,
    label: "Ojú-ìwòye",
    title: "Our Vision",
    body: "To build a Lagos where people are empowered, governance is responsible, and opportunities are accessible to all.",
  },
  {
    icon: Target,
    label: "Ète wa",
    title: "Our Mission",
    body: "To provide a platform that delivers empowerment, education, health, economic opportunity, and community development across all of Lagos.",
  },
];

export function VisionMission() {
  return (
    <section id="vision-mission" className="bg-ink py-24 sm:py-32">
      <div className="container">
        <Reveal className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Where we&rsquo;re headed
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-paper sm:text-[2.75rem]">
            Vision &amp; Mission
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-paper/10 bg-white/[0.03] p-8 sm:p-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <card.icon size={20} />
                </div>
                <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-light">
                  {card.label}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-paper">
                  {card.title}
                </h3>
                <p className="mt-4 leading-relaxed text-paper/65">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
