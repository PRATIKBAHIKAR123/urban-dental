import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Blogs (){
      const [activeCard, setActiveCard] = useState<number | null>(null);

  const offers = [
    {
      id: 1,
      title: "Sudden Dental Pain in Bayonne, NJ? : What It Means and How to React",
      subtitle: "Limited Time Offer!",
      description: "Dental pain always seems to strike at the worst possible moment-right before a big meeting, during dinner, or in the middle of the night. For many people in Bayonne, NJ, sudden tooth pain is more than just discomfort-it’s a sign that something serious may be happening inside your mouth. Ignoring it can lead to bigger problems, but knowing how to react can save both your smile and your sanity.",
      image: "/Images/Blogs/Emergency Dental Pain Bayonne.webp",
      href: "/blog"
    },
    {
      id: 2,
      title: "5 Common Mistakes Bayonne Dentists Want You to Avoid in Oral Care | Urban Dental",
      subtitle: "",
      description: "Let’s be honest-most of us think brushing twice a day is enough to keep our teeth healthy. But oral care goes way beyond just brushing. Even the smallest mistakes can snowball into painful, expensive dental problems. That’s why trusted dentists in Bayonne at Urban Dental & Braces are sharing the most common mistakes patients make and how you can avoid them.",
      image: "/Images/Blogs/5 Common Mistakes Bayonne Dentists Want You to Avoid in Oral Care.webp",
      href: "/blog"
    },
        {
      id: 2,
      title: "How Urban Dental in Bayonne, NJ Makes Root Canal Treatments Stress-Free",
      subtitle: "",
      description: "The truth is, hearing the words “root canal” alone is enough to make many people feel anxious. Many picture a long, painful dental appointment, but that’s a myth that’s long outdated. Thanks to modern tools and methods, a root canal feels no more intimidating than a simple filling. At Urban Dental in Bayonne, NJ, we specialize in turning this once-feared procedure into a simple, painless, and even positive experience.",
      image: "/Images/Blogs/Root Canal Treatment Bayonne.webp",
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
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight line-clamp-2">
                    {offer.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-2">
                    {offer.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <Link href={`/dental-blog/${offer.href}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          Continue Reading
                          <svg 
                            className="w-4 h-4 ml-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        </Button>
                      </Link>
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