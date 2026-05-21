import { useState } from "react";
import {AmbientBlob}  from "./components/AmbientBlob";
import { Hero } from "./components/Hero";
import { TemplatesSection } from "./components/TemplatesSection";
import { Footer } from "./components/Footer";

// Tema de Estilos Centralizado
const THEME = {
    dark: {
        bg: "#05050a",
        headC: "#f0eefe",
        textC: "rgba(240,238,255,0.65)",
        borderC: "rgba(240,238,255,0.06)",
        linkC: "rgba(240,238,255,0.4)",
    },
    light: {
        bg: "#ffffff",
        headC: "#0a0814",
        textC: "rgba(10,8,20,0.65)",
        borderC: "rgba(10,8,20,0.08)",
        linkC: "rgba(10,8,20,0.5)",
    }
};

export default function PremiumTemplatesPage() {
    const [themeMode] = useState("dark"); // Podés cambiar a "light"
    const isDark = themeMode === "dark";
    const { bg, headC, textC, borderC, linkC } = THEME[themeMode];

    return (
        <div style={{
            background: bg,
            minHeight: "100vh",
            color: textC,
            fontFamily: "'Inter', sans-serif",
            position: "relative",
            overflow: "hidden"
        }}>

            {/* Luces Ambientales Neón de Fondo */}
            <AmbientBlob top={-100} left={-100} color="rgba(0,240,255,1)" size={500} opacity={isDark ? 0.12 : 0.04} />
            <AmbientBlob top={300} right={-150} color="rgba(255,0,122,1)" size={600} opacity={isDark ? 0.10 : 0.03} />
            <AmbientBlob top={900} left={-200} color="rgba(157,0,255,1)" size={600} opacity={isDark ? 0.08 : 0.02} />

            {/* Estructura Modular */}
            <Hero isDark={isDark} textC={textC} headC={headC} />

            <TemplatesSection isDark={isDark} headC={headC} textC={textC} borderC={borderC} />

            {/* Sección CTA Final de WhatsApp */}
            <section style={{ padding: "100px 24px", textAlign: "center", borderTop: `1px solid ${borderC}`, position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: headC, marginBottom: 16, letterSpacing: "-0.02em" }}>Need a Custom Ecosystem?</h2>
                <p style={{ fontSize: "1.1rem", color: textC, maxWidth: 540, margin: "0 auto 32px auto", lineHeight: 1.6 }}>If your production needs go beyond templates, we design and build tailor-made full-stack web applications.</p>
                <a href="https://wa.me/yournumber" target="_blank" rel="noopener" style={{ display: "inline-flex", padding: "14px 32px", borderRadius: 14, background: "linear-gradient(135deg, #ff007a, #9d00ff)", color: "#ffffff", fontWeight: 700, fontSize: "1rem", textDecoration: "none", boxShadow: "0 10px 30px rgba(157,0,255,0.25)" }}>Let's Build It Together</a>
            </section>

            <Footer isDark={isDark} headC={headC} textC={textC} borderC={borderC} linkC={linkC} />
        </div>
    );
}