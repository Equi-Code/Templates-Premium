export  function AmbientBlob({ color, style }) {
    return (
        <div style={{
            position: 'absolute',
            borderRadius: '50%',
            background: color,
            filter: 'blur(80px)',
            opacity: 0.18,
            pointerEvents: 'none',
            animation: 'blobFloat 8s ease-in-out infinite alternate',
            ...style,
        }} />
    )
}