import { useState } from 'react'
import { useApp } from '../context/useApp'
import { useInView } from "../hooks/useInView"
import { TEMPLATES } from '../data/templates'
import {TemplateCard} from './TemplateCard'
import {DetailModal} from './DetailModal'

export function TemplatesSection() {
    const { t, isDark } = useApp()
    const [filter, setFilter] = useState(t.filters[0])
    const [modal, setModal] = useState(null)
    const [ref, vis] = useInView(0.05)

    const normalize = (f) => {
        // map Spanish label → English key used in template data
        const MAP = { 'Todos': 'All' }
        return MAP[f] || f
    }

    const filtered = TEMPLATES.filter(tp => {
        const f = normalize(filter)
        if (f === 'All') return true
        if (f === 'Dark') return tp.tags.includes('Dark')
        if (f === 'Light') return tp.tags.includes('Light')
        return tp.category === f || tp.tags.includes(f)
    })

    const subColor = isDark ? 'rgba(240,238,255,0.4)' : 'rgba(10,8,20,0.45)'
    const titleCol = isDark ? '#f0eeff' : '#0a0814'

    return (
        <section id="templates" style={{
            padding: '110px 0 120px',
            background: isDark ? '#070709' : '#f0eeff',
            position: 'relative',
            transition: 'background .35s',
        }}>
            <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px' }}>

                {/* Header */}
                <div ref={ref} style={{
                    textAlign: 'center', marginBottom: 64,
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'none' : 'translateY(24px)',
                    transition: 'all 0.7s ease',
                }}>
                    {/* Eyebrow */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '5px 16px', borderRadius: 100,
                        border: '1px solid rgba(249,115,22,0.3)',
                        background: 'rgba(249,115,22,0.07)', marginBottom: 20,
                    }}>
                        <span style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: '#f97316', animation: 'pulse 2s infinite',
                        }} />
                        <span style={{
                            fontSize: '.7rem', fontWeight: 700, color: '#fb923c',
                            letterSpacing: '.14em', textTransform: 'uppercase',
                            fontFamily: "'JetBrains Mono', monospace",
                        }}>{t.sectionEyebrow}</span>
                    </div>

                    {/* Title */}
                    <h2 style={{
                        fontFamily: "'Syne', sans-serif", fontWeight: 800,
                        fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                        letterSpacing: '-.04em', lineHeight: 1.05,
                        margin: '0 0 16px', color: titleCol,
                    }}>
                        {t.sectionTitle1}{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #f97316, #6c47ff)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>{t.sectionTitle2}</span>
                    </h2>

                    <p style={{
                        fontSize: '1rem', color: subColor,
                        maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75,
                    }}>{t.sectionSub}</p>

                    {/* Filter bar */}
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {t.filters.map(f => (
                            <button key={f} onClick={() => setFilter(f)} style={{
                                padding: '7px 20px', borderRadius: 100,
                                border: `1px solid ${filter === f
                                    ? 'rgba(108,71,255,0.6)'
                                    : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)'}`,
                                background: filter === f ? 'rgba(108,71,255,0.15)' : 'transparent',
                                color: filter === f ? '#b39fff' : (isDark ? 'rgba(240,238,255,0.4)' : 'rgba(10,8,20,0.45)'),
                                fontSize: '.8rem', fontWeight: 600, cursor: 'pointer',
                                fontFamily: "'DM Sans', sans-serif",
                                transition: 'all 0.2s ease', letterSpacing: '.02em',
                            }}>{f}</button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: 22,
                }}>
                    {filtered.map((tp, i) => (
                        <TemplateCard
                            key={tp.id}
                            t={tp}
                            index={i}
                            onDetails={setModal}
                        />
                    ))}
                </div>
            </div>

            {/* Detail modal */}
            {modal && <DetailModal t={modal} onClose={() => setModal(null)} />}
        </section>
    )
}