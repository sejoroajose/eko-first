import { Pingram } from "pingram";

const FROM_NAME = "Eko-First Movement";
const FROM_ADDRESS = process.env.PINGRAM_FROM_ADDRESS ?? "hello@ekofirst.org";

function getClient() {
  const apiKey = process.env.PINGRAM_API_KEY;
  if (!apiKey) {
    throw new Error("PINGRAM_API_KEY is not set.");
  }
  return new Pingram({ apiKey });
}

export interface RegistrationForEmail {
  name: string;
  email: string;
  phone: string;
  membershipType: string;
  division: string;
  lga: string;
  ward: string;
}

const MEMBERSHIP_LABELS: Record<string, string> = {
  member: "Eko-First Member",
  volunteer: "Eko-First Volunteer",
};

export async function sendWelcomeEmail(reg: RegistrationForEmail) {
  const pingram = getClient();
  const membershipLabel = MEMBERSHIP_LABELS[reg.membershipType] ?? reg.membershipType;

  await pingram.email.send({
    type: "welcome_email",
    to: reg.email,
    subject: "Welcome to Eko-First Movement",
    fromName: FROM_NAME,
    fromAddress: FROM_ADDRESS,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #1E3E3A;">
        <h1 style="color: #108A00;">Ẹ ṣé, ${reg.name}!</h1>
        <p>Thank you for joining the Eko-First Movement as a <strong>${membershipLabel}</strong>.</p>
        <p>You're now part of a movement of Lagosians in <strong>${reg.ward}</strong>, ${reg.lga} LGA (${reg.division} Division) working towards a united, prosperous Lagos.</p>
        <p>A movement organizer will reach out with next steps for your ward soon.</p>
        <p style="margin-top: 24px; font-weight: 600;">Lagos first. People always.</p>
      </div>
    `,
  });
}

export async function sendAdminNotification(
  adminEmail: string,
  reg: RegistrationForEmail
) {
  const pingram = getClient();
  const membershipLabel = MEMBERSHIP_LABELS[reg.membershipType] ?? reg.membershipType;

  await pingram.email.send({
    type: "admin_registration_notification",
    to: adminEmail,
    subject: `New registration: ${reg.name} (${membershipLabel})`,
    fromName: FROM_NAME,
    fromAddress: FROM_ADDRESS,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #1E3E3A;">
        <h2>New Eko-First registration</h2>
        <ul>
          <li><strong>Name:</strong> ${reg.name}</li>
          <li><strong>Email:</strong> ${reg.email}</li>
          <li><strong>Phone:</strong> ${reg.phone}</li>
          <li><strong>Membership type:</strong> ${membershipLabel}</li>
          <li><strong>Division:</strong> ${reg.division}</li>
          <li><strong>LGA:</strong> ${reg.lga}</li>
          <li><strong>Ward:</strong> ${reg.ward}</li>
        </ul>
      </div>
    `,
  });
}
