// app/about/page.tsx
// Placer ce fichier dans : smart-life-forever/app/about/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos — SMART LIFE FOREVER",
  description:
    "Fondée en 2018 à Ngaoundéré, SMART LIFE FOREVER est une entreprise camerounaise spécialisée en RH, communication, management de projets et formation entrepreneuriale.",
};

const expertise = [
  {
    icon: "👥",
    title: "Gestion des ressources humaines",
    desc: "Recrutement, formation et optimisation du capital humain.",
    color: "#e6f2fb",
    accent: "#0078d7",
  },
  {
    icon: "📣",
    title: "Publicité et communication",
    desc: "Élaboration de stratégies de communication innovantes.",
    color: "#e8f5e9",
    accent: "#2e7d32",
  },
  {
    icon: "🛒",
    title: "Commerce de vente directe",
    desc: "Vente transparente et directe pour garantir la satisfaction des consommateurs.",
    color: "#fff3e0",
    accent: "#e65100",
  },
  {
    icon: "📋",
    title: "Management des projets",
    desc: "Planification et suivi rigoureux des projets de nos clients.",
    color: "#f3e5f5",
    accent: "#6a1b9a",
  },
  {
    icon: "🎓",
    title: "Formation en création d'entreprise",
    desc: "Accompagnement des entrepreneurs dans la réalisation de leurs projets.",
    color: "#fce4ec",
    accent: "#c62828",
  },
];

const locations = [
  { city: "Ngaoundéré", note: "Siège social", primary: true },
  { city: "Tibati", note: "Antenne régionale", primary: false },
  { city: "Bertoua", note: "Antenne régionale", primary: false },
  { city: "Yaoundé", note: "Antenne capitale", primary: false },
  { city: "Garoua-Boulaï", note: "Antenne régionale", primary: false },
  { city: "Bafoussam", note: "Antenne régionale", primary: false },
];

const values = [
  { label: "Innovation", icon: "💡" },
  { label: "Excellence", icon: "⭐" },
  { label: "Engagement", icon: "🤝" },
  { label: "Éthique", icon: "⚖️" },
];

