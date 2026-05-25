import { useState, useEffect } from 'react'
import { useApp } from '../context/useApp'
import { useAuth } from "../context/useAuth";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "./CartDrawer";

// import { Link } from "react-router-dom";

export function Navbar() {

    const { lang, setLang, theme, setTheme, t } = useApp()
    const { user, loginWithGoogle, logout } = useAuth();
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const isDark = theme === 'dark'
    const { cartItems } = useCart()
    const [cartOpen, setCartOpen] = useState(false);


    // Nav scroll effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close menu on outside click
    useEffect(() => {
        if (!menuOpen) return
        const handler = (e) => {
            if (!e.target.closest('[data-nav]')) setMenuOpen(false)
        }
        document.addEventListener('click', handler)
        return () => document.removeEventListener('click', handler)
    }, [menuOpen])

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const navBg = isDark
        ? (scrolled ? 'rgba(7,7,9,0.97)' : 'rgba(7,7,9,0.75)')
        : (scrolled ? 'rgba(248,247,255,0.97)' : 'rgba(248,247,255,0.85)')

    const textColor = isDark ? 'rgba(240,238,255,0.6)' : 'rgba(10,8,20,0.6)'
    const logoColor = isDark ? '#f0eeff' : '#0a0814'
    const borderCol = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'

    const navLinks = [
        { label: t.navItems[0], href: '#templates' },
        { label: t.navItems[1], href: '#services' },
        { label: t.navItems[2], href: '#about' },
        { label: t.navItems[3], href: '#contact' },
    ]

    return (
        <>
            <div>
                {user ? (
                    <button onClick={logout}>
                        Logout
                    </button>
                ) : (
                    <button onClick={loginWithGoogle}>
                        Login Google
                    </button>
                )}
            </div>




            {/* ── NAVBAR ── */}
            <nav data-nav="true" style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding:
                    window.innerWidth < 768
                        ? '0 18px'
                        : '0 36px', height: 64,
                background: navBg,
                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                borderBottom: `1px solid ${borderCol}`,
                transition: 'background 0.3s ease',
            }}>

                {/* Logo */}
                <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: 'linear-gradient(135deg, #6c47ff, #4f2fd4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '.72rem', fontWeight: 800, color: '#fff',
                        fontFamily: "'JetBrains Mono', monospace",
                    }}>EC</div>
                    <span style={{
                        fontFamily: "'Syne', sans-serif", fontWeight: 800,
                        fontSize: '1.1rem', letterSpacing: '-.03em', color: logoColor,
                    }}>
                        Equi<span style={{ color: '#6c47ff' }}>Code</span>
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="nav-desktop-links" style={{
                    display:
                        window.innerWidth < 768
                            ? 'none'
                            : 'flex',
                    gap: 4, listStyle: 'none', margin: 0, padding: 0,
                }}>
                    {navLinks.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href} style={{
                                padding: '6px 14px', borderRadius: 8, display: 'block',
                                fontSize: '.83rem', fontWeight: 500, color: textColor,
                                textDecoration: 'none',
                                fontFamily: "'DM Sans', sans-serif",
                                transition: 'color .2s, background .2s',
                            }}
                                onMouseEnter={e => {
                                    e.target.style.color = isDark ? '#f0eeff' : '#0a0814'
                                    e.target.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                                }}
                                onMouseLeave={e => {
                                    e.target.style.color = textColor
                                    e.target.style.background = 'transparent'
                                }}
                            >{label}</a>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setCartOpen(true)}
                    style={{
                        position: "relative",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontSize: "1.4rem",
                    }}
                >
                    🛒

                    {cartItems.length > 0 && (
                        <span
                            style={{
                                position: "absolute",
                                top: -8,
                                right: -10,
                                width: 18,
                                height: 18,
                                borderRadius: "50%",
                                background: "#ff007a",
                                fontSize: ".7rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 700,
                            }}
                        >
                            {cartItems.length}
                        </span>
                    )}
                </button>

                <CartDrawer
                    open={cartOpen}
                    onClose={() => setCartOpen(false)}
                />

                {user && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <img
                            src={user.user_metadata.avatar_url}
                            alt=""
                            style={{
                                width:
                                    window.innerWidth < 768
                                        ? 28
                                        : 34,
                                height:
                                    window.innerWidth < 768
                                        ? 28
                                        : 34,
                                borderRadius: "50%",
                            }}
                        />

                        <span
                            style={{
                                fontSize: ".8rem",
                                color: "rgba(255,255,255,0.7)",
                            }}
                        >
                            {window.innerWidth < 768
                                ? user.user_metadata.full_name?.split(' ')[0]
                                : user.user_metadata.full_name}
                        </span>
                    </div>
                )}

                {/* Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

                    {/* Lang toggle */}
                    <div style={{
                        display: 'flex', alignItems: 'center',
                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        borderRadius: 8, padding: 3, gap: 2,
                    }}>
                        {['es', 'en'].map(l => (
                            <button key={l} onClick={() => setLang(l)} style={{
                                padding: '4px 10px', borderRadius: 6,
                                background: lang === l
                                    ? 'linear-gradient(135deg, #6c47ff, #4f2fd4)'
                                    : 'transparent',
                                color: lang === l ? '#fff' : textColor,
                                fontSize: '.72rem', fontWeight: 700, cursor: 'pointer',
                                border: 'none', letterSpacing: '.06em', textTransform: 'uppercase',
                                transition: 'all .2s',
                                fontFamily: "'JetBrains Mono', monospace",
                            }}>{l}</button>
                        ))}
                    </div>

                    {/* Theme toggle */}
                    <button
                        onClick={() => setTheme(isDark ? 'light' : 'dark')}
                        aria-label="Toggle theme"
                        style={{
                            width: 36, height: 36, borderRadius: '50%',
                            background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                            border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', fontSize: '1rem', transition: 'all .2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >{isDark ? '☀️' : '🌙'}</button>

                    {/* Hamburger */}
                    <button
                        data-nav="true"
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Menu"
                        style={{
                            width: 36, height: 36, borderRadius: 8, cursor: 'pointer',
                            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                            flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', gap: 5,
                        }}
                    >
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                display: 'block', height: 2, borderRadius: 2,
                                background: isDark ? 'rgba(240,238,255,0.7)' : 'rgba(10,8,20,0.7)',
                                transition: 'all .3s',
                                width: i === 1 ? (menuOpen ? 16 : 12) : 16,
                                transform: menuOpen
                                    ? i === 0 ? 'translateY(7px) rotate(45deg)'
                                        : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                                            : 'scaleX(0)'
                                    : 'none',
                            }} />
                        ))}
                    </button>
                </div>
            </nav>



            {/* ── MOBILE MENU ── */}
            <div data-nav="true" style={{
                position: 'fixed', top: 64, left: 0, right: 0, zIndex: 499,
                background: isDark ? 'rgba(7,7,9,0.97)' : 'rgba(248,247,255,0.97)',
                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                borderBottom: `1px solid ${borderCol}`,
                padding: menuOpen ? '20px 28px 28px' : '0 28px',
                transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
                opacity: menuOpen ? 1 : 0,
                transition: 'transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.3s ease, padding 0.3s',
                pointerEvents: menuOpen ? 'all' : 'none',
                display: 'flex', flexDirection: 'column', gap: 4,
            }}>
                {navLinks.map(({ label, href }) => (
                    <a key={href} href={href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            padding: '14px 16px', borderRadius: 12,
                            fontSize: '1rem', fontWeight: 600,
                            color: isDark ? 'rgba(240,238,255,0.7)' : 'rgba(10,8,20,0.7)',
                            textDecoration: 'none',
                            fontFamily: "'DM Sans', sans-serif",
                            transition: 'background .2s, color .2s',
                        }}
                        onMouseEnter={e => {
                            e.target.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
                            e.target.style.color = isDark ? '#f0eeff' : '#0a0814'
                        }}
                        onMouseLeave={e => {
                            e.target.style.background = 'transparent'
                            e.target.style.color = isDark ? 'rgba(240,238,255,0.7)' : 'rgba(10,8,20,0.7)'
                        }}
                    >{label}</a>
                ))}

                <a
                    href="https://wa.me/+5491139259252?text=Hola%20Ezequiel%20%F0%9F%9A%80"
                    target="_blank" rel="noopener"
                    onClick={() => setMenuOpen(false)}
                    style={{
                        marginTop: 8, padding: '13px 16px',
                        borderRadius: 12, textAlign: 'center',
                        background: 'linear-gradient(135deg, #6c47ff, #4f2fd4)',
                        color: '#fff', fontWeight: 700, fontSize: '.95rem',
                        textDecoration: 'none',
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    WhatsApp →
                </a>
            </div>

            {window.innerWidth < 768 && cartItems.length > 0 && (
                <button
                    onClick={() => setCartOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: 18,
                        left: 18,
                        right: 18,
                        zIndex: 999,
                        padding: '16px',
                        borderRadius: 18,
                        border: 'none',
                        background: 'linear-gradient(135deg,#6c47ff,#4f2fd4)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '.95rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,.35)',
                    }}
                >
                    🛒 Ver carrito ({cartItems.length})
                </button>
            )}
        </>


    )


}