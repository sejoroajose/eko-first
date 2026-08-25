import { CheckCircle2 } from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";

const PLEDGES = [
  {
    yoruba: "A fi agbára ẹ̀niyàn sí ọkàn",
    en: "We empower people",
  },
  {
    yoruba: "A kọ́ ọmọdé, a gbé ga fún ọ̀dọ́",
    en: "We educate the child, we honour the youth",
  },
  {
    yoruba: "A dá agbára ajọṣe mọ̀",
    en: "We promote economic power",
  },
  {
    yoruba: "A ṣe ìlú wa dára",
    en: "We build our communities",
  },
  {
    yoruba: "A nífẹ̀ẹ́ Eko — a ṣiṣẹ́ fún Eko",
    en: "We love Lagos — we work for Lagos",
  },
];

export function Commitments() {
  return (
    <section className="bg-ink-dark py-24 sm:py-32">
      <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Àgbára – Ìdásílẹ̀ – Ìṣọ̀kan
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-paper sm:text-[2.75rem]">
            What we&rsquo;re pledged to
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-paper/60">
            Empowerment. Development. Unity. Five commitments that guide
            every program EKO-FIRST runs across Lagos.
          </p>
        </Reveal>

        <RevealGroup className="flex flex-col divide-y divide-paper/10 border-t border-paper/10">
          {PLEDGES.map((p) => (
            <RevealItem
              key={p.en}
              className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-gold" />
                <p className="font-display text-lg italic text-gold-light">
                  {p.yoruba}
                </p>
              </div>
              <p className="pl-9 text-paper/70 sm:pl-0 sm:text-right">
                {p.en}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
