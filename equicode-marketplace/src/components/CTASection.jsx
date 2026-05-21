import { useApp } from '../context/useApp';
import { useInView } from "../hooks/useInView";
import {AmbientBlob} from './AmbientBlob';

export function CTASection() {
    const { t, isDark } = useApp()
    const [ref, vis] = useInView(0.1)

    const sectionBg = isDark ? '#040310' : '#ece9ff'
    const cardBg = isDark
        ? 'linear-gradient(135deg, rgba(108,71,255,0.1), rgba(255,61,107,0.07))'
        : 'rgba(255,255,255,0.7)'
    const cardBorder = isDark ? 'rgba(108,71,255,0.22)' : 'rgba(108,71,255,0.2)'
    const titleCol = isDark ? '#f0eeff' : '#0a0814'
    const subCol = isDark ? 'rgba(240,238,255,0.45)' : 'rgba(10,8,20,0.5)'
    const ghostBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
    const ghostCol = isDark ? 'rgba(240,238,255,0.5)' : 'rgba(10,8,20,0.5)'

    return (
        <section style={{
            padding: '100px 28px',
            background: sectionBg,
            position: 'relative', overflow: 'hidden',
            transition: 'background .35s',
        }}>
            <AmbientBlob
                color="#6c47ff"
                style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
            />

            <div ref={ref} style={{
                maxWidth: 780, margin: '0 auto', textAlign: 'center',
                position: 'relative', zIndex: 1,
                padding: '72px 56px', borderRadius: 28,
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                backdropFilter: 'blur(10px)',
                opacity: vis ? 1 : 0,
                transform: vis ? 'none' : 'translateY(28px)',
                transition: 'all 0.8s ease',
            }}>

                {/* Availability badge */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '5px 14px', borderRadius: 100,
                    background: 'rgba(108,71,255,0.1)',
                    border: '1px solid rgba(108,71,255,0.25)',
                    marginBottom: 24,
                }}>
                    <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#4ade80', animation: 'pulse 2s infinite',
                    }} />
                    <span style={{
                        fontSize: '.7rem', fontWeight: 700, color: '#86efac',
                        letterSpacing: '.12em', textTransform: 'uppercase',
                        fontFamily: "'JetBrains Mono', monospace",
                    }}>{t.ctaEyebrow}</span>
                </div>

                {/* Headline */}
                <h2 style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 800,
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    letterSpacing: '-.04em', lineHeight: 1.05,
                    marginBottom: 16, color: titleCol,
                }}>
                    {t.ctaTitle1}{' '}
                    <span style={{
                        background: 'linear-gradient(90deg, #6c47ff, #ff3d6b)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{t.ctaTitle2}</span>
                </h2>

                <p style={{
                    fontSize: '1rem', color: subCol,
                    lineHeight: 1.75, fontWeight: 300,
                    maxWidth: 500, margin: '0 auto 40px',
                }}>{t.ctaSub}</p>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>

                    <a

                        href="https://wa.me/+5491139259252?text=Hola%20Ezequiel%2C%20quiero%20un%20proyecto%20custom%20%F0%9F%9A%80"
                        target="_blank" rel="noopener"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            padding: '13px 28px', borderRadius: 12,
                            background: '#25d366', color: '#fff',
                            fontWeight: 700, fontSize: '.95rem',
                            textDecoration: 'none',
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: '0 8px 28px rgba(37,211,102,0.35)',
                        }}
                    >{t.ctaWA}</a>


                    <a

                        href="mailto:ezequielrientecode@gmail.com"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            padding: '13px 28px', borderRadius: 12,
                            background: 'rgba(108,71,255,0.15)',
                            border: '1px solid rgba(108,71,255,0.3)',
                            color: '#b39fff', fontWeight: 600, fontSize: '.95rem',
                            textDecoration: 'none',
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >{t.ctaEmail}</a>


                    <a

                        href="#contact"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            padding: '13px 28px', borderRadius: 12,
                            border: `1px solid ${ghostBorder}`,
                            color: ghostCol, fontWeight: 600, fontSize: '.95rem',
                            textDecoration: 'none',
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >{t.ctaCall}</a>
                </div >
            </div >
        </section >
    )
}