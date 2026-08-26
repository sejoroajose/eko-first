import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { AboutContent } from "@/components/about-content";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Àgbára · Ìdásílẹ̀ · Ìṣọ̀kan"
          title="About Eko-First Movement"
          subtitle="A people-centered movement building power, participation and progress for every Lagosian."
        />
        <AboutContent />
      </main>
      <SiteFooter />
    </>
  );
}
