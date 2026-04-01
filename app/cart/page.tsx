"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>

        {/* Header */}
        <div
          style={{
            borderBottom: "1px solid var(--border-light)",
            padding: "3rem 1.5rem 2.5rem",
            textAlign: "center",
            background: "var(--bg-silk)",
          }}
        >
          <p className="section-label" style={{ marginBottom: "0.8rem" }}>Your Selection</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Shopping Cart
          </h1>
        </div>

        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>

          {cart.length === 0 ? (
            /* Empty state */
            <div style={{ textAlign: "center", padding: "5rem 1rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.8rem",
                  fontStyle: "italic",
                  fontWeight: 300,
                  marginBottom: "1rem",
                  color: "var(--text-muted)",
                }}
              >
                Your cart is empty.
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.8 }}>
                Discover our curated collection of timeless pieces.
              </p>
              <Link href="/products" className="btn-primary">
                Shop the Collection
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 340px",
                gap: "4rem",
                alignItems: "start",
              }}
              className="cart-layout"
            >

              {/* Cart items */}
              <div>
                {/* Column headers */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    gap: "1.5rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid var(--border-light)",
                    marginBottom: "0",
                  }}
                >
                  {["", "Product", "Total"].map((h) => (
                    <p key={h} className="section-label">{h}</p>
                  ))}
                </div>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "80px 1fr auto",
                      gap: "1.5rem",
                      padding: "1.8rem 0",
                      borderBottom: "1px solid var(--border-light)",
                      alignItems: "center",
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      style={{
                        width: "80px",
                        height: "100px",
                        position: "relative",
                        overflow: "hidden",
                        background: "var(--bg-silk)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      {item.image && (
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      )}
                    </div>

                    {/* Name + qty controls */}
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "1.1rem",
                          fontWeight: 300,
                          fontStyle: "italic",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {item.name}
                      </h3>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                        ${item.price.toLocaleString()} each
                      </p>

                      {/* Quantity */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: "32px",
                            height: "32px",
                            border: "1px solid var(--border-mid)",
                            background: "none",
                            cursor: "pointer",
                            fontSize: "1rem",
                            color: "var(--text-charcoal)",
                          }}
                        >
                          −
                        </button>
                        <span
                          style={{
                            width: "40px",
                            height: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid var(--border-mid)",
                            borderLeft: "none",
                            borderRight: "none",
                            fontSize: "0.78rem",
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: "32px",
                            height: "32px",
                            border: "1px solid var(--border-mid)",
                            background: "none",
                            cursor: "pointer",
                            fontSize: "1rem",
                            color: "var(--text-charcoal)",
                          }}
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            marginLeft: "1rem",
                            fontSize: "0.65rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--text-muted)",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Line total */}
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.1rem",
                        fontWeight: 300,
                        whiteSpace: "nowrap",
                      }}
                    >
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}

                <div style={{ marginTop: "1rem" }}>
                  <button
                    onClick={clearCart}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Order summary */}
              <div
                style={{
                  border: "1px solid var(--border-light)",
                  padding: "2rem",
                  position: "sticky",
                  top: "100px",
                  background: "var(--bg-silk)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.3rem",
                    fontWeight: 300,
                    marginBottom: "1.5rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid var(--border-light)",
                  }}
                >
                  Order Summary
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>Subtotal</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>Shipping</span>
                    <span style={{ color: "var(--accent-sage)" }}>{totalPrice >= 350 ? "Free" : "$18"}</span>
                  </div>
                  {totalPrice < 350 && (
                    <p style={{ fontSize: "0.68rem", color: "var(--accent-rose)", letterSpacing: "0.05em" }}>
                      Add ${(350 - totalPrice).toLocaleString()} more for free shipping
                    </p>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "1.2rem",
                    marginBottom: "1.8rem",
                  }}
                >
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Total</span>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.6rem",
                      fontWeight: 300,
                    }}
                  >
                    ${(totalPrice + (totalPrice >= 350 ? 0 : 18)).toLocaleString()}
                  </span>
                </div>

                <button className="btn-primary" style={{ width: "100%", padding: "1.1rem", marginBottom: "0.8rem" }}>
                  Proceed to Checkout
                </button>

                <Link
                  href="/products"
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginTop: "0.5rem",
                  }}
                >
                  ← Continue Shopping
                </Link>
              </div>

            </div>
          )}
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .cart-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
