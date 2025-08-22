import { useState } from "react";

export default function Blogs (){
      const [activeCard, setActiveCard] = useState<number | null>(null);

  const offers = [
    {
      id: 1,
      title: "The Best Foods for a Healthy…",
      subtitle: "Limited Time Offer!",
      description: "Your diet plays a significant role in maintaining strong teeth and healthy gums. Certain foods…",
      image: "/Images/banners/The-best-1024x683.jpeg",
      href: "/blog"
    },
    {
      id: 2,
      title: "Why Do My Gums Bleed? Causes,…",
      subtitle: "",
      description: "Bleeding Gums: More Common Than You Think Noticing pink in the sink after brushing or…",
      image: "/Images/Perio Protect Image.webp",
      href: "/blog"
    },
        {
      id: 2,
      title: "Dental Implants vs. Bridges: Which Is…",
      subtitle: "",
      description: "Missing teeth can affect your confidence, oral health, and ability to chew properly. Two of…",
      image: "/Images/Dental Implants.webp",
      href: "/blog"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
    

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Latest Blog Posts
            
          </h1>
          
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {offers.map((offer, index) => (
            <div 
              key={offer.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setActiveCard(offer.id)}
              onMouseLeave={() => setActiveCard(null)}
            >

              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <img 
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Animated Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 transition-opacity duration-500 ${
                  activeCard === offer.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <div className="space-y-4">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight">
                    {offer.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-blue-500/25">
                    <span className="flex items-center justify-center gap-2">
                      Learn More
                    </span>
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
       
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-2 h-2 bg-cyan-400/40 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-8 w-4 h-4 bg-blue-300/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
}