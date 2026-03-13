import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  onBookNow: () => void;
}

export default function HeroSection({ onBookNow }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1400x700.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

      {/* Decorative rose tint on the right */}
      <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        className="fade-in-up relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        {/* Pre-title */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gold/70" />
          <span className="font-sans text-sm font-light tracking-[0.3em] uppercase text-gold">
            Welcome to
          </span>
          <div className="h-px w-12 bg-gold/70" />
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
          Glamour World
        </h1>

        <p className="font-serif text-2xl sm:text-3xl font-light italic text-gold mb-4">
          Your Beauty Destination
        </p>

        <p className="font-sans text-base sm:text-lg text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Where Every Woman Deserves to Feel Beautiful
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            data-ocid="hero.book_appointment.button"
            onClick={onBookNow}
            size="lg"
            className="bg-primary hover:bg-rose-deep text-white font-sans font-semibold px-10 py-4 text-base rounded-full transition-all hover:shadow-rose"
          >
            Book Appointment
          </Button>
          <Button
            data-ocid="hero.explore_services.button"
            asChild
            variant="outline"
            size="lg"
            className="border-white/70 text-white bg-white/10 hover:bg-white/20 font-sans font-semibold px-10 py-4 text-base rounded-full backdrop-blur-sm"
          >
            <a href="#services">Explore Services</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
