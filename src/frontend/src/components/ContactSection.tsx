import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook } from "react-icons/si";

interface Props {
  onBookNow: () => void;
}

export default function ContactSection({ onBookNow }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

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

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    const waMsg = encodeURIComponent(`Hi Glamour World! I'm ${name}. ${msg}`);
    window.open(`https://wa.me/918927157579?text=${waMsg}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="fade-in-up flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="font-sans text-sm font-semibold text-gold tracking-[0.25em] uppercase">
              Contact Us
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="fade-in-up delay-100 font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Get <span className="text-primary italic">In Touch</span>
          </h2>
          <p className="fade-in-up delay-200 font-sans text-muted-foreground max-w-xl mx-auto">
            We'd love to hear from you. Book an appointment or reach out with
            any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in-up delay-100">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blush flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    Phone
                  </p>
                  <a
                    href="tel:+918927157579"
                    className="font-sans text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 89271 57579
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.94 0.08 145)" }}
                >
                  <MessageCircle
                    className="w-5 h-5"
                    style={{ color: "oklch(0.45 0.18 145)" }}
                  />
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/918927157579"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 89271 57579 — Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blush flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    Address
                  </p>
                  <p className="font-sans text-muted-foreground">
                    Baruipara, Suri - 731101
                    <br />
                    Birbhum, West Bengal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blush flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    Working Hours
                  </p>
                  <p className="font-sans text-muted-foreground text-sm">
                    Mon – Sat: 9:00 AM – 8:00 PM
                    <br />
                    Sunday: 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://www.facebook.com/share/18FfcPezAi/"
                target="_blank"
                rel="noreferrer"
                data-ocid="contact.facebook.link"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4 text-white" />
              </a>
              <Button
                data-ocid="contact.book_appointment.button"
                onClick={onBookNow}
                className="bg-primary hover:bg-rose-deep text-white font-sans font-semibold rounded-full px-6"
              >
                Book Appointment
              </Button>
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-xs">
              <iframe
                data-ocid="contact.map_marker"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58966.63563327617!2d87.50478!3d23.91433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9b2a4a4a4a4a5%3A0x1234567890abcdef!2sSuri%2C%20Birbhum%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Glamour World Location"
              />
            </div>
          </div>

          <div className="fade-in-up delay-200">
            <div className="bg-petal rounded-2xl p-8 border border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                Send Us a Message
              </h3>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                Or reach out on WhatsApp for a quick response.
              </p>

              <form onSubmit={handleQuickContact} className="space-y-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="font-sans text-sm font-semibold"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name.input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="bg-white border-border"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-phone"
                    className="font-sans text-sm font-semibold"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="contact-phone"
                    data-ocid="contact.phone.input"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 89271 57579"
                    className="bg-white border-border"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-msg"
                    className="font-sans text-sm font-semibold"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-msg"
                    data-ocid="contact.message.textarea"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="How can we help you?"
                    rows={4}
                    className="bg-white border-border resize-none"
                    required
                  />
                </div>
                <Button
                  data-ocid="contact.submit_button"
                  type="submit"
                  className="w-full font-sans font-semibold rounded-full text-white"
                  style={{ backgroundColor: "oklch(0.45 0.18 145)" }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
