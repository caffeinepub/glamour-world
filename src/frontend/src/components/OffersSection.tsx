import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

interface Offer {
  name: string;
  services: string[];
  tagline: string;
  badge?: string;
}

const OFFERS: Offer[] = [
  {
    name: "Glow Combo",
    services: ["Facial", "Detan", "Eyebrow"],
    tagline: "Complete glow up package",
    badge: "Most Popular",
  },
  {
    name: "Fresh Look Combo",
    services: ["Clean Up", "Bleach", "Threading"],
    tagline: "Refresh your skin and look",
    badge: "Best Value",
  },
  {
    name: "Smooth Skin Combo",
    services: ["Waxing", "Eyebrow"],
    tagline: "Silky smooth and perfectly shaped",
  },
  {
    name: "Pamper Combo",
    services: ["Pedicure", "Manicure", "Oil Massage"],
    tagline: "Total relaxation for hands and feet",
    badge: "Relaxing",
  },
];

interface Props {
  onBookNow: () => void;
}

export default function OffersSection({ onBookNow }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("visible");
        }
      },
      { threshold: 0.1 },
    );
    const els = ref.current?.querySelectorAll(".fade-in-up");
    if (els) for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="offers"
      ref={ref}
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.22 0.025 15), oklch(0.32 0.04 10))",
      }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 bg-gold blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 bg-primary blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="fade-in-up flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <span className="font-sans text-sm font-semibold text-gold tracking-[0.25em] uppercase">
              Limited Time
            </span>
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="fade-in-up delay-100 font-serif text-4xl lg:text-5xl font-semibold text-white mb-4">
            Special <span className="text-gold italic">Combo Offers</span>
          </h2>
          <p className="fade-in-up delay-200 font-sans text-white/70 max-w-xl mx-auto">
            Get more beauty for less with our exclusive combo packages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {OFFERS.map(({ name, services, tagline, badge }, i) => (
            <div
              key={name}
              data-ocid={`offers.item.${i + 1}`}
              className={`fade-in-up delay-${(i % 2) * 200 + 100} relative rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-gold/30 hover:border-gold/60 transition-all hover:bg-white/10`}
            >
              {badge && (
                <Badge className="absolute -top-3 left-6 bg-gold text-foreground font-sans text-xs font-bold px-3">
                  {badge}
                </Badge>
              )}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">
                    {name}
                  </h3>
                  <p className="font-sans text-sm text-white/60 italic mb-3">
                    {tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {services.map((s) => (
                      <span
                        key={s}
                        className="font-sans text-xs font-semibold text-gold border border-gold/40 rounded-full px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Button
                    data-ocid={`offers.item.${i + 1}.button`}
                    onClick={onBookNow}
                    size="sm"
                    className="bg-gold hover:bg-gold/80 text-foreground font-sans font-semibold text-sm rounded-full px-5"
                  >
                    Book This Offer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
