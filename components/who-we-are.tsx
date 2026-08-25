import { Reveal } from "@/components/motion/reveal";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-paper py-24 sm:py-32">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-green">
            Ẹni tí a jẹ́ — Who we are
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-ink sm:text-[2.75rem]">
            A movement built by the people of Eko, for the people of Eko.
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/70">
            EKO-FIRST Movement is a people-centered empowerment movement
            dedicated to lifting lives, building leaders, and strengthening
            communities across Lagos.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative rounded-2xl bg-ink-dark px-8 py-10 text-paper sm:px-12 sm:py-14">
            <span className="absolute left-8 top-6 font-display text-6xl leading-none text-gold/40 sm:left-12">
              &ldquo;
            </span>
            <p className="relative font-display text-xl italic leading-relaxed text-gold sm:text-2xl">
              One Eko — one people — one future.
            </p>
            <div className="relative mt-8 h-px w-16 bg-gold/40" />
            <p className="relative mt-8 max-w-md text-[0.98rem] leading-relaxed text-paper/75">
              We are at the heart of every decision we make — organizing
              ordinary Lagosians around shared purpose so that power,
              knowledge, and opportunity move within reach of everyone, not
              just the few.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
