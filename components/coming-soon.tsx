import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <SiteHeader />
      <main className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-green">
          Eko-First Movement
        </p>
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-md text-ink/70">
          This page is coming soon. Check back shortly.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
