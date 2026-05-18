// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Accueil",   href: "/" },
  { label: "À propos",  href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Projets",   href: "/projects" },
  { label: "Équipe",    href: "/team" },
  { label: "Emploi",    href: "/careers" },
  { label: "Agenda",    href: "/calendar" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: "var(--nav-height)",
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}>

        {/* Logo */}
        <Link href="/" style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontWeight: 800,
          fontSize: 15,
          color: "var(--blue-dark)",
          letterSpacing: ".3px",
          textDecoration: "none",
          flexShrink: 0,
        }}>
          <span style={{
            width: 32, height: 32,
            borderRadius: 8,
            background: "var(--blue)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 14,
            fontWeight: 900,
          }}>S</span>
          SMART LIFE FOREVER
        </Link>

        {/* Liens desktop */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 11px",
                  borderRadius: 7,
                  fontSize: 13,
                  fontWeight: active ? 600 : 400,
                  color: active ? "var(--blue)" : "var(--text-secondary)",
                  background: active ? "var(--blue-light)" : "transparent",
                  textDecoration: "none",
                  transition: "background .15s, color .15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = "var(--blue-light)";
                    (e.currentTarget as HTMLElement).style.color = "var(--blue)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Contact */}
        <Link
          href="/contact"
          style={{
            flexShrink: 0,
            background: "var(--blue)",
            color: "#fff",
            padding: "8px 18px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "background .15s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--blue-dark)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--blue)";
          }}
        >
          Contact
        </Link>

        {/* Bouton burger mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 8,
            borderRadius: 8,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          className="burger-btn"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block",
              width: 22,
              height: 2,
              background: "var(--text)",
              borderRadius: 2,
              transition: "transform .2s, opacity .2s",
              transform: mobileOpen
                ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                : i === 1 ? "scaleX(0)"
                : "rotate(-45deg) translate(5px,-5px)"
                : "none",
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {mobileOpen && (
        <div style={{
          position: "absolute",
          top: "var(--nav-height)",
          left: 0,
          right: 0,
          background: "var(--white)",
          borderBottom: "1px solid var(--border)",
          padding: "12px 24px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          boxShadow: "var(--shadow-md)",
        }}>
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                  color: active ? "var(--blue)" : "var(--text)",
                  background: active ? "var(--blue-light)" : "transparent",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: 8,
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              background: "var(--blue)",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Contact
          </Link>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .burger-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}