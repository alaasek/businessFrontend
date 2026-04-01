"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  material?: string;
  care?: string;
  origin?: string;
  image?: string;
}

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "care">("details");

  const sizes = ["XS", "S", "M", "L", "XL"];

  const handleAdd = () => {
    if (!selectedSize) return;
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div style={{ marginTop: "4rem", maxWidth: "560px", margin: "4rem auto 0" }}>

      {/* Price */}
      <p style={{ fontSize: "0.78rem", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
        ${product.price.toLocaleString()} USD
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.3rem",
          fontStyle: "italic",
          fontWeight: 300,
          lineHeight: 1.7,
          marginBottom: "2rem",
          color: "var(--text-charcoal)",
        }}
      >
        {product.description}
      </p>

      {/* Size selector */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.9rem", color: "var(--text-muted)" }}>
          Select Size
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              style={{
                width: "44px",
                height: "44px",
                border: selectedSize === s ? "1px solid var(--text-charcoal)" : "1px solid var(--border-mid)",
                background: selectedSize === s ? "var(--text-charcoal)" : "transparent",
                color: selectedSize === s ? "var(--bg-parchment)" : "var(--text-charcoal)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {s}
            </button>
          ))}
        </div>
        {!selectedSize && (
          <p style={{ fontSize: "0.65rem", color: "var(--accent-rose)", marginTop: "0.5rem", letterSpacing: "0.1em" }}>
            Please select a size
          </p>
        )}
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        disabled={!selectedSize}
        className="btn-primary"
        style={{
          width: "100%",
          padding: "1.1rem",
          marginBottom: "0.8rem",
          opacity: !selectedSize ? 0.4 : 1,
          cursor: !selectedSize ? "not-allowed" : "pointer",
          transition: "all 0.35s ease",
        }}
      >
        {added ? "Added to Cart ✓" : `Add to Collection — $${product.price.toLocaleString()}`}
      </button>

      <button className="btn-ghost" style={{ width: "100%", padding: "1rem" }}>
        Add to Wishlist
      </button>

      {/* Accordion tabs */}
      <div style={{ marginTop: "2.5rem", borderTop: "1px solid var(--border-light)" }}>
        {[
          {
            key: "details",
            label: "Product Details",
            content: (
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: "0.6rem" }}>
                {product.material && (
                  <li style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>Material</span>
                    <span>{product.material}</span>
                  </li>
                )}
                {product.origin && (
                  <li style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>Origin</span>
                    <span>{product.origin}</span>
                  </li>
                )}
              </ul>
            ),
          },
          {
            key: "care",
            label: "Care Instructions",
            content: (
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                {product.care ?? "Handle with care."}
              </p>
            ),
          },
        ].map(({ key, label, content }) => (
          <div key={key} style={{ borderBottom: "1px solid var(--border-light)" }}>
            <button
              onClick={() => setActiveTab(activeTab === key as any ? "details" : key as any)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "1.2rem 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-charcoal)",
              }}
            >
              {label}
              <span style={{ fontSize: "1rem", fontWeight: 300, transition: "transform 0.3s", transform: activeTab === key ? "rotate(45deg)" : "none" }}>+</span>
            </button>
            {activeTab === key && (
              <div style={{ paddingBottom: "1.2rem", animation: "fadeUp 0.3s ease" }}>
                {content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
