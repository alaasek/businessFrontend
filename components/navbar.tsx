"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Shop" },
    { href: "/archive", label: "Archive" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Left nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: isActive(href) ? "500" : "300",
                  borderBottom: isActive(href) ? "1px solid var(--text-charcoal)" : "none",
                  paddingBottom: "2px",
                  opacity: isActive(href) ? 1 : undefined,
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Logo — centered */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.6rem",
              letterSpacing: "0.35em",
              fontWeight: 300,
              textTransform: "lowercase",
              fontStyle: "italic",
              opacity: 1,
            }}
          >
            timeless
          </Link>

          {/* Right nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/account"
              style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300 }}
            >
              Account
            </Link>
            <Link
              href="/cart"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: isActive("/cart") ? "500" : "300",
                borderBottom: isActive("/cart") ? "1px solid var(--text-charcoal)" : "none",
                paddingBottom: "2px",
                opacity: isActive("/cart") ? 1 : undefined,
              }}
            >
              Cart{totalItems > 0 ? ` (${totalItems})` : ""}
            </Link>
          </div>

          {/* Mobile: cart + burger */}
          <div className="flex md:hidden items-center gap-5">
            <Link href="/cart" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Cart{totalItems > 0 ? ` (${totalItems})` : ""}
            </Link>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{ display: "flex", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
            >
              <span style={{ display: "block", width: "22px", height: "1px", background: "var(--text-charcoal)", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
              <span style={{ display: "block", width: "22px", height: "1px", background: "var(--text-charcoal)", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "22px", height: "1px", background: "var(--text-charcoal)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--bg-parchment)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.77, 0, 0.175, 1)",
        }}
      >
        <Link href="/" style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", letterSpacing: "0.15em", fontWeight: 300, fontStyle: "italic" }}>timeless</Link>
        {[...navLinks, { href: "/cart", label: "Cart" }, { href: "/account", label: "Account" }].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{ fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 300 }}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
