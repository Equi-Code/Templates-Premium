import { useState, useEffect } from 'react';
import { useApp } from '../context/useApp';
import { useInView } from "../hooks/useInView";
import { ctaStyles } from '../utils/ctaStyles';
import { AmbientBlob } from './AmbientBlob'; // Corregido a importación nombrada con {}

export function Hero() {
    const { t, isDark } = useApp();
    const [ref, vis] = useInView({ threshold: 0.05, triggerOnce: true }); // Asegurado el paso de opciones como objeto
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const h = (e) => setMousePos({
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
        });
        window.addEventListener('mousemove', h);
        return () => window.removeEventListener('mousemove', h);
    }, []);

    // Si por alguna razón el contexto o las traducciones no cargaron, tiramos un loader limpio temporal
    if (!t) {
        return <div style={{ minHeight: '100vh', background: isDark ? '#070709' : '#f0eeff' }} />;
    }

    const headCol = isDark ? '#f0eeff' : '#0a0814';
    const subCol = isDark ? 'rgba(240,238,255,0.45)' : 'rgba(10,8,20,0.5)';
    const statCol = isDark ? 'rgba(240,238,255,0.25)' : 'rgba(10,8,20,0.3)';
    const borderCol = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)';

    const floatingChips = [
        { label: 'React', top: '18%', left: '7%', delay: '0s' },
        { label: 'Framer', top: '30%', right: '6%', delay: '0.4s' },
        { label: 'Figma', bottom: '32%', left: '5%', delay: '0.8s' },
        { label: 'TypeScript', bottom: '20%', right: '8%', delay: '0.2s' },
    ];

    return (
        <section ref={ref} style={{
            minHeight: '100vh',
            display: 'flex', alignItems: 'center',
            position: 'relative', overflow: 'hidden',
            background: isDark ? '#070709' : '#f0eeff',
            padding: '100px 0 80px',
            transition: 'background .35s',
        }}>

            {/* Gradient background */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: `
                    radial-gradient(ellipse 60% 60% at ${48 + mousePos.x * 4}% ${38 + mousePos.y * 4}%,
                    rgba(108,71,255,${isDark ? .18 : .1}) 0%, transparent 60%),
                    radial-gradient(ellipse 40% 50% at 80% 70%,
                    rgba(249,115,22,${isDark ? .1 : .07}) 0%, transparent 55%),
                    radial-gradient(ellipse 50% 40% at 10% 20%,
                    rgba(255,61,107,${isDark ? .07 : .04}) 0%, transparent 55%)
                `,
                transition: 'background 0.3s ease',
            }} />

            {/* Grid mesh */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `
                    linear-gradient(rgba(108,71,255,${isDark ? .04 : .03}) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(108,71,255,${isDark ? .04 : .03}) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
            }} />

            {/* Ambient blobs */}
            <AmbientBlob color="#6c47ff" top="-100px" right="-100px" size={500} />
            <AmbientBlob color="#f97316" bottom="-50px" left="-80px" size={350} />

            {/* Floating chips */}
            {floatingChips.map(({ label, delay, ...pos }) => (
                <div key={label} style={{
                    position: 'absolute',
                    padding: '6px 14px', borderRadius: 100,
                    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                    backdropFilter: 'blur(12px)',
                    color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
                    fontSize: '.72rem', fontWeight: 600, letterSpacing: '.08em',
                    fontFamily: "'JetBrains Mono', monospace",
                    animation: `floatChip 4s ease-in-out ${delay} infinite alternate`,
                    ...pos,
                }}>{label}</div>
            ))}

            {/* Content */}
            <div style={{
                maxWidth: 1160, margin: '0 auto',
                padding: '0 28px', position: 'relative',
                zIndex: 1, width: '100%',
            }}>

                {/* Eyebrow */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '5px 16px', borderRadius: 100,
                    border: '1px solid rgba(108,71,255,0.35)',
                    background: 'rgba(108,71,255,0.08)',
                    marginBottom: 32,
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'none' : 'translateY(16px)',
                    transition: 'all 0.7s ease 0.1s',
                }}>
                    <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#6c47ff', animation: 'pulse 2s infinite',
                    }} />
                    <span style={{
                        fontSize: '.7rem', fontWeight: 700, color: '#9b7dff',
                        letterSpacing: '.14em', textTransform: 'uppercase',
                        fontFamily: "'JetBrains Mono', monospace",
                    }}>{t?.heroEyebrow}</span>
                </div>

                {/* Headline */}
                <h1 style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 800,
                    fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
                    lineHeight: .95, letterSpacing: '-.05em',
                    marginBottom: 28, maxWidth: 900,
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'none' : 'translateY(24px)',
                    transition: 'all 0.8s ease 0.2s',
                }}>
                    <span style={{ color: headCol }}>{t?.heroTitle1}</span>{' '}
                    <span style={{
                        background: 'linear-gradient(90deg, #6c47ff, #ff3d6b, #f97316)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>{t?.heroTitle2}</span>
                    <br />
                    <span style={{
                        color: isDark ? 'rgba(240,238,255,0.18)' : 'rgba(10,8,20,0.15)',
                        WebkitTextStroke: `1.5px ${isDark ? 'rgba(240,238,255,0.2)' : 'rgba(10,8,20,0.18)'}`,
                    }}>{t?.heroTitle3}</span>
                </h1>

                {/* Subtitle */}
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    color: subCol, lineHeight: 1.75,
                    maxWidth: 560, marginBottom: 44, fontWeight: 300,
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'none' : 'translateY(20px)',
                    transition: 'all 0.8s ease 0.3s',
                }}>{t?.heroSub}</p>

                {/* CTA buttons */}
                <div style={{
                    display: 'flex', gap: 14, flexWrap: 'wrap',
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'none' : 'translateY(16px)',
                    transition: 'all 0.8s ease 0.4s',
                }}>
                    <a href="#templates" style={ctaStyles ? ctaStyles('solid') : {}}>{t?.exploreCTA}</a>

                    <a
                        href="https://wa.me/+5491139259252?text=Hola%20Ezequiel%2C%20quiero%20un%20proyecto%20custom%20%F0%9F%9A%80"
                        target="_blank" rel="noopener"
                        style={ctaStyles ? ctaStyles('outline', isDark) : {}}
                    >
                        {t?.customCTA}
                    </a>
                </div>

                {/* Stats */}
                <div style={{
                    display: 'flex', gap: 40, marginTop: 64,
                    paddingTop: 40, borderTop: `1px solid ${borderCol}`,
                    flexWrap: 'wrap',
                    opacity: vis ? 1 : 0,
                    transition: 'all 0.8s ease 0.55s',
                }}>
                    {[
                        ['5', t?.stat1],
                        ['$140–200', t?.stat2],
                        ['HTML/CSS/JS', t?.stat3],
                        ['2025', t?.stat4],
                    ].map(([num, lbl]) => (
                        <div key={lbl}>
                            <div style={{
                                fontFamily: "'Syne', sans-serif",
                                fontSize: '1.8rem', fontWeight: 800,
                                color: headCol, letterSpacing: '-.03em',
                            }} refinement={num}>{num}</div>
                            <div style={{
                                fontSize: '.72rem', color: statCol,
                                marginTop: 3, letterSpacing: '.08em', textTransform: 'uppercase',
                                fontFamily: "'JetBrains Mono', monospace",
                            }}>{lbl}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}