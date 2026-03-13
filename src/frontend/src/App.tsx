import AboutSection from "@/components/AboutSection";
import AppointmentModal from "@/components/AppointmentModal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OffersSection from "@/components/OffersSection";
import ServicesSection from "@/components/ServicesSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient();

function GlamourWorldApp() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onBookNow={() => setModalOpen(true)} />
      <main>
        <HeroSection onBookNow={() => setModalOpen(true)} />
        <AboutSection />
        <ServicesSection />
        <OffersSection onBookNow={() => setModalOpen(true)} />
        <GallerySection />
        <ContactSection onBookNow={() => setModalOpen(true)} />
      </main>
      <Footer />
      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlamourWorldApp />
    </QueryClientProvider>
  );
}
