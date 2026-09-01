import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { JoinCta } from "@/components/join-cta";

export default function GetInvolvedPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Darapo Eko Wa"
          title="Get Involved"
          subtitle="Join the movement building power, participation and progress for every Lagosian."
        />
        <JoinCta />
      </main>
      <SiteFooter />
    </>
  );
}
