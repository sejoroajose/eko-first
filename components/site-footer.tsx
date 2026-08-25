import { LogoMark } from "@/components/logo-mark";
import { SkylineSignature } from "@/components/skyline-signature";

const COLUMNS = [
  {
    title: "Movement",
    links: [
      { label: "About us", href: "#who-we-are" },
      { label: "Vision & mission", href: "#vision-mission" },
      { label: "Our values", href: "#values" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Education", href: "#what-we-do" },
      { label: "Youth empowerment", href: "#what-we-do" },
      { label: "Health", href: "#what-we-do" },
      { label: "Economic empowerment", href: "#what-we-do" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { label: "Join the movement", href: "#join" },
      { label: "Volunteer", href: "#join" },
      { label: "Partner with us", href: "#join" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink-dark pt-20">
      <div className="container relative grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <LogoMark tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
            One Eko — one people — one future. A people-centered empowerment
            movement dedicated to lifting lives, building leaders, and
            strengthening communities across Lagos.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {col.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container relative flex flex-col gap-4 border-t border-paper/10 py-7 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} EKO-FIRST Movement. Lagos, Nigeria.</p>
        <p>One Eko &middot; One People &middot; One Future</p>
      </div>

      <div className="relative h-16 opacity-60 sm:h-20">
        <SkylineSignature className="h-full w-full" lineColor="#32C76D" />
      </div>
    </footer>
  );
}
