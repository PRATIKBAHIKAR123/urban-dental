import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useState } from "react";
import BookingModal from "../booking/bookingScreen";

export default function OurOffers (){
      const [activeCard, setActiveCard] = useState<number | null>(null);
      const [isBookingOpen, setIsBookingOpen] = useState(false);

  const offers = [
    {
      id: 1,
      title: "Dental Emergency Visit – Just $55",
      subtitle: "Limited Time Offer!",
      description: "Fast Relief, Expert Care – Emergency Treatment You Can Trust!",
      image: "/Images/banners/offer-1.webp",
      badge: "Special Offer",
      buttonText: "Book Now"
    },
    {
      id: 2,
      title: "New Patient Special – Only $79",
      subtitle: "Limited Time Offer!",
      description: "Comprehensive Exams, Cleaning & X-Rays – Your Healthy Smile Starts Here!",
      image: "/Images/banners/offer-2.webp",
      badge: "New Patient",
      buttonText: "Book Now"
    }
  ];

  return (
    <section className="w-full py-2 md:py-6 relative overflow-hidden">
    

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Dentist in Bayonne, NJ | Family & Cosmetic Dental Care
            
          </h1>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "Se Habla Español",
              "Affordable Dental Care", 
              "Convenient Hours"
            ].map((feature, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm border border-primary px-6 py-3 rounded-full shadow-sm">
                <span className="text-primary font-semibold text-lg">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Looking for a dentist in Bayonne, NJ? At Urban Dental & Braces, we combine advanced dental care with a compassionate approach to keep your smile healthy and confident. Conveniently located at <b>393 Avenue C, Bayonne, NJ 07002</b>, we proudly serve families and individuals throughout Bayonne (07002), Greenville (07305), and surrounding communities.
            </p>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {offers.map((offer, index) => (
            <div 
              key={offer.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setActiveCard(offer.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Badge */}
              {/* <div className="absolute top-6 left-6 z-20">
                <div className="bg-gradient-to-r from-primary via-primary-500 to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {offer.badge}
                </div>
              </div> */}

              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
<div className="relative overflow-hidden group w-full h-full">
  <img 
    src={offer.image}
    alt={offer.title}
    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
  />
  <span className="absolute inset-0 bg-emerald-500 opacity-30 transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"></span>
  <span className="absolute inset-0 bg-emerald-500 opacity-30 transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 delay-100"></span>
</div>
                
                {/* Animated Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 transition-opacity duration-500 ${
                  activeCard === offer.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {offer.title}
                    {offer.subtitle && (
                      <span className="block text-lg font-semibold text-primary mt-2">
                        {offer.subtitle}
                      </span>
                    )}
                  </h3>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-primary via-primary-500 to-secondary rounded-full"></div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  {/* <button className="w-full bg-gradient-to-r from-primary via-primary-500 to-primary hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-blue-500/25">
                    <span className="flex items-center justify-center gap-2">
                      {offer.buttonText}
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button> */}
                  <div className="mb-2 flex items-center gap-2 justify-center text-center"><Clock className="w-4 h-4" /> For new patients without insurance</div>
                  <Button className="w-full group relative" onClick={()=>setIsBookingOpen(true)}>
                      
    {offer.buttonText}
  
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-5 md:mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-600">
                  Book your appointment today and discover the difference professional care makes
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={()=>setIsBookingOpen(true)} className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Book Appointment
                </button>
                <a href="tel:+1 (201) 479-2100" className="border-2 border-primary text-primary hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 whitespace-nowrap">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute top-20 left-10 h-12 md:w-64 w-12 md:h-64 bg-secondary/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 h-12 md:w-64 w-12 md:h-64 bg-primary/10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-8 w-16 h-16 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div> */}
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen}/>
    </section>
  );
}