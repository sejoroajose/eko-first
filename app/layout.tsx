import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-src",
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-src",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Eko-First Movement | Lagos First. People Always.",
  description:
    "Eko-First Movement is a people-centered empowerment movement dedicated to lifting lives, building leaders, and strengthening communities across Lagos.",
  openGraph: {
    title: "Eko-First Movement | Lagos First. People Always.",
    description:
      "Agbara. Idasile. Isokan. Empowerment. Development. Unity. Join the movement building a Greater Lagos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
