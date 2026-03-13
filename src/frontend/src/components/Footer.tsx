import { Heart, Sparkles } from "lucide-react";
import { SiFacebook } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" fill="currentColor" />
              <span className="font-serif text-xl font-semibold text-white">
                Glamour <span className="text-primary">World</span>
              </span>
            </div>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Your premier beauty destination for a complete luxury experience.
              Where every woman deserves to feel beautiful.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/18FfcPezAi/"
                target="_blank"
                rel="noreferrer"
                data-ocid="footer.facebook.link"
                className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={`footer.${link.label.toLowerCase()}.link`}
                  className="block font-sans text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="font-serif text-white text-lg font-semibold mb-4">
              Visit Us
            </h4>
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-2">
              Baruipara, Suri - 731101
              <br />
              Birbhum, West Bengal
            </p>
            <p className="font-sans text-sm text-white/60 mb-1">
              <a
                href="tel:+918927157579"
                className="hover:text-primary transition-colors"
              >
                +91 89271 57579
              </a>
            </p>
            <p className="font-sans text-sm text-white/60">
              Mon–Sat: 9AM–8PM · Sun: 10AM–6PM
            </p>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="gold-divider my-8 opacity-30" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <p>
            © {year} Glamour World. All Rights Reserved. Made with{" "}
            <Heart
              className="w-3 h-3 inline text-primary mx-0.5"
              fill="currentColor"
            />{" "}
            for beautiful women.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
