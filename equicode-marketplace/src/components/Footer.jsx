import { useApp } from '../context/useApp'

export function Footer() {
    const { t, isDark } = useApp()

    const footBg = isDark ? '#040310' : '#e8e5ff'
    const borderC = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.07)'
    const textC = isDark ? 'rgba(240,238,255,0.35)' : 'rgba(10,8,20,0.45)'
    const headC = isDark ? '#f0eeff' : '#0a0814'
    const linkC = isDark ? 'rgba(240,238,255,0.4)' : 'rgba(10,8,20,0.45)'

    const columns = [
        {
            title: t.footerTemplates,
            links: [
                ['Veloce — Fitness', '#'],
                ['Barba Nera — Luxury', '#'],
                ['Origins — Coffee', '#'],
                ['Syntax — Portfolio', '#'],
                ['Nova — Agency', '#'],
            ],
        },
        {
            title: t.footerServices,
            links: [
                ['Landing Pages', '#'],
                ['Web Apps', '#'],
                ['E-Commerce', '#'],
                ['Custom Templates', '#'],
                ['Consulting', '#'],
            ],
        },
        {
            title: t.footerConnect,
            links: [
                ['GitHub', 'https://github.com/Equi-Code'],
                ['LinkedIn', '#'],
                ['WhatsApp', 'https://wa.me/+5491139259252'],
                ['Email', 'mailto:ezequielrientecode@gmail.com'],
                ['Portfolio', 'https://equi-code.netlify.app'],
            ],
        },
    ]

    return (
        <footer style={{
            padding:
                window.innerWidth < 768
                    ? '48px 20px 28px'
                    : '56px 28px 32px',
            background: footBg,
            borderTop: `1px solid ${borderC}`,
            transition: 'background .35s',
        }}>
            <div style={{ maxWidth: 1160, margin: '0 auto' }}>

                {/* Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            window.innerWidth < 900
                                ? '1fr'
                                : window.innerWidth < 1200
                                    ? '1.2fr 1fr 1fr'
                                    : '1.6fr 1fr 1fr 1fr',

                        gap: window.innerWidth < 768 ? 36 : 48,
                        marginBottom: 56,
                    }}
                >
                    {/* Brand */}
                    <div>
                        <div style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: '1.5rem', fontWeight: 800,
                            letterSpacing: '-.04em', marginBottom: 12,
                        }}>
                            <span style={{ color: headC }}>Equi</span>
                            <span style={{ color: '#6c47ff' }}>Code</span>
                        </div>
                        <p style={{
                            fontSize:
                                window.innerWidth < 768
                                    ? '.95rem'
                                    : '.84rem', color: textC, padding: '4px 0',
                            lineHeight: 1.75, maxWidth: 260, marginBottom: 20,
                        }}>{t.footerDesc}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{
                                width: 7, height: 7, borderRadius: '50%',
                                background: '#4ade80', animation: 'pulse 2s infinite',
                            }} />
                            <span style={{ fontSize: '.75rem', color: '#4ade80', fontWeight: 600 }}>
                                {t.footerAvail}
                            </span>
                        </div>
                    </div>

                    {/* Columns */}

                    {columns.map(({ title, links }) => (
                        <div key={title}>
                            <div style={{
                                fontSize: '.68rem', fontWeight: 700,
                                letterSpacing: '.14em', textTransform: 'uppercase',
                                color: isDark ? 'rgba(240,238,255,0.25)' : 'rgba(10,8,20,0.3)',
                                marginBottom: 18,
                                fontFamily: "'JetBrains Mono', monospace",
                            }}>{title}</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>




                                {links.map(([label, href]) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        style={{
                                            fontSize: '.84rem',
                                            color: linkC,
                                            textDecoration: 'none',
                                            transition: 'color .2s',
                                        }}
                                        onMouseEnter={e => e.target.style.color = headC}
                                        onMouseLeave={e => e.target.style.color = linkC}
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    display: 'flex',
                    flexDirection:
                        window.innerWidth < 768
                            ? 'column'
                            : 'row',

                    alignItems:
                        window.innerWidth < 768
                            ? 'flex-start'
                            : 'center',

                    justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
                    paddingTop: 24, borderTop: `1px solid ${borderC}`,
                }}>
                    <span style={{
                        fontSize: '.75rem',
                        color: isDark ? 'rgba(240,238,255,0.2)' : 'rgba(10,8,20,0.3)',
                        fontFamily: "'JetBrains Mono', monospace",
                    }}>{t.footerCopy}</span>
                    <span style={{
                        fontSize: '.75rem', color: 'rgba(108,71,255,0.5)',
                        fontFamily: "'JetBrains Mono', monospace",
                    }}>{t.footerBuilt}</span>
                </div>
            </div>
        </footer >
    )
}