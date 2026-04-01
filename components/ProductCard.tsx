import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  isNew?: boolean;
}

export default function ProductCard({ id, name, price, image, category, isNew }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} style={{ display: "block", textDecoration: "none", opacity: 1 }}>
      <article className="group">
        {/* Image container */}
        <div
          className="img-zoom"
          style={{
            position: "relative",
            aspectRatio: "3/4",
            overflow: "hidden",
            background: "var(--bg-silk)",
            border: "1px solid var(--border-light)",
            marginBottom: "1.1rem",
          }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {isNew && (
            <span
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                background: "var(--text-charcoal)",
                color: "var(--bg-parchment)",
                padding: "0.3rem 0.7rem",
              }}
            >
              New
            </span>
          )}

          {/* Quick-add overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "rgba(249, 244, 238, 0.92)",
              padding: "0.9rem",
              transform: "translateY(100%)",
              transition: "transform 0.35s ease",
              textAlign: "center",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
            className="group-hover:translate-y-0"
          >
            View Product
          </div>
        </div>

        {/* Info */}
        <div style={{ paddingInline: "0.25rem" }}>
          {category && (
            <p className="section-label" style={{ marginBottom: "0.35rem" }}>
              {category}
            </p>
          )}
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.15rem",
              fontWeight: 300,
              marginBottom: "0.4rem",
              lineHeight: 1.2,
            }}
          >
            {name}
          </h3>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
            ${price.toLocaleString()}
          </p>
        </div>
      </article>
    </Link>
  );
}
