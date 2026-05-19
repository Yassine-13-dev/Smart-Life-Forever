// app/page.tsx  ← Page d'accueil principale
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCard, { type HeroCardProps } from "@/components/home/HeroCard";

export const metadata: Metadata = {
  title: "SMART LIFE FOREVER — Accueil",
  description:
    "Fondée en 2018 à Ngaoundéré, SMART LIFE FOREVER accompagne particuliers et entreprises au Cameroun en RH, communication, management et formation.",
};

const CARDS: HeroCardProps[] = [
  {
    icon: "🏢",
    tag: "Notre identité",
    title: "À propos de nous",
    description:
      "Découvrez l'histoire de SMART LIFE FOREVER, notre équipe dirigeante Boning Kamo, et notre vision depuis 2018.",
    href: "/about",
    ctaLabel: "En savoir plus",
    bgColor: "#e6f2fb",
  },
  {
    icon: "🎓",
    tag: "Carrières",
    title: "Formations & Stages",
    description:
      "Décrochez un emploi grâce à nos formations et stages dans votre domaine au Cameroun et ailleurs.",
    href: "/careers",
    ctaLabel: "Voir les offres",
    bgColor: "#e8f5e9",
  },
  {
    icon: "⚙️",
    tag: "Expertise",
    title: "Nos services",
    description:
      "RH, publicité, vente directe, management de projets et accompagnement entrepreneurial.",
    href: "/services",
    ctaLabel: "Explorer",
    bgColor: "#fff3e0",
  },
  {
    icon: "🚀",
    tag: "Vision",
    title: "Nos projets futurs",
    description:
      "Explorez les initiatives et projets en cours pour l'expansion de SMART LIFE FOREVER.",
    href: "/projects",
    ctaLabel: "Voir les projets",
    bgColor: "#f3e5f5",
  },
  {
    icon: "👥",
    tag: "L'équipe",
    title: "Notre équipe",
    description:
      "Rencontrez les talents derrière SMART LIFE FOREVER, dirigée par notre manager Boning Kamo.",
    href: "/team",
    ctaLabel: "Rencontrer l'équipe",
    bgColor: "#fce4ec",
  },
  {
    icon: "✉️",
    tag: "Nouveau",
    title: "Nous contacter",
    description:
      "+237 675 883 275 · boningkange@gmail.com · Ngaoundéré, Cameroun",
    href: "/contact",
    ctaLabel: "Écrire un message",
    bgColor: "#e3f2fd",
    isPrimary: true,
  },
];

const STATS = [
  { num: "2018", label: "Année de fondation" },
  { num: "6",    label: "Villes au Cameroun" },
  { num: "5",    label: "Domaines d'expertise" },
];

const EXPERTISE_PILLS = [
  "Ressources humaines",
  "Communication",
  "Vente directe",
  "Management",
  "Formation",
];

export default function HomePage() {
  return (
    <div style={{ background: "var(--bg, #f7f9fc)" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 90, 158, 0.85) 100%), url(/images/smart.png) center/cover",
        color: "#fff",
        padding: "72px 24px 56px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Logo en filigrane — fond du hero */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}>
          
        </div>

        {/* Cercles décoratifs */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -50, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }} />

        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(255,255,255,.15)",
          borderRadius: 20,
          padding: "5px 14px",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: ".4px",
          marginBottom: 20,
        }}>
          🇨🇲 Fondée en 2018 · Ngaoundéré, Cameroun
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 5.5vw, 52px)",
          fontWeight: 800,
          lineHeight: 1.1,
          margin: "0 0 18px",
          letterSpacing: "-1.5px",
        }}>
          Empowering people &amp;<br />
          <span style={{ opacity: .9 }}>businesses</span> across Cameroon
        </h1>

        <p style={{
          fontSize: 17,
          opacity: .85,
          maxWidth: 520,
          margin: "0 auto 36px",
          lineHeight: 1.7,
        }}>
          Ressources humaines, communication stratégique, management de projets
          et formation entrepreneuriale dans 6 villes.
        </p>

        {/* Pills domaines */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 48 }}>
          {EXPERTISE_PILLS.map((p) => (
            <span key={p} style={{
              background: "rgba(255,255,255,.15)",
              border: "1px solid rgba(255,255,255,.25)",
              borderRadius: 20,
              padding: "5px 14px",
              fontSize: 12,
              fontWeight: 500,
            }}>
              {p}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: 56, flexWrap: "wrap" }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 38, fontWeight: 900, lineHeight: 1, letterSpacing: "-1px" }}>{s.num}</div>
              <div style={{ fontSize: 12, opacity: .7, marginTop: 5, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GRILLE DE CARTES ─────────────────────────────────── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
            color: "var(--blue, #0078d7)", textTransform: "uppercase", marginBottom: 8,
          }}>
            Ce que nous offrons
          </div>
          <h2 style={{
            fontSize: "clamp(22px, 4vw, 30px)",
            fontWeight: 800,
            color: "#1a1a2e",
            letterSpacing: "-.5px",
            margin: 0,
          }}>
            Découvrez SMART LIFE FOREVER
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {CARDS.map((card) => (
            <HeroCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      {/* ── BANNIÈRE CTA ─────────────────────────────────────── */}
      <section style={{
        background: "#1a1a2e",
        color: "#fff",
        padding: "56px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
            color: "#b5d4f4", textTransform: "uppercase", marginBottom: 12,
          }}>
            Prenons contact
          </div>
          <h2 style={{
            fontSize: "clamp(22px, 4vw, 34px)",
            fontWeight: 800,
            margin: "0 0 16px",
            letterSpacing: "-.5px",
            lineHeight: 1.2,
          }}>
            Un projet ? Une question ?<br />Parlons-en.
          </h2>
          <p style={{ fontSize: 15, opacity: .75, margin: "0 0 32px", lineHeight: 1.7 }}>
            Notre équipe est disponible pour vous accompagner dans vos projets professionnels
            et personnels au Cameroun.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              background: "var(--blue, #0078d7)",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 9,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}>
              ✉️ Envoyer un message
            </Link>
            <Link href="/about" style={{
              background: "rgba(255,255,255,.1)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,.2)",
              padding: "12px 28px",
              borderRadius: 9,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}>
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}