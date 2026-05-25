import { useState } from "react";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/useAuth";

export function CartDrawer({ open, onClose }) {
    const {
        cartItems,
        removeFromCart,
        clearCart,
    } = useCart();

    const {
        user,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
    } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] =
        useState("");

    const [isRegister, setIsRegister] =
        useState(false);

    const total = cartItems.reduce(
        (acc, item) => acc + item.price,
        0
    );

    const message = `
Hola EquiCode 🚀

Quiero comprar los siguientes templates:

${cartItems
            .map(
                (item, i) =>
                    `${i + 1}. ${item.title} — $${item.price} USD`
            )
            .join("\n")}

━━━━━━━━━━━━━━
TOTAL: $${total} USD
━━━━━━━━━━━━━━

Mi email:
${user?.email}
`;

    const whatsappUrl = `https://wa.me/5491139259252?text=${encodeURIComponent(
        message
    )}`;

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    opacity: open ? 1 : 0,
                    pointerEvents: open
                        ? "all"
                        : "none",
                    transition: "0.3s",
                    zIndex: 999,
                }}
            />

            {/* Drawer */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width:
                        window.innerWidth < 768
                            ? '100%'
                            : 380,
                    maxWidth: "100%",
                    height: "100vh",
                    background: "#0b0b11",
                    borderLeft:
                        "1px solid rgba(255,255,255,0.08)",
                    transform: open
                        ? "translateX(0)"
                        : "translateX(100%)",
                    transition: "0.35s ease",
                    zIndex: 1000,
                    padding:
                        window.innerWidth < 768
                            ? 18
                            : 24,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* HEADER */}
                <div
                    style={{
                        display: "flex",
                        justifyContent:
                            "space-between",
                        alignItems: "center",
                        marginBottom: 30,
                    }}
                >
                    <h2>Carrito</h2>

                    <button
                        onClick={onClose}
                        style={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            color: "#fff",
                            fontSize: 24,
                            cursor: "pointer",
                        }}
                    >
                        ✕
                    </button>
                </div>

                {/* ITEMS */}
                <div
                    style={{
                        flex: 1,
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                    }}
                >
                    {cartItems.length === 0 ? (
                        <p
                            style={{
                                color:
                                    "rgba(255,255,255,0.5)",
                            }}
                        >
                            No hay templates todavía
                        </p>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    padding: 18,
                                    borderRadius: 16,
                                    background:
                                        "rgba(255,255,255,0.04)",
                                    border:
                                        "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent:
                                            "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <div>
                                        <h4
                                            style={{
                                                margin: 0,
                                            }}
                                        >
                                            {item.title}
                                        </h4>

                                        <p
                                            style={{
                                                marginTop: 6,
                                                color:
                                                    "rgba(255,255,255,0.6)",
                                            }}
                                        >
                                            ${item.price} USD
                                        </p>
                                    </div>

                                    <button
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                        style={{
                                            whidth: "100%",
                                            border: "none",
                                            background: "#ff2b2b",
                                            color: "#fff",
                                            borderRadius: 10,
                                            padding: "8px 12px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* FOOTER */}
                <div
                    style={{
                        borderTop:
                            "1px solid rgba(255,255,255,0.08)",
                        paddingTop: 20,
                        marginTop: 20,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent:
                                "space-between",
                            marginBottom: 20,
                        }}
                    >
                        <span>Total</span>

                        <strong>
                            ${total} USD
                        </strong>
                    </div>

                    {!user ? (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 12,
                            }}
                        >
                            <p
                                style={{
                                    fontSize: ".9rem",
                                    color:
                                        "rgba(255,255,255,0.6)",
                                    lineHeight: 1.5,
                                }}
                            >
                                Iniciá sesión para continuar
                                la compra.
                            </p>

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                style={{
                                    padding: 14,
                                    borderRadius: 12,
                                    border:
                                        "1px solid rgba(255,255,255,0.1)",
                                    background:
                                        "rgba(255,255,255,0.04)",
                                    color: "#fff",
                                }}
                            />

                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) =>
                                    setPassword(
                                        e.target.value
                                    )
                                }
                                style={{
                                    padding: 14,
                                    borderRadius: 12,
                                    border:
                                        "1px solid rgba(255,255,255,0.1)",
                                    background:
                                        "rgba(255,255,255,0.04)",
                                    color: "#fff",
                                }}
                            />

                            <button
                                onClick={async () => {
                                    if (isRegister) {
                                        await registerWithEmail(
                                            email,
                                            password
                                        );
                                    } else {
                                        await loginWithEmail(
                                            email,
                                            password
                                        );
                                    }
                                }}
                                style={{
                                    width: "100%",
                                    padding: 16,
                                    borderRadius: 14,
                                    border: "none",
                                    background:
                                        "linear-gradient(135deg,#6c47ff,#4f2fd4)",
                                    color: "#fff",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                }}
                            >
                                {isRegister
                                    ? "Crear cuenta"
                                    : "Ingresar"}
                            </button>

                            <button
                                onClick={loginWithGoogle}
                                style={{
                                    width: "100%",
                                    padding: 16,
                                    borderRadius: 14,
                                    border:
                                        "1px solid rgba(255,255,255,0.1)",
                                    background:
                                        "rgba(255,255,255,0.05)",
                                    color: "#fff",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                }}
                            >
                                Continuar con Google
                            </button>

                            <button
                                onClick={() =>
                                    setIsRegister(
                                        !isRegister
                                    )
                                }
                                style={{
                                    whidth: "100%",
                                    background:
                                        "transparent",
                                    border: "none",
                                    color: "#9f8cff",
                                    cursor: "pointer",
                                }}
                            >
                                {isRegister
                                    ? "Ya tengo cuenta"
                                    : "Crear cuenta"}
                            </button>
                        </div>
                    ) : (
                        cartItems.length > 0 && (
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() =>
                                    clearCart()
                                }
                                style={{
                                    display: "block",
                                    textAlign: "center",
                                    padding: 16,
                                    borderRadius: 14,
                                    textDecoration: "none",
                                    background:
                                        "linear-gradient(135deg,#6c47ff,#4f2fd4)",
                                    color: "#fff",
                                    fontWeight: 700,
                                }}
                            >
                                Finalizar compra
                            </a>
                        )
                    )}
                </div>
            </div>
        </>
    );
}