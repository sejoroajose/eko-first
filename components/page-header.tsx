import Image from "next/image";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden text-paper">
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

      <div className="absolute inset-0 bg-gradient-to-t from-ink-dark via-ink-dark/60 to-ink-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-dark/60 via-transparent to-transparent" />

      <div className="container relative flex min-h-[42vh] flex-col items-start justify-center py-20">
        {eyebrow ? (
          <span className="mb-5 inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-2xl text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/85">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
