import { useEffect } from "react";


export function DetailModal({ t, onClose }) {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const h = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", h);
        return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", h); };
    }, [onClose]);

    if (!t) return null;

    return (
        <div style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
            animation: "modalFadeIn 0.3s ease",
        }}>
            {/* Backdrop */}
            <div onClick={onClose} style={{
                position: "absolute", inset: 0,
                background: "rgba(4,3,12,0.88)", backdropFilter: "blur(16px)",
            }} />

            {/* Modal */}
            <div style={{
                position: "relative", zIndex: 1,
                width: "100%", maxWidth: 780,
                maxHeight: "90vh", overflowY: "auto",
                background: "#0c0b18",
                border: "1px solid rgba(108,71,255,0.25)",
                borderRadius: 24,
                boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(108,71,255,0.1)",
                animation: "modalSlideUp 0.35s cubic-bezier(.34,1.2,.64,1)",
            }}>
                {/* Modal header */}
                <div style={{
                    height: 260, background: t.bg, position: "relative",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "24px 24px 0 0", overflow: "hidden",
                }}>
                    <div style={{
                        position: "absolute", inset: 0,
                        background: `radial-gradient(ellipse at 50% 50%, ${t.accent}33, transparent 65%)`,
                    }} />
                    <div style={{
                        fontSize: "5rem", zIndex: 1,
                        fontFamily: t.slug === "syntax" ? "'JetBrains Mono',monospace" : "inherit",
                        color: t.slug === "syntax" ? t.accent : "inherit",
                        filter: `drop-shadow(0 0 40px ${t.accent}88)`,
                    }}>{t.icon}</div>
                    {/* Palette */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, display: "flex" }}>
                        {t.palette.map((c, i) => <span key={i} style={{ flex: 1, background: c }} />)}
                    </div>
                    {/* Close */}
                    <button onClick={onClose} style={{
                        position: "absolute", top: 16, right: 16,
                        width: 36, height: 36, borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.7)", fontSize: "1.1rem",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>×</button>
                </div>

                {/* Modal body */}
                <div style={{ padding: "32px 36px 36px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
                        <div>
                            <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                                {t.tags.map(tag => (
                                    <span key={tag} style={{
                                        padding: "3px 9px", borderRadius: 6,
                                        background: `${t.accent}18`, border: `1px solid ${t.accent}33`,
                                        fontSize: ".68rem", fontWeight: 600, color: t.accent, fontFamily: "'JetBrains Mono',monospace",
                                    }}>{tag}</span>
                                ))}
                            </div>
                            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "2rem", fontWeight: 800, color: "#f0eeff", letterSpacing: "-.04em", margin: 0 }}>{t.name}</h2>
                            <p style={{ color: "rgba(240,238,255,0.4)", fontSize: ".88rem", marginTop: 4, fontStyle: "italic" }}>{t.niche}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "2.2rem", fontWeight: 800, color: t.accent }}>${t.price}</div>
                            <div style={{ fontSize: ".72rem", color: "rgba(240,238,255,0.3)", fontFamily: "'JetBrains Mono',monospace" }}>one-time · full source</div>
                        </div>
                    </div>

                    <p style={{ fontSize: ".92rem", color: "rgba(240,238,255,0.55)", lineHeight: 1.8, marginBottom: 28 }}>{t.description}</p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
                        {/* Included pages */}
                        <div style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14 }}>
                            <div style={{ fontSize: ".68rem", color: "rgba(240,238,255,0.3)", letterSpacing: ".12em", textTransform: "uppercase", fontFamily: "'JetBrains Mono',monospace", marginBottom: 12 }}>Included sections</div>
                            {t.features.map(f => (
                                <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".82rem", color: "rgba(240,238,255,0.6)", marginBottom: 7 }}>
                                    <span style={{ color: t.accent, fontSize: ".6rem" }}>▸</span>{f}
                                </div>
                            ))}
                        </div>
                        {/* Tech + details */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            <div style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14 }}>
                                <div style={{ fontSize: ".68rem", color: "rgba(240,238,255,0.3)", letterSpacing: ".12em", textTransform: "uppercase", fontFamily: "'JetBrains Mono',monospace", marginBottom: 12 }}>Technologies</div>
                                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                                    {t.tech.map(tech => (
                                        <span key={tech} style={{
                                            padding: "3px 9px", borderRadius: 6, fontSize: ".72rem", fontWeight: 600,
                                            background: "rgba(108,71,255,0.1)", border: "1px solid rgba(108,71,255,0.2)", color: "#b39fff",
                                            fontFamily: "'JetBrains Mono',monospace",
                                        }}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, flex: 1 }}>
                                <div style={{ fontSize: ".68rem", color: "rgba(240,238,255,0.3)", letterSpacing: ".12em", textTransform: "uppercase", fontFamily: "'JetBrains Mono',monospace", marginBottom: 12 }}>Details</div>
                                {[["Typography", t.font], ["Pages", `${t.pages} sections`], ["Responsive", "✓ Mobile-first"], ["License", "Single use"]].map(([k, v]) => (
                                    <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: ".8rem", marginBottom: 6 }}>
                                        <span style={{ color: "rgba(240,238,255,0.3)" }}>{k}</span>
                                        <span style={{ color: "rgba(240,238,255,0.65)", fontFamily: "'JetBrains Mono',monospace", fontSize: ".75rem" }}>{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Palette display */}
                    <div style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, marginBottom: 28 }}>
                        <div style={{ fontSize: ".68rem", color: "rgba(240,238,255,0.3)", letterSpacing: ".12em", textTransform: "uppercase", fontFamily: "'JetBrains Mono',monospace", marginBottom: 14 }}>Color palette</div>
                        <div style={{ display: "flex", gap: 10 }}>
                            {t.palette.map((c, i) => (
                                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                                    <div style={{ width: "100%", height: 48, borderRadius: 8, background: c, border: "1px solid rgba(255,255,255,0.1)" }} />
                                    <span style={{ fontSize: ".65rem", color: "rgba(240,238,255,0.35)", fontFamily: "'JetBrains Mono',monospace" }}>{t.paletteNames[i]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <a href={`https://wa.me/+5491139259252?text=Hola%20Ezequiel%2C%20quiero%20comprar%20el%20template%20${t.name}%20($${t.price}%20USD)%20%F0%9F%9A%80`} target="_blank" rel="noopener" style={{
                            flex: 1, padding: "13px 24px", borderRadius: 12, textAlign: "center",
                            background: `linear-gradient(135deg,#6c47ff,#4f2fd4)`,
                            color: "#fff", fontWeight: 700, fontSize: ".9rem",
                            textDecoration: "none", fontFamily: "'DM Sans',sans-serif",
                            boxShadow: "0 8px 24px rgba(108,71,255,0.4)",
                            minWidth: 180,
                        }}>Buy Template — ${t.price} USD</a>
                        <a href={t.demoUrl} target="_blank" rel="noopener" style={{
                            padding: "13px 24px", borderRadius: 12, textAlign: "center",
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "rgba(240,238,255,0.65)", fontWeight: 600, fontSize: ".9rem",
                            textDecoration: "none", fontFamily: "'DM Sans',sans-serif",
                        }}>Live Demo →</a>
                    </div>
                </div>
            </div>
        </div>
    );
}