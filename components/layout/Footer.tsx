// components/layout/Footer.tsx
import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil",   href: "/" },
      { label: "À propos",  href: "/about" },
      { label: "Services",  href: "/services" },
      { label: "Projets",   href: "/projects" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "Notre équipe", href: "/team" },
      { label: "Emploi & Stages", href: "/careers" },
      { label: "Agenda",       href: "/calendar" },
      { label: "Politique de confidentialité", href: "/privacy" },
    ],
  },
];

const LOCATIONS = [
  "Ngaoundéré", "Tibati", "Bertoua",
  "Yaoundé", "Garoua-Boulaï", "Bafoussam",
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--blue-darker, #003f7a)",
      color: "#fff",
    }}>
      {/* Corps principal */}
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "52px 24px 40px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: 40,
      }}
        className="footer-grid"
      >
        {/* Brand + contact */}
        <div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}>
            <span style={{
              width: 36, height: 36,
              borderRadius: 9,
              background: "var(--blue)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 16,
              flexShrink: 0,
            }}>S</span>
            <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: ".3px" }}>
              SMART LIFE FOREVER
            </span>
          </div>

          <p style={{
            fontSize: 13,
            opacity: 0.75,
            lineHeight: 1.7,
            marginBottom: 20,
            maxWidth: 280,
          }}>
            Empowering people and businesses across Cameroon since 2018.
          </p>

          {/* Contacts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { icon: "📞", text: "+237 675 883 275", href: "tel:+237675883275" },
              { icon: "📞", text: "+237 697 085 515", href: "tel:+237697085515" },
              { icon: "✉️", text: "boningkange@gmail.com", href: "mailto:boningkange@gmail.com" },
              { icon: "📍", text: "Ngaoundéré, Cameroun", href: "/about#localisations" },
            ].map((c) => (
              <Link
                key={c.text}
                href={c.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  opacity: 0.85,
                  textDecoration: "none",
                  color: "#fff",
                  transition: "opacity .15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              >
                <span style={{ fontSize: 15 }}>{c.icon}</span>
                {c.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Colonnes de liens */}
        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h4 style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              opacity: 0.6,
              marginBottom: 16,
            }}>
              {col.title}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: 13,
                      opacity: 0.8,
                      color: "#fff",
                      textDecoration: "none",
                      transition: "opacity .15s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.8"; }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Villes */}
        <div>
          <h4 style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: 16,
          }}>
            Nos villes
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {LOCATIONS.map((city) => (
              <span key={city} style={{
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Barre de bas */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <p style={{ fontSize: 12, opacity: 0.45, textAlign: "center" }}>
          © {new Date().getFullYear()} SMART LIFE FOREVER. Tous droits réservés.
        </p>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}