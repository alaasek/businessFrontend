import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "The Draped Silk Blouse",
    price: 420,
    image: "/images/front.jpg",
    category: "Blouses",
    isNew: true,
  },
  {
    id: "2",
    name: "The Sculpted Linen Coat",
    price: 890,
    image: "/images/back.jpg",
    category: "Outerwear",
    isNew: false,
  },
  {
    id: "3",
    name: "The Woven Cashmere Wrap",
    price: 650,
    image: "/images/details.jpg",
    category: "Knitwear",
    isNew: true,
  },
];

const CATEGORIES = [
  { label: "Blouses & Tops", image: "/images/front.jpg", href: "/products?cat=tops" },
  { label: "Outerwear", image: "/images/back.jpg", href: "/products?cat=outerwear" },
  { label: "Knitwear", image: "/images/details.jpg", href: "/products?cat=knitwear" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section
          style={{
            position: "relative",
            minHeight: "95vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "var(--bg-silk)",
          }}
        >
          {/* Full-width background image */}
<div style={{ position: "absolute", inset: 0, background: "var(--bg-silk)", overflow: "hidden" }}>
  <img
    src="/images/background.jpg"
    alt="Hero editorial"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",  // ← shows the bottom of the image
    }}
  />
  {/* Soft overlay */}
  <div style={{ position: "absolute", inset: 0, background: "rgba(249,244,238,0.18)" }} />
</div>
{/* Hero content */}
<div
  style={{
    position: "absolute",
    right: "clamp(2rem, 8vw, 8rem)", 
    zIndex: 10,
    textAlign: "left",
    padding: "0 1.5rem",
    maxWidth: "420px",
  }}
>
  <p className="section-label fade-up fade-up-delay-1" style={{ marginBottom: "1.5rem" }}>
    Spring — Summer 2025
  </p>

  <p
    className="fade-up fade-up-delay-3"
    style={{
      fontSize: "0.85rem",
      letterSpacing: "0.08em",
      lineHeight: 1.9,
      color: "var(--text-muted)",
      maxWidth: "360px",
      margin: "0 0 2.5rem",
    }}
  >
    Curated pieces for the intentional wardrobe. Crafted with the finest
    materials, designed to endure beyond seasons.
  </p>

  <div className="fade-up fade-up-delay-4" style={{ display: "flex", gap: "1rem", justifyContent: "flex-start", flexWrap: "wrap" }}>
    <Link href="/products" className="btn-primary">
      Shop Now
    </Link>
    <Link href="/products?cat=new" className="btn-ghost">
      New Arrivals
    </Link>
  </div>
</div>

          {/* Scroll indicator */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              opacity: 0.45,
            }}
          >
            <span style={{ fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>Scroll</span>
            <div
              style={{
                width: "1px",
                height: "40px",
                background: "var(--text-charcoal)",
                animation: "scrollPulse 2s ease infinite",
              }}
            />
          </div>
        </section>

        {/* ── Marquee strip ──────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            borderBottom: "1px solid var(--border-light)",
            overflow: "hidden",
            padding: "0.9rem 0",
            background: "var(--text-charcoal)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "4rem",
              animation: "marquee 24s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {Array(6).fill(["Free Shipping Over $350", "Made in Italy", "Sustainable Fabrics", "New Collection — SS25"]).flat().map((text, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--bg-parchment)",
                  opacity: 0.8,
                }}
              >
                {text} &nbsp;·
              </span>
            ))}
          </div>
        </div>

        {/* ── Featured Products ──────────────────────────────────── */}
        <section style={{ padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p className="section-label" style={{ marginBottom: "1rem" }}>New Arrivals</p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                The New Collection
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                marginBottom: "3rem",
              }}
            >
              {FEATURED_PRODUCTS.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <Link href="/products" className="btn-ghost">
                View All Pieces
              </Link>
            </div>
          </div>
        </section>

        {/* ── Editorial Banner ───────────────────────────────────── */}
        <section
          style={{
            position: "relative",
            height: "clamp(400px, 60vh, 640px)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/back.jpg"
            alt="Editorial"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(54,54,54,0.72) 0%, rgba(54,54,54,0.2) 100%)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 10,
              padding: "0 clamp(2rem, 8vw, 8rem)",
              color: "var(--bg-parchment)",
              maxWidth: "560px",
            }}
          >
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
                opacity: 0.7,
              }}
            >
              The Philosophy
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Crafted for the ones who choose fewer, better things.
            </h2>
            <Link
              href="/products"
              style={{
                display: "inline-block",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(249,244,238,0.5)",
                paddingBottom: "4px",
                color: "var(--bg-parchment)",
                opacity: 1,
              }}
            >
              Explore the Archive →
            </Link>
          </div>
        </section>

        {/* ── Categories ─────────────────────────────────────────── */}
        <section style={{ padding: "6rem 1.5rem", background: "var(--bg-silk)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Browse By</p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                Shop by Category
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="img-zoom"
                  style={{
                    position: "relative",
                    display: "block",
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    opacity: 1,
                    background: "var(--bg-parchment)",
                  }}
                >
                  <Image src={cat.image} alt={cat.label} fill className="object-cover" />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(54,54,54,0.55) 0%, transparent 50%)",
                    }}
                  />
                  <p
                    style={{
                      position: "absolute",
                      bottom: "1.5rem",
                      left: "1.5rem",
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.4rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "var(--bg-parchment)",
                    }}
                  >
                    {cat.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values strip ───────────────────────────────────────── */}
        <section
          style={{
            padding: "4rem 1.5rem",
            borderTop: "1px solid var(--border-light)",
            borderBottom: "1px solid var(--border-light)",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "3rem",
              textAlign: "center",
            }}
          >
            {[
              { icon: "◈", title: "Free Shipping", text: "On orders over $350, worldwide." },
              { icon: "◇", title: "Artisan Craft", text: "Made in Italy from ethically sourced materials." },
              { icon: "○", title: "30-Day Returns", text: "Simple and hassle-free returns." },
              { icon: "◆", title: "Care Support", text: "Lifetime guidance on garment care." },
            ].map(({ icon, title, text }) => (
              <div key={title}>
                <div style={{ fontSize: "1.2rem", marginBottom: "0.8rem", opacity: 0.5 }}>{icon}</div>
                <h4
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.05rem",
                    fontWeight: 300,
                    marginBottom: "0.5rem",
                  }}
                >
                  {title}
                </h4>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* ── Global animations ─────────────────────────────────── */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.45; }
          50% { transform: scaleY(0.6); opacity: 0.15; }
        }
        .group:hover .group-hover\\:translate-y-0 {
          transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
}