export default function AboutPage() {
  return (
    <main style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#f7f9fc", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, #0078d7 0%, #005a9e 100%)",
        color: "#fff",
        padding: "80px 32px 64px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Cercle décoratif */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 300, height: 300, borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -40,
          width: 200, height: 200, borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }} />

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.15)",
          borderRadius: 20, padding: "5px 14px",
          fontSize: 12, fontWeight: 600, letterSpacing: ".5px",
          marginBottom: 20, backdropFilter: "blur(6px)",
        }}>
          🇨🇲 Fondée en août 2018 · Ngaoundéré, Cameroun
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: 800, lineHeight: 1.15,
          margin: "0 0 16px",
          letterSpacing: "-1px",
        }}>
          À propos de<br />
          <span style={{ opacity: 0.9 }}>SMART LIFE FOREVER</span>
        </h1>

        <p style={{
          fontSize: 17, opacity: 0.85, maxWidth: 560,
          margin: "0 auto", lineHeight: 1.7,
        }}>
          Devenir un acteur clé dans des secteurs stratégiques au Cameroun —
          c'est l'ambition qui a guidé notre création et qui continue de nous animer.
        </p>

        {/* Stats */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 48, marginTop: 48, flexWrap: "wrap",
        }}>
          {[
            { num: "2018", label: "Année de fondation" },
            { num: "6", label: "Villes présentes" },
            { num: "5", label: "Domaines d'expertise" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 36, fontWeight: 800, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>

        {/* ── HISTOIRE ─────────────────────────────────────────── */}
        <section style={{ padding: "64px 0 48px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 48, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
                color: "#0078d7", textTransform: "uppercase", marginBottom: 10,
              }}>
                Notre histoire
              </div>
              <h2 style={{
                fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800,
                lineHeight: 1.2, color: "#1a1a2e", marginBottom: 20,
                letterSpacing: "-0.5px",
              }}>
                Une ambition claire<br />depuis le premier jour
              </h2>

              {/* Ligne de temps verticale */}
              <div style={{ position: "relative", paddingLeft: 28 }}>
                <div style={{
                  position: "absolute", left: 7, top: 6, bottom: 6,
                  width: 2, background: "#e2e8f0",
                }} />
                {[
                  { year: "2018", text: "Fondation de SMART LIFE FOREVER en tant qu'établissement à Ngaoundéré, avec une ambition claire : devenir un acteur clé dans des secteurs stratégiques." },
                  { year: "2019–21", text: "Expansion progressive vers de nouvelles villes camerounaises. Développement des offres de formation et de stages." },
                  { year: "Aujourd'hui", text: "Entreprise solide et polyvalente, SMART LIFE FOREVER continue de croître et de servir sa clientèle avec passion et dévouement." },
                ].map((item, i) => (
                  <div key={i} style={{ position: "relative", marginBottom: 28 }}>
                    <div style={{
                      position: "absolute", left: -28, top: 4,
                      width: 14, height: 14, borderRadius: "50%",
                      background: i === 2 ? "#0078d7" : "#fff",
                      border: "2px solid #0078d7",
                      zIndex: 1,
                    }} />
                    <div style={{
                      fontSize: 11, fontWeight: 700, color: "#0078d7",
                      letterSpacing: ".5px", marginBottom: 4,
                    }}>{item.year}</div>
                    <p style={{ fontSize: 14, color: "#5f6b7c", lineHeight: 1.7, margin: 0 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder + citation */}
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{
                background: "#e6f2fb",
                borderRadius: 16,
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                overflow: "hidden",
              }}>
                {/* Remplacer par : <Image src="/images/apropos.jpg" alt="SMART LIFE FOREVER" fill style={{objectFit:"cover"}} /> */}
                <div style={{ textAlign: "center", color: "#0078d7" }}>
                  <div style={{ fontSize: 48 }}>🏢</div>
                  <div style={{ fontSize: 12, marginTop: 8, opacity: 0.7 }}>
                    Remplacer par apropos.jpg
                  </div>
                </div>
              </div>

              {/* Citation */}
              <blockquote style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderLeft: "4px solid #0078d7",
                borderRadius: "0 12px 12px 0",
                padding: "20px 24px",
                margin: 0,
              }}>
                <p style={{
                  fontSize: 15, fontStyle: "italic",
                  color: "#1a1a2e", lineHeight: 1.7, margin: "0 0 12px",
                }}>
                  "Notre mission principale est de fournir des services de haute qualité
                  tout en favorisant une croissance durable."
                </p>
                <cite style={{
                  fontSize: 12, fontWeight: 600, color: "#0078d7",
                  fontStyle: "normal",
                }}>
                  — SMART LIFE FOREVER
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── DIRIGEANT ─────────────────────────────────────────── */}
        <section style={{
          background: "#fff",
          borderRadius: 20,
          border: "1px solid #e2e8f0",
          padding: "40px",
          marginBottom: 48,
          display: "flex",
          alignItems: "center",
          gap: 36,
          flexWrap: "wrap",
        }}>
          <div style={{
            width: 100, height: 100, borderRadius: "50%",
            background: "linear-gradient(135deg, #0078d7, #005a9e)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 40, flexShrink: 0,
          }}>
            👤
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
              color: "#0078d7", textTransform: "uppercase", marginBottom: 6,
            }}>
              Notre équipe dirigeante
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e", margin: "0 0 4px" }}>
              Boning Kamo
            </h3>
            <div style={{
              fontSize: 13, color: "#0078d7", fontWeight: 600, marginBottom: 12,
            }}>
              Manager Principal · SMART LIFE FOREVER
            </div>
            <p style={{ fontSize: 14, color: "#5f6b7c", lineHeight: 1.7, margin: 0 }}>
              Doté d'une vaste expérience dans la gestion, Boning Kamo joue un rôle fondamental
              dans le développement et la gestion de l'entreprise. Leader visionnaire et dévoué,
              il inspire son équipe à repousser les limites et à rechercher constamment des
              solutions novatrices.
            </p>
          </div>
        </section>

        {/* ── DOMAINES D'EXPERTISE ──────────────────────────────── */}
        <section style={{ paddingBottom: 48 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
              color: "#0078d7", textTransform: "uppercase", marginBottom: 8,
            }}>
              Nos domaines d'expertise
            </div>
            <h2 style={{
              fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800,
              color: "#1a1a2e", margin: 0, letterSpacing: "-0.5px",
            }}>
              Ce que nous faisons
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}>
            {expertise.map((item) => (
              <div key={item.title} style={{
                background: "#fff",
                borderRadius: 14,
                border: "1px solid #e2e8f0",
                padding: "24px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                transition: "box-shadow .2s, transform .2s",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,120,215,.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: item.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{
                    fontSize: 15, fontWeight: 700, color: "#1a1a2e",
                    margin: "0 0 6px",
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 13, color: "#5f6b7c", margin: 0, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── VALEURS ───────────────────────────────────────────── */}
        <section style={{
          background: "#0078d7",
          borderRadius: 20,
          padding: "40px",
          marginBottom: 48,
          textAlign: "center",
          color: "#fff",
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
            opacity: 0.75, textTransform: "uppercase", marginBottom: 8,
          }}>
            Ce qui nous guide
          </div>
          <h2 style={{
            fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800,
            margin: "0 0 32px", letterSpacing: "-0.5px",
          }}>
            Nos valeurs fondamentales
          </h2>
          <div style={{
            display: "flex", justifyContent: "center",
            gap: 20, flexWrap: "wrap",
          }}>
            {values.map((v) => (
              <div key={v.label} style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: 12,
                padding: "16px 28px",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.2)",
                minWidth: 120,
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{v.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{v.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── LOCALISATION ──────────────────────────────────────── */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
              color: "#0078d7", textTransform: "uppercase", marginBottom: 8,
            }}>
              Nos implantations
            </div>
            <h2 style={{
              fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800,
              color: "#1a1a2e", margin: 0, letterSpacing: "-0.5px",
            }}>
              Présents dans 6 villes au Cameroun
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
          }}>
            {locations.map((loc) => (
              <div key={loc.city} style={{
                background: loc.primary ? "#0078d7" : "#fff",
                color: loc.primary ? "#fff" : "#1a1a2e",
                border: `1px solid ${loc.primary ? "#0078d7" : "#e2e8f0"}`,
                borderRadius: 12,
                padding: "20px 16px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>📍</div>
                <div style={{
                  fontSize: 15, fontWeight: 700, marginBottom: 4,
                }}>
                  {loc.city}
                </div>
                <div style={{
                  fontSize: 12,
                  color: loc.primary ? "rgba(255,255,255,0.75)" : "#5f6b7c",
                }}>
                  {loc.note}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}