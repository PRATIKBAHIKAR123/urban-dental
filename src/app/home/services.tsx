import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import BookingModal from "../booking/bookingScreen";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ServicesSection() {
  const isMobile = useIsMobile();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({});

  const services = [
    { id: 1, title: "Emergency Dentistry", description: "Urgent oral care services", image: "/Images/Emergency Dentistry.jpg", icon: "/Images/icons/Dental checkup.png", href: "/services/emergency-dentistry" },
    { id: 2, title: "Teeth Whitening", description: "Brighten your smile", image: "/Images/Whitening Veneers.webp", icon: "/Images/icons/teeth-whitening.png", href: "/services/whitening-&-veneers" },
    { id: 3, title: "Orthodontics", description: "Orthodontic correction", image: "/Images/Orthodontics.webp", icon: "/Images/icons/braces (1).png", href: "/services/orthodontics" },
    { id: 4, title: "Root Canal", description: "Save infected teeth", image: "/Images/Root Canal.webp", icon: "/Images/icons/root-canal (1).png", href: "/services/root-canal" },
    { id: 5, title: "Dental Implants", description: "Permanent tooth replacement", image: "/Images/Dental Implants.webp", icon: "/Images/icons/tooth-implant.png", href: "/services/dental-implants" },
    { id: 6, title: "Oral Surgery", description: "Advanced procedures", image: "/Images/Oral Surgery.webp", icon: "/Images/icons/oral surgery.png", href: "/services/oral-surgery" },
    { id: 12, title: "Tooth Extraction", description: "Safe tooth removal", image: "/Images/Tooth Extraction.webp", icon: "/Images/icons/tooth-extraction.png", href: "/services/tooth-extraction" },
    { id: 14, title: "Crowns and Bridges", description: "Restore damaged teeth", image: "/Images/Dental Crown Bridge.webp", icon: "/Images/icons/dental-crown (1).png", href: "/services/crowns-and-bridges" },
    { id: 16, title: "Dental Fillings", description: "Repair cavities", image: "/Images/Dental Fillings.webp", icon: "/Images/icons/tooth-filling.png", href: "/services/fillings" },
  ];

  // Preload images
  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.onload = () => setImagesLoaded(prev => ({ ...prev, [service.image]: true }));
      img.src = service.image;
    });
  }, []);

  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });

  return (
    <section className="relative w-full mt-10 mx-auto px-4">
      <Fade delay={200}>
        <h2 className="text-center text-primary text-3xl md:text-5xl font-extrabold mb-10 tracking-tight">
          Services We Offer
        </h2>
      </Fade>

      <Carousel
        plugins={[autoplay]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative group"
      >
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem
              key={service.id}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative rounded-xl overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl bg-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-52 bg-gray-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transform transition-transform duration-500 hover:scale-105 ${
                      imagesLoaded[service.image] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {!imagesLoaded[service.image] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="flex items-center gap-2 text-primary text-lg font-bold leading-tight mb-1">
                    <img src={service.icon} alt="icon" className="w-6 h-6" />
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <Link
                    href={service.href}
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition" />
      </Carousel>

      {/* CTA */}
      <Fade delay={200}>
        <h2 className="text-center text-3xl md:text-5xl font-extrabold my-10">
          Experiencing a dental emergency?
        </h2>
      </Fade>
      <Fade delay={500}>
        <h4 className="text-center text-md md:text-2xl font-bold mb-5">
          <span className="font-medium">We're here to help -</span> Book an appointment today!
        </h4>
      </Fade>
      <Fade delay={600}>
        <div className="text-center">
          <Button onClick={() => setIsBookingOpen(true)} size="lg">
            Book Appointment
          </Button>
        </div>
      </Fade>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </section>
  );
}