

export function FilterBar({ filters, activeFilter, setActiveFilter, isDark, headC }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 48,
            flexWrap: "wrap",
        }}>
            {filters.map(f => {
                const isActive = activeFilter === f;
                return (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        style={{
                            padding: "10px 20px",
                            borderRadius: 100,
                            fontSize: ".88rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all .25s cubic-bezier(0.4, 0, 0.2, 1)",
                            background: isActive
                                ? (isDark ? "#ffffff" : "#0a0814")
                                : (isDark ? "rgba(240,238,255,0.02)" : "transparent"),
                            color: isActive
                                ? (isDark ? "#0a0814" : "#ffffff")
                                : (isDark ? "rgba(240,238,255,0.6)" : "rgba(10,8,20,0.6)"),
                            border: isActive
                                ? `1px solid ${isDark ? "#ffffff" : "#0a0814"}`
                                : `1px solid ${isDark ? "rgba(240,238,255,0.06)" : "rgba(10,8,20,0.1)"}`,
                        }}
                        onMouseEnter={e => {
                            if (!isActive) e.currentTarget.style.color = headC;
                        }}
                        onMouseLeave={e => {
                            if (!isActive) e.currentTarget.style.color = isDark ? "rgba(240,238,255,0.6)" : "rgba(10,8,20,0.6)";
                        }}
                    >
                        {f}
                    </button>
                );
            })}
        </div>
    );
}