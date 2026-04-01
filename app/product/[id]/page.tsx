import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductView from "@/components/ProductView";
import ProductDetails from "@/components/ProductDetails";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

// Mock product data — replace with real fetch by ID
const PRODUCTS: Record<string, {
  id: string;
  name: string;
  description: string;
  price: number;
  material: string;
  care: string;
  origin: string;
  image: string;
  views: { label: string; image: string }[];
}> = {
  "1": {
    id: "1",
    name: "The Draped Silk Blouse",
    description:
      "A masterpiece of asymmetrical design. Crafted from sand-washed silk with a high-neck scarf collar that drapes with effortless elegance.",
    price: 420,
    material: "100% Mulberry Silk",
    care: "Dry clean only. Store flat and away from direct sunlight.",
    origin: "Made in Italy",
    image: "/images/front.jpg",
    views: [
      { label: "01 / Front View", image: "/images/front.jpg" },
      { label: "02 / Back View", image: "/images/back.jpg" },
      { label: "03 / Textile Detail", image: "/images/details.jpg" },
    ],
  },
  "2": {
    id: "2",
    name: "The Sculpted Linen Coat",
    description:
      "An architectural silhouette in heavyweight linen. Clean lines and a precisely tailored shoulder create a commanding, effortless presence.",
    price: 890,
    material: "100% Belgian Linen",
    care: "Hand wash cold or dry clean. Press with medium iron.",
    origin: "Made in Portugal",
    image: "/images/back.jpg",
    views: [
      { label: "01 / Front View", image: "/images/back.jpg" },
      { label: "02 / Detail View", image: "/images/front.jpg" },
      { label: "03 / Fabric Close-up", image: "/images/details.jpg" },
    ],
  },
};

// Fallback product
const DEFAULT_PRODUCT = PRODUCTS["1"];

// Related products (simplified)
const RELATED = [
  { id: "2", name: "The Sculpted Linen Coat", price: 890, image: "/images/back.jpg", category: "Outerwear" },
  { id: "3", name: "The Woven Cashmere Wrap", price: 650, image: "/images/details.jpg", category: "Knitwear" },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS[params.id] ?? DEFAULT_PRODUCT;

  return (
    <>
      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1.5rem 1.5rem 0",
            display: "flex",
            gap: "0.6rem",
            alignItems: "center",
          }}
        >
          <Link href="/" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Home</Link>
          <span style={{ color: "var(--border-mid)", fontSize: "0.7rem" }}>/</span>
          <Link href="/products" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Shop</Link>
          <span style={{ color: "var(--border-mid)", fontSize: "0.7rem" }}>/</span>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-charcoal)" }}>{product.name}</span>
        </div>

        {/* Product layout */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2.5rem 1.5rem 6rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="product-detail-layout"
        >
          {/* Left: image gallery */}
          <div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                fontStyle: "italic",
                marginBottom: "2rem",
                display: "block",
              }}
              className="show-mobile-title"
            >
              {product.name}
            </h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
                gap: "0.75rem",
              }}
            >
              {/* Main large image */}
              <div style={{ gridColumn: "1 / -1" }}>
                <ProductView label={product.views[0].label} image={product.views[0].image} priority />
              </div>
              {/* Two smaller images */}
              {product.views.slice(1).map((v) => (
                <ProductView key={v.label} label={v.label} image={v.image} />
              ))}
            </div>
          </div>

          {/* Right: product details */}
          <div style={{ position: "sticky", top: "100px" }}>
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3vw, 2.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                marginBottom: "0.3rem",
              }}
              className="hide-mobile-title"
            >
              {product.name}
            </h1>

            <ProductDetails product={product} />
          </div>
        </div>

        {/* Related products */}
        <section
          style={{
            borderTop: "1px solid var(--border-light)",
            padding: "4rem 1.5rem 5rem",
            background: "var(--bg-silk)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="section-label" style={{ marginBottom: "0.8rem" }}>You May Also Like</p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                Related Pieces
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "2rem",
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              {RELATED.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .product-detail-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hide-mobile-title { display: none !important; }
          .show-mobile-title { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile-title { display: none !important; }
        }
      `}</style>
    </>
  );
}
