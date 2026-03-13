import {
  Droplets,
  Flower2,
  Heart,
  Scissors,
  Sparkles,
  Star,
  Sun,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface Service {
  icon: LucideIcon;
  name: string;
  desc: string;
}

const SERVICES: Service[] = [
  {
    icon: Sparkles,
    name: "Facial",
    desc: "Deep cleansing & brightening facial treatments",
  },
  {
    icon: Droplets,
    name: "Clean Up",
    desc: "Refreshing skin clean-up for instant glow",
  },
  {
    icon: Sun,
    name: "Detan",
    desc: "Effective de-tanning for radiant fair skin",
  },
  {
    icon: Star,
    name: "Bleach",
    desc: "Gentle bleach for luminous, even-toned skin",
  },
  {
    icon: Scissors,
    name: "Eyebrow & Threading",
    desc: "Perfect shaping for flawless brows",
  },
  {
    icon: Flower2,
    name: "Waxing",
    desc: "Smooth & silky waxing for all skin types",
  },
  {
    icon: Scissors,
    name: "Hair Cutting",
    desc: "Stylish cuts tailored to your face shape",
  },
  {
    icon: Wind,
    name: "Hair Spa",
    desc: "Deep conditioning spa for lustrous hair",
  },
  {
    icon: Heart,
    name: "Manicure",
    desc: "Elegant nail care for beautiful hands",
  },
  { icon: Heart, name: "Pedicure", desc: "Relaxing foot spa & nail treatment" },
  {
    icon: Sparkles,
    name: "Bridal Makeup",
    desc: "Stunning bridal looks for your special day",
  },
];

export default function ServicesSection() {
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
    const els = ref.current?.querySelectorAll(".fade-in-up, .fade-in");
    if (els) for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="fade-in-up flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="font-sans text-sm font-semibold text-gold tracking-[0.25em] uppercase">
              What We Offer
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="fade-in-up delay-100 font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our <span className="text-primary italic">Services</span>
          </h2>
          <p className="fade-in-up delay-200 font-sans text-muted-foreground max-w-xl mx-auto">
            From skincare to bridal transformations — we offer everything you
            need to look and feel your most beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, name, desc }, i) => (
            <div
              key={name}
              data-ocid={`services.item.${i + 1}`}
              className={`fade-in-up service-card delay-${Math.min((i % 4) * 100 + 100, 400)} bg-white border border-border rounded-2xl p-6 text-center cursor-default`}
            >
              <div className="w-14 h-14 rounded-full bg-blush flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
