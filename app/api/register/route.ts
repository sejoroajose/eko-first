import { NextResponse } from "next/server";
import { getLgasForDivision, getWardsForLga } from "@/lib/lagos-geo";
import { insertRegistration } from "@/lib/db";
import { sendAdminNotification, sendWelcomeEmail } from "@/lib/email";

export type MembershipType = "member" | "volunteer";

interface RegisterPayload {
  name: string;
  email: string;
  phone: string;
  membershipType: MembershipType;
  division: string;
  lga: string;
  ward: string;
}

function isValidPayload(body: unknown): body is RegisterPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 1 &&
    typeof b.email === "string" &&
    /\S+@\S+\.\S+/.test(b.email) &&
    typeof b.phone === "string" &&
    b.phone.trim().length >= 7 &&
    (b.membershipType === "member" || b.membershipType === "volunteer") &&
    typeof b.division === "string" &&
    b.division.trim().length > 0 &&
    typeof b.lga === "string" &&
    b.lga.trim().length > 0 &&
    typeof b.ward === "string" &&
    b.ward.trim().length > 0
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

  if (!getLgasForDivision(body.division).includes(body.lga)) {
    return NextResponse.json(
      { error: "LGA does not belong to the selected division." },
      { status: 400 }
    );
  }

  if (!getWardsForLga(body.lga).includes(body.ward)) {
    return NextResponse.json(
      { error: "Ward does not belong to the selected LGA." },
      { status: 400 }
    );
  }

  try {
    await insertRegistration(body);
  } catch (err) {
    console.error("Failed to save registration:", err);
    return NextResponse.json(
      { error: "Could not save registration. Please try again." },
      { status: 500 }
    );
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const emailResults = await Promise.allSettled([
    sendWelcomeEmail(body),
    ...(adminEmail ? [sendAdminNotification(adminEmail, body)] : []),
  ]);

  for (const result of emailResults) {
    if (result.status === "rejected") {
      console.error("Registration email failed to send:", result.reason);
    }
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
