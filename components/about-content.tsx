import Image from "next/image";
import { Users, TrendingUp, Vote, GraduationCap, Handshake } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const LEADERS = [
  {
    name: "Ààrẹ Laleye Oladipupo. (HON)",
    role: "Founder",
    image: "/founder.jpg",
  },
  {
    name: "Soda Oluwaseyi Oyeyinka",
    role: "Co-Founder",
    image: "/co-founder.jpg",
  },
];

const PILLARS = [
  {
    icon: Users,
    title: "People",
    body: "Putting citizens and communities at the centre of political engagement.",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    body: "Supporting ideas, policies and initiatives that move Lagos forward.",
  },
  {
    icon: Vote,
    title: "Participation",
    body: "Encouraging responsible participation in the democratic process.",
  },
  {
    icon: GraduationCap,
    title: "Youth",
    body: "Creating opportunities for young Lagosians to participate in leadership and public affairs.",
  },
  {
    icon: Handshake,
    title: "Community",
    body: "Building stronger connections between communities and decision-makers.",
  },
];

export function AboutContent() {
  return (
    <>
      <section className="bg-paper py-24 sm:py-32">
        <div className="container grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-green">
              Our Vision
            </span>
            <p className="mt-4 text-balance font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              To build a united, prosperous and politically conscious Lagos
              where every community has a voice and every citizen has a
              stake in the future.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-green">
              Our Mission
            </span>
            <p className="mt-4 text-balance font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              To create a structured grassroots platform for civic
              participation, leadership development, community engagement
              and constructive political dialogue across Lagos State.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-emerald-dark/[0.03] py-24 sm:py-32">
        <div className="container">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-green">
              Our Five Pillars
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-[2.75rem]">
              What we stand on
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {PILLARS.map((p) => (
              <RevealItem key={p.title} className="bg-paper p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/10 text-green">
                  <p.icon size={18} />
                </div>
                <p className="mt-5 font-display text-lg font-semibold text-ink">
                  {p.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {p.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-paper py-24 sm:py-32">
        <div className="container">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-green">
              Our Leadership
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-[2.75rem]">
              Founder &amp; Co-Founder
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 sm:max-w-2xl">
            {LEADERS.map((leader) => (
              <RevealItem key={leader.role} className="text-center sm:text-left">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-ink/5">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 font-display text-xl font-semibold text-ink">
                  {leader.name}
                </p>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-green">
                  {leader.role}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-dark py-24 text-paper sm:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(255,186,51,0.18), transparent 45%)",
          }}
        />
        <div className="container relative max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Our Core Message
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Eko First.
            </h2>
            <p className="mt-6 text-balance text-lg leading-relaxed text-paper/80">
              Because Lagos deserves people who understand Lagos, believe in
              Lagos and are prepared to work for Lagos.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-16 border-t border-paper/15 pt-10">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Brand Slogan
            </span>
            <p className="mt-3 font-display text-2xl font-semibold italic text-gold-light sm:text-3xl">
              &ldquo;Lagos first. People always.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Secondary Campaign Line
            </span>
            <p className="mt-3 text-lg font-medium text-paper/85">
              &ldquo;Eko First. Eko Stronger.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
