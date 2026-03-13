import { useEffect, useRef } from "react";

const IMAGES = [
  {
    src: "/assets/generated/gallery-1.dim_600x500.jpg",
    alt: "Beautiful client after treatment",
  },
  {
    src: "/assets/generated/service-bridal.dim_600x400.jpg",
    alt: "Bridal makeup transformation",
  },
  {
    src: "/assets/generated/service-hair.dim_600x400.jpg",
    alt: "Professional hair styling",
  },
  {
    src: "/assets/generated/gallery-2.dim_600x500.jpg",
    alt: "Relaxing pedicure treatment",
  },
  {
    src: "/assets/generated/service-manicure.dim_600x400.jpg",
    alt: "Elegant nail manicure",
  },
  {
    src: "/assets/generated/gallery-3.dim_600x500.jpg",
    alt: "Luxurious hair spa",
  },
];

export default function GallerySection() {
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
    <section id="gallery" ref={ref} className="py-20 lg:py-28 bg-petal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="fade-in-up flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="font-sans text-sm font-semibold text-gold tracking-[0.25em] uppercase">
              Our Portfolio
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="fade-in-up delay-100 font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our <span className="text-primary italic">Work</span>
          </h2>
          <p className="fade-in-up delay-200 font-sans text-muted-foreground max-w-xl mx-auto">
            A glimpse of the beautiful transformations we create every day at
            Glamour World.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0">
          {IMAGES.map(({ src, alt }, i) => (
            <div
              key={src}
              data-ocid={`gallery.item.${i + 1}`}
              className={`fade-in delay-${Math.min(i * 100 + 100, 500)} gallery-item relative rounded-xl overflow-hidden mb-4 cursor-pointer`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-4">
                <p className="font-sans text-sm text-white font-semibold">
                  {alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
