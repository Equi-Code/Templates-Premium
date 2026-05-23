import { useState } from 'react'
// import { useApp } from '../context/AppContext'
import { useInView } from '../hooks/useInView'
import { useCart } from '../context/CartContext'

export function TemplateCard({ t, index, onDetails, }) {
    const [ref, vis] = useInView(0.08);
    const [hov, setHov] = useState(false);
    const isDark = t.tags.includes("Dark");
    const { addToCart } = useCart();
    


    return (
        <article
            ref={ref}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                borderRadius: 20, overflow: "hidden",
                background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.97)",
                border: `1px solid ${hov ? (isDark ? "rgba(108,71,255,0.35)" : "rgba(0,0,0,0.15)") : "rgba(255,255,255,0.07)"}`,
                display: "flex", flexDirection: "column",
                boxShadow: hov ? "0 28px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(108,71,255,0.15)" : "0 4px 24px rgba(0,0,0,0.3)",
                transform: vis ? (hov ? "translateY(-10px) scale(1.01)" : "translateY(0)") : "translateY(32px)",
                opacity: vis ? 1 : 0,
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.4s cubic-bezier(.34,1.1,.64,1), box-shadow 0.35s ease, border-color 0.25s`,
            }}
        >
            {/* Preview */}
            <div style={{
                height: 220, position: "relative", overflow: "hidden",
                background: t.bg, display: "flex", alignItems: "center", justifyContent: "center",
            }}>
                {/* Browser chrome */}
                <div style={{
                    position: "absolute", top: 14, left: 14, right: 14,
                    background: "rgba(255,255,255,0.06)", borderRadius: 8,
                    padding: "7px 12px", display: "flex", alignItems: "center", gap: 5,
                    backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.07)", zIndex: 2,
                }}>
                    {["#ff5f57", "#febc2e", "#28c840"].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />)}
                    <div style={{ flex: 1, height: 7, borderRadius: 4, background: "rgba(255,255,255,0.07)", marginLeft: 8 }} />
                </div>

                {/* Glow */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: `radial-gradient(ellipse at 50% 50%, ${t.accent}33, transparent 70%)`,
                    opacity: hov ? 1 : 0.3, transition: "opacity 0.4s",
                }} />

                {/* Icon */}
                <div style={{
                    fontSize: "3.8rem", zIndex: 1, lineHeight: 1,
                    fontFamily: t.slug === "syntax" ? "'JetBrains Mono',monospace" : "inherit",
                    color: t.slug === "syntax" ? t.accent : "inherit",
                    filter: `drop-shadow(0 0 24px ${t.accent}66)`,
                    transform: hov ? "scale(1.12) translateY(-4px)" : "scale(1)",
                    transition: "transform 0.4s cubic-bezier(.34,1.56,.64,1)",
                }}>{t.icon}</div>

                {/* Palette strip */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, display: "flex" }}>
                    {t.palette.map((c, i) => <span key={i} style={{ flex: 1, background: c }} />)}
                </div>

                {/* Hover overlay */}
                <div style={{
                    position: "absolute", inset: 0, zIndex: 3,
                    background: isDark ? "rgba(10,8,18,0.88)" : "rgba(248,247,255,0.92)",
                    backdropFilter: "blur(6px)",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: 5, padding: "48px 20px 20px",
                    opacity: hov ? 1 : 0, transition: "opacity 0.3s ease",
                }}>
                    <p style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: t.accent, marginBottom: 6, fontFamily: "'JetBrains Mono',monospace" }}>Includes</p>
                    {t.features.slice(0, 4).map(f => (
                        <div key={f} style={{ fontSize: ".75rem", color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ color: t.accent, fontSize: ".55rem" }}>▸</span>{f}
                        </div>
                    ))}
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Tags */}
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {t.tags.map(tag => (
                        <span key={tag} style={{
                            padding: "3px 9px", borderRadius: 6,
                            background: `${t.accent}18`, border: `1px solid ${t.accent}33`,
                            fontSize: ".68rem", fontWeight: 600, color: t.accent,
                            fontFamily: "'JetBrains Mono',monospace",
                        }}>{tag}</span>
                    ))}
                </div>

                {/* Title */}
                <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                        <h3 style={{
                            fontFamily: "'Syne',sans-serif", fontSize: "1.25rem",
                            fontWeight: 800, letterSpacing: "-.03em",
                            color: isDark ? "#f0eeff" : "#0a0812", margin: 0,
                        }}>{t.name}</h3>
                        <span style={{ fontSize: ".7rem", color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)", fontFamily: "'JetBrains Mono',monospace" }}>{t.niche}</span>
                    </div>
                    <p style={{ fontSize: ".8rem", color: isDark ? "rgba(240,238,255,0.4)" : "rgba(0,0,0,0.4)", margin: "4px 0 0", fontStyle: "italic" }}>{t.tagline}</p>
                </div>

                {/* Desc */}
                <p style={{ fontSize: ".84rem", color: isDark ? "rgba(240,238,255,0.55)" : "rgba(0,0,0,0.55)", lineHeight: 1.7, margin: 0 }}>{t.description}</p>

                {/* Font + palette */}
                <div style={{ display: "flex", flexDirection: "column", gap: 7, paddingTop: 10, borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: ".65rem", color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)", textTransform: "uppercase", letterSpacing: ".1em" }}>Type</span>
                        <span style={{ fontSize: ".72rem", color: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)", fontFamily: "'JetBrains Mono',monospace" }}>{t.font}</span>
                    </div>
                    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        <span style={{ fontSize: ".65rem", color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)", textTransform: "uppercase", letterSpacing: ".1em", marginRight: 2 }}>Palette</span>
                        {t.palette.map((c, i) => (
                            <div key={i} title={t.paletteNames[i]} style={{ width: 16, height: 16, borderRadius: 4, background: c, border: "1px solid rgba(255,255,255,0.15)" }} />
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 12 }}>
                    <div>
                        <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 800, color: t.accent }}>${t.price} USD</span>
                        <span style={{ fontSize: ".68rem", color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.3)", marginLeft: 6, fontFamily: "'JetBrains Mono',monospace" }}>{t.pages} pages</span>
                    </div>
                    <div style={{ display: "flex", gap: 7 }}>
                        <a href={t.demoUrl} target="_blank" rel="noopener" style={{
                            padding: "7px 14px", borderRadius: 8,
                            border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
                            fontSize: ".75rem", fontWeight: 600,
                            color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)",
                            textDecoration: "none", transition: "all .2s", fontFamily: "'DM Sans',sans-serif",
                        }}>Demo</a>
                        <button onClick={() => onDetails(t)} style={{
                            padding: "7px 14px", borderRadius: 8,
                            border: "1px solid rgba(108,71,255,0.3)",
                            background: "rgba(108,71,255,0.1)",
                            fontSize: ".75rem", fontWeight: 600, color: "#b39fff",
                            cursor: "pointer", transition: "all .2s", fontFamily: "'DM Sans',sans-serif",
                        }}>Details</button>

                        <button
                            onClick={() =>
                                addToCart({
                                    id: t.slug,
                                    title: t.name,
                                    price: t.price,
                                })
                            }
                            style={{
                                padding: "7px 14px",
                                borderRadius: 8,
                                border: "none",
                                background: "#6c47ff",
                                color: "#fff",
                                cursor: "pointer",
                                fontSize: ".75rem",
                                fontWeight: 700,
                            }}
                        >
                            🛒
                        </button>


                        <a href={`https://wa.me/+5491139259252?text=Hola%20Ezequiel%2C%20quiero%20el%20template%20${t.name}%20%F0%9F%9A%80`} target="_blank" rel="noopener" style={{
                            padding: "7px 14px", borderRadius: 8,
                            background: `linear-gradient(135deg,${t.accent},${t.accent}bb)`,
                            fontSize: ".75rem", fontWeight: 700,
                            color: t.textDark ? "#000" : "#fff",
                            textDecoration: "none", transition: "all .2s", fontFamily: "'DM Sans',sans-serif",
                            boxShadow: `0 4px 14px ${t.accent}44`,
                        }}>Buy →</a>
                    </div>
                </div>
            </div>

        </article>
    );
}
