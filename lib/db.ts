import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set.");
  }
  return neon(url);
}

let bootstrapped = false;

async function ensureSchema(sql: NeonQueryFunction<false, false>) {
  if (bootstrapped) return;
  await sql`
    CREATE TABLE IF NOT EXISTS registrations (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      membership_type TEXT NOT NULL,
      division TEXT NOT NULL,
      lga TEXT NOT NULL,
      ward TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  bootstrapped = true;
}

export interface NewRegistration {
  name: string;
  email: string;
  phone: string;
  membershipType: string;
  division: string;
  lga: string;
  ward: string;
}

export async function insertRegistration(reg: NewRegistration) {
  const sql = getSql();
  await ensureSchema(sql);

  const rows = await sql`
    INSERT INTO registrations (name, email, phone, membership_type, division, lga, ward)
    VALUES (${reg.name}, ${reg.email}, ${reg.phone}, ${reg.membershipType}, ${reg.division}, ${reg.lga}, ${reg.ward})
    RETURNING id, created_at
  `;

  return rows[0] as { id: number; created_at: string };
}

let onboardingBootstrapped = false;

async function ensureOnboardingSchema(sql: NeonQueryFunction<false, false>) {
  if (onboardingBootstrapped) return;
  await sql`
    CREATE TABLE IF NOT EXISTS onboardings (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT NOT NULL,
      lcda TEXT NOT NULL,
      ward TEXT NOT NULL,
      brief_profile TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  onboardingBootstrapped = true;
}

export interface NewOnboarding {
  name: string;
  email?: string | null;
  phone: string;
  lcda: string;
  ward: string;
  briefProfile: string;
}

export async function insertOnboarding(entry: NewOnboarding) {
  const sql = getSql();
  await ensureOnboardingSchema(sql);

  const rows = await sql`
    INSERT INTO onboardings (name, email, phone, lcda, ward, brief_profile)
    VALUES (${entry.name}, ${entry.email ?? null}, ${entry.phone}, ${entry.lcda}, ${entry.ward}, ${entry.briefProfile})
    RETURNING id, created_at
  `;

  return rows[0] as { id: number; created_at: string };
}
