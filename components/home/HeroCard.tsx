// components/home/HeroCard.tsx
"use client";

import Link from "next/link";

export interface HeroCardProps {
  icon: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  bgColor: string;
  isPrimary?: boolean;
}

export default function HeroCard({
  icon,
  tag,
  title,
  description,
  href,
  ctaLabel,
  bgColor,
  isPrimary = false,
}: HeroCardProps) {
  return (
    <article style={{
      background: "#fff",
      borderRadius: 16,
      border: "1px solid #e2e8f0",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "transform .2s ease, box-shadow .2s ease",
    }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0,120,215,.13)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Image / icon zone */}
      <div style={{
        height: 160,
        background: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 52,
        flexShrink: 0,
        position: "relative",
      }}>
        {icon}
        {isPrimary && (
          <span style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "var(--blue, #0078d7)",
            color: "#fff",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".5px",
            textTransform: "uppercase",
            padding: "3px 8px",
            borderRadius: 20,
          }}>
            Nouveau
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{
        padding: "20px 22px 22px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: 8,
      }}>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: ".8px",
          textTransform: "uppercase",
          color: "var(--blue, #0078d7)",
        }}>
          {tag}
        </span>

        <h3 style={{
          fontSize: 17,
          fontWeight: 800,
          color: "#1a1a2e",
          lineHeight: 1.3,
          margin: 0,
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: 13,
          color: "#5f6b7c",
          lineHeight: 1.6,
          margin: 0,
          flex: 1,
        }}>
          {description}
        </p>

        <Link
          href={href}
          style={{
            marginTop: 8,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 600,
            color: isPrimary ? "#fff" : "var(--blue, #0078d7)",
            background: isPrimary ? "var(--blue, #0078d7)" : "transparent",
            border: `1.5px solid var(--blue, #0078d7)`,
            padding: "8px 16px",
            borderRadius: 8,
            textDecoration: "none",
            transition: "background .15s, color .15s",
            alignSelf: "flex-start",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--blue, #0078d7)";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = isPrimary ? "var(--blue, #0078d7)" : "transparent";
            (e.currentTarget as HTMLElement).style.color = isPrimary ? "#fff" : "var(--blue, #0078d7)";
          }}
        >
          {ctaLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}