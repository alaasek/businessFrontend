import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-light)",
        background: "var(--bg-silk)",
        marginTop: "auto",
      }}
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-1">
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.5rem",
              letterSpacing: "0.3em",
              fontWeight: 300,
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            timeless
          </p>
          <p style={{ fontSize: "0.78rem", lineHeight: 1.8, color: "var(--text-muted)", maxWidth: "220px" }}>
            Curated pieces crafted for those who live with intention.
          </p>
        </div>

        {/* Shop */}
        <div>
          <p className="section-label mb-5">Shop</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {["New Arrivals", "All Products", "Collections", "Archive", "Sale"].map((l) => (
              <li key={l}>
                <Link href="/products" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <p className="section-label mb-5">Help</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {["Sizing Guide", "Shipping & Returns", "Care Instructions", "Contact Us", "FAQ"].map((l) => (
              <li key={l}>
                <Link href="#" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="section-label mb-5">Stay in Touch</p>
          <p style={{ fontSize: "0.78rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.2rem" }}>
            Receive invitations to private sales and editorials.
          </p>
          <div style={{ display: "flex", gap: "0" }}>
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                padding: "0.65rem 0.9rem",
                border: "1px solid var(--border-mid)",
                background: "transparent",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
                outline: "none",
                color: "var(--text-charcoal)",
              }}
            />
            <button
              className="btn-primary"
              style={{ padding: "0.65rem 1.2rem", fontSize: "0.6rem", whiteSpace: "nowrap" }}
            >
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--border-light)",
          padding: "1.2rem 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", color: "var(--text-muted)" }}>
            © {year} Timeless. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((l) => (
              <Link key={l} href="#" style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--text-muted)" }}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
