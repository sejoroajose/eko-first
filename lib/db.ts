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
