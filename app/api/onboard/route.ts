import { NextResponse } from "next/server";
import { getWardsForLga } from "@/lib/lagos-geo";
import { insertOnboarding } from "@/lib/db";
import {
  sendOnboardingAdminNotification,
  sendOnboardingWelcomeEmail,
} from "@/lib/email";

interface OnboardPayload {
  name: string;
  email?: string;
  phone: string;
  lcda: string;
  ward: string;
  briefProfile: string;
}

function isValidPayload(body: unknown): body is OnboardPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;

  // Email is optional, but must look like an email when provided.
  const emailOk =
    b.email === undefined ||
    b.email === null ||
    (typeof b.email === "string" &&
      (b.email.trim() === "" || /\S+@\S+\.\S+/.test(b.email)));

  return (
    typeof b.name === "string" &&
    b.name.trim().length > 1 &&
    emailOk &&
    typeof b.phone === "string" &&
    b.phone.trim().length >= 7 &&
    typeof b.lcda === "string" &&
    b.lcda.trim().length > 0 &&
    typeof b.ward === "string" &&
    b.ward.trim().length > 0 &&
    typeof b.briefProfile === "string" &&
    b.briefProfile.trim().length > 9
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Missing or invalid fields." },
      { status: 400 }
    );
  }

  if (!getWardsForLga(body.lcda).includes(body.ward)) {
    return NextResponse.json(
      { error: "Ward does not belong to the selected LCDA." },
      { status: 400 }
    );
  }

  const entry = {
    name: body.name.trim(),
    email: body.email?.trim() ? body.email.trim() : null,
    phone: body.phone.trim(),
    lcda: body.lcda,
    ward: body.ward,
    briefProfile: body.briefProfile.trim(),
  };

  try {
    await insertOnboarding(entry);
  } catch (err) {
    console.error("Failed to save onboarding:", err);
    return NextResponse.json(
      { error: "Could not save your details. Please try again." },
      { status: 500 }
    );
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const emailResults = await Promise.allSettled([
    sendOnboardingWelcomeEmail(entry),
    ...(adminEmail ? [sendOnboardingAdminNotification(adminEmail, entry)] : []),
  ]);

  for (const result of emailResults) {
    if (result.status === "rejected") {
      console.error("Onboarding email failed to send:", result.reason);
    }
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
