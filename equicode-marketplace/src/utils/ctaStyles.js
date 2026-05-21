export function ctaStyles (variant, isDark=true) {
    const base= {
        display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '13px 30px',
            borderRadius: 12,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '.95rem',
            fontWeight: 700,
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.22s ease',
            letterSpacing: '.01em',
    }

    if (variant==='solid') {
        return {
            ...base,
            background: 'linear-gradient(135deg, #6c47ff, #4f2fd4)',
                color: '#fff',
                boxShadow: '0 8px 28px rgba(108,71,255,0.4)',
        }
    }

    return {

        ...base,
        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)',
        border: `1px solid $ {
            isDark ? 'rgba(255,255,255,0.12)': 'rgba(0,0,0,0.1)'
        }

        `,
        color: isDark ? 'rgba(240,238,255,0.75)' : 'rgba(10,8,20,0.65)',
    }
}