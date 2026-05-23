// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// export function CartPage() {
//     const { cartItems, removeFromCart } = useCart();
//     const navigate = useNavigate();

//     const total = cartItems.reduce((acc, item) => acc + item.price, 0);

//     // Mensaje WhatsApp
//     const message = `
// Hola EquiCode 🚀

// Quiero comprar estos templates:

// ${cartItems
//             .map(
//                 (item) => `• ${item.title} - $${item.price} USD`
//             )
//             .join("\n")}

// Total: $${total} USD
// `;

//     const whatsappUrl = `https://wa.me/5491139259252?text=${encodeURIComponent(message)}`;
//     return (
//         <div
//             style={{
//                 minHeight: "100vh",
//                 padding: "120px 24px",
//                 background: "#070709",
//                 color: "#fff",
//             }}
//         >
//             <div
//                 style={{
//                     maxWidth: 900,
//                     margin: "0 auto",
//                 }}
//             >
//                 <h1
//                     style={{
//                         fontSize: "3rem",
//                         marginBottom: 40,
//                         fontWeight: 800,
//                     }}
//                 >
//                     Carrito
//                 </h1>

//                 {cartItems.length === 0 ? (
//                     <div
//                         style={{
//                             textAlign: "center",
//                             padding: "80px 20px",
//                             border: "1px solid rgba(255,255,255,0.08)",
//                             borderRadius: 24,
//                             background: "rgba(255,255,255,0.03)",
//                         }}
//                     >
//                         <h2>Tu carrito está vacío 🛒</h2>

//                         <button
//                             onClick={() => navigate("/")}
//                             style={{
//                                 marginTop: 24,
//                                 padding: "14px 24px",
//                                 borderRadius: 14,
//                                 border: "none",
//                                 cursor: "pointer",
//                                 background:
//                                     "linear-gradient(135deg,#6c47ff,#4f2fd4)",
//                                 color: "#fff",
//                                 fontWeight: 700,
//                             }}
//                         >
//                             Volver a templates
//                         </button>
//                     </div>
//                 ) : (
//                     <>
//                         <div
//                             style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 gap: 18,
//                             }}
//                         >
//                             {cartItems.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     style={{
//                                         padding: 24,
//                                         borderRadius: 22,
//                                         background:
//                                             "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
//                                         border:
//                                             "1px solid rgba(255,255,255,0.08)",
//                                         display: "flex",
//                                         justifyContent: "space-between",
//                                         alignItems: "center",
//                                         backdropFilter: "blur(10px)",
//                                     }}
//                                 >
//                                     <div>
//                                         <h3
//                                             style={{
//                                                 margin: 0,
//                                                 fontSize: "1.2rem",
//                                             }}
//                                         >
//                                             {item.title}
//                                         </h3>

//                                         <p
//                                             style={{
//                                                 marginTop: 8,
//                                                 color: "rgba(255,255,255,0.6)",
//                                             }}
//                                         >
//                                             ${item.price} USD
//                                         </p>
//                                     </div>

//                                     <button
//                                         onClick={() =>
//                                             removeFromCart(item.id)
//                                         }
//                                         style={{
//                                             padding: "10px 16px",
//                                             border: "none",
//                                             borderRadius: 12,
//                                             background: "#ff2b2b",
//                                             color: "#fff",
//                                             fontWeight: 700,
//                                             cursor: "pointer",
//                                         }}
//                                     >
//                                         Eliminar
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>

//                         <div
//                             style={{
//                                 marginTop: 40,
//                                 paddingTop: 30,
//                                 borderTop:
//                                     "1px solid rgba(255,255,255,0.08)",
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 alignItems: "center",
//                                 flexWrap: "wrap",
//                                 gap: 20,
//                             }}
//                         >
//                             <div>
//                                 <p
//                                     style={{
//                                         color: "rgba(255,255,255,0.5)",
//                                         marginBottom: 8,
//                                     }}
//                                 >
//                                     Total
//                                 </p>

//                                 <h2
//                                     style={{
//                                         margin: 0,
//                                         fontSize: "2rem",
//                                     }}
//                                 >
//                                     ${total} USD
//                                 </h2>
//                             </div>

//                             <div
//                                 style={{
//                                     display: "flex",
//                                     gap: 12,
//                                 }}
//                             >
//                                 <button
//                                     onClick={() => navigate("/")}
//                                     style={{
//                                         padding: "14px 24px",
//                                         borderRadius: 14,
//                                         border:
//                                             "1px solid rgba(255,255,255,0.1)",
//                                         background: "transparent",
//                                         color: "#fff",
//                                         cursor: "pointer",
//                                         fontWeight: 700,
//                                     }}
//                                 >
//                                     Seguir viendo
//                                 </button>

//                                 <a
//                                     href={whatsappUrl}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     style={{
//                                         padding: "14px 26px",
//                                         borderRadius: 14,
//                                         textDecoration: "none",
//                                         background:
//                                             "linear-gradient(135deg,#6c47ff,#4f2fd4)",
//                                         color: "#fff",
//                                         fontWeight: 700,
//                                         boxShadow:
//                                             "0 10px 30px rgba(108,71,255,0.35)",
//                                     }}
//                                 >
//                                     Finalizar por WhatsApp
//                                 </a>
//                             </div>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

import { useCart } from "../context/CartContext";

export function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const message = `
Hola EquiCode 🚀

Quiero comprar estos templates:

${cartItems
  .map(
    (item) => `• ${item.title} - $${item.price} USD`
  )
  .join("\n")}

Total: $${total} USD
`;

  const whatsappUrl = `https://wa.me/5491139259252?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "120px 24px",
        background: "#070709",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: 30,
          }}
        >
          Tu carrito 🛒
        </h1>

        {cartItems.length === 0 ? (
          <div>
            <p
              style={{
                opacity: 0.7,
                marginBottom: 20,
              }}
            >
              No hay templates agregados todavía.
            </p>

            <a
              href="/"
              style={{
                padding: "12px 20px",
                borderRadius: 12,
                background:
                  "linear-gradient(135deg,#6c47ff,#4f2fd4)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Ver templates →
            </a>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h3>{item.title}</h3>

                    <p
                      style={{
                        opacity: 0.7,
                      }}
                    >
                      ${item.price} USD
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: "#ff3355",
                      border: "none",
                      color: "#fff",
                      padding: "10px 14px",
                      borderRadius: 10,
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 40,
                padding: 24,
                borderRadius: 20,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h2>Total: ${total} USD</h2>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginTop: 20,
                }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "#25D366",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 800,
                  }}
                >
                  Comprar por WhatsApp →
                </a>

                <button
                  onClick={clearCart}
                  style={{
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  Vaciar carrito
                </button>

                <a
                  href="/"
                  style={{
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  ← Seguir viendo templates
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}