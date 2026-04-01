import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/ProductCard";

// Mock product catalogue — replace with real API call
const ALL_PRODUCTS = [
  { id: "1", name: "The Draped Silk Blouse", price: 420, image: "/images/front.jpg", category: "Blouses", isNew: true },
  { id: "2", name: "The Sculpted Linen Coat", price: 890, image: "/images/back.jpg", category: "Outerwear", isNew: false },
  { id: "3", name: "The Woven Cashmere Wrap", price: 650, image: "/images/details.jpg", category: "Knitwear", isNew: true },
  { id: "4", name: "The High-Neck Silk Top", price: 340, image: "/images/front.jpg", category: "Blouses", isNew: false },
  { id: "5", name: "The Straight Linen Trouser", price: 480, image: "/images/back.jpg", category: "Trousers", isNew: true },
  { id: "6", name: "The Merino Ribbed Dress", price: 720, image: "/images/details.jpg", category: "Dresses", isNew: false },
];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "new", label: "New Arrivals" },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>

        {/* Page header */}
        <div
          style={{
            borderBottom: "1px solid var(--border-light)",
            padding: "3rem 1.5rem 2.5rem",
            textAlign: "center",
            background: "var(--bg-silk)",
          }}
        >
          <p className="section-label" style={{ marginBottom: "0.8rem" }}>The Collection</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              marginBottom: "0.5rem",
            }}
          >
            All Pieces
          </h1>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            {ALL_PRODUCTS.length} pieces
          </p>
        </div>

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "2rem 1.5rem 5rem",
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="products-layout"
        >

          {/* Sidebar filters */}
          <aside style={{ position: "sticky", top: "100px" }}>

            <div style={{ marginBottom: "2.5rem" }}>
              <p className="section-label" style={{ marginBottom: "1.2rem" }}>Sort By</p>
              {SORT_OPTIONS.map(({ value, label }) => (
                <label
                  key={value}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    marginBottom: "0.75rem",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                  }}
                >
                  <input type="radio" name="sort" value={value} defaultChecked={value === "featured"} style={{ accentColor: "var(--text-charcoal)" }} />
                  {label}
                </label>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "2rem", marginBottom: "2.5rem" }}>
              <p className="section-label" style={{ marginBottom: "1.2rem" }}>Category</p>
              {["All", "Blouses", "Outerwear", "Knitwear", "Trousers", "Dresses"].map((cat) => (
                <label
                  key={cat}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    marginBottom: "0.75rem",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                  }}
                >
                  <input type="checkbox" defaultChecked={cat === "All"} style={{ accentColor: "var(--text-charcoal)" }} />
                  {cat}
                </label>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "2rem" }}>
              <p className="section-label" style={{ marginBottom: "1.2rem" }}>Price Range</p>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                <span>$0</span>
                <input type="range" min="0" max="1500" defaultValue="1500" style={{ flex: 1, accentColor: "var(--text-charcoal)" }} />
                <span>$1,500</span>
              </div>
            </div>

          </aside>

          {/* Product grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "2rem 1.75rem",
            }}
          >
            {ALL_PRODUCTS.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>

        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .products-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
