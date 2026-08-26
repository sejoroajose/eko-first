import lgasWithWards from "@/lib/data/lagos-lgas-wards.json";

export type LagosLga = keyof typeof lgasWithWards;

export const LAGOS_LGAS_WITH_WARDS: Record<string, string[]> = lgasWithWards;

export const LAGOS_DIVISIONS: Record<string, string[]> = {
  Ikeja: ["Ikeja", "Agege", "Ifako/Ijaye", "Alimosho"],
  Lagos: [
    "Lagos Island",
    "Lagos Mainland",
    "Surulere",
    "Apapa",
    "Ajeromi/Ifelodun",
    "Amuwo Odofin",
    "Oshodi/Isolo",
    "Mushin",
    "Shomolu",
    "Kosofe",
    "Eti-Osa",
  ],
  Ikorodu: ["Ikorodu"],
  Badagry: ["Badagary", "Ojo"],
  Epe: ["Epe", "Ibeju/Lekki"],
};

export function getLgasForDivision(division: string): string[] {
  return LAGOS_DIVISIONS[division] ?? [];
}

export function getWardsForLga(lga: string): string[] {
  return LAGOS_LGAS_WITH_WARDS[lga] ?? [];
}
