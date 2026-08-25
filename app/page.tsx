import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { WhoWeAre } from "@/components/who-we-are";
import { VisionMission } from "@/components/vision-mission";
import { CoreValues } from "@/components/core-values";
import { WhatWeDo } from "@/components/what-we-do";
import { Commitments } from "@/components/commitments";
import { JoinCta } from "@/components/join-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhoWeAre />
        <VisionMission />
        <CoreValues />
        <WhatWeDo />
        <Commitments />
        <JoinCta />
      </main>
      <SiteFooter />
    </>
  );
}
