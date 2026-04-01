import Image from "next/image";

interface ProductViewProps {
  label: string;
  image: string;
  priority?: boolean;
}

export default function ProductView({ label, image, priority = false }: ProductViewProps) {
  return (
    <div
      className="img-zoom"
      style={{
        position: "relative",
        aspectRatio: "3/4",
        overflow: "hidden",
        background: "var(--bg-silk)",
        border: "1px solid var(--border-light)",
      }}
    >
      <Image
        src={image}
        alt={label}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <span
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--text-charcoal)",
          opacity: 0.5,
          zIndex: 10,
        }}
      >
        {label}
      </span>
    </div>
  );
}
