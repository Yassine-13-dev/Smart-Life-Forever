import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
 
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
 
export const metadata: Metadata = {
  title: {
    default: "SMART LIFE FOREVER",
    template: "%s — SMART LIFE FOREVER",
  },
  description:
    "Fondée en 2018 à Ngaoundéré, SMART LIFE FOREVER est une entreprise camerounaise spécialisée en ressources humaines, communication, management de projets et formation entrepreneuriale.",
  keywords: ["Cameroun", "RH", "formation", "Ngaoundéré", "management", "entreprise"],
  authors: [{ name: "SMART LIFE FOREVER" }],
  openGraph: {
    title: "SMART LIFE FOREVER",
    description: "Empowering people and businesses across Cameroon since 2018.",
    locale: "fr_CM",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/smart.png", type: "image/png" },
    ],
    shortcut: "/images/smart.png",
    apple: "/images/smart.png",
  },
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
 
