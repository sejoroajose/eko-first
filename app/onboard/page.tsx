import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { OnboardForm } from "@/components/onboard-form";

export const metadata: Metadata = {
  title: "Onboard | Eko-First Movement",
  description:
    "Share your details and a brief profile to be onboarded into the Eko-First Movement.",
};

export default function OnboardPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow=""
          title="Join The Movement"
          subtitle="Share your details and a short profile so we know your story, your ward and how best to work with you."
        />
        <OnboardForm />
      </main>
      <SiteFooter />
    </>
  );
}
