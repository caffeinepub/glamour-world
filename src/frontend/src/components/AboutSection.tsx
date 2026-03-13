import { Award, Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const STATS = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Expert Stylists" },
  { icon: Star, value: "5 Star", label: "Rated Parlour" },
];

function setupObserver(
  ref: React.RefObject<HTMLDivElement | null>,
  selectors: string,
  threshold = 0.15,
) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("visible");
      }
    },
    { threshold },
  );
  const els = ref.current?.querySelectorAll(selectors);
  if (els) for (const el of els) observer.observe(el);
  return observer;
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = setupObserver(ref, ".fade-in-up, .fade-in");
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-petal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="fade-in-up flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="font-sans text-sm font-semibold text-gold tracking-[0.25em] uppercase">
                About Us
              </span>
            </div>

            <h2 className="fade-in-up delay-100 font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              About <span className="text-primary italic">Glamour World</span>
            </h2>

            <div className="gold-divider mb-6 fade-in-up delay-200" />

            <p className="fade-in-up delay-200 font-sans text-foreground/75 text-lg leading-relaxed mb-4">
              Glamour World is a professional ladies beauty parlour dedicated to
              making every woman look and feel her absolute best. We believe
              beauty is a celebration — of you, your confidence, and your
              radiance.
            </p>
            <p className="fade-in-up delay-300 font-sans text-foreground/75 text-lg leading-relaxed mb-8">
              We provide high-quality beauty treatments in a comfortable,
              hygienic, and luxurious environment. Our experienced team of
              beauty professionals is here to pamper you from head to toe.
            </p>

            {/* Stats */}
            <div className="fade-in-up delay-400 grid grid-cols-3 gap-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 bg-white rounded-xl border border-border shadow-xs group hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-serif text-xl font-bold text-foreground">
                    {value}
                  </div>
                  <div className="font-sans text-xs text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="fade-in delay-200 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/service-facial.dim_600x400.jpg"
                alt="Luxury facial treatment at Glamour World"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/20" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-rose border border-border">
              <p className="font-serif text-sm italic text-primary">
                "Beauty begins the moment"
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-1">
                you decide to be yourself
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
