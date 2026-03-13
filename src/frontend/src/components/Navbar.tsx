import { Button } from "@/components/ui/button";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  onBookNow: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onBookNow }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <Sparkles
              className="w-6 h-6 text-primary group-hover:text-gold transition-colors"
              fill="currentColor"
            />
            <span className="font-serif text-xl font-semibold text-foreground">
              Glamour <span className="text-primary">World</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="font-sans text-sm font-semibold text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              data-ocid="nav.book_now.button"
              onClick={onBookNow}
              className="bg-primary hover:bg-rose-deep text-white font-sans font-semibold px-6 py-2 text-sm tracking-wide rounded-full transition-colors"
            >
              Book Now
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                onClick={() => setMenuOpen(false)}
                className="block font-sans text-base font-semibold text-foreground/80 hover:text-primary transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <Button
              data-ocid="nav.mobile.book_now.button"
              onClick={() => {
                setMenuOpen(false);
                onBookNow();
              }}
              className="w-full bg-primary hover:bg-rose-deep text-white font-sans font-semibold rounded-full mt-2"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
